'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const items = [
  {
    num: '01',
    title: 'Khảo sát',
    desc: 'Từ bước đầu tiên là khảo sát kỹ lưỡng thực tế, Son Hai Landscape đã nắm rõ được diện mạo khu đất, gặp gỡ CĐT và hiểu hơn về mong muốn của CĐT về dự án để đời của họ.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426343/farm/images/other/baentyl6pxjdhxdgxmvc.jpg'
  },
  {
    num: '02',
    title: 'Thiết kế',
    desc: 'Trong quá trình thiết kế Farm, các KTS và khách hàng luôn có sự trao đổi liền mạch và liên tục. Bất cứ sự thay đổi nào cũng được chúng tôi cập nhật để đi đến phương án tối ưu nhất.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426347/farm/images/other/rwhhetrk6jcsheqsow6o.jpg'
  },
  {
    num: '03',
    title: 'Thi công',
    desc: 'Son Hai Landscape luôn đồng hành cùng CĐT trên mọi phương diện từ trao đổi online cho đến giám sát tác giả tại dự án cho đến khi dự án được hoàn thiện.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426321/farm/images/icons/wkj2wrrqrudawumi7hrw.jpg'
  }
];

const Companion = () => {
  return (
    <section className="companion section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">Tận tâm phục vụ</span>
          <h2 className="section-title">Đồng hành trên mọi phương diện</h2>
          <p className="section-subtitle">Luôn bên cạnh chủ đầu tư trong từng bước hình thành dự án.</p>
        </div>

        <motion.p 
          className="companion-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Để hoàn thành được một dự án thiết kế Farm, đều phải trải qua các bước cơ bản nhất là khảo sát, thiết kế và thi công. 
          Trong 3 bước cơ bản này, Son Hai Landscape luôn đồng hành cùng CĐT trên nhiều phương diện và luôn coi đó là trọng trách của chúng tôi.
        </motion.p>

        <div className="companion-grid">
          {items.map((item, index) => (
            <motion.div 
              className="companion-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
                <div className="card-image-box">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    <motion.div 
                      className="card-num-badge"
                      whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'var(--primary-dark)' }}
                    >
                      {item.num}
                    </motion.div>
                </div>
                <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companion;
