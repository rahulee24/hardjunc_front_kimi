import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { type: 'comment', text: '// HardJunc AI Co-Pilot' },
  { type: 'comment', text: '// Translating intent to circuit...' },
  { type: 'blank', text: '' },
  { type: 'code', text: '#include <HardJunc.h>' },
  { type: 'code', text: 'void setup() {' },
  { type: 'code', text: '  Hardware.sync();' },
  { type: 'code', text: '  pinMode(SENSOR_PIN, INPUT);' },
  { type: 'code', text: '}' },
  { type: 'blank', text: '' },
  { type: 'code', text: 'void loop() {' },
  { type: 'code', text: '  int value = analogRead(SENSOR_PIN);' },
  { type: 'code', text: '  if (value < DARK_THRESHOLD) {' },
  { type: 'code', text: '    digitalWrite(LED_PIN, HIGH);' },
  { type: 'code', text: '  } else {' },
  { type: 'code', text: '    digitalWrite(LED_PIN, LOW);' },
  { type: 'code', text: '  }' },
  { type: 'code', text: '}' },
];

const statusItems = [
  { label: 'SYNCHRONIZED', value: 'Vision_Active', active: true },
  { label: 'DEBUGGER', value: 'Error: VCC disconnected on Pin 4.', active: false },
];

export default function AiDemo() {
  const [visibleLines, setVisibleLines] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let line = 0;
            const interval = setInterval(() => {
              line++;
              setVisibleLines(line);
              if (line >= codeLines.length) {
                clearInterval(interval);
              }
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-demo"
      ref={sectionRef}
      style={{
        padding: '150px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
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
          AI Assistant
        </motion.div>
        <div className="section-divider mb-16" />

        <div className="flex flex-col lg:flex-row" style={{ gap: 60 }}>
          {/* Left: Code editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
            style={{
              borderRadius: 12,
              border: '1px solid rgba(16, 185, 129, 0.15)',
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(12px)',
              overflow: 'hidden',
            }}
          >
            {/* Editor header */}
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              </div>
              <span
                style={{
                  marginLeft: 12,
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#666',
                  letterSpacing: '0.5px',
                }}
              >
                sketch.ino — HardJunc Studio
              </span>
            </div>

            {/* Code content */}
            <div style={{ padding: '20px 24px' }}>
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    opacity: i < visibleLines ? 1 : 0,
                    transform: i < visibleLines ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.3s ease',
                    minHeight: line.type === 'blank' ? 8 : 24,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      color: '#444',
                      width: 24,
                      textAlign: 'right',
                      flexShrink: 0,
                    }}
                  >
                    {line.type !== 'blank' ? i + 1 : ''}
                  </span>
                  <span
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 13,
                      color: line.type === 'comment' ? '#6b7280' : line.type === 'code' ? '#10b981' : '#888',
                      fontStyle: line.type === 'comment' ? 'italic' : 'normal',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {line.text}
                  </span>
                </div>
              ))}

              {/* Blinking cursor */}
              {visibleLines >= codeLines.length && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 4 }}>
                  <span style={{ width: 24 }} />
                  <span
                    style={{
                      width: 8,
                      height: 18,
                      background: '#10b981',
                      display: 'inline-block',
                      animation: 'blink 1s step-end infinite',
                    }}
                  />
                </div>
              )}
            </div>

            {/* Status bar */}
            <div
              style={{
                padding: '8px 16px',
                borderTop: '1px solid rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', gap: 16 }}>
                {statusItems.map((item) => (
                  <span
                    key={item.label}
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 10,
                      color: item.active ? '#10b981' : '#ef4444',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item.label}: {item.value}
                  </span>
                ))}
              </div>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 10,
                  color: '#10b981',
                }}
              >
                Connected
              </span>
            </div>
          </motion.div>

          {/* Right: AI chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                borderRadius: 16,
                border: '1px solid rgba(16, 185, 129, 0.15)',
                background: 'rgba(16, 185, 129, 0.03)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#ffffff',
                    }}
                  >
                    Idea-to-Design AI
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      color: '#666',
                    }}
                  >
                    Your engineering co-pilot
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.04)',
                    marginBottom: 12,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: '#aaa',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    "I want an Arduino that blinks when it gets dark."
                  </p>
                </div>

                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      color: '#10b981',
                      margin: '0 0 8px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    Generating blueprint...
                  </p>
                  <p
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      color: '#34d399',
                      margin: '4px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    + Added: Photoresistor (LDR)
                  </p>
                  <p
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      color: '#34d399',
                      margin: '4px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    + Added: 10kΩ Resistor
                  </p>
                  <p
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      color: '#34d399',
                      margin: '4px 0 0 0',
                      lineHeight: 1.5,
                    }}
                  >
                    + Writing analogRead() logic...
                  </p>
                </div>
              </div>

              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: '#888',
                }}
              >
                Instantly translates user descriptions into complete circuit schematics and starter code. A chat-based assistant that acts as your personal engineering co-pilot.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
