import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { capabilitiesConfig } from '../config';

export default function Curriculum() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = capabilitiesConfig.items[selectedIndex] || capabilitiesConfig.items[0];

  if (!capabilitiesConfig.sectionLabel && capabilitiesConfig.items.length === 0) {
    return null;
  }

  const previewDetails = useMemo(
    () => [
      'Unified hardware + software workflow',
      'Premium guided debugging and simulation',
      'Intent-driven design with AI assistance',
    ],
    []
  );

  return (
    <section
      id="curriculum"
      className="relative"
      style={{
        padding: '100px 4vw',
        minHeight: 'auto',
        background: 'linear-gradient(180deg, #060708 0%, #080b0d 100%)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {capabilitiesConfig.sectionLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#a4f2d8',
              opacity: 0.85,
            }}
          >
            {capabilitiesConfig.sectionLabel}
          </motion.div>
        )}

        <div className="section-divider mb-12" />

        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="space-y-4">
            {capabilitiesConfig.items.map((item, index) => {
              const active = index === selectedIndex;
              return (
                <button
                  type="button"
                  key={item.slug}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => navigate(`/capability/${item.slug}`)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '22px 20px',
                    borderRadius: 24,
                    border: active ? '1px solid rgba(16, 185, 129, 0.9)' : '1px solid rgba(255,255,255,0.08)',
                    background: active ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                    boxShadow: active ? '0 28px 80px rgba(16, 185, 129, 0.14)' : '0 0 0 rgba(0,0,0,0)',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 12,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "'EB Garamond', serif",
                          fontSize: 22,
                          margin: 0,
                          color: '#fff',
                          lineHeight: 1.1,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 13,
                          color: '#9ccfc4',
                          marginTop: 10,
                          lineHeight: 1.7,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 11,
                        color: active ? '#a4f2d8' : '#7dd3fc',
                        opacity: 0.95,
                        minWidth: 50,
                        textAlign: 'right',
                      }}
                    >
                      {item.slug.replace(/-/g, ' ').toUpperCase()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.slug}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                style={{
                  borderRadius: 32,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.4)',
                }}
              >
                {selectedItem.image && (
                  <div
                    style={{
                      position: 'relative',
                      minHeight: 240,
                      maxHeight: 280,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.75)',
                        transition: 'transform 0.8s ease',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at top left, rgba(16,185,129,0.2), transparent 32%), linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.45))',
                      }}
                    />
                  </div>
                )}
                <div style={{ padding: '28px 30px 24px' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '10px 14px',
                      borderRadius: 999,
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#a4f2d8',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      marginBottom: 18,
                    }}
                  >
                    Premium Insight
                  </div>
                  <h2
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: 32,
                      margin: 0,
                      color: '#ffffff',
                      lineHeight: 1.05,
                    }}
                  >
                    {selectedItem.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      color: '#d2d8df',
                      margin: '20px 0 0',
                      lineHeight: 1.85,
                    }}
                  >
                    {selectedItem.description}
                  </p>

                <div style={{ display: 'grid', gap: 12, marginTop: 26 }}>
                    {previewDetails.map((detail) => (
                      <div
                        key={detail}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          padding: '14px 16px',
                          borderRadius: 18,
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <span style={{ color: '#10b981', fontSize: 14 }}>•</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#d1d5db' }}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                <div style={{ marginTop: 26, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9ca3af' }}>
                      Transform bottlenecks into premium flow with a unified workspace.
                    </span>
                    <button
                      type="button"
                      style={{
                        borderRadius: 999,
                        padding: '11px 20px',
                        fontSize: 13,
                        fontWeight: 600,
                        background: '#10b981',
                        color: '#020617',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 16px 32px rgba(16,185,129,0.22)',
                      }}
                    >
                      Explore the workflow
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
