import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Notebook01Icon, GridViewIcon, BookOpen01Icon, Tag01Icon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const masters = [
  { icon: Notebook01Icon, color: '#7367F0', label: 'Ledger' },
  { icon: GridViewIcon, color: '#7367F0', label: 'Ledger Group' },
  { icon: BookOpen01Icon, color: '#7367F0', label: 'Bill Book (auto-numbering)' },
  { icon: Tag01Icon, color: '#7367F0', label: 'Asset Categories' },
];

const assetFeatures = [
  'Complete asset register',
  'Document uploads (invoices, warranty)',
  'Service record tracking',
  'Maintenance cost reports',
];

export default function MastersAssets() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>Masters & Asset Management</h2>
      </FadeUpText>
      <FadeUpText delay={0.25}>
        <p style={{ color: 'var(--text-muted)', marginBottom: 40, fontSize: '0.95rem' }}>
          The backbone that makes everything work.
        </p>
      </FadeUpText>

      {/* Masters Section */}
      <FadeUpText delay={0.35}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: 20 }}>Masters</h3>
      </FadeUpText>

      <StaggerContainer delay={0.45} staggerDelay={0.1} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48, maxWidth: 900 }}>
        {masters.map((m) => (
          <StaggerItem key={m.label}>
            <GlassCard delay={0} style={{ padding: '20px 24px', textAlign: 'center', minWidth: 160 }}>
              <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                <HugeiconsIcon icon={m.icon} size={32} color={m.color} />
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{m.label}</div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Asset Management Section */}
      <FadeUpText delay={0.85}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: 20 }}>Asset Management</h3>
      </FadeUpText>

      <GlassCard delay={1.0} style={{ maxWidth: 500, width: '100%', padding: '28px 36px' }}>
        {assetFeatures.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + i * 0.12, duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 0',
              borderBottom: i < assetFeatures.length - 1 ? '1px solid var(--line)' : 'none',
            }}
          >
            <HugeiconsIcon icon={Tick01Icon} size={18} color="#7367F0" />
            <span style={{ fontSize: '0.95rem' }}>{feature}</span>
          </motion.div>
        ))}
      </GlassCard>
    </div>
  );
}
