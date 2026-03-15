'use client';

import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">
        <div className="contact-box" data-aos="zoom-in">
          <div className="contact-header">
            <h2>Điền thông tin nhận<br />Báo giá thiết kế Farm</h2>
            <p>Chúng tôi sẽ phản hồi bạn trong vòng 24h làm việc.</p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Họ và tên *" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Số điện thoại *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Địa chỉ khu đất (Tỉnh/Thành) *" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Nhu cầu thiết kế của bạn..." rows={4}></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Gửi thông tin</button>
          </form>

          <div className="contact-footer">
            <p>Hoặc liên hệ nhanh qua:</p>
            <div className="quick-links">
                <a href="tel:0888220044" className="btn-quick">📞 0888.22.00.44</a>
                <a href="#" className="btn-quick">💬 Zalo</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
