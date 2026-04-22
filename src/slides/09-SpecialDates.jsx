import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { BirthdayCakeIcon, Message01Icon, PresentationBarChart01Icon, CalendarCheckIn01Icon, CalendarLove01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const weekDays = [
  { day: 'Sun', names: [{ name: 'John T.', type: 'birthday' }] },
  { day: 'Mon', names: [{ name: 'Mary A.', type: 'anniversary' }] },
  { day: 'Tue', names: [] },
  { day: 'Wed', names: [{ name: 'Samuel J.', type: 'birthday' }, { name: 'Grace P.', type: 'birthday' }] },
  { day: 'Thu', names: [] },
  { day: 'Fri', names: [{ name: 'David K.', type: 'anniversary' }] },
  { day: 'Sat', names: [{ name: 'Ruth M.', type: 'birthday' }] },
];

const highlights = [
  { icon: BirthdayCakeIcon, title: 'Auto WhatsApp Wishes', desc: 'Sent daily at your chosen time' },
  { icon: Message01Icon, title: 'Weekly PDF to Presbyter', desc: 'Delivered every Friday automatically' },
  { icon: PresentationBarChart01Icon, title: 'Screen Display Ready', desc: 'Show during Sunday service' },
];

function DateTypeIcon({ type }) {
  if (type === 'birthday') {
    return <HugeiconsIcon icon={BirthdayCakeIcon} size={10} color="#7367F0" strokeWidth={1.5} />;
  }
  return <HugeiconsIcon icon={CalendarLove01Icon} size={10} color="#7367F0" strokeWidth={1.5} />;
}

export default function SpecialDates() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>Special Dates</h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 32, color: 'var(--text-muted)' }}>Birthdays & Anniversaries</p>
      </FadeUpText>

      <FadeUpText delay={0.3}>
        <span className="tag tag-primary mb-4" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <HugeiconsIcon icon={CalendarCheckIn01Icon} size={14} color="#7367F0" strokeWidth={1.5} />
          Every Sunday — The Week Ahead
        </span>
      </FadeUpText>

      {/* Weekly calendar mockup */}
      <GlassCard delay={0.4} style={{ maxWidth: 700, width: '100%', padding: '16px 20px', marginBottom: 36, height: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, textAlign: 'center', alignItems: 'start' }}>
          {weekDays.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  color: d.day === 'Sun' ? 'var(--primary)' : 'var(--text-muted)',
                  marginBottom: 6,
                  textTransform: 'uppercase',
                }}
              >
                {d.day}
              </div>
              <div
                style={{
                  background: d.names.length > 0 ? 'var(--primary-bg)' : 'var(--bg-shade1)',
                  borderRadius: 8,
                  padding: '8px 4px',
                  minHeight: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {d.names.length > 0 ? (
                  d.names.map((n) => (
                    <span key={n.name} style={{ fontSize: '0.7rem', color: 'var(--text-heading)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      {n.name} <DateTypeIcon type={n.type} />
                    </span>
                  ))
                ) : (
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>—</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Highlights */}
      <StaggerContainer delay={0.9} staggerDelay={0.12} className="feature-grid feature-grid-3" style={{ maxWidth: 700 }}>
        {highlights.map((h) => (
          <StaggerItem key={h.title}>
            <div className="solution-card">
              <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
                <HugeiconsIcon icon={h.icon} size={32} color="#7367F0" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 6 }}>{h.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{h.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
