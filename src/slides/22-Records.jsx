import { HugeiconsIcon } from '@hugeicons/react';
import { DropletIcon, Bread01Icon, WeddingIcon, FlowerIcon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const records = [
  { icon: DropletIcon, color: '#7367F0', title: 'Baptism', desc: 'Baptism register, with the baptism certificate to print' },
  { icon: Bread01Icon, color: '#7367F0', title: 'Confirmation', desc: 'Confirmation batches and their candidates' },
  { icon: WeddingIcon, color: '#7367F0', title: 'Wedding', desc: 'Banns dates, marriage particulars, before & after banns certificates' },
  { icon: FlowerIcon, color: '#7367F0', title: 'Burial', desc: 'Burial certificate, death certificate on file, linked to the grave plot' },
];

export default function Records() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 12 }}>Church Records: Safe Forever</h2>
      </FadeUpText>

      <FadeUpText delay={0.3}>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 700, marginBottom: 40, fontSize: '1.05rem', lineHeight: 1.7 }}>
          Some churches have records from the 1950s, pages crumbling, ink fading.
          Once it's gone, it's gone.
        </p>
      </FadeUpText>

      <StaggerContainer delay={0.5} staggerDelay={0.12} className="feature-grid" style={{ maxWidth: 1040, gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {records.map((r) => (
          <StaggerItem key={r.title}>
            <GlassCard delay={0} style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center' }}>
                <HugeiconsIcon icon={r.icon} size={40} color={r.color} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{r.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{r.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUpText delay={1.1}>
        <p className="mt-8" style={{ color: '#7367F0', fontWeight: 600, fontSize: '1rem' }}>
          Search by name or date. Export any register to Excel.
        </p>
      </FadeUpText>
    </div>
  );
}
