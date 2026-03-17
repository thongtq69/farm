"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    // Add simple reveal animation logic
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-about");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("visible");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb-about">
        <div className="container">
          <div className="breadcrumb-inner-about">
            <Link href="/">Trang chủ</Link>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span>Chúng tôi</span>
          </div>
        </div>
      </div>

      {/* HERO ABOUT SECTION */}
      <section className="hero-about">
        <div className="container">
          <div className="hero-about-inner">
            <div className="hero-about-text reveal-about">
              <p className="hero-about-eyebrow">
                Đơn vị thiết kế Farmstay hàng đầu Việt Nam
              </p>
              <h1 className="hero-about-title">
                Oak Farm phân chia ra nhiều giai đoạn thiết kế phù hợp với ngân sách
              </h1>
              <p className="hero-about-desc">
                Phù hợp với ngân sách và phân bổ giai đoạn thực hiện của chủ đầu
                tư. Từ ý tưởng đến thực tế, Oak Farm đồng hành cùng bạn trong
                mọi giai đoạn.
              </p>
              <a className="hero-about-link" href="#">
                Tìm hiểu về 7 giai đoạn thiết kế →
              </a>
            </div>
            <div className="hero-about-imgs reveal-about reveal-delay-2">
              <div className="hero-about-img1">
                <Image
                  src="/images/projects/oak-farm-nhan-1-scaled-1-806x616.jpg" // Using an existing project placeholder
                  alt="Oak Farm dự án"
                  width={806}
                  height={616}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hero-about-img2">
                <Image
                  src="/images/projects/a1-copy.jpg"
                  alt="Oak Farm thiết kế"
                  width={600}
                  height={600}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO QUOTE SECTION */}
      <section className="intro-quote">
        <div className="container">
          <div className="intro-quote-inner reveal-about">
            <p className="intro-quote-text">
              Mô hình <strong>farmstay đang là một xu hướng</strong> kinh doanh
              và nghỉ dưỡng gia đình đang hot, phát triển mạnh và nở rộ ở{" "}
              <strong>Việt Nam</strong> hiện nay.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section team-about">
        <div className="container">
          <div className="team-header-about reveal-about">
            <div className="tag-pill-about">🌿 Oak Teams</div>
            <h2 className="section-title">Đội ngũ thiết kế Oak Farm</h2>
            <p className="section-sub">
              Đội ngũ thiết kế Oak Farm là những người nhiệt huyết, chuyên
              nghiệp và có kỹ năng đa dạng. Chúng tôi luôn làm việc tận tâm,
              sáng tạo, mang lại giá trị tốt nhất cho khách hàng.
            </p>
          </div>
          <div className="team-grid-about">
            <div className="team-card-about reveal-about reveal-delay-1">
              <div className="team-card-img-wrap-about">
                <Image
                  src="/images/other/oak-hai-1.png"
                  alt="Quốc Hải"
                  width={250}
                  height={250}
                />
                <div className="team-card-overlay-about">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Xem profile</span>
                </div>
              </div>
              <div className="team-card-name-about">Quốc Hải</div>
              <div className="team-card-role-about">Founder</div>
            </div>
            <div className="team-card-about reveal-about reveal-delay-2">
              <div className="team-card-img-wrap-about">
                <Image
                  src="/images/other/huong-oak.png" // Using placeholder image names that follow pattern, usually you need to provide these assets
                  alt="Hương Lê"
                  width={250}
                  height={250}
                />
                <div className="team-card-overlay-about">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Xem profile</span>
                </div>
              </div>
              <div className="team-card-name-about">Hương Lê</div>
              <div className="team-card-role-about">Administrator</div>
            </div>
            <div className="team-card-about reveal-about reveal-delay-3">
              <div className="team-card-img-wrap-about">
                <Image
                  src="/images/other/oak-nhan-1.png"
                  alt="Bệ Ngạn"
                  width={250}
                  height={250}
                />
                <div className="team-card-overlay-about">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Xem profile</span>
                </div>
              </div>
              <div className="team-card-name-about">Bệ Ngạn</div>
              <div className="team-card-role-about">Team Leader</div>
            </div>
            <div className="team-card-about reveal-about reveal-delay-1">
              <div className="team-card-img-wrap-about">
                <Image
                  src="/images/other/duong-oak.png"
                  alt="Thùy Dương"
                  width={250}
                  height={250}
                />
                <div className="team-card-overlay-about">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Xem profile</span>
                </div>
              </div>
              <div className="team-card-name-about">Thùy Dương</div>
              <div className="team-card-role-about">Architect</div>
            </div>
            <div className="team-card-about reveal-about reveal-delay-2">
              <div className="team-card-img-wrap-about">
                <Image
                  src="/images/other/vu-oak.png"
                  alt="Jay Nguyen"
                  width={250}
                  height={250}
                />
                <div className="team-card-overlay-about">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Xem profile</span>
                </div>
              </div>
              <div className="team-card-name-about">Jay Nguyen</div>
              <div className="team-card-role-about">Architect</div>
            </div>
            <div className="team-card-about reveal-about reveal-delay-3">
              <div className="team-card-img-wrap-about">
                <Image
                  src="/images/other/hang-oak.png"
                  alt="Hằng Cận"
                  width={250}
                  height={250}
                />
                <div className="team-card-overlay-about">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Xem profile</span>
                </div>
              </div>
              <div className="team-card-name-about">Hằng Cận</div>
              <div className="team-card-role-about">Architect</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="section why-us-about">
        <div className="container">
          <div className="why-us-header-about reveal-about">
            <div className="tag-pill-about">🌿 Tại sao là chúng tôi</div>
            <h2 className="section-title">Tại sao Oak Farm là sự lựa chọn tốt nhất</h2>
            <p className="section-sub">
              Tại Oak Farm, chúng tôi kết hợp kinh nghiệm và sự sáng tạo để mang đến
              cho khách hàng những giải pháp thiết kế phù hợp với địa hình, bản sắc
              vùng miền và ngân sách dự án.
            </p>
          </div>
          <div className="why-us-grid-about">
            <div className="why-card-about reveal-about reveal-delay-1">
              <div className="why-icon-about">💬</div>
              <div className="why-body-about">
                <h4>Tư vấn miễn phí</h4>
                <p>
                  Đội ngũ tư vấn Oak Farm luôn sẵn sàng tư vấn, họp online với
                  khách hàng bất cứ lúc nào và hoàn toàn miễn phí.
                </p>
              </div>
            </div>
            <div className="why-card-about reveal-about reveal-delay-2">
              <div className="why-icon-about">🔍</div>
              <div className="why-body-about">
                <h4>Khảo sát tận nơi</h4>
                <p>
                  Tất cả các dự án Oak Farm tham gia đều được khảo sát tận nơi để
                  có cái nhìn trực quan nhất về khu đất.
                </p>
              </div>
            </div>
            <div className="why-card-about reveal-about reveal-delay-3">
              <div className="why-icon-about">📐</div>
              <div className="why-body-about">
                <h4>7 Giai đoạn thiết kế</h4>
                <p>
                  Oak Farm phân chia ra nhiều giai đoạn thiết kế để phù hợp với
                  ngân sách và phân bổ giai đoạn thực hiện của chủ đầu tư.
                </p>
              </div>
            </div>
            <div className="why-card-about reveal-about reveal-delay-4">
              <div className="why-icon-about">✨</div>
              <div className="why-body-about">
                <h4>Mô hình độc bản</h4>
                <p>
                  Mỗi dự án là một mô hình thiết kế độc bản, không giống bất cứ
                  thiết kế nào. Thể hiện rõ cá tính và bản sắc của từng dự án.
                </p>
              </div>
            </div>
          </div>

          <div className="why-us-banner-about reveal-about" style={{ marginTop: "40px" }}>
            <Image
              src="/images/other/contact-banner-2.png"
              alt="Oak Farm banner"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="why-us-banner-overlay-about">
              <div className="why-us-banner-text-about">
                <h3>
                  Bắt đầu hành trình
                  <br />
                  thiết kế Farm cùng chúng tôi
                </h3>
                <a href="#" className="btn-green">
                  Nhận báo giá ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="section journey-about">
        <div className="container">
          <div className="journey-inner-about">
            <div className="journey-left-about">
              <div className="tag-pill-about">🌿 Hành trình</div>
              <h2 className="section-title reveal-about">Hành trình khám phá</h2>
              <p className="section-sub reveal-about reveal-delay-1">
                Nhờ sự tin tưởng từ chủ đầu tư mà Oak Farm đã có thể đến với
                những vùng đất mới, gặp những người bạn và học hỏi thêm nhiều
                kiến thức mới.
              </p>

              <div className="avatar-stack-about reveal-about reveal-delay-2">
                <div className="avatar-stack-img-about">
                  <Image src="/images/other/avatar-2.jpg" alt="Avatar" width={48} height={48} />
                </div>
                <div className="avatar-stack-img-about">
                  <Image src="/images/other/avatar-3.jpg" alt="Avatar" width={48} height={48} />
                </div>
                <div className="avatar-stack-img-about">
                  <Image src="/images/other/avatar-1.jpg" alt="Avatar" width={48} height={48} />
                </div>
                <div className="avatar-stack-info-about">
                  <div className="avatar-stack-count-about">10K+</div>
                  <div className="avatar-stack-label-about">
                    Followers trên Facebook
                  </div>
                </div>
              </div>

              <div className="stats-row-about reveal-about reveal-delay-3">
                <div className="stat-item">
                  <div className="stat-num-about">
                    <span>45</span>
                    <span>+</span>
                  </div>
                  <div className="stat-label-about">
                    Dự án hoàn thành trên khắp cả nước
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-num-about">
                    <span>20</span>
                    <span>+</span>
                  </div>
                  <div className="stat-label-about">
                    Tỉnh thành ở mọi miền Tổ Quốc
                  </div>
                </div>
              </div>
            </div>

            <div className="journey-right-about reveal-about reveal-right">
              <div className="journey-img-main-about">
                <Image
                  src="/images/other/coverr-oak-farm.jpg"
                  alt="Hành trình Oak Farm"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="journey-img-badge-about">
                <div className="journey-img-badge-icon-about">🏆</div>
                <div>
                  <div style={{ fontSize: "11px", opacity: 0.8 }}>
                    Cột mốc đạt được
                  </div>
                  <div>Dự án trên 20 tỉnh thành</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section faq-about">
        <div className="container">
          <div className="faq-header-about reveal-about">
            <div className="tag-pill-about">🌿 Hỏi và trả lời</div>
            <h2 className="section-title">Những câu hỏi thường gặp</h2>
          </div>
          <div className="faq-list-about reveal-about">
            {[
              {
                q: "Oak Farm có khảo sát và thiết kế ở xa không?",
                a: "Văn phòng Oak Farm tại Đà Nẵng, tuy nhiên chúng tôi chuyên khảo sát, tư vấn thiết kế các dự án trên mọi miền đất nước. Sẵn sàng đến tận nơi khảo sát để mang lại cái nhìn trực quan và chi tiết nhất về dự án.",
              },
              {
                q: "Khảo sát bao gồm công việc gì?",
                a: "Khảo sát dự án nhằm tiếp cận thực tế khu đất cùng chủ đầu tư: bay Flycam, ghi nhận địa hình, địa mạo, view nhìn, họp trao đổi ý tưởng trực tiếp và lập báo cáo ý tưởng sau khảo sát.",
              },
              {
                q: "Chi phí khảo sát như thế nào?",
                a: "Chi phí cho mỗi lần khảo sát từ 14-22 triệu/ dự án tùy vào khoảng cách di chuyển. Tuy nhiên, nếu kết hợp trong thời gian Oak Farm có chuyến khảo sát cùng địa điểm, chi phí sẽ giảm từ 30% đến 50%.",
              },
              {
                q: "Oak Farm có áp dụng ưu đãi gì không?",
                a: "Tùy vào từng thời điểm trong năm (từ 1 đến 2 lần), Oak Farm sẽ có gói ưu đãi giảm giá chi phí thiết kế từ 10%-20% tùy vào từng giai đoạn thiết kế.",
              },
              {
                q: "Tôi cần báo giá thiết kế Farm?",
                a: "Anh/chị vui lòng điền thông tin vào biểu mẫu bên dưới, Oak Farm nhận thông tin về dự án và sẽ gửi báo giá ngay.",
              },
            ].map((faq, index) => (
              <div className="faq-item-about" key={index}>
                <button
                  className={`faq-question-about ${
                    openFaq === index ? "open" : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-question-num-about">
                    0{index + 1}.
                  </span>
                  <span className="faq-question-text-about">{faq.q}</span>
                  <span className="faq-icon-about">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`faq-answer-about ${
                    openFaq === index ? "open" : ""
                  }`}
                >
                  <div className="faq-answer-inner-about">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FANPAGE CTA SECTION */}
      <section className="fanpage-cta-about">
        <div className="container">
          <div className="fanpage-cta-inner-about">
            <div className="fanpage-cta-left-about">
              <h2>Ghé thăm Fanpage Oak Farm</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div className="fanpage-avatars-about">
                  <div className="fanpage-avatar-about">
                    <Image
                      src="/images/other/avatar-1.jpg"
                      alt="Avatar"
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="fanpage-avatar-about">
                    <Image
                      src="/images/other/avatar-3.jpg"
                      alt="Avatar"
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="fanpage-avatar-about">
                    <Image
                      src="/images/other/avatar-2.jpg"
                      alt="Avatar"
                      width={44}
                      height={44}
                    />
                  </div>
                </div>
                <div className="fanpage-meta-about">
                  <div className="fanpage-meta-count-about">10K+</div>
                  <div className="fanpage-meta-label-about">Followers</div>
                </div>
              </div>
            </div>
            <a href="https://www.facebook.com/oakfarm.vn" className="btn-fb-about">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              Theo dõi trên Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
