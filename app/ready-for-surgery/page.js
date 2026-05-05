import ReadyForSurgeryContent from './ReadyForSurgeryContent';
import { articleSchema, breadcrumbSchema } from '../schema';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I prepare for cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Preparation includes a comprehensive eye evaluation, pre-operative measurements to select your lens implant, and a review of your medications. You will receive specific instructions about which medications to stop or continue, when to start pre-operative eye drops, and what to arrange for surgery day, including a driver.' } },
    { '@type': 'Question', name: 'What happens on cataract surgery day?', acceptedAnswer: { '@type': 'Answer', text: 'You arrive at the surgery center, receive dilating and numbing drops, and are given mild sedation to help you relax. The procedure itself takes about 10 to 15 minutes. You are awake but comfortable. Afterward, you rest briefly, receive post-operative instructions, and go home with a protective eye shield.' } },
    { '@type': 'Question', name: 'How long does it take to recover from cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients notice improved vision within 24 to 48 hours. Full healing typically takes four to six weeks. During recovery, you will use prescribed eye drops on a tapering schedule. Most normal activities can resume within a few days, though heavy lifting and swimming should wait until your surgeon clears you.' } },
    { '@type': 'Question', name: 'Do I need someone to drive me home after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You will need a driver on surgery day because of the sedation and dilating drops. Most patients can drive themselves to their follow-up appointment the next day, assuming their vision meets the legal driving standard.' } },
    { '@type': 'Question', name: 'What should I expect at my first post-operative visit?', acceptedAnswer: { '@type': 'Answer', text: 'Your first post-operative visit is usually the day after surgery. Dr. Tokuhara will check your eye pressure, examine the lens implant, and review your drop schedule. Most patients are already seeing noticeably better at this visit.' } },
  ],
};

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
  faqSchema,
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
