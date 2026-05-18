import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AmberCascades from './AmberCascades';
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

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Digital rain background — constrained to top hero area */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, opacity: 0.4 }}>
        <AmberCascades />
      </div>

      {/* Back nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 80,
          padding: '0 5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(8px)',
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

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero */}
        <section style={{ padding: '180px 5vw 100px', maxWidth: 860, margin: '0 auto' }}>
          {capabilityDetailConfig.sectionLabel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 300,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#dadada',
                opacity: 0.5,
                marginBottom: 24,
              }}
            >
              {capabilityDetailConfig.sectionLabel}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: '0 0 24px 0',
            }}
          >
            {data.title}
          </motion.h1>
          {data.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(218, 218, 218, 0.8)',
                margin: 0,
                maxWidth: 540,
              }}
            >
              {data.subtitle}
            </motion.p>
          )}
        </section>

        {/* Divider */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw' }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(16, 185, 129, 0.1)' }} />
        </div>

        {/* Article body */}
        <article style={{ padding: '80px 5vw', maxWidth: 860, margin: '0 auto' }}>
          {data.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 200,
                fontSize: 16,
                lineHeight: 1.9,
                color: '#dadada',
                marginBottom: i < data.paragraphs.length - 1 ? 32 : 0,
              }}
            >
              {p}
            </motion.p>
          ))}
        </article>

        {/* Prev / Next navigation */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw 120px' }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(16, 185, 129, 0.08)', marginBottom: 40 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {prevSlug ? (
              <a
                href={`/capability/${prevSlug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/capability/${prevSlug}`); window.scrollTo(0, 0); }}
                className="nav-link"
                style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
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
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, textAlign: 'right' }}
              >
                <span style={{ fontSize: 11, opacity: 0.4, letterSpacing: '2px', textTransform: 'uppercase' }}>{capabilityDetailConfig.nextLabel}</span>
                <span>{capabilityDetailConfig.capabilities[nextSlug].title}</span>
              </a>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
