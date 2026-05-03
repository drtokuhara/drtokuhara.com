import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema, physicianSchema } from '../schema';
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
      name: 'Who is the best cataract surgeon in the Coachella Valley?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon recognized by Palm Springs Life Top Doctor awards from 2019 through 2026 and named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous LASIK.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Desert Vision Center located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center is located at 35900 Bob Hope Drive, Suite 175, in Rancho Mirage, California 92270. The office serves patients throughout the Coachella Valley including Palm Springs, Palm Desert, Indian Wells, La Quinta, Indio, and Cathedral City. You can reach us at 760.340.4700.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does desert living affect your eyes differently than other climates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Coachella Valley presents a specific set of eye health challenges: intense UV radiation, very low humidity, wind-blown dust and sand, and extreme heat. These conditions accelerate cataract formation, contribute to chronic dry eye and ocular surface disease, and increase pterygium risk. Patients who have lived in the desert for years often have more advanced ocular sun damage than their age would suggest elsewhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can golfers and tennis players still play after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and many patients describe returning to golf and tennis as one of the most meaningful benefits of cataract surgery. Premium lens implants can reduce or eliminate the need for glasses, which is particularly valuable on the golf course or tennis court. Most patients return to light activity within a few days and full activity within a week or two.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. You can call Desert Vision Center directly at 760.340.4700 or use the contact form on this website to schedule a consultation. Many patients self-refer after researching cataract surgeons in the Palm Springs and Coachella Valley area.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  articleSchema({
    title: 'Eye Care in the Coachella Valley: Desert Living and Your Vision',
    description: 'The desert climate of the Coachella Valley creates unique challenges for eye health. Dr. Tokuhara at Desert Vision Center in Rancho Mirage serves patients throughout the Palm Springs area.',
    slug: '/about-coachella-valley-eye-care',
    datePublished: '2026-05-03',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Coachella Valley Eye Care', href: '/about-coachella-valley-eye-care' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Eye Care in the Coachella Valley: Desert Living and Your Vision',
  description: 'Desert Vision Center in Rancho Mirage serves patients across the Coachella Valley. Dr. Tokuhara understands how desert living - UV, dust, dry air - affects your eyes. Cataract surgeon and ophthalmologist near Palm Springs.',
  alternates: {
    canonical: '/about-coachella-valley-eye-care',
  },
  openGraph: {
    title: 'Coachella Valley Eye Care | Desert Vision Center | Dr. Tokuhara',
    description: 'Eye doctor and cataract surgeon in Rancho Mirage serving Palm Springs, Palm Desert, and the entire Coachella Valley. Desert-specific expertise in UV damage, dry eye, and cataract surgery.',
    url: 'https://drtokuhara.com/about-coachella-valley-eye-care',
  },
};

export default function CoachellaValleyEyeCarePage() {
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
          <h1>Eye Care in the <strong>Coachella Valley</strong></h1>
          <p className="page-hero-sub">
            Desert living puts your eyes under stress that most people in other climates never experience. Here is what that means for your long-term vision, and why local expertise matters.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 3, 2026" />

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Desert and <strong>Your Eyes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I have practiced ophthalmology in the Coachella Valley for years, and I can tell you that the eyes of my patients here look different from what you see in the medical literature drawn from general populations. Desert residents experience a combination of environmental stressors that accelerates eye aging and increases the risk of certain conditions in ways that are measurable and clinically significant.
          </p>
          <p className="prose">
            That is not cause for alarm. It is cause for awareness. Understanding what the desert does to your eyes, and taking sensible protective steps, genuinely changes your long-term outcome. And when problems do develop, having a surgeon who understands the local context makes a real difference.
          </p>
          <p className="prose">
            Desert Vision Center is located at 35900 Bob Hope Drive, Suite 175, in Rancho Mirage. We serve patients from across the Coachella Valley, including Palm Springs, Palm Desert, Indian Wells, La Quinta, Indio, Cathedral City, and the surrounding communities.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-couple-lawn-sunset-coachella.jpg"
              alt="Couple relaxing on the lawn at sunset in the Coachella Valley - enjoying desert retirement living"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Desert Eye Health <strong>Challenges</strong></h2>
          <p className="prose">
            The Coachella Valley sits at a unique intersection of environmental conditions that are each, independently, hard on the eyes. Together, they create a demanding environment for anyone spending significant time outdoors:
          </p>
          <ul className="content-list">
            <li>
              <strong>Intense ultraviolet radiation:</strong> At this latitude and elevation, with over 300 sunny days per year and minimal cloud cover, UV exposure here is significantly higher than national averages. UV radiation is the primary environmental driver of cataracts, macular degeneration, pterygium (a fleshy growth on the white of the eye), and photokeratitis. Many of my patients have cataracts that are more mature than their age would suggest, and UV exposure accumulated over years of desert living is part of that story.
            </li>
            <li>
              <strong>Extreme dryness and low humidity:</strong> Desert air averages relative humidity in the teens to low twenties for much of the year. Low humidity accelerates tear evaporation, depleting the protective tear film that coats the eye surface. Chronic dry eye is extraordinarily common here. Patients often describe persistent grittiness, burning, or fluctuating vision that they assume is just an annoyance. It is actually a treatable condition, and it matters for cataract surgery because a compromised eye surface affects both the measurements we take before surgery and the outcomes we achieve.
            </li>
            <li>
              <strong>Wind-blown dust and particulates:</strong> Seasonal windstorms bring significant particulate matter. On ordinary windy days, fine dust is a constant presence. These particles irritate the eye surface, contribute to chronic conjunctival inflammation, and in people who rub their eyes repeatedly, can cause corneal abrasions. Patients who spend time outdoors in wind - which includes virtually every golfer, hiker, cyclist, and pickleball player in the valley - need to think about eye protection differently than people in calmer climates.
            </li>
            <li>
              <strong>High heat and outdoor activity:</strong> The Coachella Valley draws residents who want to live actively outdoors. Golf, tennis, pickleball, hiking, cycling, and swimming are part of daily life for a large portion of my patient population. Extended outdoor activity under intense sun, often without adequate eye protection, compounds the UV and dryness exposure significantly.
            </li>
          </ul>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>The combination of year-round sun, low humidity, and an active outdoor culture makes the Coachella Valley one of the more demanding environments in the country for long-term eye health. Protective habits matter here more than most places.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What This Means for <strong>Common Conditions</strong></h2>

          <h3 style={{ fontWeight: 600, marginTop: '24px', marginBottom: '8px' }}>Cataracts</h3>
          <p className="prose">
            Cataracts are a near-universal consequence of aging, but desert UV exposure accelerates their development. I routinely see patients in their late fifties with cataracts that are functionally comparable to what I would expect in a seventy-year-old from a lower-UV environment. Patients who spent their working years outdoors in the sun, especially without consistent sunglass use, are at the highest risk. If you are having trouble seeing clearly at night, noticing halos around lights, or finding that your glasses prescription keeps changing, cataracts may already be significant enough to discuss surgery.
          </p>

          <h3 style={{ fontWeight: 600, marginTop: '24px', marginBottom: '8px' }}>Dry Eye and Ocular Surface Disease</h3>
          <p className="prose">
            Chronic dry eye is not just uncomfortable, it is a medical condition that affects vision quality and surgical outcomes. Many patients learn they have meaningful dry eye only when they come in for a cataract evaluation and I find that their tear film is inadequate. The dry eye needs to be treated before surgery to get accurate measurements and to optimize healing. Treatments range from artificial tears and warm compresses to prescription drops, punctal plugs, and in-office procedures. The vast majority of dry eye is very manageable with the right approach.
          </p>

          <h3 style={{ fontWeight: 600, marginTop: '24px', marginBottom: '8px' }}>Pterygium</h3>
          <p className="prose">
            A pterygium is a fleshy, wedge-shaped growth of tissue that starts on the white of the eye and grows toward the cornea. It is caused by chronic UV and wind exposure - essentially the definition of life in the Coachella Valley. Small pterygia may cause irritation and redness but not much else. If one grows large enough to threaten the visual axis, it needs to be surgically removed. Consistent sunglass use is the best prevention.
          </p>

          <h3 style={{ fontWeight: 600, marginTop: '24px', marginBottom: '8px' }}>Diabetic Retinopathy</h3>
          <p className="prose">
            The Coachella Valley has elevated rates of diabetes relative to state and national averages, and diabetic retinopathy is a significant concern for a large portion of my patient population. I am fellowship-trained in retina as well as cataract surgery, which means I manage diabetic retinopathy in-house, including anti-VEGF injections and panretinal photocoagulation. Learn more on my <Link href="/diabetic-retinopathy">diabetic retinopathy page</Link>.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-group-tennis-sunny.jpg"
              alt="Group playing tennis on a sunny desert day - active outdoor sports are a hallmark of Coachella Valley living"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Protecting Your Eyes in the <strong>Desert</strong></h2>
          <p className="prose">
            The good news is that most desert-related eye damage is preventable with straightforward protective habits. The patients in my practice who do best over the long term are the ones who started these habits early and stayed consistent.
          </p>
          <ul className="content-list">
            <li><strong>Sunglasses with 100% UV protection:</strong> Not just tinted lenses, but lenses rated to block both UVA and UVB. Wraparound styles offer better protection against both UV and wind-blown dust. Polarized lenses reduce glare significantly on bright desert days, which matters for driving and outdoor sports. I tell my patients: sunglasses in this climate are medical equipment, not accessories.</li>
            <li><strong>Hats with a brim:</strong> A wide-brimmed hat reduces overhead UV exposure that sunglasses alone do not block. Combined with sunglasses, a hat meaningfully reduces cumulative UV dose to the eyes.</li>
            <li><strong>Lubricating eye drops:</strong> In low-humidity environments, over-the-counter artificial tears used consistently during the day help maintain the tear film. Look for preservative-free formulations if you use them more than four times daily, as the preservatives in standard drops can irritate the eye surface with frequent use.</li>
            <li><strong>Hydration:</strong> Adequate systemic hydration supports tear production. Patients who spend hours outdoors in high heat and do not drink enough water often have noticeably worse dry eye symptoms.</li>
            <li><strong>Eye protection for outdoor activities:</strong> For dusty outdoor activities including hiking, cycling, and off-road recreation, sport-wrap glasses or goggles provide significantly better protection than standard sunglasses.</li>
          </ul>

          <BlurReveal>
            <div className="clinic-thought">
              <h3>For golfers and tennis players</h3>
              <p>
                <em>Many of my patients come in specifically concerned about maintaining their game after cataract surgery. Premium lens implants can reduce or eliminate dependence on glasses, which changes the experience on the course or court. I discuss lens options in the context of what each patient actually does with their vision - an active outdoor lifestyle is part of the surgical planning conversation, not an afterthought.</em>
              </p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Desert Vision Center: <strong>Serving the Coachella Valley</strong></h2>
          <p className="prose">
            Desert Vision Center is located at 35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270. We are conveniently situated to serve patients from across the valley, with easy access from Highway 111 and ample parking.
          </p>
          <p className="prose">
            To schedule a consultation or ask about a specific concern, call us at <a href="tel:7603404700">760.340.4700</a> or visit our <Link href="/contact">contact page</Link>. No referral is required. We see new patients regularly and pride ourselves on unhurried, thorough consultations where you have time to ask every question you need to ask.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-couple-desert-overlook.jpg"
              alt="Couple enjoying a desert overlook view in the Coachella Valley - the landscape that defines life here"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Related <strong>Reading</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/dust-in-eyes" className="related-card">
              <h3>Dust in Your Eyes</h3>
              <p>What to do, what to avoid, and when desert dust and wind become a medical problem worth treating.</p>
            </Link>
            <Link href="/about" className="related-card">
              <h3>About Dr. Tokuhara</h3>
              <p>Fellowship training, approach to care, and what makes Desert Vision Center different from a standard cataract practice.</p>
            </Link>
            <Link href="/contact" className="related-card">
              <h3>Schedule an Appointment</h3>
              <p>Rancho Mirage location, phone number, and everything you need to get started. No referral required.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for an eye doctor in the <strong>Coachella Valley?</strong></h2>
          <p>Desert Vision Center is in Rancho Mirage, serving patients from Palm Springs to La Quinta. Call us or send a message to get started.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule an Appointment</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
