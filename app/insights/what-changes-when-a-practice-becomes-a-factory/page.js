import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'What Changes When an Eye Practice Becomes a Factory',
  description: 'Long waits. A different doctor each visit. Feeling processed. When an eye practice scales for volume, something quiet gets lost. Here is what changes, and what to look for, when you choose where to have cataract surgery.',
  alternates: { canonical: '/insights/what-changes-when-a-practice-becomes-a-factory' },
  openGraph: {
    title: 'What Changes When an Eye Practice Becomes a Factory | Dr. Keith Tokuhara',
    description: 'Long waits, rotating doctors, the feeling of being processed. What actually changes when an eye practice is built for volume, and why it matters for your surgery.',
    url: 'https://drtokuhara.com/insights/what-changes-when-a-practice-becomes-a-factory',
  },
};

const jsonLd = [
  articleSchema({
    title: 'What Changes When an Eye Practice Becomes a Factory',
    description: 'What actually changes when an eye practice scales for volume: continuity, wait culture, and who owns the outcome. What patients should look for.',
    slug: '/insights/what-changes-when-a-practice-becomes-a-factory',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When a Practice Becomes a Factory', href: '/insights/what-changes-when-a-practice-becomes-a-factory' },
  ]),
];

export default function InsightPracticeFactory() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-iris-closeup-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
        bottomOverlay={<AudioNarration src="/audio/narrations/what-changes-when-a-practice-becomes-a-factory.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">How Care Is Structured</span>
          <h1>What Changes When a Practice Becomes a <strong>Factory</strong></h1>
          <p className="page-hero-sub">The word patients keep using. Here is what is actually behind it.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Patients tell me things about other offices. Not to complain. Just to explain why they came looking.
          </p>
          <p>
            The words repeat. Factory. Mill. Assembly line. Three hours in the waiting room. A different doctor every visit. One person put it plainly: "I felt like a number."
          </p>
          <p>
            That word, factory, is not about the building. It is about a feeling. And the feeling is usually pointing at something real.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What a Factory Actually <strong>Means Here</strong></h2>
          <p>
            No practice sets out to feel like a factory. It happens when the goal quietly shifts from caring for patients to moving them.
          </p>
          <p>
            Volume is not evil. High volume can mean deep experience. But when a practice is built around throughput, the schedule stops bending to the patient and the patient starts bending to the schedule.
          </p>
          <p>
            You feel it in small ways. The intake feels rushed. Your questions get shorter answers. The person who examines you is not the person who operates. The person who operates is not the person you see afterward.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>A factory is not a place. It is a set of choices about whose time matters most.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Three-Hour <strong>Wait</strong></h2>
          <p>
            The long wait is the part patients mention most. It is worth understanding what it signals.
          </p>
          <p>
            A three-hour wait is not bad luck. It is a design. It means the schedule is packed so tight that the office is never idle, even if you are. Your time is the buffer that keeps the machine full.
          </p>
          <p>
            One patient told me a nearby office bulk-books everyone, then works through them like a line. Efficient for the office. Exhausting for the person who took the whole morning off and still missed lunch.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Part That Actually <strong>Matters</strong></h2>
          <p>
            Waiting is annoying. This next part is the one that affects your result.
          </p>
          <p>
            Cataract surgery is not a single event. It is a relationship over weeks. Someone examines you and plans the surgery. Someone chooses your lens. Someone operates. Someone watches how you heal and catches any problem early.
          </p>
          <p>
            In a factory model, those can be four different people. Continuity breaks. Details fall between the cracks. And if something does not go as planned, there is no single person who knows your eye and owns the outcome.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The question is not how many surgeries a practice does. It is whether one person is accountable for yours.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Who Owns the <strong>Outcome</strong></h2>
          <p>
            There is a business layer behind this that patients rarely see. Many practices are no longer owned by the doctors who work in them. They are owned by investors, and the pressure to see more patients per hour comes from somewhere.
          </p>
          <p>
            I am not against anyone earning a living. I am against a structure where the person operating on your eye did not decide how much time you get.
          </p>
          <p>
            I bought my practice and chose to keep it independent. No outside owner sets my schedule. When I say I will follow you until you are healed, no one above me is counting the minutes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/stock-couple-lawn-sunset-coachella.jpg"
              alt="Couple enjoying an evening in the Coachella Valley"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">What to Look <strong>For</strong></h2>
          <p>
            You do not need to interrogate anyone. A few honest questions tell you most of what you need to know.
          </p>
          <p>
            Will the surgeon who operates be the one who examines me first, and the one I see afterward? How long do visits usually run? If something goes wrong, who do I call, and do I reach that surgeon?
          </p>
          <p>
            Listen to how the answers feel. A practice built around you will answer plainly. A practice built around volume will get vague.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I have been in this valley a long time. I did not come here to run a line. The best part of this work is knowing the person in the chair, planning their surgery myself, and being the one they call after. You cannot scale that. And I would not want to.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/how-to-choose-a-cataract-surgeon" className="related-card">
              <h3>How to Choose a Cataract Surgeon</h3>
              <p>What actually matters when you pick who operates on your eye.</p>
            </Link>
            <Link href="/insights/why-i-do-my-own-post-op" className="related-card">
              <h3>Why I Do My Own Post-Op</h3>
              <p>Continuity is not a courtesy. It is how problems get caught early.</p>
            </Link>
            <Link href="/insights/cataract-referral-kickbacks" className="related-card">
              <h3>The Truth About Referral Kickbacks</h3>
              <p>Why some referrals are not made in your best interest.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
