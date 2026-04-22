import { motion } from 'framer-motion';

export default function WhatIf() {
  return (
    <div className="slide-center" style={{ position: 'relative' }}>
      {/* Full-screen background dashboard image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/images/ai/modern-dashboard.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="bg-blob bg-blob-3" />

      <motion.h2
        style={{ fontSize: '2.4rem', color: 'var(--text-heading)', position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        What if all of this...
      </motion.h2>

      <motion.p
        style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', marginTop: 24, marginBottom: 16, position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        was just
      </motion.p>

      <motion.div
        style={{ position: 'relative', display: 'inline-block' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Purple glow behind text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            height: 120,
            background: 'radial-gradient(ellipse, rgba(115, 103, 240, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
            pointerEvents: 'none',
          }}
        />
        <h1
          className="gradient-text"
          style={{ fontSize: '7rem', fontWeight: 700, letterSpacing: '-0.03em', position: 'relative', zIndex: 1 }}
        >
          One Click?
        </h1>
      </motion.div>
    </div>
  );
}
