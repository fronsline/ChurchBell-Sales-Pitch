import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { Calendar01Icon, Money01Icon, BalanceScaleIcon, Analytics01Icon, Notebook01Icon, ChartLineData01Icon } from '@hugeicons-pro/core-stroke-rounded';

const reports = [
  { icon: Calendar01Icon, name: 'Day Book', desc: 'All transactions by date', color: '#7367F0' },
  { icon: Money01Icon, name: 'Receipts & Payments', desc: 'Income vs expenditure', color: '#7367F0' },
  { icon: BalanceScaleIcon, name: 'Trial Balance', desc: 'Debit & credit summary', color: '#7367F0' },
  { icon: Analytics01Icon, name: 'Account Statistics', desc: 'Trends & analytics', color: '#7367F0' },
  { icon: Notebook01Icon, name: 'Ledger Report', desc: 'Per-account details', color: '#7367F0' },
  { icon: ChartLineData01Icon, name: 'Income & Expense', desc: 'Profit & loss view', color: '#7367F0' },
];

export default function Reports() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 8 }}>
          Reports — <span className="gradient-text">Ready in Seconds</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 48, color: 'var(--text-muted)' }}>
          Every financial report your church needs, generated instantly
        </p>
      </FadeUpText>

      <StaggerContainer
        staggerDelay={0.12}
        delay={0.3}
        className="feature-grid feature-grid-3"
        style={{ maxWidth: 900 }}
      >
        {reports.map((report, i) => (
          <StaggerItem key={i}>
            <GlassCard
              style={{
                textAlign: 'center',
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: 'var(--primary-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 4,
              }}>
                <HugeiconsIcon icon={report.icon} size={28} color={report.color} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{report.name}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                {report.desc}
              </p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Bottom comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        style={{
          marginTop: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontSize: '1.8rem',
          fontWeight: 700,
        }}
      >
        <span style={{ color: 'var(--text-heading)' }}>Previously:</span>
        <motion.span
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'line-through',
            textDecorationThickness: 3,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Days
        </motion.span>
        <span style={{ color: 'var(--text-muted)', fontSize: '1.4rem' }}>→</span>
        <span style={{ color: 'var(--text-heading)' }}>Now:</span>
        <motion.span
          className="gradient-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, type: 'spring', stiffness: 200 }}
          style={{ fontSize: '2.2rem' }}
        >
          Seconds
        </motion.span>
      </motion.div>
    </div>
  );
}
