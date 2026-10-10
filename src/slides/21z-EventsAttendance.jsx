import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Calendar03Icon, RepeatIcon, UserCheck02Icon, Notification01Icon, QrCodeIcon,
  UserMultipleIcon, File01Icon, ChurchIcon, Tick01Icon, Location01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

// Sample month: event names and counts are illustrative only.
const days = Array.from({ length: 30 }, (_, i) => i + 1);
const marks = {
  1: '#7367F0', 8: '#7367F0', 15: '#7367F0', 22: '#7367F0', 29: '#7367F0', // Sunday services
  5: '#28C76F', 19: '#28C76F', // Women's fellowship
  14: '#F79C39', // Youth retreat
  25: '#EA5455', // Harvest festival
};

const features = [
  { icon: Calendar03Icon, title: 'One Church Calendar', desc: 'Public or private events, by category and colour' },
  { icon: RepeatIcon, title: 'Set Once, Repeats', desc: 'Weekly services and monthly meetings, in your church’s time' },
  { icon: Tick01Icon, title: 'RSVP from the App', desc: 'Members reply Yes / No / Maybe with how many are coming' },
  { icon: Notification01Icon, title: 'Reminders', desc: 'A day before and two hours before, plus a phone-calendar feed' },
  { icon: QrCodeIcon, title: 'Attendance at the Door', desc: 'Head count, family roll call or a QR code at the door' },
  { icon: UserMultipleIcon, title: 'Who Stopped Coming', desc: 'Members missing for weeks, ready for a house visit' },
  { icon: File01Icon, title: 'Event Reports', desc: 'Events, attendance by month and RSVP summary, in PDF and Excel' },
  { icon: ChurchIcon, title: 'Diocese Events', desc: 'Diocese-wide events appear in your parish calendar' },
];

export default function EventsAttendance() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          Events &amp; <span className="gradient-text">Attendance</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 26, color: 'var(--text-muted)', maxWidth: 680 }}>
          Every service and gathering on one calendar, and you know who keeps coming back
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', gap: 22, maxWidth: 1000, width: '100%', marginBottom: 24, alignItems: 'stretch' }}>
        {/* Calendar mock */}
        <GlassCard delay={0.3} style={{ flex: 1.15, padding: '14px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading)' }}>November</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Month · Week · List</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <div key={i} style={{ fontSize: '0.62rem', fontWeight: 600, color: 'var(--text-muted)' }}>{d}</div>
            ))}
            {days.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.012 }}
                style={{
                  height: 24, borderRadius: 6, fontSize: '0.66rem',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: marks[d] ? `${marks[d]}18` : 'var(--bg-shade1)',
                  color: marks[d] ? marks[d] : 'var(--text-muted)', fontWeight: marks[d] ? 700 : 500,
                }}
              >
                {d}
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Event detail mock */}
        <GlassCard delay={0.45} style={{ flex: 1, padding: '14px 18px', textAlign: 'left' }}>
          <span className="tag tag-primary" style={{ padding: '3px 10px', fontSize: '0.62rem', marginBottom: 6 }}>Festival</span>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginTop: 6 }}>Harvest Festival</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 10 }}>
            <HugeiconsIcon icon={Location01Icon} size={12} color="#8E8A9C" /> Church grounds · Wed 25 · 4:00 PM
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            {[{ l: 'Yes', v: 128, c: '#28C76F' }, { l: 'Maybe', v: 14, c: '#F79C39' }, { l: 'No', v: 6, c: '#8E8A9C' }].map((r) => (
              <div key={r.l} style={{ flex: 1, background: 'var(--bg-shade1)', borderRadius: 8, padding: '6px 4px', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: r.c }}>{r.v}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>{r.l}</div>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, background: 'var(--primary-bg)' }}
          >
            <HugeiconsIcon icon={UserCheck02Icon} size={16} color="#7367F0" />
            <span style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 600 }}>Attendance: 142 present · 31 families</span>
          </motion.div>
        </GlassCard>
      </div>

      <StaggerContainer delay={0.8} staggerDelay={0.07} className="feature-grid feature-grid-4" style={{ maxWidth: 1100, gap: 12 }}>
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <div style={{
              padding: '12px 14px', height: '100%', textAlign: 'left',
              background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
              border: '1px solid var(--line)', borderRadius: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <HugeiconsIcon icon={f.icon} size={18} color="#7367F0" />
                <h3 style={{ fontSize: '0.82rem', margin: 0 }}>{f.title}</h3>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>{f.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
