import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AmberCascades from './AmberCascades';
import GridBackground from '../components/GridBackground';
import CustomCursor from '../components/CustomCursor';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { siteConfig } from '../config';

const contactChannels = [
  {
    label: 'Email',
    value: 'admin@hardjunc.dev',
    href: 'mailto:admin@hardjunc.dev',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'HardJunc',
    href: 'https://www.linkedin.com/company/hardjunc',
    icon: Linkedin,
  },
  {
    label: 'Address',
    value: 'Sudha & Shankar Innovation Hub\nIndian Institute Of Technology Madras\nChennai-600036',
    icon: MapPin,
  },
];

const teamContacts = [
  {
    name: 'Jesvitha K.',
    role: 'Founder and CEO',
    phone: '+91 6380790971',
    email: 'ceo@hardjunc.dev',
    linkedin: 'https://www.linkedin.com/in/jesvitha-k-386997308/',
  },
  {
    name: 'Rahul Roy',
    role: 'Co-Founder and CTO',
    phone: '+91 9174471745',
    email: 'cto@hardjunc.dev',
    linkedin: 'https://www.linkedin.com/in/rahul-roy-24238831b/',
  },
];

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="contact-page">
      <CustomCursor />
      <div className="scanline-overlay" />
      <div className="contact-rain">
        <AmberCascades />
      </div>
      <div className="contact-grid-bg">
        <GridBackground />
      </div>
      <div className="contact-vignette" />

      <nav className="contact-nav">
        <button type="button" onClick={() => navigate('/')} className="contact-brand">
          {siteConfig.brandName}
        </button>
        <button type="button" onClick={() => navigate('/')} className="contact-back">
          <ArrowLeft size={14} />
          Back to home
        </button>
      </nav>

      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-copy">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            >
              <span className="green-badge">Contact HardJunc</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.28, ease: 'easeOut' }}
            >
              BUILD WITH
              <span> HARDJUNC.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: 'easeOut' }}
            >
              Reach the HardJunc team for partnerships, demos, early access, and product conversations.
              We will route your signal to the right founder and respond with a clear next step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68, ease: 'easeOut' }}
              className="contact-actions"
            >
              <a href="mailto:admin@hardjunc.dev">
                <LiquidGlassButton>
                  <span className="contact-button-content">
                    Start Conversation
                    <Mail size={16} />
                  </span>
                </LiquidGlassButton>
              </a>
              <a href="https://www.linkedin.com/company/hardjunc" target="_blank" rel="noopener noreferrer" className="contact-secondary-link">
                LinkedIn
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="contact-section">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="contact-section-head"
          >
            <span>Direct Channels</span>
            <div className="section-divider" />
          </motion.div>

          <div className="contact-channel-grid" aria-label="Contact channels">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              const body = (
                <>
                  <div className="channel-icon">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="contact-card-label">{channel.label}</span>
                    <span className="contact-card-value">
                      {channel.value.split('\n').map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </span>
                  </div>
                </>
              );

              return (
                <motion.article
                  key={channel.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="contact-info-card"
                >
                  {channel.href ? (
                    <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {body}
                    </a>
                  ) : (
                    <div>{body}</div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="contact-section">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="contact-section-head"
          >
            <span>Founder Desk</span>
            <div className="section-divider" />
          </motion.div>

          <div className="contact-team-grid" aria-label="Team contacts">
            {teamContacts.map((person, index) => (
              <motion.article
                key={person.email}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="contact-person-card"
              >
                <div className="contact-person-heading">
                  <div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h2>{person.name}</h2>
                    <p>{person.role}</p>
                  </div>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} LinkedIn`}
                    className="contact-linkedin"
                  >
                    <Linkedin size={18} strokeWidth={2.2} />
                  </a>
                </div>

                <dl className="contact-person-details">
                  <div>
                    <dt>
                      <Phone size={14} />
                      Phone
                    </dt>
                    <dd>
                      <a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <Mail size={14} />
                      Email
                    </dt>
                    <dd>
                      <a href={`mailto:${person.email}`}>{person.email}</a>
                    </dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        .contact-page {
          min-height: 100vh;
          background: #070909;
          color: #ffffff;
          overflow-x: hidden;
          position: relative;
        }

        .contact-rain,
        .contact-grid-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .contact-rain {
          opacity: 0.34;
        }

        .contact-grid-bg {
          opacity: 0.7;
        }

        .contact-vignette {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at 76% 18%, rgba(16, 185, 129, 0.1), transparent 28%),
            linear-gradient(90deg, rgba(7, 9, 9, 0.94), rgba(7, 9, 9, 0.54) 46%, rgba(7, 9, 9, 0.9)),
            linear-gradient(180deg, rgba(7, 9, 9, 0.08), rgba(7, 9, 9, 0.96));
        }

        .contact-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 80px;
          padding: 0 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(7, 9, 9, 0.82), rgba(7, 9, 9, 0));
        }

        .contact-brand,
        .contact-back {
          pointer-events: auto;
          border: 0;
          background: transparent;
          color: #ffffff;
          font-family: 'GeistMono', monospace;
        }

        .contact-brand {
          font-size: 18px;
          font-weight: 400;
          letter-spacing: -0.5px;
        }

        .contact-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #dadada;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.5px;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .contact-back:hover {
          color: #ffffff;
          transform: translateX(-2px);
        }

        .contact-main {
          position: relative;
          z-index: 2;
        }

        .contact-hero {
          min-height: 82svh;
          display: flex;
          align-items: center;
          padding: clamp(108px, 18svh, 180px) 5vw clamp(58px, 8svh, 86px);
        }

        .contact-copy {
          max-width: 980px;
        }

        .contact-copy h1 {
          margin: clamp(32px, 4vw, 52px) 0 clamp(28px, 3.5vw, 42px);
          font-family: 'GeistMono', monospace;
          font-size: clamp(48px, 6vw, 96px);
          line-height: 1;
          letter-spacing: -3px;
          color: #ffffff;
          font-weight: 400;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.82);
          max-width: 980px;
        }

        .contact-copy h1 span {
          color: #10b981;
          text-shadow: 0 0 42px rgba(16, 185, 129, 0.16), 0 4px 24px rgba(0, 0, 0, 0.82);
        }

        .contact-copy p {
          max-width: 780px;
          margin: 0;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: clamp(16px, 1.6vw, 22px);
          line-height: 1.7;
          color: #a0a0a0;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.62);
        }

        .contact-actions {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          margin-top: clamp(34px, 4vw, 52px);
          pointer-events: auto;
        }

        .contact-actions a {
          text-decoration: none;
        }

        .contact-button-content,
        .contact-secondary-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }

        .contact-secondary-link {
          color: #9ce8d0;
          font-family: 'GeistMono', monospace;
          font-size: 13px;
          letter-spacing: 0.04em;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .contact-secondary-link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }

        .contact-section {
          position: relative;
          padding: 0 5vw clamp(72px, 8vw, 110px);
        }

        .contact-section-head {
          max-width: 1400px;
          margin: 0 auto 24px;
        }

        .contact-section-head span,
        .contact-card-label,
        .contact-person-details dt {
          font-family: 'GeistMono', monospace;
          text-transform: uppercase;
          color: #a4f2d8;
          letter-spacing: 0.2em;
          font-size: 10px;
          font-weight: 300;
        }

        .contact-section-head .section-divider {
          margin-top: 18px;
        }

        .contact-channel-grid,
        .contact-team-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          gap: 20px;
        }

        .contact-channel-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .contact-team-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .contact-info-card,
        .contact-person-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(16, 185, 129, 0.14);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(16, 185, 129, 0.035));
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        .contact-info-card:hover,
        .contact-person-card:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.32);
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.075), rgba(255, 255, 255, 0.028));
        }

        .contact-info-card > a,
        .contact-info-card > div {
          min-height: 150px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 24px;
          color: inherit;
          text-decoration: none;
        }

        .channel-icon {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border: 1px solid rgba(16, 185, 129, 0.22);
          background: rgba(16, 185, 129, 0.07);
          color: #10b981;
        }

        .contact-card-value {
          display: grid;
          gap: 5px;
          margin-top: 12px;
          font-family: 'Inter', sans-serif;
          color: rgba(243, 244, 246, 0.86);
          font-size: 15px;
          line-height: 1.45;
          font-weight: 300;
        }

        .contact-person-card {
          padding: clamp(26px, 2.6vw, 34px);
        }

        .contact-person-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          padding-bottom: 28px;
        }

        .contact-person-heading span {
          display: block;
          margin-bottom: 14px;
          font-family: 'GeistMono', monospace;
          color: #10b981;
          font-size: 12px;
        }

        .contact-person-heading h2 {
          margin: 0;
          font-family: 'EB Garamond', serif;
          font-size: clamp(34px, 3.2vw, 48px);
          line-height: 1;
          letter-spacing: -1px;
          color: #ffffff;
          font-weight: 500;
        }

        .contact-person-heading p {
          margin: 14px 0 0;
          font-family: 'Inter', sans-serif;
          color: #92e9cf;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 300;
        }

        .contact-linkedin {
          flex: 0 0 auto;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(16, 185, 129, 0.42);
          background: rgba(16, 185, 129, 0.08);
          color: #21d2a0;
          text-decoration: none;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .contact-linkedin:hover {
          transform: translateY(-2px);
          border-color: rgba(33, 210, 160, 0.78);
          background: rgba(16, 185, 129, 0.15);
        }

        .contact-person-details {
          margin: 0;
          display: grid;
        }

        .contact-person-details div {
          display: grid;
          grid-template-columns: minmax(120px, 0.5fr) minmax(0, 1fr);
          gap: 24px;
          padding: 16px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .contact-person-details dt {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #10b981;
        }

        .contact-person-details dd {
          margin: 0;
          text-align: right;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: rgba(243, 244, 246, 0.84);
          font-weight: 300;
        }

        .contact-person-details a {
          color: inherit;
          text-decoration: none;
        }

        .contact-info-card a:hover .contact-card-value,
        .contact-person-details a:hover {
          color: #ffffff;
        }

        @media (max-width: 1100px) {
          .contact-hero {
            min-height: auto;
          }

          .contact-channel-grid,
          .contact-team-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-nav {
            height: 68px;
            padding: 0 18px;
          }

          .contact-brand {
            font-size: 15px;
          }

          .contact-back {
            font-size: 11px;
          }

          .contact-hero {
            padding: 96px 18px 52px;
          }

          .contact-copy h1 {
            font-size: clamp(42px, 13vw, 64px);
            letter-spacing: -2px;
          }

          .contact-copy p {
            font-size: 16px;
          }

          .contact-section {
            padding: 0 18px 64px;
          }

          .contact-info-card > a,
          .contact-info-card > div {
            min-height: 132px;
            padding: 22px;
          }

          .contact-person-heading {
            padding-bottom: 28px;
          }

          .contact-person-heading h2 {
            font-size: 34px;
          }

          .contact-person-heading p {
            font-size: 15px;
          }

          .contact-person-details div {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .contact-person-details dd {
            text-align: left;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
