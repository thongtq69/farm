'use client';

import React from 'react';
import Image from 'next/image';

const items = [
  {
    num: '01',
    title: 'Khảo sát',
    desc: 'Từ bước đầu tiên là khảo sát kỹ lưỡng thực tế, Oak Farm đã nắm rõ được diện mạo khu đất và thấu hiểu mong muốn của CĐT.',
    image: '/images/other/khaosat1-1ff678c29115.jpg'
  },
  {
    num: '02',
    title: 'Thiết kế',
    desc: 'Các KTS và khách hàng luôn trao đổi liền mạch. Mọi thay đổi đều được cập nhật để đi đến phương án tối ưu nhất.',
    image: '/images/other/thietke-bd5c76f42e38.jpg'
  },
  {
    num: '03',
    title: 'Thi công',
    desc: 'Oak Farm luôn đồng hành cùng CĐT từ trao đổi online đến giám sát tác giả tại dự án cho đến khi hoàn thành.',
    image: '/images/icons/thicong-152dc7bb4009.jpg'
  }
];

const Companion = () => {
  return (
    <section className="companion section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Đồng hành trên mọi phương diện</h2>
          <p className="section-subtitle">Luôn bên cạnh chủ đầu tư trong từng bước hình thành dự án.</p>
        </div>

        <div className="companion-grid">
          {items.map((item, index) => (
            <div className="companion-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-image">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    <div className="card-num">{item.num}</div>
                </div>
                <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Companion;
