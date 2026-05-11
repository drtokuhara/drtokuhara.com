import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Cataract Surgery Step by Step: What Actually Happens - Dr. Keith Tokuhara',
  description: 'A cataract surgeon with over 20,000 procedures walks you through exactly what happens before, during, and after cataract surgery. No jargon, no sugarcoating.',
  alternates: { canonical: '/insights/cataract-surgery-step-by-step' },
  openGraph: {
    title: 'Cataract Surgery Step by Step: What Actually Happens | Dr. Keith Tokuhara',
    description: 'A detailed, honest walkthrough of the cataract surgery procedure from a surgeon who has performed over 20,000 cases.',
    url: 'https://drtokuhara.com/insights/cataract-surgery-step-by-step',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does cataract surgery take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The procedure itself typically takes 8 to 15 minutes per eye. The entire visit, including pre-op preparation and a short recovery observation period, usually takes about two to three hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am I awake during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cataract surgery uses topical anesthesia (numbing drops) and a mild IV sedative. You are awake but relaxed and comfortable. General anesthesia is almost never necessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is femtosecond laser cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Femtosecond laser-assisted cataract surgery uses a computer-guided laser to perform certain steps of the procedure, including the initial corneal incision and breaking up the cataract. It adds precision to specific parts of the surgery but excellent outcomes are achievable with manual technique as well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does cataract surgery use needles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Modern cataract surgery uses numbing eye drops, not needles, for anesthesia in the vast majority of cases. The old technique of injecting anesthetic behind the eye is rarely used today.',
      },
    },
    {
      '@type': 'Question',
      name: 'When can I see clearly after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients notice a significant improvement in clarity within the first 24 hours. Vision continues to stabilize and sharpen over the first one to four weeks as the eye heals.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Cataract Surgery Step by Step: What Actually Happens',
    description: 'A detailed walkthrough of the cataract surgery procedure from pre-op preparation through recovery, written by a surgeon with over 20,000 cases.',
    slug: '/insights/cataract-surgery-step-by-step',
    datePublished: '2026-05-11',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Cataract Surgery Step by Step', href: '/insights/cataract-surgery-step-by-step' },
  ]),
  faqSchema,
];

export default function InsightStepByStep() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-lens-refraction-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">The Procedure</span>
          <h1>Cataract Surgery Step by Step: <strong>What Actually Happens</strong></h1>
          <p className="page-hero-sub">A surgeon's honest walkthrough of what to expect before, during, and after the procedure.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Patients walk into my office and the first thing many of them want is a straight answer: what exactly happens during cataract surgery? Not the glossy version from a brochure. Not a diagram with arrows. Just the truth, from someone who has done this over 20,000 times.
          </p>
          <p>
            So here it is. Step by step. What you will actually experience if you have cataract surgery with me at Desert Vision Center.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Before the <strong>Procedure</strong></h2>
          <p>
            Surgery day starts with a visit to our outpatient surgery center. You will have already had a full pre-operative evaluation, including precise measurements of your eye. These measurements determine the power and type of lens implant that will replace your cataract. This is one of the most important steps in the entire process, and it happens well before surgery day.
          </p>
          <p>
            When you arrive, a nurse will check your vital signs and start an IV for the mild sedative. You will not be put to sleep. The IV delivers a light relaxation medication, enough to take the edge off without knocking you out.
          </p>
          <p>
            Dilating drops are placed in the eye to widen your pupil, giving me access to the cataract behind it. Numbing drops are placed on the surface of the eye. There are no needles around the eye. That old technique, injecting anesthetic behind the eyeball, is rarely used in modern cataract surgery. Your eye goes numb from drops alone.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>One of the most common things patients tell me in pre-op: "I'm more nervous about the IV than the actual eye surgery." By the time the sedative kicks in, they understand why we use it.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Procedure <strong>Itself</strong></h2>
          <p>
            The entire surgery takes about 8 to 15 minutes per eye. You are awake. You are comfortable. You are lying back with a light drape over your face, with an opening over the eye being treated. A small device holds your eyelids open gently so you do not have to worry about blinking.
          </p>
          <p>
            What you see during surgery is not what people imagine. There are no instruments coming toward you. There is no blade visible. You see a bright light from the microscope above, sometimes with soft, shifting colors. Some patients describe a kaleidoscope. Others see a warm glow. Nobody watches the surgery happen from their perspective. The light above is bright enough to obscure everything else.
          </p>
          <p>
            Here is what I am doing during those minutes. First, I create a tiny incision in the cornea, typically about 2.2 millimeters. This incision is self-sealing, which means no stitches in most cases. If we are using the femtosecond laser, this step and several others are performed by the laser with computer-guided precision before I begin the manual portion.
          </p>
          <p>
            Next, I make a circular opening in the thin capsule that holds the cataract. Think of this capsule as a clear bag. The cataract, your clouded natural lens, sits inside it. I need to open the front of the bag to reach the cataract while leaving the back intact to support the new lens implant.
          </p>
          <p>
            Then comes phacoemulsification. This is the technical name for what most people call "breaking up the cataract." An ultrasonic handpiece vibrates at an extremely high frequency, emulsifying the cloudy lens into tiny fragments that are simultaneously suctioned out through a small tip. The entire cataract is removed through that original 2.2-millimeter incision.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The technology is remarkable, but it is not the technology that determines your outcome. It is the judgment behind it."</p>
          </div></BlurReveal>

          <p>
            Once the cataract is removed, the capsular bag is clean and empty. This is where your new lens goes. The intraocular lens, or IOL, is folded and inserted through the same small incision. Once inside the eye, it unfolds and is positioned precisely in the capsular bag. This is the lens you will see through for the rest of your life.
          </p>
          <p>
            The incision is checked for seal, and in most cases, no sutures are needed. A protective shield is placed over the eye, and you are done.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Laser <strong>Option</strong></h2>
          <p>
            Some patients ask about femtosecond laser-assisted cataract surgery. Here is the honest version. The laser can perform certain steps of the procedure with computer-guided precision: the corneal incision, the capsular opening, and the initial fragmentation of the cataract. For patients receiving toric lenses to reduce astigmatism, the laser can also create precise corneal relaxing incisions.
          </p>
          <p>
            Is laser better than manual? Both approaches produce excellent outcomes. The laser adds a layer of consistency and precision for specific steps. But the most important factor in your outcome is not the laser. It is the surgeon's experience, judgment, and ability to handle whatever arises during the procedure. I trained under Dr. Howard Gimbel at Loma Linda, a pioneer in phacoemulsification, and the principles he taught me apply whether a laser is involved or not.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Immediately <strong>After</strong></h2>
          <p>
            You will rest briefly in the recovery area while the sedative wears off. Most patients feel mild grogginess, and the eye may be slightly scratchy or watery. This is normal. You will go home with a protective shield over the eye and instructions for your post-operative drop schedule.
          </p>
          <p>
            Here is the part that surprises most patients: many notice an improvement in vision within hours. Colors look brighter. Things look sharper, even through the residual blur that comes from the drops and mild swelling. By the next morning, the difference is often dramatic.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The most common thing I hear at the one-day follow-up: "I had no idea how much I was missing." Cataracts develop so gradually that patients forget what normal vision looks like. When the cataract is removed, the contrast is striking.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Recovery <strong>Timeline</strong></h2>
          <p>
            <strong>Day 1:</strong> Follow-up visit. Most patients see a noticeable improvement. The eye may still be slightly red or puffy. You will begin your drop schedule.
          </p>
          <p>
            <strong>Week 1:</strong> Vision continues to clear. Mild scratchiness and light sensitivity are common and decrease day by day. You can resume most normal activities, but avoid rubbing the eye, heavy lifting, and swimming.
          </p>
          <p>
            <strong>Weeks 2 to 4:</strong> Vision stabilizes. Any residual blur or fluctuation typically settles during this window. If you are having both eyes done, the second eye is often scheduled during this period.
          </p>
          <p>
            <strong>Month 1 and beyond:</strong> Final vision is usually reached. If needed, we can fine-tune with a glasses prescription for any remaining correction. For most patients, the improvement is permanent and stable.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Makes the <strong>Difference</strong></h2>
          <p>
            The procedure I just described is fundamentally the same in most operating rooms. What varies, and what determines your outcome, is everything around it. The precision of the pre-operative measurements. The quality of the conversation about lens selection. The surgeon's ability to adapt in real time if something unexpected happens. The thoroughness of post-operative care.
          </p>
          <p>
            I have performed over 20,000 cataract surgeries. I have managed complications that arose mid-procedure. I have operated on eyes that other surgeons referred because they were too complex. What I have learned is that technique matters, but judgment matters more. Knowing when to adjust. Knowing when to use the laser and when not to. Knowing which lens fits your eyes and your life, not just a formula.
          </p>
          <p>
            That is what you are choosing when you choose a surgeon. Not a machine. Not a brand. A person who will make the right decisions for your eyes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients often tell me they spent weeks researching cataract surgery online before their consultation. By the time they sit in my exam chair, they have read about IOL power calculations, femtosecond platforms, and astigmatism management. What they have not found online is something simpler: what it actually feels like. The bright light overhead. The calm voice guiding them through. The surprising speed of it. The moment they realize the fear was bigger than the reality. That part, you can only understand by going through it. But I hope this gets you closer.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/is-cataract-surgery-painful" className="related-card">
              <h3>Is Cataract Surgery Painful?</h3>
              <p>The honest answer about what you actually feel during the procedure.</p>
            </Link>
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>Your First Week After Cataract Surgery</h3>
              <p>A day-by-day guide to what is normal and what to watch for.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Pre-Op Guide</h3>
              <p>What happens before surgery day. Measurements, planning, preparation.</p>
            </Link>
            <Link href="/laser-cataract-surgery" className="related-card">
              <h3>Laser Cataract Surgery</h3>
              <p>What the femtosecond laser does and when it matters.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
