import React from 'react';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import { getSiteContent } from '@/lib/site-content';

export default async function PricingPage() {
  const siteContent = await getSiteContent();
  const content = siteContent.pricingPage;

  return (
    <main className="pricing-page-v2" style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="container">
        <div className="pricing-grid-v2" style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 550px', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left: Content */}
          <div className="pricing-content-left">
            <span className="subtitle subtitle-pill" style={{ color: '#00c689', background: 'rgba(0,198,137,0.1)', padding: '0.6rem 1.8rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1rem' }}>{content.pill}</span>
            
            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
              color: '#0d3f32', 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: '2rem' 
            }}>
              {content.titleLines[0]} <br /> {content.titleLines[1]} <br /> <span style={{ color: content.titleAccent }}>{content.titleLines[2]}</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '550px' }}>
              {content.description}
            </p>

            <div className="benefit-stack" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {content.benefits.map((benefit) => (
                <div key={benefit.title} className="benefit-item-v2" style={{ display: 'flex', gap: '1.5rem' }}>
                  <div className="benefit-icon-v2" style={{ width: '48px', height: '48px', background: '#0d3f32', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {benefit.icon === 'info' ? (
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V9h2v7zm4 0h-2V7h2v9z"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d3f32', marginBottom: '0.5rem' }}>{benefit.title}</h4>
                    <p style={{ color: '#666' }}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pricing-support" style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '2.5rem' }}>
              <div className="support-avatars" style={{ display: 'flex' }}>
                 {content.support.avatars.map((avatar, index) => (
                   <Image key={avatar} src={avatar} alt="Support" width={50} height={50} style={{ borderRadius: '50%', border: '4px solid white', marginRight: index === 0 ? '-15px' : '0', objectFit: 'cover' }} />
                 ))}
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500, marginBottom: '0.2rem' }}>{content.support.label}</p>
                <a href={content.support.phoneHref} style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0d3f32', textDecoration: 'none' }}>{content.support.phoneLabel}</a>
              </div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <div className="pricing-form-right" style={{ position: 'relative' }}>
             <QuoteForm content={siteContent.quoteForm} />
             {/* Decorative element */}
             <div className="form-decoration" style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, #00c689 0%, transparent 70%)', opacity: 0.1, zIndex: -1 }}></div>
           </div>

        </div>
      </div>

    </main>
  );
}
