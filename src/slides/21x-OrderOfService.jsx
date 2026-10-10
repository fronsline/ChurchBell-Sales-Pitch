import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Layers01Icon, TranslateIcon, SmartPhone01Icon, Presentation01Icon,
  Pdf01Icon, Megaphone01Icon, MusicNote03Icon, Book02Icon, BookOpen01Icon, Mic01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

// Sample plan: names and numbers are illustrative only.
const blocks = [
  { icon: MusicNote03Icon, type: 'Song', title: 'Opening Hymn, No. 312', note: 'Verses 1, 2 and 4' },
  { icon: Book02Icon, type: 'Liturgy', title: 'Call to Worship', note: 'Leader · People · All' },
  { icon: BookOpen01Icon, type: 'Reading', title: 'Isaiah 40 : 28–31', note: 'Read by Mrs. Grace P.' },
  { icon: Mic01Icon, type: 'Sermon', title: 'Strength for the Weary', note: 'Rev. Samuel J.' },
  { icon: Megaphone01Icon, type: 'Notices', title: 'Read on Sunday', note: '3 notices from the Notice Board' },
];

const langs = ['English', 'தமிழ்', 'Tamil (Roman)'];

const features = [
  { icon: Layers01Icon, title: 'Built from Blocks', desc: 'Songs, liturgy, readings, prayers, sermon, offertory. Save any Sunday as a template' },
  { icon: TranslateIcon, title: 'In Your Languages', desc: 'English, Tamil, Malayalam, Telugu, Kannada and Hindi, side by side' },
  { icon: SmartPhone01Icon, title: 'On Every Phone', desc: 'Publish once. Members read it in the app, even without signal, and follow along live' },
  { icon: Presentation01Icon, title: 'Big Screen, Phone Remote', desc: 'Songs and readings on the screen, changed from a phone at the altar' },
  { icon: Pdf01Icon, title: 'Print & PowerPoint', desc: 'Slides, choir sheet and bulletin as PDF, or a PowerPoint file' },
  { icon: Megaphone01Icon, title: 'Read on Sunday', desc: 'This week’s notices dropped straight into the announcements' },
];

export default function OrderOfService() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          Order of Service, <span className="gradient-text">Planned Once</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 28, color: 'var(--text-muted)', maxWidth: 680 }}>
          Plan Sunday in minutes, and the whole congregation has it in their hand
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', gap: 36, maxWidth: 1180, width: '100%', alignItems: 'center' }}>
        {/* Left: plan mock */}
        <GlassCard delay={0.3} style={{ width: 470, flexShrink: 0, padding: '18px 20px', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>Sunday Holy Communion</div>
            <span className="tag tag-success" style={{ padding: '3px 10px', fontSize: '0.65rem' }}>Published</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 10 }}>Sunday · 9:00 AM</div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            {langs.map((l, i) => (
              <span key={l} style={{
                fontSize: '0.66rem', fontWeight: 600, padding: '3px 10px', borderRadius: 100,
                background: i === 0 ? 'var(--primary)' : 'var(--primary-bg)',
                color: i === 0 ? '#fff' : 'var(--primary)',
              }}>{l}</span>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {blocks.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
                  background: i === 2 ? 'var(--primary-bg)' : 'var(--bg-shade1)', borderRadius: 10,
                  border: i === 2 ? '1px solid #D6D0FF' : '1px solid transparent',
                }}
              >
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <HugeiconsIcon icon={b.icon} size={16} color="#7367F0" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-heading)' }}>{b.title}</div>
                  <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>{b.note}</div>
                </div>
                {i === 2 ? (
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#fff', background: 'var(--success)', padding: '2px 8px', borderRadius: 100 }}>
                    ON SCREEN
                  </span>
                ) : (
                  <span style={{ fontSize: '0.62rem', fontWeight: 600, color: 'var(--text-muted)' }}>{b.type}</span>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              marginTop: 12, padding: '9px 12px', borderRadius: 10, textAlign: 'center',
              background: 'var(--gradient-primary)', color: '#fff', fontSize: '0.78rem', fontWeight: 600,
            }}
          >
            Sent to every member&apos;s phone
          </motion.div>
        </GlassCard>

        {/* Right: features */}
        <StaggerContainer delay={0.6} staggerDelay={0.1} style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', height: '100%',
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--line)', borderRadius: 14, textAlign: 'left',
              }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HugeiconsIcon icon={f.icon} size={20} color="#7367F0" />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.88rem', margin: 0, marginBottom: 3 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
