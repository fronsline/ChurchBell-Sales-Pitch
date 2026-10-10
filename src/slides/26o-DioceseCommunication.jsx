import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Megaphone01Icon, Tick01Icon, Calendar03Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Circulars to every church or the ones you pick, for all members or just the church office',
  'Write in English with a second language: Tamil, Malayalam, Telugu, Kannada or Hindi',
  'Attach files, schedule it, pin it; members get a push notification on their phone',
  'See which churches opened it and read it out; a church adds it to Sunday’s order of service',
  'Diocese events appear in every church’s calendar, with reminders and RSVP',
  'RSVPs and attendance per church, from the churches that share them',
];

const churches = [
  { name: "St. George's", opened: true, readOut: true },
  { name: 'Emmanuel', opened: true, readOut: true },
  { name: 'Christ Church', opened: true, readOut: false },
  { name: "Redeemer's", opened: false, readOut: false },
];

function Mark({ on }) {
  return (
    <span style={{
      width: 20, height: 20, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: on ? 'var(--success)' : 'white', border: on ? 'none' : '2px solid var(--line)',
    }}>
      {on && <HugeiconsIcon icon={Tick01Icon} size={11} color="white" strokeWidth={2.6} />}
    </span>
  );
}

export default function DioceseCommunication() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Circulars &amp; Events: <span className="gradient-text">One Voice to Every Parish</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            A circular from the Bishop reaches every church and every member the same day, and you can
            see where it was actually read.
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.35} staggerDelay={0.09} className="flex-col gap-md">
          {features.map((feat) => (
            <StaggerItem key={feat}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--success)" strokeWidth={2} style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: '0.94rem', margin: 0 }}>{feat}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 430, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 22px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Megaphone01Icon} size={18} color="white" strokeWidth={1.5} /> Circular
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.62rem' }}>
              Published · Pinned
            </span>
          </div>

          {/* Circular body */}
          <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 4 }}>
              Diocesan Day of Prayer
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 8 }}>
              All churches · All members · English + தமிழ்
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'var(--bg-shade1)', borderRadius: 8 }}>
              <HugeiconsIcon icon={Calendar03Icon} size={16} color="var(--primary)" strokeWidth={1.6} />
              <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>Sunday 2 November · read out in every church</span>
            </div>
          </div>

          {/* Reach table */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1.6fr 0.7fr 0.8fr', padding: '9px 22px',
            background: 'var(--bg-shade1)', fontSize: '0.62rem', fontWeight: 600,
            color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em',
          }}>
            <span>Church</span>
            <span style={{ textAlign: 'center' }}>Opened</span>
            <span style={{ textAlign: 'center' }}>Read out</span>
          </div>
          {churches.map((c, i) => (
            <motion.div
              key={c.name}
              style={{
                display: 'grid', gridTemplateColumns: '1.6fr 0.7fr 0.8fr', alignItems: 'center',
                padding: '9px 22px', borderBottom: i < churches.length - 1 ? '1px solid var(--line)' : 'none',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-heading)' }}>{c.name}</span>
              <span style={{ textAlign: 'center' }}><Mark on={c.opened} /></span>
              <span style={{ textAlign: 'center' }}><Mark on={c.readOut} /></span>
            </motion.div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
