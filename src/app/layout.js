import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Blog App",
  description: "Tools for Blogging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Navbar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
