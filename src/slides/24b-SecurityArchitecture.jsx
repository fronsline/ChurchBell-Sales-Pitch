import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  LaptopIcon, SmartPhone01Icon, LockKeyIcon, ShieldKeyIcon, DatabaseRestoreIcon, Message01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const L = (n) => `/images/tech/${n}.svg`;

// ---- Canvas coordinate system (logical px) ----
// Everything here is the live production setup as recorded in ChurchBell/docs/platform.md.
const W = 1160;
const H = 700;

// ---- Nodes (cx, cy = centre) ----
const N = {
  browser:   { cx: 410,  cy: 40,  hi: LaptopIcon,        label: 'Web Browser',      sub: 'Church & Diocese apps' },
  mobile:    { cx: 590,  cy: 40,  hi: SmartPhone01Icon,  label: 'Mobile App',       sub: 'Flutter · Android & iOS' },
  cloudflare:{ cx: 500,  cy: 126, logo: 'cloudflare',    label: 'Cloudflare',       sub: 'DNS · TLS · DDoS protection' },
  github:    { cx: 1048, cy: 128, logo: 'github',        label: 'GitHub Actions',   sub: 'CI/CD · tests · image build' },
  alb:       { cx: 318,  cy: 250, logo: 'elb',           label: 'Load Balancer',    sub: 'ALB · HTTPS 443 · ACM TLS' },
  angular:   { cx: 152,  cy: 360, logo: 'angular',       label: 'Church App',       sub: 'Angular · nginx' },
  next:      { cx: 318,  cy: 360, logo: 'nextdotjs',     label: 'Diocese App',      sub: 'Next.js' },
  nest:      { cx: 510,  cy: 360, logo: 'nestjs',        label: 'Backend API',      sub: 'NestJS · Node 22' },
  redis:     { cx: 220,  cy: 513, logo: 'elasticache',   label: 'ElastiCache',      sub: 'Redis · queues & sessions' },
  mongo:     { cx: 470,  cy: 513, logo: 'mongodb',       label: 'MongoDB',          sub: 'on EC2 · gp3' },
  backup:    { cx: 160,  cy: 632, hi: DatabaseRestoreIcon, label: 'Backup Job',     sub: 'ECS scheduled task · nightly' },
  ecr:       { cx: 791,  cy: 250, w: 216, logo: 'docker',        label: 'Amazon ECR',       sub: 'container images' },
  secrets:   { cx: 791,  cy: 322, w: 216, hi: LockKeyIcon,       label: 'Secrets Manager',  sub: 'keys & passwords' },
  s3files:   { cx: 791,  cy: 394, w: 216, logo: 's3',            label: 'Amazon S3',        sub: 'files · receipts · PDFs' },
  s3backup:  { cx: 791,  cy: 466, w: 216, logo: 's3',            label: 'S3 Backups',       sub: 'encrypted · kept 30 days' },
  iam:       { cx: 791,  cy: 538, w: 216, logo: 'iam',           label: 'AWS IAM',          sub: 'a role for each service' },
  cloudwatch:{ cx: 791,  cy: 610, w: 216, logo: 'cloudwatch',    label: 'CloudWatch',       sub: 'logs · 10 alarms → SNS' },
  guardduty: { cx: 1048, cy: 262, w: 180, hi: ShieldKeyIcon,     label: 'GuardDuty',        sub: 'threat detection' },
  newrelic:  { cx: 1048, cy: 340, w: 180, logo: 'newrelic',      label: 'New Relic',        sub: 'APM & tracing' },
  whatsapp:  { cx: 1048, cy: 492, w: 180, hi: Message01Icon,     label: 'WhatsApp Cloud',   sub: 'receipts · wishes' },
  sms:       { cx: 1048, cy: 562, w: 180, hi: Message01Icon,     label: 'MSG91 · SendGrid', sub: 'SMS · email' },
  fcm:       { cx: 1048, cy: 632, w: 180, hi: Message01Icon,     label: 'Firebase',         sub: 'push alerts' },
};

// ---- Edges: orthogonal (right-angle) routes. Each is an explicit polyline so
// that multiple links leaving one box exit as separate, parallel lines. ----
const EDGES = [
  { pts: [[410, 64], [410, 88], [470, 88], [470, 102]] },               // browser -> cloudflare
  { pts: [[590, 64], [590, 88], [530, 88], [530, 102]] },               // mobile -> cloudflare
  { pts: [[500, 150], [500, 192], [318, 192], [318, 226]] },            // cloudflare -> alb
  { pts: [[270, 274], [270, 298], [152, 298], [152, 336]] },            // alb -> church app
  { pts: [[318, 274], [318, 336]] },                                    // alb -> diocese app
  { pts: [[366, 274], [366, 298], [510, 298], [510, 334]] },            // alb -> api
  { pts: [[450, 386], [450, 444], [220, 444], [220, 491]] },            // api -> redis
  { pts: [[490, 386], [490, 452], [470, 452], [470, 491]] },            // api -> mongo
  { pts: [[470, 537], [470, 592], [160, 592], [160, 610]] },            // mongo -> backup job
  { pts: [[255, 632], [670, 632], [670, 466], [708, 466]] },            // backup job -> s3 backups
  { pts: [[589, 342], [652, 342], [652, 394], [711, 394]] },            // api -> s3 files
  { pts: [[589, 366], [930, 366], [930, 492], [963, 492]], color: '#82868B' }, // api -> messaging
  { pts: [[1048, 152], [1048, 190], [791, 190], [791, 228]], color: '#28C76F' },  // github -> ecr
  { pts: [[716, 250], [644, 250], [644, 330], [620, 330]], color: '#28C76F', dashed: true }, // ecr -> ecs (deploy)
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
          ...(n.w ? { width: n.w, boxSizing: 'border-box' } : {}),
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
      </div>
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
      // The deck may zoom the whole stage (fit-to-screen); measure in stage pixels, not screen pixels.
      const stage = document.querySelector('.deck-stage');
      const zoom = parseFloat(stage?.style.zoom) || 1;
      const availW = window.innerWidth / zoom - 280;  // slide padding + breathing room so edge nodes never clip
      const availH = window.innerHeight / zoom - 250;  // room for the header AND the bottom nav bar
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
          Under the Hood: <span className="gradient-text">Built on Amazon Web Services</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 10, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
          How ChurchBell runs, layer by layer: Cloudflare at the edge, Amazon Web Services in Mumbai (ap-south-1).
        </p>
      </FadeUpText>

      <div style={{ width: '100%', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      {/* sizer occupies the scaled footprint (centred); inner scales from top-left to fill it */}
      <div style={{ width: W * scale, height: H * scale, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {/* Regions (z0) */}
        <Region x={20} y={176} w={920} h={518} label="AWS CLOUD · MUMBAI (ap-south-1)" icon="aws" color="#E88B00" tint="rgba(255,153,0,0.035)" delay={0.3} />
        <Region x={38} y={206} w={600} h={478} label="VPC 172.31.0.0/16 · 3 AVAILABILITY ZONES · SECURITY GROUPS" icon="vpc" color="#7367F0" delay={0.4} />
        <Region x={56} y={316} w={564} h={118} label="AMAZON ECS · FARGATE CLUSTER" icon="ecs" color="#7367F0" delay={0.45} />
        <Region x={56} y={470} w={564} h={86} label="DATA TIER" color="#7367F0" dashed delay={0.55} />
        <Region x={660} y={206} w={262} h={478} label="AWS MANAGED SERVICES" color="#E88B00" dashed delay={0.6} />
        <Region x={950} y={210} w={196} h={180} label="SECURITY & MONITORING" color="#82868B" dashed delay={0.7} />
        <Region x={950} y={444} w={196} h={240} label="MESSAGING" color="#82868B" dashed delay={0.75} />

        {/* Edges (z1) */}
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          {EDGES.map((e, i) => (
            <Edge key={i} {...e} i={i} />
          ))}
        </svg>

        {/* Nodes (z3): Backend API is rendered separately */}
        {nodeOrder.filter((id) => id !== 'nest').map((id, i) => (
          <Node key={id} n={N[id]} delay={0.5 + i * 0.045} />
        ))}
        <AutoscaleNode n={N.nest} delay={0.78} />

      </div>
      </div>
      </div>
    </div>
  );
}
