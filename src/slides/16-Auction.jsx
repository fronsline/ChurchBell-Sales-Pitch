import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { LegalHammerIcon } from '@hugeicons-pro/core-stroke-rounded';

const flowSteps = [
  { num: '1', text: 'Create the auction event (Harvest Festival)' },
  { num: '2', text: 'Record each item, who won it and the amount' },
  { num: '3', text: 'Collect at the receipt screen, in full or in parts' },
  { num: '4', text: 'See what is pending by event or by member' },
  { num: '5', text: 'Members see their own auction dues in the app' },
];

const auctionItems = [
  { name: 'Rice Bag', member: 'Thomas K.', amount: '₹5,000', status: 'Paid', tagClass: 'tag-success' },
  { name: 'Flowers', member: 'Mary Joseph', amount: '₹2,000', status: 'Pending', tagClass: 'tag-alert' },
  { name: 'Cake', member: 'Samuel P.', amount: '₹3,000', status: 'Partial', tagClass: 'tag-primary' },
];

export default function Auction() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 4 }}>
          <span className="gradient-text">Auction</span> Management
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 40, color: 'var(--text-muted)' }}>
          Track every bid, every payment, every pending rupee
        </p>
      </FadeUpText>

      <div className="slide-split" style={{ maxWidth: 1100 }}>
        {/* Left: Flow */}
        <div className="slide-left">
          <StaggerContainer staggerDelay={0.15} delay={0.3} className="flex-col gap-md">
            {flowSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '12px 16px',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    color: 'white', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem',
                    flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-heading)' }}>
                    {step.text}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUpText delay={1.2}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 12, paddingLeft: 16, textAlign: 'left' }}>
              Starting out? Bring in last year's unpaid bids from an Excel sheet in one go.
            </p>
          </FadeUpText>
        </div>

        {/* Right: Mockup card */}
        <div className="slide-right">
          <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 380, padding: 0, overflow: 'hidden' }}>
            {/* Card header */}
            <div style={{
              background: 'var(--gradient-primary)',
              padding: '16px 24px',
              color: 'white',
            }}>
              <div style={{ fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Auction Event
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                <HugeiconsIcon icon={LegalHammerIcon} size={22} color="white" /> Harvest 2026
              </div>
            </div>

            {/* Items */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 90px 80px',
                gap: 12, alignItems: 'center',
                padding: '0 0 10px', borderBottom: '1px solid var(--line)',
                fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)',
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>
                <span>Item</span>
                <span style={{ textAlign: 'center', minWidth: 80 }}>Amount</span>
                <span style={{ textAlign: 'center', minWidth: 70 }}>Status</span>
              </div>

              <StaggerContainer staggerDelay={0.2} delay={0.9}>
                {auctionItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 90px 80px',
                      gap: 12, alignItems: 'center',
                      padding: '14px 0',
                      borderBottom: i < auctionItems.length - 1 ? '1px solid var(--line)' : 'none',
                    }}>
                      <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        <span style={{ fontWeight: 500, color: 'var(--text-heading)', fontSize: '0.9rem' }}>
                          {item.name}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.member}</span>
                      </span>
                      <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem', textAlign: 'center', minWidth: 80 }}>
                        {item.amount}
                      </span>
                      <span className={`tag ${item.tagClass}`} style={{ justifyContent: 'center', minWidth: 70 }}>{item.status}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Total */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0 0', marginTop: 8,
                  borderTop: '2px solid var(--primary)',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.95rem' }}>
                  Total
                </span>
                <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.1rem' }}>
                  ₹10,000
                </span>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
