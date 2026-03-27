'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ToastNotification from './ToastNotification';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ isVisible: boolean; message: string; subMessage?: string; type: 'success' | 'error' }>({ 
    isVisible: false, 
    message: '', 
    subMessage: '', 
    type: 'success' 
  });

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 15000); // Increased initial delay to be less intrusive

    const interval = setInterval(() => {
      setIsOpen(true);
    }, 120000); // 2 minutes

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
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'consultation-popup' })
      });

      if (!response.ok) {
        throw new Error('submit-failed');
      }

      setNotification({
        isVisible: true,
        message: 'Đăng ký thành công!',
        subMessage: content.successMessage,
        type: 'success'
      });
      handleClose();
      setFormData({ name: '', phone: '', propertyType: '', investment: '' });
    } catch {
      setNotification({
        isVisible: true,
        message: 'Có lỗi xảy ra',
        subMessage: 'Rất tiếc, đã có lỗi khi gửi yêu cầu. Anh/chị vui lòng thử lại sau.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastNotification 
        isVisible={notification.isVisible}
        message={notification.message}
        subMessage={notification.subMessage}
        type={notification.type}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />

      <AnimatePresence>
        {isOpen && (
          <div className="consultation-popup-overlay" style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            zIndex: 9990,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <motion.div
              className="consultation-popup-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                backgroundColor: 'white',
                width: '100%',
                maxWidth: '480px',
                borderRadius: '32px',
                padding: '3rem',
                position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
              }}
            >
              <button 
                className="popup-close" 
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: '2rem',
                fontWeight: 800,
                color: '#0e2a04',
                marginBottom: '2rem',
                textAlign: 'center',
                letterSpacing: '-0.02em'
              }}>{content.title}</h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#444', marginBottom: '0.6rem' }}>Họ và tên *</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    style={{ width: '100%', padding: '1.1rem 1.4rem', borderRadius: '14px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#1a1a1a', outline: 'none', transition: 'all 0.2s' }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#444', marginBottom: '0.6rem' }}>Số điện thoại *</label>
                  <input 
                    type="tel" 
                    placeholder="0938 123 456" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    style={{ width: '100%', padding: '1.1rem 1.4rem', borderRadius: '14px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#1a1a1a', outline: 'none' }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#444', marginBottom: '0.6rem' }}>Loại công trình *</label>
                  <select 
                    required 
                    value={formData.propertyType} 
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    style={{ width: '100%', padding: '1.1rem 1.4rem', borderRadius: '14px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#1a1a1a', outline: 'none', appearance: 'none' }}
                  >
                    <option value="" disabled>-- Chọn loại --</option>
                    {content.propertyTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#444', marginBottom: '0.6rem' }}>Mức đầu tư *</label>
                  <select 
                    required 
                    value={formData.investment} 
                    onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                    style={{ width: '100%', padding: '1.1rem 1.4rem', borderRadius: '14px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#1a1a1a', outline: 'none', appearance: 'none' }}
                  >
                    <option value="" disabled>-- Chọn mức đầu tư --</option>
                    {content.investmentOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '1.25rem', 
                    borderRadius: '14px', 
                    border: 'none', 
                    background: '#0e2a04', 
                    color: 'white', 
                    fontWeight: 800, 
                    fontSize: '1rem', 
                    marginTop: '0.5rem', 
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(14, 42, 4, 0.2)',
                    transition: 'all 0.3s',
                    opacity: isSubmitting ? 0.8 : 1
                  }}
                >
                  {isSubmitting ? 'ĐANG XỬ LÝ...' : content.submitLabel}
                </button>

                <div className="popup-footer" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.85rem', color: '#888', fontWeight: 600 }}>
                  <span>{content.footerBadges[0]}</span>
                  <span className="divider" style={{ color: '#ddd' }}>|</span>
                  <span>{content.footerBadges[1]}</span>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
