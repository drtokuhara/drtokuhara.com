import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';
import PageFAQ from '../components/PageFAQ';
import AudioNarration from '../components/AudioNarration';

export const metadata = {
  title: 'Understanding Cataracts: What Your Eye Doctor May Not Have Time to Explain',
  description: 'A deeper look at cataracts - beyond the basics. Real-world progression, when to worry vs. wait, and the emotional side of gradual vision loss that no one talks about.',
  alternates: { canonical: '/understanding-cataracts' },
  openGraph: {
    title: 'Understanding Cataracts | Dr. Keith Tokuhara',
    description: 'What cataracts actually mean for your daily life, when to worry, and why most confusion is preventable with better explanation.',
    url: 'https://drtokuhara.com/understanding-cataracts',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What causes cataracts?', acceptedAnswer: { '@type': 'Answer', text: 'Cataracts are caused by the natural breakdown of proteins in the lens of the eye over time. The lens gradually goes from clear to cloudy. Age is the primary factor, though UV exposure, diabetes, certain medications, and genetics can accelerate the process.' } },
    { '@type': 'Question', name: 'What do cataracts look like to the patient?', acceptedAnswer: { '@type': 'Answer', text: 'Patients describe cataracts as looking through a foggy window. Colors appear duller, night driving becomes difficult with glare and halos, and everything seems to need cleaning. The change is so gradual that many patients do not realize how much vision they have lost until after surgery.' } },
    { '@type': 'Question', name: 'Can cataracts be treated without surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Currently, surgery is the only proven treatment for cataracts. There are no eye drops, medications, or exercises that can reverse a cataract. However, cataracts do not require immediate treatment. Surgery is recommended when vision loss affects your daily life and activities.' } },
    { '@type': 'Question', name: 'How fast do cataracts progress?', acceptedAnswer: { '@type': 'Answer', text: 'Cataract progression varies widely. Some develop over years and barely change, while others progress noticeably within months. There is no universal timeline, and cataracts do not punish you for waiting. Your doctor should monitor them regularly.' } },
  ],
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Understanding Cataracts', href: '/understanding-cataracts' },
]);


const pageFaqs = [
  { q: 'What causes cataracts?', a: 'Cataracts are caused by the natural breakdown of proteins in the lens of the eye over time. The lens gradually goes from clear to cloudy. Age is the primary factor, though UV exposure, diabetes, certain medications, and genetics can accelerate the process.' },
  { q: 'What do cataracts look like to the patient?', a: 'Patients describe cataracts as looking through a foggy window. Colors appear duller, night driving becomes difficult with glare and halos, and everything seems to need cleaning. The change is so gradual that many patients do not realize how much vision they have lost until after surgery.' },
  { q: 'Can cataracts be treated without surgery?', a: 'Currently, surgery is the only proven treatment for cataracts. There are no eye drops, medications, or exercises that can reverse a cataract. However, cataracts do not require immediate treatment. Surgery is recommended when vision loss affects your daily life and activities.' },
  { q: 'How fast do cataracts progress?', a: 'Cataract progression varies widely. Some develop over years and barely change, while others progress noticeably within months. There is no universal timeline, and cataracts do not punish you for waiting. Your doctor should monitor them regularly.' },
];

export default function UnderstandingCataracts() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* HERO */}
      <VideoBackground src="/media/ambient-iris-closeup-v2.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}} bottomOverlay={<AudioNarration src="/audio/narrations/understanding-cataracts.mp3" />}>
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Understanding <strong>Cataracts</strong></h1></ScrollReveal>
          <p className="page-hero-sub">What your eye doctor may not have time to explain - and what you actually need to know before making any decisions.</p>
        </div>
      </VideoBackground>

      {/* HERO IMAGE */}
      <section className="section section-white" style={{paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/patient-elderly-woman-smiling.jpg"
              alt="Patient smiling after learning about her cataract options"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            If you've been told you have cataracts, you're probably somewhere between mildly confused and quietly worried. That's normal. Most people leave their eye appointment with a diagnosis but not much of an explanation.
          </p>
          <p>
            Here's what I wish every patient understood before they started searching the internet: cataracts are not an emergency. They are not a disease that spreads or gets worse overnight. And the decision about what to do - and when - is more personal than most doctors make it sound.
          </p>
        </div>
      </section>

      {/* WHAT CATARACTS ACTUALLY ARE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Cataracts <strong>Actually Are</strong></h2>
          <p>
            A cataract is a clouding of the natural lens inside your eye. That lens sits behind your iris - the colored part - and its job is to focus light onto the retina so you can see clearly.
          </p>
          <p>
            Over time, proteins in the lens break down and clump together. The lens goes from clear to hazy. Think of it like a window that slowly fogs over. You can still see through it for a long time, but eventually the fog gets thick enough that things start to feel dim, blurry, or washed out.
          </p>
          <p>
            Here's what most explanations miss: cataracts don't happen suddenly. The change is so gradual that your brain adjusts along the way. Many patients don't realize how much vision they've lost until after surgery, when they see clearly again and think, <em>"I had no idea it had gotten that bad."</em>
          </p>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How Cataracts <strong>Feel</strong></h2>
          <p>
            Medical textbooks list symptoms like "blurry vision" and "glare sensitivity." That's accurate but incomplete. Here's what patients actually describe to me:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>"Everything looks like it needs cleaning."</strong>
              <p>You keep wiping your glasses, but it doesn't help. The blur isn't on the lens - it's behind it.</p>
            </div>
            <div className="insight-item">
              <strong>"Night driving got scary."</strong>
              <p>Headlights scatter and bloom. Street signs are harder to read. You start avoiding driving after dark, sometimes without even realizing you're doing it.</p>
            </div>

            <div className="content-image">
              <Image
                src="/media/cataract-night-driving-palm-springs.jpg"
                alt="Simulated view of night driving with early cataracts in Palm Springs - headlight glare and halos"
                width={680}
                height={453}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="content-image-caption">
                A simulation of what night driving looks like through early cataracts - the glare, the halos, the washed-out contrast. This is what many patients describe but struggle to put into words.
              </div>
            </div>
            <div className="insight-item">
              <strong>"Colors just aren't the same."</strong>
              <p>Whites look yellowish. Blues look muted. After surgery, many patients say the world looks "brighter" - because it literally is.</p>
            </div>
            <div className="insight-item">
              <strong>"I can still see, but nothing feels right."</strong>
              <p>This is the most common thing I hear. The eye chart might say 20/40, but your lived experience doesn't match a number.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESSION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How Cataracts <strong>Progress</strong></h2>
          <p>
            Not all cataracts are the same. Some develop over years and barely change. Others progress noticeably within months. There is no universal timeline, and that uncertainty is part of what makes the decision feel difficult.
          </p>
          <p>
            What I tell patients: <strong>cataracts don't punish you for waiting.</strong> There is no penalty for taking time to think. In most cases, the cataract will be there whenever you're ready. The rare exception is when a cataract becomes very dense - what we call a "hard" cataract - which can make surgery more technically demanding. But that takes a long time to happen, and your doctor should be monitoring for it.
          </p>
          <p>
            The more important question isn't "how fast is it getting worse?" It's <em>"how much is this affecting my life right now?"</em>
          </p>
        </div>
      </section>

      {/* EMOTIONAL SIDE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Part No One <strong>Talks About</strong></h2>
          <p>
            Cataracts don't exist in a vacuum. They show up during a stage of life where people are already navigating other changes - retirement, caregiving, losing a spouse, adjusting to a different body.
          </p>
          <p>
            I've had patients delay surgery for years because they were taking care of someone else. I've had patients feel guilty for being in my office, as if paying attention to their own eyes meant they were neglecting something more important.
          </p>
          <p>
            Here's what I want you to know: <strong>delaying care because life got in the way is not a failure.</strong> It's a sign you were committed to something that mattered. Cataracts are patient. They'll wait for you.
          </p>
          <p>
            When you're ready - truly ready - we'll figure out the right plan together. And it will be based on how you want to live, not just what the eye chart says.
          </p>
        </div>
      </section>

      {/* DRIVING IMAGE */}
      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/patient-driving-concern.jpg"
              alt="Woman considering whether night driving is still safe with cataracts"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* EXAM EQUIPMENT IMAGE */}
      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/20210109_095405.jpg"
              alt="Advanced diagnostic equipment at Desert Vision Center for comprehensive eye exams"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="content-image-caption">The equipment we use to evaluate your cataracts and plan your care.</div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE */}
      <section className="section section-white" style={{paddingTop: 0, paddingBottom: '24px'}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/lifestyle-convertible.jpg"
              alt="Driving a convertible through the Coachella Valley with clear, confident vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* WHEN TO ACT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When Should You <strong>Do Something?</strong></h2>
          <p>
            There's no magic number. No specific level of vision loss that triggers a universal "now" signal. But here are the real-world moments when patients usually start considering surgery:
          </p>
          <ul className="content-list">
            <li>You've stopped doing something you used to enjoy because of your vision</li>
            <li>Night driving has become genuinely uncomfortable or unsafe</li>
            <li>You're changing glasses prescriptions frequently and nothing quite works</li>
            <li>Reading, watching TV, or recognizing faces feels harder than it should</li>
            <li>You're frustrated - and the frustration is about vision, not just aging</li>
          </ul>
          <p>
            If any of those resonate, it's worth having a conversation. Not a commitment - just a conversation about what your options look like and what fits your life.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Cataract surgery is rarely just about visual acuity. By the time patients reach my office, many have lived through competing priorities - caregiving, loss, tradeoffs that don't show up in a chart. If I ignore that, I'm reducing a deeply personal decision to a set of measurements. If I pay attention, I can help someone choose without guilt.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

            <PageFAQ faqs={pageFaqs} />

{/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>If you're considering surgery, the lens choice matters. Here's how to think about it.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>The questions nobody tells you to ask - and the red flags to watch for.</p>
            </Link>
            <Link href="/insights/permission-to-see-again" className="related-card">
              <h3>Permission to See Again</h3>
              <p>A story about a woman who waited six years, and why that was okay.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
