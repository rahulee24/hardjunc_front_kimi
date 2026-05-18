import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AmberCascades from './AmberCascades';
import GridBackground from '../components/GridBackground';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { heroConfig } from '../config';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  if (!heroConfig.titleLine1) {
    return null;
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <AmberCascades />
      <GridBackground />

      <div
        className="relative z-10 flex flex-col justify-between pointer-events-none"
        style={{
          height: '100%',
          padding: '28vh 5vw 8vh',
        }}
      >
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mb-8 pointer-events-auto"
          >
            <span className="green-badge">{heroConfig.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="text-white"
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
              fontSize: 'clamp(48px, 6vw, 96px)',
              lineHeight: 1.0,
              letterSpacing: '-3px',
              textShadow: '0 4px 24px rgba(0,0,0,0.8)',
              marginBottom: 'clamp(32px, 4vw, 56px)',
              width: 'fit-content',
            }}
          >
            <span className="block">{heroConfig.titleLine1}</span>
            <span className="block green-glow-text" style={{ color: '#10b981' }}>{heroConfig.titleLine2}</span>
            <span className="block" style={{ color: 'rgba(255,255,255,0.35)' }}>{heroConfig.titleLine3}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(16px, 1.6vw, 22px)',
              lineHeight: 1.7,
              letterSpacing: '-0.3px',
              color: '#a0a0a0',
              margin: '0 0 12px 0',
              width: titleWidth || 'auto',
              maxWidth: '100%',
              textShadow: '0 2px 12px rgba(0,0,0,0.6)',
            }}
          >
            {heroConfig.subtitle}
          </motion.p>
        </div>

        {/* CTA */}
        {heroConfig.ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'flex-start' }}
            className="pointer-events-auto"
          >
            <a href={heroConfig.ctaUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <LiquidGlassButton>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {heroConfig.ctaText}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </LiquidGlassButton>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
