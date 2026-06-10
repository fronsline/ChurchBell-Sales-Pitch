import { HugeiconsIcon } from '@hugeicons/react';
import {
  Building06Icon, MapsLocation01Icon, LegalDocument01Icon,
  Tree01Icon, FolderDetailsIcon, Coins01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  { icon: Building06Icon, title: 'Complete Register', desc: 'Every plot, building and shop the diocese owns — in one place' },
  { icon: Tree01Icon, title: 'Land & Dimensions', desc: 'Survey number, plot number, area in cents / acres / grounds' },
  { icon: MapsLocation01Icon, title: 'Location & Map', desc: 'GPS-pinned holdings, viewable on a map across the diocese' },
  { icon: Coins01Icon, title: 'Acquisition Details', desc: 'Purchased, gifted or endowment — donor, cost & market value' },
  { icon: LegalDocument01Icon, title: 'Statutory & Insurance', desc: 'Property tax, EB, water IDs and insurance expiry tracked' },
  { icon: FolderDetailsIcon, title: 'Deeds & Documents', desc: 'Title deeds and records stored safely — never lost again' },
];

export default function DioceseProperty() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Diocese Property — <span className="gradient-text">A Permanent Record of the Land</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 40, color: 'var(--text-muted)', maxWidth: 660 }}>
          Land and buildings are the diocese's most valuable — and most vulnerable — asset.
          Every detail, documented and preserved for generations.
        </p>
      </FadeUpText>

      <StaggerContainer delay={0.3} staggerDelay={0.1} style={{ display: 'grid', maxWidth: 980, width: '100%', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 24, columnGap: 20, alignItems: 'stretch' }}>
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <GlassCard style={{ textAlign: 'center', padding: '28px 22px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <HugeiconsIcon icon={f.icon} size={40} color="#7367F0" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '0.98rem', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
