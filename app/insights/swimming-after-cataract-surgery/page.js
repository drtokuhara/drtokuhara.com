import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema, faqSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Can You Swim After Cataract Surgery? Recovery Timeline for Pools, Hot Tubs, and Ocean - Dr. Keith Tokuhara',
  description: 'When can you swim after cataract surgery? Practical advice on pools, hot tubs, ocean swimming, and water exposure during cataract surgery recovery. Evidence-based timelines from a cataract surgeon.',
  alternates: { canonical: '/insights/swimming-after-cataract-surgery' },
  openGraph: {
    title: 'Can You Swim After Cataract Surgery? Recovery Timeline | Dr. Keith Tokuhara',
    description: 'When can you swim after cataract surgery? Practical guidance on pools, hot tubs, ocean, and water exposure during recovery.',
    url: 'https://drtokuhara.com/insights/swimming-after-cataract-surgery',
  },
};

const faqItems = [
  {
    question: 'How long after cataract surgery can I swim in a pool?',
    answer: 'Most surgeons recommend waiting at least two weeks before swimming in a pool. I tell patients three weeks to be conservative. The incision is self-sealing but not fully healed in the first two weeks, and pool water contains bacteria and chemicals that increase infection risk.'
  },
  {
    question: 'Can I swim in the ocean after cataract surgery?',
    answer: 'Ocean swimming carries the same concerns as pool swimming: bacterial exposure through an incompletely healed incision. Wait at least three weeks, and avoid submerging your head or getting ocean water directly in your eyes for the first month.'
  },
  {
    question: 'What about hot tubs after cataract surgery?',
    answer: 'Hot tubs are higher risk than pools because the warm water creates an ideal environment for bacterial growth. I recommend waiting at least three weeks, and some surgeons advise waiting four weeks before using a hot tub after cataract surgery.'
  },
  {
    question: 'Can I shower after cataract surgery?',
    answer: 'Yes, you can shower the day after surgery. Keep your eyes closed, avoid getting soap or shampoo directly in your eyes, and do not let the shower spray hit your face directly for the first week. Showering is fine; submerging your head underwater is not.'
  },
  {
    question: 'What happens if I accidentally get water in my eye after cataract surgery?',
    answer: 'A small amount of water splashing in your eye during a shower is usually not a problem. The concern is prolonged exposure to contaminated water (pools, hot tubs, lakes) that could introduce bacteria through the healing incision. If you experience increased redness, pain, or vision changes after water exposure, contact your surgeon immediately.'
  },
  {
    question: 'Can I go to the beach after cataract surgery?',
    answer: 'You can go to the beach, but avoid swimming, avoid getting sand in your eyes, and wear sunglasses for UV protection. The beach environment is fine; submerging your head in ocean water is not, at least for the first three weeks.'
  }
];

const jsonLd = [
  articleSchema({
    title: 'Can You Swim After Cataract Surgery?',
    description: 'When can you swim after cataract surgery? Practical advice on pools, hot tubs, ocean swimming, and water exposure during cataract surgery recovery.',
    slug: '/insights/swimming-after-cataract-surgery',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Swimming After Cataract Surgery', href: '/insights/swimming-after-cataract-surgery' },
  ]),
  faqSchema(faqItems),
];

export default function InsightSwimmingAfterSurgery() {
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
          <span className="insight-hero-cluster">Surgery & Recovery</span>
          <h1>Can You Swim After <strong>Cataract Surgery?</strong></h1>
          <p className="page-hero-sub">Recovery timeline for pools, hot tubs, ocean swimming, and water exposure.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            This question comes up most often in the summer. Patients planning vacations, patients with pools in their backyard, patients who swim for exercise. They want to know: when can I get back in the water?
          </p>
          <p>
            The short answer is three weeks for most people. The longer answer involves understanding why water exposure matters, what risks you are avoiding, and how to think about timelines that balance safety with getting back to your life.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why Water <strong>Matters</strong></h2>
          <p>
            Cataract surgery involves creating small incisions in the cornea to access and remove the clouded lens. These incisions are self-sealing, meaning they close without stitches in most cases. But self-sealing is not the same as fully healed.
          </p>
          <p>
            In the first two weeks after surgery, the incision is secure enough for normal daily activities but not watertight against prolonged exposure to contaminated water. Pools, hot tubs, lakes, and oceans all contain bacteria that could potentially enter the eye through an incompletely healed incision and cause infection.
          </p>
          <p>
            Endophthalmitis, the most serious post-operative infection, is rare (less than 0.1% of cases), but when it happens, it can threaten vision. The goal of water restrictions after cataract surgery is not to eliminate all risk (that is impossible), but to avoid unnecessary exposure during the period when the eye is most vulnerable.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-wide">
          <ScrollReveal direction="up">
            <Image
              src="/media/tool-image-generation/swimming-after-cataract-surgery---5b7d42b0-f571-4e22-a54a-85414762b1a4.png"
              alt="Swimming after cataract surgery illustration"
              width={1200}
              height={675}
              className="content-image"
              style={{marginTop: '32px', marginBottom: '32px'}}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Three-Week <strong>Guideline</strong></h2>
          <p>
            Most cataract surgeons recommend waiting at least two weeks before swimming. I tell patients three weeks to be conservative. By three weeks, the incision is fully epithelialized (the surface layer has regrown), and the risk of bacterial entry is significantly lower.
          </p>
          <p>
            Some surgeons say two weeks is fine. Some say four weeks for hot tubs. The variation reflects the fact that there is no single moment when the eye transitions from vulnerable to invulnerable. Healing is a gradual process, and guidelines are meant to capture the point at which risk becomes acceptably low.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Three weeks is not a magic number. It is a reasonable balance between caution and practicality, based on how incisions heal and how infections occur.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Pools, Hot Tubs, Ocean: What Is <strong>Different?</strong></h2>
          <p>
            Not all water carries the same risk. Here is how I counsel patients:
          </p>
          <h3>Swimming Pools</h3>
          <p>
            Chlorinated pools are lower risk than lakes or oceans, but chlorine does not eliminate all bacteria, and some pathogens (like Pseudomonas) thrive in pool environments. Wait three weeks before swimming, and avoid opening your eyes underwater for the first month.
          </p>
          <h3>Hot Tubs</h3>
          <p>
            Hot tubs are higher risk because the warm water (typically 100-104°F) creates ideal conditions for bacterial growth. Many cases of post-surgical infection linked to water exposure involve hot tubs. Wait at least three weeks, and consider waiting four if you are risk-averse.
          </p>
          <h3>Ocean Swimming</h3>
          <p>
            Ocean water contains bacteria, viruses, and other organisms. The salt content does not sterilize the water. Wait three weeks before ocean swimming, and avoid submerging your head or getting waves in your face for the first month.
          </p>
          <h3>Lakes and Rivers</h3>
          <p>
            Natural bodies of water carry the highest infection risk due to organic matter, algae, and bacterial load. If you swim in lakes or rivers regularly, wait at least three weeks and consider discussing your specific situation with your surgeon.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What About <strong>Showers?</strong></h2>
          <p>
            Showers are fine starting the day after surgery. The key is to avoid getting soap, shampoo, or direct water spray in your eyes for the first week. Keep your eyes closed, let the water run over your face gently, and do not submerge your head.
          </p>
          <p>
            Some patients wear a protective eye shield in the shower for the first few days. That is fine if it makes you more comfortable, but it is not required as long as you are careful.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What If I Accidentally Get Water in My <strong>Eye?</strong></h2>
          <p>
            A splash of water during a shower is not a disaster. The concern is prolonged exposure to contaminated water. If you accidentally get pool water, ocean water, or hot tub water in your eye within the first three weeks after surgery, rinse your eye with clean water or sterile saline if you have it, and monitor for signs of infection: increased redness, pain, discharge, or vision changes.
          </p>
          <p>
            If any of those symptoms appear, contact your surgeon immediately. Early-caught infections are almost always treatable. Delayed treatment is where problems occur.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Planning Around <strong>Surgery</strong></h2>
          <p>
            If you have a beach vacation, a cruise, or a summer trip planned, the timing of your cataract surgery matters. Ideally, schedule surgery at least three weeks before any planned swimming or water activities. If that is not possible, you can still go on the trip but plan to stay out of the water.
          </p>
          <p>
            Some patients choose to delay surgery until after a major trip. That is a reasonable decision if the cataracts are not significantly affecting your quality of life. But do not delay indefinitely. Cataracts do not improve on their own, and waiting too long can make the surgery more difficult and increase the risk of complications.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Bottom Line</strong></h2>
          <p>
            Wait three weeks before swimming after cataract surgery. Longer for hot tubs if you want to be extra cautious. Showers are fine starting the next day. If you accidentally get water in your eye, do not panic, but watch for signs of infection and contact your surgeon if anything changes.
          </p>
          <p>
            These restrictions are temporary. Most patients resume all normal activities, including swimming, by one month after surgery. The brief pause is worth it to protect the investment you just made in your vision.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow text-center">
          <div className="section-divider" style={{margin: '48px auto'}} />
          <p><strong>Questions about recovery after cataract surgery?</strong></p>
          <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
