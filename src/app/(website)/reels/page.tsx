import React from 'react';
import ReelsGrid from '../../components/ReelsGrid';
import { getReels, getSiteContent } from '@/lib/site-content';

export const metadata = {
  title: 'Videos | Son Hai Landscape - Short Form Videos',
  description: 'Short-form videos showcasing our landscape construction process, garden tours, and project reveals.',
};

export default async function ReelsPage() {
  const [siteContent, reels] = await Promise.all([getSiteContent(), getReels()]);

  return (
    <main className="reels-page-main">
      <section className="reels-header section-tight">
        <div className="container">
          <div className="reels-header-content">
            <h1 className="reels-title">{siteContent.reelsPage.title}</h1>
            <p className="reels-intro">
              {siteContent.reelsPage.intro}
            </p>
          </div>
        </div>
      </section>

      <ReelsGrid reels={reels} />
    </main>
  );
}
