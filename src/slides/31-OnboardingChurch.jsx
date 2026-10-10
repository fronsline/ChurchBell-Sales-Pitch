import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserMultiple02Icon, Invoice01Icon, Calendar03Icon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const steps = [
  {
    icon: UserMultiple02Icon,
    title: 'Import the member list',
    desc: 'Hand us your existing register in Excel, in whatever layout you keep it. We map it and bring in families, contacts and all.',
  },
  {
    icon: Invoice01Icon,
    title: 'Start entering transactions',
    desc: 'Receipts and payments go in as they happen, and every book updates itself behind the scenes.',
  },
  {
    icon: Calendar03Icon,
    title: 'Back-fill from 1 April',
    desc: 'Enter opening balances and this financial year\'s entries, so the church opens with complete, balanced books.',
  },
];

export default function OnboardingChurch() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Onboarding Each <span className="gradient-text">Church</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 44, color: 'var(--text-muted)', maxWidth: 600 }}>
          From a church's first login to a live, balanced book, in three simple moves.
        </p>
      </FadeUpText>

      {/* Horizontal journey track */}
      <div style={{ position: 'relative', maxWidth: 1040, width: '100%', marginBottom: 40 }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 30, left: '16%', right: '16%', height: 3, background: 'var(--line)', transformOrigin: 'left', zIndex: 0 }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 30, left: '16%', right: '16%', height: 3, background: 'var(--gradient-primary)', transformOrigin: 'left', zIndex: 1 }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.25 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 320 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.25, type: 'spring', stiffness: 300 }}
                style={{
                  width: 62, height: 62, borderRadius: '50%', background: 'var(--gradient-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(115, 103, 240, 0.3)', marginBottom: 16, border: '3px solid white',
                  position: 'relative',
                }}
              >
                <HugeiconsIcon icon={s.icon} size={26} color="#fff" strokeWidth={1.6} />
                <span style={{
                  position: 'absolute', top: -6, right: -6, width: 24, height: 24, borderRadius: '50%',
                  background: 'white', border: '2px solid var(--primary)', color: 'var(--primary)',
                  fontSize: '0.7rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{i + 1}</span>
              </motion.div>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-heading)', textAlign: 'center', whiteSpace: 'nowrap' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', margin: 0, lineHeight: 1.6, maxWidth: 260 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Outcome banner */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '14px 26px',
          background: 'var(--primary-bg)', borderRadius: 'var(--radius)',
        }}
      >
        <HugeiconsIcon icon={Tick01Icon} size={22} color="var(--success)" strokeWidth={2} />
        <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-heading)' }}>
          Go live with this year already in the books and the diocese&rsquo;s standard ledgers in place.
        </span>
      </motion.div>
    </div>
  );
}
