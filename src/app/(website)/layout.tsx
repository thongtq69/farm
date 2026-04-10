import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import MobileContactButtons from "@/components/MobileContactButtons";
import AosBootstrap from "@/components/AosBootstrap";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Son Hai Landscape - Thiết kế Farmstay & Cảnh quan hàng đầu Việt Nam",
  description: "Son Hai Landscape chuyên thiết kế và thi công Farmstay, nhà vườn, cảnh quan sân vườn và hồ cá Koi chuyên nghiệp. Chúng tôi kiến tạo không gian sống xanh, bền vững và đậm chất nghệ thuật.",
  keywords: ["thiết kế farmstay", "thi công cảnh quan", "thiết kế sân vườn", "hồ cá koi", "kiến trúc xanh", "Son Hai Landscape", "farmstay Việt Nam"],
  authors: [{ name: "Son Hai Landscape" }],
  openGraph: {
    title: "Son Hai Landscape - Thiết kế Farmstay & Cảnh quan hàng đầu Việt Nam",
    description: "Kiến tạo không gian sống xanh với dịch vụ thiết kế Farmstay và cảnh quan chuyên nghiệp.",
    url: "https://sonhailandscape.vn", // Giả định domain này, bạn nên cập nhật đúng domain
    siteName: "Son Hai Landscape",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Son Hai Landscape - Thiết kế Farmstay & Cảnh quan hàng đầu Việt Nam",
    description: "Kiến tạo không gian sống xanh với dịch vụ thiết kế Farmstay và cảnh quan chuyên nghiệp.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'IejXvXKmOd5S8WAmVGvtCMq0ZtN4p5Xw0EtMFMpV-AU',
  },
};

export default async function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContent = await getSiteContent();

  return (
    <html lang="vi">
      <body>
        <div className="website-container">
      <AosBootstrap />
      <Header content={siteContent.header} />
      <main>{children}</main>
      <Footer content={siteContent.footer} />
      <MobileContactButtons content={siteContent.mobileContact} />
        <ConsultationPopup content={siteContent.consultationPopup} />
        </div>
      </body>
    </html>
  );
}
