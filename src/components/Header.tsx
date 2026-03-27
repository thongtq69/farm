'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type NavLink = {
  name: string;
  href: string;
  dropdown?: boolean;
};

type HeaderProps = {
  content: {
    logoUrl: string;
    logoAlt: string;
    mobileMenuTitle: string;
    contactPhone: string;
    contactLabel: string;
    navLinks: NavLink[];
    projectLinks: Array<{ name: string; href: string }>;
  };
};

const Header = ({ content }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link href="/" className="logo">
            <Image src={content.logoUrl} alt={content.logoAlt} width={220} height={72} priority />
          </Link>

          <nav className="nav desktop-only">
            <ul className="nav-list">
              {content.navLinks.map((link) => (
                <li key={link.href} className={link.dropdown ? 'nav-dropdown' : ''}>
                  <Link href={link.href} className={pathname === link.href ? 'active' : ''}>
                    {link.name}
                    {pathname === link.href && <motion.div layoutId="nav-underline" className="nav-underline" />}
                  </Link>
                  {link.dropdown && (
                    <ul className="dropdown-menu">
                      {content.projectLinks.map((projectLink) => (
                        <li key={projectLink.href}>
                          <Link href={projectLink.href}>{projectLink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-contact desktop-only">
            <a href={`tel:${content.contactPhone}`} className="btn btn-primary">
              {content.contactLabel}
            </a>
          </div>

          <button
            className={`hamburger mobile-only ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <h3>{content.mobileMenuTitle}</h3>
            <button className="close-menu" onClick={() => setIsMenuOpen(false)}>&times;</button>
          </div>
          <ul className="mobile-nav-list">
            {content.navLinks.map((link) => (
              <li key={link.href}>
                {link.dropdown ? (
                  <>
                    <div className="mobile-dropdown-toggle" onClick={(e) => e.stopPropagation()}>
                      <Link href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                      <span className="mobile-arrow">▾</span>
                    </div>
                    <ul className="mobile-sub-nav">
                      {content.projectLinks.map((projectLink) => (
                        <li key={projectLink.href}>
                          <Link href={projectLink.href} onClick={() => setIsMenuOpen(false)}>{projectLink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
