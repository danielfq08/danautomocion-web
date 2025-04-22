import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import logo from '../public/logo.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Danautomoción LLC',
  description: 'Sitio oficial de Danautomoción LLC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="p-4 flex items-center gap-4 bg-white shadow">
          <Image src={logo} alt="Logo Danautomoción" width={50} height={50} />
          <h1 className="text-xl font-bold text-blue-900">Danautomoción LLC</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}