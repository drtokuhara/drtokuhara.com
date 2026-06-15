import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
import JourneyArticleCard from '../components/JourneyArticleCard';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
  KineticText,
} from '../components/ScrollAnimations';

const jsonLd = [
  articleSchema({
    title: 'Nervous About Cataract Surgery? That\'s Completely Normal.',
    description: 'Dr. Tokuhara addresses the fear and anxiety around cataract surgery. Patient stories, what you actually see during the procedure, and why the anticipation is almost always worse than the reality.',
    slug: '/nervous-about-surgery',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Nervous About Surgery', href: '/nervous-about-surgery' },
  ]),
];

export const metadata = {
  title: 'Nervous About Cataract Surgery? That\'s Completely Normal.',
  description: 'Dr. Tokuhara addresses the fear everyone feels before cataract surgery. Patient stories, what you see during the procedure, and why most patients say it was easier than they expected.',
  alternates: {
    canonical: '/nervous-about-surgery',
  },
  openGraph: {
    title: 'Nervous About Cataract Surgery? That\'s Normal. | Dr. Keith Tokuhara',
    description: 'If you\'re nervous about being awake during eye surgery, you\'re not alone. Dr. Tokuhara explains what actually happens and why the fear is bigger than the reality.',
    url: 'https://drtokuhara.com/nervous-about-surgery',
  },
};

export default function NervousAboutSurgeryPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <VideoBackground 
        src="/media/ambient-desert-sunrise-golden.mp4" 
        poster="/media/hero-what-you-see-during-surgery.jpg"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Nervous About Surgery? <strong>That's Completely Normal.</strong></h1>
            <p className="page-hero-sub">The fear is real. The anticipation is real. And for most patients, the actual experience is nowhere near as scary as the image in their head.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            If you're nervous about cataract surgery, you're not alone. It's the most common sentiment I hear in consultations. Not "what lens should I choose?" or "how long is recovery?" The first thing patients say, once they trust me enough to be honest, is: "I'm terrified."
          </p>
          <p>
            Being awake during a surgical procedure on your eye feels fundamentally wrong. You imagine everything that could go wrong. You picture yourself lying there, unable to move, forced to watch as instruments approach your eye. The fear makes sense. And I want you to know: it's okay to be scared.
          </p>
          <p>
            What I also want you to know is that the thing you're picturing, the vivid, detailed, surgical scene you keep replaying in your mind, is not what the experience is actually like. Your eyes cannot create that image. The surgery is designed so you don't see what you're afraid you'll see.
          </p>
          <p>
            Let me walk you through why, and share what patients who were just as nervous as you actually experienced.
          </p>
        </div>
      </section>

      {/* PATIENT ARTWORK FEATURE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What You Actually See: <strong>Two Years of Patient Artwork</strong></h2>
          </ScrollReveal>
          <p>
            For two years, I asked patients who are artists to draw what they saw during their cataract surgery. Not what they thought they would see. What they actually saw. I collected dozens of drawings. They're remarkably consistent.
          </p>
          <p>
            Kaleidoscopic patterns. Hearts. Swirling colors. Soft glowing light. Tunnels of turquoise and gold. Abstract, dreamlike, sometimes even beautiful. Not a single patient drew a scalpel or a needle or anything resembling a medical procedure.
          </p>
          <p>
            I show these drawings to every nervous patient before surgery. Because seeing what other people experienced, in their own hand, is more reassuring than any verbal explanation I can give.
          </p>
          
          <div style={{textAlign: 'center', margin: '40px 0'}}>
            <Link href="/insights/what-you-see-during-cataract-surgery" className="btn-primary">
              See the Full Patient Artwork Gallery →
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            margin: '40px 0',
          }}>
            <Image src="/media/patient-art/1.jpeg" alt="Patient drawing: geometric hearts during cataract surgery" width={400} height={400} style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
            <Image src="/media/patient-art/3.jpeg" alt="Patient drawing: kaleidoscope colors during cataract surgery" width={400} height={400} style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
            <Image src="/media/patient-art/10.jpeg" alt="Patient drawing: flowing colors and hearts during cataract surgery" width={400} height={400} style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
          </div>
        </div>
      </section>

      {/* CURATED ARTICLES */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Read These <strong>If You're Still Worried</strong></h2>
            <p className="section-subtitle">Real patient stories and honest answers about fear, pain, and what the experience is actually like.</p>
          </ScrollReveal>

          <div className="journey-articles-section">
            <div className="journey-articles-grid">
              <JourneyArticleCard
                title="Is Cataract Surgery Painful?"
                description="The honest answer about pain, discomfort, and what you actually feel during and after surgery."
                href="/insights/is-cataract-surgery-painful"
                delay={0.1}
              />
              <JourneyArticleCard
                title="Cataract Surgery Step by Step"
                description="What happens during each stage of the procedure, explained in plain language so you know exactly what to expect."
                href="/insights/cataract-surgery-step-by-step"
                delay={0.15}
              />
              <JourneyArticleCard
                title="Three Things Patients Say After Surgery"
                description="The three most common reactions I hear when patients realize the reality was easier than the fear."
                href="/insights/three-things-patients-say"
                delay={0.2}
              />
              <JourneyArticleCard
                title="The Reader Who Almost Gave Up Her Books"
                description="A retired librarian who was terrified of surgery. Her story about facing the fear and what happened after."
                href="/insights/the-reader-who-almost-gave-up-her-books"
                delay={0.25}
              />
              <JourneyArticleCard
                title="The Needle That Wasn't There"
                description="One patient's story about the moment they realized their fear was bigger than the reality."
                href="/insights/the-needle-that-wasnt-there"
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HELPS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Helps <strong>the Most</strong></h2>
          
          <h3 className="content-subhead">Knowing what to expect</h3>
          <p>
            The unknown is always worse than the known. Patients who understand what they will see (or more accurately, what they will <em>not</em> see) report lower anxiety. That's why I spend time in every consultation explaining this in detail. It's not about convincing you the procedure is easy. It's about replacing the terrifying image in your head with an accurate one.
          </p>

          <h3 className="content-subhead">Sedation options</h3>
          <p>
            We offer mild sedation for patients who want it. This doesn't put you to sleep, but it takes the edge off. You remain awake and able to follow instructions, but you feel calmer and more relaxed. Many patients choose this option, and most say it made the experience significantly easier. Some report that the procedure felt like it passed in a blur, even though they were technically awake the entire time.
          </p>

          <h3 className="content-subhead">Trusting the process</h3>
          <p>
            This sounds abstract, but it matters. Cataract surgery is one of the most commonly performed surgeries in the world. Tens of millions of people have been through it. The technique is refined, the outcomes are predictable, and the anesthetic works. You are not the first person to be afraid. You are not the first person to wonder what you will see. And you will not be the first person to come out the other side and say, "that was not as bad as I thought."
          </p>

          <BlurReveal><div className="pull-quote">
            <p>A retired school principal told me: "I was terrified right up until the moment it started. Then I realized I couldn't see anything scary, I couldn't feel anything painful, and it was already halfway done. I had worked myself up for nothing."</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I have performed over 20,000 cataract surgeries, and I have never had a patient tell me afterward that the visual experience during surgery was traumatic. I have had patients say it was strange. I have had patients say it was boring. I have had patients say they barely remember it. But the thing they were afraid they would see, the sharp, vivid, disturbing image of their own surgery, that does not happen. The eye does not work that way. The procedure does not work that way. And knowing that, really understanding it, is often the thing that finally allows patients to move forward.</em>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <h2 className="section-title" style={{marginBottom: '16px'}}>Still Have Questions?</h2>
          <p style={{marginBottom: '32px', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px'}}>
            If you're still unsure about what to expect during cataract surgery, the best thing you can do is ask. We'll walk through the entire process, answer every question, and make sure you feel prepared before the day arrives.
          </p>
          <a href="https://www.desertvisioncenter.com/contact" className="button button-primary button-large">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Related Reading</h2>
          <div className="related-grid">
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery Overview</h3>
              <p>If you're considering cataract surgery, start here. What it is, when it makes sense, and what to expect.</p>
            </Link>
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>Your First Week After Surgery</h3>
              <p>What to expect day by day during the first week of recovery.</p>
            </Link>
            <Link href="/insights/permission-to-see-again" className="related-card">
              <h3>Permission to See Again</h3>
              <p>A patient story about moving past fear and into clarity.</p>
            </Link>
            <Link href="/patient-journey" className="related-card">
              <h3>Your Patient Journey</h3>
              <p>The complete step-by-step guide from first visit to clear vision.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
