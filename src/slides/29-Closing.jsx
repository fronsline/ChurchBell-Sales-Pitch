import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { CallRinging01Icon, Message01Icon, WhatsappIcon, CloudIcon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, GradientHeading } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const contacts = [
  { icon: CallRinging01Icon, color: '#7367F0', text: '+91 87227 87228' },
  { icon: Message01Icon, color: '#7367F0', text: 'support@churchbell.in' },
  { icon: WhatsappIcon, color: '#7367F0', text: 'WhatsApp: +91 87227 87228' },
  { icon: CloudIcon, color: '#7367F0', text: 'churchbell.in' },
];

export default function Closing() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <motion.img
        src="/images/logo-color.png"
        alt="ChurchBell"
        style={{ height: 72, marginBottom: 20 }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <FadeUpText delay={0.3}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: 12 }}>
          Let us set up your church.
        </h1>
      </FadeUpText>

      <FadeUpText delay={0.5}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: 20 }}>
          You'll wonder how you managed without it.
        </p>
      </FadeUpText>

      {/* Offer: mirrors ChurchBell-Website/lib/content.ts `closing` */}
      <FadeUpText delay={0.6}>
        <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span className="tag tag-primary" style={{ fontSize: '0.95rem', padding: '8px 20px' }}>
            Free setup. Two months on us. No lock-in, ever.
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Training included, in person or on WhatsApp.
          </span>
        </div>
      </FadeUpText>

      <GlassCard delay={0.7} style={{ maxWidth: 420, width: '100%', padding: '18px 32px', height: 'auto' }}>
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '10px 0',
              borderBottom: i < contacts.length - 1 ? '1px solid var(--line)' : 'none',
              fontSize: '0.95rem',
            }}
          >
            <HugeiconsIcon icon={c.icon} size={22} color={c.color} />
            <span>{c.text}</span>
          </motion.div>
        ))}
      </GlassCard>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        style={{ marginTop: 24 }}
      >
        <GradientHeading delay={1.6} className="text-large">
          Connected. United. Blessed.
        </GradientHeading>
      </motion.div>
    </div>
  );
}
