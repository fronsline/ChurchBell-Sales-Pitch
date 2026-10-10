import { HugeiconsIcon } from '@hugeicons/react';
import {
  Book01Icon, Notebook01Icon, BirthdayCakeIcon, ReceiptIndianRupeeIcon,
  ChartBarIncreasingIcon, UserGroupIcon, PresentationBarChart01Icon,
  Audit01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const steps = [
  { icon: UserGroupIcon, label: 'Member Lists' },
  { icon: Notebook01Icon, label: 'Ledger Book' },
  { icon: ReceiptIndianRupeeIcon, label: 'Receipt Book' },
  { icon: Book01Icon, label: 'Cash Book' },
  { icon: Audit01Icon, label: 'Yearly Audit' },
  { icon: ChartBarIncreasingIcon, label: 'Manual Reports' },
  { icon: BirthdayCakeIcon, label: 'Special Date Preparation' },
  { icon: PresentationBarChart01Icon, label: 'PC Meeting Reports' },
];

export default function HowItWorks() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 48 }}>How Churches Work Today</h2>
      </FadeUpText>

      <StaggerContainer delay={0.3} staggerDelay={0.1} className="feature-grid" style={{ maxWidth: 950, gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {steps.map((step, i) => (
          <StaggerItem key={step.label}>
            <div className="pain-card" style={{ position: 'relative' }}>
              <div style={{ marginBottom: 12 }}>
                <HugeiconsIcon icon={step.icon} size={40} color="#7367F0" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{step.label}</h3>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUpText delay={1.2}>
        <p className="mt-8" style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Every single transaction gets written in multiple books... manually.
        </p>
      </FadeUpText>
    </div>
  );
}
