import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Megaphone01Icon, PinIcon, Notification03Icon, UserGroupIcon, Attachment01Icon,
  Clock01Icon, CheckmarkCircle02Icon, ChurchIcon, TranslateIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

// Sample notices: names and numbers are illustrative only.
const notices = [
  { pinned: true, type: 'Prayer', color: '#7367F0', title: 'Please pray for Mr. David K.', body: 'Admitted to hospital on Friday. Surgery on Tuesday morning.', response: 'Praying · 86' },
  { pinned: false, type: 'Meeting', color: '#28C76F', title: 'Pastorate Committee Meeting', body: 'Sunday after the service, in the church hall.', response: 'Attending · 18' },
  { pinned: false, type: 'Festive', color: '#F79C39', title: 'Christmas Carol Rounds', body: 'Choir leaves the church at 7:00 PM, every evening this week.', response: null },
];

const features = [
  { icon: PinIcon, title: 'Stays Up, Then Leaves', desc: 'Each notice lives on the board until it expires. Pin up to 3' },
  { icon: Notification03Icon, title: 'One Alert, No Noise', desc: 'Members get a single push alert when it goes up' },
  { icon: UserGroupIcon, title: 'Right People Only', desc: 'Everyone, chosen groups, or chosen members' },
  { icon: Attachment01Icon, title: 'Pictures & Files', desc: 'A cover picture and up to 5 attachments' },
  { icon: Clock01Icon, title: 'Write Now, Post Later', desc: 'Schedule ahead, with ready-made templates for common notices' },
  { icon: CheckmarkCircle02Icon, title: 'Who Has Seen It', desc: 'Families seen and not seen. Remind the rest in one tap' },
  { icon: TranslateIcon, title: 'Two Languages', desc: 'Add a Tamil (or other) version alongside English' },
  { icon: ChurchIcon, title: 'Diocese Circulars', desc: 'Diocese notices reach every parish, read out on Sunday' },
];

export default function NoticeBoard() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          Notice Board: <span className="gradient-text">Announcements That Last</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 28, color: 'var(--text-muted)', maxWidth: 680 }}>
          Announcements that reach every family, not just those in church on Sunday
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', gap: 40, maxWidth: 1180, width: '100%', alignItems: 'center' }}>
        {/* Phone mock: member board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            width: 270, height: 520, flexShrink: 0, borderRadius: 40, border: '6px solid #1a1a1a',
            background: 'var(--bg-shade1)', padding: '40px 14px 18px', textAlign: 'left',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)', position: 'relative',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 74, height: 20, background: '#000', borderRadius: 20 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, padding: '0 4px' }}>
            <HugeiconsIcon icon={Megaphone01Icon} size={18} color="#7367F0" />
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-heading)' }}>Notice Board</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {notices.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                style={{ background: '#fff', borderRadius: 12, padding: '10px 12px', border: n.pinned ? '1px solid #D6D0FF' : '1px solid var(--line)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                  <span style={{ fontSize: '0.58rem', fontWeight: 700, color: n.color, background: `${n.color}18`, padding: '2px 8px', borderRadius: 100 }}>{n.type}</span>
                  {n.pinned && <HugeiconsIcon icon={PinIcon} size={12} color="#7367F0" />}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)' }}>{n.title}</div>
                <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{n.body}</div>
                {n.response && (
                  <div style={{ marginTop: 6, fontSize: '0.62rem', fontWeight: 600, color: 'var(--primary)' }}>{n.response}</div>
                )}
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: 'auto', alignSelf: 'center', width: 96, height: 4, borderRadius: 4, background: '#1a1a1a', opacity: 0.8 }} />
        </motion.div>

        {/* Features */}
        <StaggerContainer delay={0.6} staggerDelay={0.08} style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', height: '100%',
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--line)', borderRadius: 14, textAlign: 'left',
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HugeiconsIcon icon={f.icon} size={18} color="#7367F0" />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.86rem', margin: 0, marginBottom: 2 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
