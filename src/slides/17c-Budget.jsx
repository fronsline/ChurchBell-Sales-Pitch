import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { Tick01Icon, Target02Icon } from '@hugeicons-pro/core-stroke-rounded';

const features = [
  'Plan the year ledger by ledger. Start from last year\'s figures, not a blank page',
  'Approve it and it locks. Revise with a reason, and the original is kept',
  'Budget vs actual, straight from the receipts and payments you already enter',
  'A year-end forecast, and a "needs attention" list of the lines that are off',
  'Statement in PDF or Excel for the committee, on the web and the phone',
];

const lines = [
  { name: 'Sunday Offering', budget: '₹2,40,000', actual: '₹2,52,300', status: 'On track', bg: 'var(--primary-bg)', color: 'var(--primary)' },
  { name: 'Subscription', budget: '₹3,00,000', actual: '₹2,61,000', status: 'Behind', bg: '#FFECEC', color: 'var(--alert)' },
  { name: 'Electricity', budget: '₹36,000', actual: '₹38,900', status: 'Near limit', bg: '#FFF4E8', color: 'var(--warning)' },
  { name: 'Diocesan Assessment', budget: '₹1,20,000', actual: '₹1,20,000', status: 'Within budget', bg: '#E8FFF0', color: 'var(--success)' },
];

export default function Budget() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Budget: <span className="gradient-text">Plan vs Actual, Always Current</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            At every committee meeting: where are we against the budget, which lines are off, and how will the
            year end? ChurchBell answers all three.
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.35} staggerDelay={0.1} className="flex-col gap-md">
          {features.map((feat) => (
            <StaggerItem key={feat}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--success)" strokeWidth={2} style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{feat}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 460, padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: 'var(--gradient-primary)', padding: '14px 22px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: '0.95rem' }}>
              <HugeiconsIcon icon={Target02Icon} size={20} color="white" /> Budget 2026–2027
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              As of September
            </span>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 8, padding: '10px 22px',
            background: 'var(--bg-shade1)', fontSize: '0.62rem', fontWeight: 600, textAlign: 'left',
            color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em',
          }}>
            <span>Ledger</span>
            <span style={{ textAlign: 'right' }}>Budget to date</span>
            <span style={{ textAlign: 'right' }}>Actual to date</span>
            <span style={{ textAlign: 'center' }}>Status</span>
          </div>

          {lines.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              style={{
                display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 8, alignItems: 'center',
                padding: '11px 22px', borderBottom: '1px solid var(--line)', fontSize: '0.8rem', textAlign: 'left',
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>{l.name}</span>
              <span style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{l.budget}</span>
              <span style={{ textAlign: 'right', color: 'var(--text-heading)', fontWeight: 600 }}>{l.actual}</span>
              <span style={{ textAlign: 'center' }}>
                <span className="tag" style={{ fontSize: '0.6rem', padding: '3px 8px', background: l.bg, color: l.color, whiteSpace: 'nowrap' }}>
                  {l.status}
                </span>
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 22px', background: 'var(--primary-bg)',
            }}
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)' }}>Year-end forecast</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)' }}>Surplus ₹1,18,400</span>
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}
