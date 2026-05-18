import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AmberCascades from './AmberCascades';
import CustomCursor from '../components/CustomCursor';
import { siteConfig, capabilityDetailConfig } from '../config';

const SLUGS = Object.keys(capabilityDetailConfig.capabilities);

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const data = slug ? capabilityDetailConfig.capabilities[slug] : null;

  if (!data) {
    return (
      <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#dadada', fontFamily: "'Inter', sans-serif" }}>{capabilityDetailConfig.notFoundText || 'Not found.'}</p>
      </div>
    );
  }

  const currentIndex = SLUGS.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? SLUGS[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUGS.length - 1 ? SLUGS[currentIndex + 1] : null;
  const capabilityNumber = String(currentIndex + 1).padStart(2, '0');

  return (
    <div style={{ background: '#070909', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <CustomCursor />
      <div className="scanline-overlay" />

      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.22 }}>
        <AmberCascades />
      </div>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 76,
          padding: '0 5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(7, 9, 9, 0.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.08)',
        }}
      >
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="text-white no-underline"
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
        >
          {siteConfig.brandName}
        </a>
        {capabilityDetailConfig.backLinkText && (
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className="nav-link"
          >
            {capabilityDetailConfig.backLinkText}
          </a>
        )}
      </nav>

      <main style={{ position: 'relative', zIndex: 2, paddingTop: 76 }}>
        <section style={{ padding: '44px 5vw 52px' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">
              <aside style={{ paddingTop: 10 }}>
                {capabilityDetailConfig.sectionLabel && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 300,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#9ce8d0',
                      opacity: 0.85,
                      marginBottom: 18,
                    }}
                  >
                    {capabilityDetailConfig.sectionLabel}
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  style={{
                    borderTop: '1px solid rgba(16, 185, 129, 0.25)',
                    borderBottom: '1px solid rgba(16, 185, 129, 0.12)',
                    padding: '22px 0',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 42,
                      lineHeight: 1,
                      color: '#10b981',
                      marginBottom: 16,
                    }}
                  >
                    {capabilityNumber}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: '#9ca3af',
                      margin: 0,
                    }}
                  >
                    A focused breakdown of the bottleneck, why it matters, and how HardJunc turns it into a clearer workflow.
                  </p>
                </motion.div>
              </aside>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(42px, 5vw, 76px)',
                    lineHeight: 1,
                    letterSpacing: '-1px',
                    color: '#ffffff',
                    margin: '0 0 18px',
                    textWrap: 'balance',
                  }}
                >
                  {data.title}
                </motion.h1>

                {data.subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.18 }}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: 'clamp(16px, 1.5vw, 20px)',
                      lineHeight: 1.65,
                      color: 'rgba(218, 218, 218, 0.78)',
                      margin: '0 0 34px',
                      maxWidth: 720,
                    }}
                  >
                    {data.subtitle}
                  </motion.p>
                )}

                <div style={{ display: 'grid', gap: 0 }}>
                  {data.paragraphs.map((p, i) => (
                    <motion.section
                      key={i}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.22 + i * 0.08 }}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(54px, 72px) minmax(0, 1fr)',
                        gap: 18,
                        padding: '22px 0',
                        borderTop: i === 0 ? '1px solid rgba(16, 185, 129, 0.18)' : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'GeistMono', monospace",
                          fontSize: 12,
                          color: '#10b981',
                          letterSpacing: '0.18em',
                          paddingTop: 5,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 200,
                          fontSize: 16,
                          lineHeight: 1.85,
                          color: '#dadada',
                          margin: 0,
                          maxWidth: 760,
                        }}
                      >
                        {p}
                      </p>
                    </motion.section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 5vw 72px' }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(16, 185, 129, 0.08)', marginBottom: 24 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', gap: 18, flexWrap: 'wrap' }}>
            {prevSlug ? (
              <a
                href={`/capability/${prevSlug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/capability/${prevSlug}`); window.scrollTo(0, 0); }}
                className="nav-link"
                style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 0' }}
              >
                <span style={{ fontSize: 11, opacity: 0.4, letterSpacing: '2px', textTransform: 'uppercase' }}>{capabilityDetailConfig.prevLabel}</span>
                <span>{capabilityDetailConfig.capabilities[prevSlug].title}</span>
              </a>
            ) : <div />}
            {nextSlug ? (
              <a
                href={`/capability/${nextSlug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/capability/${nextSlug}`); window.scrollTo(0, 0); }}
                className="nav-link"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, padding: '14px 0', textAlign: 'right' }}
              >
                <span style={{ fontSize: 11, opacity: 0.4, letterSpacing: '2px', textTransform: 'uppercase' }}>{capabilityDetailConfig.nextLabel}</span>
                <span>{capabilityDetailConfig.capabilities[nextSlug].title}</span>
              </a>
            ) : <div />}
          </div>
        </div>
      </main>
    </div>
  );
}
