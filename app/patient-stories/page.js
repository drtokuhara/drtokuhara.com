import Link from 'next/link';
import { articleSchema, breadcrumbSchema } from '../schema';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
} from '../components/ScrollAnimations';

const jsonLd = [
  articleSchema({
    title: 'Patient Stories: Real Experiences at Desert Vision Center',
    description: 'Watch real patients share their cataract surgery experiences at Desert Vision Center with Dr. Tokuhara. No actors, no scripts, just honest stories.',
    slug: '/patient-stories',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Patient Stories', href: '/patient-stories' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What do patients say about cataract surgery at Desert Vision Center?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Patients consistently describe feeling heard before surgery, calm during the procedure, and surprised by how quickly they recovered. Many report seeing clearly the morning after surgery. Real patient video testimonials are available on this page.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there patient testimonial videos for Dr. Tokuhara?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Desert Vision Center has recorded multiple patient testimonials. These are real patients sharing their own experiences, not actors or paid endorsements. Videos include patients with monocular eyes, complex cases, and standard cataract surgery.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if cataract surgery at Desert Vision Center is right for me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best way to know is a consultation. But hearing from patients who have been through it is a good starting point. Watch the videos on this page to hear directly from patients about what the experience was like.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Dr. Tokuhara do cataract surgery on patients with only one eye?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Dr. Tokuhara has performed cataract surgery on monocular patients, where one eye is the only functioning eye. Harold Baird shares his experience with this on this page. These cases require a surgeon with the experience and judgment to manage the additional risk.',
        },
      },
    ],
  },
];

export const metadata = {
  title: 'Patient Stories: Real Experiences at Desert Vision Center',
  description: 'Real patients. No actors, no scripts. Watch testimonial videos and read patient stories from Desert Vision Center. Desert vision center reviews from the people who have been there.',
  alternates: { canonical: '/patient-stories' },
  openGraph: {
    title: 'Patient Stories | Desert Vision Center Reviews',
    description: 'Watch real patients share their cataract surgery experiences with Dr. Tokuhara at Desert Vision Center in Rancho Mirage.',
    url: 'https://drtokuhara.com/patient-stories',
  },
};

const videos = [
  {
    id: 'vdD3lBubt58',
    title: 'Harold Baird: Cataract Surgery in a Monocular Eye',
    desc: 'Harold had only one functioning eye. His surgery was one of the highest-stakes cases we do. He shares what that experience was like.',
  },
  {
    id: 'Yomf55PktXU',
    title: 'Real Patient: PanOptix Trifocal Experience',
    desc: 'A patient shares what it is actually like living with a PanOptix trifocal lens, including nighttime vision and glasses freedom.',
  },
  {
    id: '3vEQKShP_Tg',
    title: 'Christina: Laser Cataract Surgery',
    desc: 'Christina walks through her experience with laser cataract surgery at Desert Vision Center, from first consultation to recovery.',
  },
  {
    id: 'uLY48kY8Opo',
    title: "Carol's Cataract Surgery Journey: 20/20 Vision",
    desc: "Carol shares her journey from cloudy vision to 20/20 and why she chose Desert Vision Center for her cataract surgery.",
  },
  {
    id: 'pm6T4CUmLrE',
    title: "Philip Ferranti: Getting His Vision Back",
    desc: 'Philip, a Coachella Valley hiking enthusiast, talks about what cataract surgery meant for getting back to the activities he loves.',
  },
  {
    id: 'm3xHlebhPUQ',
    title: 'Eric Redd: Why He Chose Desert Vision Center',
    desc: 'Eric shares what cataract surgery was like and the reasons he chose Dr. Tokuhara for his care.',
  },
];

const insightStories = [
  {
    href: '/insights/permission-to-see-again',
    title: 'Permission to See Again',
    desc: 'A patient who had been told she was not ready for surgery. She was. This is her story.',
  },
  {
    href: '/insights/the-reader-who-almost-gave-up-her-books',
    title: 'The Reader Who Almost Gave Up Her Books',
    desc: 'She had been postponing surgery for fear of losing the reading she loved. Nobody had told her there was an option built for readers.',
  },
  {
    href: '/insights/when-ai-recommends-your-lens',
    title: 'When AI Recommends Your Lens',
    desc: 'A reflection on what happens when the algorithm says one thing and the patient says another.',
  },
];

export default function PatientStories() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <section className="page-hero page-hero-image" style={{ background: 'linear-gradient(135deg, #07424e 0%, #0a1a24 100%)', minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Patient <strong>Stories</strong></h1>
            <p className="page-hero-sub">Real patients. No actors, no scripts. These are the conversations that matter most to me.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            I could describe what cataract surgery is like at Desert Vision Center. But the people who have been through it can tell you something I cannot: what it actually feels like.
          </p>
          <p>
            Every patient on this page is a real person. Not an actor. Not a script. Just someone who agreed to share their experience because they thought it might help someone else make a decision they had been sitting with for too long.
          </p>
          <p>
            Some of these stories are straightforward. A cloudy lens, a clear result, relief. Others are more complicated: a monocular eye, a delayed surgery, a patient who almost did not come in at all. All of them are honest.
          </p>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Video <strong>Testimonials</strong></h2>
            <div className="section-subtitle">Hear directly from patients about their experience at Desert Vision Center.</div>
          </ScrollReveal>
          <StaggerChildren className="video-grid video-grid-education" staggerDelay={0.1}>
            {videos.map((video) => (
              <StaggerItem key={video.id}>
                <div className="video-card">
                  <div className="video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="video-card-text">
                    <p className="video-label">{video.title}</p>
                    <p className="video-desc">{video.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="pull-quote">
            <p>Every patient who shares their story does it for the person who has not yet called. That is the kind of practice we try to be.</p>
          </div>
        </div>
      </section>

      {/* INSIGHT STORIES */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Patient Stories <strong>in Writing</strong></h2>
          </ScrollReveal>
          <p>Some experiences are better told in full. These patient stories explore the decision, the surgery, and the moment things changed.</p>
          <div className="related-grid" style={{ marginTop: '32px' }}>
            {insightStories.map((story) => (
              <Link key={story.href} href={story.href} className="related-card">
                <h3>{story.title}</h3>
                <p>{story.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MORE EDUCATION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Want to <strong>Learn More?</strong></h2>
          </ScrollReveal>
          <p>If the patient stories raised questions about the procedure, lens options, or what to expect, these pages go deeper.</p>
          <div className="related-grid" style={{ marginTop: '32px' }}>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What actually happens before, during, and after the procedure.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>Monofocal, toric, Extended Depth of Focus, and multifocal lenses with honest tradeoffs.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>What to look for in a cataract surgeon, and what questions to ask before you commit.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* YOUR STORY CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{ textAlign: 'center' }}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your Story <strong>Could Be Next</strong></h2>
          </ScrollReveal>
          <p style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            If you have been putting off cataract surgery, I hope these stories helped. The next step is a conversation, not a commitment. We will figure out together whether surgery is right for you, and when.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
