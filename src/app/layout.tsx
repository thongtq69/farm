import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oak Farm - Đơn vị thiết kế Farmstay hàng đầu Việt Nam",
  description: "Oak Farm cung cấp đa dạng các loại hình thiết kế tùy theo nhu cầu mục đích của khách hàng. Từ thiết kế Farm, nhà vườn, cảnh quan đến các mô hình farmstay-homestay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
