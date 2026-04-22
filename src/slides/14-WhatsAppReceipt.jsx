import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { SmartPhone01Icon, SmsCodeIcon, WhatsappIcon, DocumentAttachmentIcon, ChurchIcon } from '@hugeicons-pro/core-stroke-rounded';

export default function WhatsAppReceipt() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 40 }}>
          Instant Receipt <span className="gradient-text">to Member</span>
        </h2>
      </FadeUpText>

      <div className="slide-split" style={{ maxWidth: 1100 }}>
        {/* Left: Explanation */}
        <div className="slide-left" style={{ gap: 24 }}>
          <FadeUpText delay={0.2}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-heading)', fontWeight: 500 }}>
              The moment you save a transaction, the member receives:
            </p>
          </FadeUpText>

          <StaggerContainer staggerDelay={0.2} delay={0.5} className="flex-col gap-md">
            <StaggerItem>
              <GlassCard style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px' }}>
                <HugeiconsIcon icon={WhatsappIcon} size={28} color="#7367F0" />
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>WhatsApp Message</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    With PDF receipt attached
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>
            <StaggerItem>
              <GlassCard style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px' }}>
                <HugeiconsIcon icon={SmsCodeIcon} size={28} color="#7367F0" />
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>SMS Confirmation</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Instant text notification
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>
          </StaggerContainer>

          <FadeUpText delay={1.2}>
            <p style={{
              fontSize: '1rem',
              color: 'var(--primary)',
              fontWeight: 600,
              marginTop: 8,
              padding: '12px 16px',
              background: 'var(--primary-bg)',
              borderRadius: 'var(--radius-sm)',
              borderLeft: '3px solid var(--primary)',
            }}>
              No manual receipts and no hard copy of receipts needed.
            </p>
          </FadeUpText>
        </div>

        {/* Right: WhatsApp Mockup */}
        <div className="slide-right">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ width: 340 }}
          >
            {/* WhatsApp header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 16px', background: '#075E54', color: 'white',
              borderRadius: '12px 12px 0 0', fontWeight: 600, fontSize: '0.9rem',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <HugeiconsIcon icon={ChurchIcon} size={20} color="white" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Grace Church</div>
                <div style={{ fontSize: '0.65rem', opacity: 0.7, textAlign: 'left' }}>online</div>
              </div>
            </div>

            {/* Chat body */}
            <div style={{
              background: '#ECE5DD',
              padding: '20px 14px',
              borderRadius: '0 0 12px 12px',
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              gap: 8,
            }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
              >
                <div className="whatsapp-bubble">
                  {/* PDF attachment */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 12px', background: 'rgba(0,0,0,0.04)',
                    borderRadius: 8, marginBottom: 10,
                  }}>
                    <div style={{
                      width: 36, height: 40, borderRadius: 4,
                      background: '#E8383D', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', color: 'white', fontSize: '0.55rem',
                      fontWeight: 700, flexShrink: 0,
                    }}>
                      PDF
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#303030' }}>
                        Receipt-R-2026-0042.pdf
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#8E8E8E' }}>
                        520 KB &middot; pdf
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.82rem', lineHeight: 1.7, margin: 0, color: '#303030' }}>
                    Dear <strong>Mr. John Samuel</strong>,
                    <br /><br />
                    Your receipt for <strong>Rs. 500</strong> (Monthly Subscription - March 2026)
                    has been generated. Please find the receipt attached for your reference.
                    <br /><br />
                    Thank you for your faithful contribution.
                    <br /><br />
                    Blessings,<br />
                    <strong>Grace Church</strong>
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                    <span style={{ fontSize: '0.6rem', color: '#7367F0', fontStyle: 'italic' }}>
                      Powered by ChurchBell
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#8E8E8E' }}>10:32 AM</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
