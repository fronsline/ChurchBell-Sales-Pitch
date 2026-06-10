import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Coins01Icon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Assessable income pulled automatically from each church\'s books',
  'Assessment due calculated per church — no manual math',
  'Track every payment received against each church',
  'Pending & outstanding assessment, visible at a glance',
  'Church-wise and year-wise statements, audit-ready',
  'Automated reminders to churches falling behind',
];

const rows = [
  { church: 'St. John\'s', income: '15,20,000', paid: true },
  { church: 'Emmanuel', income: '8,90,000', paid: false },
  { church: 'Christ Church', income: '12,40,000', paid: true },
  { church: 'Redeemer\'s Church', income: '6,10,000', paid: false },
];

export default function Assessment() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Assessment — <span className="gradient-text">Every Rupee Accounted For</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Churches pay assessment to the diocese on their income. ChurchBell tracks what's due, what's paid,
            and what's pending — across the whole diocese, live.
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
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 430, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 24px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Coins01Icon} size={18} color="white" strokeWidth={1.5} /> Assessment 2026
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              42 Churches
            </span>
          </div>

          {/* KPI strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            <div style={{ padding: '12px 0', textAlign: 'center', borderRight: '1px solid var(--line)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--success)' }}>₹18.4L</div>
              <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Collected</div>
            </div>
            <div style={{ padding: '12px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--alert)' }}>₹6.2L</div>
              <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Pending</div>
            </div>
          </div>

          {/* Column header */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1.1fr 0.9fr', padding: '10px 24px',
            background: 'var(--bg-shade1)', fontSize: '0.66rem', fontWeight: 600,
            color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em',
          }}>
            <span>Church</span>
            <span>Assessable</span>
            <span style={{ textAlign: 'right' }}>Status</span>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <motion.div
              key={r.church}
              style={{
                display: 'grid', gridTemplateColumns: '1.4fr 1.1fr 0.9fr', alignItems: 'center',
                padding: '12px 24px', borderBottom: '1px solid var(--line)', fontSize: '0.83rem',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <span style={{ fontWeight: 500, color: 'var(--text-heading)' }}>{r.church}</span>
              <span style={{ color: 'var(--text-secondary)' }}>₹{r.income}</span>
              <span style={{ textAlign: 'right' }}>
                <span className="tag" style={{ fontSize: '0.62rem', padding: '3px 8px', background: r.paid ? '#E8FFF0' : 'var(--primary-bg)', color: r.paid ? 'var(--success)' : 'var(--alert)' }}>
                  {r.paid ? 'Paid' : 'Pending'}
                </span>
              </span>
            </motion.div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
