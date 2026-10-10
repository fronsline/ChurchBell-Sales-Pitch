import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  LibraryIcon, BookOpen01Icon, Search01Icon, StarIcon, WifiOff01Icon,
  Layers01Icon, Sun03Icon, Shield01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

// The real licensed content: the three hymnals from the Christian Literature Society and the seven
// Bible versions loaded in ChurchBell. Verse text is KJV (one of the listed versions).
const hymnals = [
  { ta: 'கிறிஸ்து சபை பாமாலை', en: 'Paamalai' },
  { ta: 'கிறிஸ்தவ கீர்த்தனைகள்', en: 'Keerthanai' },
  { ta: 'புத்தெழுச்சிப் பாடல்கள்', en: 'Putheluchi Paadalgal' },
];
const versions = ['Tamil (IRV)', 'KJV', 'WEB', 'BSB', 'Telugu', 'Malayalam', 'Hindi'];
const bookPoints = [
  { icon: Search01Icon, text: 'Find a hymn by its number or first line' },
  { icon: StarIcon, text: 'Favourites kept on phone and computer' },
  { icon: Layers01Icon, text: 'Add a hymn to Sunday’s plan straight from the book' },
  { icon: WifiOff01Icon, text: 'Download the whole book to read offline' },
];

const biblePoints = [
  { icon: Search01Icon, text: 'Type “John 3:16” to go straight there' },
  { icon: BookOpen01Icon, text: 'Switch between the versions you have' },
  { icon: WifiOff01Icon, text: 'Download a version to read offline' },
  { icon: Sun03Icon, text: 'A verse for the day on every member’s home screen' },
];

function Panel({ icon, title, sub, delay, children, points }) {
  return (
    <GlassCard delay={delay} style={{ flex: 1, padding: '22px 24px', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HugeiconsIcon icon={icon} size={22} color="#7367F0" />
        </div>
        <div>
          <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{title}</h3>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{sub}</div>
        </div>
      </div>
      {children}
      <StaggerContainer delay={delay + 0.4} staggerDelay={0.08} style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
        {points.map((p) => (
          <StaggerItem key={p.text}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.82rem', color: 'var(--text-heading)' }}>
              <HugeiconsIcon icon={p.icon} size={16} color="#7367F0" />
              {p.text}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </GlassCard>
  );
}

export default function WorshipBooksBible() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          The Hymn Book and the Bible, <span className="gradient-text">in Every Pocket</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 28, color: 'var(--text-muted)', maxWidth: 700 }}>
          No more searching for page numbers. The words are on the phone, even where there is no signal
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', gap: 28, maxWidth: 1100, width: '100%', alignItems: 'stretch' }}>
        <Panel icon={LibraryIcon} title="Worship Books" sub="The CSI hymnals, opened by number" delay={0.3} points={bookPoints}>
          <div style={{ background: 'var(--bg-shade1)', borderRadius: 12, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {hymnals.map((h, i) => (
              <motion.div
                key={h.en}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.12 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 8, padding: '7px 10px', border: '1px solid var(--line)' }}
              >
                <HugeiconsIcon icon={LibraryIcon} size={16} color="#7367F0" />
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>{h.ta}</div>
                  <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>{h.en}</div>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '0.6rem', color: 'var(--success)', fontWeight: 600 }}>Offline</span>
              </motion.div>
            ))}
          </div>
        </Panel>

        <Panel icon={BookOpen01Icon} title="Bible" sub="Seven versions, go to any verse in a second" delay={0.45} points={biblePoints}>
          <div style={{ background: 'var(--bg-shade1)', borderRadius: 12, padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', borderRadius: 8, padding: '6px 10px', marginBottom: 10, border: '1px solid var(--line)' }}>
              <HugeiconsIcon icon={Search01Icon} size={14} color="#8E8A9C" />
              <span style={{ fontSize: '0.78rem', color: 'var(--text-heading)', fontWeight: 600 }}>Psalm 23:1</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.62rem', color: 'var(--primary)', fontWeight: 600 }}>Go to verse</span>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading)' }}>Psalm 23</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: '2px 0 8px' }}>King James Version</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              style={{ fontSize: '0.76rem', color: 'var(--text)', lineHeight: 1.55 }}
            >
              <sup style={{ color: 'var(--primary)', fontWeight: 700 }}>1 </sup>
              The LORD is my shepherd; I shall not want.<br />
              <sup style={{ color: 'var(--primary)', fontWeight: 700 }}>2 </sup>
              He maketh me to lie down in green pastures&hellip;
            </motion.div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 10 }}>
              {versions.map((v) => (
                <span key={v} style={{ fontSize: '0.6rem', fontWeight: 600, padding: '2px 8px', borderRadius: 999, background: '#fff', border: '1px solid #D6D0FF', color: 'var(--primary-dark)' }}>{v}</span>
              ))}
            </div>
          </div>
        </Panel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{
          marginTop: 22, padding: '11px 20px', background: 'var(--primary-bg)', borderRadius: 10,
          fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 500,
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}
      >
        <HugeiconsIcon icon={Shield01Icon} size={16} color="#7367F0" />
        Fully licensed: the hymnals and every Bible version are used with permission
      </motion.div>
    </div>
  );
}
