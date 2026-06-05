import { breadcrumbSchema } from '../schema';
import MyCataractDropsContent from './MyCataractDropsContent';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the My Cataract Drops app?', acceptedAnswer: { '@type': 'Answer', text: 'My Cataract Drops is a free app built by Dr. Tokuhara for his cataract surgery patients. It sends push notifications when each eye drop is due, tracks multiple bottles across your recovery schedule, and provides technique guidance to help you use your drops correctly.' } },
    { '@type': 'Question', name: 'Is the My Cataract Drops app free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The app is completely free for all Desert Vision Center patients. There are no subscriptions, no ads, and no in-app purchases. It was built specifically to help patients stay on track with their post-operative drop schedule.' } },
    { '@type': 'Question', name: 'How does the eye drop reminder app work?', acceptedAnswer: { '@type': 'Answer', text: 'You enter your surgery date and the app automatically sets up your complete drop schedule. It sends push notifications when each drop is due, shows you which bottle to use, and tracks your progress week by week as the schedule tapers down.' } },
    { '@type': 'Question', name: 'Why is it important to follow my eye drop schedule after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Post-operative eye drops prevent infection and control inflammation during healing. Missing doses or stopping early can increase the risk of complications. The drops typically follow a tapering schedule over four to six weeks, with different bottles used at different times.' } },
    { '@type': 'Question', name: 'Can I use the app if I had surgery with a different doctor?', acceptedAnswer: { '@type': 'Answer', text: "The app is designed for Desert Vision Center patients and follows Dr. Tokuhara's specific post-operative drop protocols. If you had surgery elsewhere, your drop schedule may differ. Always follow your own surgeon's instructions." } },
  ],
};

export const metadata = {
  title: 'My Cataract Drops: Free Eye Drop Reminder App from Desert Vision Center',
  description: 'Never miss an eye drop again. My Cataract Drops sends push notifications when each drop is due, tracks your progress, and guides you through recovery. Free for all patients.',
  alternates: { canonical: '/my-cataract-drops' },
  openGraph: {
    title: 'My Cataract Drops App | Desert Vision Center',
    description: 'A free app that sends push notifications for every eye drop after cataract surgery. Personally built by Dr. Tokuhara for his patients.',
    url: 'https://drtokuhara.com/my-cataract-drops',
  },
};

const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'My Cataract Drops', href: '/my-cataract-drops' },
]);

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'My Cataract Drops: Phone App by Dr. Tokuhara',
  description: 'My Cataract Drops is a free eye drop reminder app built by Dr. Tokuhara for his cataract surgery patients.',
  thumbnailUrl: 'https://i.ytimg.com/vi/im9_7hi4Dqg/maxresdefault.jpg',
  uploadDate: '2026-05-05T00:00:00Z',
  duration: 'PT37S',
  contentUrl: 'https://www.youtube.com/watch?v=im9_7hi4Dqg',
  embedUrl: 'https://www.youtube.com/embed/im9_7hi4Dqg',
};

export default function MyCataractDrops() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <MyCataractDropsContent />
    </>
  );
}
