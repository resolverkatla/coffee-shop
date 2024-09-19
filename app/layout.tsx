// app/layout.tsx
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Load fonts (make sure the paths are correct)
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Coffee Shop Landing Page',
  description: 'Aesthetic coffee shop landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Navbar /> {/* Fixed navbar at the top */}
        <main className="flex-1">{children}</main> {/* Main content */}
      </body>
    </html>
    
  );
}
