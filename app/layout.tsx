import { Nunito } from 'next/font/google';
import './globals.css';
import { Footer, Header, Nav } from '@/components';

const nunito = Nunito({
  variable: '--font-nunito',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={` ${nunito.variable}`}>
        <Header />
        <Nav />
        <main className="flex min-h-screen flex-col bg-white text-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
