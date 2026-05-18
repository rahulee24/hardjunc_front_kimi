import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { architectureConfig } from '../config';

export default function CinematicVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    gsap.set(text, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(text, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!architectureConfig.sectionLabel && !architectureConfig.title) {
    return null;
  }

  return (
    <section
      id="cinematic"
      ref={sectionRef}
      style={{
        padding: '150px 5vw 80px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {architectureConfig.sectionLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
            }}
          >
            {architectureConfig.sectionLabel}
          </motion.div>
        )}
        <div className="section-divider mb-16" />

        <div className="relative">
          {/* Video or animated placeholder */}
          {architectureConfig.videoPath ? (
            <div
              className="relative overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '80vw',
                margin: '0 auto',
                aspectRatio: '21/9',
              }}
            >
              <video
                ref={useRef<HTMLVideoElement>(null)}
                src={architectureConfig.videoPath}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '80vw',
                margin: '0 auto',
                aspectRatio: '21/9',
                borderRadius: 16,
                border: '1px solid rgba(16, 185, 129, 0.15)',
                background: 'linear-gradient(135deg, #0d1117 0%, #0a0a0a 50%, #0d1f17 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Animated circuit pattern background */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(ellipse at 20% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
                  `,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 'clamp(24px, 3vw, 48px)',
                    fontWeight: 400,
                    color: '#10b981',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    marginBottom: 16,
                    textShadow: '0 0 40px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  CADMINT
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 300,
                    color: '#666',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  Ecosystem Visualization
                </div>
              </div>
            </motion.div>
          )}

          <div
            ref={textRef}
            className="flex flex-col md:flex-row md:items-center"
            style={{ marginTop: 160, gap: '60px' }}
          >
            {architectureConfig.title && (
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 4vw, 64px)',
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  color: '#ffffff',
                  margin: 0,
                  flex: '0 0 50%',
                  textWrap: 'balance',
                }}
              >
                {architectureConfig.title}
              </h2>
            )}
            {architectureConfig.description && (
              <div style={{ flex: '1 1 50%' }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 17,
                    lineHeight: 1.85,
                    color: '#dadada',
                    margin: '0 0 32px 0',
                    textWrap: 'pretty',
                  }}
                >
                  {architectureConfig.description}
                </p>
                <a href="https://cadmint.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <LiquidGlassButton>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      Launch Ecosystem
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </LiquidGlassButton>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
