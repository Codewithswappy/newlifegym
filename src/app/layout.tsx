import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

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
  title: 'New Life Gym & Fitness | Premium Local Fitness Center & Personal Training',
  description: 'Join New Life Gym — the ultimate local fitness club featuring certified trainers, state-of-the-art strength & cardio equipment, personalized workout plans, and a vibrant community. Book your free 3-day trial today!',
  keywords: [
    'gym near me',
    'fitness center',
    'personal trainer',
    'weight loss gym',
    'bodybuilding gym',
    'crossfit fitness',
    'women fitness area',
    'air conditioned gym',
    'free gym trial',
    'New Life Gym'
  ],
  authors: [{ name: 'New Life Fitness Center' }],
  creator: 'New Life Fitness',
  publisher: 'New Life Gym',
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
    locale: 'en_US',
    url: 'https://newlifegym.com',
    title: 'New Life Gym & Fitness | Build Your Strongest Self',
    description: 'Transform your body with expert coaching, modern equipment, and flexible memberships. Claim your free trial today!',
    siteName: 'New Life Gym',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'New Life Gym Interior & Workout Area',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Life Gym & Fitness | Premium Local Gym',
    description: 'Results-driven gym with certified trainers and modern strength equipment. Free trial available!',
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
    name: 'New Life Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    '@id': 'https://newlifefitness.com',
    url: 'https://newlifefitness.com',
    telephone: '+91-8108800629',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1st Floor, CHS, Office No. 1 to 5, Plot No. 4, Sector 24, Kamothe',
      addressLocality: 'Panvel',
      addressRegion: 'Maharashtra',
      postalCode: '410209',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0307996,
      longitude: 73.0905473,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '06:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '18:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      'https://facebook.com/newlifefitness',
      'https://instagram.com/newlifefitness',
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
      <body className="bg-white text-zinc-900 antialiased font-sans selection:bg-lime-400 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
