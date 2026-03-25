'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
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

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Chúng tôi', href: '/chung-toi' },
    { name: 'Dự án', href: '/project', dropdown: true },
    { name: 'Reels', href: '/reels' },
    { name: 'Báo giá thiết kế', href: '/bao-gia-thiet-ke-farm' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link href="/" className="logo">
            <Image 
              src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426297/farm/images/branding/u9s3pfkvpu63s8luvrtq.png" 
              alt="Son Hai Landscape logo" 
              width={220} 
              height={72} 
              priority
            />
          </Link>

          <nav className="nav desktop-only">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href} className={link.dropdown ? 'nav-dropdown' : ''}>
                  <Link href={link.href} className={pathname === link.href ? 'active' : ''}>
                    {link.name}
                    {pathname === link.href && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="nav-underline"
                      />
                    )}
                  </Link>
                  {link.dropdown && (
                    <ul className="dropdown-menu">
                      <li><Link href="/project/san-vuon-ho-koi">Sân Vườn & Hồ Koi</Link></li>
                      <li><Link href="/project/farm-du-lich-nghi-duong">Farm & Du Lịch Nghỉ Dưỡng</Link></li>
                      <li><Link href="/project/da-nhan-tao-nghe-thuat">Đá Nhân Tạo Nghệ Thuật</Link></li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>


          <div className="header-contact desktop-only">
            <a href="tel:0888220044" className="btn btn-primary">
              (+84) 888.22.00.44
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

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <h3>MAIN MENU</h3>
            <button className="close-menu" onClick={() => setIsMenuOpen(false)}>&times;</button>
          </div>
          <ul className="mobile-nav-list">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Trang chủ</Link></li>
            <li><Link href="/chung-toi" onClick={() => setIsMenuOpen(false)}>Chúng tôi</Link></li>
            <li>
              <div className="mobile-dropdown-toggle" onClick={(e) => {
                e.stopPropagation();
                // Toggle sub-menu logic could go here if stateful, but for now we'll make it always visible or accessible
              }}>
                <Link href="/project" onClick={() => setIsMenuOpen(false)}>Dự án</Link>
                <span className="mobile-arrow">▾</span>
              </div>
              <ul className="mobile-sub-nav">
                <li><Link href="/project/san-vuon-ho-koi" onClick={() => setIsMenuOpen(false)}>Sân Vườn & Hồ Koi</Link></li>
                <li><Link href="/project/farm-du-lich-nghi-duong" onClick={() => setIsMenuOpen(false)}>Farm & Du Lịch Nghỉ Dưỡng</Link></li>
                <li><Link href="/project/da-nhan-tao-nghe-thuat" onClick={() => setIsMenuOpen(false)}>Đá Nhân Tạo Nghệ Thuật</Link></li>
              </ul>
            </li>

            <li><Link href="/bao-gia-thiet-ke-farm" onClick={() => setIsMenuOpen(false)}>Báo giá thiết kế Farm</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Sticky Bar for Mobile */}
      <div className="bottom-bar mobile-only">
        <a href="tel:0888220044" className="bottom-bar-item">
          <img src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426318/farm/images/icons/jzt39vkzupa2hodvar0v.png" alt="Hotline" width="24" height="24" />
          <span>Hotline</span>
        </a>
        <a href="https://zalo.me/0888220044" className="bottom-bar-item" target="_blank" rel="noopener noreferrer">
          <img src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426324/farm/images/icons/lxewxwkms3nmys826ywn.png" alt="Zalo" width="24" height="24" />
          <span>Zalo</span>
        </a>
        <a href="#" className="bottom-bar-item">
          <img src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426320/farm/images/icons/imizhfugb45bymlulgow.png" alt="Messenger" width="24" height="24" />
          <span>Messenger</span>
        </a>
      </div>



    </>
  );
};


export default Header;
