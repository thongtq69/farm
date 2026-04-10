import React from 'react';
import QuoteForm from '@/components/QuoteForm';
import Image from 'next/image';
import { getSiteContent } from '@/lib/site-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Báo Giá Thiết Kế Farmstay & Cảnh Quan | Son Hai Landscape',
  description: 'Nhận báo giá thiết kế Farmstay, nhà vườn và cảnh quan chi tiết. Son Hai Landscape cung cấp giải pháp thiết kế tối ưu, phù hợp với ngân sách và quy hoạch bền vững.'
};

export default async function PricingPage() {
  const siteContent = await getSiteContent();
  const content = siteContent.pricingPage;

  return (
    <main className="pricing-page-premium" style={{ 
      background: '#fcfdfb', 
      minHeight: '100vh', 
      paddingTop: '8rem', 
      paddingBottom: '10rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Abstract Background Decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(225deg, #eef5ee 0%, transparent 100%)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,198,137,0.05) 0%, transparent 70%)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="pricing-grid-premium" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.1fr', 
          gap: '5rem', 
          alignItems: 'start' 
        }}>
          
          {/* Left: Content Section */}
          <div className="pricing-content-left" style={{ paddingTop: '2rem' }}>
            <div className="pill-wrapper" data-aos="fade-up">
              <span className="subtitle subtitle-pill" style={{ 
                color: '#0e2a04', 
                background: 'white', 
                padding: '0.75rem 2rem', 
                borderRadius: '100px', 
                display: 'inline-flex', 
                alignItems: 'center',
                marginBottom: '2rem', 
                fontWeight: 700, 
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)'
              }}>
                <span style={{ width: '8px', height: '8px', background: '#00c689', borderRadius: '50%', marginRight: '12px' }}></span>
                {content.pill}
              </span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              color: '#0e2a04', 
              fontFamily: "'Be Vietnam Pro', sans-serif", 
              fontWeight: 800, 
              lineHeight: 1.15,
              marginBottom: '2.5rem',
              letterSpacing: '-0.02em'
            }} data-aos="fade-up" data-aos-delay="100">
              {content.titleLines[0]} <br /> 
              <span style={{ fontWeight: 400, color: '#4a6741' }}>{content.titleLines[1]}</span> <br /> 
              <span style={{ color: '#00c689', position: 'relative' }}>
                {content.titleLines[2]}
                <svg style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%' }} width="100%" height="15" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 0 100 10" fill="transparent" stroke="#00c689" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#556b4f', 
              lineHeight: 1.7, 
              marginBottom: '3.5rem', 
              maxWidth: '580px',
              fontFamily: "'Be Vietnam Pro', sans-serif"
            }} data-aos="fade-up" data-aos-delay="200">
              {content.description}
            </p>

            <div className="benefit-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '2.5rem',
              marginBottom: '4rem'
            }} data-aos="fade-up" data-aos-delay="300">
              {content.benefits.map((benefit, idx) => (
                <div key={benefit.title} className="benefit-card-premium" style={{ 
                  display: 'flex', 
                  gap: '1.5rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.4)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="benefit-icon-v2" style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: '#0e2a04', 
                    color: '#00c689', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexShrink: 0,
                    boxShadow: '0 8px 16px rgba(14, 42, 4, 0.15)'
                  }}>
                    {benefit.icon === 'info' ? (
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" /><path d="M12 16V12" /><path d="M12 8H12.01" /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12L12 3L21 12" /><path d="M5 10V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V10" /></svg>
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0e2a04', marginBottom: '0.6rem', fontFamily: "'Be Vietnam Pro', sans-serif" }}>{benefit.title}</h4>
                    <p style={{ color: '#667b5e', lineHeight: 1.6, fontSize: '0.95rem', fontFamily: "'Be Vietnam Pro', sans-serif" }}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pricing-footer-info" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2rem' 
            }} data-aos="fade-up" data-aos-delay="400">
              <div className="avatar-group" style={{ display: 'flex', position: 'relative' }}>
                 {content.support.avatars.map((avatar, index) => (
                   <div key={avatar} style={{ 
                     width: '56px', 
                     height: '56px', 
                     borderRadius: '50%', 
                     border: '3px solid white', 
                     marginLeft: index === 0 ? '0' : '-18px', 
                     overflow: 'hidden',
                     position: 'relative',
                     boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                   }}>
                     <Image src={avatar} alt="Support" fill style={{ objectFit: 'cover' }} />
                   </div>
                 ))}
                 <div style={{ 
                   width: '24px', 
                   height: '24px', 
                   background: '#00c689', 
                   border: '2px solid white',
                   borderRadius: '50%',
                   position: 'absolute',
                   bottom: '2px',
                   right: '-2px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}>
                   <span style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }}></span>
                 </div>
              </div>
              <div style={{ borderLeft: '1px solid #e2e8e2', paddingLeft: '2rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#667b5e', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{content.support.label}</p>
                <a href={content.support.phoneHref} style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0e2a04', textDecoration: 'none', transition: 'color 0.2s' }} className="hover-accent">{content.support.phoneLabel}</a>
              </div>
            </div>
          </div>

          {/* Right: Premium Form Container */}
          <div className="pricing-form-container" style={{ position: 'sticky', top: '10rem' }} data-aos="zoom-in" data-aos-delay="100">
             <div style={{ position: 'relative' }}>
                {/* Visual accents for form */}
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, #00c689 0%, transparent 70%)', opacity: 0.15, zIndex: -1 }}></div>
                <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '150px', height: '150px', background: 'radial-gradient(circle, #0e2a04 0%, transparent 70%)', opacity: 0.08, zIndex: -1 }}></div>
                
                <QuoteForm content={siteContent.quoteForm} />
                
                {/* Form Badge */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  right: '2rem', 
                  background: '#0e2a04', 
                  color: 'white', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 20px rgba(14, 42, 4, 0.2)',
                  zIndex: 10
                }}>
                  <span style={{ fontSize: '1.2rem' }}>⏱️</span>
                  Phản hồi sau 15 phút
                </div>
             </div>
           </div>

        </div>
      </div>

    </main>
  );
}
