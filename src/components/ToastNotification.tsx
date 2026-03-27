'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type NotificationProps = {
  message: string;
  subMessage?: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
};

const ToastNotification = ({ 
  message, 
  subMessage, 
  type = 'success', 
  isVisible, 
  onClose, 
  duration = 5000 
}: NotificationProps) => {
  
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

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="notification-wrapper">
          <motion.div
            className={`notification-card ${type}`}
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

          <style jsx>{`
            .notification-wrapper {
              position: fixed;
              top: 2rem;
              right: 2rem;
              z-index: 9999;
              pointer-events: none;
            }
            .notification-card {
              pointer-events: auto;
              min-width: 320px;
              max-width: 450px;
              background: white;
              padding: 1.5rem;
              border-radius: 20px;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
              display: flex;
              align-items: center;
              gap: 1rem;
              position: relative;
              overflow: hidden;
              border: 1px solid rgba(0, 0, 0, 0.05);
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
              justifyContent: center;
              flex-shrink: 0;
            }
            .notification-icon.success {
              background: #f0fdf4;
              color: #10b981;
            }
            .notification-icon.error {
              background: #fef2f2;
              color: #ef4444;
            }
            .notification-icon.info {
              background: #eff6ff;
              color: #3b82f6;
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
            .notification-subtitle {
              font-size: 0.9rem;
              color: #666;
              margin: 0.25rem 0 0 0;
              line-height: 1.4;
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
            .notification-close:hover {
              color: #666;
              background: #f5f5f5;
              border-radius: 5px;
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
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification;
