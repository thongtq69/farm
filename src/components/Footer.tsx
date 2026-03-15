import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <Link href="/" className="footer-logo">
            <Image 
              src="/images/branding/logo-2025-light1-e38c47f5c7e5.png" 
              alt="Oak Farm Light Logo" 
              width={150} 
              height={45} 
            />
          </Link>
          <p className="footer-desc">
            Oak Farm là một trong những đơn vị thiết kế Farmstay hàng đầu Việt Nam. Với nhiều dự án trải dài trên 20 tỉnh thành Đất Nước và các dự án tại nước bạn Thái Lan.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com/oakfarm.vn" target="_blank" rel="noopener noreferrer">F</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">I</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Văn phòng</h3>
          <p>02 Đỗ Quang, Phường Thanh Khê, Thành phố Đà Nẵng</p>
          <h3>Liên hệ</h3>
          <p>Thứ 2 – Thứ 7: 8h00-17h00</p>
          <p>Email: info@oakfarm.vn</p>
          <p>Hotline/Zalo: 0901.122.022</p>
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
          <p>© 2025 Oak Farm . All Rights Reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
