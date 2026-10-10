import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Coins01Icon, Tick01Icon, ArrowRight01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Receipts & Payments, Day Book, Trial Balance and Account Statistics across every church',
  'One standard chart of ledgers with fixed codes, so every church adds up the same way',
  'The diocese groups ledgers its own way on the Receipts & Payments statement',
  'Drill from the diocese total to a church, and down to a single receipt where the church shares it',
  'Filter by church, period or ledger; export to Excel or PDF',
  'No waiting for year-end: the figures update as churches enter receipts',
];

const rows = [
  { ledger: 'Offertory', code: 'INC_OFFERTORY', amount: '48,20,000' },
  { ledger: 'Subscription', code: 'INC_SUBSCRIPTION', amount: '21,40,000' },
  { ledger: 'Thanks Offertory', code: 'INC_THANKS_OFFERTORY', amount: '12,90,000' },
  { ledger: 'Marriage Fees', code: 'INC_MARRIAGE_FEES', amount: '7,60,000' },
];

export default function DioceseFinance() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Finance: <span className="gradient-text">The Whole Diocese, Consolidated</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            The four reports the Treasurer lives by, across every church, built from the receipts each
            church already enters. No collecting statements, no retyping.
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
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 440, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 24px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Coins01Icon} size={18} color="white" strokeWidth={1.5} /> Receipts &amp; Payments
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              FY 2025–26
            </span>
          </div>

          {/* Totals strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            <div style={{ padding: '12px 0', textAlign: 'center', borderRight: '1px solid var(--line)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--success)' }}>₹2.41 Cr</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Receipts</div>
            </div>
            <div style={{ padding: '12px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--alert)' }}>₹1.88 Cr</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Payments</div>
            </div>
          </div>

          {/* Column header */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1.15fr 1.45fr 0.9fr', padding: '10px 22px',
            background: 'var(--bg-shade1)', fontSize: '0.64rem', fontWeight: 600,
            color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em',
          }}>
            <span>Standard Ledger</span>
            <span>Code</span>
            <span style={{ textAlign: 'right' }}>Amount</span>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <motion.div
              key={r.code}
              style={{
                display: 'grid', gridTemplateColumns: '1.15fr 1.45fr 0.9fr', alignItems: 'center',
                padding: '11px 22px', borderBottom: '1px solid var(--line)', fontSize: '0.82rem',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <span style={{ fontWeight: 500, color: 'var(--text-heading)' }}>{r.ledger}</span>
              <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: 'var(--primary)', fontWeight: 600 }}>{r.code}</span>
              <span style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>₹{r.amount}</span>
            </motion.div>
          ))}

          {/* Drill hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '11px 0', background: 'var(--primary-bg)', fontSize: '0.76rem',
              color: 'var(--primary)', fontWeight: 600,
            }}
          >
            Tap any line to drill into the church, then the receipt
            <HugeiconsIcon icon={ArrowRight01Icon} size={15} color="var(--primary)" />
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}
