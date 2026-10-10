import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Tick01Icon, UserGroupIcon, WhatsappIcon, SmartPhone01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

export default function Pricing() {
  return (
    <div className="slide-center">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 1050, width: '100%', alignItems: 'stretch' }}>

        {/* Left: Hero price card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
            border: '1px solid var(--line)', borderRadius: 24,
            padding: '48px 40px', textAlign: 'center',
            boxShadow: '0 10px 40px rgba(115, 103, 240, 0.1)',
            height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            {/* Price */}
            <div style={{ marginBottom: 4 }}>
              <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 500 }}>Just</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 600 }}>₹</span>
              <span className="gradient-text" style={{ fontSize: '6rem', fontWeight: 800, lineHeight: 1 }}>
                3
              </span>
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 28 }}>
              per subscription-paying member / month
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: 'var(--line)', marginBottom: 24 }} />

            {/* Examples */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 28 }}>
              {[
                { members: 200, cost: 600, perDay: 20 },
                { members: 500, cost: 1500, perDay: 50 },
              ].map((ex, i) => (
                <motion.div
                  key={ex.members}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.12 }}
                  style={{
                    flex: 1, padding: '12px 8px',
                    background: 'var(--primary-bg)', borderRadius: 10,
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 4 }}>
                    {ex.members} members
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)' }}>
                    ₹ {ex.cost.toLocaleString('en-IN')} / mo
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    ~ ₹ {ex.perDay} / day
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', paddingLeft: 16 }}>
              {['No initial setup cost', 'No hidden fees', 'No lock-in, cancel anytime', 'Pay only for active members'].map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: '0.85rem', color: 'var(--text-heading)',
                  }}
                >
                  <HugeiconsIcon icon={Tick01Icon} size={16} color="#7367F0" />
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Value highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-col"
          style={{ justifyContent: 'space-between', height: '100%' }}
        >
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: 8 }}>
              What You <span className="gradient-text">Get</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 28 }}>
              Everything included. No add-ons, no tiers
            </p>
          </div>

          {/* Value cards */}
          {[
            { icon: UserGroupIcon, title: 'Unlimited Admin Users', desc: 'Add as many admins and staff as you need. No per-seat charges.' },
            { icon: WhatsappIcon, title: 'WhatsApp & SMS', desc: 'Automated receipts, wishes and notifications, 50 paise per message' },
            { icon: SmartPhone01Icon, title: 'Admin & Member Apps', desc: 'Full admin access on the go + member app for every parishioner' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.15 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '20px 22px', background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(20px)', border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: 'var(--primary-bg)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <HugeiconsIcon icon={item.icon} size={24} color="#7367F0" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '0.95rem', margin: 0, marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              padding: '14px 20px', background: 'var(--primary-bg)',
              borderRadius: 12, textAlign: 'center',
              fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500,
              fontStyle: 'italic',
            }}
          >
            Trusted by a growing family of churches across India.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
