'use client';

import React, { useState } from 'react';

type QuoteFormProps = {
  content: {
    title: string;
    description: string;
    submitLabel: string;
    successMessage: string;
    safetyBadges: string[];
    propertyTypeOptions: Array<{ value: string; label: string }>;
    investmentOptions: Array<{ value: string; label: string }>;
  };
};

const QuoteForm = ({ content }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: '',
    investment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'quote-form' })
      });

      if (!response.ok) {
        throw new Error('submit-failed');
      }

      alert(content.successMessage);
      setFormData({ name: '', phone: '', propertyType: '', investment: '' });
    } catch {
      alert('Có lỗi khi gửi biểu mẫu. Anh/chị vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="quote-form-premium"
      style={{
        background: 'white',
        padding: '3.5rem',
        borderRadius: '32px',
        boxShadow: '0 30px 80px rgba(14, 42, 4, 0.12)',
        border: '1px solid rgba(14, 42, 4, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="form-head-v2" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h3
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '2.2rem',
            marginBottom: '1rem',
            color: '#0e2a04',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.2
          }}
        >
          {content.title}
        </h3>
        <p style={{ color: '#667b5e', fontSize: '1.05rem', lineHeight: '1.6', fontFamily: "'Be Vietnam Pro', sans-serif", maxWidth: '400px', margin: '0 auto' }}>{content.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="premium-compact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
        <div className="form-row-v2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="form-group-v2">
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0e2a04', marginBottom: '0.75rem', fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: '0.02em' }}>HỌ VÀ TÊN *</label>
            <input type="text" name="name" value={formData.name} placeholder="Nguyễn Văn A" required onChange={handleChange} style={{ width: '100%', padding: '1.1rem 1.5rem', borderRadius: '16px', border: '1.5px solid #eef1ee', background: '#f9faf9', color: '#0e2a04', fontSize: '1rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Be Vietnam Pro', sans-serif" }} className="form-input-premium" />
          </div>
          <div className="form-group-v2">
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0e2a04', marginBottom: '0.75rem', fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: '0.02em' }}>SỐ ĐIỆN THOẠI *</label>
            <input type="tel" name="phone" value={formData.phone} placeholder="09xx xxx xxx" required onChange={handleChange} style={{ width: '100%', padding: '1.1rem 1.5rem', borderRadius: '16px', border: '1.5px solid #eef1ee', background: '#f9faf9', color: '#0e2a04', fontSize: '1rem', outline: 'none', transition: 'all 0.3s', fontFamily: "'Be Vietnam Pro', sans-serif" }} className="form-input-premium" />
          </div>
        </div>

        <div className="form-group-v2">
          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0e2a04', marginBottom: '0.75rem', fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: '0.02em' }}>LOẠI HÌNH CÔNG TRÌNH *</label>
          <div style={{ position: 'relative' }}>
            <select name="propertyType" required value={formData.propertyType} onChange={handleChange} style={{ width: '100%', padding: '1.1rem 1.5rem', borderRadius: '16px', border: '1.5px solid #eef1ee', background: '#f9faf9', color: '#0e2a04', fontSize: '1rem', outline: 'none', appearance: 'none', transition: 'all 0.3s', fontFamily: "'Be Vietnam Pro', sans-serif", cursor: 'pointer' }} className="form-input-premium">
              <option value="" disabled>-- Chọn loại hình --</option>
              {content.propertyTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <div style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#0e2a04', opacity: 0.5 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <div className="form-group-v2">
          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0e2a04', marginBottom: '0.75rem', fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: '0.02em' }}>NGÂN SÁCH DỰ KIẾN *</label>
          <div style={{ position: 'relative' }}>
            <select name="investment" required value={formData.investment} onChange={handleChange} style={{ width: '100%', padding: '1.1rem 1.5rem', borderRadius: '16px', border: '1.5px solid #eef1ee', background: '#f9faf9', color: '#0e2a04', fontSize: '1rem', outline: 'none', appearance: 'none', transition: 'all 0.3s', fontFamily: "'Be Vietnam Pro', sans-serif", cursor: 'pointer' }} className="form-input-premium">
              <option value="" disabled>-- Chọn mức đầu tư --</option>
              {content.investmentOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <div style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#0e2a04', opacity: 0.5 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn-v3" style={{ 
          width: '100%', 
          marginTop: '1rem', 
          background: '#0e2a04', 
          color: 'white', 
          border: 'none', 
          borderRadius: '16px', 
          padding: '1.4rem', 
          fontSize: '1rem', 
          fontWeight: 800, 
          cursor: 'pointer', 
          boxShadow: '0 15px 35px rgba(14, 42, 4, 0.25)', 
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          opacity: isSubmitting ? 0.8 : 1,
          fontFamily: "'Be Vietnam Pro', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          {isSubmitting ? (
            <>
              <span className="loader-dots"></span>
              ĐANG XỬ LÝ...
            </>
          ) : (
            <>
              {content.submitLabel}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </>
          )}
        </button>

        <div className="form-safety-badges" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2.5rem', 
          marginTop: '1.5rem', 
          fontSize: '0.85rem', 
          color: '#8c9d87',
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontWeight: 600
        }}>
          {content.safetyBadges.map((badge) => (
            <span key={badge} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1rem' }}>🛡️</span>
              {badge}
            </span>
          ))}
        </div>
      </form>

      <style jsx>{`
        .form-input-premium:focus {
          border-color: #00c689 !important;
          background: white !important;
          box-shadow: 0 0 0 4px rgba(0, 198, 137, 0.1);
        }
        .submit-btn-v3:hover {
          background: #00c689;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 198, 137, 0.3);
        }
        .submit-btn-v3:active {
          transform: translateY(-2px);
        }
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
      `}</style>
    </div>
  );
};

export default QuoteForm;
