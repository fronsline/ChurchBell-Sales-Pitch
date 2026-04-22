import { motion } from 'framer-motion';
import { TypeWriter, FadeUpText } from '../components/AnimatedText';

export default function Hero() {
  return (
    <div className="slide-center" style={{ position: 'relative' }}>
      {/* Full-screen background image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/images/login-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <motion.img
        src="/images/logo-color.png"
        alt="ChurchBell"
        style={{ height: 120, marginBottom: 40, position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <h1 style={{ fontSize: '3.5rem', marginBottom: 24, position: 'relative', zIndex: 1 }}>
        <TypeWriter text="Connected. United. Blessed." delay={0.6} speed={0.04} />
      </h1>

      <FadeUpText delay={2.2}>
        <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: 600, position: 'relative', zIndex: 1 }}>
          A comprehensive, cloud-based church management system
        </p>
      </FadeUpText>
    </div>
  );
}
