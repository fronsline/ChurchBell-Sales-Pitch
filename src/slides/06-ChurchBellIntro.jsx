import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserGroupIcon, Money01Icon, ChartBarIncreasingIcon, SmartPhone01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, GradientHeading, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const pillars = [
  { icon: UserGroupIcon, title: 'Member Management', desc: 'Complete family and individual member records' },
  { icon: Money01Icon, title: 'Finance & Accounting', desc: 'Receipts, ledgers, and reports — automated' },
  { icon: ChartBarIncreasingIcon, title: 'Records & Reports', desc: 'Instant reports at the click of a button' },
  { icon: SmartPhone01Icon, title: 'Mobile Access', desc: 'Manage your church from anywhere' },
];

export default function ChurchBellIntro() {
  return (
    <div className="slide-center">
      <motion.img
        src="/images/logo-color.png"
        alt="ChurchBell"
        style={{ height: 160, marginBottom: 24 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <FadeUpText delay={0.3}>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 48, maxWidth: 600 }}>
          A comprehensive, cloud-based church management system
        </p>
      </FadeUpText>

      <StaggerContainer delay={0.7} staggerDelay={0.12} className="feature-grid feature-grid-4" style={{ maxWidth: 1000 }}>
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <GlassCard delay={0} style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
                <HugeiconsIcon icon={pillar.icon} size={44} color="#7367F0" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{pillar.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
