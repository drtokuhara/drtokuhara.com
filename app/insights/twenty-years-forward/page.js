import TwentyYearsForwardContent from './TwentyYearsForwardContent';
import { articleSchema, breadcrumbSchema } from '../../schema';

const jsonLd = [
  articleSchema({
    title: 'Twenty Years Forward: A Cataract Decision Across Time',
    description: 'A patient chose a multifocal lens at 68. Now at 88 with macular degeneration, that decision looks different. A reflection on lens choices, tradeoffs, and decisions across time.',
    slug: '/insights/twenty-years-forward',
    datePublished: '2026-04-30',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Twenty Years Forward', href: '/insights/twenty-years-forward' },
  ]),
];

export const metadata = {
  title: 'Twenty Years Forward: A Cataract Decision Across Time',
  description: 'A patient chose a multifocal lens at 68. Now at 88 with macular degeneration, that decision looks different. What this teaches us about lens choices, tradeoffs across time, and making decisions for a future you cannot predict.',
  alternates: { canonical: '/insights/twenty-years-forward' },
  openGraph: {
    title: 'Twenty Years Forward | Dr. Keith Tokuhara',
    description: 'What happens when a lens choice made 20 years ago meets a reality no one predicted? A reflection on decisions, tradeoffs, and the person you are still becoming.',
    url: 'https://drtokuhara.com/insights/twenty-years-forward',
  },
};

export default function TwentyYearsForwardPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TwentyYearsForwardContent />
    </>
  );
}
