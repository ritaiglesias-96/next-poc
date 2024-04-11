import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/ui/styles/globals.css';

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'GestEdu',
  description: 'Administrador de gestión educativa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
