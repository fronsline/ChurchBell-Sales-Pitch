import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ChurchIcon, HierarchySquare01Icon, Rocket01Icon, CloudServerIcon, ChartIncreaseIcon, UserMultiple02Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const W = 980;
const H = 260;

const SRC = { x: 258, y: 130 };
const CB = { x: 723, y: 64 };
const DIO = { x: 720, y: 196 };
const JUNC = 472; // x where the trunk branches

function Card({ cx, cy, width, delay, children, accent }) {
  return (
    <div style={{ position: 'absolute', left: cx, top: cy, transform: 'translate(-50%, -50%)', width, zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        style={{
          background: 'white', border: `1.5px solid ${accent || 'var(--line)'}`,
          borderRadius: 16, boxShadow: 'var(--shadow-md)', padding: '14px 18px', textAlign: 'left',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function Flow({ d, label, lx, ly, delay }) {
  return (
    <>
      <path d={d} stroke="#28C76F" strokeOpacity={0.18} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path
        d={d} stroke="#28C76F" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 12"
        initial={{ strokeDashoffset: 0, opacity: 0 }}
        animate={{ strokeDashoffset: [0, -36], opacity: 1 }}
        transition={{ strokeDashoffset: { duration: 1.1, repeat: Infinity, ease: 'linear' }, opacity: { duration: 0.4, delay } }}
      />
      <foreignObject x={lx - 70} y={ly - 16} width={140} height={32}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1E9E5A', background: 'white', border: '1px solid #BDF0D0', padding: '3px 10px', borderRadius: 100 }}>{label}</span>
        </div>
      </foreignObject>
    </>
  );
}

const Money = ({ big, sub, color = 'var(--text-heading)' }) => (
  <>
    <div style={{ fontSize: '1.45rem', fontWeight: 800, color, lineHeight: 1, marginTop: 8 }}>{big}</div>
    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: 3 }}>{sub}</div>
  </>
);

const Head = ({ icon, img, title, desc, bg = 'var(--primary-bg)', col = '#7367F0' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {img ? <img src={img} alt="" style={{ width: 30, height: 30, objectFit: 'contain' }} /> : <HugeiconsIcon icon={icon} size={20} color={col} strokeWidth={1.7} />}
    </div>
    <div>
      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>{title}</div>
      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{desc}</div>
    </div>
  </div>
);

function FeeBox({ icon, amount, period, title, sub, free, delay }) {
  const accent = free ? 'var(--success)' : 'var(--primary)';
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}
      style={{
        display: 'flex', alignItems: 'center', gap: 13, padding: '15px 20px', background: 'white',
        border: `1.5px solid ${free ? '#BDF0D0' : 'var(--line)'}`, borderRadius: 16, boxShadow: 'var(--shadow-sm)', textAlign: 'left',
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 11, flexShrink: 0,
        background: free ? 'linear-gradient(135deg, #38D98A 0%, #1Fae68 100%)' : 'var(--gradient-primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <HugeiconsIcon icon={icon} size={22} color="white" strokeWidth={1.7} />
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
          <span style={{ fontSize: '1.3rem', fontWeight: 800, color: accent }}>{amount}</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{period}</span>
          {free && <span style={{ fontSize: '0.58rem', fontWeight: 800, color: 'white', background: 'var(--success)', padding: '2px 8px', borderRadius: 100 }}>FREE</span>}
        </div>
        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading)', marginTop: 1 }}>{title}</div>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{sub}</div>
      </div>
    </motion.div>
  );
}

export default function DiocesePricing() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.05}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 10,
          padding: '6px 15px', borderRadius: 100, background: 'var(--primary-bg)',
        }}>
          <HugeiconsIcon icon={UserMultiple02Icon} size={15} color="#7367F0" strokeWidth={1.9} />
          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.06em' }}>OPTION 2 · PER-MEMBER MODEL</span>
        </div>
      </FadeUpText>
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          Pricing for the <span className="gradient-text">Diocese</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 16, color: 'var(--text-muted)', maxWidth: 760, fontSize: '0.95rem' }}>
          Every church pays a small per-member fee. The diocese keeps a share to fund its own operations.
          Example below: a single 500-member church.
        </p>
      </FadeUpText>

      {/* Flow diagram */}
      <div style={{ position: 'relative', width: W, height: H, maxWidth: '100%', flexShrink: 0 }}>
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Flow
            d={`M ${SRC.x} ${SRC.y} L ${JUNC} ${SRC.y} L ${JUNC} ${CB.y} L ${CB.x} ${CB.y}`}
            label="₹3 / member" lx={(JUNC + CB.x) / 2} ly={CB.y - 28} delay={0.7}
          />
          <Flow
            d={`M ${SRC.x} ${SRC.y} L ${JUNC} ${SRC.y} L ${JUNC} ${DIO.y} L ${DIO.x} ${DIO.y}`}
            label="₹2 / member" lx={(JUNC + DIO.x) / 2} ly={DIO.y + 28} delay={0.85}
          />
        </svg>

        {/* Church (source) */}
        <Card cx={142} cy={130} width={252} delay={0.4}>
          <Head icon={ChurchIcon} title="A Parish Church" desc="500 members" />
          <Money big="₹2,500 / mo" sub="₹5 per member" color="var(--text-heading)" />
        </Card>

        {/* ChurchBell */}
        <Card cx={848} cy={64} width={250} delay={0.95}>
          <Head img="/images/icon-512.png" title="ChurchBell" desc="Software platform" bg="#F1EEFF" />
          <Money big="₹1,500 / mo" sub="₹3 per member" color="var(--primary)" />
        </Card>

        {/* Diocese ops */}
        <Card cx={848} cy={196} width={250} delay={1.1} accent="#BDF0D0">
          <Head icon={HierarchySquare01Icon} title="The Diocese" desc="Operations fund" bg="#E8FFF0" col="#28C76F" />
          <Money big="₹1,000 / mo" sub="₹2 per member" color="var(--success)" />
        </Card>
      </div>

      {/* Two fee boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, width: '100%', maxWidth: 760, marginTop: 6 }}>
        <FeeBox icon={CloudServerIcon} amount="₹20,000–30,000*" period="/ month" title="Diocese Platform" sub="The diocese app, hosted & maintained" delay={1.25} />
        <FeeBox free icon={Rocket01Icon} amount="₹0" period="one-time" title="Onboarding & Implementation" sub="Migration, setup & training, on us" delay={1.4} />
      </div>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }}
        style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '9px 0 0', maxWidth: 760, textAlign: 'left' }}
      >
        *Diocese Platform fee is subject to change based on the load on our cloud services.
      </motion.p>

      {/* Self-funding insight */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '13px 22px', background: 'var(--primary-bg)', borderRadius: 14, textAlign: 'left', maxWidth: 880, marginTop: 12 }}
      >
        <HugeiconsIcon icon={ChartIncreaseIcon} size={24} color="#28C76F" strokeWidth={1.7} style={{ flexShrink: 0 }} />
        <p style={{ fontSize: '0.86rem', color: 'var(--text-heading)', margin: 0, lineHeight: 1.5 }}>
          At about <strong>10,000–15,000 members</strong>, the diocese's ₹2/member share already covers the platform fee.
          Beyond that, <strong style={{ color: 'var(--primary)' }}>the platform pays for itself</strong>.
        </p>
      </motion.div>
    </div>
  );
}
