import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Building01Icon, DocumentAttachmentIcon, Shield01Icon,
  Settings01Icon, ChartBarIncreasingIcon, FileExportIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  { icon: Building01Icon, title: 'Asset Register', desc: 'Track every church property — name, cost, location, condition, and status' },
  { icon: DocumentAttachmentIcon, title: 'Documents', desc: 'Upload invoices, warranty cards, and insurance documents per asset' },
  { icon: Shield01Icon, title: 'Warranty Tracking', desc: 'Track warranty periods, log claims, and monitor resolutions' },
  { icon: ChartBarIncreasingIcon, title: 'Depreciation', desc: 'Auto-calculated book value with straight-line depreciation' },
  { icon: FileExportIcon, title: 'Reports & Export', desc: 'Asset register, service history, and maintenance cost reports' },
  { icon: Settings01Icon, title: 'Service Records', desc: 'Log maintenance — preventive, breakdown, inspection, and parts replaced' },
];

const statuses = ['In Use', 'In Storage', 'Under Repair', 'Disposed', 'Donated'];

export default function AssetManagement() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Asset Management — <span className="gradient-text">Track Every Property</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 40, color: 'var(--text-muted)', maxWidth: 600 }}>
          From purchase to disposal — complete lifecycle tracking for every church asset
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
