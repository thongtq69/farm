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
          <div className="contact-decor contact-decor-left" />
          <div className="contact-decor contact-decor-right" />

          <div className="contact-showcase-panel">
            <div className="contact-copy-card">
              <p className="contact-kicker">Liên hệ Oak Farm</p>
              <h2>Liên Hệ Chúng Tôi Tư Vấn Miễn Phí</h2>

              <a href="tel:0888220044" className="contact-hotline-pill">
                <span className="contact-hotline-icon">☎</span>
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
              <div className="contact-portrait-subribbon">Architecture &amp; Landscape</div>
              <div className="contact-portrait-frame">
                <Image
                  src="/images/other/oak-nhan-1-2d81bdbd846f.png"
                  alt="Oak Farm consultant"
                  width={700}
                  height={760}
                  className="contact-portrait-image"
                />
              </div>
              <div className="contact-portrait-glow" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
