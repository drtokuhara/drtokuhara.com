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
import PageFAQ from '../components/PageFAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best cataract surgeon near Redlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage completed his ophthalmology residency at Loma Linda University under Dr. Howard Gimbel and lived in the Redlands area for years. He has performed over 20,000 surgeries, been recognized as Top Doctor every year from 2019 through 2026, and specializes in both routine and complex cataract cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Redlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately one hour east of Redlands via Interstate 10 through the San Gorgonio Pass. The drive is straightforward and scenic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a Redlands resident drive past Loma Linda for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara trained at Loma Linda and offers the same caliber of surgical expertise in a physician-owned practice with personalized attention, shorter waits, and the same surgeon for every visit. Many Redlands patients who experienced long waits, rotating providers, or the parking challenges at LLUMC prefer the DVC experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have both eyes done in one trip from Redlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. Both eyes treated in a single visit means one trip through the pass instead of multiple drives.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Redlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Redlands residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Redlands', href: '/cataract-surgeon-redlands' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Redlands Residents | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Redlands residents: Dr. Keith Tokuhara trained at Loma Linda and lived in your area. Now at Desert Vision Center in Rancho Mirage, he offers Loma Linda-caliber cataract surgery with personal attention and shorter waits. 20,000+ surgeries. Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-redlands',
  },
  openGraph: {
    title: 'Cataract Surgeon for Redlands Residents | Desert Vision Center',
    description: 'Loma Linda-trained, Redlands-familiar. Dr. Keith Tokuhara offers personalized cataract care at Desert Vision Center in Rancho Mirage. One hour east on the I-10. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-redlands',
  },
};

export default function CataractSurgeonRedlandsPage() {
  const pageFaqs = [
    { q: 'How does Dr. Tokuhara compare to the Loma Linda ophthalmology department?', a: 'Dr. Tokuhara trained at Loma Linda under Dr. Howard Gimbel and has deep respect for the institution. The difference is the experience: at LLUMC, you may wait two hours, park in a structure that requires its own map, and see a different provider at each visit. At DVC, you park in front, wait minutes, and see Dr. Tokuhara every time. Same training. Different setting.' },
    { q: 'Is the one-hour drive worth it when Loma Linda is closer?', a: 'Cataract surgery is a decision that affects your vision permanently. Many Inland Empire patients say the same thing after their first visit: they wish they had come sooner. The drive through the pass is easy, and the CLEAR in a Day program means eligible patients can have both eyes done in a single trip.' },
    { q: 'Does Dr. Tokuhara see working-age patients, not just retirees?', a: 'Absolutely. Many Redlands patients are teachers, Loma Linda hospital staff, warehouse workers, and small business owners who need efficient scheduling and minimal time off. CLEAR in a Day is especially valuable for working patients.' },
    { q: 'What if I have diabetes or other eye conditions along with cataracts?', a: 'Dr. Tokuhara completed a retina fellowship after his cataract training, so he evaluates and manages diabetic eye changes, glaucoma, and other conditions in-house. You do not need to coordinate between multiple specialists.' },
    { q: 'Do I need a referral?', a: 'No referral is required. Call 760.340.4700 or use the contact form to schedule directly.' },
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

      <VideoBackground src="/media/ambient-desert-sunrise-golden.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Redlands</strong> Residents</h1>
          <p className="page-hero-sub">
            I trained at Loma Linda and lived in your area for years. I know what is waiting for you at the big hospital system. I left to build something better. One hour east on the I-10.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">I Know <strong>Redlands</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I lived in the Redlands area for several years during my training at Loma Linda University. I walked State Street on Thursday evenings for Market Night. I know the orange groves along Sunset Drive, the Kimberly Crest grounds, the University of Redlands campus, and the quiet neighborhoods where families and retirees share tree-lined blocks. Redlands is a city with a preservation ethic. People here take care of what matters and expect their professionals to do the same.
          </p>
          <p className="prose">
            I also know Loma Linda University Medical Center intimately, because I trained there. My residency was under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. That training was extraordinary, and it shaped every surgery I perform today. But I also experienced firsthand what patients experience at a large academic medical center: the parking structures that require their own GPS, the two-hour waits, the different provider at each visit, the feeling of moving through a system rather than being cared for as a person.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-farmers-market.jpg" alt="Couple browsing a farmers market, similar to Redlands Market Night" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            After my retina fellowship, I made a deliberate choice. I could have joined a large hospital system or corporate ophthalmology group. Instead, I built an independent, physician-owned practice where I could practice the way I believe medicine should work: personalized, unhurried, with a surgeon who knows your name and your eyes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Same Training. <strong>Different Experience.</strong></h2>
          </ScrollReveal>
          <p className="prose">
            If you are a Redlands resident considering cataract surgery, your default option is probably Loma Linda or one of the larger medical groups in the Inland Empire. These are good institutions with talented physicians. But there is a measurable difference between good medicine in a big system and great medicine in a practice designed around the patient.
          </p>
          <StaggerChildren staggerDelay={0.1}>
            <StaggerItem>
              <div style={{padding: '1.25rem 0', borderBottom: '1px solid var(--desert-sand)'}}>
                <h3 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>At LLUMC</h3>
                <p className="prose" style={{marginBottom: 0}}>Your surgery may involve residents or fellows who are still learning. You might wait two hours for a 15-minute appointment. You may see a different provider each time. The parking structure is its own adventure.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{padding: '1.25rem 0'}}>
                <h3 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>At Desert Vision Center</h3>
                <p className="prose" style={{marginBottom: 0}}>I perform every surgery personally, start to finish. Your consultation is a conversation, not a slot. You see me at every visit. My staff knows you by name. And the parking? You pull up in front of the building.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
          <p className="prose" style={{marginTop: '1.5rem'}}>
            I say the parking thing with a knowing smile. If you have been to Loma Linda, you understand.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Not Just for <strong>Retirees</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Redlands is more than a retirement community. It is a city of teachers at the university, nurses and technicians commuting to Loma Linda, warehouse workers along the I-10 logistics corridor, and small business owners on State Street. Many of my Redlands patients are still working, and they cannot afford to take multiple days off for eye surgery spread across weeks.
          </p>
          <p className="prose">
            If you are a nurse who needs to pass your vision screen, a delivery driver who depends on clear sight for safety, or a teacher who spends all day reading and writing on a board, cataract surgery is not just about quality of life. It is about your livelihood. CLEAR in a Day, which treats both eyes in a single visit, means one trip through the pass and a faster return to full function. For working Redlands patients, that changes the math entirely.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/patient-joyful-clear-vision.jpg" alt="Patient with a joyful expression after experiencing clear vision" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            And if you are retired, walking the Redlands Bowl for a summer concert, browsing the galleries on State Street, or tending the citrus trees in your yard, clear vision makes all of it richer. If you have spent a summer evening at the Redlands Bowl, you know how much clear vision matters for the experiences that make life worth preserving.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What I Bring from <strong>Loma Linda</strong></h2>
          </ScrollReveal>
          <p className="prose">
            My training under Dr. Howard Gimbel was not just about surgical technique. It was about respect for the anatomy in front of you, precision in planning, and the discipline to do things right even when a shortcut would be faster. Those principles shaped how I practice today, over 20,000 surgeries later.
          </p>
          <p className="prose">
            After residency, I completed a retina fellowship. Most cataract surgeons have never operated in the back of the eye. I have. That means when I evaluate your cataracts, I am also assessing your retina, your optic nerve, and the overall health of your eye. Diabetic changes, macular concerns, glaucoma risk: I see the full picture, not just the lens. For Redlands patients with diabetes or other complicating conditions, this matters. You do not need to coordinate between separate cataract and retina specialists. I handle both.
          </p>
          <p className="prose">
            I have managed virtually every complication and anatomical variation cataract surgery can present. Patients with dislocated lenses, failed prior procedures, Yamane sutured IOLs, iris reconstruction cases, and situations other surgeons have declined regularly find their way to my practice. The experience is not a number on a wall. It is the reason I can look at a challenging case and say, with confidence, that I have a plan.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services That Fit <strong>Your Life</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Every treatment plan starts with a thorough evaluation and a real conversation about your eyes, your daily activities, and what you want from your vision.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise removal using the latest techniques. I perform every procedure personally. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Both eyes in one visit. One trip from Redlands, not three or four. Ideal for working patients and anyone who values their time. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> Extended Depth of Focus (EDOF) lenses for broader range, toric lenses that reduce astigmatism, multifocal options. I match the lens to your actual life, not to a sales quota. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> When other surgeons say no, I often say yes. Dislocated lenses, prior complications, Yamane sutured lenses, iris reconstruction. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Diabetic eye care and glaucoma:</strong> Managed in-house with injections and laser. No referral chains, no waiting for coordination between offices. <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/glaucoma">Glaucoma</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the <strong>Drive</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I understand that driving an hour for a medical appointment is not the most convenient option. Redlands has good doctors closer to home. But cataract surgery is not something you do every year. It is a decision that affects your vision for the rest of your life. For a decision that significant, the right surgeon matters more than the shortest drive.
          </p>
          <p className="prose">
            Many of my patients from the Inland Empire tell me the same thing after their first visit: "I wish I had come here first." They say it because they finally felt heard. They got answers to their questions. They understood their options. And they trusted their surgeon.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/grandmother-grandson-reading-book.jpeg" alt="Grandmother reading a book with her young grandson in warm home lighting, the kind of near-vision moment cataract surgery restores" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>I trained at the institution in your backyard, and I chose to build a practice that honors that training in a way a large hospital system never could. One hour east on the I-10, Desert Vision Center offers Redlands residents Loma Linda-caliber expertise with the personal attention, honesty, and surgical precision you deserve.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Redlands</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Redlands, the drive is approximately one hour.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head east on I-10 from Redlands through Beaumont, Banning, and the San Gorgonio Pass. Continue east into the Coachella Valley and exit at Bob Hope Drive. Head south. The office is on your left, near the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            The drive through the pass is scenic and straightforward, especially outside of Friday afternoon rush hour. Ample parking directly in front of the building. And CLEAR in a Day means eligible patients can have both eyes done in a single trip from Redlands.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-garden-blooming.jpg" alt="Couple enjoying a blooming garden, representing the vibrant lifestyle of Redlands residents" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <PageFAQ faqs={pageFaqs} heading="Questions Redlands Patients Ask" />

      <section className="cta">
        <div className="container">
          <h2>Redlands residents: <strong>experience the difference.</strong></h2>
          <p>Same Loma Linda training. Personalized, independent practice. One hour east through the pass. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
