import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import HeritageSeriesContent from './HeritageSeriesContent';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The Gimbel Heritage Series',
    description: 'A four-part series on the surgical philosophy, mentorship, and training principles Dr. Keith Tokuhara carries from Dr. Howard Gimbel into every case at Desert Vision Center.',
    url: 'https://drtokuhara.com/gimbel-heritage',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://drtokuhara.com/insights/the-capsule-is-sacred',
          name: 'The Capsule Is Sacred',
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://drtokuhara.com/insights/what-i-learned-from-the-surgeon-who-trained-me',
          name: 'What I Learned From the Surgeon Who Trained Me',
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: 'https://drtokuhara.com/insights/when-experience-speaks',
          name: 'When Experience Speaks',
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: 'https://drtokuhara.com/insights/twenty-years-forward',
          name: 'Twenty Years Forward',
        },
      ],
    },
  },
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'The Gimbel Heritage Series', href: '/gimbel-heritage' },
  ]),
];

export const metadata = {
  title: 'The Gimbel Heritage Series: Surgical Philosophy & Mentorship',
  description: 'A four-part series exploring how Dr. Howard Gimbel\'s mentorship during residency at Loma Linda shaped Dr. Keith Tokuhara\'s surgical philosophy, technique, and approach to patient care.',
  alternates: { canonical: '/gimbel-heritage' },
  openGraph: {
    title: 'The Gimbel Heritage Series | Dr. Keith Tokuhara',
    description: 'How training under Dr. Howard Gimbel shaped a surgical philosophy. Four essays on mentorship, the capsule, composure under pressure, and legacy.',
    url: 'https://drtokuhara.com/gimbel-heritage',
  },
};

export default function GimbelHeritagePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <HeritageSeriesContent />
    </>
  );
}
