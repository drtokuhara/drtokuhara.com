import Link from 'next/link';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best cataract surgeon near Redlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon who completed his ophthalmology residency at Loma Linda University, right next to Redlands. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He offers the same Loma Linda-quality training in a personalized, independent practice setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Redlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately one hour east of Redlands via Interstate 10. The drive is straightforward and direct.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a Redlands resident drive to Rancho Mirage for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara trained at Loma Linda University and lived in the Redlands area for years. He offers the same caliber of training and expertise but in a physician-owned, independent practice with personalized attention, shorter wait times, and a concierge-level experience. Many patients prefer this to the large hospital system setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available at Desert Vision Center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers advanced cataract surgery, premium lens implants including EDOF, toric, and multifocal lenses, CLEAR in a Day same-day bilateral surgery, and complex case management. Dr. Tokuhara creates a personalized plan for every patient.',
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
  description: 'Redlands residents: Dr. Keith Tokuhara trained at Loma Linda and lived in your area. Now at Desert Vision Center in Rancho Mirage, he offers the same world-class training in a personalized, independent practice. 20,000+ surgeries. Top Doctor 2019-2026.',
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
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-golden-hour.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
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
            I lived in the Redlands area for several years during my training at Loma Linda University. I know the orange groves along Sunset Drive, the historic downtown, the Saturday farmers market, the University of Redlands campus, and the neighborhoods where retirees and families share quiet, tree-lined streets. Redlands is a community that values quality, history, and doing things the right way.
          </p>
          <p className="prose">
            I also know Loma Linda University Medical Center intimately, because I trained there. I completed my ophthalmology residency under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. I received extraordinary training. But I also experienced firsthand what patients experience at a large academic medical center: the crowded parking structures, the long waits, the feeling of being processed through a system rather than cared for as an individual.
          </p>
          <p className="prose">
            When I finished my fellowship, I made a deliberate choice. I could have joined a large hospital system or a corporate ophthalmology group. Instead, I built an independent, physician-owned practice where I could practice the way I believe medicine should work: personalized, unhurried, with a surgeon who knows your name and your eyes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Same Training. <strong>Different Experience.</strong></h2>
          </ScrollReveal>
          <p className="prose">
            If you are a Redlands resident considering cataract surgery, your default option is probably Loma Linda or one of the larger medical groups in the Inland Empire. These are good institutions with talented physicians. But there is a difference between good medicine in a big system and great medicine in a practice designed around the patient.
          </p>
          <p className="prose">
            At Desert Vision Center, here is what the experience looks like:
          </p>
          <ul className="content-list">
            <li><strong>You see me, not a resident:</strong> At an academic medical center, your surgery may involve residents or fellows who are still learning. At Desert Vision Center, I perform every surgery personally, from start to finish. No handoffs.</li>
            <li><strong>Your consultation is a conversation:</strong> I take the time to examine your eyes thoroughly, explain what I see, and discuss your options in the context of your actual life. No rushed 10-minute appointments.</li>
            <li><strong>You are not a number:</strong> I know my patients. My staff knows my patients. When you call, someone who remembers you answers the phone.</li>
            <li><strong>Parking is easy:</strong> I say this with a knowing smile. If you have been to Loma Linda, you understand. We have ample parking directly in front of the building.</li>
            <li><strong>Wait times are short:</strong> We run an efficient office because I believe your time matters. You will spend more time with the doctor than in the waiting room.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Here is the clinical case for the drive east:
          </p>
          <ul className="content-list">
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda, the same institution in your backyard. His techniques are used in operating rooms worldwide, and they are the foundation of my surgical approach.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. This dual training means I understand the entire eye, front to back. When I evaluate your cataracts, I am simultaneously assessing the retina, the optic nerve, and the overall health of the eye.</li>
            <li><strong>Over 20,000 surgeries:</strong> That volume translates to experience with every complication, anatomical variation, and challenging case cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients who have been told their case is too complicated, who had a previous surgery that did not go well, or who have diabetes, glaucoma, or other complicating conditions regularly come to my practice.</li>
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors, no hospital system telling me how to practice. I answer to my patients and no one else.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized by Palm Springs Life every year. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Surgery <strong>Services</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Every treatment plan is individualized. I evaluate your eyes, listen to your priorities, and build a plan from there.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient cataract removal using the latest techniques. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means one trip from Redlands, not two or three. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses for astigmatism, and multifocal options. I walk you through every option honestly and match the lens to your life. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other advanced cases. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the <strong>Drive</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I understand that driving an hour for a medical appointment is not the most convenient option. Redlands has good doctors closer to home. But cataract surgery is not something you do every year. It is a decision that affects your vision for the rest of your life, and for a decision that significant, the right surgeon matters more than the shortest drive.
          </p>
          <p className="prose">
            Many of my patients from the Inland Empire tell me the same thing after their first visit: "I wish I had come here first." They are not saying that because the office is fancy. They are saying it because they finally felt heard. They got answers to their questions. They understood their options. And they trusted their surgeon.
          </p>
          <p className="prose">
            Redlands is a community of people who value doing things properly. You maintain your historic homes. You support local businesses. You do not cut corners on the things that matter. Your vision should be no different.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>I trained at the institution in your backyard, and I chose to build a practice that honors that training in a way a large hospital system never could. One hour east on the I-10, Desert Vision Center offers Redlands residents Loma Linda-caliber cataract surgery with the personal attention, honesty, and surgical precision you deserve.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
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
            The drive through the pass is scenic and straightforward, especially outside of Friday afternoon rush hour. There is ample parking directly in front of the building, and our CLEAR in a Day program means eligible patients can have both eyes done in a single trip from Redlands.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Redlands residents: <strong>experience the difference.</strong></h2>
          <p>Same Loma Linda training. Personalized, independent practice. One hour east on the I-10. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
