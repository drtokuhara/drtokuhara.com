import ReadyForSurgeryContent from './ReadyForSurgeryContent';
import { articleSchema, breadcrumbSchema } from '../schema';

const jsonLd = [
  articleSchema({
    title: 'Ready for Cataract Surgery - What to Expect from Start to Finish',
    description: 'Your complete guide to preparing for cataract surgery: timeline, pre-op, surgery day, recovery, and support at Desert Vision Center.',
    slug: '/ready-for-surgery',
    datePublished: '2026-04-30',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Ready for Surgery', href: '/ready-for-surgery' },
  ]),
];

export const metadata = {
  title: 'Ready for Cataract Surgery - What to Expect from Start to Finish',
  description: 'Decided on cataract surgery? Here is everything you need to know: timeline, pre-op preparation, surgery day, recovery expectations, and your support team at Desert Vision Center.',
  alternates: { canonical: '/ready-for-surgery' },
  openGraph: {
    title: 'Ready for Surgery | Dr. Keith Tokuhara',
    description: 'Your complete guide to preparing for cataract surgery. Timeline, what to expect on surgery day, recovery, and the Desert Vision Center difference.',
    url: 'https://drtokuhara.com/ready-for-surgery',
  },
};

export default function ReadyForSurgeryPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ReadyForSurgeryContent />
    </>
  );
}
