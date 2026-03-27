'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReelItem } from '@/lib/site-content';

const ReelsGrid = ({ reels }: { reels: ReelItem[] }) => {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  return (
    <section className="reels-grid-section section-tight">
      <div className="container">
        <div className="reels-grid">
          {reels.map((reel, index) => (
            <motion.div className="reel-card" key={`${reel.title}-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.02 }} onClick={() => reel.videoUrl && setSelectedReel(reel)}>
              <div className="reel-thumbnail">
                <Image src={reel.thumbnail} alt={reel.title} fill style={{ objectFit: 'cover' }} />
                <div className="reel-play-overlay">
                  <div className="play-icon">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
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

      <AnimatePresence>
        {selectedReel && (
          <motion.div className="video-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedReel(null)}>
            <motion.div className="video-modal-content" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button className="video-modal-close" onClick={() => setSelectedReel(null)}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <video src={selectedReel.videoUrl} className="reel-video-player" controls autoPlay playsInline />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReelsGrid;
