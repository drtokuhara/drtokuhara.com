export const metadata = {
  title: 'Dr. Keith Tokuhara, MD | Cataract Surgeon in Rancho Mirage, Coachella Valley',
  description: 'Board-certified cataract surgeon in Rancho Mirage, CA. Fellowship trained, patient first approach. Advanced cataract surgery, premium lens implants, and complex case expertise at Desert Vision Center.',
  metadataBase: new URL('https://drtokuhara.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Keith Tokuhara, MD | Cataract Surgeon',
    description: 'Fellowship trained cataract surgeon in the Coachella Valley. Advanced surgery, premium lenses, and honest patient care at Desert Vision Center.',
    url: 'https://drtokuhara.com',
    siteName: 'Dr. Keith Tokuhara',
    images: [
      {
        url: '/dr-t-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Keith Tokuhara, Cataract Surgeon at Desert Vision Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Keith Tokuhara, MD | Cataract Surgeon',
    description: 'Fellowship trained cataract surgeon in the Coachella Valley. Patient first care at Desert Vision Center.',
    site: '@DoctorTokuhara',
    images: ['/dr-t-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

import './styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
