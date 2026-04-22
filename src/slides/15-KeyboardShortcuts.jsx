import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import { HugeiconsIcon } from '@hugeicons/react';
import { Home01Icon, Tick01Icon, LegalDocument01Icon } from '@hugeicons-pro/core-stroke-rounded';

function KbdCombo({ keys, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 0', borderBottom: '1px solid var(--line)',
    }}>
      <span className="kbd-combo">
        {keys.map((key, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            {i > 0 && <span className="kbd-plus">+</span>}
            <span className="kbd">{key}</span>
          </span>
        ))}
      </span>
      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
        {label}
      </span>
    </div>
  );
}

const navigateShortcuts = [
  { keys: ['Alt', 'M'], label: 'Members' },
  { keys: ['Alt', 'T'], label: 'Receipts' },
  { keys: ['Alt', 'D'], label: 'Dashboard' },
];

const createShortcuts = [
  { keys: ['Alt', 'Shift', 'T'], label: 'New Receipt' },
  { keys: ['Alt', 'Shift', 'M'], label: 'New Member' },
  { keys: ['Alt', 'Shift', 'Y'], label: 'New Payment' },
];

const formShortcuts = [
  { keys: ['Ctrl', 'S'], label: 'Save' },
  { keys: ['Ctrl', 'Shift', 'S'], label: 'Save & Add New' },
  { keys: ['Ctrl', '⌫'], label: 'Back to List' },
];

export default function KeyboardShortcuts() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 4 }}>
          Speed Matters — <span className="gradient-text">Keyboard Shortcuts</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 40, color: 'var(--text-muted)', fontSize: '1rem' }}>
          For the treasurer processing 50 receipts on a Sunday
        </p>
      </FadeUpText>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24, width: '100%', maxWidth: 1000,
      }}>
        {/* Navigate */}
        <StaggerContainer staggerDelay={0.12} delay={0.3}>
          <StaggerItem>
            <h3 style={{
              fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em',
              color: 'var(--primary)', marginBottom: 16, fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <HugeiconsIcon icon={Home01Icon} size={18} color="var(--primary)" /> Navigate
            </h3>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card" style={{ padding: 20 }}>
              {navigateShortcuts.map((s, i) => (
                <KbdCombo key={i} keys={s.keys} label={s.label} />
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Quick Create */}
        <StaggerContainer staggerDelay={0.12} delay={0.5}>
          <StaggerItem>
            <h3 style={{
              fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em',
              color: 'var(--primary)', marginBottom: 16, fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--primary)" /> Quick Create
            </h3>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card" style={{ padding: 20 }}>
              {createShortcuts.map((s, i) => (
                <KbdCombo key={i} keys={s.keys} label={s.label} />
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* In Forms */}
        <StaggerContainer staggerDelay={0.12} delay={0.7}>
          <StaggerItem>
            <h3 style={{
              fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em',
              color: 'var(--primary)', marginBottom: 16, fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <HugeiconsIcon icon={LegalDocument01Icon} size={18} color="var(--primary)" /> In Forms
            </h3>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card" style={{ padding: 20 }}>
              {formShortcuts.map((s, i) => (
                <KbdCombo key={i} keys={s.keys} label={s.label} />
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          marginTop: 40,
          padding: '16px 28px',
          background: 'var(--gradient-soft)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--line)',
          display: 'flex', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          Press
        </span>
        <span className="kbd-combo">
          <span className="kbd">Alt</span>
          <span className="kbd-plus">+</span>
          <span className="kbd">/</span>
        </span>
        <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          anytime to see all shortcuts
        </span>
      </motion.div>
    </div>
  );
}
