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
