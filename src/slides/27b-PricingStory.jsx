import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { CloudIcon, WhatsappIcon, Shield01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const costItems = [
  { icon: CloudIcon, label: 'AWS Cloud Hosting', desc: 'Servers, databases, backups' },
  { icon: Shield01Icon, label: 'File Storage', desc: 'Receipts, documents, exports' },
  { icon: WhatsappIcon, label: 'WhatsApp via Meta', desc: 'Automated messages to members' },
];

export default function PricingStory() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 40 }}>
          The Story Behind <span className="gradient-text">Our Pricing</span>
        </h2>
      </FadeUpText>

      <div style={{ maxWidth: 700, width: '100%' }}>
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="quote-block"
          style={{ marginBottom: 40, fontSize: '1.1rem', lineHeight: 1.9 }}
        >
          I didn't build ChurchBell to make money. I built it because I saw a need.
          God gave me the talent in programming and I wanted to give it back to something useful. But we run this in the cloud, and the cloud has real costs.
        </motion.div>

        {/* Cost breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'flex', gap: 20, marginBottom: 40,
          }}
        >
          {costItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              style={{
                flex: 1, padding: '20px 18px',
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--line)', borderRadius: 'var(--radius)',
                textAlign: 'center',
              }}
            >
              <HugeiconsIcon icon={item.icon} size={28} color="#7367F0" />
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginTop: 10 }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{
            padding: '20px 28px', background: 'var(--primary-bg)',
            borderRadius: 'var(--radius)', borderLeft: '4px solid var(--primary)',
          }}
        >
          <p style={{ fontSize: '1.05rem', color: 'var(--text-heading)', lineHeight: 1.7, margin: 0 }}>
            We thought through many options: hefty one-time payments, fixed monthly fees.
            But those don't work for small churches. So we decided to charge
            <strong style={{ color: 'var(--primary)' }}> what it actually costs us</strong>, and make it fair for everyone.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
