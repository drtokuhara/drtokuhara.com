import UnderstandYourOptionsContent from './UnderstandYourOptionsContent';
import { articleSchema, breadcrumbSchema } from '../schema';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I know if I need cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Cataract surgery is recommended when cataracts interfere with daily activities like driving, reading, or seeing clearly in different lighting. There is no medical emergency. The decision is based on how much your vision affects your quality of life. A thorough evaluation with your surgeon will determine the right timing for you.' } },
    { '@type': 'Question', name: 'What are my lens implant options for cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'There are several categories of lens implants: standard monofocal lenses (covered by insurance, clear vision at one distance), Extended Depth of Focus (EDOF) lenses like Vivity that provide a continuous range of vision, and multifocal lenses like PanOptix that split light for near, intermediate, and distance. Toric versions of these lenses are available for patients with astigmatism.' } },
    { '@type': 'Question', name: 'What questions should I ask my cataract surgeon?', acceptedAnswer: { '@type': 'Answer', text: 'Key questions include: How many cataract surgeries do you perform each year? Are you fellowship-trained in cataract surgery? What lens do you recommend for my eyes and lifestyle, and why? What is your complication rate? Are you independent or part of a corporate group? Do you handle your own complications? These questions help you find a surgeon whose experience and values match your needs.' } },
    { '@type': 'Question', name: 'Is cataract surgery covered by insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Standard cataract surgery with a monofocal lens implant is covered by Medicare and most insurance plans. Premium lens upgrades (multifocal, EDOF, or toric lenses) involve an additional out-of-pocket cost. Your surgeon should explain the difference and help you decide what makes sense for your situation.' } },
  ],
};

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
  faqSchema,
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
