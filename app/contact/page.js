import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Desert Vision Center',
  description: 'Schedule a consultation with Dr. Keith Tokuhara at Desert Vision Center. Located at 35900 Bob Hope Dr, Suite 175, Rancho Mirage, CA 92270. Call 760.340.4700.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Dr. Keith Tokuhara',
    description: 'Schedule a consultation at Desert Vision Center in Rancho Mirage. Call 760.340.4700.',
    url: 'https://drtokuhara.com/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
