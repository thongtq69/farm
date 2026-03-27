import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';
import { getSiteContent } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Chung toi - Son Hai Landscape',
  description:
    'Tim hieu ve Son Hai Landscape, doi ngu thiet ke Farmstay dong hanh cung chu dau tu tu y tuong, quy hoach den thiet ke hoan chinh.'
};

export default async function AboutUsPage() {
  const siteContent = await getSiteContent();
  return <AboutPage content={siteContent.about} />;
}
