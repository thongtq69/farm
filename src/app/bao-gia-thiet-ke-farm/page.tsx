import React from 'react';
import QuoteForm from '../../components/QuoteForm';

export const metadata = {
  title: 'Báo Giá Thiết Kế Farmstay | Son Hai Landscape',
  description: 'Nhận báo giá thiết kế Farmstay, sân vườn, hồ koi tức thì. Sơn Hải Landscape cung cấp quy trình thiết kế chuyên nghiệp qua 7 giai đoạn.',
};

export default function PricingPage() {
  return (
    <main className="pricing-page">
      {/* Header */}
      <section className="page-header section-dark">
        <div className="container">
          <div className="page-header-content text-center">
            <span className="subtitle" style={{ color: '#c5a059' }}>MINH BẠCH & CHUYÊN NGHIỆP</span>
            <h1 className="page-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
              Báo giá thiết kế
            </h1>
            <p className="page-desc" style={{ margin: '0 auto', maxWidth: '700px', fontSize: '1.1rem', opacity: 0.9 }}>
              Anh/Chị vui lòng điền thông tin đăng ký báo giá theo mẫu dưới đây. Sơn Hải Landscape sẽ tiếp nhận và gửi báo giá cụ thể theo từng giai đoạn dự án.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="quote-section">
        <div className="container-fluid no-padding">
          <div className="quote-grid-premium">
            {/* Left Column: Branding & Info */}
            <div className="quote-branding-panel section-dark" data-aos="fade-right">
              <div className="quote-left-info">
                <span className="subtitle" style={{ color: 'var(--secondary)' }}>MINH BẠCH & CHUYÊN NGHIỆP</span>
                <h1 className="arsenal">NHẬN BÁO GIÁ <br /> THIẾT KẾ & THI CÔNG</h1>
                <p className="page-desc-panel">
                  Chúng tôi cung cấp giải pháp quy hoạch tổng thể và thiết kế chi tiết cho mọi mô hình FarmStay, Garden và Nghỉ dưỡng.
                </p>
              </div>
              <div className="coop-badge">
                <span className="subtitle" style={{ color: 'var(--secondary)' }}>TƯ VẤN CHUYÊN SÂU</span>
                
                <div className="benefit-list-modern">
                  <div className="modern-b-item">
                    <div className="b-num">01</div>
                    <div className="b-text">
                      <h4>Giải pháp tối ưu</h4>
                      <p>Kiến tạo không gian hài hòa giữa thẩm mỹ kiến trúc và công năng sử dụng thực tế.</p>
                    </div>
                  </div>
                  <div className="modern-b-item">
                    <div className="b-num">02</div>
                    <div className="b-text">
                      <h4>Minh bạch chi phí</h4>
                      <p>Báo giá chi tiết từng hạng mục, cam kết không phát sinh chi phí ngoài dự toán.</p>
                    </div>
                  </div>
                  <div className="modern-b-item">
                    <div className="b-num">03</div>
                    <div className="b-text">
                      <h4>Đồng hành bền vững</h4>
                      <p>Hỗ trợ pháp lý, giám sát thi công và bảo trì cảnh quan trọn đời dự án.</p>
                    </div>
                  </div>
                </div>

                <div className="panel-cta-box">
                  <p>Hỗ trợ tư vấn trực tiếp 24/7</p>
                  <a href="tel:0888220044" className="panel-phone">0888.22.00.44</a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="quote-form-panel" data-aos="fade-left">
              <div className="form-panel-wrapper">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="cta-banner-pricing section">
        <div className="container">
          <div className="dark-card-banner text-center" style={{ background: '#16320a', borderRadius: '40px', padding: '5rem' }}>
            <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem' }}>Khởi đầu cho một dự án bền vững</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
              Mọi công trình đều bắt đầu từ một ý tưởng hay và một bản quy hoạch đúng đắn. Hãy để chúng tôi đồng hành cùng anh/chị.
            </p>
            <div className="cta-btns" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="https://zalo.me/0888220044" className="btn-modern-primary">Liên hệ Zalo</a>
              <a href="/project" className="btn-modern-outline-white">Xem mẫu hồ sơ</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
