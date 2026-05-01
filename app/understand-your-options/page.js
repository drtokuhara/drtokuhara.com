import UnderstandYourOptionsContent from './UnderstandYourOptionsContent';
import { articleSchema, breadcrumbSchema } from '../schema';

const jsonLd = [
  articleSchema({
    title: 'Understanding Your Options - Cataract Surgery, Lens Choices, and What to Ask',
    description: 'Exploring cataract surgery? Learn what cataracts are, when surgery makes sense, your lens options, and the questions to bring to your consultation.',
    slug: '/understand-your-options',
    datePublished: '2026-04-30',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Understanding Your Options', href: '/understand-your-options' },
  ]),
];

export const metadata = {
  title: 'Understanding Your Options - Cataract Surgery, Lens Choices, and What to Ask',
  description: 'Exploring cataract surgery? Learn what cataracts are, when surgery makes sense, your lens options, and the questions to bring to your consultation with Dr. Tokuhara.',
  alternates: { canonical: '/understand-your-options' },
  openGraph: {
    title: 'Understanding Your Options | Dr. Keith Tokuhara',
    description: 'Not sure about cataract surgery? Start here. Plain-language answers about timing, lens choices, and what makes a great surgical experience.',
    url: 'https://drtokuhara.com/understand-your-options',
  },
};

export default function UnderstandYourOptionsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <UnderstandYourOptionsContent />
    </>
  );
}
