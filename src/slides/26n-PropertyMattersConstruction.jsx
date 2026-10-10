import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  RealEstate01Icon, ConstructionIcon, Tick01Icon, UserCheck01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const flows = [
  {
    icon: RealEstate01Icon,
    title: 'Buying Land',
    sub: 'Property Matters',
    steps: [
      'Intake of the proposal',
      'Site inspection',
      'Title opinion from Legal',
      'Council concurrence',
      'Treasurer approval',
      'Registration',
      'Handover: the property joins the register',
    ],
    notes: [
      'Steps and who does each one are set by the diocese',
      'A maker, a checker and an approver on every step',
    ],
  },
  {
    icon: ConstructionIcon,
    title: 'Building',
    sub: 'Construction Projects',
    steps: [
      'Pastorate proposal',
      'Property, engineering and DPC clearances',
      'Tender: sealed bids, opened together',
      'Bishop’s approval recorded, contract awarded',
      'Works: milestones, inspections, bills',
      'Completion and defect-liability period',
      'Deposit released, project closed',
    ],
    notes: [
      'Bills checked against the contract value, with retention',
      'Changes to the work need the Treasurer’s approval',
    ],
  },
];

export default function PropertyMattersConstruction() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Land &amp; Buildings: <span className="gradient-text">Every Step, Every Signature</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 28, color: 'var(--text-muted)', maxWidth: 760 }}>
          Buying land and putting up a building run as clear workflows, not files passed from desk to desk.
          Each officer sees only the steps waiting for them.
        </p>
      </FadeUpText>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 1060, width: '100%' }}>
        {flows.map((f, fi) => (
          <GlassCard key={f.title} delay={0.35 + fi * 0.15} style={{ padding: '22px 26px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: 'var(--primary-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <HugeiconsIcon icon={f.icon} size={24} color="var(--primary)" strokeWidth={1.6} />
              </div>
              <div>
                <div style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-heading)' }}>{f.title}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{f.sub}</div>
              </div>
            </div>

            {/* Step timeline */}
            <div style={{ position: 'relative', paddingLeft: 4 }}>
              <div style={{ position: 'absolute', top: 10, bottom: 10, left: 14, width: 2, background: 'var(--line)' }} />
              {f.steps.map((s, i) => {
                const last = i === f.steps.length - 1;
                return (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.6 + fi * 0.2 + i * 0.07 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '4px 0', position: 'relative', zIndex: 1 }}
                  >
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                      background: last ? 'var(--success)' : 'white',
                      border: last ? 'none' : '2px solid var(--primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.62rem', fontWeight: 800, color: 'var(--primary)',
                    }}>
                      {last ? <HugeiconsIcon icon={Tick01Icon} size={12} color="white" strokeWidth={2.5} /> : i + 1}
                    </span>
                    <span style={{ fontSize: '0.86rem', fontWeight: last ? 700 : 500, color: 'var(--text-heading)' }}>{s}</span>
                  </motion.div>
                );
              })}
            </div>

            <div style={{ borderTop: '1px solid var(--line)', marginTop: 12, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {f.notes.map((n) => (
                <div key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <HugeiconsIcon icon={Tick01Icon} size={15} color="var(--success)" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{n}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 10, marginTop: 22, padding: '12px 24px',
          background: 'var(--primary-bg)', borderRadius: 'var(--radius)',
        }}
      >
        <HugeiconsIcon icon={UserCheck01Icon} size={20} color="var(--primary)" strokeWidth={1.7} />
        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)' }}>
          Nobody checks or approves their own work, and every action is on the record.
        </span>
      </motion.div>
    </div>
  );
}
