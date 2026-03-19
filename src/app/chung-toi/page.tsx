import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';
import pagesContentPages from '../../../clone_ready/pages_content_pages.json';

type ContentPageEntry = {
  url: string;
  title: string;
  meta_description: string | null;
};

const aboutEntry = (pagesContentPages as ContentPageEntry[]).find((entry) => entry.url.includes('/chung-toi/'));

export const metadata: Metadata = {
  title: aboutEntry?.title ?? 'Chung toi - Son Hai Landscape',
  description:
    aboutEntry?.meta_description ??
    'Tim hieu ve Son Hai Landscape, doi ngu thiet ke Farmstay dong hanh cung chu dau tu tu y tuong, quy hoach den thiet ke hoan chinh.'
};

export default function AboutUsPage() {
  return <AboutPage />;
}
