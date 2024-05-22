import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../src/components/footer";
import Header from "../src/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iPhone 15 Pro 및 iPhone 15 Pro Max - Apple (KR)",
  description: "This is Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
