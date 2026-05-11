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
        text: 'Both are within driving distance, but the experience is very different. Phoenix-area eye surgery centers are typically large corporate or multi-location practices focused on volume. Desert Vision Center is a physician-owned, independent practice where Dr. Tokuhara performs every surgery personally. The drive to Rancho Mirage is shorter (about 1.5 hours vs. 2 hours to most Phoenix suburbs), and the care is more personalized.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Blythe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 95 miles west of Blythe, about 1.5 hours via Interstate 10 West. The drive is direct and straightforward with no mountain passes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Blythe residents have both eyes done in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. Both eyes treated in a single visit significantly reduces the number of round trips on the I-10 for Blythe residents.',
      },
    },
    {
      '@type': 'Question',
      name: 'What lens options does Dr. Tokuhara offer for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers a full range of premium lens implants including EDOF (extended depth of focus) lenses for broader range of vision, toric lenses for astigmatism reduction, and multifocal options. Dr. Tokuhara creates an individualized plan for every patient based on their eyes, their goals, and their life.',
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
  description: 'Blythe residents: choose personalized cataract care over corporate volume. Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is just 1.5 hours west on the I-10. Fellowship-trained, 20,000+ surgeries, physician-owned practice.',
  alternates: {
    canonical: '/cataract-surgeon-blythe',
  },
  openGraph: {
    title: 'Cataract Surgeon for Blythe Residents | Desert Vision Center',
    description: 'Closer than Phoenix, more personal than corporate. Dr. Tokuhara at Desert Vision Center offers Blythe residents advanced cataract surgery. 1.5 hours on the I-10. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-blythe',
  },
};

export default function CataractSurgeonBlythePage() {
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
            Blythe is a community that knows what it means to be between places. You are on the California-Arizona border, along the Colorado River, surrounded by farmland and open desert. You have Palo Verde Hospital for the basics, but when it comes to specialty care, you drive. That is the reality of living here, and it has always been that way.
          </p>
          <p className="prose">
            When cataracts start affecting your vision, you have two directions to go. East to Phoenix, about 2 hours on I-10. West to the Coachella Valley, about 1.5 hours on the same highway. The distance is not dramatically different. But what is waiting at the other end could not be more different.
          </p>
          <p className="prose">
            Phoenix is a big city with big eye surgery centers. These are corporate practices, often backed by private equity, designed to process a high volume of patients efficiently. You may see one doctor for your consultation and a different one for your surgery. The waiting rooms are full. The appointments are fast. You are a case number in a system optimized for throughput.
          </p>
          <p className="prose">
            I am Dr. Keith Tokuhara, and I offer Blythe residents a completely different option.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A Shorter Drive to <strong>Better Care</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center in Rancho Mirage is approximately 1.5 hours west of Blythe on Interstate 10. That is shorter than the drive to most Phoenix-area eye surgery centers. And here is what the experience looks like:
          </p>
          <ul className="content-list">
            <li><strong>I perform every surgery personally:</strong> No residents, no fellows, no handoffs to a surgeon you have never met. Your eyes, my hands, start to finish.</li>
            <li><strong>Your consultation is a real conversation:</strong> I take the time to examine your eyes, explain what I see, and discuss your options in the context of your life. Not a 10-minute slot in a packed schedule.</li>
            <li><strong>Physician-owned, independent practice:</strong> No corporate chain, no private equity investors. I built this practice to deliver the kind of care that corporate systems cannot. I answer to my patients, not shareholders.</li>
            <li><strong>CLEAR in a Day reduces your trips:</strong> Eligible patients can have both eyes treated in a single visit. For Blythe residents, that means fewer round trips on the I-10. One day instead of weeks of back and forth.</li>
            <li><strong>Flexible scheduling:</strong> My staff knows that Blythe patients are coordinating around travel. We work with you to make the logistics as simple as possible.</li>
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
            When you are choosing a cataract surgeon, credentials and experience matter. Here is my background:
          </p>
          <ul className="content-list">
            <li><strong>Fellowship-trained cataract and anterior segment surgeon:</strong> I completed my ophthalmology residency at Loma Linda University under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. I then completed a retina fellowship, giving me dual training that means I evaluate the entire eye, front to back, during every consultation.</li>
            <li><strong>Over 20,000 surgeries:</strong> That volume translates to experience with every complication, anatomical variation, and challenging case cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients who have been told their case is too complicated, who had a prior surgery that did not go well, or who have diabetes, glaucoma, or other complicating conditions regularly come to my practice when others refer them out.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized by Palm Springs Life every year. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Corporate Volume vs. <strong>Personal Precision</strong></h2>
          </ScrollReveal>
          <p className="prose">
            There is nothing wrong with Phoenix eye surgery centers in a clinical sense. They employ qualified surgeons. They perform a lot of procedures. But there is a meaningful difference between a practice designed for volume and a practice designed for the individual patient.
          </p>
          <ul className="content-list">
            <li><strong>In a corporate practice:</strong> Your consultation may be 15 minutes. You may see a different surgeon than the one who evaluated you. Your lens choice may be guided by what the practice stocks or promotes. Follow-up may be with an optometrist you have never met.</li>
            <li><strong>At Desert Vision Center:</strong> Your consultation is as long as it needs to be. I evaluate you. I operate on you. I follow up with you. Your lens choice is guided by your eyes, your goals, and an honest conversation about tradeoffs. No one is selling you anything.</li>
          </ul>
          <p className="prose">
            Blythe is a community built on relationships. People know their neighbors, their pharmacist, their mechanic. You value the kind of personal attention that big cities have largely lost. Your eye surgeon should match that ethic.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Surgery <strong>Services</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Every treatment plan is individualized. I evaluate your eyes, listen to your priorities, and build a plan from there. The procedure itself typically takes 10 to 15 minutes per eye.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise cataract removal using modern techniques. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means one trip from Blythe, not four or five. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> Extended depth of focus (EDOF) lenses for a broader range of clear vision. Toric lenses to reduce astigmatism. Multifocal options. I walk you through every option honestly and match the lens to your life. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other advanced cases. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the <strong>Drive</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Blythe residents are used to driving. You drive to Indio for shopping. You drive to Phoenix for a weekend. An hour and a half on the I-10 is a regular part of life, not an expedition.
          </p>
          <p className="prose">
            Cataract surgery is not something you do every year. It is a one-time decision that affects your vision permanently. Whether you spend your days farming, fishing on the Colorado River, walking through the community, or simply reading at home, clear vision changes the quality of everything.
          </p>
          <p className="prose">
            The drive to Desert Vision Center is actually shorter than the drive to most Phoenix eye surgery centers. And at the other end, instead of a corporate waiting room and a surgeon you may never have met, you get a physician who knows your name, understands your eyes, and performs your surgery with 20,000 cases of experience behind every decision.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Closer than Phoenix. More personal than corporate. Desert Vision Center in Rancho Mirage offers Blythe residents a cataract surgery experience built around the patient, not the system. 1.5 hours west on the I-10.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
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
            The drive is flat, direct, and straightforward. There are no mountain passes, no winding roads. It is the same I-10 you take to Indio or Palm Springs. Ample parking is available directly in front of the building, and our CLEAR in a Day program means eligible patients can have both eyes done in a single trip from Blythe.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Blythe residents: <strong>choose personal over corporate.</strong></h2>
          <p>Shorter drive than Phoenix. Fellowship-trained surgeon. Physician-owned practice. 20,000+ surgeries. Desert Vision Center offers Blythe and Palo Verde Valley residents cataract care built around the individual. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
