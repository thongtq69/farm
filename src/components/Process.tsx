'use client';

import React from 'react';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Tư vấn Online',
    desc: 'Đội ngũ KTS Oak Farm sẽ họp trực tuyến cùng CĐT tìm hiểu về khu đất, nắm bắt nhu cầu và định hướng phát triển.',
    image: '/images/other/giaidoan-1-abbc2ad16d98.jpg'
  },
  {
    number: '02',
    title: 'Khảo sát dự án',
    desc: 'Đội ngũ KTS trực tiếp đến khu đất để cảm nhận địa hình, địa mạo và thu thập dữ liệu bằng Flycam.',
    image: '/images/other/giaidoan-2-2384864c094a.jpg'
  },
  {
    number: '03',
    title: 'Phác họa ý tưởng',
    desc: 'Phác họa định hướng giao thông, phân khu hạng mục cho dự án dựa trên báo cáo khảo sát.',
    image: '/images/other/giaidoan-3-2867ce958d5f.jpg'
  },
  {
    number: '04',
    title: 'Mặt bằng tổng thể',
    desc: 'Thực hiện hồ sơ quy hoạch mặt bằng tổng thể hoàn chỉnh với đầy đủ các bộ môn liên quan.',
    image: '/images/other/thietke-bd5c76f42e38.jpg'
  },
  {
    number: '05',
    title: 'Phối cảnh 3D tổng thể',
    desc: 'Phối cảnh tổng thể với nhiều view nhìn trên cao giúp CĐT có cái nhìn tổng quan về dự án.',
    image: '/images/other/khaosat1-1ff678c29115.jpg'
  },
  {
    number: '06',
    title: 'Phối cảnh 3D chi tiết',
    desc: 'Thiết kế và thể hiện công năng chi tiết của từng hạng mục, nội thất cho từng phòng.',
    image: '/images/other/ho-so-1-d6f4ac33bb75.jpg'
  },
  {
    number: '07',
    title: 'Hồ sơ kỹ thuật',
    desc: 'Tổng hợp hồ sơ thiết kế kỹ thuật thi công đầy đủ, phục vụ cho việc thi công chuẩn xác nhất.',
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
