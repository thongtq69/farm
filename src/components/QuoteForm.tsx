'use client';

import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: '',
    investment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending quote request:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="quote-form-card popup-styled-form">
      <div className="form-head text-center">
        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', marginBottom: '1rem', color: '#1a2a1b', fontWeight: 800 }}>ĐĂNG KÝ NHẬN TƯ VẤN</h3>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Điền thông tin của bạn để chúng tôi hỗ trợ nhanh nhất.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="popup-form form-light-theme">
        <div className="form-group">
          <label style={{ color: '#333' }}>Họ và tên *</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Nguyễn Văn A" 
            required 
            onChange={handleChange}
            style={{ border: '1px solid #ddd', background: '#f9f9f9' }}
          />
        </div>

        <div className="form-group">
          <label style={{ color: '#333' }}>Số điện thoại *</label>
          <input 
            type="tel" 
            name="phone" 
            placeholder="0938 386 679" 
            required 
            onChange={handleChange}
            style={{ border: '1px solid #ddd', background: '#f9f9f9' }}
          />
        </div>

        <div className="form-group">
          <label style={{ color: '#333' }}>Loại công trình *</label>
          <select 
            name="propertyType" 
            required 
            defaultValue=""
            onChange={handleChange}
            style={{ border: '1px solid #ddd', background: '#f9f9f9', color: '#333' }}
          >
            <option value="" disabled>-- Chọn loại --</option>
            <option value="san_vuon">Sân vườn biệt thự</option>
            <option value="ho_koi">Hồ cá Koi</option>
            <option value="farm">Farm & Khu Nghỉ Dưỡng</option>
            <option value="da_nhan_tao">Đá nhân tạo nghệ thuật</option>
            <option value="khac">Khác</option>
          </select>
        </div>

        <div className="form-group">
          <label style={{ color: '#333' }}>Mức đầu tư *</label>
          <select 
            name="investment" 
            required 
            defaultValue=""
            onChange={handleChange}
            style={{ border: '1px solid #ddd', background: '#f9f9f9', color: '#333' }}
          >
            <option value="" disabled>-- Chọn mức đầu tư --</option>
            <option value="duoi_500">Dưới 500 triệu</option>
            <option value="500_1000">500 triệu - 1 tỷ</option>
            <option value="1000_3000">1 tỷ - 3 tỷ</option>
            <option value="tren_3000">Trên 3 tỷ</option>
          </select>
        </div>

        <button type="submit" className="popup-submit-btn" style={{ width: '100%', marginTop: '2rem' }}>
          TƯ VẤN NGAY
        </button>

        <div className="popup-footer" style={{ color: '#666', marginTop: '1.5rem' }}>
          <span>✓ Hoàn toàn miễn phí</span>
          <span className="divider">|</span>
          <span>✓ Phản hồi nhanh chóng</span>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
