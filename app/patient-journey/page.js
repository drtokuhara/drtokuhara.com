import PatientJourneyContent from './PatientJourneyContent';

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
  return <PatientJourneyContent />;
}
