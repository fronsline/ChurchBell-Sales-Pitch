import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserGroupIcon, Money01Icon, ChartBarIncreasingIcon, MusicNote01Icon, Calendar03Icon,
  Certificate01Icon, Building06Icon, JusticeScale01Icon, SecurityCheckIcon,
  AiPhone01Icon, SmartPhone03Icon, WhatsappIcon, Message01Icon, Notification03Icon, Megaphone01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

// The nine pillars, same names and one-liners as the website and the printed brochure.
const pillars = [
  { icon: UserGroupIcon, title: 'People', desc: 'Members, families, groups and house visits.' },
  { icon: Money01Icon, title: 'Finance', desc: 'Receipts, auctions, deposits and assessments.' },
  { icon: ChartBarIncreasingIcon, title: 'Reports', desc: 'PC Meeting reports and Tally exports in one click.' },
  { icon: MusicNote01Icon, title: 'Worship', desc: 'Service plans, songs, liturgy and the Bible.' },
  { icon: Calendar03Icon, title: 'Events & To-Do', desc: 'Events, attendance and daily to-do lists.' },
  { icon: Certificate01Icon, title: 'Records', desc: 'Baptism, confirmation, wedding and burial records.' },
  { icon: Building06Icon, title: 'Property & Assets', desc: 'Land, buildings, tenants, rent and assets.' },
  { icon: JusticeScale01Icon, title: 'Legal', desc: 'Cases, hearings, disputes and title opinions.' },
  { icon: SecurityCheckIcon, title: 'Trust & Oversight', desc: 'Health score, audit trail, security and access.' },
];

// How every pillar reaches people.
const channels = [
  { icon: AiPhone01Icon, label: 'Admin App' },
  { icon: SmartPhone03Icon, label: 'Member App' },
  { icon: WhatsappIcon, label: 'WhatsApp' },
  { icon: Message01Icon, label: 'SMS' },
  { icon: Notification03Icon, label: 'Push Alerts' },
  { icon: Megaphone01Icon, label: 'Announcements' },
];

export default function ChurchBellIntro() {
  return (
    <div className="slide-center">
      <motion.img
        src="/images/logo-color.png"
        alt="ChurchBell"
        style={{ height: 84, marginBottom: 14 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <FadeUpText delay={0.2}>
        <h2 style={{ marginBottom: 6 }}>
          The Complete <span className="gradient-text">Church</span>. In One App.
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.3}>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: 26, maxWidth: 720 }}>
          Every member, every rupee and every record of parish life, on one simple platform.
        </p>
      </FadeUpText>

      <StaggerContainer
        delay={0.5}
        staggerDelay={0.07}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 1080, width: '100%' }}
      >
        {pillars.map((p, i) => (
          <StaggerItem key={p.title}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14, height: '100%',
              padding: '14px 18px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)',
              border: '1px solid var(--line)', borderRadius: 'var(--radius)', textAlign: 'left',
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <HugeiconsIcon icon={p.icon} size={24} color="#7367F0" strokeWidth={1.6} />
              </div>
              <div>
                <h3 style={{ fontSize: '0.98rem', margin: 0, marginBottom: 3 }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600, marginRight: 6 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>{p.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Channels strip */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10, maxWidth: 1080 }}
      >
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginRight: 6 }}>
          Works everywhere
        </span>
        {channels.map((c) => (
          <span key={c.label} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)',
            padding: '7px 14px', background: 'var(--primary-bg)', borderRadius: 100,
          }}>
            <HugeiconsIcon icon={c.icon} size={16} color="#7367F0" strokeWidth={1.8} />
            {c.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
