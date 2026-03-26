'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      // Temporarily bypass localStorage to ensure user can see it for testing
      // const hasSeenPopup = localStorage.getItem('hasSeenConsultationPopup');
      // if (!hasSeenPopup) {
        setIsOpen(true);
      // }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Don't show again in the same session
    localStorage.setItem('hasSeenConsultationPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="consultation-popup-overlay">
          <motion.div 
            className="consultation-popup-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="popup-close" onClick={handleClose}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h2 className="popup-title">ĐĂNG KÝ NHẬN TƯ VẤN</h2>

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label>Họ và tên *</label>
                <input type="text" placeholder="Nguyễn Văn A" required />
              </div>

              <div className="form-group">
                <label>Số điện thoại *</label>
                <input type="tel" placeholder="0938 386 679" required />
              </div>

              <div className="form-group">
                <label>Loại công trình *</label>
                <select required defaultValue="">
                  <option value="" disabled>-- Chọn loại --</option>
                  <option value="san_vuon">Sân vườn biệt thự</option>
                  <option value="ho_koi">Hồ cá Koi</option>
                  <option value="farm">Farm & Khu Nghỉ Dưỡng</option>
                  <option value="da_nhan_tao">Đá nhân tạo nghệ thuật</option>
                  <option value="khac">Khác</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mức đầu tư *</label>
                <select required defaultValue="">
                  <option value="" disabled>-- Chọn mức đầu tư --</option>
                  <option value="duoi_500">Dưới 500 triệu</option>
                  <option value="500_1000">500 triệu - 1 tỷ</option>
                  <option value="1000_3000">1 tỷ - 3 tỷ</option>
                  <option value="tren_3000">Trên 3 tỷ</option>
                </select>
              </div>

              <button type="submit" className="popup-submit-btn">
                TƯ VẤN NGAY
              </button>

              <div className="popup-footer">
                <span>✓ Hoàn toàn miễn phí</span>
                <span className="divider">|</span>
                <span>✓ Phản hồi nhanh chóng</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
