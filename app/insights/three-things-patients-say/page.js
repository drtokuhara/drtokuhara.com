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
  title: 'Three Things Patients Say That Tell Me Which Lens to Recommend',
  description: 'How everyday statements in the exam room reveal which lens implant fits your life. A cataract surgeon explains the listening that happens before the planning.',
  alternates: { canonical: '/insights/three-things-patients-say' },
  openGraph: {
    title: 'Three Things Patients Say | Dr. Keith Tokuhara',
    description: 'Your words tell me more than any test. How three common patient statements shape lens recommendations in cataract surgery.',
    url: 'https://drtokuhara.com/insights/three-things-patients-say',
  },
};

const jsonLd = [
  articleSchema({
    title: 'Three Things Patients Say That Tell Me Which Lens to Recommend',
    description: 'How everyday statements in the exam room reveal which lens implant fits your life.',
    slug: '/insights/three-things-patients-say',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Three Things Patients Say', href: '/insights/three-things-patients-say' },
  ]),
];

export default function InsightThreeThingsPatientsSay() {
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
          <span className="insight-hero-cluster">Lens Selection</span>
          <h1>Three Things Patients <strong>Say</strong></h1>
          <p className="page-hero-sub">Your words tell me more than any chart. How three common statements in the exam room shape which lens I recommend.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Most of my time in a cataract consultation is not spent talking about surgery. It is spent listening to how someone lives. That part matters more than the lens catalog.
          </p>
          <p>
            There are tests I run. Measurements I take. Imaging that maps the surface of your eye down to fractions of a millimeter. All of that matters. But none of it tells me what you actually need until I hear you talk about your life.
          </p>
          <p>
            Over the years, I have noticed that certain statements come up again and again. Not medical statements. Just things people say when they are describing their day, their frustrations, their priorities. And those words tell me almost everything I need to know about which direction to go.
          </p>
          <p>
            Here are three of them.
          </p>
        </div>
      </section>

      {/* Statement 1: The Reader */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title"><strong>"I read for three hours every night before bed."</strong></h2>
          <p>
            When someone tells me this, I know near vision is not a convenience for them. It is identity. It is the thing they build their evening around, the ritual that has shaped their life for decades.
          </p>
          <p>
            For this patient, losing clear near vision without glasses would feel like losing a part of who they are. That does not mean they need a multifocal lens. It means the plan has to protect near vision above all else. Sometimes that means a multifocal or Extended Depth of Focus lens that delivers a range. Sometimes it means a monofocal lens aimed at near, with glasses for distance. Sometimes it means a monovision approach where one eye favors reading.
          </p>
          <p>
            The point is not the technology. The point is that I heard what mattered to them and built the plan around it.
          </p>
        </div>
      </section>

      {/* Statement 2: The Working Professional */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title"><strong>"I still work. I am on screens all day."</strong></h2>
          <p>
            This tells me intermediate range matters most. Not distance. Not near. The middle.
          </p>
          <p>
            People who work at computers live at arm's length. Their critical visual world is roughly 20 to 30 inches away, a zone that traditional monofocal lenses set for distance do not cover well. These patients often assume they need to choose between distance and near. They do not realize there is an entire category of lens technology designed for exactly where they spend their day.
          </p>
          <p>
            Extended Depth of Focus lenses excel here. They stretch the range of clear vision from distance through intermediate, covering the computer, the dashboard, the kitchen counter. Reading glasses may still be needed for very fine print, but the working zone is clear.
          </p>
          <p>
            When I hear "I am on screens all day," I am already thinking about how to keep that arm's-length world sharp. Everything else follows from there.
          </p>
        </div>
      </section>

      {/* Statement 3: The Simplicity Seeker */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title"><strong>"I just want to not think about my eyes."</strong></h2>
          <p>
            This is the patient who values predictability above everything. They do not want to chase perfection. They want reliability. They want to wake up, see clearly at the distance that matters most to them, and not wonder whether the light will bother them or whether they will need a different pair of glasses for different tasks.
          </p>
          <p>
            For this patient, simplicity wins. One clear focus. Good glasses for the rest. No visual compromises, no halos, no adaptation period. The monofocal lens, fully covered by insurance, is often exactly right here. Not because it is the least advanced option, but because it is the most predictable one.
          </p>
          <p>
            Sometimes the best surgical plan is the most boring one. That is not a failure of ambition. It is a success of listening.
          </p>
        </div>
      </section>

      {/* The Real Point */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Real <strong>Point</strong></h2>
          <p>
            Lens selection is not a menu. It is a conversation. The measurements tell me what is possible. Your words tell me what matters. The best outcomes happen when those two things align.
          </p>
          <p>
            I have been doing this long enough to know that patients rarely walk in asking for a specific lens by name. They walk in describing a life they want to protect or a frustration they want to solve. My job is to translate that into a plan that respects both the engineering of the eye and the reality of how you live.
          </p>
          <p>
            If you are approaching cataract surgery and wondering which lens is right for you, start by thinking about how you spend your day. Not which lens has the best brochure. The answer is usually already in the way you describe your life.
          </p>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lens Implants Worth It?</h3>
              <p>An honest reflection on premium versus standard lens implants and what the answer depends on.</p>
            </Link>
            <Link href="/insights/the-lens-nobody-talks-about" className="related-card">
              <h3>The Lens Nobody Talks About</h3>
              <p>A patient was convinced she needed a multifocal. Her eyes and lifestyle told a different story.</p>
            </Link>
            <Link href="/insights/when-ai-recommends-your-lens" className="related-card">
              <h3>When AI Recommends Your Lens</h3>
              <p>A patient used AI to choose his lens. His eyes told a different story.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a thorough consultation actually looks like, and why it matters.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>Choosing the Standard Lens</h3>
              <p>Sometimes the standard monofocal lens is exactly the right choice.</p>
            </Link>
            <Link href="/insights/the-reader-who-almost-gave-up-her-books" className="related-card">
              <h3>The Reader Who Almost Gave Up Her Books</h3>
              <p>An 81-year-old who delayed surgery for years and what changed her mind.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
