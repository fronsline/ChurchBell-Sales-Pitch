import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  SmartPhone01Icon, ReceiptIndianRupeeIcon, UserGroupIcon,
  BirthdayCakeIcon, ChartBarIncreasingIcon, BellDotIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const highlights = [
  { icon: ReceiptIndianRupeeIcon, title: 'Transactions', desc: 'Create receipts & payments on the go' },
  { icon: UserGroupIcon, title: 'Members', desc: 'View, search, and manage members' },
  { icon: BirthdayCakeIcon, title: 'Special Dates', desc: 'Today\'s birthdays & anniversaries' },
  { icon: ChartBarIncreasingIcon, title: 'Dashboard', desc: 'Financial summary at a glance' },
  { icon: BellDotIcon, title: 'Notifications', desc: 'Push alerts for events & updates' },
  { icon: SmartPhone01Icon, title: 'Command Center', desc: 'Quick access to everything' },
];

export default function MobileApp() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Church Management, <span className="gradient-text">In Your Palm</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 44, color: 'var(--text-muted)', maxWidth: 500 }}>
          Full admin access from your phone — manage your church from anywhere
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', gap: 56, maxWidth: 1000, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Right: Feature highlights */}
        <div style={{ flex: 1 }}>
          <StaggerContainer delay={0.5} staggerDelay={0.1} style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 14,
          }}>
            {highlights.map((h) => (
              <StaggerItem key={h.title}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
                  border: '1px solid var(--line)', borderRadius: 14,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: 'var(--primary-bg)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <HugeiconsIcon icon={h.icon} size={20} color="#7367F0" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '0.88rem', margin: 0, marginBottom: 2 }}>{h.title}</h3>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>{h.desc}</p>
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
              marginTop: 20, padding: '12px 18px',
              background: 'var(--primary-bg)', borderRadius: 10,
              fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Available on iOS & Android
          </motion.div>
        </div>
      </div>
    </div>
  );
}
