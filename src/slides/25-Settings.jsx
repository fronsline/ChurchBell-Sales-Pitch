import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChurchIcon, Settings01Icon, ReceiptIndianRupeeIcon, BellDotIcon,
  FileExportIcon, Book01Icon, Wallet01Icon, UserGroupIcon,
  Calendar01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const settingsGroups = [
  {
    icon: ChurchIcon,
    title: 'Church Profile',
    items: ['Church name & address', 'Logo & branding', 'Affiliation / Diocese'],
  },
  {
    icon: Settings01Icon,
    title: 'Display Formats',
    items: ['Name format', 'Date format', 'Address format'],
  },
  {
    icon: ReceiptIndianRupeeIcon,
    title: 'Receipt Settings',
    items: ['Individual / Family format', 'Transaction preload', 'Bill book defaults'],
  },
  {
    icon: BellDotIcon,
    title: 'Notifications',
    items: ['SMS, WhatsApp, Email toggles', 'Per-module preferences', 'Special dates recipients'],
  },
  {
    icon: FileExportIcon,
    title: 'Reports & Signatures',
    items: ['Accounts signature', 'Presbyter signature', 'Report header/footer'],
  },
  {
    icon: Wallet01Icon,
    title: 'Finance & Modules',
    items: ['Auction ledger', 'Service register ledgers', 'CGST/SGST fields'],
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
          Every aspect is configurable to match how your church works
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
