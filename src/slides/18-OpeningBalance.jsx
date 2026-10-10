import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import { IconCard } from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { ChartBarIncreasingIcon, ConnectIcon, Analytics01Icon, Calendar01Icon } from '@hugeicons-pro/core-stroke-rounded';

const features = [
  {
    icon: <HugeiconsIcon icon={ChartBarIncreasingIcon} size={28} color="#7367F0" />,
    title: 'Bulk Save All Balances',
    description: 'Enter all ledger balances in one screen and save them together',
    color: '#7367F0',
  },
  {
    icon: <HugeiconsIcon icon={ConnectIcon} size={28} color="#7367F0" />,
    title: 'Auto-Calculate Next Month',
    description: 'Each month\'s closing becomes the next month\'s opening, or fill several months at once',
    color: '#7367F0',
  },
  {
    icon: <HugeiconsIcon icon={Analytics01Icon} size={28} color="#7367F0" />,
    title: 'Cascading Recalculation',
    description: 'Fix a past month and ChurchBell shows, then updates, the months after it',
    color: '#7367F0',
  },
  {
    icon: <HugeiconsIcon icon={Calendar01Icon} size={28} color="#7367F0" />,
    title: 'Month Gap Detection',
    description: 'Alerts you if any months are missing balances',
    color: '#7367F0',
  },
];

export default function OpeningBalance() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 8 }}>
          <span className="gradient-text">Opening Balance</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 48, color: 'var(--text-secondary)', maxWidth: 600, fontSize: '1.1rem' }}>
          No more manual carry-forwards. Set it once, and let ChurchBell handle the rest.
        </p>
      </FadeUpText>

      <StaggerContainer
        staggerDelay={0.15}
        delay={0.3}
        className="feature-grid feature-grid-4"
        style={{ maxWidth: 1000 }}
      >
        {features.map((f, i) => (
          <StaggerItem key={i}>
            <IconCard
              icon={f.icon}
              title={f.title}
              description={f.description}
              delay={0}
              color={f.color}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Visual demo hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          marginTop: 48,
          display: 'flex', alignItems: 'center', gap: 24,
          padding: '16px 28px',
          background: 'var(--primary-bg)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--line)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            padding: '4px 10px', borderRadius: 6,
            background: 'white', border: '1px solid var(--line)',
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-heading)',
          }}>
            Jan
          </span>
          <span style={{ color: 'var(--text-muted)' }}>→</span>
          <span style={{
            padding: '4px 10px', borderRadius: 6,
            background: 'white', border: '1px solid var(--line)',
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-heading)',
          }}>
            Feb
          </span>
          <span style={{ color: 'var(--text-muted)' }}>→</span>
          <span style={{
            padding: '4px 10px', borderRadius: 6,
            background: 'white', border: '1px solid var(--line)',
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-heading)',
          }}>
            Mar
          </span>
          <span style={{ color: 'var(--text-muted)' }}>→</span>
          <span style={{
            padding: '4px 10px', borderRadius: 6,
            background: 'var(--primary)', color: 'white',
            fontSize: '0.8rem', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 4,
          }}>
            Auto <HugeiconsIcon icon={Analytics01Icon} size={14} color="white" />
          </span>
        </div>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          Balances cascade automatically
        </span>
      </motion.div>
    </div>
  );
}
