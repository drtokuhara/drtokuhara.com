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
  title: 'Your First Week After Cataract Surgery: Day by Day - Dr. Keith Tokuhara',
  description: 'A day-by-day guide to your first week after cataract surgery. What is normal, what is not, when to call your surgeon, and how to take care of your eye during recovery.',
  alternates: { canonical: '/insights/first-week-after-cataract-surgery' },
  openGraph: {
    title: 'Your First Week After Cataract Surgery: Day by Day | Dr. Keith Tokuhara',
    description: 'An honest, day-by-day recovery guide from a cataract surgeon who has performed over 20,000 procedures.',
    url: 'https://drtokuhara.com/insights/first-week-after-cataract-surgery',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it normal to have blurry vision the first few days after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Some blurriness, haziness, or fluctuation in the first few days is completely normal. Your eye is healing, the cornea may have mild swelling, and the drops can temporarily blur vision. Most patients see significant clearing by days 3 to 5.',
      },
    },
    {
      '@type': 'Question',
      name: 'When can I drive after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients can resume driving within a few days after surgery, once they feel their vision is clear and comfortable enough. Your surgeon will confirm at your follow-up visit. Do not drive on surgery day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I shower after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can shower the day after surgery. Keep your eyes closed when water runs over your face and avoid getting soapy water directly in the eye. Do not rub the eye while washing your face.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I use eye drops after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most post-operative drop schedules last about four weeks, with the frequency tapering over time. Your surgeon will provide a specific schedule. Follow it carefully, even if your eye feels fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I call my surgeon after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact your surgeon if you experience sudden vision loss, increasing pain that is not relieved by over-the-counter medication, significant redness that worsens after the first two days, new flashes of light, a sudden increase in floaters, or any discharge from the eye.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Your First Week After Cataract Surgery: Day by Day',
    description: 'A day-by-day guide to recovery during your first week after cataract surgery, including what is normal, when to call, and activity restrictions.',
    slug: '/insights/first-week-after-cataract-surgery',
    datePublished: '2026-05-11',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'First Week After Cataract Surgery', href: '/insights/first-week-after-cataract-surgery' },
  ]),
  faqSchema,
];

export default function InsightFirstWeek() {
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
          <span className="insight-hero-cluster">Recovery</span>
          <h1>Your First Week After Cataract Surgery: <strong>Day by Day</strong></h1>
          <p className="page-hero-sub">What to expect, what is normal, and when to call. From a surgeon who has guided thousands of patients through this exact week.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            The surgery is over. It took less than 15 minutes. You are home with a shield over your eye and a bag of drops on the counter. Now what?
          </p>
          <p>
            This is the part patients ask about most, because the procedure happens in a controlled environment with a surgeon guiding every step. Recovery happens at home, on your own, and every unfamiliar sensation feels like a question mark. So here is what to expect, day by day, from someone who has walked over 20,000 patients through this exact week.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Day 0: <strong>Surgery Day</strong></h2>
          <p>
            You will leave the surgery center with a clear plastic shield taped over the operated eye. Your vision through that eye will be blurry, like looking through a fogged window. This is normal. The pupil is still dilated, there is some residual gel and medication in the eye, and the cornea may have mild swelling from the procedure.
          </p>
          <p>
            Most patients feel surprisingly good. The sedative is wearing off, and the numbing drops are still partially working. You might feel a mild scratchiness, like a grain of sand in the eye. Some patients feel nothing at all.
          </p>
          <p>
            <strong>What to do:</strong> Rest. No cooking over a hot stove, no bending over to pick things up, no heavy lifting. Wear the shield. Do not rub the eye. Take it easy. You can eat normally, watch television, and walk around the house. Your drop schedule starts that evening or the next morning, depending on your surgeon's instructions.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The most important instruction for today: leave the eye alone. Do not lift the shield to peek. Do not try to clean around it. It will look and feel different tomorrow.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Day 1: <strong>First Follow-Up</strong></h2>
          <p>
            You will come in for your first post-operative visit, usually the morning after surgery. I check the eye, measure the pressure, and look at the incision and the new lens. This visit is quick but important.
          </p>
          <p>
            Most patients walk in and say something like, "I can already tell it's better." And they are right. Even through some residual blur, the difference between the cataract eye and the operated eye is often obvious. Colors look more vivid. Things look brighter. The foggy film is gone.
          </p>
          <p>
            The eye may be mildly red. It may still feel scratchy. Both are normal. Your vision will fluctuate throughout the day as drops are placed and the eye adjusts. Do not judge your final result by Day 1. You are seeing through a healing eye, not a finished one.
          </p>
          <p>
            <strong>Your drops:</strong> You will be using a combination of anti-inflammatory and antibiotic drops. The schedule typically involves drops several times a day, spaced apart. Write it down or set phone alarms. Consistency matters.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Days 2 to 3: <strong>Clearing</strong></h2>
          <p>
            This is when things start to feel real. The scratchiness fades. The redness starts to decrease. And the vision sharpens noticeably compared to Day 1. Most patients describe it as the fog lifting gradually.
          </p>
          <p>
            You can shower, but keep soapy water out of the eye. You can watch TV, read, use your phone. Light activity is fine. You should still avoid bending at the waist (bend at the knees instead), lifting anything heavier than about 10 to 15 pounds, and any activity that could result in something hitting or pressing on the eye.
          </p>
          <p>
            Some patients notice mild light sensitivity during these days, especially outdoors. Sunglasses help. You may also notice that the operated eye sees colors differently than the other eye. Things may look slightly blue-tinted or unusually bright. This is not a problem. Your old lens had a yellowish tint from the cataract. Now that it is gone, you are seeing true color temperature for the first time in years.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Patients often tell me the world looks HD. That is not the new lens being better than normal. That is normal, without a cataract in the way."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Days 4 to 5: <strong>Settling In</strong></h2>
          <p>
            By now, most of the acute recovery is behind you. The eye feels more natural. The drops are becoming routine. Vision is clearer and more stable, though mild fluctuations can still happen, especially after putting in drops.
          </p>
          <p>
            Many patients resume driving during this window, as long as they feel comfortable and their vision meets the standard. If you are unsure, wait until your next follow-up and ask.
          </p>
          <p>
            You may still be wearing the shield at night. This is to prevent unconscious rubbing during sleep. Keep using it for the full duration your surgeon recommends, usually about one week.
          </p>
          <p>
            <strong>A common question at this point:</strong> "My other eye seems worse now." That is perception, not reality. Your operated eye is seeing more clearly, so the contrast makes the cataract in the other eye more obvious. This is actually a good sign. It means the surgery worked.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Days 6 to 7: <strong>The New Normal</strong></h2>
          <p>
            By the end of the first week, most patients feel close to normal. The eye is comfortable. Vision is clear or nearly clear. The drop schedule is tapering. Life resumes.
          </p>
          <p>
            You are still healing. The full stabilization of your vision takes several weeks, and your drop schedule will continue for about a month. But functionally, most patients are back to their routines by the end of Week 1.
          </p>
          <p>
            <strong>Still off-limits:</strong> Swimming, hot tubs, dusty environments, eye makeup, and any activity with a risk of impact to the eye. These restrictions typically lift at the two-week or one-month mark, depending on healing.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Is <strong>Normal</strong></h2>
          <p>
            Patients call me about things that are perfectly normal because nobody told them to expect it. Here is what is typical during the first week and does not require a phone call:
          </p>
          <p>
            Mild scratchiness or gritty feeling. Slight redness, especially in the white of the eye near the incision. Tearing or watery eye. Mild light sensitivity. Occasional blurriness that comes and goes, especially after drops. A feeling that the eyelid is slightly swollen. Seeing a small crescent of light at the edge of your vision (this is the lens edge and usually fades as the brain adapts).
          </p>
          <p>
            These are all signs of a healing eye, not a problem.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When to <strong>Call</strong></h2>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Call your surgeon's office right away if you experience any of the following: sudden decrease in vision (not gradual blur after drops, but a clear step down), increasing pain that does not improve with over-the-counter medication, significant worsening redness after the first two days, new flashes of light or a sudden shower of new floaters, any discharge or pus from the eye.</strong></p>
          </div></BlurReveal>

          <p>
            These symptoms are uncommon, but they can indicate conditions like infection or retinal issues that need prompt attention. Do not wait for your next scheduled visit. Call immediately.
          </p>
          <p>
            I tell every patient: I would rather get a phone call that turns out to be nothing than miss something that needed early treatment. There is no such thing as a silly question during your first week of recovery.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Drops <strong>Matter</strong></h2>
          <p>
            Your post-operative eye drops are not optional. They prevent infection and control inflammation during the critical healing window. Most patients use two to three different drops, each on its own schedule, for about four weeks.
          </p>
          <p>
            Space your drops about five minutes apart so each one has time to absorb. If you miss a dose, put it in as soon as you remember and continue on schedule. Do not double up. If the drops sting briefly, that is normal. If you are having trouble with the schedule, ask us. We can simplify it.
          </p>
          <p>
            The most common issue I see in the first week is not a complication. It is patients stopping their drops early because they feel fine. Your eye feels fine because the drops are working. Keep using them for the full course.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The first week after cataract surgery is not dramatic for most patients. It is surprisingly ordinary. That is the point. Modern cataract surgery is designed to get you back to your life quickly, with minimal disruption. The patients who do best are the ones who follow the drop schedule, avoid rubbing the eye, and give themselves permission to take it easy for a few days. You just had surgery on one of the most important organs in your body. A quiet week is a small investment in a lifetime of clear vision.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/cataract-surgery-step-by-step" className="related-card">
              <h3>Cataract Surgery Step by Step</h3>
              <p>What actually happens during the procedure, from pre-op to recovery.</p>
            </Link>
            <Link href="/insights/is-cataract-surgery-painful" className="related-card">
              <h3>Is Cataract Surgery Painful?</h3>
              <p>The honest answer about what you feel during surgery.</p>
            </Link>
            <Link href="/cataract-recovery" className="related-card">
              <h3>Cataract Surgery Recovery</h3>
              <p>The full recovery timeline and what to expect beyond the first week.</p>
            </Link>
            <Link href="/my-cataract-drops" className="related-card">
              <h3>My Cataract Drops</h3>
              <p>Understanding your post-operative drop schedule.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
