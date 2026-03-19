'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/oakfarm.vn',
    className: 'is-facebook',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.7-1.6H17V4.1c-.3 0-.9-.1-2-.1-2 0-3.4 1.2-3.4 3.5v3.1H9v3.2h2.6V22h1.9Z" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Zalo',
    href: 'https://zalo.me/0888220044',
    className: 'is-zalo',
    icon: (
      <Image
        src="/images/icons/zalo.png"
        alt="Zalo"
        width={22}
        height={22}
      />
    )
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    className: 'is-instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 1.7A3.1 3.1 0 0 0 4.7 7.8v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8Zm8.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.7A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" fill="currentColor" />
      </svg>
    )
  }
];

const Footer = () => {
  return (
    <footer className="footer section-dark-alt">
      <div className="container footer-container">
        <div className="footer-section main">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="footer-logo-box"
          >
            <Link href="/" className="footer-logo">
              <Image 
                src="/images/branding/logofarm.png" 
                alt="Son Hai Landscape Light Logo" 
                width={400} 
                height={128} 
              />
            </Link>
          </motion.div>
          <p className="footer-desc">
            Son Hai Landscape kiến tạo nên những không gian nghỉ dưỡng đẳng cấp, chuẩn mực trong từng nét vẽ quy hoạch Farmstay hàng đầu Việt Nam.
          </p>
          <div className="social-links-modern">
            {socialLinks.map((item) => (
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
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>Văn phòng</h3>
          <p>02 Đỗ Quang, Phường Thanh Khê, Thành phố Đà Nẵng</p>
          <h3>Liên hệ</h3>
          <p>Thứ 2 – Thứ 7: 8h00-17h00</p>
          <p>Email: vohuuhai2018@gmail.com</p>
          <p>Hotline/Zalo: 0888.22.00.44</p>
        </div>

        <div className="footer-section">
          <h3>Menu</h3>
          <ul className="footer-menu">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/chung-toi">Chúng tôi</Link></li>
            <li><Link href="/project">Dự án</Link></li>
            <li><Link href="/bao-gia-thiet-ke-farm">Báo giá thiết kế Farm</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 Son Hai Landscape . All Rights Reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
