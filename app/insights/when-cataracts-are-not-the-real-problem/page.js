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
  title: 'When Cataracts Are Not the Real Problem - Dr. Keith Tokuhara',
  description: 'A patient seeking a second opinion for cataract surgery discovered glaucoma was the real concern. Why careful examination and the right sequence of treatment matter.',
  keywords: ['cataracts and glaucoma', 'do I need cataract surgery', 'cataract surgery second opinion glaucoma', 'glaucoma silent thief of sight', 'cataracts not the real problem'],
  alternates: { canonical: '/insights/when-cataracts-are-not-the-real-problem' },
  openGraph: {
    title: 'When Cataracts Are Not the Real Problem | Dr. Keith Tokuhara',
    description: 'A second opinion for cataract surgery revealed glaucoma requiring immediate attention. Sometimes the most obvious problem is not the most important one.',
    url: 'https://drtokuhara.com/insights/when-cataracts-are-not-the-real-problem',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When Cataracts Are Not the Real Problem',
    description: 'Sometimes the best surgical decision is realizing surgery is not the first step at all.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you have both cataracts and glaucoma at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, both are common age-related conditions and frequently occur together. Many patients develop both cataracts and glaucoma as they age. When both conditions are present, surgical planning often changes to address glaucoma risk alongside cataract removal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should cataract surgery be delayed if you have glaucoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In some cases, yes. When glaucoma is present but not yet fully evaluated, it is important to understand the severity of optic nerve damage before proceeding with cataract surgery. If the cataracts are not yet significantly affecting daily function, delaying surgery to first manage glaucoma properly may be the safer approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MIGS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimally invasive glaucoma surgery. When patients have both cataracts and glaucoma, surgeons can combine cataract removal with a small glaucoma procedure to help lower eye pressure and reduce long-term glaucoma risk. This combination approach can be more effective than treating each condition separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cataract surgery help with glaucoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In some patients, cataract surgery alone can modestly lower eye pressure. When combined with MIGS procedures, the pressure-lowering effect can be more significant. However, cataract surgery should never be performed solely to lower eye pressure without also considering the impact of the cataracts themselves on vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to question whether I really need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. If your vision is still functioning well and the cataracts are not significantly affecting your daily activities, it is reasonable to monitor rather than rush to surgery. The presence of a cataract does not automatically mean surgery is necessary. Surgery decisions should be individualized and connected to your symptoms and visual needs.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'When Cataracts Are Not the Real Problem',
    description: 'A patient seeking a second opinion for cataract surgery discovered glaucoma was the real concern. Why careful examination and the right sequence of treatment matter.',
    slug: '/insights/when-cataracts-are-not-the-real-problem',
    datePublished: '2026-05-24',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When Cataracts Are Not the Real Problem', href: '/insights/when-cataracts-are-not-the-real-problem' },
  ]),
  faqSchema,
];

export default function WhenCataractsAreNotTheRealProblemPage() {
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
        fallbackColor="#0a1628"
        overlayOpacity={0.7}
        overlayColor="10, 22, 40"
        className="page-hero page-hero-image"
        style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}
        bottomOverlay={<AudioNarration src="" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <p className="page-hero-eyebrow">Clinical Nuance / Trust & Authority</p>
            <h1 className="page-hero-title">When Cataracts Are Not the Real Problem</h1>
            <p className="page-hero-sub">Sometimes the most obvious problem is not the most important one.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <article className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 24, 2026" />

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              An 80-year-old woman came to my office for a second opinion after being told four months earlier that she needed cataract surgery by another surgeon. She had already seen another ophthalmology practice and left the visit feeling uneasy. What bothered her most was not necessarily the recommendation for surgery itself, but the feeling that her prior history of LASIK had not been carefully considered during the discussion.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              That feeling stayed with her.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              To many people outside medicine, this may seem like a small detail. But for patients, confidence matters. They want to feel heard. They want to know their doctor sees the whole picture, not just the cataract.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              So she decided to seek another opinion before moving forward.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              During her examination, her corrected vision measured 20/20 in the right eye and 20/30 in the left. She did indeed have moderate cataracts in both eyes, and signs of prior LASIK surgery were clearly visible on corneal examination.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              But something else immediately stood out.
            </p>
          </ScrollReveal>

          <BlurReveal once={true}>
            <div style={{ background: 'var(--sand-light, #f8f5f0)', padding: '32px', borderRadius: '12px', margin: '32px 0', borderLeft: '4px solid var(--oasis)' }}>
              <p className="prose" style={{ margin: 0 }}>
                Her optic nerves showed cupping with a cup-to-disc ratio of approximately 0.7 in both eyes. Her eye pressure was also elevated, measuring 30 in the right eye and 21 in the left.
              </p>
            </div>
          </BlurReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              At that point, the conversation shifted completely.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--midnight)' }}>
              The cataracts were not the most urgent issue.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              The larger concern was glaucoma.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Silent Thief</h2>
            <p className="prose">
              Glaucoma is often called the "silent thief of sight" because patients may lose peripheral vision slowly over time without noticing major symptoms early on. Unlike cataracts, which usually cause blurry or hazy vision that patients can see and describe, glaucoma can quietly damage the optic nerve before patients realize anything is wrong.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              In her case, the combination of elevated eye pressure and advanced optic nerve cupping strongly suggested underlying glaucoma that had not yet been fully evaluated.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              I explained to her that although cataract surgery may eventually become appropriate, it would be premature to focus on the cataracts without first understanding the health of the optic nerve and the severity of her glaucoma.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              That distinction matters tremendously.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">When Two Conditions Require Different Strategies</h2>
            <p className="prose">
              When patients have both cataracts and glaucoma, surgical planning often changes. Rather than performing cataract surgery alone, we frequently consider combining cataract surgery with minimally invasive glaucoma surgery, commonly called MIGS, to help lower eye pressure and reduce long-term glaucoma risk.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Equally important, her vision was still functioning quite well. At 20/20 and 20/30, she was not experiencing major daily limitations from the cataracts themselves. She was not struggling significantly with driving, reading, or routine activities. In medicine, the presence of a cataract alone does not automatically mean surgery is necessary. The decision should always connect back to how much the condition is truly affecting a patient's quality of life.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              That became the focus of our discussion.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Instead of rushing toward surgery, we arranged for a full glaucoma evaluation including additional testing to better understand the extent of optic nerve damage and determine the safest long-term treatment plan.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Value of Slowing Down</h2>
            <p className="prose">
              Cases like this highlight an important reality in ophthalmology: sometimes the most valuable decision a doctor can make is slowing down.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Modern medicine often moves quickly. Patients may feel pressure to "fix" anything visible on an exam, especially when surgery is involved. But good medical care is not about finding the fastest procedure. It is about identifying the true problem and treating the patient as a whole person.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Trusting Your Instincts</h2>
            <p className="prose">
              Psychologically, this patient's instincts were also important.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Patients sometimes worry they are being "difficult" if they question a recommendation or seek another opinion. In reality, uncertainty is part of being human. When a patient senses that something has not been fully addressed, that feeling deserves respect, not dismissal.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Interestingly, her decision to pause and seek another opinion may have protected her vision in the long run. Had the focus remained only on cataracts, the more dangerous issue, possible progressive glaucoma, could have continued silently in the background.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Bigger Picture</h2>
            <p className="prose">
              There is also a philosophical lesson here about clarity.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              People often think blurry vision comes only from cataracts because cataracts are visible and familiar. But not all vision loss comes from what clouds the eye. Sometimes the greater danger is damage occurring quietly behind the scenes.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Life works that way too.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              The most obvious problem is not always the most important one. Sometimes we become fixated on what is easiest to see while missing the deeper issue quietly causing long-term harm.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              In ophthalmology, that deeper issue can be glaucoma.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              That is why careful examination matters. That is why listening matters. And that is why second opinions can be valuable, especially when something does not feel completely right.
            </p>
          </ScrollReveal>

          <BlurReveal once={true}>
            <div style={{ background: 'var(--sand-light, #f8f5f0)', padding: '32px', borderRadius: '12px', margin: '40px 0', borderLeft: '4px solid var(--oasis)' }}>
              <p className="prose" style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                For patients, the takeaway is simple: cataract surgery should never feel rushed simply because a cataract exists. Surgery decisions should be individualized, thoughtful, and connected to your symptoms, visual needs, and overall eye health. And sometimes, the best surgical decision is realizing surgery is not the first step at all.
              </p>
            </div>
          </BlurReveal>

          <ScrollReveal direction="up" once={true}>
            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e0d8' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Related Reading</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><Link href="/insights/do-i-really-need-surgery" className="lux-text-link">Do I Really Need Cataract Surgery?</Link></li>
                <li><Link href="/insights/when-the-surgeon-says-wait" className="lux-text-link">When the Surgeon Says Wait</Link></li>
                <li><Link href="/insights/second-opinion-cataract-surgery" className="lux-text-link">Second Opinion on Cataract Surgery: When and Why</Link></li>
                <li><Link href="/insights/second-opinion-that-changed-everything" className="lux-text-link">A Second Opinion That Changed the Conversation</Link></li>
                <li><Link href="/glaucoma" className="lux-text-link">Glaucoma Care</Link></li>
                <li><Link href="/complex-cases/glaucoma-and-cataract" className="lux-text-link">Glaucoma and Cataract: Combined Treatment</Link></li>
                <li><Link href="/insights/how-to-choose-a-cataract-surgeon" className="lux-text-link">How to Choose a Cataract Surgeon</Link></li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
