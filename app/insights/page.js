import Image from 'next/image';
import { breadcrumbSchema } from '../schema';
import {
  ScrollReveal,
  VideoBackground,
} from '../components/ScrollAnimations';
import InsightsSearch from '../components/InsightsSearch';
import insights from '../data/insights';

export const metadata = {
  title: 'Insights from the Clinic',
  description: 'Clinical reflections from Dr. Keith Tokuhara on cataract surgery, lens implant decisions, IOL selection, and the things about eye care that don\'t fit in a brochure.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights from the Clinic | Dr. Keith Tokuhara',
    description: 'Real clinical stories and reflections on cataracts, surgery decisions, and patient care from a Coachella Valley ophthalmologist.',
    url: 'https://drtokuhara.com/insights',
  },
};

// insights data imported from ../data/insights

const insightsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Insights from the Clinic',
  description: 'Clinical reflections from Dr. Keith Tokuhara on cataract surgery, lens implant decisions, and patient care.',
  url: 'https://drtokuhara.com/insights',
  author: {
    '@type': 'Physician',
    name: 'Dr. Keith Tokuhara',
    url: 'https://drtokuhara.com/about',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Insights', href: '/insights' },
]);

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <VideoBackground
        src="/media/ambient-desert-sunrise.mp4"
        poster="/media/stock-couple-market-sunlight.jpg"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{position: 'relative', overflow: 'hidden'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Insights from the <strong>Clinic</strong></h1>
            <p className="page-hero-sub">These aren't medical articles. They're reflections - on the patients I see, the decisions we navigate together, and what I've learned about the space between a diagnosis and a choice.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white" style={{paddingBottom: 0}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="content-image">
            <Image
              src="/media/20210109_095037.jpg"
              alt="Inside Desert Vision Center - where these conversations happen"
              width={800}
              height={380}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="content-image" style={{maxWidth: '800px', margin: '0 auto 48px'}}>
            <Image
              src="/media/stock-seniors-outdoor-toast.jpg"
              alt="Seniors toasting at an outdoor dinner - the moments that matter after cataract surgery"
              width={800}
              height={533}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <InsightsSearch insights={insights} />
        </div>
      </section>
    </>
  );
}
