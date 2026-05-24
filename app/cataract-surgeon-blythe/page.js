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
      name: 'Is there a cataract surgeon in Blythe, California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no cataract surgeon based in Blythe. Residents of Blythe and the Palo Verde Valley must travel for cataract surgery, typically east to Phoenix (approximately 2 hours) or west to the Coachella Valley. Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is approximately 1.5 hours west on Interstate 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I go to Phoenix or Rancho Mirage for cataract surgery from Blythe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive to Rancho Mirage is shorter (about 1.5 hours vs. 2 hours to most Phoenix suburbs). Desert Vision Center is physician-owned and independent, where Dr. Tokuhara performs every surgery personally. Phoenix-area practices are typically large corporate or multi-location centers focused on high patient volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does desert heat and UV exposure cause cataracts earlier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Prolonged UV exposure accelerates cataract development. Blythe residents, especially those who work in agriculture or spend significant time outdoors in one of the hottest cities in California, often develop cataracts earlier than average. Dr. Tokuhara regularly sees patients from agricultural communities whose UV exposure contributed to earlier-onset cataracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Blythe residents have both eyes done in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. Both eyes treated in a single visit significantly reduces round trips on the I-10.',
      },
    },
    {
      '@type': 'Question',
      name: 'What lens options does Dr. Tokuhara offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers the full range of lens implants including Extended Depth of Focus (EDOF) lenses for broader range of vision, toric lenses for astigmatism reduction, and multifocal options. Dr. Tokuhara also honestly recommends standard Medicare-covered lenses when they are the right choice. Every plan is individualized.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Blythe', href: '/cataract-surgeon-blythe' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Blythe Residents | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Blythe residents: choose personalized cataract care over corporate volume. Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is 1.5 hours west, closer than Phoenix. Fellowship-trained, 20,000+ surgeries, physician-owned practice.',
  alternates: {
    canonical: '/cataract-surgeon-blythe',
  },
  openGraph: {
    title: 'Cataract Surgeon for Blythe Residents | Desert Vision Center',
    description: 'Closer than Phoenix, more personal than corporate. Dr. Tokuhara offers Blythe residents advanced cataract surgery. 1.5 hours on the I-10. UV and heat expertise. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-blythe',
  },
};

export default function CataractSurgeonBlythePage() {
  const pageFaqs = [
    { q: 'Is the drive to Rancho Mirage really shorter than Phoenix?', a: 'Yes. Desert Vision Center is approximately 95 miles west of Blythe on I-10, about 1.5 hours. Most Phoenix-area eye surgery centers are in Scottsdale, Mesa, or Chandler, which adds time beyond reaching the Phoenix metro. The I-10 west to Rancho Mirage is flat, direct, and the same highway you take to Indio for shopping.' },
    { q: 'Does UV exposure from Blythe heat cause earlier cataracts?', a: 'Prolonged UV exposure accelerates cataract development. Blythe regularly exceeds 115 degrees in summer, and agricultural and outdoor workers accumulate UV damage over years. Dr. Tokuhara sees patients from Blythe and similar communities whose cataracts developed a decade or more earlier than typical.' },
    { q: 'Can I drive home the same day after CLEAR in a Day?', a: 'Most patients feel comfortable having someone drive them home after same-day bilateral surgery. Your vision will be somewhat blurry the first day. Many Blythe patients arrange for a companion to drive them or stay overnight near Rancho Mirage. Dr. Tokuhara will discuss logistics during your consultation.' },
    { q: 'What if I have diabetes along with cataracts?', a: 'Dr. Tokuhara completed a retina fellowship and manages diabetic eye conditions in-house. He evaluates the retina along with the cataract at every visit. For Blythe patients with diabetes, this means one surgeon handling both conditions rather than coordinating between specialists hours apart.' },
    { q: 'Do I need a referral?', a: 'No. Call 760.340.4700 or use the contact form to schedule directly.' },
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

      <VideoBackground src="/media/ambient-desert-sunrise.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Blythe</strong> Residents</h1>
          <p className="page-hero-sub">
            Blythe sits between two worlds: Phoenix to the east, the Coachella Valley to the west. For cataract surgery, the question is not whether you drive. It is what kind of care is waiting when you arrive.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The <strong>Blythe Choice</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Blythe sits along the Colorado River in the Palo Verde Valley, surrounded by fields that produce hay, melons, and cotton. It is an agricultural city on the California-Arizona border, and the people who have lived here for decades know what it means to be self-reliant. You have Palo Verde Hospital for the basics. For everything else, you drive.
          </p>
          <p className="prose">
            When cataracts start affecting your vision, you have two directions to go. East to Phoenix, about 2 hours on I-10 to reach the suburbs where the eye surgery centers are concentrated. West to the Coachella Valley, about 1.5 hours on the same highway. The distance is not dramatically different. But what is waiting at the other end could not be more different.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-convertible-desert.jpg" alt="Couple driving through the desert, representing the I-10 drive from Blythe to the Coachella Valley" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Corporate Volume vs. <strong>Personal Precision</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The Phoenix metro has dozens of eye surgery centers. Most are corporate practices, often owned by private equity firms, designed to process a high volume of patients efficiently. They employ qualified surgeons and perform thousands of procedures. In a clinical sense, there is nothing wrong with them. But there is a meaningful difference between a practice designed for volume and a practice designed for the individual patient.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '1.5rem 0'}}>
            <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
              <div className="card-inner" style={{padding: '1.5rem'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.05rem'}}>Corporate Practice (Phoenix)</h3>
                <ul style={{paddingLeft: '1.2rem', margin: 0}}>
                  <li className="prose" style={{marginBottom: '0.5rem'}}>15-minute consultation slot</li>
                  <li className="prose" style={{marginBottom: '0.5rem'}}>May see a different surgeon than who evaluated you</li>
                  <li className="prose" style={{marginBottom: '0.5rem'}}>Lens choice guided by what the practice stocks or promotes</li>
                  <li className="prose" style={{marginBottom: 0}}>Follow-up may be with an optometrist you have never met</li>
                </ul>
              </div>
            </TiltCard>
            <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
              <div className="card-inner" style={{padding: '1.5rem'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.05rem'}}>Desert Vision Center</h3>
                <ul style={{paddingLeft: '1.2rem', margin: 0}}>
                  <li className="prose" style={{marginBottom: '0.5rem'}}>Consultation as long as it needs to be</li>
                  <li className="prose" style={{marginBottom: '0.5rem'}}>I evaluate you, I operate on you, I follow up with you</li>
                  <li className="prose" style={{marginBottom: '0.5rem'}}>Lens choice guided by your eyes, your goals, and an honest conversation</li>
                  <li className="prose" style={{marginBottom: 0}}>No one is selling you anything</li>
                </ul>
              </div>
            </TiltCard>
          </div>
          <p className="prose">
            Blythe is a community built on relationships. People know their neighbors, their pharmacist, the person at the counter on Hobsonway. You value the kind of personal attention that big cities have largely lost. Your eye surgeon should match that ethic.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Heat, UV, and <strong>Blythe Eyes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            In a city where summer temperatures routinely hit 115 degrees, UV damage to the eyes is accelerated. Blythe residents, especially those who have spent years working in agriculture in the Palo Verde Valley, fishing on the Colorado River, or simply living under one of the most intense suns in California, often develop cataracts earlier than people in milder climates.
          </p>
          <p className="prose">
            I see patients from agricultural communities like Blythe whose cataracts developed in their 50s rather than their 70s. The UV exposure accumulates. The cloudiness builds gradually. And by the time you notice that driving home on Hobsonway at dusk is not what it used to be, or that the river does not look as vivid, the cataracts have been developing for years.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-seniors-outdoor-dining.jpg" alt="Seniors enjoying an outdoor meal, representing the community life Blythe residents value" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            This is not a reason to panic. It is a reason to take it seriously. My retina fellowship means I evaluate more than just the cataract. I check for diabetic changes, sun-related macular damage, and other conditions that Blythe's climate and outdoor work environment can cause. One surgeon, one thorough evaluation, the full picture.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Blythe Patients <strong>Get at DVC</strong></h2>
          </ScrollReveal>
          <p className="prose">
            For a community that is used to driving 90 minutes to Indio for a Costco run, the trip to Desert Vision Center is familiar ground. Here is what makes it worthwhile:
          </p>
          <ul className="content-list">
            <li><strong>CLEAR in a Day for fewer round trips:</strong> Both eyes treated in one visit for eligible patients. For Blythe residents, this means one day on the I-10 instead of four or five separate trips. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Lens options for outdoor and working vision:</strong> Extended Depth of Focus (EDOF) lenses for patients who need range for driving, fieldwork, and daily life. Toric lenses that reduce astigmatism. And honest advice when a standard Medicare-covered lens is the right choice. I will never push a premium lens when it is not the best option for your eyes. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Advanced cataract surgery with 20,000+ cases of experience.</strong> I perform every procedure personally. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>Complex and revision cases:</strong> Dislocated lenses, failed prior procedures, Yamane sutured IOLs, iris reconstruction. Cases that other surgeons refer out are a core part of what I do. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Diabetic eye care in-house:</strong> Diabetes is prevalent in agricultural communities, and it affects cataract surgery planning. My retina fellowship means I manage both conditions rather than referring you to yet another specialist hours away. <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/glaucoma">Glaucoma</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the <strong>Drive West</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Blythe residents are used to driving. You drive to Indio for shopping. You drive to Quartzsite for the RV shows. You drive to Phoenix for a weekend. An hour and a half on the I-10 is a regular part of life, not an expedition.
          </p>
          <p className="prose">
            Cataract surgery is not something you do every year. It is a one-time decision that affects your vision permanently. Whether you spend your days farming in the Palo Verde Valley, fishing on the Colorado River, walking through town, or reading at home with the swamp cooler running, clear vision changes the quality of everything.
          </p>
          <p className="prose">
            The drive to Desert Vision Center is shorter than the drive to most Phoenix eye surgery centers. And at the other end, instead of a corporate waiting room and a surgeon you may never have met, you get a physician who knows your name, understands your eyes, and brings 20,000 cases of experience to every decision.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-man-driving-desert-sunset.jpeg" alt="Senior man driving through the desert at sunset with warm golden light on the I-10 corridor" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Closer than Phoenix. More personal than corporate. Built for patients, not shareholders. Desert Vision Center in Rancho Mirage offers Blythe and Palo Verde Valley residents a cataract surgery experience that matches the way you expect to be treated. 1.5 hours west on the I-10.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Blythe</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Blythe, the drive is approximately 1.5 hours (95 miles).
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 from Blythe through Desert Center and the Chiriaco Summit area. Continue west into the Coachella Valley. Exit at Bob Hope Drive in Rancho Mirage and head south. The office is on Bob Hope Drive near Eisenhower Health.
          </p>
          <p className="prose">
            The drive is flat, direct, and straightforward. No mountain passes, no winding roads. It is the same I-10 you take to Indio or Palm Springs. Ample parking is available directly in front of the building.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/desert-landscape-hero-1.png" alt="Desert landscape along the I-10 corridor between Blythe and the Coachella Valley" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <PageFAQ faqs={pageFaqs} heading="Questions Blythe Patients Ask" />

      <section className="cta">
        <div className="container">
          <h2>Blythe residents: <strong>choose personal over corporate.</strong></h2>
          <p>Shorter drive than Phoenix. Fellowship-trained surgeon with retina expertise. Physician-owned practice. CLEAR in a Day for fewer trips on the I-10. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
