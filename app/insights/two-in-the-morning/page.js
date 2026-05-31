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
  title: 'Two in the Morning: When Pre-Surgery Anxiety Hits - Dr. Keith Tokuhara',
  description: 'A patient nearly cancelled cataract surgery at 2 AM because of a Google search about lens dislocation. A four-minute phone call with her surgeon changed everything. Why accessibility and physician-owned practice matter.',
  keywords: ['cataract surgery anxiety', 'pre-surgery fear', 'cancel cataract surgery', 'cataract surgery worry', 'fear of cataract surgery', 'lens dislocation cataract'],
  alternates: { canonical: '/insights/two-in-the-morning' },
  openGraph: {
    title: 'Two in the Morning | Dr. Keith Tokuhara',
    description: 'She asked fourteen questions at the consultation. The fifteenth came at 2 AM the night before surgery. A story about fear, Google, and the four minutes that changed everything.',
    url: 'https://drtokuhara.com/insights/two-in-the-morning',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two in the Morning',
    description: 'She asked fourteen questions at the consultation. The fifteenth came at 2 AM the night before surgery. A four-minute phone call changed everything.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it normal to feel anxious the night before cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pre-surgery anxiety is very common, even among patients who felt confident during their consultation. The anxiety often peaks the night before or the morning of surgery, frequently triggered by late-night internet searches. This is a normal response, and your surgical team expects and welcomes your questions at any point.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I cancel cataract surgery if I feel scared?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Before cancelling, call your surgeon\'s office and talk through your concerns. In most cases, fear before cataract surgery is driven by information that does not apply to your specific situation. A brief conversation with someone who knows your case can resolve the anxiety quickly. Many patients who consider cancelling go on to have excellent outcomes and are glad they did not postpone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a lens implant move or dislocate after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lens dislocation after cataract surgery is uncommon, occurring in a small percentage of cases. When it does happen, it is treatable with a secondary procedure. Risk factors include certain pre-existing eye conditions and prior eye surgery. Your surgeon takes steps during the procedure to minimize this risk, and if it ever occurs, it is a fixable problem.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Two in the Morning',
    description: 'A patient nearly cancelled cataract surgery at 2 AM because of a Google search. A four-minute phone call with her surgeon changed everything.',
    slug: '/insights/two-in-the-morning',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Two in the Morning', href: '/insights/two-in-the-morning' },
  ]),
  faqSchema,
];

export default function InsightTwoInTheMorning() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-night-sky.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">The Human Side</span>
          <h1>Two in the <strong>Morning</strong></h1>
          <p className="page-hero-sub">She had asked fourteen questions at the consultation. Written them on a yellow legal pad. But the fifteenth came at 2 AM the night before surgery.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            She had done everything right. Watched the YouTube videos. Read the patient guides. Asked her questions at the consultation, all fourteen of them. She had written them on a yellow legal pad and Dr. Tokuhara answered every one.
          </p>
          <p>
            She felt ready. She was scheduled for next Wednesday.
          </p>
          <p>
            Then Tuesday night happened.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">2:14 <strong>AM</strong></h2>
          <p>
            Wide awake. Her mind pulled up a question she had not asked. Something about what happens if the lens moves after surgery. She had read about it somewhere. A forum post, probably. Someone's cousin's neighbor.
          </p>
          <p>
            She picked up her phone. The search results were not reassuring. Words like "surgical revision" and "vitrectomy" and "rare but serious."
          </p>
          <p>
            By 2:45, she was convinced she should cancel.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Four <strong>Minutes</strong></h2>
          <p>
            At 7 AM, she called the office. The staff did not sound surprised. They get these calls. They put her through.
          </p>
          <p>
            Dr. Tokuhara got on the line. She apologized for calling so early with what was probably a stupid question. He told her there is no such thing.
          </p>
          <p>
            Then he explained. Lens dislocation is uncommon. When it does happen, it is fixable. He has done hundreds of those repairs, including cases referred from other surgeons. He walked her through what he does to minimize the risk during surgery and what the protocol looks like if it ever comes up.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Four minutes on the phone. The panic was gone.</strong></p>
          </div></BlurReveal>

          <p>
            She had her surgery Wednesday. The lens did not move. It never does, almost always.
          </p>
          <p>
            But what mattered was the four minutes.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/senior-couple-sunlit-bedroom.jpeg"
              alt="Couple in a sunlit bedroom, early morning light through windows"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why 2 AM <strong>Happens</strong></h2>
          <p>
            This is not unusual. Nearly every surgeon has patients who call the morning of surgery ready to cancel. The trigger is almost always Google.
          </p>
          <p>
            The problem is not the fear. Fear before eye surgery is rational. The problem is that at 2 AM, the information you find is not curated for your situation. It is written for the broadest possible audience, or worse, for the rarest possible outcome.
          </p>
          <p>
            A forum post about lens dislocation does not mention that the writer had a completely different eye condition. A medical article about vitrectomy does not specify that it applies to a complication rate of less than 1%.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The fear is specific. The information is not. That mismatch is what keeps patients up.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Part That <strong>Matters</strong></h2>
          <p>
            The outcome of her surgery was excellent. But that is not the point of this story.
          </p>
          <p>
            The point is that she called, and someone answered. Someone who knew her case, knew her measurements, knew her lens, and could speak to her specific situation in four minutes.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The only bad question is the one you take home with you."</p>
          </div></BlurReveal>

          <p>
            That is what physician-owned, independent practice makes possible. Not a call center. Not a message left for a rotating staff. The surgeon who planned her case, answering her question before she had time to spiral further.
          </p>
          <p>
            If you have a question at 2 AM, write it down. Call us at 7. We have heard it before, and we would rather answer it than have you cancel something that will change your life.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/five-questions-before-surgery" className="related-card">
              <h3>Five Questions Before Surgery</h3>
              <p>The questions worth asking before your cataract procedure.</p>
            </Link>
            <Link href="/insights/is-cataract-surgery-painful" className="related-card">
              <h3>Is Cataract Surgery Painful?</h3>
              <p>The honest answer about pain and what you actually feel during surgery.</p>
            </Link>
            <Link href="/patient-journey" className="related-card">
              <h3>Your Patient Journey</h3>
              <p>What to expect from consultation through recovery.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>When surgery does not go as planned, experience matters. Dr. Tokuhara handles the cases others refer out.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
