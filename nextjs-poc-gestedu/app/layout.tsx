import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/ui/styles/globals.css';
import { LoginModalProvider } from 'context';
import Navbar from '@/ui/components/Navbar/navbar';

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | GestEdu',
    default: 'GestEdu',
  },
  description: 'Administrador de gestión educativa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        <LoginModalProvider>
          <Navbar />
          {children}
        </LoginModalProvider>
      </body>
    </html>
  );
}
