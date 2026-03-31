'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

type NotificationProps = {
  message: string;
  subMessage?: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  theme?: 'light' | 'dark-green';
};

const ToastNotification = ({ 
  message, 
  subMessage, 
  type = 'success', 
  isVisible, 
  onClose, 
  duration = 5000,
  theme = 'light'
}: NotificationProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: (
      <div className="notification-icon success">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    ),
    error: (
      <div className="notification-icon error">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    ),
    info: (
      <div className="notification-icon info">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </div>
    )
  };

  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      {isVisible && (
        <div className={`notification-wrapper theme-${theme}`}>
          <motion.div
            className={`notification-card ${type} theme-${theme}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
          >
            <div className="notification-content">
              {icons[type]}
              <div className="notification-text">
                <h4 className="notification-title">{message}</h4>
                {subMessage && <p className="notification-subtitle">{subMessage}</p>}
              </div>
            </div>
            
            <button className="notification-close" onClick={onClose}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <motion.div 
              className="notification-progress"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
            />
          </motion.div>

          <style dangerouslySetInnerHTML={{ __html: `
            .notification-wrapper {
              position: fixed;
              top: 2rem;
              right: 2rem;
              z-index: 10000;
              pointer-events: none;
            }
            .notification-wrapper.theme-dark-green {
              z-index: 100000;
            }
            .notification-card {
              pointer-events: auto;
              min-width: 340px;
              max-width: 450px;
              background: white;
              padding: 1.5rem;
              border-radius: 20px;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
              display: flex;
              align-items: center;
              gap: 1.25rem;
              position: relative;
              overflow: hidden;
              border: 1px solid rgba(0, 0, 0, 0.05);
            }
            .notification-card.theme-dark-green {
              background: linear-gradient(180deg, #0b5a44 0%, #094735 100%);
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
              color: white;
            }
            .notification-content {
              display: flex;
              align-items: center;
              gap: 1.25rem;
            }
            .notification-icon {
              width: 48px;
              height: 48px;
              border-radius: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
            .notification-icon.success {
              background: #f0fdf4;
              color: #10b981;
            }
            .theme-dark-green .notification-icon.success {
              background: rgba(16, 185, 129, 0.2);
              color: #10b981;
              border: 1px solid rgba(16, 185, 129, 0.3);
            }
            .notification-icon.error {
              background: #fef2f2;
              color: #ef4444;
            }
            .theme-dark-green .notification-icon.error {
              background: rgba(239, 68, 68, 0.2);
              color: #ef4444;
              border: 1px solid rgba(239, 68, 68, 0.3);
            }
            .notification-icon.info {
              background: #eff6ff;
              color: #3b82f6;
            }
            .theme-dark-green .notification-icon.info {
              background: rgba(59, 130, 246, 0.2);
              color: #3b82f6;
              border: 1px solid rgba(59, 130, 246, 0.3);
            }
            .notification-text {
              flex: 1;
            }
            .notification-title {
              font-size: 1.1rem;
              font-weight: 800;
              margin: 0;
              color: #0d3f32;
              line-height: 1.3;
              font-family: inherit;
            }
            .theme-dark-green .notification-title {
              color: white;
            }
            .notification-subtitle {
              font-size: 0.9rem;
              color: #666;
              margin: 0.25rem 0 0 0;
              line-height: 1.4;
            }
            .theme-dark-green .notification-subtitle {
              color: rgba(255, 255, 255, 0.8);
            }
            .notification-close {
              position: absolute;
              top: 1rem;
              right: 1rem;
              background: none;
              border: none;
              color: #999;
              cursor: pointer;
              padding: 4px;
              transition: all 0.2s;
            }
            .theme-dark-green .notification-close {
              color: rgba(255, 255, 255, 0.5);
            }
            .notification-close:hover {
              color: #666;
              background: #f5f5f5;
              border-radius: 5px;
            }
            .theme-dark-green .notification-close:hover {
              color: white;
              background: rgba(255, 255, 255, 0.1);
            }
            .notification-progress {
              position: absolute;
              bottom: 0;
              left: 0;
              height: 3px;
              background: #10b981;
              opacity: 0.6;
            }
            .notification-card.error .notification-progress {
              background: #ef4444;
            }
            .notification-card.info .notification-progress {
              background: #3b82f6;
            }
            @media (max-width: 500px) {
              .notification-wrapper {
                top: 1rem;
                right: 1rem;
                left: 1rem;
              }
              .notification-card {
                min-width: 0;
                width: 100%;
              }
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
};

export default ToastNotification;
