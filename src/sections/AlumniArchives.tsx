import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { researchConfig } from '../config';

const premiumDetails: Record<string, string[]> = {
  'CADmint Studio': [
    'AI-driven PCB layout acceleration',
    'Smart component placement optimization',
    'Real-time signal integrity previews',
  ],
  'AI Co-Pilot': [
    'Natural language circuit generation',
    'Intent-to-code reasoning engine',
    'Debug hints for hardware workflows',
  ],
  'Real-time Debug': [
    'Live telemetry and voltage tracing',
    'Automated error hotspot detection',
    'Instant reconnect and state recovery',
  ],
  'Component Lib': [
    'Curated premium module library',
    'Verified footprints and specs',
    'One-click part insertion',
  ],
  'Circuit Sim': [
    'Fast analog/digital mixed simulation',
    'Premium waveform analysis',
    'Optimized power and timing reports',
  ],
  'PCB Layout': [
    'Auto-routing for high-density boards',
    'Premium DRC and clearance checks',
    'Manufacturing-ready fabrication output',
  ],
  'Code Editor': [
    'Syntax-aware microcontroller editor',
    'Intelligent code completion',
    'Live upload and debug flow',
  ],
  Collaboration: [
    'Shared design sessions',
    'Review comments with history',
    'Secure project access controls',
  ],
};

export default function AlumniArchives() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = researchConfig.projects[selectedIndex] || researchConfig.projects[0];
  if (!researchConfig.sectionLabel && researchConfig.projects.length === 0) {
    return null;
  }

  return (
    <section
      id="alumni"
      style={{
        padding: '150px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {researchConfig.sectionLabel && (
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
            {researchConfig.sectionLabel}
          </motion.div>
        )}
        <div className="section-divider mb-16" />

        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="space-y-4">
            {researchConfig.projects.map((project, index) => {
              const active = index === selectedIndex;
              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="w-full text-left rounded-3xl border px-5 py-6 transition-all duration-300"
                  style={{
                    borderColor: active ? 'rgba(16, 185, 129, 0.85)' : 'rgba(255, 255, 255, 0.08)',
                    background: active ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                    boxShadow: active ? '0 24px 80px rgba(16, 185, 129, 0.18)' : 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'EB Garamond', serif",
                          fontSize: 18,
                          color: '#fff',
                          marginBottom: 4,
                        }}
                      >
                        {project.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 12,
                          color: '#a5f3fc',
                          opacity: 0.8,
                        }}
                      >
                        {project.discipline}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 11,
                        color: active ? '#10b981' : '#6ee7b7',
                        opacity: 0.9,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-8"
                style={{
                  boxShadow: '0 40px 120px rgba(0,0,0,0.35)',
                  backdropFilter: 'blur(22px)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 24,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        fontSize: 'clamp(32px, 3vw, 44px)',
                        color: '#ffffff',
                        lineHeight: 1.05,
                      }}
                    >
                      {selectedProject.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        color: '#9ca3af',
                        marginTop: 8,
                      }}
                    >
                      {selectedProject.discipline} · {selectedProject.year}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '8px 12px',
                      borderRadius: 999,
                    }}
                  >
                    Premium
                  </span>
                </div>

                {selectedProject.image && (
                  <div
                    style={{
                      overflow: 'hidden',
                      borderRadius: 24,
                      marginBottom: 24,
                      position: 'relative',
                      minHeight: 220,
                    }}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'contrast(1.05) brightness(0.95)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08), rgba(0,0,0,0.55))',
                      }}
                    />
                  </div>
                )}

                <div style={{ display: 'grid', gap: 14 }}>
                  {premiumDetails[selectedProject.title]?.map((detail) => (
                    <div
                      key={detail}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '16px 20px',
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <span style={{ color: '#10b981', fontSize: 14 }}>•</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#d1d5db' }}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: '#9ca3af',
                    }}
                  >
                    Best-in-class platform capabilities for premium hardware and software workflows.
                  </span>
                  <button
                    type="button"
                    className="rounded-full px-6 py-3 text-sm font-semibold transition"
                    style={{
                      background: '#10b981',
                      color: '#020617',
                      boxShadow: '0 18px 36px rgba(16, 185, 129, 0.22)',
                    }}
                  >
                    Explore now
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
