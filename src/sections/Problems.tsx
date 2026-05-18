import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const problems = [
  {
    label: "SYNC_CONFLICT",
    title: "Software Overload",
    description: "Juggling separate apps for coding, simulating, and PCB design destroys your creative flow instantly.",
  },
  {
    label: "PHYSICAL_DISCONNECT",
    title: "Physical Disconnect",
    description: "Designs work perfectly on a screen, but real-world breadboards fail with zero debugging assistance.",
  },
  {
    label: "BARRIER_HIGH",
    title: "High Barrier to Entry",
    description: "The steep learning curve of existing industrial software shuts out millions of students, hobbyists, and potential innovators. Hardware engineering needs a tool that speaks human.",
  },
];

export default function Problems() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 40 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLDivElement);
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: idx * 0.15,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="relative"
      style={{
        padding: '120px 5vw',
        minHeight: '80vh',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1117 50%, #0a0a0a 100%)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
              marginBottom: 16,
            }}
          >
            The Problem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Hardware
            <br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>Innovation</span>
            <br />
            is Broken.
          </motion.h2>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
          style={{
            borderLeft: '2px solid rgba(16, 185, 129, 0.4)',
            paddingLeft: 24,
          }}
        >
          <p
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: 1.6,
              color: '#a0a0a0',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            "The journey from a great idea to a working prototype is plagued by disconnected software and a steep learning curve. It stops makers before they even begin. We built HardJunc to fix this entirely."
          </p>
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'GeistMono', monospace",
                fontSize: 12,
                color: '#10b981',
              }}
            >
              JK
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: '#ffffff',
                }}
              >
                Jesvitha K.
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 300,
                  color: '#666',
                }}
              >
                Founder, HardJunc
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {problems.map((problem, i) => (
            <div
              key={problem.label}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group"
              style={{
                padding: '32px 28px',
                borderRadius: 12,
                border: '1px solid rgba(16, 185, 129, 0.1)',
                background: 'rgba(16, 185, 129, 0.02)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.06)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: '2px',
                  color: '#10b981',
                  opacity: 0.7,
                  marginBottom: 16,
                  textTransform: 'uppercase',
                }}
              >
                {problem.label}
              </div>
              <h3
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontWeight: 400,
                  fontSize: 20,
                  lineHeight: 1.3,
                  color: '#ffffff',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.5px',
                }}
              >
                {problem.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: '#888',
                  margin: 0,
                }}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
