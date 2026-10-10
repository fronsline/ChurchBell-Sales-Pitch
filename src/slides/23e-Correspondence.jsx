import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Mail01Icon, NoteEditIcon, ContactBookIcon, UserMultipleIcon,
  PrinterIcon, AiMagicIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  {
    icon: Mail01Icon,
    title: 'On Your Letterhead',
    desc: 'Print on your pre-printed stationery, or print the letterhead itself on plain paper',
  },
  {
    icon: NoteEditIcon,
    title: 'Templates',
    desc: 'Save the letters you write every year. Names and details fill in by themselves',
  },
  {
    icon: ContactBookIcon,
    title: 'Contacts & Groups',
    desc: 'One address book. Bring in members, advocates or tenants in a click',
  },
  {
    icon: UserMultipleIcon,
    title: 'One Letter, Many People',
    desc: 'Send the same letter to a whole group, each copy with its own name and number',
  },
  {
    icon: PrinterIcon,
    title: 'Numbered & Tracked',
    desc: 'Every letter gets a reference number, and you record how it left: by hand, post or courier',
  },
  {
    icon: AiMagicIcon,
    title: 'Help Writing It',
    desc: 'Give a few lines and get a draft in English or Tamil. You read and edit before it goes in',
  },
];

export default function Correspondence() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Correspondence: <span className="gradient-text">Every Letter, On Record</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 22, color: 'var(--text-muted)', fontSize: '0.96rem' }}>
            Letters to the corporation, the bank, the diocese, the families. Write them, print them on
            the church letterhead, and keep a copy of every one, numbered and searchable.
          </p>
        </FadeUpText>

        <StaggerContainer
          delay={0.3}
          staggerDelay={0.08}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <GlassCard delay={0} style={{ padding: '16px 16px', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <HugeiconsIcon icon={f.icon} size={22} color="#7367F0" strokeWidth={1.6} />
                  <h3 style={{ fontSize: '0.9rem', margin: 0 }}>{f.title}</h3>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        {/* Sample letter: names are illustrative only. */}
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 400, padding: 0, overflow: 'hidden', background: 'white' }}>
          {/* Letterhead */}
          <div style={{ padding: '18px 24px 12px', borderBottom: '3px solid #7367F0', textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-heading)', letterSpacing: '0.02em' }}>
              CSI Grace Church
            </div>
            <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>12, Church Road, Vellore · 0416 222 3344</div>
          </div>

          <div style={{ padding: '14px 24px 18px', fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontFamily: 'monospace', color: 'var(--primary)', fontWeight: 700 }}>Ref: GC/L/2026/0041</span>
              <span>10 Nov 2026</span>
            </div>
            <div style={{ marginBottom: 8 }}>
              To<br />The Commissioner,<br />Vellore City Municipal Corporation
            </div>
            <div style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: 8 }}>
              Sub: Request for exemption of property tax: church premises
            </div>
            {[100, 94, 97, 60].map((w, i) => (
              <motion.div
                key={i}
                initial={{ width: 0 }}
                animate={{ width: `${w}%` }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.12 }}
                style={{ height: 7, borderRadius: 4, background: 'var(--line)', marginBottom: 7 }}
              />
            ))}
            <div style={{ marginTop: 14, textAlign: 'right', color: 'var(--text-heading)' }}>
              Rev. Samuel J.<br /><span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>Presbyter-in-charge</span>
            </div>
          </div>
        </GlassCard>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 400 }}
        >
          <span className="tag tag-success" style={{ fontSize: '0.66rem' }}>Dispatched · By post</span>
          <span className="tag tag-primary" style={{ fontSize: '0.66rem' }}>Linked to: Church compound</span>
          <span className="tag tag-primary" style={{ fontSize: '0.66rem' }}>Follow up: 10 Dec</span>
        </motion.div>
      </div>
    </div>
  );
}
