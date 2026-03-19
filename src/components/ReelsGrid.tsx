'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const reelsData = [
  {
    category: 'CONSTRUCTION',
    title: 'Waterfall Build Process',
    duration: '0:45',
    thumbnail: '/images/projects/1-3-b1caaea5db89.jpg'
  },
  {
    category: 'GARDEN TOUR',
    title: 'Japanese Garden Tour',
    duration: '1:20',
    thumbnail: '/images/projects/1-4-1971866182c4.jpg'
  },
  {
    category: 'BEFORE & AFTER',
    title: 'Pool Landscape Reveal',
    duration: '0:55',
    thumbnail: '/images/projects/1-5-dead6d916e0d.jpg'
  },
  {
    category: 'TIME-LAPSE',
    title: 'Zen Garden in 60 Seconds',
    duration: '1:00',
    thumbnail: '/images/projects/2-3-94083ecb8ca1.jpg'
  },
  {
    category: 'GARDEN TOUR',
    title: 'Koi Pond Serenity',
    duration: '1:15',
    thumbnail: '/images/projects/3-4-64bd8db952ad.jpg'
  },
  {
    category: 'CONSTRUCTION',
    title: 'Night Lighting Setup',
    duration: '0:50',
    thumbnail: '/images/projects/4-3-b7e017ae281d.jpg'
  }
];

const ReelsGrid = () => {
  return (
    <section className="reels-grid-section section-tight">
      <div className="container">
        <div className="reels-grid">
          {reelsData.map((reel, index) => (
            <motion.div 
              className="reel-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="reel-thumbnail">
                <Image 
                  src={reel.thumbnail} 
                  alt={reel.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Play Button Overlay */}
                <div className="reel-play-overlay">
                  <div className="play-icon">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="reel-content-overlay">
                  <span className="reel-category">{reel.category}</span>
                  <h3 className="reel-title-text">{reel.title}</h3>
                  <span className="reel-duration">{reel.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsGrid;
