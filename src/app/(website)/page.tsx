import React from 'react';
import Hero from '@/components/Hero';
import HomeHighlights from '@/components/HomeHighlights';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Projects from '@/components/Projects';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import Companion from '@/components/Companion';
import { getSiteContent } from '@/lib/site-content';

export default async function Home() {
  const siteContent = await getSiteContent();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Son Hai Landscape",
            "url": "https://www.sonhailandscape.com",
            "logo": "https://www.sonhailandscape.com/logofarm.png",
            "description": "Son Hai Landscape chuyên thiết kế và thi công Farmstay, nhà vườn, cảnh quan sân vườn và hồ cá Koi chuyên nghiệp.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+84 905 555 555", // Cập nhật số điện thoại đúng
              "contactType": "customer service"
            }
          })
        }}
      />
      <Hero content={siteContent.home.hero} />
      <HomeHighlights items={siteContent.home.highlights} />
      <Services content={siteContent.home.services} />
      <Mission content={siteContent.home.mission} />
      <Projects content={siteContent.home.featuredProjects} />
      <BeforeAfter content={siteContent.home.beforeAfter} />
      <Testimonials content={siteContent.home.testimonials} />
      <Companion content={siteContent.home.companion} />
    </>
  );
}
