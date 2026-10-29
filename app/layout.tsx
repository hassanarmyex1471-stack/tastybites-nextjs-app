import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'TastyBites - Fresh Food Delivered Hot to Your Door',
  description: 'Savor gourmet chef-crafted dishes made from farm-fresh organic ingredients. Delivered sizzling hot in under 30 minutes.',
  openGraph: {
    title: 'TastyBites - Fresh Food Delivered Hot to Your Door',
    description: 'Savor gourmet chef-crafted dishes made from farm-fresh organic ingredients. Delivered sizzling hot in under 30 minutes.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased font-sans selection:bg-[#ff5722] selection:text-white">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
