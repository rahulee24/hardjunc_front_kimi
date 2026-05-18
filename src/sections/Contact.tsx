import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AmberCascades from './AmberCascades';
import GridBackground from '../components/GridBackground';
import CustomCursor from '../components/CustomCursor';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { siteConfig } from '../config';

const contactChannels = [
  { label: 'Founder Desk', value: 'hello@hardjunc.com' },
  { label: 'Studio Access', value: 'cadmint.vercel.app' },
  { label: 'Base', value: 'Nirmaan, IIT Madras' },
];

const contactPrompts = [
  'Prototype collaboration',
  'Campus or lab partnership',
  'Early CADmint access',
  'Hardware workflow demo',
];

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#070909', position: 'relative', overflow: 'hidden' }}>
      <CustomCursor />
      <div className="scanline-overlay" />
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.28 }}>
        <AmberCascades />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.55 }}>
        <GridBackground />
      </div>

      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          height: 80,
          padding: '0 5vw',
          background: 'rgba(7, 9, 9, 0.86)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.08)',
        }}
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-white"
          style={{
            border: 0,
            background: 'transparent',
            fontFamily: "'GeistMono', monospace",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
        >
          {siteConfig.brandName}
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="nav-link"
          style={{ border: 0, background: 'transparent' }}
        >
          Back to home
        </button>
      </nav>

      <main style={{ position: 'relative', zIndex: 2, padding: '140px 5vw 80px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1fr)] lg:items-start">
            <section>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 300,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#9ce8d0',
                  marginBottom: 26,
                }}
              >
                Contact HardJunc
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 }}
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 'clamp(44px, 6vw, 86px)',
                  lineHeight: 1,
                  letterSpacing: '-2px',
                  color: '#ffffff',
                  margin: '0 0 28px',
                  textWrap: 'balance',
                }}
              >
                BUILD THE NEXT PROTOTYPE WITH US.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(16px, 1.45vw, 20px)',
                  lineHeight: 1.75,
                  color: '#a7b4b1',
                  maxWidth: 680,
                  margin: '0 0 38px',
                }}
              >
                Tell us what you are building, where your workflow breaks, or how your lab wants to use CADmint. We will route it to the right person and respond with a clear next step.
              </motion.p>

              <div className="grid gap-4 sm:grid-cols-3" style={{ maxWidth: 760 }}>
                {contactChannels.map((channel, index) => (
                  <motion.div
                    key={channel.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.24 + index * 0.06 }}
                    style={{
                      padding: '18px 16px',
                      borderTop: '1px solid rgba(16, 185, 129, 0.22)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'GeistMono', monospace",
                        fontSize: 10,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#10b981',
                        marginBottom: 10,
                      }}
                    >
                      {channel.label}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.55, color: '#d1d5db' }}>
                      {channel.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              style={{
                border: '1px solid rgba(16, 185, 129, 0.18)',
                background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.08), rgba(255,255,255,0.025))',
                boxShadow: '0 32px 120px rgba(0,0,0,0.34)',
                backdropFilter: 'blur(18px)',
                padding: '30px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, marginBottom: 26 }}>
                <div>
                  <h2
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: 'clamp(30px, 3vw, 44px)',
                      lineHeight: 1,
                      color: '#ffffff',
                      margin: '0 0 10px',
                    }}
                  >
                    Start a conversation
                  </h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.65, color: '#95a3a0', margin: 0 }}>
                    Share the signal. We will handle the routing.
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 11,
                    color: '#10b981',
                    letterSpacing: '0.18em',
                    paddingTop: 8,
                  }}
                >
                  ONLINE
                </span>
              </div>

              <form style={{ display: 'grid', gap: 16 }}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input aria-label="Name" placeholder="Name" className="contact-input" />
                  <input aria-label="Email" placeholder="Email" className="contact-input" />
                </div>
                <input aria-label="Organization" placeholder="Organization / lab" className="contact-input" />

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {contactPrompts.map((prompt) => (
                    <button
                      type="button"
                      key={prompt}
                      style={{
                        padding: '9px 12px',
                        border: '1px solid rgba(16, 185, 129, 0.18)',
                        background: 'rgba(0,0,0,0.22)',
                        color: '#b7ddd3',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                <textarea aria-label="Message" placeholder="What are you trying to build?" className="contact-input" rows={6} />

                <a href="mailto:hello@hardjunc.com" style={{ textDecoration: 'none', width: 'fit-content' }}>
                  <LiquidGlassButton>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </span>
                  </LiquidGlassButton>
                </a>
              </form>
            </motion.section>
          </div>
        </div>
      </main>

      <style>{`
        .contact-input {
          width: 100%;
          border: 1px solid rgba(16, 185, 129, 0.16);
          background: rgba(0, 0, 0, 0.28);
          color: #f3f4f6;
          padding: 14px 15px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .contact-input::placeholder {
          color: rgba(209, 213, 219, 0.42);
        }
        .contact-input:focus {
          border-color: rgba(16, 185, 129, 0.55);
          background: rgba(16, 185, 129, 0.06);
        }
      `}</style>
    </div>
  );
}
