import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  KineticText,
  VideoBackground,
  ScaleOnScroll,
  PremiumImageBreak,
  NumberReveal,
} from '../../components/ScrollAnimations';

const jsonLd = [
  articleSchema({
    title: 'Built in the Desert. Not Imported In.',
    description: 'Dr. Tokuhara has been in the Coachella Valley for 10+ years. Desert Vision Center has been here for 30+ years. Some practices are run by surgeons who come in once or twice a week. Dr. T lives here. He is here every day.',
    slug: '/our-story/built-in-the-desert',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/#brand-stories' },
    { name: 'Built in the Desert', href: '/our-story/built-in-the-desert' },
  ]),
];

export const metadata = {
  title: 'Built in the Desert. Not Imported In. - Our Story',
  description: 'Dr. Tokuhara has been in the Coachella Valley for 10+ years. Desert Vision Center has been here for 30+ years. Some practices are run by surgeons who come in once or twice a week. Dr. T lives here. He is here every day.',
  alternates: {
    canonical: '/our-story/built-in-the-desert',
  },
  openGraph: {
    title: 'Built in the Desert. Not Imported In. | Dr. Keith Tokuhara',
    description: 'Dr. Tokuhara has been in the Coachella Valley for 10+ years. Desert Vision Center has been here for 30+ years. Some practices are run by surgeons who come in once or twice a week. Dr. T lives here. He is here every day.',
    url: 'https://drtokuhara.com/our-story/built-in-the-desert',
  },
};

export default function BuiltInTheDesertPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <VideoBackground 
        src="/media/ambient-desert-golden-hour-v2.mp4" 
        poster="/media/desert-landscape-hero-1.png"
        overlayOpacity={0.5} 
        overlayColor="0, 20, 30" 
        className="page-hero page-hero-image" 
        style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Our Story</span>
            <h1>Built in the <strong>Desert.</strong> Not Imported In.</h1>
            <p className="page-hero-sub">I live here. I work here. I raise my family here. When you are my patient, you get a surgeon who is here every day, not just twice a week.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Some practices are run by surgeons who fly in once or twice a week. They operate, then leave. Their patients see associates for everything else. Pre-op, post-op, complications, questions, follow-up care. Someone else handles it.
          </p>
          <p>
            That is not how I work. I have been in the Coachella Valley for over a decade. Desert Vision Center has been here for over 30 years. I am not a visiting surgeon. I am here every day. I see every patient before surgery. I do the surgery myself. And I see you afterward. If something goes wrong, you see me. Not an associate. Not a rotating resident. Me.
          </p>
        </div>
      </section>

      {/* DESERT IMAGE BREAK */}
      <PremiumImageBreak 
        src="/media/lifestyle-couple-desert-hike-sunset.jpg" 
        alt="Couple hiking in the Coachella Valley desert at sunset" 
        height="50vh"
        overlayOpacity={0.15}
      />

      {/* CONTINUITY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Continuity <strong>Matters</strong></h2>
          <p>
            When I see you for surgery, I already know your case. I measured your eye. I chose the lens. I talked through your goals and your concerns. I know your history. That continuity matters more than most people realize.
          </p>
          <p>
            Surgery is not a one-time transaction. It is a relationship. There are decisions to make before the procedure. There are questions that come up after. If you had a complication or an unexpected result, you want the surgeon who knows exactly what happened in the operating room because he was the one holding the instruments.
          </p>
          <p>
            You do not want to explain your situation to someone who is reading your chart for the first time.
          </p>
        </div>
      </section>

      {/* DON CALLOUT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="pull-quote">
            <p>Don, our longest-serving team member, has been at Desert Vision Center for nearly 40 years. Patients in their 80s and 90s still remember him. He remembers them. That kind of institutional memory is rare. You cannot build it overnight. You cannot import it from somewhere else. It happens when people stay. When they invest in this place. When they care about the people who live here.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* DESERT COMMUNITY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Part of This <strong>Community</strong></h2>
          <p>
            I see my patients at the grocery store. At restaurants. At my kids' school events. That is not awkward. It is accountability. When you live in the same community as your patients, you cannot hide behind a practice manager or a call center. Your reputation is your reputation. There is no distance between your work and your life.
          </p>
          <p>
            Some surgeons prefer that distance. I do not. I like knowing that my work has to hold up not just clinically but personally. That if I make a mistake or a poor judgment call, I am going to see that patient again. Not just in the office. In the real world.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>When you live in the same community as your patients, your reputation is your reputation. There is no distance between your work and your life.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* RESORT IMAGE */}
      <PremiumImageBreak 
        src="/media/dvc-building-exterior.jpg" 
        alt="Desert Vision Center building exterior in Rancho Mirage" 
        height="45vh"
        overlayOpacity={0.2}
      />

      {/* BUILT TO STAY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Built to <strong>Stay</strong></h2>
          <p>
            Desert Vision Center has been in Rancho Mirage for over three decades. This is not a satellite office or a franchise location. It is a practice with roots. We are not going anywhere.
          </p>
          <p>
            I chose to stay here because I believe in building something lasting. Not just professionally, but personally. My family is here. My kids go to school here. This is home.
          </p>
          <p>
            When you choose a surgeon, you are choosing someone to trust with your vision. Part of that trust comes from knowing they will still be here a year from now. Five years from now. Ten years from now.
          </p>
          <p>
            I will be.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <h2 className="section-title" style={{marginBottom: '16px'}}>Schedule a Consultation</h2>
          <p style={{marginBottom: '32px', fontSize: '18px'}}>
            Meet the surgeon who will be there before, during, and after your surgery.
          </p>
          <a href="https://www.desertvisioncenter.com/contact" className="button button-primary button-large">
            Contact Desert Vision Center
          </a>
        </div>
      </section>
    </>
  );
}
