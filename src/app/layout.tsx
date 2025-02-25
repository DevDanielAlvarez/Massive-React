import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SidebarComponent from "@/components/Sidebar/SidebarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main className="flex">
          <SidebarComponent /> {/*uses just 1 grid column */}
          <div className="flex-grow pt-8">

            {children}

          </div>
        </main>

      </body>
    </html>
  );
}
