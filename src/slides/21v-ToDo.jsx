import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Task01Icon, Notification01Icon, Sun03Icon, RepeatOne01Icon, UserGroupIcon,
  Archive02Icon, Tick01Icon, SmartPhone01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

// Sample to-dos: illustrative only.
const todos = [
  { title: 'Send the monthly report to the diocese office', meta: 'Today · Remind 10:00 AM', status: 'Doing', done: false },
  { title: 'Count and deposit Sunday offertory', meta: 'Every week', status: 'To Do', done: false, routine: true },
  { title: 'Call the electrician about the hall lights', meta: 'From Rev. Samuel J. · Due Friday', status: 'To Do', done: false },
  { title: 'Book the hall for the youth meeting', meta: 'Done yesterday', status: 'Done', done: true },
];

const features = [
  { icon: Task01Icon, title: 'Today, at a Glance', desc: 'To Do, Doing, Done, with due dates and notes' },
  { icon: UserGroupIcon, title: 'Hand It Over', desc: 'Assign a task to someone else and see where it stands' },
  { icon: Notification01Icon, title: 'Reminders', desc: 'A push alert at the time you choose' },
  { icon: Sun03Icon, title: 'Morning Digest', desc: 'Your day’s list on your phone each morning, at your hour' },
  { icon: RepeatOne01Icon, title: 'Routines', desc: 'Daily, weekly or monthly tasks come back on their own' },
  { icon: Archive02Icon, title: 'Tidy by Itself', desc: 'Finished tasks archive themselves after 90 days' },
];

export default function ToDo() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          To-Do Lists: <span className="gradient-text">Nothing Slips Through</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 30, color: 'var(--text-muted)', maxWidth: 680 }}>
          A daily to-do list for the presbyter, the secretary and the office, on the computer and the phone
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', gap: 36, maxWidth: 1150, width: '100%', alignItems: 'center' }}>
        <GlassCard delay={0.3} style={{ width: 470, flexShrink: 0, padding: '18px 20px', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)' }}>Today</div>
            <span className="tag tag-primary" style={{ padding: '3px 10px', fontSize: '0.65rem' }}>3 open</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {todos.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: 'var(--bg-shade1)', borderRadius: 10 }}
              >
                <div style={{
                  width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                  border: t.done ? 'none' : '2px solid #D6D0FF',
                  background: t.done ? 'var(--success)' : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {t.done && <HugeiconsIcon icon={Tick01Icon} size={13} color="#fff" />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: t.done ? 'var(--text-muted)' : 'var(--text-heading)', textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    {t.routine && <HugeiconsIcon icon={RepeatOne01Icon} size={11} color="#7367F0" />}
                    {t.meta}
                  </div>
                </div>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, color: t.status === 'Doing' ? '#F79C39' : t.done ? 'var(--success)' : 'var(--text-muted)' }}>{t.status}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', borderRadius: 10, background: 'var(--primary-bg)' }}
          >
            <HugeiconsIcon icon={SmartPhone01Icon} size={16} color="#7367F0" />
            <span style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 600 }}>Good morning! You have 3 things to do today</span>
          </motion.div>
        </GlassCard>

        <StaggerContainer delay={0.6} staggerDelay={0.1} style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', height: '100%',
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--line)', borderRadius: 14, textAlign: 'left',
              }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HugeiconsIcon icon={f.icon} size={20} color="#7367F0" />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.88rem', margin: 0, marginBottom: 3 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
