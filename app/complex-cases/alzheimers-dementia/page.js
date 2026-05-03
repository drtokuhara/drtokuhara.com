import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';
import AuthorByline from '../../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Cataract Surgery for Patients with Alzheimer\'s or Dementia',
    description: 'Cataract surgery for dementia patients requires careful benefit assessment, caregiver coordination, and adapted consent. Dr. Tokuhara explains his approach.',
    slug: '/complex-cases/alzheimers-dementia',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Alzheimer\'s & Dementia', href: '/complex-cases/alzheimers-dementia' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery for Patients with Alzheimer\'s or Dementia',
  description: 'Cataract surgery can benefit dementia patients, but the decision requires careful assessment. Dr. Tokuhara discusses informed consent, caregiver coordination, and realistic benefit evaluation.',
  alternates: { canonical: '/complex-cases/alzheimers-dementia' },
  openGraph: {
    title: 'Cataract Surgery & Alzheimer\'s/Dementia | Dr. Keith Tokuhara',
    description: 'Thoughtful cataract surgery decisions for patients with cognitive decline at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/alzheimers-dementia',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "Can someone with Alzheimer's or dementia have cataract surgery?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Cataract surgery can improve quality of life for patients with cognitive decline. Better vision often reduces confusion, improves safety, and helps patients engage more with their surroundings. The decision involves careful evaluation of the patient's overall health and support system." } },
    { '@type': 'Question', name: "Is cataract surgery safe for dementia patients?", acceptedAnswer: { '@type': 'Answer', text: "Cataract surgery is generally safe for patients with dementia when appropriate precautions are taken. The procedure is quick, uses light sedation, and has a short recovery. Dr. Tokuhara evaluates each patient individually to determine if the visual benefit outweighs the procedural considerations." } }
  ],
};

export default function AlzheimersDementiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Cataract Surgery with <strong>Alzheimer&rsquo;s or Dementia</strong></h1>
          <p className="page-hero-sub">The decision to proceed requires careful thought, honest conversation, and a focus on quality of life.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">The Central <strong>Question</strong></h2>
          <p className="prose">
            When a patient with Alzheimer's disease or another form of dementia develops cataracts, the first question is not whether surgery is technically possible. It almost always is. The real question is whether surgery will meaningfully improve this patient's quality of life, given their cognitive condition and overall trajectory.
          </p>
          <p className="prose">
            This is not a question with a simple answer, and it is not one I take lightly. I have seen patients with early-stage dementia benefit enormously from cataract surgery. Improved vision can reduce confusion, decrease fall risk, improve engagement with surroundings, and preserve a level of independence that matters deeply to both the patient and their family.
          </p>
          <p className="prose">
            I have also seen situations where the benefit is less clear, and where the disruption of surgery and the postoperative care requirements create more stress than the vision improvement justifies. Each case is individual, and I evaluate it that way.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/elderly-woman-poolside-desert.jpg"
              alt="Woman relaxing at home with her dog - maintaining comfort and quality of life"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Informed Consent and <strong>Decision-Making</strong></h2>
          <p className="prose">
            Informed consent in patients with cognitive impairment requires a thoughtful, compassionate approach. Depending on the severity of the dementia, the patient may not be able to fully understand the procedure, its risks, and its benefits. In these cases, I work with the patient's legal decision-maker, typically a spouse, adult child, or designated healthcare proxy.
          </p>
          <p className="prose">
            But even when a surrogate makes the formal decision, I still communicate with the patient to the extent they are able to participate. I explain things simply and clearly. I pay attention to their comfort level and their reactions. Consent is not just a legal formality. It is a process of ensuring that everyone involved understands what we are doing and why.
          </p>

          <h2 className="section-title">Assessing <strong>Benefit</strong></h2>
          <p className="prose">
            I consider several factors when evaluating whether cataract surgery is appropriate:
          </p>
          <ul className="content-list">
            <li><strong>Stage of cognitive decline:</strong> Early-stage patients with mild cognitive impairment often benefit significantly. Advanced dementia patients may not be able to appreciate the visual improvement or cooperate with postoperative care.</li>
            <li><strong>Visual potential:</strong> If the retina and optic nerve are healthy, the visual improvement from cataract surgery can be substantial. If there is significant macular degeneration, glaucomatous damage, or other pathology limiting vision, the benefit of cataract surgery is reduced.</li>
            <li><strong>Fall risk and safety:</strong> Poor vision is a major contributor to falls in elderly patients, especially those with cognitive impairment. If improving vision can reduce fall risk, that is a compelling reason to proceed.</li>
            <li><strong>Behavioral considerations:</strong> Will the patient tolerate lying still for surgery? Can they cooperate with postoperative drops and follow restrictions? Are there caregivers who can manage the postoperative regimen?</li>
            <li><strong>Overall health trajectory:</strong> I consider the patient's overall health and life expectancy, not to make value judgments, but to ensure that the benefit of surgery will be realized during the time the patient has.</li>
          </ul>

          <h2 className="section-title">Caregiver <strong>Coordination</strong></h2>
          <p className="prose">
            For dementia patients, the caregiver is as important to surgical success as the surgeon. I make sure caregivers understand every aspect of the postoperative plan: which drops to give, how often, what to watch for, and when to call us. I simplify regimens wherever possible and provide written instructions that are clear and practical.
          </p>
          <p className="prose">
            I also set realistic expectations with families. Cataract surgery will improve the patient's optics, but it will not reverse the cognitive decline. The goal is to give the patient the best possible vision for however they are experiencing the world right now.
          </p>
        </div>
      </section>

      
      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}} className="compare-grid">
            <div className="content-image">
              <Image src="/media/elderly-man-courtyard-desert.jpg" alt="Elderly man standing in a sunny desert courtyard" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
            <div className="content-image">
              <Image src="/media/elderly-woman-walker-desert-garden.jpg" alt="Elderly woman with a walker smiling in a desert garden with mountains" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>
          <div className="content-image-caption" style={{textAlign: 'center', marginTop: '8px'}}>Better vision means more confidence, more safety, and more connection with the world around them.</div>
        </div>
      </section>

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Caring for a loved one with dementia who has <strong>cataracts?</strong></h2>
          <p>I&rsquo;ll help you weigh the benefits honestly and build a plan that puts your loved one&rsquo;s quality of life first.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
