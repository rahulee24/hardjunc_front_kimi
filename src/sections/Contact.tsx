import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AmberCascades from './AmberCascades';
import GridBackground from '../components/GridBackground';
import CustomCursor from '../components/CustomCursor';
import { siteConfig } from '../config';

const contactChannels = [
  {
    label: 'Email',
    value: 'admin@hardjunc.dev',
    href: 'mailto:admin@hardjunc.dev',
  },
  {
    label: 'LinkedIn',
    value: 'HardJunc',
    href: 'https://www.linkedin.com/company/hardjunc',
    featured: true,
  },
  {
    label: 'Address',
    value: 'Sudha & Shankar Innovation Hub\nIndian Institute Of Technology Madras\nChennai-600036',
  },
];

const teamContacts = [
  {
    name: 'Jesvitha K.',
    role: 'Founder and CEO',
    phone: '+91 6380790971',
    email: 'ceo@hardjunc.dev',
    linkedin: 'https://www.linkedin.com/company/hardjunc',
  },
  {
    name: 'Rahul Roy',
    role: 'Co-Founder and CTO',
    phone: '+91 9174471745',
    email: 'cto@hardjunc.dev',
    linkedin: 'https://www.linkedin.com/company/hardjunc',
  },
];

export default function Contact() {
  const navigate = useNavigate();

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
        <button
          type="button"
          onClick={() => navigate('/')}
          className="contact-brand"
        >
          {siteConfig.brandName}
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="nav-link contact-back"
        >
          Back to home
        </button>
      </nav>

      <main className="contact-main">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="contact-hero"
        >
          <p className="contact-kicker">Contact HardJunc</p>
          <h1>CONTACT US.</h1>
          <p className="contact-intro">
            Reach the HardJunc team for partnerships, demos, early access, and product conversations.
          </p>
        </motion.section>

        <section className="contact-channel-grid" aria-label="Contact channels">
          {contactChannels.map((channel, index) => {
            const content = (
              <>
                <span className="contact-card-label">{channel.label}</span>
                <span className="contact-card-value">
                  {channel.value.split('\n').map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
                {channel.featured && <span className="contact-orbit" aria-hidden="true" />}
              </>
            );

            return (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + index * 0.08 }}
                className={`contact-info-card${channel.featured ? ' is-featured' : ''}`}
              >
                {channel.href ? (
                  <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {content}
                  </a>
                ) : (
                  <div>{content}</div>
                )}
              </motion.div>
            );
          })}
        </section>

        <section className="contact-team-grid" aria-label="Team contacts">
          {teamContacts.map((person, index) => (
            <motion.article
              key={person.email}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 + index * 0.1 }}
              className="contact-person-card"
            >
              <div className="contact-person-heading">
                <div>
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
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </section>
      </main>

      <style>{`
        .contact-page {
          min-height: 100vh;
          background: #050909;
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
          opacity: 0.38;
        }

        .contact-grid-bg {
          opacity: 0.58;
        }

        .contact-vignette {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(5, 9, 9, 0.92), rgba(5, 9, 9, 0.24) 42%, rgba(5, 9, 9, 0.78)),
            linear-gradient(180deg, rgba(5, 9, 9, 0.12), rgba(5, 9, 9, 0.86));
        }

        .contact-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 78px;
          padding: 0 6.8vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(5, 9, 9, 0.9), rgba(5, 9, 9, 0));
        }

        .contact-brand {
          border: 0;
          background: transparent;
          color: #ffffff;
          font-family: 'GeistMono', monospace;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: -0.5px;
        }

        .contact-back {
          border: 0;
          background: transparent;
        }

        .contact-main {
          position: relative;
          z-index: 2;
          width: min(100% - 10vw, 1476px);
          margin: 0 auto;
          padding: clamp(116px, 14vh, 150px) 0 72px;
        }

        .contact-hero {
          max-width: 960px;
          margin-bottom: clamp(42px, 6vw, 64px);
        }

        .contact-kicker,
        .contact-card-label,
        .contact-person-details dt {
          font-family: 'GeistMono', monospace;
          text-transform: uppercase;
          color: #21d2a0;
          letter-spacing: 0.34em;
          font-size: 12px;
          font-weight: 400;
        }

        .contact-kicker {
          margin: 0 0 34px;
          color: #a4f2d8;
        }

        .contact-hero h1 {
          margin: 0;
          font-family: 'GeistMono', monospace;
          font-size: clamp(58px, 8vw, 112px);
          line-height: 0.94;
          letter-spacing: -0.05em;
          color: #f8fafc;
          font-weight: 400;
          text-shadow: 0 12px 46px rgba(0, 0, 0, 0.58);
        }

        .contact-intro {
          margin: clamp(36px, 4vw, 48px) 0 0;
          max-width: 900px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(19px, 2vw, 26px);
          line-height: 1.65;
          color: rgba(229, 231, 235, 0.68);
          font-weight: 300;
        }

        .contact-channel-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 44px;
        }

        .contact-info-card,
        .contact-person-card {
          border: 1px solid rgba(16, 185, 129, 0.2);
          background: linear-gradient(180deg, rgba(2, 10, 9, 0.78), rgba(2, 8, 8, 0.52));
          box-shadow: inset 0 0 0 1px rgba(16, 185, 129, 0.025);
          backdrop-filter: blur(6px);
        }

        .contact-info-card {
          min-height: 176px;
          position: relative;
          overflow: hidden;
        }

        .contact-info-card.is-featured {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(2, 9, 9, 0.72));
          border-color: rgba(16, 185, 129, 0.5);
        }

        .contact-info-card > a,
        .contact-info-card > div {
          min-height: 176px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          padding: 30px 28px;
          color: inherit;
          text-decoration: none;
        }

        .contact-card-value {
          display: grid;
          gap: 7px;
          font-family: 'Inter', sans-serif;
          color: rgba(243, 244, 246, 0.82);
          font-size: 19px;
          line-height: 1.45;
          font-weight: 300;
        }

        .contact-orbit {
          position: absolute;
          top: 20px;
          right: 104px;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(16, 185, 129, 0.55);
          border-radius: 999px;
          box-shadow: 0 0 34px rgba(16, 185, 129, 0.16);
        }

        .contact-orbit::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #21d2a0;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 16px rgba(33, 210, 160, 0.72);
        }

        .contact-team-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .contact-person-card {
          min-height: 310px;
          padding: clamp(34px, 4vw, 44px) clamp(30px, 4vw, 36px) 34px;
        }

        .contact-person-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          padding-bottom: 36px;
        }

        .contact-person-heading h2 {
          margin: 0;
          font-family: 'EB Garamond', serif;
          font-size: clamp(44px, 4vw, 56px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #ffffff;
          font-weight: 500;
        }

        .contact-person-heading p {
          margin: 14px 0 0;
          font-family: 'Inter', sans-serif;
          color: #92e9cf;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 300;
        }

        .contact-linkedin {
          flex: 0 0 auto;
          width: 52px;
          height: 52px;
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
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-person-details dd {
          margin: 0;
          text-align: right;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
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

        @media (max-width: 1024px) {
          .contact-channel-grid,
          .contact-team-grid {
            grid-template-columns: 1fr;
          }

          .contact-main {
            width: min(100% - 8vw, 760px);
          }
        }

        @media (max-width: 640px) {
          .contact-nav {
            height: 70px;
            padding: 0 5vw;
          }

          .contact-back {
            font-size: 11px;
          }

          .contact-main {
            width: min(100% - 32px, 560px);
            padding-top: 106px;
          }

          .contact-kicker,
          .contact-card-label,
          .contact-person-details dt {
            font-size: 10px;
            letter-spacing: 0.24em;
          }

          .contact-hero h1 {
            font-size: clamp(48px, 16vw, 72px);
            letter-spacing: -0.06em;
          }

          .contact-intro {
            font-size: 17px;
          }

          .contact-info-card > a,
          .contact-info-card > div {
            padding: 26px 24px;
          }

          .contact-orbit {
            right: 24px;
          }

          .contact-person-heading {
            align-items: flex-start;
            padding-bottom: 28px;
          }

          .contact-person-heading h2 {
            font-size: 42px;
          }

          .contact-person-heading p {
            font-size: 17px;
          }

          .contact-person-details div {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .contact-person-details dd {
            text-align: left;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
