import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChurchIcon, Settings01Icon, ReceiptIndianRupeeIcon, BellDotIcon,
  Wallet01Icon, ViewOffIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const settingsGroups = [
  {
    icon: ChurchIcon,
    title: 'Church Profile',
    items: ['Church name, address & logo', 'Diocese & pastorate', 'Office bearers'],
  },
  {
    icon: Settings01Icon,
    title: 'Display & Language',
    items: ['Name, date & address format', 'English or தமிழ் (Tamil)', 'Light or dark screen'],
  },
  {
    icon: ReceiptIndianRupeeIcon,
    title: 'Receipts & Letterhead',
    items: ['Individual or family receipts', 'ChurchBell design or your own letterhead', 'Accounts signature'],
  },
  {
    icon: BellDotIcon,
    title: 'Messages',
    items: ['WhatsApp, SMS, email & app, for each kind of message', 'Who receives each report & reminder', 'Birthday list recipients'],
  },
  {
    icon: Wallet01Icon,
    title: 'Finance',
    items: ['Default ledgers for each module', 'GSTIN & CGST/SGST fields', "Online giving to your church's UPI ID"],
  },
  {
    icon: ViewOffIcon,
    title: 'Menus & Access',
    items: ["Hide menus your church doesn't use", 'Give each person only what they need', 'Passkeys & signed-in devices'],
  },
];

export default function Settings() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Your Church, <span className="gradient-text">Your Way</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 44, color: 'var(--text-muted)', maxWidth: 500 }}>
          Set it up once, the way your church works
        </p>
      </FadeUpText>

      <StaggerContainer delay={0.3} staggerDelay={0.1} className="feature-grid" style={{ maxWidth: 950, gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {settingsGroups.map((group) => (
          <StaggerItem key={group.title}>
            <motion.div
              style={{
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--line)', borderRadius: 'var(--radius)',
                padding: '24px 22px', height: '100%',
              }}
              whileHover={{ boxShadow: '0 10px 40px rgba(115, 103, 240, 0.12)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: 'var(--primary-bg)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <HugeiconsIcon icon={group.icon} size={20} color="#7367F0" />
                </div>
                <h3 style={{ fontSize: '0.95rem', margin: 0 }}>{group.title}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map((item) => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: '0.78rem', color: 'var(--text-secondary)',
                  }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: 'var(--primary)', flexShrink: 0, opacity: 0.5,
                    }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
