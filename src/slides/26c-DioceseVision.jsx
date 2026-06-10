import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ChurchIcon, HierarchySquare01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const churches = ['St. John\'s', 'Emmanuel', 'Christ Church', 'Redeemer\'s Church', 'St. Matthew\'s'];

const flows = [
  { up: 'Assessments & assessable income roll up automatically', },
  { up: 'Properties, staff & children records consolidate centrally' },
  { up: 'The same trusted ChurchBell — now at the diocese level' },
];

export default function DioceseVision() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 10 }}>
          One Platform, <span className="gradient-text">From Parish to Diocese</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 40, color: 'var(--text-muted)', maxWidth: 680 }}>
          Every ChurchBell parish already runs on one connected system. The Diocese app sits above them all —
          giving the Bishop a single, live view of the whole diocese.
        </p>
      </FadeUpText>

      {/* Diocese node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: 'flex', alignItems: 'center', gap: 14, padding: '18px 36px',
          background: 'var(--gradient-primary)', color: 'white', borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-glow)', marginBottom: 8,
        }}
      >
        <HugeiconsIcon icon={HierarchySquare01Icon} size={30} color="white" strokeWidth={1.6} />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: '1.15rem' }}>Diocese Office</div>
          <div style={{ fontSize: '0.78rem', opacity: 0.9 }}>Bishop's single source of truth</div>
        </div>
      </motion.div>

      {/* Connector */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        style={{ width: 2, height: 28, background: 'var(--primary)', opacity: 0.4, transformOrigin: 'top' }}
      />

      {/* Church nodes */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 820 }}>
        {churches.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.85 + i * 0.1 }}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              padding: '16px 22px', background: 'rgba(255,255,255,0.8)',
              border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)',
            }}
          >
            <HugeiconsIcon icon={ChurchIcon} size={26} color="var(--primary)" strokeWidth={1.5} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-heading)' }}>{c}</span>
          </motion.div>
        ))}
      </div>

      <FadeUpText delay={1.5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 34 }}>
          {flows.map((f) => (
            <span key={f.up} style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
              ↑ {f.up}
            </span>
          ))}
        </div>
      </FadeUpText>
    </div>
  );
}
