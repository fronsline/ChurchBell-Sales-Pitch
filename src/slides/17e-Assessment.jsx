import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { Tick01Icon, TaxesIcon } from '@hugeicons-pro/core-stroke-rounded';

const features = [
  'This year\'s assessment from your diocese: yearly amount, monthly fund, paid and balance due',
  'Month-by-month dues and the annual funds, each with its status',
  'Record a cheque or DD payment; the diocese confirms it',
  'Download the assessment letter, and see every past year',
  'Diocese not on ChurchBell yet? Work out your own assessment from your income heads',
];

const tiles = [
  { label: 'Yearly assessment', value: '₹1,44,000', color: 'var(--text-heading)' },
  { label: 'Monthly fund', value: '₹12,000', color: 'var(--text-heading)' },
  { label: 'Paid', value: '₹60,000', color: 'var(--success)' },
  { label: 'Balance due', value: '₹84,000', color: 'var(--alert)' },
];

const months = [
  { month: 'Jul 2026', status: 'Paid', paid: true },
  { month: 'Aug 2026', status: 'Paid', paid: true },
  { month: 'Sep 2026', status: 'Due', paid: false },
];

export default function ChurchAssessment() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Diocesan Assessment: <span className="gradient-text">Always Know Where You Stand</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            No more letters back and forth to find out what is due. Your church and your diocese see the same figures.
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
          <div style={{
            background: 'var(--gradient-primary)', padding: '14px 22px', color: 'white',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <HugeiconsIcon icon={TaxesIcon} size={20} color="white" />
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>2026–2027 Assessment</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            {tiles.map((t, i) => (
              <div key={t.label} style={{
                padding: '12px 0', textAlign: 'center',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
              }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: t.color }}>{t.value}</div>
                <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.label}</div>
              </div>
            ))}
          </div>

          <div style={{
            padding: '10px 22px', background: 'var(--bg-shade1)', fontSize: '0.66rem', fontWeight: 600,
            color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'left',
          }}>
            Monthly dues
          </div>
          {months.map((m, i) => (
            <motion.div
              key={m.month}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '11px 22px', borderBottom: i < months.length - 1 ? '1px solid var(--line)' : 'none',
                fontSize: '0.83rem',
              }}
            >
              <span style={{ fontWeight: 500, color: 'var(--text-heading)' }}>{m.month}</span>
              <span style={{ color: 'var(--text-secondary)' }}>₹12,000</span>
              <span className="tag" style={{
                fontSize: '0.62rem', padding: '3px 8px',
                background: m.paid ? '#E8FFF0' : 'var(--primary-bg)',
                color: m.paid ? 'var(--success)' : 'var(--alert)',
              }}>
                {m.status}
              </span>
            </motion.div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
