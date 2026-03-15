'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link href="/" className="logo">
            <Image 
              src="/images/branding/logo-2025-normal-2-86322bdc33ad.png" 
              alt="Oak Farm Logo" 
              width={150} 
              height={45} 
              priority
            />
          </Link>

          <nav className="nav desktop-only">
            <ul className="nav-list">
              <li><Link href="/">Trang chủ</Link></li>
              <li><Link href="/chung-toi">Chúng tôi</Link></li>
              <li className="nav-dropdown">
                <Link href="/project">Dự án</Link>
                <ul className="dropdown-menu">
                  <li><Link href="/project/san-vuon-ho-koi">Sân Vườn & Hồ Koi</Link></li>
                  <li><Link href="/project/farm-du-lich-nghi-duong">Farm & Du Lịch Nghỉ Dưỡng</Link></li>
                  <li><Link href="/project/da-nhan-tao-nghe-thuat">Đá Nhân Tạo Nghệ Thuật</Link></li>
                </ul>
              </li>
              <li><Link href="/bao-gia-thiet-ke-farm">Báo giá thiết kế Farm</Link></li>
              <li><Link href="/blog">Blog</Link></li>
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
              <Link href="/project" onClick={() => setIsMenuOpen(false)}>Dự án</Link>
              <ul className="mobile-sub-nav">
                <li><Link href="/project/san-vuon-ho-koi" onClick={() => setIsMenuOpen(false)}>Sân Vườn & Hồ Koi</Link></li>
                <li><Link href="/project/farm-du-lich-nghi-duong" onClick={() => setIsMenuOpen(false)}>Farm & Du Lịch Nghỉ Dưỡng</Link></li>
                <li><Link href="/project/da-nhan-tao-nghe-thuat" onClick={() => setIsMenuOpen(false)}>Đá Nhân Tạo Nghệ Thuật</Link></li>
              </ul>
            </li>
            <li><Link href="/bao-gia-thiet-ke-farm" onClick={() => setIsMenuOpen(false)}>Báo giá thiết kế Farm</Link></li>
            <li><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Sticky Bar for Mobile */}
      <div className="bottom-bar mobile-only">
        <a href="tel:0888220044" className="bottom-bar-item">
          <img src="/images/icons/hotline_v1.png" alt="Hotline" width="24" height="24" />
          <span>Hotline</span>
        </a>
        <a href="https://zalo.me/0888220044" className="bottom-bar-item" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons/zalo_v1.png" alt="Zalo" width="24" height="24" />
          <span>Zalo</span>
        </a>
        <a href="#" className="bottom-bar-item">
          <img src="/images/icons/messenger_v1.png" alt="Messenger" width="24" height="24" />
          <span>Messenger</span>
        </a>
      </div>



    </>
  );
};


export default Header;
