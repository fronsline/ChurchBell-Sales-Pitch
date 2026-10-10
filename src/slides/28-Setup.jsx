import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Settings01Icon, FileExportIcon, UserGroupIcon, WhatsappIcon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

// Milestones mirror ChurchBell-Website/lib/content.ts `setup` (website + brochure).
const steps = [
  { icon: Settings01Icon, title: 'Account Ready', time: 'Hour 1', desc: 'Logo, receipt format and preferences set' },
  { icon: FileExportIcon, title: 'Members Imported', time: 'Day 1 – 2', desc: 'From any Excel format. We do the heavy lifting' },
  { icon: WhatsappIcon, title: 'First WhatsApp Receipt', time: 'Day 3', desc: 'Your members start seeing the magic' },
  { icon: UserGroupIcon, title: 'Free Trial, Full Access', time: 'Month 1 & 2', desc: 'Full training included' },
];

export default function Setup() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Up and Running <span className="gradient-text">in a Day</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 48, color: 'var(--text-muted)', maxWidth: 500 }}>
          In-person or online training included. We&apos;re a WhatsApp message away.
        </p>
      </FadeUpText>

      {/* Horizontal journey track */}
      <div style={{ position: 'relative', maxWidth: 900, width: '100%', marginBottom: 56 }}>
        {/* Connection line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          style={{
            position: 'absolute', top: 28, left: '8%', right: '8%',
            height: 3, background: 'var(--line)',
            transformOrigin: 'left', zIndex: 0,
          }}
        />
        {/* Animated fill line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          style={{
            position: 'absolute', top: 28, left: '8%', right: '8%',
            height: 3, background: 'var(--gradient-primary)',
            transformOrigin: 'left', zIndex: 1,
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.25 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}
            >
              {/* Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.25, type: 'spring', stiffness: 300 }}
                style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(115, 103, 240, 0.3)',
                  marginBottom: 14,
                  border: '3px solid white',
                }}
              >
                <HugeiconsIcon icon={step.icon} size={24} color="#fff" />
              </motion.div>

              {/* Title */}
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4, color: 'var(--text-heading)' }}>
                {step.title}
              </h3>

              {/* Time badge */}
              <span style={{
                fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary)',
                padding: '3px 10px', background: 'var(--primary-bg)', borderRadius: 6,
                marginBottom: 6,
              }}>
                {step.time}
              </span>

              {/* Description */}
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom section: Trial + Contact side by side */}
      <div style={{ display: 'flex', gap: 24, maxWidth: 700, width: '100%' }}>
        {/* Free trial card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
            border: '1px solid var(--line)', borderRadius: 20,
            padding: '32px 28px',
            display: 'flex', alignItems: 'center', gap: 20,
          }}
        >
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'var(--primary-bg)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)',
          }}>
            2
          </div>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-heading)', lineHeight: 1.3 }}>Months Free</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>
              Free setup. No lock-in, ever. If it doesn&apos;t change how your church runs, walk away.
            </p>
          </div>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
            border: '1px solid var(--line)', borderRadius: 20,
            padding: '32px 28px',
            display: 'flex', alignItems: 'center', gap: 20,
          }}
        >
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'var(--primary-bg)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <HugeiconsIcon icon={WhatsappIcon} size={28} color="#7367F0" />
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 4px' }}>
              We're just a message away
            </p>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)' }}>
              +91 87227 87228
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
