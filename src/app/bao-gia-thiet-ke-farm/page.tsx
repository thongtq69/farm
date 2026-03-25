'use client';

import React from 'react';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';

export default function PricingPage() {
  return (
    <main className="pricing-page-v2" style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="container">
        <div className="pricing-grid-v2" style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 550px', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left: Content */}
          <div className="pricing-content-left">
            <span className="subtitle" style={{ color: '#00c689', background: 'rgba(0,198,137,0.1)', padding: '0.6rem 1.8rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1rem' }}>TƯ VẤN CHUYÊN SÂU 1:1</span>
            
            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
              color: '#0d3f32', 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: '2rem' 
            }}>
              Khởi tạo <br /> không gian <br /> <span style={{ color: '#00c689' }}>bền vững</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '550px' }}>
              Chúng tôi không chỉ thi công, chúng tôi cùng anh chị kiến tạo giải pháp quy hoạch tổng thể mang đậm dấu ấn cá nhân và tôn trọng thiên nhiên.
            </p>

            <div className="benefit-stack" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="benefit-item-v2" style={{ display: 'flex', gap: '1.5rem' }}>
                <div className="benefit-icon-v2" style={{ width: '48px', height: '48px', background: '#0d3f32', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V9h2v7zm4 0h-2V7h2v9z"/></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d3f32', marginBottom: '0.5rem' }}>Giải pháp quy hoạch 4.0</h4>
                  <p style={{ color: '#666' }}>Tối ưu hóa công năng trên từng mét vuông diện tích.</p>
                </div>
              </div>
              <div className="benefit-item-v2" style={{ display: 'flex', gap: '1.5rem' }}>
                <div className="benefit-icon-v2" style={{ width: '48px', height: '48px', background: '#0d3f32', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d3f32', marginBottom: '0.5rem' }}>Thực tế & Bền vững</h4>
                  <p style={{ color: '#666' }}>Cam kết sử dụng vật liệu tự nhiên, hệ sinh thái tự cân bằng.</p>
                </div>
              </div>
            </div>

            <div className="pricing-support" style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '2.5rem' }}>
              <div className="support-avatars" style={{ display: 'flex' }}>
                 <Image src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426595/farm/images/projects/nymwhku7vdxhge1isoly.jpg" alt="Support" width={50} height={50} style={{ borderRadius: '50%', border: '4px solid white', marginRight: '-15px', objectFit: 'cover' }} />
                 <Image src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426462/farm/images/projects/h2kf73vgyvthd3lxzsbq.jpg" alt="Support" width={50} height={50} style={{ borderRadius: '50%', border: '4px solid white', objectFit: 'cover' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500, marginBottom: '0.2rem' }}>Đội ngũ KTS trực tuyến</p>
                <a href="tel:0888220044" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0d3f32', textDecoration: 'none' }}>0888.22.00.44</a>
              </div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <div className="pricing-form-right" style={{ position: 'relative' }}>
             <QuoteForm />
             {/* Decorative element */}
             <div className="form-decoration" style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, #00c689 0%, transparent 70%)', opacity: 0.1, zIndex: -1 }}></div>
          </div>

        </div>
      </div>

      {/* Mobile styling in global.css to handle grid-template-columns: 1fr */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .pricing-grid-v2 {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .pricing-page-v2 {
            padding-top: 6rem !important;
            padding-bottom: 6rem !important;
          }
        }
      `}</style>
    </main>
  );
}
