import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { LaptopIcon, SmartPhone01Icon, AiBrain01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const L = (n) => `/images/tech/${n}.svg`;

// ---- Canvas coordinate system (logical px) ----
const W = 1240;
const H = 660;

// ---- Nodes (cx, cy = centre) ----
const N = {
  browser:  { cx: 502, cy: 44,  hi: LaptopIcon,       label: 'Web Browser',  sub: 'Church App' },
  mobile:   { cx: 678, cy: 44,  hi: SmartPhone01Icon, label: 'Mobile App',   sub: 'Flutter' },
  cloud:    { cx: 590, cy: 138, logo: 'cloudflare',   label: 'Cloudflare',   sub: 'WAF · DDoS · CDN · DNS' },
  alb:      { cx: 590, cy: 256, logo: 'elb',          label: 'Load Balancer', sub: 'ALB · TLS' },
  angular:  { cx: 300, cy: 380, logo: 'angular',      label: 'Church App',   sub: 'Angular' },
  next:     { cx: 472, cy: 380, logo: 'nextdotjs',    label: 'Diocese App',  sub: 'Next.js' },
  nest:     { cx: 648, cy: 380, logo: 'nestjs',       label: 'Backend API',  sub: 'NestJS' },
  fargate:  { cx: 836, cy: 380, logo: 'fargate',      label: 'Fargate',      sub: 'serverless pods' },
  mongo:    { cx: 400, cy: 502, logo: 'mongodb',      label: 'MongoDB',      sub: 'on Amazon EC2' },
  redis:    { cx: 612, cy: 502, logo: 'elasticache',  label: 'ElastiCache',  sub: 'Redis' },
  tailscale:{ cx: 822, cy: 502, logo: 'tailscale',    label: 'Tailscale',    sub: 'tunnel-only DB access' },
  s3:       { cx: 420, cy: 606, logo: 's3',           label: 'Amazon S3',    sub: 'ap-south-1 · primary' },
  crr:      { cx: 736, cy: 606, logo: 's3',           label: 'Amazon S3',    sub: 'ap-south-2 · replica' },
  github:   { cx: 64,  cy: 380, logo: 'github',       label: 'GitHub',       sub: 'CI/CD' },
  newrelic: { cx: 1148, cy: 286, logo: 'newrelic',    label: 'New Relic',    sub: 'APM & alerts' },
  sreagent: { cx: 1148, cy: 410, label: 'SRE AI Agent',  sub: 'Autonomous remediation' },
  cloudwatch:{cx: 1148, cy: 534, logo: 'cloudwatch',  label: 'CloudWatch',   sub: 'logs & metrics' },
};

// ---- Edges: orthogonal (right-angle) routes. Each is an explicit polyline so
// that multiple links leaving one box exit as separate, parallel lines. ----
const EDGES = [
  { pts: [[502, 69], [502, 91], [560, 91], [560, 113]] },              // browser -> cloud
  { pts: [[678, 69], [678, 99], [620, 99], [620, 113]] },              // mobile -> cloud
  { pts: [[590, 163], [590, 231]] },                                    // cloud -> alb
  { pts: [[545, 281], [545, 318], [300, 318], [300, 355]] },            // alb -> angular
  { pts: [[590, 281], [590, 326], [472, 326], [472, 355]] },            // alb -> next
  { pts: [[635, 281], [635, 318], [648, 318], [648, 355]] },            // alb -> nest
  { pts: [[613, 405], [613, 441], [400, 441], [400, 477]] },            // nest -> mongo
  { pts: [[678, 405], [678, 449], [612, 449], [612, 477]] },            // nest -> redis
  { pts: [[380, 527], [380, 554], [420, 554], [420, 581]] },            // mongo -> s3
  { pts: [[504, 606], [652, 606]], color: '#28C76F', dashed: true },    // s3 -> crr (replication)
  { pts: [[123, 380], [225, 380]], color: '#28C76F' },                  // github -> angular (deploy)
  { pts: [[914, 368], [980, 368], [980, 286], [1073, 286]], color: '#82868B' },  // fargate -> new relic
  { pts: [[914, 392], [980, 392], [980, 534], [1069, 534]], color: '#82868B' },  // fargate -> cloudwatch
  { pts: [[1148, 312], [1148, 384]], color: '#4BCBF9' },                          // new relic -> SRE agent (watches)
  { pts: [[1068, 410], [922, 410]], color: '#4BCBF9', dashed: true },             // SRE agent -> ECS cluster (auto-remediate)
];

const ortho = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'} ${p[0]} ${p[1]}`).join(' ');

function Edge({ pts, color = '#7367F0', dashed = false, i }) {
  const d = ortho(pts);
  return (
    <g>
      <path d={d} stroke={color} strokeOpacity={0.16} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path
        d={d} stroke={color} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dashed ? '2 9' : '5 13'}
        initial={{ strokeDashoffset: 0, opacity: 0 }}
        animate={{ strokeDashoffset: [0, -36], opacity: 1 }}
        transition={{
          strokeDashoffset: { duration: 1.1, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 0.4, delay: 0.6 + i * 0.04 },
        }}
      />
    </g>
  );
}

// Outer div centres the node on (cx,cy); inner motion handles entrance (so the
// scale animation never overrides the centring transform).
function Node({ n, delay }) {
  return (
    <div style={{ position: 'absolute', left: n.cx, top: n.cy, transform: 'translate(-50%, -50%)', zIndex: 3 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay, type: 'spring', stiffness: 220 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 9, padding: '9px 13px',
          background: 'white', border: '1px solid var(--line)', borderRadius: 12,
          boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap',
        }}
      >
        {n.logo
          ? <img src={L(n.logo)} alt="" style={{ width: 26, height: 26, objectFit: 'contain', flexShrink: 0 }} />
          : <HugeiconsIcon icon={n.hi} size={24} color="#7367F0" strokeWidth={1.6} />}
        <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>{n.label}</div>
          {n.sub && <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{n.sub}</div>}
        </div>
      </motion.div>
    </div>
  );
}

// Backend API rendered as an auto-scaling pod stack (HPA): replicas behind +
// an animated pod spawning on load + a badge.
function AutoscaleNode({ n, delay }) {
  const CW = 158, CH = 52;
  const ghost = (dx, dy, op) => ({
    position: 'absolute', left: 0, top: 0, width: CW, height: CH,
    transform: `translate(${dx}px, ${dy}px)`,
    background: 'white', border: '1px solid var(--line)', borderRadius: 12,
    boxShadow: 'var(--shadow-sm)', opacity: op,
  });
  return (
    <div style={{ position: 'absolute', left: n.cx, top: n.cy, transform: 'translate(-50%, -50%)', zIndex: 4 }}>
      <div style={{ position: 'relative', width: CW, height: CH }}>
        {/* stacked replicas */}
        <div style={ghost(13, 9, 0.4)} />
        <div style={ghost(7, 5, 0.7)} />
        {/* main pod */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay, type: 'spring', stiffness: 220 }}
          style={{
            position: 'absolute', left: 0, top: 0, width: CW, height: CH,
            display: 'flex', alignItems: 'center', gap: 9, padding: '0 13px',
            background: 'white', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-md)',
          }}
        >
          <img src={L(n.logo)} alt="" style={{ width: 26, height: 26, objectFit: 'contain', flexShrink: 0 }} />
          <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>{n.label}</div>
            <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{n.sub}</div>
          </div>
        </motion.div>
        {/* HPA badge */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.4, duration: 0.4 }}
          style={{
            position: 'absolute', left: '50%', top: CH + 16, transform: 'translateX(-50%)',
            display: 'flex', alignItems: 'center', gap: 5, padding: '4px 10px',
            background: 'var(--primary)', color: 'white', borderRadius: 100,
            fontSize: '0.58rem', fontWeight: 800, whiteSpace: 'nowrap',
            boxShadow: '0 3px 10px rgba(115,103,240,0.35)',
          }}
        >
          ⚡ Auto-scales on load · HPA
        </motion.div>
      </div>
    </div>
  );
}

// The AI SRE Agent — a distinct gradient node that watches New Relic and
// auto-remediates the cluster. Rendered specially so it stands out.
function SreAgentNode({ n, delay }) {
  return (
    <div style={{ position: 'absolute', left: n.cx, top: n.cy, transform: 'translate(-50%, -50%)', zIndex: 4 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200 }}
        style={{
          position: 'relative', display: 'flex', alignItems: 'center', gap: 10, padding: '11px 15px',
          background: 'linear-gradient(135deg, #7367F0 0%, #4BCBF9 100%)', borderRadius: 13,
          boxShadow: '0 8px 28px rgba(75,203,249,0.5)', border: '1.5px solid white', whiteSpace: 'nowrap',
        }}
      >
        {/* soft pulsing halo */}
        <motion.div
          animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.12, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: -4, borderRadius: 16, border: '1.5px solid #4BCBF9', pointerEvents: 'none' }}
        />
        <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <HugeiconsIcon icon={AiBrain01Icon} size={20} color="white" strokeWidth={1.8} />
        </div>
        <div style={{ textAlign: 'left', lineHeight: 1.18 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'white' }}>{n.label}</div>
          <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.92)' }}>{n.sub}</div>
        </div>
        {/* live indicator */}
        <motion.div
          animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ position: 'absolute', top: 7, right: 8, width: 7, height: 7, borderRadius: '50%', background: '#28C76F', boxShadow: '0 0 6px #28C76F' }}
        />
      </motion.div>
    </div>
  );
}

// Region box (behind edges)
function Region({ x, y, w, h, label, icon, color = 'var(--line)', tint = 'transparent', dashed = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      style={{
        position: 'absolute', left: x, top: y, width: w, height: h,
        border: `1.5px ${dashed ? 'dashed' : 'solid'} ${color}`, borderRadius: 16,
        background: tint, zIndex: 0,
      }}
    >
      <span style={{
        position: 'absolute', top: -10, left: 16, background: 'white', padding: '0 9px',
        fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.04em', color,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        {icon && <img src={L(icon)} alt="" style={{ width: 14, height: 14 }} />}
        {label}
      </span>
    </motion.div>
  );
}

const nodeOrder = Object.keys(N);

export default function SecurityArchitecture() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const recompute = () => {
      const availW = window.innerWidth - 280;  // slide padding + breathing room so edge nodes never clip
      const availH = window.innerHeight - 215;  // room for the header AND the bottom nav bar
      setScale(Math.min(availW / W, availH / H, 1.4));
    };
    recompute();
    window.addEventListener('resize', recompute);
    return () => window.removeEventListener('resize', recompute);
  }, []);

  return (
    <div className="slide-center" style={{ justifyContent: 'flex-start', paddingTop: 14 }}>
      <FadeUpText delay={0.05}>
        <h2 style={{ marginBottom: 4, fontSize: '2rem' }}>
          Under the Hood: <span className="gradient-text">Built on AWS, Hardened End to End</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 10, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
          The same platform, seen from the infrastructure side. Every line is live, encrypted traffic.
        </p>
      </FadeUpText>

      <div style={{ width: '100%', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      {/* sizer occupies the scaled footprint (centred); inner scales from top-left to fill it */}
      <div style={{ width: W * scale, height: H * scale, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {/* Regions (z0) */}
        <Region x={150} y={198} w={862} h={448} label="AWS CLOUD · ap-south-1 · VPC · MULTI-AZ" icon="vpc" color="#E88B00" tint="rgba(255,153,0,0.035)" delay={0.3} />
        <Region x={216} y={342} w={706} h={76} label="AMAZON ECS CLUSTER" icon="ecs" color="#7367F0" delay={0.45} />
        <Region x={316} y={468} w={596} h={68} label="PRIVATE SUBNET · NO PUBLIC INGRESS" color="#7367F0" dashed delay={0.6} />

        {/* Edges (z1) */}
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          {EDGES.map((e, i) => (
            <Edge key={i} {...e} i={i} />
          ))}
        </svg>

        {/* Nodes (z3) — Backend API + SRE Agent are rendered separately */}
        {nodeOrder.filter((id) => id !== 'nest' && id !== 'sreagent').map((id, i) => (
          <Node key={id} n={N[id]} delay={0.5 + i * 0.045} />
        ))}
        <AutoscaleNode n={N.nest} delay={0.78} />
        <SreAgentNode n={N.sreagent} delay={1.0} />

        {/* Cross-Region Replication label, centred on the S3 → S3 replica link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            position: 'absolute', left: (N.s3.cx + N.crr.cx) / 2, top: N.s3.cy - 26,
            transform: 'translate(-50%, -50%)', zIndex: 4,
            padding: '4px 11px', background: 'white', border: '1px solid #B6F0CC', borderRadius: 100,
            fontSize: '0.62rem', fontWeight: 700, color: '#1E9E5A', whiteSpace: 'nowrap',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          Cross-Region Replication
        </motion.div>
      </div>
      </div>
      </div>
    </div>
  );
}
