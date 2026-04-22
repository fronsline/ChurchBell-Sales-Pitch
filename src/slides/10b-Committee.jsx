import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserGroupIcon, Calendar01Icon, CheckListIcon,
  LegalDocument01Icon, FileExportIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  { icon: UserGroupIcon, title: 'Committees & Roles', desc: 'PC, fellowships, finance — with Chairman, Secretary, Treasurer roles' },
  { icon: Calendar01Icon, title: 'Meeting Management', desc: 'Agenda, attendance, quorum — all tracked per meeting' },
  { icon: CheckListIcon, title: 'Action Items', desc: 'Assign tasks, set due dates, auto carry-forward to next meeting' },
  { icon: LegalDocument01Icon, title: 'Resolutions', desc: 'Auto-numbered decisions — Unanimous, Majority, or With Dissent' },
];

export default function Committee() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 48 }}>
          Committee — <span className="gradient-text">From Agenda to Resolution</span>
        </h2>
      </FadeUpText>

      <StaggerContainer delay={0.3} staggerDelay={0.12} className="feature-grid" style={{ maxWidth: 950, gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <GlassCard style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                <HugeiconsIcon icon={f.icon} size={44} color="#7367F0" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUpText delay={0.9}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginTop: 40,
          padding: '14px 28px', background: 'var(--primary-bg)',
          borderRadius: 12, fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500,
        }}>
          <HugeiconsIcon icon={FileExportIcon} size={18} color="#7367F0" />
          Generate Meeting Minutes, Agenda Letter, and Annual Report as PDF — one click
        </div>
      </FadeUpText>
    </div>
  );
}
