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
    // Warm up the API route and database connection
    fetch('/api/quote-requests').catch(() => {});

    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    const interval = setInterval(() => {
      setIsOpen(true);
    }, 120000);

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
        theme="dark-green"
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
                background: 'linear-gradient(180deg, #0b5a44 0%, #094735 100%)',
                width: '100%',
                maxWidth: '480px',
                borderRadius: '24px',
                padding: '3rem 2.5rem',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                overflow: 'hidden',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {/* Removed full-screen loader for more immediate feel */}

              <button 
                className="popup-close" 
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.8)',
                  zIndex: 2
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 style={{
                fontFamily: "'Be Vietnam Pro', 'Inter', 'Segoe UI', Roboto, sans-serif",
                fontSize: '2rem',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.96)',
                marginBottom: '2rem',
                textAlign: 'center',
                letterSpacing: '-0.01em',
                position: 'relative',
                zIndex: 2,
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased'
              }}>{content.title}</h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', marginBottom: '0.6rem' }}>Họ và tên *</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '50px', border: 'none', background: 'white', color: '#333', outline: 'none', transition: 'box-shadow 0.2s' }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', marginBottom: '0.6rem' }}>Số điện thoại *</label>
                  <input 
                    type="tel" 
                    placeholder="0938 123 456" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '50px', border: 'none', background: 'white', color: '#333', outline: 'none' }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', marginBottom: '0.6rem' }}>Loại công trình *</label>
                  <select 
                    required 
                    value={formData.propertyType} 
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '50px', border: 'none', background: 'white', color: '#333', outline: 'none', appearance: 'auto' }}
                  >
                    <option value="" disabled>-- Chọn loại --</option>
                    {content.propertyTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', marginBottom: '0.6rem' }}>Mức đầu tư *</label>
                  <select 
                    required 
                    value={formData.investment} 
                    onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                    style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '50px', border: 'none', background: 'white', color: '#333', outline: 'none', appearance: 'auto' }}
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
                  className="popup-submit-btn"
                  style={{ 
                    width: '100%', 
                    padding: '1.2rem', 
                    borderRadius: '50px', 
                    border: 'none', 
                    background: '#9b8118', 
                    color: '#1a2a1b', 
                    fontWeight: 800, 
                    fontSize: '1.1rem', 
                    marginTop: '1rem', 
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: 'none',
                    transition: 'background 0.3s, transform 0.2s',
                    opacity: isSubmitting ? 0.8 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loader-dots"></span>
                      ĐANG XỬ LÝ...
                    </>
                  ) : content.submitLabel}
                </button>

                <div className="popup-footer" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                  <span>{content.footerBadges[0]}</span>
                  <span className="divider" style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
                  <span>{content.footerBadges[1]}</span>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{ __html: `
        .loader-dots {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1s infinite alternate;
        }
        @keyframes pulse {
          from { transform: scale(0.8); opacity: 0.5; }
          to { transform: scale(1.2); opacity: 1; }
        }
        .loader-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #00c689;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .popup-submit-btn:hover:not(:disabled) {
          background: #bd9f1e;
          transform: translateY(-2px);
        }
        .popup-submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }
      `}} />
    </>
  );
}
