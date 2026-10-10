import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Money01Icon, BalanceScaleIcon, Calendar01Icon, Notebook01Icon, Analytics01Icon,
  FileExportIcon, UserGroupIcon, Archive01Icon, Database01Icon,
} from '@hugeicons-pro/core-stroke-rounded';

const reports = [
  { icon: Money01Icon, name: 'Receipts & Payments', desc: 'The quarterly PC Meeting report, in one click' },
  { icon: BalanceScaleIcon, name: 'Trial Balance', desc: 'Every account, balanced and ready to print' },
  { icon: Calendar01Icon, name: 'Day Book', desc: 'Every entry, date by date, easy to search' },
  { icon: Notebook01Icon, name: 'Period Statement', desc: 'Each ledger, day by day, for any period you pick' },
  { icon: Analytics01Icon, name: 'Account Statistics', desc: 'Totals at a glance. Click any number to see the entries' },
  { icon: FileExportIcon, name: 'Tally Export', desc: 'Your day book as Tally-ready XML for the auditor' },
  { icon: UserGroupIcon, name: 'Member Report', desc: 'One family\'s giving and subscriptions on one page' },
  { icon: Archive01Icon, name: 'Report Center', desc: 'Big reports made in the background, ready to download' },
  { icon: Database01Icon, name: 'Export Center', desc: 'All your church data to Excel or CSV in one go' },
];

const extras = ['PDF & Excel', 'Prints neatly on your church letterhead paper', 'Screens in English & தமிழ்'];

export default function Reports() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 8 }}>
          Reports: <span className="gradient-text">Ready in Seconds</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 28, color: 'var(--text-muted)' }}>
          Every financial report your committee asks for, made from the entries you already keyed in
        </p>
      </FadeUpText>

      <StaggerContainer
        staggerDelay={0.08}
        delay={0.3}
        className="feature-grid feature-grid-3"
        style={{ maxWidth: 1000, gap: 16 }}
      >
        {reports.map((report) => (
          <StaggerItem key={report.name}>
            <GlassCard
              style={{
                textAlign: 'left',
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: 'var(--primary-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <HugeiconsIcon icon={report.icon} size={22} color="#7367F0" />
              </div>
              <div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: 2 }}>{report.name}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                  {report.desc}
                </p>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUpText delay={1.1}>
        <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {extras.map((e) => (
            <span key={e} className="tag tag-primary" style={{ fontSize: '0.8rem' }}>{e}</span>
          ))}
        </div>
      </FadeUpText>

      {/* Bottom comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        style={{
          marginTop: 28,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontSize: '1.6rem',
          fontWeight: 700,
        }}
      >
        <span style={{ color: 'var(--text-heading)' }}>Previously:</span>
        <motion.span
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'line-through',
            textDecorationThickness: 3,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Days
        </motion.span>
        <span style={{ color: 'var(--text-muted)', fontSize: '1.3rem' }}>→</span>
        <span style={{ color: 'var(--text-heading)' }}>Now:</span>
        <motion.span
          className="gradient-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, type: 'spring', stiffness: 200 }}
          style={{ fontSize: '2rem' }}
        >
          Seconds
        </motion.span>
      </motion.div>
    </div>
  );
}
