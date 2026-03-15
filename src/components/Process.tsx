'use client';

import React from 'react';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Tư vấn Online',
    desc: 'Đội ngũ KTS Oak Farm sẽ họp trực tuyến cùng CĐT tìm hiểu về khu đất. Qua đó nắm bắt nhu cầu, mong muốn thiết kế để phân tích, đưa ra những góp ý, định hướng phát triển',
    bullets: [
      'Tìm hiểu thông tin dự án',
      'Phân tích, góp ý, định hướng',
      'Báo giá chi phí thiết kế'
    ],
    image: '/images/other/giaidoan-1-abbc2ad16d98.jpg'
  },
  {
    number: '02',
    title: 'Khảo sát dự án',
    desc: 'Đội ngũ KTS khảo sát dự án đến trực tiếp khu đất thiết kế để có cảm nhận rõ về địa hình, địa mạo, view nhìn trong dự án. Đồng thời thu thập dữ liệu đầy đủ nhất phục vụ cho việc thiết kế',
    bullets: [
      'Bay Flycam khảo sát hiện trạng',
      'Mô hình 3D hiện trạng trực quan',
      'Hình ảnh 2D, 3D, Panorma',
      'Họp trực tiếp cùng CĐT tại khu đất',
      'Báo cáo ý tưởng sau khảo sát'
    ],
    image: '/images/other/giaidoan-2-2384864c094a.jpg'
  },
  {
    number: '03',
    title: 'Phác họa ý tưởng',
    desc: 'Từ báo cáo sau khảo sát, Oak Farm sẽ phác họa ý tưởng, định hướng giao thông, phân khu hạng mục cho dự án.',
    bullets: [
      'Định hướng ý tưởng',
      'Phác họa vẽ tay định vị phân khu, giao thông',
      'Định vị sơ bộ các hạng mục xây dựng'
    ],
    image: '/images/other/giaidoan-3-2867ce958d5f.jpg'
  },
  {
    number: '04',
    title: 'Mặt bằng tổng thể',
    desc: 'Sau khi trao đổi từ bản phác họa ý tưởng, Oak Farm thực hiện hồ sơ quy hoạch mặt bằng tổng thể hoàn chỉnh với đầy đủ các bộ môn liên quan.',
    bullets: [
      'Đồ họa layout chi tiết quy hoạch tổng mặt bằng',
      'Bản vẽ quy hoạch kiến trúc cảnh quan',
      'Bản vẽ quy hoạch giao thông, hạ tầng kỹ thuật'
    ],
    image: '/images/other/thietke-bd5c76f42e38.jpg'
  },
  {
    number: '05',
    title: 'Phối cảnh 3D tổng thể',
    desc: 'Phối cảnh tổng thể với nhiều view nhìn trên cao giúp CĐT có cái nhìn tổng quan về dự án. Đồng thời cũng thể hiện rõ hình thức kiến trúc chung và các khu tiểu cảnh.',
    bullets: [
      'Thể hiện 3D kiến trúc các hạng mục',
      'Các view chi tiết tiểu cảnh',
      'Phối cảnh tổng thể toàn dự án'
    ],
    image: '/images/other/khaosat1-1ff678c29115.jpg'
  },
  {
    number: '06',
    title: 'Phối cảnh 3D chi tiết',
    desc: 'Giai đoạn này sẽ thiết kế và thể hiện công năng chi tiết của từng hạng mục, thiết kế 3D nội thất cho từng phòng sử dụng.',
    bullets: [
      'Thiết kế công năng chi tiết cho từng hạng mục',
      'Phối cảnh 3D nội thất các phòng cụ thể',
      'Nghiên cứu vật liệu hoàn thiện công trình'
    ],
    image: '/images/other/ho-so-1-d6f4ac33bb75.jpg'
  },
  {
    number: '07',
    title: 'Hồ sơ kỹ thuật',
    desc: 'Tổng hợp hồ sơ thiết kế kỹ thuật thi công đầy đủ, phục vụ cho việc thi công các hạng mục chuẩn xác nhất.',
    bullets: [
      'Hồ sơ triển khai kiến trúc, nội thất',
      'Hồ sơ triển khai kết cấu',
      'Hồ sơ triển khai hệ thống điện, nước, thông tin liên lạc',
      'Hồ sơ triển khai hạ tầng kỹ thuật'
    ],
    image: '/images/other/giaidoan-7-bf4a153a8516.jpg'
  }
];

const Process = () => {
  return (
    <section className="process section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">7 giai đoạn thiết kế Farm</h2>
          <p className="section-subtitle">Quy trình làm việc chuyên nghiệp, tận tâm và minh bạch.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className={`step-item ${index % 2 !== 0 ? 'reverse' : ''}`} key={index} data-aos="fade-up">
              <div className="step-content">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {step.bullets && (
                  <ul className="step-bullets">
                    {step.bullets.map((bullet, idx) => (
                      <li key={idx}><span className="bullet"></span>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="step-image">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
