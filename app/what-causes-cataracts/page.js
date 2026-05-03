import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes cataracts to develop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataracts develop when proteins inside the natural lens of the eye break down and clump together, clouding the lens and reducing the amount of clear light that reaches the retina. This protein breakdown is a natural part of aging, though UV exposure, diabetes, smoking, steroid use, and eye trauma can accelerate the process significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does UV exposure from the desert sun cause cataracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ultraviolet radiation, particularly UV-B, is one of the most well-established risk factors for accelerated cataract development. Patients who live in high-UV environments like the Coachella Valley, where sun intensity and outdoor time are both elevated, tend to develop cataracts earlier. Wearing UV-blocking sunglasses and a wide-brimmed hat when outdoors are the most practical protective measures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cataracts be prevented?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataracts cannot be entirely prevented since aging is the primary cause. However, several factors can slow their progression: consistent UV protection with quality sunglasses, not smoking, controlling blood sugar if you have diabetes, maintaining a diet rich in antioxidants such as lutein and zeaxanthin, and avoiding unnecessary steroid use. These steps reduce cumulative lens damage over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does diabetes cause cataracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Elevated blood sugar causes chemical changes inside the lens that accelerate protein breakdown and lens clouding. Diabetic patients frequently develop cataracts one to two decades earlier than non-diabetic patients. Keeping HbA1c well controlled significantly slows this process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do some people get cataracts earlier than others?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Earlier cataracts are often the result of one or more accelerating factors: diabetes, long-term steroid use including inhaled steroids for asthma, prior eye surgery or trauma, genetic predisposition, prolonged UV exposure, or a history of heavy smoking. Patients with multiple risk factors can develop visually significant cataracts in their 50s rather than their 70s.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  articleSchema({
    title: 'What Causes Cataracts? A Complete Guide to Prevention and Risk Factors',
    description: 'Learn what causes cataracts, who is most at risk, whether they can be prevented, and how desert sun exposure accelerates cataract development.',
    slug: '/what-causes-cataracts',
    datePublished: '2026-05-03',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'What Causes Cataracts', href: '/what-causes-cataracts' },
  ]),
];

export const metadata = {
  title: 'What Causes Cataracts? A Complete Guide to Prevention and Risk Factors',
  description: 'Cataracts form when proteins inside the lens break down with age. Learn all the risk factors, why desert UV accelerates them, and what you can do to slow their progression.',
  alternates: {
    canonical: '/what-causes-cataracts',
  },
  openGraph: {
    title: 'What Causes Cataracts? | Dr. Keith Tokuhara',
    description: 'An honest guide to cataract causes, risk factors including UV exposure, diabetes, and smoking, plus practical prevention steps.',
    url: 'https://drtokuhara.com/what-causes-cataracts',
  },
};

export default function WhatCausesCataractsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="page-hero">
        <div className="container">
          <h1>What Causes Cataracts? <strong>A Complete Guide</strong></h1>
          <p className="page-hero-sub">
            Cataracts are the leading cause of correctable vision loss worldwide. Understanding what drives them, who is most at risk, and what can slow their progression is the first step toward protecting your sight.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 3, 2026" />

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">How Cataracts <strong>Actually Form</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The natural lens of your eye is made mostly of water and proteins arranged in a precise structure that keeps the lens clear and flexible. With age, those proteins begin to break down and clump together. Those clumps scatter light instead of transmitting it cleanly, creating the cloudiness, glare, and dulled color that patients describe as cataracts develop.
          </p>
          <p className="prose">
            This process is biological and gradual. It typically begins in the 40s and 50s and progresses over years or decades. Most people do not notice significant visual impact until their 60s or 70s, but patients with accelerating risk factors can experience functional impairment considerably earlier.
          </p>
          <p className="prose">
            I explain it to patients this way: imagine a camera lens that has been slowly fogged from the inside. The glass has not cracked or broken, but the clarity is gone. That is what is happening in your eye, and it is why no glasses prescription, no drops, and no supplements can reverse a cataract. Once the proteins have changed, the only way to restore clear vision is to remove the clouded lens and replace it with an artificial one.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-couple-sunny-pathway-luxury.jpg"
              alt="Couple walking together outdoors in sunlight - UV exposure and an active desert lifestyle both affect cataract development"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Risk Factors That <strong>Accelerate Cataracts</strong></h2>
          <p className="prose">
            While aging is the dominant cause, a number of well-established factors can significantly speed up the timeline. In my Coachella Valley practice, I see the effects of several of these factors far more often than surgeons in other parts of the country.
          </p>
          <ul className="content-list">
            <li>
              <strong>Age:</strong> The most universal risk factor. By age 75, more than half of all Americans have a cataract affecting at least one eye. By age 80, the majority have had surgery or have cataracts significant enough to affect daily function.
            </li>
            <li>
              <strong>UV exposure:</strong> Ultraviolet radiation, particularly UV-B, directly damages lens proteins over decades of cumulative exposure. Patients who spend significant time outdoors without UV-protective eyewear are at meaningfully higher risk for earlier and denser cataracts.
            </li>
            <li>
              <strong>Diabetes:</strong> Elevated blood sugar triggers chemical changes inside the lens that accelerate protein breakdown. Diabetic patients frequently develop cataracts one to two decades earlier than their non-diabetic peers. Blood sugar control genuinely matters for lens longevity, not just overall health.
            </li>
            <li>
              <strong>Smoking:</strong> Tobacco use is a well-documented independent risk factor. Smokers have roughly twice the cataract risk of non-smokers. The mechanism involves oxidative damage to lens proteins that accumulates over years.
            </li>
            <li>
              <strong>Long-term steroid use:</strong> Corticosteroids taken orally, topically, inhaled for asthma, or as eye drops over extended periods are strongly associated with posterior subcapsular cataracts, a type that forms at the back of the lens and tends to impact vision relatively early in its development.
            </li>
            <li>
              <strong>Eye trauma:</strong> A direct injury to the eye can accelerate or trigger a traumatic cataract. This includes blunt trauma, penetrating injuries, and significant radiation exposure to the head or face.
            </li>
            <li>
              <strong>Family history:</strong> Genetics play a role. If your parents had cataracts in their 50s or early 60s, that is worth mentioning at your eye exam. Congenital cataracts present at birth are also hereditary in many cases.
            </li>
            <li>
              <strong>Previous eye surgery:</strong> Certain procedures including retinal surgery and vitrectomy can accelerate cataract formation in the operated eye. This is not always avoidable but is important to understand when planning treatment.
            </li>
          </ul>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Having two or three of these risk factors compounds the effect. A diabetic patient who smokes and lives in the desert sun may develop functionally significant cataracts a full decade or more before the typical timeline.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Coachella Valley: <strong>A High-UV Environment</strong></h2>
          <p className="prose">
            This is something I think about constantly in my practice. The Coachella Valley receives more days of intense sunlight per year than almost anywhere else in the continental United States. Patients here are outdoors more: playing golf, pickleball, gardening, hiking, attending events. They also tend to live here year-round, without the seasonal relief of cloudier climates.
          </p>
          <p className="prose">
            The result is that I regularly see patients in their 50s and early 60s who have cataracts that look like they belong in someone fifteen years older. The combination of chronically elevated UV exposure, warm temperatures that encourage outdoor activity, and often a history of decades living in sunny climates creates a patient population that ages faster optically than national averages would predict.
          </p>
          <p className="prose">
            UV-blocking sunglasses are not optional here. They should be worn every time you step outside, and they should wrap to block peripheral light as well. A wide-brimmed hat adds meaningful additional protection. These are the simplest, most evidence-backed steps available to slow cumulative UV damage to the lens.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-couple-convertible-desert.jpg"
              alt="Couple driving through the desert - the Coachella Valley lifestyle means high UV exposure year-round"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Can Cataracts <strong>Be Prevented?</strong></h2>
          <p className="prose">
            Not entirely. Aging is unavoidable, and aging is the root cause. But the timeline can be meaningfully influenced, and I think that is worth understanding clearly rather than dismissing prevention because it is not a complete solution.
          </p>
          <p className="prose">
            What the evidence supports for slowing progression:
          </p>
          <ul className="content-list">
            <li><strong>UV protection:</strong> Consistently wearing UV-blocking sunglasses is the single most modifiable risk factor for most patients.</li>
            <li><strong>Blood sugar control:</strong> For diabetic patients, keeping HbA1c in a healthy range significantly reduces the chemical changes that accelerate lens clouding.</li>
            <li><strong>Not smoking:</strong> Quitting smoking reduces oxidative damage throughout the body, including in the lens.</li>
            <li><strong>Nutrition:</strong> Lutein and zeaxanthin, found in leafy greens, eggs, and many vegetables, have been associated with a modestly lower risk of cataracts in several large observational studies. They are not a substitute for UV protection, but a diet rich in antioxidants supports lens health over decades.</li>
            <li><strong>Avoiding unnecessary steroids:</strong> If long-term corticosteroid use is medically necessary, it cannot always be avoided. But it is worth a conversation with your prescribing doctor about cumulative exposure and whether alternatives exist.</li>
          </ul>

          <BlurReveal>
            <div className="clinic-thought">
              <h3>An honest perspective</h3>
              <p>
                <em>I do not want patients to feel that cataracts are entirely their fault or entirely preventable. They are a natural part of human aging. What I do want patients to understand is that the lifestyle choices that accelerate them are real, and that making protective habits part of daily life in the Coachella Valley genuinely changes the trajectory for many people.</em>
              </p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Some People Get Cataracts <strong>Earlier</strong></h2>
          <p className="prose">
            Patients sometimes come in surprised that they need cataract surgery in their 50s. They assumed it was a condition for people in their 70s. When we go through their history together, the pattern usually becomes clear: decades of outdoor work without UV protection, diabetes with inconsistent blood sugar control, a history of steroid use, or sometimes all three at once.
          </p>
          <p className="prose">
            There is also a genetic component that remains less well understood. Some families simply carry a predisposition to earlier lens protein changes. If a parent or sibling had cataracts young, it is worth mentioning at your eye exams so monitoring can begin appropriately.
          </p>
          <p className="prose">
            Regardless of when cataracts develop, what matters most is addressing them at the right time. Not too early when vision is still functional, and not so late that quality of life has been unnecessarily sacrificed. For more on that timing question, see my page on <Link href="/understanding-cataracts">understanding cataracts</Link>.
          </p>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Related <strong>Reading</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>What cataracts are, how they develop, and how to know when it is time to consider surgery.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery Overview</h3>
              <p>What to expect from the full cataract surgery process, from evaluation through recovery.</p>
            </Link>
            <Link href="/is-cataract-surgery-safe" className="related-card">
              <h3>Is Cataract Surgery Safe?</h3>
              <p>An honest look at risks, complication rates, and what makes a surgeon qualified to handle complexity.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Have questions about your <strong>cataracts?</strong></h2>
          <p>I take time to explain exactly what is happening in your eyes, what is driving it, and what your options are. A consultation with me is not a sales appointment.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
