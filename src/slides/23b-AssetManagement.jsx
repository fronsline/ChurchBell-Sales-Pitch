import { HugeiconsIcon } from '@hugeicons/react';
import {
  Building01Icon, DocumentAttachmentIcon, Shield01Icon,
  Settings01Icon, ChartBarIncreasingIcon, FileExportIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  { icon: Building01Icon, title: 'Asset Register', desc: 'Every item the church owns: cost, location, condition, status and full history' },
  { icon: DocumentAttachmentIcon, title: 'Bills & Warranty Cards', desc: 'Keep the purchase bill and warranty card with each asset, always findable' },
  { icon: Shield01Icon, title: 'Warranty Tracking', desc: 'Know when each warranty ends; log every claim until it is fixed' },
  { icon: ChartBarIncreasingIcon, title: 'Depreciation', desc: 'Today’s book value worked out for you (straight-line)' },
  { icon: FileExportIcon, title: 'Asset Summary & Reports', desc: 'Totals by status, condition and category; register, service history and maintenance cost in Excel' },
  { icon: Settings01Icon, title: 'Service Records', desc: 'Log preventive, breakdown, inspection and part-replacement work. See when the next service is due' },
];

const statuses = ['In Use', 'In Storage', 'Under Repair', 'Disposed', 'Donated', 'Lost'];

export default function AssetManagement() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Asset Management: <span className="gradient-text">Track Every Asset</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 40, color: 'var(--text-muted)', maxWidth: 600 }}>
          Chairs, sound system, organ, vehicles: from purchase to disposal, every item accounted for
        </p>
      </FadeUpText>

      {/* All 6 cards in a single grid with row gap */}
      <StaggerContainer delay={0.3} staggerDelay={0.1} style={{ display: 'grid', maxWidth: 950, width: '100%', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 24, columnGap: 20, alignItems: 'stretch' }}>
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <GlassCard style={{ textAlign: 'center', padding: '28px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <HugeiconsIcon icon={f.icon} size={40} color="#7367F0" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Status badges */}
      <FadeUpText delay={1.0}>
        <div style={{
          marginTop: 32, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginRight: 4 }}>Asset Statuses:</span>
          {statuses.map((s) => (
            <span key={s} className="tag tag-primary" style={{ fontSize: '0.7rem' }}>{s}</span>
          ))}
        </div>
      </FadeUpText>
    </div>
  );
}
