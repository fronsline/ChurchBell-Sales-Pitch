import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { LockIcon, Audit01Icon, UserShield01Icon, Shield01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const activityLog = [
  { user: 'John', action: 'updated member #1042', time: '2:30 PM' },
  { user: 'Mary', action: 'created receipt R-2026-0089', time: '2:15 PM' },
  { user: 'Admin', action: 'changed ledger settings', time: '1:45 PM' },
  { user: 'Sarah', action: 'exported member report', time: '1:20 PM' },
];

export default function Security() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Security & <span className="gradient-text">Transparency</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 44, color: 'var(--text-muted)', maxWidth: 500 }}>
          Complete accountability for every action in the system
        </p>
      </FadeUpText>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36, maxWidth: 950, width: '100%' }}>
        {/* Left: 3 feature cards stacked */}
        <StaggerContainer delay={0.3} staggerDelay={0.12} className="flex-col gap-md">
          {[
            { icon: LockIcon, title: 'Role-Based Access', desc: 'Control who can view, edit, or manage each module' },
            { icon: UserShield01Icon, title: 'Permission Levels', desc: 'Admin, ReadOnly, and module-specific roles per user' },
            { icon: Shield01Icon, title: 'Church-Level Isolation', desc: 'All data scoped by church — complete multi-tenant security' },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '18px 22px', background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(20px)', border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'var(--primary-bg)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <HugeiconsIcon icon={f.icon} size={22} color="#7367F0" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '0.95rem', margin: 0, marginBottom: 4 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Right: Live activity log mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlassCard style={{ padding: 0, overflow: 'hidden' }}>
            {/* Header */}
            <div style={{
              background: 'var(--gradient-primary)', padding: '14px 22px',
              display: 'flex', alignItems: 'center', gap: 10, color: 'white',
            }}>
              <HugeiconsIcon icon={Audit01Icon} size={20} color="white" />
              <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Live Activity Log</span>
              <div style={{
                marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%',
                background: '#28C76F', boxShadow: '0 0 6px #28C76F',
              }} />
            </div>
            {/* Log entries */}
            <div style={{ padding: '8px 0' }}>
              {activityLog.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    padding: '12px 16px',
                    borderBottom: i < activityLog.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'var(--primary-bg)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                    flexShrink: 0,
                  }}>
                    {entry.user[0]}
                  </div>
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <span style={{ fontSize: '0.82rem' }}>
                      <strong style={{ color: 'var(--primary)' }}>{entry.user}</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{entry.action}</span>
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                    {entry.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
