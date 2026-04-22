import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
  const mesh = useRef();
  const count = 600;

  const [positions, colors] = useMemo(() => {
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
    return [pos, col];
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.12;
    const posArray = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] += Math.sin(time + i * 0.1) * 0.0015;
      posArray[i3] += Math.cos(time + i * 0.05) * 0.0008;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.03;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
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
