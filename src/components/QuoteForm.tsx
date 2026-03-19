'use client';

import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    area: '',
    service: 'farmstay',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending quote request:', formData);
    alert('Cảm ơn anh/chị! Chúng tôi sẽ liên hệ lại ngay để gửi báo giá chi tiết.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="quote-form-card">
      <div className="form-head">
        <h3>Điền thông tin</h3>
        <p>Báo giá sẽ được gửi qua Zalo/Email sau 24h.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="pricing-form-content">
        <div className="form-group-pricing">
          <label>Họ & Tên *</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Ví dụ: Anh Hải" 
            required 
            onChange={handleChange}
            className="input-modern"
          />
        </div>

        <div className="form-row-pricing">
          <div className="form-group-pricing">
            <label>Điện thoại / Zalo *</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="0888 22 00 44" 
              required 
              onChange={handleChange}
              className="input-modern"
            />
          </div>
          <div className="form-group-pricing">
            <label>Địa điểm khu đất *</label>
            <input 
              type="text" 
              name="location" 
              placeholder="Ví dụ: Lâm Đồng" 
              required 
              onChange={handleChange}
              className="input-modern"
            />
          </div>
        </div>

        <div className="form-row-pricing">
          <div className="form-group-pricing">
            <label>Diện tích dự kiến (m2/ha) *</label>
            <input 
              type="text" 
              name="area" 
              placeholder="5000m2" 
              required 
              onChange={handleChange}
              className="input-modern"
            />
          </div>
          <div className="form-group-pricing">
            <label>Dịch vụ quan tâm</label>
            <select name="service" onChange={handleChange} className="select-modern">
              <option value="farmstay">Thiết kế Farm & Du lịch</option>
              <option value="homestay">Thiết kế Homestay / Nghỉ dưỡng</option>
              <option value="garden">Thiết kế Sân vườn / Hồ Koi</option>
              <option value="landscape">Quy hoạch Cảnh quan tổng thể</option>
            </select>
          </div>
        </div>

        <div className="form-group-pricing">
          <label>Email liên hệ</label>
          <input 
            type="email" 
            name="email" 
            placeholder="example@gmail.com" 
            onChange={handleChange}
            className="input-modern"
          />
        </div>

        <div className="form-group-pricing">
          <label>Lời nhắn của anh/chị</label>
          <textarea 
            name="message" 
            placeholder="Chia sẻ thêm nếu có yêu cầu đặc biệt..." 
            rows={4}
            onChange={handleChange}
            className="textarea-modern"
          ></textarea>
        </div>

        <button type="submit" className="btn-modern-primary full-width">Gửi yêu cầu & Nhận báo giá</button>
      </form>
    </div>
  );
};

export default QuoteForm;
