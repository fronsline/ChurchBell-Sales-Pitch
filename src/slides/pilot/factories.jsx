// Slide factory: menti() returns the Mentimeter join slide component.
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { PresentationBarChart01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../../components/AnimatedText';
import { pilot } from '../../decks/madras-pilot.config';

// The one Mentimeter slide: scan the QR (or type the code), then the presenter switches to the
// Mentimeter presentation for the questions and comes back here afterwards.
export function menti() {
  function MentiSlide() {
    const { url, code, qrImage } = pilot.menti;
    return (
      <div className="slide-center">
        <div className="bg-blob bg-blob-1" />
        <FadeUpText delay={0.1}>
          <span className="tag tag-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <HugeiconsIcon icon={PresentationBarChart01Icon} size={16} color="#7367F0" strokeWidth={1.5} />
            Let's hear from you
          </span>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <h2 style={{ marginBottom: 8 }}>Take Out Your <span className="gradient-text">Phone</span></h2>
        </FadeUpText>
        <FadeUpText delay={0.3}>
          <p style={{ marginBottom: 36, color: 'var(--text-muted)', maxWidth: 680 }}>
            Scan the code to join. No app or login needed, and your answers are anonymous.
          </p>
        </FadeUpText>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: 48, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px 44px', boxShadow: 'var(--shadow-lg)' }}
        >
          {qrImage && <img src={qrImage} alt="Mentimeter QR code" style={{ width: 300, height: 300, imageRendering: 'pixelated' }} />}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 6 }}>Or go to</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 18 }}>{url}</div>
            <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 6 }}>and enter the code</div>
            <div style={{ fontSize: '3.2rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: 3, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>{code}</div>
          </div>
        </motion.div>
      </div>
    );
  }
  return MentiSlide;
}
