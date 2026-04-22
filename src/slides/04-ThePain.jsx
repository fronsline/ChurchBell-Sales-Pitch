import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Notebook01Icon, Calendar01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import Counter from '../components/Counter';
import GlassCard from '../components/GlassCard';

const painPoints = [
  {
    value: 5,
    suffix: '+',
    label: 'Ledger Books',
    desc: 'Per transaction, written in multiple books',
    icon: Notebook01Icon,
  },
  {
    value: 2,
    suffix: '+',
    label: 'Hours',
    desc: 'For a single quarterly report',
    icon: Notebook01Icon,
  },
  {
    value: 1,
    suffix: '+',
    label: 'Days',
    desc: 'For annual closure',
    icon: Calendar01Icon,
  },
];

export default function ThePain() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 48 }}>The Real Cost of Manual Work</h2>
      </FadeUpText>

      <StaggerContainer delay={0.3} staggerDelay={0.2} className="feature-grid feature-grid-3" style={{ maxWidth: 800 }}>
        {painPoints.map((point, i) => (
          <StaggerItem key={point.label}>
            <GlassCard delay={0} style={{ textAlign: 'center', padding: '36px 24px' }}>
              <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center' }}>
                <HugeiconsIcon icon={point.icon} size={32} color="var(--primary)" strokeWidth={1.5} />
              </div>
              <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>
                <Counter from={0} to={point.value} suffix={point.suffix} delay={0.3 + i * 0.2} />
              </div>
              <h3 style={{ marginBottom: 8 }}>{point.label}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{point.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUpText delay={1.2}>
        <div
          className="mt-8"
          style={{
            background: 'var(--primary-bg)',
            border: '1px solid #D6D0FF',
            borderRadius: 'var(--radius)',
            padding: '20px 32px',
            maxWidth: 700,
          }}
        >
          <p style={{ color: 'var(--primary)', fontStyle: 'italic', fontSize: '1.05rem' }}>
            "And when a member walks up and asks about their payment history — finding, cross-checking, and consolidating it across multiple books takes hours of effort."
          </p>
        </div>
      </FadeUpText>
    </div>
  );
}
