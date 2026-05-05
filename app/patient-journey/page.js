import PatientJourneyContent from './PatientJourneyContent';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What happens at my first cataract surgery consultation?', acceptedAnswer: { '@type': 'Answer', text: 'Your first visit includes a comprehensive eye exam, detailed measurements of your eyes, and a one-on-one conversation with Dr. Tokuhara about your vision goals, lifestyle, and lens options. There is no pressure to schedule surgery. The goal is to give you the information you need to make a confident decision.' } },
    { '@type': 'Question', name: 'How long does the cataract surgery process take from start to finish?', acceptedAnswer: { '@type': 'Answer', text: 'From your initial consultation to full recovery, the process typically spans four to six weeks. The surgery itself takes about 10 to 15 minutes. Most patients see significant improvement within the first day or two, with full visual stabilization over the following weeks.' } },
    { '@type': 'Question', name: 'What is the follow-up schedule after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Follow-up visits are typically scheduled for one day, one week, and one month after surgery. Additional visits may be scheduled based on your healing. Each visit is brief and focused on checking your vision, eye pressure, and overall healing progress.' } },
    { '@type': 'Question', name: 'Will I feel pain during cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'No. Cataract surgery is performed with topical anesthesia (numbing drops) and mild sedation. Most patients report feeling no pain during the procedure. You may feel slight pressure, but the experience is generally comfortable and quick.' } },
  ],
};

export const metadata = {
  title: 'Your Patient Journey - From First Visit to Clear Vision',
  description: 'Step-by-step guide to cataract surgery with Dr. Keith Tokuhara. From your first evaluation through recovery and life after surgery. No surprises, no pressure.',
  alternates: {
    canonical: '/patient-journey',
  },
  openGraph: {
    title: 'Your Patient Journey | Dr. Keith Tokuhara',
    description: 'What to expect from first visit to clear vision. A step-by-step guide to cataract surgery at Desert Vision Center.',
    url: 'https://drtokuhara.com/patient-journey',
  },
};

export default function PatientJourneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PatientJourneyContent />
    </>
  );
}
