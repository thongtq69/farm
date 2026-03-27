import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import MobileContactButtons from "@/components/MobileContactButtons";
import AosBootstrap from "@/components/AosBootstrap";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Son Hai Landscape - Thiết kế Farmstay & Cảnh quan hàng đầu Việt Nam",
  description: "Son Hai Landscape cung cấp đa dạng các loại hình thiết kế tùy theo nhu cầu mục đích của khách hàng. Từ thiết kế Farm, nhà vườn, cảnh quan đến các mô hình farmstay-homestay.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContent = await getSiteContent();

  return (
    <html lang="vi">
      <body>
        <AosBootstrap />
        <Header content={siteContent.header} />
        <main>{children}</main>
        <Footer content={siteContent.footer} />
        <MobileContactButtons content={siteContent.mobileContact} />
        <ConsultationPopup content={siteContent.consultationPopup} />
      </body>
    </html>
  );
}
