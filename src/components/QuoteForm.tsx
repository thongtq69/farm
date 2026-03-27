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
        padding: '3rem',
        borderRadius: '32px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
        border: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <div className="form-head-v2" style={{ marginBottom: '2.5rem' }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            marginBottom: '0.75rem',
            color: '#0d3f32',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}
        >
          {content.title}
        </h3>
        <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>{content.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="premium-compact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="form-row-v2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="form-group-v2">
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.6rem' }}>Họ và tên *</label>
            <input type="text" name="name" value={formData.name} placeholder="Nguyễn Văn A" required onChange={handleChange} style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#333', fontSize: '1rem', outline: 'none', transition: 'all 0.2s' }} />
          </div>
          <div className="form-group-v2">
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.6rem' }}>Số điện thoại *</label>
            <input type="tel" name="phone" value={formData.phone} placeholder="09xx xxx xxx" required onChange={handleChange} style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#333', fontSize: '1rem', outline: 'none', transition: 'all 0.2s' }} />
          </div>
        </div>

        <div className="form-group-v2">
          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.6rem' }}>Loại hình công trình *</label>
          <select name="propertyType" required value={formData.propertyType} onChange={handleChange} style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#333', fontSize: '1rem', outline: 'none', appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center' }}>
            <option value="" disabled>-- Chọn loại hình --</option>
            {content.propertyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group-v2">
          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.6rem' }}>Ngân sách dự kiến *</label>
          <select name="investment" required value={formData.investment} onChange={handleChange} style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1.5px solid #eee', background: '#fcfcfc', color: '#333', fontSize: '1rem', outline: 'none', appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center' }}>
            <option value="" disabled>-- Chọn mức đầu tư --</option>
            {content.investmentOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn-premium" style={{ width: '100%', marginTop: '1.5rem', background: '#0d3f32', color: 'white', border: 'none', borderRadius: '12px', padding: '1.25rem', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 10px 30px rgba(13, 63, 50, 0.25)', transition: 'all 0.3s ease', opacity: isSubmitting ? 0.8 : 1 }}>
          {isSubmitting ? 'ĐANG GỬI...' : content.submitLabel}
        </button>

        <div className="form-safety-badges" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
          {content.safetyBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
