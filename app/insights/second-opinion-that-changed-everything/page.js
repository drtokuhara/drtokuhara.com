import Link from 'next/link';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'A Cataract Surgery Second Opinion That Changed the Conversation - Dr. Keith Tokuhara',
  description: 'A patient came in a year after cataract surgery with worsening vision and no answers. Her second opinion revealed a retinal detachment that had gone undiagnosed. A real case about why timing, communication, and follow-up matter.',
  keywords: ['cataract surgery second opinion', 'retinal detachment after cataract surgery', 'posterior capsule rupture complications', 'cataract surgery complications', 'second opinion ophthalmology', 'vision loss after cataract surgery'],
  alternates: { canonical: '/insights/second-opinion-that-changed-everything' },
  openGraph: {
    title: 'A Cataract Surgery Second Opinion That Changed the Conversation | Dr. Keith Tokuhara',
    description: 'A year of worsening vision after cataract surgery. A second opinion that finally revealed the real problem. Why timing and communication matter in eye care.',
    url: 'https://drtokuhara.com/insights/second-opinion-that-changed-everything',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Cataract Surgery Second Opinion That Changed the Conversation',
    description: 'When cataract surgery does not go as planned, seeking a second opinion is not disloyalty. It can save your vision.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a retinal detachment happen after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, although it is uncommon. Cataract surgery slightly increases the long-term risk of retinal detachment, particularly in patients who experienced surgical complications such as posterior capsule rupture. Most patients who have uncomplicated cataract surgery will never develop a retinal detachment, but those with complications may benefit from closer monitoring and should be aware of warning signs like sudden flashes, new floaters, or a shadow in the peripheral vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are signs of a serious problem after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warning signs include persistent or worsening blurred vision, sudden flashes of light, a significant increase in floaters, a curtain-like shadow in the vision, severe pain, or redness that does not improve. Most postoperative symptoms are temporary and manageable, but these specific symptoms deserve prompt evaluation by your eye surgeon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a second opinion if my vision is worse after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If your vision has not improved or has worsened after cataract surgery, and especially if you feel your concerns are not being adequately addressed, seeking a second opinion is completely reasonable. A fresh evaluation may identify treatable conditions that were missed or underappreciated. Seeking a second opinion is not disloyal or confrontational. It is responsible patient care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is posterior capsule rupture during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Posterior capsule rupture is a known complication of cataract surgery where the thin membrane that holds the natural lens in place tears during the procedure. It occurs in a small percentage of cases and can usually be managed during surgery. However, it may change the type and placement of the lens implant and can increase the long-term risk of certain complications, including retinal detachment. Patients who experience this complication typically need closer follow-up monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do some patients avoid going back to their surgeon after a complication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Patients who experience a poor outcome after surgery sometimes feel embarrassed, discouraged, or afraid of hearing more bad news. Some lose trust in the process altogether. Unfortunately, avoiding follow-up can allow treatable conditions to worsen. If you are uncomfortable returning to your original surgeon, seeking care from a different ophthalmologist is a valid and often important step.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'A Cataract Surgery Second Opinion That Changed the Conversation',
    description: 'A patient came in a year after cataract surgery with worsening vision and no answers. Her second opinion revealed a retinal detachment that had gone undiagnosed.',
    slug: '/insights/second-opinion-that-changed-everything',
    datePublished: '2026-05-24',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'A Second Opinion That Changed the Conversation', href: '/insights/second-opinion-that-changed-everything' },
  ]),
  faqSchema,
];

export default function SecondOpinionChangedEverythingPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground
        src="/media/ambient-mountain-sierra-alpine.mp4"
        poster="/media/hero-second-opinion-changed.jpg"
        fallbackColor="#0a1628"
        overlayOpacity={0.7}
        overlayColor="10, 22, 40"
        className="page-hero page-hero-image"
        style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}
        bottomOverlay={<AudioNarration src="/audio/narrations/second-opinion-that-changed-everything.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <p className="page-hero-eyebrow">Clinical Insight</p>
            <h1 className="page-hero-title">A Second Opinion That Changed the Conversation</h1>
            <p className="page-hero-sub">When a year of worsening vision finally got the answer it deserved.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <article className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 24, 2026" />

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Most people think cataract surgery is a simple &ldquo;lens problem.&rdquo; In many cases, it is. Vision becomes cloudy, the cataract is removed, and patients often see dramatically better afterward. But every so often, a patient walks into the office with a story that reminds us how important careful follow-up, communication, and trust really are.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Patient</h2>
            <p className="prose">
              A 68-year-old woman came to my office for a second opinion after cataract surgery performed elsewhere. She told me her first eye surgery had gone reasonably well, but after the second eye operation, her vision became much worse. She described constant blur, discomfort, and frustration that never improved despite faithfully using the prescribed eye drops.
            </p>
            <p className="prose" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--midnight)' }}>
              An entire year had passed.
            </p>
            <p className="prose">
              What struck me most during that visit was not just her vision loss. It was the emotional exhaustion behind it. She had become afraid to return to the original surgeon because she felt discouraged and hopeless. She worried that maybe nothing more could be done. Like many patients in difficult medical situations, she had slowly started adapting her life around poor vision instead of asking whether something more serious might be happening.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What the Examination Revealed</h2>
            <p className="prose">
              Her right eye measured 20/50 vision and appeared relatively stable. The intraocular lens implant was well positioned, and the retina and optic nerve looked healthy.
            </p>
            <p className="prose">
              The left eye was very different.
            </p>
          </ScrollReveal>

          <div style={{margin: '40px 0'}}>
            <img src="/media/dr-t-slit-lamp-patient-view.jpg" alt="Dr. Tokuhara examining patient at slit lamp" style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal once={true}>
            <div style={{ background: 'var(--sand-light, #f8f5f0)', padding: '32px', borderRadius: '12px', margin: '32px 0', borderLeft: '4px solid var(--oasis)' }}>
              <p className="prose" style={{ margin: 0 }}>
                Examination revealed a three-piece intraocular lens placed in the sulcus, indicating there had likely been a complication during surgery involving the posterior capsule. Further examination showed evidence of a prior posterior capsule rupture along with a chronic bullous retinal detachment involving the macula and an associated macular hole.
              </p>
            </div>
          </BlurReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              In simpler terms, the retina in the back of the eye had detached and remained detached long enough that permanent visual damage had already occurred.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Difficult Conversation</h2>
            <p className="prose">
              I explained to her that the cataract itself was no longer the main issue. The poor vision was coming from the retinal detachment. Unfortunately, chronic retinal detachments often carry a poor visual prognosis if they are not repaired quickly. Once the central retina, known as the macula, has been detached for an extended period of time, vision may never fully recover even if surgery successfully reattaches the retina.
            </p>

            <div style={{margin: '40px 0'}}>
              <img src="/media/honest-consultation-trust.png" alt="Honest medical consultation building patient trust" style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
            </div>

            <p className="prose">
              That was the difficult part of the conversation.
            </p>
            <p className="prose">
              The hopeful part was that we could still work to save the eye itself and prevent further damage.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Outcome</h2>
            <p className="prose">
              She was referred urgently to a retina surgeon, who successfully repaired the retinal detachment. Two years later, her left eye still has limited vision, but the eye remains stable and comfortable. Her right eye corrects to 20/20 with glasses, allowing her to maintain independence and continue daily activities.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Medical Lesson</h2>
            <p className="prose">
              Complications such as posterior capsule rupture can increase the long-term risk of retinal problems after cataract surgery. That does not mean every patient with a surgical complication will develop a retinal detachment. Most do not. But it does mean these patients often require closer postoperative monitoring and careful communication about warning signs such as worsening vision, flashes, floaters, or a curtain-like shadow in the vision.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Emotional Lesson</h2>
            <p className="prose">
              This case also highlights something physicians sometimes underestimate: patients may avoid returning after a bad outcome because they feel embarrassed, discouraged, angry, or afraid of hearing more bad news. Some quietly lose trust in the process altogether. Unfortunately, delaying evaluation can sometimes allow treatable conditions to become permanent ones.
            </p>

            <div style={{margin: '40px 0'}}>
              <img src="/media/complex-cases-patient-hope.jpg" alt="Patient consultation bringing hope in complex cases" style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
            </div>

            <p className="prose">
              One of the most important things patients should understand is this: seeking a second opinion is not disloyal, confrontational, or disrespectful. Medicine is complicated. Complications happen even in excellent hands. Good doctors understand that patients sometimes need reassurance, another perspective, or simply a fresh set of eyes on a difficult situation.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A Lesson About Time</h2>
            <p className="prose">
              In ophthalmology, timing matters enormously. Certain eye conditions are unforgiving. A retinal detachment does not pause while someone waits to &ldquo;see if it gets better.&rdquo; The body often gives us windows of opportunity, but those windows are not always permanent. Early evaluation can sometimes mean the difference between restoring vision and merely preserving what remains.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Resilience</h2>
            <p className="prose">
              Even though this patient never regained full vision in the left eye, she regained stability, understanding, and some peace of mind. She finally knew why her vision had declined. She received treatment that preserved the eye, and she was able to move forward instead of remaining trapped in uncertainty.
            </p>
          </ScrollReveal>

          <BlurReveal once={true}>
            <div style={{ background: 'var(--sand-light, #f8f5f0)', padding: '32px', borderRadius: '12px', margin: '40px 0', borderLeft: '4px solid var(--oasis)' }}>
              <p className="prose" style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                For patients recovering from cataract surgery, the message is simple: if something does not feel right, speak up. Persistent pain, worsening blur, flashes of light, new floaters, or major changes in vision deserve prompt attention. Most postoperative symptoms turn out to be manageable and temporary, but occasionally they signal something more serious. And when needed, a second opinion can make all the difference.
              </p>
            </div>
          </BlurReveal>

          <ScrollReveal direction="up" once={true}>
            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e0d8' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Related Reading</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><Link href="/insights/when-cataract-surgery-goes-wrong" className="lux-text-link">When Cataract Surgery Goes Wrong</Link></li>
                <li><Link href="/insights/second-opinion-cataract-surgery" className="lux-text-link">Second Opinion on Cataract Surgery: When and Why</Link></li>
                <li><Link href="/when-cataract-surgery-doesnt-go-as-planned" className="lux-text-link">When Cataract Surgery Doesn&rsquo;t Go as Planned</Link></li>
                <li><Link href="/cataract-surgery-complications" className="lux-text-link">Cataract Surgery Complications</Link></li>
                <li><Link href="/insights/how-to-choose-a-cataract-surgeon" className="lux-text-link">How to Choose a Cataract Surgeon</Link></li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
