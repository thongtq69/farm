'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stages = [
  {
    number: '01',
    title: 'Khảo sát & Tư vấn',
    desc: 'Lắng nghe nhu cầu, khảo sát địa hình và tư vấn giải pháp quy hoạch tối ưu ban đầu.'
  },
  {
    number: '02',
    title: 'Thiết kế Concept 2D',
    desc: 'Sắp xếp công năng, quy hoạch tổng mặt bằng 2D để định hình không gian.'
  },
  {
    number: '03',
    title: 'Phối cảnh 3D',
    desc: 'Diễn họa hình ảnh 3D sinh động, giúp chủ đầu tư hình dung rõ nét công trình tương lai.'
  },
  {
    number: '04',
    title: 'Hồ sơ kỹ thuật',
    desc: 'Triển khai chi tiết kiến trúc, kết cấu, điện nước và cảnh quan để thi công.'
  },
  {
    number: '05',
    title: 'Dự toán chi tiết',
    desc: 'Bóc tách khối lượng vật tư và lập bảng dự toán chi phí thi công chính xác.'
  },
  {
    number: '06',
    title: 'Giám sát tác giả',
    desc: 'Đồng hành cùng đơn vị thi công để đảm bảo công trình đúng với thiết kế.'
  },
  {
    number: '07',
    title: 'Bàn giao & Vận hành',
    desc: 'Hoàn thiện hồ sơ và hướng dẫn vận hành, duy trì vẻ đẹp bền vững cho dự án.'
  }
];

const DesignProcess = () => {
  return (
    <section className="design-process section bg-light">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '5rem' }}>
          <span className="subtitle">TƯ DUY & QUY TRÌNH</span>
          <h2 className="section-title">7 Giai đoạn thiết kế chuyên nghiệp</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Quy trình làm việc chặt chẽ giúp tối ưu thời gian và đảm bảo chất lượng cao nhất cho từng dự án.
          </p>
        </div>

        <div className="process-list-modern">
          {stages.map((stage, idx) => (
            <motion.div 
              className="process-card" 
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="p-num">{stage.number}</div>
              <div className="p-content">
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
