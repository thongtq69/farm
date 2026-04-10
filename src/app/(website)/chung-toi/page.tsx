import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';
import { getSiteContent } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi | Son Hai Landscape - Đội ngũ Thiết kế Farmstay Chuyên nghiệp',
  description:
    'Tìm hiểu về Son Hai Landscape, đội ngũ kiến trúc sư và chuyên gia thiết kế Farmstay hàng đầu. Chúng tôi đồng hành cùng chủ đầu tư từ ý tưởng, quy hoạch đến thiết kế hoàn chỉnh mang đậm bản sắc vùng miền.'
};

export default async function AboutUsPage() {
  const siteContent = await getSiteContent();
  return <AboutPage content={siteContent.about} />;
}
