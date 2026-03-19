'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
                width={280} 
                height={90} 
              />
            </Link>
          </motion.div>
          <p className="footer-desc">
            Son Hai Landscape kiến tạo nên những không gian nghỉ dưỡng đẳng cấp, chuẩn mực trong từng nét vẽ quy hoạch Farmstay hàng đầu Việt Nam.
          </p>
          <div className="social-links-modern">
            <motion.a whileHover={{ y: -5, backgroundColor: '#3b5998' }} href="https://facebook.com/oakfarm.vn" target="_blank" rel="noopener noreferrer"><i>FB</i></motion.a>
            <motion.a whileHover={{ y: -5, backgroundColor: '#e1306c' }} href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i>IG</i></motion.a>
            <motion.a whileHover={{ y: -5, backgroundColor: '#ff0000' }} href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i>YT</i></motion.a>
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
            <li><Link href="/blog">Blog</Link></li>
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
