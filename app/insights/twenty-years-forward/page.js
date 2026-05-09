import TwentyYearsForwardContent from './TwentyYearsForwardContent';
import { articleSchema, breadcrumbSchema } from '../../schema';

const jsonLd = [
  articleSchema({
    title: 'Twenty Years Forward: When Gradual Vision Loss Isn\'t Just Aging',
    description: 'A patient in her early 60s thought she just needed new glasses. Her optician adjusted her prescription every year, but things still weren\'t right. The exam revealed cataracts. A reflection on how patients accept slow vision loss as inevitable aging, and the consultation that reframes decline as fixable.',
    slug: '/insights/twenty-years-forward',
    datePublished: '2026-05-09',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Twenty Years Forward', href: '/insights/twenty-years-forward' },
  ]),
];

export const metadata = {
  title: 'Twenty Years Forward: When Gradual Vision Loss Isn\'t Just Aging',
  description: 'A patient thought she just needed new glasses. Annual prescription changes masked bilateral cataracts. A clinical reflection on gradual vision loss, silent adaptation, and the moment a treatable condition is finally recognized.',
  alternates: { canonical: '/insights/twenty-years-forward' },
  openGraph: {
    title: 'Twenty Years Forward | Dr. Keith Tokuhara',
    description: 'She thought it was just aging. It was cataracts. A clinical reflection on how patients adapt to slow vision loss without realizing something treatable is happening.',
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
