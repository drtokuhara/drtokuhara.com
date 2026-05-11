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
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 220 miles south of Mammoth Lakes, about a 4-hour drive via US-395 South and CA-14 to CA-138 to I-15 to I-10. An alternative route runs US-395 South through Lone Pine and Ridgecrest to CA-178 through the southern Sierra.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do Mammoth Lakes residents currently go for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Eastern Sierra residents are referred to Fresno (3-4 hours west over Tioga Pass, seasonal), Reno (3+ hours north), or Loma Linda/San Bernardino (4+ hours south). Each option involves significant travel. Desert Vision Center in Rancho Mirage offers a comparable drive with personalized, fellowship-trained care in an independent practice setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have both eyes done in one trip to Desert Vision Center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. This means both eyes can be treated in a single visit, which significantly reduces the number of trips required for out-of-area patients. This is especially valuable for Eastern Sierra residents who face a full-day round trip for each appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara offer flexible scheduling for patients traveling from far away?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Desert Vision Center understands that patients from the Eastern Sierra are planning around significant travel. The office works to coordinate consultation and surgical dates efficiently, and the CLEAR in a Day program can reduce total visits. Call 760.340.4700 to discuss scheduling that works with your travel needs.',
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
  description: 'There is no cataract surgeon in the Eastern Sierra. Mammoth Lakes, Bishop, and Lone Pine residents trust Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage. Fellowship-trained, 20,000+ surgeries, flexible scheduling for out-of-area patients.',
  alternates: {
    canonical: '/cataract-surgeon-mammoth-lakes',
  },
  openGraph: {
    title: 'Cataract Surgeon for Mammoth Lakes & Eastern Sierra | Desert Vision Center',
    description: 'No cataract surgeon in the Eastern Sierra. Dr. Keith Tokuhara at Desert Vision Center offers Mammoth Lakes residents personalized, fellowship-trained cataract care with flexible scheduling. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-mammoth-lakes',
  },
};

export default function CataractSurgeonMammothLakesPage() {
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
          <h1>Cataract Surgeon for <strong>Mammoth Lakes</strong> and the Eastern Sierra</h1>
          <p className="page-hero-sub">
            There is no cataract surgeon in the Eastern Sierra. For residents of Mammoth Lakes, Bishop, and Lone Pine, the closest advanced eye surgery means a full day of travel. Desert Vision Center is built to serve patients like you.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The <strong>Access Gap</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Mono and Inyo Counties span thousands of square miles of some of the most striking landscape in California. The Eastern Sierra is home to Mammoth Mountain, the John Muir Wilderness, the ancient bristlecone pines, and communities that measure distance not in miles but in hours. It is also home to zero cataract surgeons.
          </p>
          <p className="prose">
            If you live in Mammoth Lakes and develop cataracts, your options have traditionally been limited. Your local optometrist refers you out. Maybe to Fresno, three to four hours west over Tioga Pass (and only when the pass is open). Maybe to Reno, three hours north across the state line. Maybe to Loma Linda, four hours south through the Owens Valley and over the Cajon Pass. Each option means a full day of travel for a consultation, another day for surgery, and additional trips for follow-up.
          </p>
          <p className="prose">
            I am Dr. Keith Tokuhara. I perform cataract surgery at Desert Vision Center in Rancho Mirage, approximately four hours south of Mammoth Lakes. That is a real drive. I will not pretend otherwise. But if you are already traveling three to four hours for care, the question is not whether you travel. The question is what kind of care is waiting for you when you arrive.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Is Waiting at <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            At a large hospital system in Fresno or Reno, you are one of many. You wait. You see a resident or fellow first. You may not meet your actual surgeon until the day of the procedure. Your case is handled efficiently because the system demands efficiency, not because anyone is paying special attention to your eyes.
          </p>
          <p className="prose">
            At Desert Vision Center, here is what the experience looks like:
          </p>
          <ul className="content-list">
            <li><strong>I perform every surgery personally:</strong> No residents, no fellows, no handoffs. Your surgery is my surgery, start to finish.</li>
            <li><strong>Your consultation is thorough:</strong> I examine your eyes, listen to your concerns, and build a plan that accounts for your specific anatomy, your visual goals, and your life. We take the time to get it right.</li>
            <li><strong>CLEAR in a Day reduces your trips:</strong> Eligible patients can have both eyes treated in a single visit. For someone driving from Mammoth Lakes, this is not a convenience feature. It is a logistics solution that can cut your total trips in half.</li>
            <li><strong>Flexible scheduling for out-of-area patients:</strong> My staff understands that Eastern Sierra patients are coordinating around significant travel. We work with you to schedule efficiently.</li>
            <li><strong>Physician-owned, independent practice:</strong> No corporate chain, no private equity, no hospital system. I answer to my patients.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Dr. Tokuhara</strong></h2>
          </ScrollReveal>
          <p className="prose">
            When you are traveling hours for surgery, the credentials of the surgeon matter more than anything else. Here is my background:
          </p>
          <ul className="content-list">
            <li><strong>Fellowship-trained cataract and anterior segment surgeon:</strong> I completed my ophthalmology residency at Loma Linda University under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. I then completed a fellowship in retina surgery, giving me dual training that informs every evaluation and surgical decision.</li>
            <li><strong>Over 20,000 surgeries:</strong> That volume means I have seen and managed every complication, anatomical variation, and challenging case cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients with previous failed surgeries, dislocated lenses, diabetes, glaucoma, and other complicating conditions regularly come to my practice when other surgeons refer them out.</li>
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
            Every treatment plan is individualized. I evaluate your eyes, listen to your priorities, and build a plan from there. The procedure itself typically takes 10 to 15 minutes per eye.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise cataract removal using modern techniques. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means fewer trips from the Eastern Sierra. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> Extended depth of focus (EDOF) lenses for a broader range of clear vision, toric lenses to reduce astigmatism, and multifocal options. I walk you through every option honestly and match the lens to your life. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
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
            I understand four hours is a significant commitment. Eastern Sierra residents know long drives are part of life. You drive to Reno for a specialist. You drive to Bishop for groceries if you live in Lone Pine. You drive to Fresno when the pass is open. Distance is not new to you.
          </p>
          <p className="prose">
            What I can offer is this: when you arrive at Desert Vision Center, you will not feel like you are entering a system. You will feel like you found a surgeon who takes the time to understand your eyes, explains your options clearly, and performs your surgery with the kind of precision and personal attention that large hospital systems cannot replicate.
          </p>
          <p className="prose">
            Cataract surgery is not something you do every year. It is a decision that affects your vision for the rest of your life. For that kind of decision, the right surgeon matters more than the shortest drive. Many of my patients from outside the Coachella Valley say the same thing after their first visit: the drive was worth it.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>There is no cataract surgeon in the Eastern Sierra. Desert Vision Center exists to fill that gap with the quality of care your community deserves. Fellowship-trained, 20,000+ surgeries, and a practice designed around the patient, not the system.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
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
            <strong>Alternative route (seasonal):</strong> From Bishop, you can take CA-168 West over Westgard Pass and connect through to US-95 and eventually I-15/I-10. This is less common but can be useful depending on road conditions.
          </p>
          <p className="prose">
            <strong>Important note for winter travel:</strong> US-395 is generally maintained year-round, but conditions south of Mammoth Lakes can include snow and ice during winter months. Check Caltrans road conditions before traveling. The route does not cross any major mountain passes once you leave Mammoth.
          </p>
          <p className="prose">
            For patients coming from <strong>Bishop</strong> or <strong>Lone Pine</strong>, the drive is approximately 3 to 3.5 hours via the same US-395 South route. Ample parking is available directly in front of the building.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Eastern Sierra residents: <strong>your vision deserves this.</strong></h2>
          <p>No cataract surgeon in Mammoth Lakes, Bishop, or Lone Pine? Desert Vision Center in Rancho Mirage offers fellowship-trained cataract surgery with flexible scheduling for out-of-area patients. Call or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
