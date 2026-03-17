'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact section section-dark-alt" style={{ background: '#122114' }}>
      <div className="container">
        <motion.div 
          className="contact-box glass-effect"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="contact-header">
            <span className="subtitle" style={{ color: '#a8d89a' }}>Liên hệ ngay</span>
            <h2 style={{ color: '#fff', fontSize: '3rem' }}>Khởi động dự án của bạn</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Để lại thông tin, Oak Farm sẽ liên hệ tư vấn giải pháp tốt nhất cho khu đất của bạn.</p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Họ và tên *" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Số điện thoại *" required />
              </div>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email *" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tin nhắn của bạn..." rows={4}></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn btn-primary btn-block"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(168, 216, 154, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              GỬI YÊU CẦU TƯ VẤN
            </motion.button>
          </form>

          <div className="contact-footer">
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>Hoặc liên hệ nhanh qua:</p>
            <div className="quick-links">
              <motion.a href="tel:0888220044" className="btn-quick" whileHover={{ y: -5 }}>HOTLINE</motion.a>
              <motion.a href="#" className="btn-quick" whileHover={{ y: -5 }}>ZALO</motion.a>
              <motion.a href="#" className="btn-quick" whileHover={{ y: -5 }}>MESSENGER</motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
