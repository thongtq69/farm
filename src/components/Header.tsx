'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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

        <nav className="nav">
          <ul className="nav-list">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/chung-toi">Chúng tôi</Link></li>
            <li><Link href="/project">Dự án</Link></li>
            <li><Link href="/bao-gia-thiet-ke-farm">Báo giá thiết kế Farm</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>

        <div className="header-contact">
          <a href="tel:0901122022" className="btn btn-primary">
            (+84) 901.122.022
          </a>
        </div>
      </div>

    </header>
  );
};

export default Header;
