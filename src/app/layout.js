import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s | Ebenezer Duct Cleaning',
    default: 'Ebenezer Duct Cleaning',
  },
  description: 'The ones stop solution for all your duct cleaning needs',
  keywords: [
    'Ebenezer Duct Cleaning',
    'Duct Cleaning',
    'Vent Cleaning',
    'Dryer Vent Cleaning',
    'Durham',
    'Peel',
    'GTA',
  ],
  metadataBase: new URL('https://ebenezer-duct-cleaning.vercel.app'),
  openGraph: {
    title: 'Ebenezer Duct Cleaning',
    description: 'The ones stop solution for all your duct cleaning needs',
    url: 'https://ebenezer-duct-cleaning.vercel.app',
    siteName: 'Ebenzezer Duct Cleaning',
    images: [
      {
        url: '/og/og-home.png', // Must be an absolute URL
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster richColors />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
