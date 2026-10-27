import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://israelkuti.com'),
  title: 'Israel Kuti | Technology Programme Leader & Digital Transformation',
  description: 'Israel Kuti is a technology programme leader working across digital transformation, AI-enabled customer engagement, cloud modernisation, and technology capacity building.',
  openGraph: {
    title: 'Israel Kuti | Technology, Delivery & Digital Transformation',
    description: 'Turning complex technology programmes into clear, coordinated delivery.',
    url: 'https://israelkuti.com',
    siteName: 'Israel Kuti',
    images: [{ url: '/images/israel-kuti-headshot.jpeg', width: 1200, height: 1800, alt: 'Israel Kuti professional portrait' }],
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#11120f' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
