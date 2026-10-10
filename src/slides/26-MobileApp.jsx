import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserIcon, DashboardSquare01Icon, ChurchIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const views = [
  {
    icon: UserIcon,
    title: 'Member App',
    who: 'For every member',
    items: [
      'Dues, incl. auction pending', 'Receipts & payment history', 'Pay by UPI',
      'Daily verse', 'Notice board', 'Events & RSVP',
      'Follow the order of service', 'Songs & Bible offline', 'Request profile changes',
    ],
  },
  {
    icon: DashboardSquare01Icon,
    title: 'Admin App',
    who: 'For pastors, treasurers & secretaries',
    items: [
      'Receipts on the go', 'Members & families', 'Approve edit requests',
      'House visits', 'Reports', 'Pin your own shortcuts',
    ],
  },
  {
    icon: ChurchIcon,
    title: 'Diocese App',
    who: 'For diocese officers',
    items: ['Assessment', 'Churches & directory', 'Finance reports', 'Mail & property work'],
  },
];

export default function MobileApp() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          The Church, <span className="gradient-text">In Every Pocket</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 32, color: 'var(--text-muted)', maxWidth: 640 }}>
          One app, three views. Each person sees what is meant for them. Signed in with a one-time code or a passkey.
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', gap: 48, maxWidth: 1080, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {/* Left: Phone mockup with real screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ flexShrink: 0 }}
        >
          <div style={{
            width: 260, height: 530,
            borderRadius: 44, border: '6px solid #1a1a1a',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), inset 0 0 0 2px #2a2a2a',
            overflow: 'hidden', position: 'relative', background: '#000',
          }}>
            {/* Dynamic Island */}
            <div style={{
              position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
              width: 80, height: 22, background: '#000',
              borderRadius: 20, zIndex: 2,
            }} />
            {/* Side button (power) */}
            <div style={{
              position: 'absolute', right: -8, top: 100,
              width: 3, height: 40, background: '#2a2a2a',
              borderRadius: '0 2px 2px 0',
            }} />
            {/* Volume buttons */}
            <div style={{
              position: 'absolute', left: -8, top: 85,
              width: 3, height: 24, background: '#2a2a2a',
              borderRadius: '2px 0 0 2px',
            }} />
            <div style={{
              position: 'absolute', left: -8, top: 115,
              width: 3, height: 24, background: '#2a2a2a',
              borderRadius: '2px 0 0 2px',
            }} />
            {/* Screen with rounded inner corners */}
            <div style={{
              position: 'absolute', inset: 3,
              borderRadius: 40, overflow: 'hidden',
            }}>
              <img
                src="/images/screenshots/mobile-dashboard.png"
                alt="ChurchBell Mobile App"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            {/* Home indicator */}
            <div style={{
              position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
              width: 100, height: 4, background: 'rgba(255,255,255,0.3)',
              borderRadius: 2, zIndex: 2,
            }} />
          </div>
        </motion.div>

        {/* Right: three views */}
        <div style={{ flex: 1 }}>
          <StaggerContainer delay={0.5} staggerDelay={0.12} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {views.map((v) => (
              <StaggerItem key={v.title}>
                <div style={{
                  padding: '14px 18px', textAlign: 'left',
                  background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
                  border: '1px solid var(--line)', borderRadius: 14,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: 'var(--primary-bg)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                    }}>
                      <HugeiconsIcon icon={v.icon} size={20} color="#7367F0" />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', margin: 0 }}>{v.title}</h3>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{v.who}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {v.items.map((it) => (
                      <span key={it} className="tag tag-primary" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>{it}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            style={{
              marginTop: 14, padding: '10px 18px',
              background: 'var(--primary-bg)', borderRadius: 10,
              fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 500,
              textAlign: 'center',
            }}
          >
            On the App Store & Google Play: search “ChurchBell”
          </motion.div>
        </div>
      </div>
    </div>
  );
}
