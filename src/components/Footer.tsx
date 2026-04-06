'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type SocialLink = {
  label: string;
  href: string;
  className: string;
  type: string;
  imageUrl?: string;
};

type FooterProps = {
  content: {
    logoUrl: string;
    logoAlt: string;
    description: string;
    officeTitle: string;
    officeAddress: string | string[];
    contactTitle: string;
    contactLines: string[];
    menuTitle: string;
    menuLinks: Array<{ name: string; href: string }>;
    socialLinks: SocialLink[];
    copyright: string;
  };
};

const renderSocialIcon = (item: SocialLink) => {
  if (item.type === 'image' && item.imageUrl) {
    return <Image src={item.imageUrl} alt={item.label} width={22} height={22} />;
  }

  if (item.type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.7-1.6H17V4.1c-.3 0-.9-.1-2-.1-2 0-3.4 1.2-3.4 3.5v3.1H9v3.2h2.6V22h1.9Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 1.7A3.1 3.1 0 0 0 4.7 7.8v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8Zm8.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.7A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" fill="currentColor" />
    </svg>
  );
};

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="footer section-dark-alt">
      <div className="container footer-container">
        <div className="footer-section main">
          <motion.div whileHover={{ scale: 1.05 }} className="footer-logo-box">
            <Link href="/" className="footer-logo">
              <Image src={content.logoUrl} alt={content.logoAlt} width={400} height={128} />
            </Link>
          </motion.div>
          <p className="footer-desc">{content.description}</p>
          <div className="social-links-modern">
            {content.socialLinks.map((item) => (
              <motion.a
                key={item.label}
                whileHover={{ y: -5 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={item.className}
                aria-label={item.label}
                title={item.label}
              >
                {renderSocialIcon(item)}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>{content.officeTitle}</h3>
          <div className="footer-contact-info">
            {(() => {
              const addresses = Array.isArray(content.officeAddress) 
                ? content.officeAddress 
                : typeof content.officeAddress === 'string' 
                  ? (content.officeAddress as string).split('|').map(s => s.trim()) 
                  : [];
              return addresses.map((addr, idx) => (
                <p key={idx}>{addr}</p>
              ));
            })()}
          </div>
          
          <h3 style={{ marginTop: '2rem' }}>{content.contactTitle}</h3>
          <div className="footer-contact-info">
            {content.contactLines && Array.isArray(content.contactLines) && content.contactLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>{content.menuTitle}</h3>
          <ul className="footer-menu">
            {content.menuLinks.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
