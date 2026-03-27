'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ConsultationPopupProps = {
  content: {
    title: string;
    submitLabel: string;
    successMessage: string;
    footerBadges: string[];
    propertyTypeOptions: Array<{ value: string; label: string }>;
    investmentOptions: Array<{ value: string; label: string }>;
  };
};

export default function ConsultationPopup({ content }: ConsultationPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', propertyType: '', investment: '' });

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    const interval = setInterval(() => {
      setIsOpen(true);
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'consultation-popup' })
      });

      if (!response.ok) {
        throw new Error('submit-failed');
      }

      alert(content.successMessage);
      handleClose();
      setFormData({ name: '', phone: '', propertyType: '', investment: '' });
    } catch {
      alert('Có lỗi khi gửi biểu mẫu. Anh/chị vui lòng thử lại.');
    }
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
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="popup-close" onClick={handleClose}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h2 className="popup-title">{content.title}</h2>

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label>Họ và tên *</label>
                <input type="text" placeholder="Nguyễn Văn A" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div className="form-group">
                <label>Số điện thoại *</label>
                <input type="tel" placeholder="0938 386 679" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>

              <div className="form-group">
                <label>Loại công trình *</label>
                <select required value={formData.propertyType} onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}>
                  <option value="" disabled>-- Chọn loại --</option>
                  {content.propertyTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Mức đầu tư *</label>
                <select required value={formData.investment} onChange={(e) => setFormData({ ...formData, investment: e.target.value })}>
                  <option value="" disabled>-- Chọn mức đầu tư --</option>
                  {content.investmentOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="popup-submit-btn">
                {content.submitLabel}
              </button>

              <div className="popup-footer">
                <span>{content.footerBadges[0]}</span>
                <span className="divider">|</span>
                <span>{content.footerBadges[1]}</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
