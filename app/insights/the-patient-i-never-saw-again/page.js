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
  title: 'The Patient I Never Saw Again - Dr. Keith Tokuhara',
  description: 'A homeless man with count-fingers vision had cataract surgery and woke up seeing 20/20. Then he never came back. Twenty years later, Dr. Tokuhara still thinks about what happened next.',
  keywords: ['cataract surgery life changing', 'severe cataracts vision loss', 'cataract surgery story', 'vision restoration', 'ophthalmologist patient stories'],
  alternates: { canonical: '/insights/the-patient-i-never-saw-again' },
  openGraph: {
    title: 'The Patient I Never Saw Again | Dr. Keith Tokuhara',
    description: 'His vision went from count fingers to 20/20 overnight. Then he disappeared. A surgeon reflects on the patient whose story he never got to finish reading.',
    url: 'https://drtokuhara.com/insights/the-patient-i-never-saw-again',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Patient I Never Saw Again',
    description: 'Twenty years ago, a homeless man saw clearly for the first time in eight years. Then he was gone. Some patients leave behind questions that never resolve.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can cataract surgery restore vision from near blindness?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In cases of severe or advanced cataracts where vision has declined to count fingers or worse, cataract surgery can often restore vision dramatically, sometimes to 20/20 or near that level. The outcome depends on the health of the rest of the eye, including the retina and optic nerve. Some of the most dramatic visual improvements in ophthalmology come from removing very dense cataracts.' } },
    { '@type': 'Question', name: 'How quickly does vision improve after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Many patients notice a significant improvement in vision within hours to one day after surgery. In cases of very dense cataracts, the improvement can be especially dramatic. Vision typically continues to stabilize and sharpen over the first few weeks as the eye heals.' } },
    { '@type': 'Question', name: 'What happens if you only have cataract surgery on one eye?', acceptedAnswer: { '@type': 'Answer', text: 'Having surgery on only one eye is common, especially when one cataract is more advanced than the other. Some patients experience an imbalance between the eyes called anisometropia, which can cause discomfort or difficulty with depth perception. Most surgeons recommend addressing the second eye when it begins to affect vision or comfort, but the decision is always the patient\'s.' } },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'The Patient I Never Saw Again',
    description: 'A homeless man with count-fingers vision had cataract surgery and saw 20/20 overnight. Then he disappeared. A reflection on sight, survival, and the chapters we never get to read.',
    slug: '/insights/the-patient-i-never-saw-again',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Patient Stories', href: '/insights' },
    { name: 'The Patient I Never Saw Again', href: '/insights/the-patient-i-never-saw-again' },
  ]),
  faqSchema,
];

export default function InsightPatientNeverSawAgain() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-night-sky.mp4"
        overlayOpacity={0.65}
        overlayColor="0, 15, 25"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Real Patient Stories</span>
          <h1>The Patient I <strong>Never Saw Again</strong></h1>
          <p className="page-hero-sub">His vision went from count fingers to 20/20 overnight. Then he disappeared. Twenty years later, I still think about what happened next.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            This story took place nearly twenty years ago.
          </p>
          <p>
            I have performed thousands of cataract surgeries since then. I have met patients from every walk of life. Most memories fade with time, replaced by the next clinic day, the next surgery, the next patient.
          </p>
          <p>
            Yet every so often, I find myself thinking about one man.
          </p>
          <p>
            I do not know where he is today.
          </p>
          <p>
            In fact, I never saw him again after those first few postoperative visits.
          </p>
          <p>
            But for some reason, his story has stayed with me.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Count <strong>Fingers</strong></h2>
          <p>
            When I first met him, he had been living with severe cataracts for years. His vision had deteriorated to the point that he could only count fingers. He was effectively blind.
          </p>
          <p>
            He was also homeless.
          </p>
          <p>
            At every preoperative visit, he was accompanied by his girlfriend. She helped him get where he needed to go and made sure he arrived safely to his appointments. Together, they navigated a world that he could barely see.
          </p>
          <p>
            Eventually, we scheduled cataract surgery.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Smile</strong></h2>
          <p>
            The next day he returned to the office.
          </p>
          <p>
            I will never forget the smile.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>His vision had improved from count fingers to 20/20 overnight.</strong></p>
          </div></BlurReveal>

          <p>
            As cataract surgeons, we see dramatic improvements all the time. But every now and then, a patient reminds you just how profound sight really is.
          </p>
          <p>
            For the first time in years, he could see faces. He could see signs. He could see details. He could see the world around him clearly again.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Disagreement</strong></h2>
          <p>
            A week later he returned to the office.
          </p>
          <p>
            The excitement had worn off.
          </p>
          <p>
            He was upset because I would not sign paperwork stating that he was legally blind. I explained that with 20/20 vision in his operated eye, he no longer met the criteria. He disagreed. He still had a dense cataract in the other eye and felt that should count.
          </p>
          <p>
            We discussed it at length, but neither of us changed our position.
          </p>
          <p>
            He never returned to have surgery on the second eye.
          </p>
          <p>
            And I never saw him again.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Twenty Years <strong>Later</strong></h2>
          <p>
            At the time, I remember feeling frustrated by how our last conversation ended.
          </p>
          <p>
            But twenty years has a way of changing how you view things.
          </p>
          <p>
            Looking back, I understand something I did not fully appreciate at the time. For a man without a home, that legal blindness certification may have been more than a document. It may have been connected to disability benefits, housing support, a safety net that his new 20/20 vision suddenly made him ineligible for. I gave him his sight back. He may have felt I was taking something else away.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>Now, when I think back on that patient, I do not remember the disagreement. I remember the smile.</p>
          </div></BlurReveal>

          <p>
            I remember the look on his face when he realized he could see again.
          </p>
          <p>
            And I find myself wondering what happened next.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Next <strong>Chapter</strong></h2>
          <p>
            For eight years, blindness had shaped nearly every part of his life. His routines, his relationships, his dependence on others, and his expectations for the future had all been built around that reality.
          </p>
          <p>
            Then, in a matter of minutes, that reality changed.
          </p>
          <p>
            Not just his eyesight. His possibilities.
          </p>
          <p>
            Did he find housing? Did he reconnect with people he had lost touch with? Did he eventually decide to have surgery on the second eye?
          </p>
          <p>
            I honestly do not know.
          </p>
          <p>
            As physicians, we rarely get to read the final chapter. We meet patients at a particular moment in their lives. We do our best to help them. Then they continue on their own path.
          </p>
          <p>
            Most of the time, that is enough.
          </p>
          <p>
            But every now and then, a patient leaves behind a question that stays with you.
          </p>
          <p>
            This man left me with one that has lingered for nearly twenty years.
          </p>
          <p>
            <em>What became possible once he could see again?</em>
          </p>
          <p>
            I may never know the answer.
          </p>
          <p>
            But perhaps that is why I still think about him.
          </p>
          <p>
            The next chapter belonged to him.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00313d 0%, #004d5c 100%)', color: '#fff'}}>
        <div className="container content-narrow" style={{textAlign: 'center', padding: '48px 0'}}>
          <h2 style={{fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '12px', fontFamily: 'var(--serif)'}}>Every Patient Has a <strong>Story</strong></h2>
          <p style={{color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6}}>If you or someone you love is living with vision loss from cataracts, the first step is a conversation.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">More <strong>Stories</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/two-in-the-morning" className="related-card">
              <h3>Two in the Morning</h3>
              <p>She nearly cancelled surgery because of a 2 AM Google search. A four-minute phone call changed everything.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>His first visit lasted 70 minutes. Three other surgeons had given him ten.</p>
            </Link>
            <Link href="/insights/permission-to-see-again" className="related-card">
              <h3>Permission to See Again</h3>
              <p>Some patients need more than a new lens. They need permission to believe it will work.</p>
            </Link>
            <Link href="/insights/the-bicycle-rider-and-the-binoculars" className="related-card">
              <h3>The Bicycle Rider and the Binoculars</h3>
              <p>A cyclist described anisometropia better than any textbook.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>When other surgeons say nothing can be done, Dr. Tokuhara often finds a way forward.</p>
            </Link>
            <Link href="/insights/twenty-years-forward" className="related-card">
              <h3>Twenty Years Forward</h3>
              <p>She thought she just needed new glasses. The exam revealed cataracts and a life she had been watching through fog.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
