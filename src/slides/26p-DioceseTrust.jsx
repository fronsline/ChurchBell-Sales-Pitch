import { HugeiconsIcon } from '@hugeicons/react';
import {
  Share08Icon, UserLock01Icon, FileValidationIcon, SmartPhone01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const pillars = [
  {
    icon: Share08Icon,
    title: 'Churches Choose What to Share',
    points: [
      'Separate switches for members, finance detail, legal, property, events and attendance',
      'Diocese-wide totals still roll up for reports',
    ],
  },
  {
    icon: UserLock01Icon,
    title: 'Officers See Only Their Work',
    points: [
      'Give each officer view or manage, module by module',
      'Access can end on a date, and can be paused or removed in one place',
    ],
  },
  {
    icon: FileValidationIcon,
    title: 'Every Action on the Record',
    points: [
      'A tamper-evident log of every change, checked automatically every night',
      'Instant alerts on critical actions, and a weekly summary every Sunday',
    ],
  },
  {
    icon: SmartPhone01Icon,
    title: 'The Diocese in Your Pocket',
    points: [
      'Officers get a diocese view in the ChurchBell app',
      'Assessment, finance, members, property, legal, mail and circulars on the phone',
    ],
  },
];

export default function DioceseTrust() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Trust, <span className="gradient-text">Built In</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 36, color: 'var(--text-muted)', maxWidth: 680 }}>
          A diocese holds sensitive information about its people, money and land. ChurchBell keeps it
          in the right hands, and shows who did what.
        </p>
      </FadeUpText>

      <StaggerContainer
        delay={0.3}
        staggerDelay={0.12}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, maxWidth: 1000, width: '100%', alignItems: 'stretch' }}
      >
        {pillars.map((p) => (
          <StaggerItem key={p.title}>
            <GlassCard style={{ padding: '24px 26px', textAlign: 'left', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12, background: 'var(--primary-bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <HugeiconsIcon icon={p.icon} size={24} color="var(--primary)" strokeWidth={1.6} />
                </div>
                <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{p.title}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {p.points.map((pt) => (
                  <p key={pt} style={{ fontSize: '0.86rem', margin: 0, lineHeight: 1.5, paddingLeft: 60 }}>{pt}</p>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
