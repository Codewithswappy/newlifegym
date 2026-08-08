import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { GYM_DETAILS } from '@/lib/data';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://revampfitness.in'),
  title: 'Revamp Fitness | Premium Gym & Fitness Center in Sector 20 Kharghar, Navi Mumbai',
  description: 'Join Revamp Fitness at Mita Heights, Sector 20 Kharghar. Featuring certified coaches, Olympic strength equipment, cardio deck, functional training, and clean shower amenities. Claim your free trial pass today!',
  keywords: [
    'Revamp Fitness',
    'Revamp Fitness Kharghar',
    'gym in Kharghar',
    'gym Sector 20 Kharghar',
    'fitness center Kharghar',
    'gym near Central Park Kharghar',
    'best gym in Navi Mumbai',
    'personal trainer Kharghar',
    'unisex gym Kharghar',
    'bodybuilding gym Kharghar',
    'crossfit Kharghar',
    'free gym trial Kharghar'
  ],
  authors: [{ name: 'Revamp Fitness' }],
  creator: 'Revamp Fitness',
  publisher: 'Revamp Fitness LLP',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://revampfitness.in',
    title: 'Revamp Fitness | Build Your Strongest Self in Kharghar',
    description: 'Transform your body with expert coaches, modern equipment, and flexible memberships at Sector 20 Kharghar. Claim your free trial today!',
    siteName: 'Revamp Fitness',
    images: [
      {
        url: '/image1.jpg',
        width: 1200,
        height: 630,
        alt: 'Revamp Fitness Kharghar Gym Floor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revamp Fitness | Premium Gym in Sector 20 Kharghar',
    description: 'Results-driven fitness hub with certified trainers, strength equipment, and functional turf in Kharghar. Free trial available!',
    images: ['/image1.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: 'Revamp Fitness',
    legalName: 'Revamp Fitness LLP',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    '@id': 'https://revampfitness.in',
    url: 'https://revampfitness.in',
    telephone: GYM_DETAILS.phone,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 7, 1st Floor, Mita Heights, Plot No. 51B, Near Central Park Metro Road, Sector 20, Kharghar',
      addressLocality: 'Kharghar, Navi Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '410210',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GYM_DETAILS.coordinates.latitude,
      longitude: GYM_DETAILS.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '05:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [
      'https://maps.app.goo.gl/A5J7zQfssK1nzNVS9',
      'https://instagram.com/revampfitness',
    ],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-zinc-900 antialiased font-sans selection:bg-[#3F87FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
