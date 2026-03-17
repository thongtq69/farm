'use client';

import React from 'react';

const Contact = () => {
  return (
    <section className="contact section">
      <div className="container">
        <div className="contact-box" data-aos="zoom-in" data-aos-duration="1200">
          <div className="contact-header">
            <span className="subtitle">Liên hệ ngay</span>
            <h2>Khởi động dự án của bạn</h2>
            <p>Để lại thông tin, Oak Farm sẽ liên hệ tư vấn giải pháp tốt nhất cho khu đất của bạn.</p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Họ và tên *" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email *" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Số điện thoại *" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tin nhắn của bạn..." rows={4}></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">GỬI YÊU CẦU TƯ VẤN</button>
          </form>

          <div className="contact-footer">
            <p>Hoặc liên hệ nhanh qua:</p>
            <div className="quick-links">
              <a href="tel:0888220044" className="btn-quick">HOTLINE</a>
              <a href="#" className="btn-quick">ZALO</a>
              <a href="#" className="btn-quick">MESSENGER</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
