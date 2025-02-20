import './globals.css';
import Navbar from '@/components/navigation/navbar';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'], // Optional: Specify subsets for optimization
  variable: '--font-poppins', // Optional: For variable fonts
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        />
      </head>
      <body className={`${poppins.className} bg-primary-500`}>
        <Navbar />
        {children}

        {/* Load Ionicons properly with Next.js */}
        <Script
          src='https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js'
          strategy='lazyOnload'
        />
      </body>
    </html>
  );
}
