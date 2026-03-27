import React from 'react';
import ReelsGrid from '../../components/ReelsGrid';

export const metadata = {
  title: 'Video | Son Hai Landscape - Short Form Videos',
  description: 'Short-form videos showcasing our landscape construction process, garden tours, and project reveals.',
};

export default function ReelsPage() {
  return (
    <main className="reels-page-main">
      <section className="reels-header section-tight">
        <div className="container">
          <div className="reels-header-content">
            <h1 className="reels-title">Video</h1>
            <p className="reels-intro">
              Short-form videos showcasing our landscape construction process, <br/>garden tours, and project reveals.
            </p>
          </div>
        </div>
      </section>

      <ReelsGrid />
    </main>
  );
}
