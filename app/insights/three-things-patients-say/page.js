import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  ParallaxImage,
  BlurReveal,
  LineDraw,
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
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-couple-art-interior.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Lens Selection</span>
          <h1>Three Things Patients <strong>Say</strong></h1>
          <p className="page-hero-sub">Your words tell me more than any chart. How three common statements in the exam room shape which lens I recommend.</p>
          </ScrollReveal>
        </div>
      </section>

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

          <div className="section-divider" style={{margin: '40px auto'}} />

          <p style={{textAlign: 'center', marginTop: '24px'}}>
            <Link href="/lens-implants-explained" className="cta-link">
              Learn more about your lens options &rarr;
            </Link>
          </p>
          <p style={{textAlign: 'center', marginTop: '12px'}}>
            <Link href="/contact" className="cta-link">
              Schedule a consultation &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
