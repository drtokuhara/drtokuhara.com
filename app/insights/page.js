import Image from 'next/image';
import { breadcrumbSchema } from '../schema';
import {
  ScrollReveal,
  VideoBackground,
} from '../components/ScrollAnimations';
import InsightsSearch from '../components/InsightsSearch';
import insights from '../data/insights';

export const metadata = {
  title: 'Patient Stories & Guides | Dr. Keith Tokuhara',
  description: 'Real patient stories, honest answers, and practical guides about cataract surgery from Dr. Keith Tokuhara. What to expect, how to decide, and what other patients experienced.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Patient Stories & Guides | Dr. Keith Tokuhara',
    description: 'Real patient stories, honest answers, and practical guides about cataract surgery from a Coachella Valley ophthalmologist.',
    url: 'https://drtokuhara.com/insights',
  },
};

// insights data imported from ../data/insights

const insightsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Patient Stories & Guides',
  description: 'Real patient stories, honest answers, and practical guides about cataract surgery from Dr. Keith Tokuhara.',
  url: 'https://drtokuhara.com/insights',
  author: {
    '@type': 'Physician',
    name: 'Dr. Keith Tokuhara',
    url: 'https://drtokuhara.com/about',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Patient Stories', href: '/insights' },
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
            <h1>Patient Stories <strong>&amp; Guides</strong></h1>
            <p className="page-hero-sub">Real experiences from real patients. Honest answers to the questions people ask before, during, and after cataract surgery.</p>
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
