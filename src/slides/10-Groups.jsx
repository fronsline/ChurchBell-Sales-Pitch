import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserGroupIcon, Location01Icon, FilterIcon, BellDotIcon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

export default function Groups() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 48 }}>
          Groups — <span className="gradient-text">Organize Your Congregation</span>
        </h2>
      </FadeUpText>

      <StaggerContainer delay={0.3} staggerDelay={0.15} className="feature-grid" style={{ maxWidth: 900, gridTemplateColumns: '1fr 1fr' }}>
        <StaggerItem>
          <GlassCard style={{ textAlign: 'center', padding: '36px 28px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <HugeiconsIcon icon={UserGroupIcon} size={44} color="#7367F0" strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 10 }}>Member Groups</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
              Fellowships, ministries, and teams. A member can belong to multiple groups.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
              {['Youth', 'Women', 'Men', 'Choir', 'Sunday School', 'Prayer'].map((g) => (
                <span key={g} className="tag tag-primary" style={{ fontSize: '0.72rem' }}>{g}</span>
              ))}
            </div>
          </GlassCard>
        </StaggerItem>

        <StaggerItem>
          <GlassCard style={{ textAlign: 'center', padding: '36px 28px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <HugeiconsIcon icon={Location01Icon} size={44} color="#7367F0" strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 10 }}>Area Groups</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
              Geographic zones for house visits and carol rounds. One area per member.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
              {['North', 'South', 'East', 'West'].map((g) => (
                <span key={g} className="tag" style={{ fontSize: '0.72rem', background: 'var(--bg-shade1)', color: 'var(--text-heading)' }}>
                  Zone — {g}
                </span>
              ))}
            </div>
          </GlassCard>
        </StaggerItem>
      </StaggerContainer>

      <FadeUpText delay={0.8}>
        <div style={{ display: 'flex', gap: 24, marginTop: 36 }}>
          {[
            { icon: FilterIcon, text: 'Filter members & reports by group' },
            { icon: BellDotIcon, text: 'Send notifications to specific groups' },
            { icon: UserGroupIcon, text: 'Bulk assign members to groups' },
          ].map((f) => (
            <div key={f.text} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: '0.82rem', color: 'var(--text-secondary)',
            }}>
              <HugeiconsIcon icon={f.icon} size={16} color="#7367F0" />
              {f.text}
            </div>
          ))}
        </div>
      </FadeUpText>
    </div>
  );
}
