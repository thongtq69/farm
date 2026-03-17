'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact section">
      <div className="container">
        <motion.div
          className="contact-showcase"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-showcase-panel">
            <div className="contact-copy-card">
              <p className="contact-kicker">Liên hệ Oak Farm</p>
              <h2>Liên Hệ Chúng<br/>Tôi Tư Vấn<br/>Miễn Phí</h2>

              <a href="tel:0888220044" className="contact-hotline-pill">
                <span className="contact-hotline-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <span className="contact-hotline-text">
                  <strong>GỌI NGAY / ZALO :</strong>
                  <em>0888.22.00.44</em>
                </span>
              </a>

              <p className="contact-note">
                Kết nối nhanh với đội ngũ Oak Farm để được tư vấn mô hình farmstay, quy hoạch và giải pháp vận hành phù hợp.
              </p>
            </div>

            <div className="contact-portrait-stage">
              <div className="contact-portrait-backdrop" />
              <div className="contact-portrait-ribbon">Oak Farm</div>
              <div className="contact-portrait-ribbon-overlay">Oak Farm</div>
              <div className="contact-portrait-subribbon">ARCHITECTURE & LANDSCAPE</div>
              <div className="contact-portrait-frame">
                <Image
                  src="/images/other/oak-nhan-1-2d81bdbd846f.png"
                  alt="Oak Farm consultant"
                  width={700}
                  height={800}
                  className="contact-portrait-image"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
