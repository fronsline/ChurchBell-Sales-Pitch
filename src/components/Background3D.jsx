import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Round sprite so points render as circles, not the default square quads
function makeCircleTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.55, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function ParticleField() {
  const mesh = useRef();
  const count = 600;

  const circleTexture = useMemo(() => makeCircleTexture(), []);

  // `base` keeps the original layout; the live `positions` array only ever
  // oscillates *around* it, so nothing accumulates / drifts / speeds up.
  const [positions, colors, base] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const purple = new THREE.Color('#7367F0');
    const lavender = new THREE.Color('#B4ADFF');
    const cyan = new THREE.Color('#4BCBF9');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const t = Math.random();
      const color = t < 0.5
        ? purple.clone().lerp(lavender, t * 2)
        : lavender.clone().lerp(cyan, (t - 0.5) * 2);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col, pos.slice()];
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.2; // slow, steady
    const posArray = mesh.current.geometry.attributes.position.array;
    const AMP = 0.18; // bounded drift — gentle bob in place
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3] = base[i3] + Math.cos(t + i * 0.4) * AMP;
      posArray[i3 + 1] = base[i3 + 1] + Math.sin(t + i * 0.6) * AMP;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.015; // constant slow spin
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={circleTexture}
        alphaMap={circleTexture}
        vertexColors
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
}

function SoftOrbs() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.children.forEach((orb, i) => {
      orb.position.y = Math.sin(t * 0.25 + i * 2.5) * 2;
      orb.position.x = Math.cos(t * 0.15 + i * 1.8) * 3;
    });
  });

  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[i * 4 - 4, 0, -6]}>
          <sphereGeometry args={[1 + i * 0.3, 32, 32]} />
          <meshBasicMaterial
            color={i === 0 ? '#7367F0' : i === 1 ? '#4BCBF9' : '#B4ADFF'}
            transparent
            opacity={0.04}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
        <SoftOrbs />
      </Canvas>
    </div>
  );
}
