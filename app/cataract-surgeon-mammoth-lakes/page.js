import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
  ScaleOnScroll,
  StaggerChildren,
  StaggerItem,
} from '../components/ScrollAnimations';
import TiltCard from '../components/TiltCard';
import PageFAQ from '../components/PageFAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a cataract surgeon in Mammoth Lakes or the Eastern Sierra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no cataract surgeon based in Mammoth Lakes, Bishop, Lone Pine, or anywhere in the Eastern Sierra (Mono and Inyo Counties). Patients requiring cataract surgery must travel to an outside community. Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage offers advanced cataract surgery with flexible scheduling designed for patients traveling from the Eastern Sierra.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Mammoth Lakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 220 miles south of Mammoth Lakes, about a 4-hour drive via US-395 South. For Bishop residents, the drive is approximately 3 to 3.5 hours via the same route.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I schedule cataract surgery during the off-season?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many Mammoth Lakes residents time medical procedures for late spring or early fall, when the town quiets down between ski season and summer. Dr. Tokuhara and his staff understand this pattern and coordinate scheduling to fit the Eastern Sierra lifestyle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have both eyes done in one trip to Desert Vision Center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. For patients driving 4 hours, this can cut your total trips in half. One day of surgery instead of multiple round-trip drives.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose Desert Vision Center over Reno or Fresno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers a comparable drive time with a fundamentally different patient experience. Dr. Tokuhara performs every surgery personally in a physician-owned practice with no residents or handoffs. His CLEAR in a Day program reduces trips. Fresno requires Tioga Pass (closed in winter), and Reno involves crossing state lines. US-395 south is maintained year-round.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Mammoth Lakes', href: '/cataract-surgeon-mammoth-lakes' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Mammoth Lakes & Eastern Sierra | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'No cataract surgeon in Mammoth Lakes, Bishop, or the Eastern Sierra. Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage offers fellowship-trained cataract surgery with flexible off-season scheduling and CLEAR in a Day for fewer trips.',
  alternates: {
    canonical: '/cataract-surgeon-mammoth-lakes',
  },
  openGraph: {
    title: 'Cataract Surgeon for Mammoth Lakes & Eastern Sierra | Desert Vision Center',
    description: 'No eye surgeon in the Eastern Sierra. Dr. Tokuhara at Desert Vision Center offers Mammoth Lakes residents personalized cataract care with off-season scheduling. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-mammoth-lakes',
  },
};

export default function CataractSurgeonMammothLakesPage() {
  const pageFaqs = [
    { q: 'Can my Mammoth Hospital optometrist handle post-op follow-up?', a: 'In some cases, post-operative care can be coordinated with your local optometrist. Dr. Tokuhara will discuss this during your consultation and determine what follow-up schedule works best for your specific situation and distance.' },
    { q: 'When is the best time for Mammoth residents to schedule surgery?', a: 'Many patients schedule during the off-season: late spring (May) or early fall (October/November), when the town is quieter and travel is easiest. However, US-395 is maintained year-round, so winter scheduling is possible if conditions cooperate.' },
    { q: 'What if I have cataracts affecting my skiing or work on the mountain?', a: 'Cataracts make flat light conditions significantly worse, which is a real safety concern for ski instructors, patrol, and anyone working at Mammoth Mountain. Dr. Tokuhara understands vision-critical occupations and plans surgery around your seasonal schedule.' },
    { q: 'Is the drive safe in winter?', a: 'US-395 south of Mammoth is generally maintained year-round and does not cross major mountain passes. Check Caltrans road conditions before traveling. The route is much more straightforward than Tioga Pass (closed in winter) or the Cajon Pass to Loma Linda.' },
    { q: 'Do I need a referral?', a: 'No referral is required. Call 760.340.4700 or use the contact form to schedule.' },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-mountain-sierra-alpine.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Mammoth Lakes</strong> and the Eastern Sierra</h1>
          <p className="page-hero-sub">
            There is no cataract surgeon in Mammoth Lakes, Bishop, Lone Pine, or anywhere in Mono or Inyo County. When it is time for surgery, you are already driving hours. The question is what kind of care is waiting when you arrive.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Zero Cataract Surgeons in the <strong>Eastern Sierra</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The Eastern Sierra stretches from Lone Pine to Bridgeport, thousands of square miles of the most striking landscape in California. Mammoth Mountain draws skiers from across the West. The Lakes Basin fills with hikers and anglers every summer. Bishop serves as the supply town for two counties. And in all of that territory, there is not a single cataract surgeon.
          </p>
          <p className="prose">
            If you live in Mammoth Lakes and your optometrist says you need cataract surgery, the conversation immediately shifts to logistics. Where do you go? How many trips? How do you schedule around a life that revolves around seasons, weather, and mountain roads?
          </p>
          <p className="prose">
            Your traditional options: Fresno, three to four hours west over Tioga Pass, which is closed from roughly November through June. Reno, three hours north across the state line. Loma Linda, four hours south through the Owens Valley and over the Cajon Pass. Each option means a full day of travel for a consultation, another day for surgery, and additional trips for follow-up.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-desert-overlook.jpg" alt="Couple enjoying a desert overlook vista, representing the journey from the Eastern Sierra to the Coachella Valley" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Mammoth Residents <strong>Choose Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I am Dr. Keith Tokuhara. Desert Vision Center in Rancho Mirage is approximately four hours south of Mammoth Lakes via US-395. That is a real drive. I will not pretend otherwise. But if you are already traveling three to four hours for care, here is why the destination matters:
          </p>
          <StaggerChildren staggerDelay={0.1}>
            <StaggerItem>
              <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
                <div className="card-inner" style={{padding: '1.5rem'}}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>One Surgeon, Every Time</h3>
                  <p className="prose" style={{marginBottom: 0}}>At a large hospital system in Fresno or Reno, your surgery may involve a resident or fellow you have never met. At Desert Vision Center, I perform every surgery personally, start to finish. Your evaluation, your procedure, your follow-up: all with me.</p>
                </div>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
                <div className="card-inner" style={{padding: '1.5rem'}}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>CLEAR in a Day Cuts Your Trips in Half</h3>
                  <p className="prose" style={{marginBottom: 0}}>Same-day bilateral cataract surgery for eligible patients means both eyes treated in a single visit. For someone driving from Mammoth, this is not a convenience feature. It is a logistics solution that can eliminate two or three round trips.</p>
                </div>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
                <div className="card-inner" style={{padding: '1.5rem'}}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>Off-Season Scheduling</h3>
                  <p className="prose" style={{marginBottom: 0}}>Many Mammoth residents time medical procedures for the off-season: late May after the lifts close, or October before the snow flies. My staff understands this rhythm and coordinates scheduling around your mountain calendar, not ours.</p>
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Flat Light, Clear Vision, and <strong>Mountain Safety</strong></h2>
          </ScrollReveal>
          <p className="prose">
            If you teach skiing at Mammoth Mountain, your vision is a safety issue. If you photograph the Sierra light on the John Muir Trail, it is your livelihood. If you fly fish June Lake or hike the Lakes Basin, it is why you live here. Cataracts erode all of it gradually, and mountain conditions make it worse.
          </p>
          <p className="prose">
            Flat light is the specific challenge. On overcast days at elevation, when the sky and snow blend into a uniform grey, cataracts make it nearly impossible to read terrain. Bumps disappear. Edges vanish. For ski instructors, patrol, and anyone navigating the mountain in variable conditions, this is not an inconvenience. It is a genuine hazard. Clear lenses restore the contrast and depth perception that flat light steals.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-stargazing-desert.jpg" alt="Couple stargazing in the desert, representing the clear skies Eastern Sierra residents cherish" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            The same applies to night driving on US-395. The glare from oncoming headlights between Mammoth and Bishop is one of the first things patients notice getting worse. And to the stargazing that makes the Eastern Sierra unlike anywhere else, cataracts wash out the Milky Way before you realize what you are missing.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Surgeon Behind <strong>the Practice</strong></h2>
          </ScrollReveal>
          <p className="prose">
            When you are traveling four hours for surgery, the credentials of the surgeon matter more than anything else. I completed my ophthalmology residency at Loma Linda University under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. After residency, I completed a retina fellowship, giving me training across the full eye, front to back.
          </p>
          <p className="prose">
            That retina training means I evaluate more than just your cataracts. Diabetic changes, macular health, glaucoma risk, and the overall condition of your eye all factor into the surgical plan. For Eastern Sierra patients who may not have easy access to multiple specialists, having one surgeon who manages the whole picture is practical, not just convenient.
          </p>
          <p className="prose">
            Over 20,000 surgeries. Every complication, every anatomical variation, every challenging case that cataract surgery can present: I have seen it. Patients with dislocated lenses, failed prior procedures, Yamane sutured IOLs, iris reconstruction cases. The experience is the reason complex cases from across Southern California find their way to my practice. Top Doctor recognition from Palm Springs Life every year from 2019 through 2026. Named Best Cataract Surgeon in the Coachella Valley by NBC.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services for <strong>Eastern Sierra</strong> Patients</h2>
          </ScrollReveal>
          <p className="prose">
            For patients traveling from Mammoth Lakes or Bishop, every visit needs to count. Here is what I offer:
          </p>
          <ul className="content-list">
            <li><strong>CLEAR in a Day:</strong> Both eyes in one visit for eligible patients. The most important service for Eastern Sierra residents. Fewer trips, faster return to mountain life. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants for mountain vision:</strong> Extended Depth of Focus (EDOF) lenses that improve range for reading trail maps, navigating terrain, and driving. Toric lenses that reduce astigmatism. I match the lens to the life you actually live at 8,000 feet. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Advanced cataract surgery:</strong> Precise removal with over 20,000 cases of personal experience. I handle every procedure myself. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>Complex and revision cases:</strong> Dislocated lenses, prior surgical complications, Yamane sutured IOLs, iris reconstruction. When other surgeons say no, I often say yes. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Diabetic eye care and glaucoma:</strong> Managed in-house with injections and laser treatment. For Eastern Sierra patients, consolidating care under one surgeon means fewer trips. <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/glaucoma">Glaucoma</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the <strong>Drive</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Eastern Sierra residents know long drives. You drive to Bishop for groceries if you live in Lone Pine. You drive to Reno for a specialist. You drive to Mammoth Brewing for a pint after a day on the mountain. Distance is not new to you.
          </p>
          <p className="prose">
            If you already make the regular drive south on 395 to Bishop, the route to Desert Vision Center just continues. For Bishop residents, it is 3 to 3.5 hours. For Mammoth, about 4. What I can promise is this: when you arrive, you will not feel like you are entering a system. You will feel like you found a surgeon who takes the time to understand your eyes, explains your options clearly, and performs your surgery with the kind of precision and personal attention that large hospital systems cannot replicate.
          </p>
          <p className="prose">
            Cataract surgery is not something you do every year. It is a decision that affects every sunrise over the Minarets, every powder day at Mammoth Mountain, every evening reading by the fire in the Village. For that kind of decision, the right surgeon matters more than the shortest drive.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-woman-driving-car-desert.jpeg" alt="Senior woman driving confidently with the desert landscape visible through her car window" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>There is no cataract surgeon in the Eastern Sierra. Desert Vision Center exists to fill that gap. Fellowship-trained, 20,000+ surgeries, off-season scheduling, and a practice designed for patients who travel because their community deserves that option.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Mammoth Lakes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Mammoth Lakes, the drive is approximately 4 hours (220 miles).
          </p>
          <p className="prose">
            <strong>Primary route:</strong> Take US-395 South through Bishop, Big Pine, Lone Pine, and Olancha. Continue south on US-395 to CA-14 South. Take CA-14 to CA-138 East, then connect to I-15 South to I-10 East. Exit at Bob Hope Drive in Rancho Mirage and head south. The office is on Bob Hope Drive near the Eisenhower Health area.
          </p>
          <p className="prose">
            <strong>Winter note:</strong> US-395 is generally maintained year-round but can have snow and ice south of Mammoth during winter months. Check Caltrans road conditions before traveling. The route does not cross any major mountain passes once you leave Mammoth, which makes it more reliable in winter than Tioga Pass (closed) or the Cajon Pass to Loma Linda.
          </p>
          <p className="prose">
            For patients coming from <strong>Bishop</strong>, the drive is approximately 3 to 3.5 hours via the same US-395 South route. For <strong>Lone Pine</strong> residents, approximately 3 hours. Ample parking is available directly in front of the building.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-tent-desert-sunset.jpg" alt="Couple watching a desert sunset, representing the transition from mountain to desert for Eastern Sierra patients" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <PageFAQ faqs={pageFaqs} heading="Questions Eastern Sierra Patients Ask" />

      <section className="cta">
        <div className="container">
          <h2>Eastern Sierra residents: <strong>your vision deserves this.</strong></h2>
          <p>No cataract surgeon in Mammoth Lakes, Bishop, or Lone Pine. Desert Vision Center in Rancho Mirage offers fellowship-trained cataract surgery with off-season scheduling and CLEAR in a Day for fewer trips. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
