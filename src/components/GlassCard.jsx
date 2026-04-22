import { motion } from 'framer-motion';

export default function GlassCard({ children, delay = 0, className = '', style = {}, onClick }) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export function IconCard({ icon, title, description, delay = 0, color = '#7367F0' }) {
  return (
    <GlassCard delay={delay} className="icon-card">
      <div className="icon-card-icon" style={{ color, borderColor: color + '30' }}>
        {icon}
      </div>
      <h3 className="icon-card-title">{title}</h3>
      {description && <p className="icon-card-desc">{description}</p>}
    </GlassCard>
  );
}
