import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  ParallaxImage,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Permission to See Again',
  description: 'A 78-year-old woman delayed cataract surgery for six years while caregiving. When she finally came in for a cataract evaluation, she didn\'t need a surgical plan. She needed permission to prioritize her own vision.',
  alternates: { canonical: '/insights/permission-to-see-again' },
  openGraph: {
    title: 'Permission to See Again | Dr. Keith Tokuhara',
    description: 'A reflection on caregiving, delayed self-care, and the invisible weight patients carry into a cataract evaluation.',
    url: 'https://drtokuhara.com/insights/permission-to-see-again',
  },
};


const jsonLd = [
  articleSchema({
    title: 'Permission to See Again',
    description: 'A 78-year-old woman delayed eye care for six years while caring for her husband with dementia. She needed permission to take care of herself.',
    slug: '/insights/permission-to-see-again',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Permission to See Again', href: '/insights/permission-to-see-again' },
  ]),
];

export default function InsightPermission() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-golden-hour.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Decision Making</span>
          <h1>Permission to <strong>See Again</strong></h1>
          <p className="page-hero-sub">Some patients don't need a diagnosis. They need someone to tell them it's okay to take care of themselves.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            She hadn't seen an eye doctor in six years.
          </p>
          <p>
            She was 78. Her husband had dementia. For six years, she was his full-time caregiver - every appointment, every meal, every middle-of-the-night moment. Her own health became an afterthought. Not because she didn't care about it, but because there was always someone who needed her more.
          </p>
          <p>
            He passed two months before she walked into my office.
          </p>
          <p>
            Her vision was 20/60. The cataracts were moderate - enough to blur things, but not enough to qualify as an emergency. What struck me wasn't the clinical picture. It was the first thing she said after I finished examining her:
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"I feel terrible for letting this go so long."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What She <strong>Needed to Hear</strong></h2>
          <p>
            She didn't need a surgical plan. Not yet. She needed permission.
          </p>
          <p>
            Permission to understand that delaying her own care was not a failure - it was a commitment to someone she loved. Permission to shift her focus without feeling like she was abandoning something. Permission to sit in a doctor's office and not feel guilty about it.
          </p>
          <p>
            So that's what I told her.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>"There is no urgency here. Cataracts don't punish people for waiting. You didn't fail. You took care of your husband. Now let's think about how you want to live in this next chapter."</strong></p>
          </div></BlurReveal>

          <p>
            She cried. Then she laughed a little. Then she asked me to explain her options - not because she was ready to schedule surgery, but because for the first time in years, she was allowed to think about herself.
          </p>
        </div>
      </section>

      {/* Full-bleed visual break */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image
            src="/media/stock-seniors-bocce-desert.jpg"
            alt="Seniors enjoying bocce in the desert sunshine"
            width={1920}
            height={400}
            style={{width: "100%", height: "auto"}}
          />
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-joyful-clear-vision.jpg"
              alt="Patient seeing clearly again for the first time in years"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <h2 className="section-title">Why I'm Sharing <strong>This</strong></h2>
          <p>
            I've been practicing long enough to know that cataract surgery is rarely just about visual acuity. By the time patients reach my office, many of them have lived through years of competing priorities - caregiving, illness, grief, financial stress, fear, inertia. Those things don't show up on an eye chart. They don't appear in a diagnostic workup.
          </p>
          <p>
            But they shape every decision a patient makes. If I reduce the conversation to measurements and timelines, I miss the whole person. If I pay attention - if I ask what brought them in <em>now</em>, after all this time - I can help them make a choice they feel good about. Not just medically sound. <em>Personally</em> sound.
          </p>
          <p>
            That's what good care looks like. Not just knowing when to operate. Knowing when to listen.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>If you've been putting off your own eye care - because of caregiving, because of grief, because life just got in the way - you haven't failed. You've been handling something that mattered. And whenever you're ready, the door is open. No judgment. No urgency. Just a conversation about what comes next.</em>
            </p>
          </div></BlurReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '48px'}}>
            <Image
              src="/media/stock-couple-sunset-cooking.jpg"
              alt="Couple cooking together at sunset - the everyday moments that clear vision restores"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>What cataracts are, how they progress, and why there's almost never a reason to rush.</p>
            </Link>
            <Link href="/insights/the-reader-who-almost-gave-up-her-books" className="related-card">
              <h3>The Reader Who Almost Gave Up Her Books</h3>
              <p>Another story about a patient who delayed care - and the conversation that changed her mind.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
