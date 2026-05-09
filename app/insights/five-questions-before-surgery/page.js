import FiveQuestionsContent from './FiveQuestionsContent';
import { breadcrumbSchema } from '../../schema';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What lens options do I have for cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cataract lens implants range from standard monofocal lenses (covered by insurance) to premium options including toric lenses that reduce astigmatism, extended depth of focus (EDOF) lenses like Vivity, and multifocal lenses like PanOptix that provide near, intermediate, and distance vision. The right choice depends on your eyes, lifestyle, and visual goals."
      }
    },
    {
      "@type": "Question",
      "name": "Is laser cataract surgery better than traditional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both laser-assisted and traditional (manual) cataract surgery produce excellent outcomes. Laser adds computer-guided precision for certain steps. The most important factor is not the technology but the surgeon's skill, judgment, and experience."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if something goes wrong during cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complications during cataract surgery are uncommon but can occur. The critical question is whether your surgeon can handle complications in real time. Experienced surgeons who manage complex cases regularly are better equipped to address issues like posterior capsule tears during the procedure itself."
      }
    },
    {
      "@type": "Question",
      "name": "Who manages my care after cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Post-operative care varies by practice. Some surgeons manage all follow-up visits personally. Others share post-op care with associates or optometrists. Ask your surgeon directly who will see you after surgery."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "5 Questions to Ask Before Cataract Surgery",
  "description": "The five most important questions to ask your cataract surgeon before surgery.",
  "author": { "@type": "Person", "name": "Dr. Keith Tokuhara" },
  "publisher": { "@type": "Organization", "name": "Dr. Keith Tokuhara" },
  "url": "https://drtokuhara.com/insights/five-questions-before-surgery"
};

export const metadata = {
  title: '5 Questions to Ask Before Cataract Surgery',
  description: 'The five most important questions to ask your cataract surgeon before surgery. Lens options, laser vs traditional, complications, and post-op care explained by a cataract surgeon.',
  alternates: { canonical: '/insights/five-questions-before-surgery' },
  openGraph: {
    title: '5 Questions to Ask Before Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Before your cataract surgery, ask these five questions. Your surgeon should welcome every one of them.',
    url: 'https://drtokuhara.com/insights/five-questions-before-surgery',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Insights', href: '/insights' },
  { name: '5 Questions to Ask Before Cataract Surgery', href: '/insights/five-questions-before-surgery' },
]);

export default function FiveQuestionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <FiveQuestionsContent />
    </>
  );
}
