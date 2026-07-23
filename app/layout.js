import './styles.css';

export const metadata = {
  title: 'Dr. Keith Tokuhara | Site Refresh in Progress',
  description:
    'Dr. Keith Tokuhara’s website is being rebuilt. Please visit Desert Vision Center for appointments, cataract surgery information, and current practice details.',
  metadataBase: new URL('https://drtokuhara.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Keith Tokuhara | Site Refresh in Progress',
    description:
      'Please visit Desert Vision Center for appointments, cataract surgery information, and current practice details.',
    url: 'https://drtokuhara.com',
    siteName: 'Dr. Keith Tokuhara',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Keith Tokuhara | Site Refresh in Progress',
    description:
      'Please visit Desert Vision Center for appointments, cataract surgery information, and current practice details.',
    site: '@DoctorTokuhara',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="dnkmWlKto3uOsrwNz5LYZ9J7DoQHAiaTqoE-Rxya32A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, fontFamily: 'Montserrat, system-ui, sans-serif', background: '#ffffff' }}>
        {children}
      </body>
    </html>
  );
}
