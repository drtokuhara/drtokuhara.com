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
      name: 'Who is the best cataract surgeon near Palm Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon just minutes from Palm Desert. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Palm Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 10-minute drive from central Palm Desert. The office is easily accessible via Highway 111 or Bob Hope Drive, with ample parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available near Palm Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers standard and laser-assisted cataract surgery, premium lens implants including EDOF, toric, and multifocal lenses, CLEAR in a Day same-day bilateral surgery, and complex case management. Dr. Tokuhara creates a personalized plan for every patient based on their eyes, lifestyle, and visual goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Palm Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Palm Desert residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation. Many patients self-refer after researching cataract surgeons in the area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients with diabetes or glaucoma who need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara is fellowship-trained in retina surgery and specializes in complex cataract cases including patients with diabetes, glaucoma, pseudoexfoliation, previous LASIK, and prior retina surgery. He manages these conditions in-house rather than referring out.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Palm Desert', href: '/cataract-surgeon-palm-desert' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Palm Desert | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Looking for a cataract surgeon near Palm Desert? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is just 10 minutes away. Fellowship-trained, 20,000+ surgeries, Top Doctor 2019-2026. Premium lenses and complex case expertise.',
  alternates: {
    canonical: '/cataract-surgeon-palm-desert',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Palm Desert | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, just 10 minutes from Palm Desert. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-palm-desert',
  },
};

export default function CataractSurgeonPalmDesertPage() {
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
          <h1>Cataract Surgeon in <strong>Palm Desert</strong></h1>
          <p className="page-hero-sub">
            Palm Desert residents deserve a cataract surgeon who matches the quality of life they have built here. Desert Vision Center is 10 minutes away in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Palm Desert Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Desert is the cultural and commercial heart of the Coachella Valley. El Paseo, the College of the Desert, Desert Willow Golf Resort, the Living Desert Zoo, and a community of people who came here for sunshine, outdoor living, and a high quality of life. When cataracts start interfering with that life, when driving becomes harder at night or the golf ball disappears against a bright sky, the next step matters.
          </p>
          <p className="prose">
            I see patients from Palm Desert every week. Many of them tell me the same thing: they want a surgeon they can trust, someone who will take the time to explain what is happening and what the options are, and someone with the skill to handle whatever their eyes present. That is exactly how I built Desert Vision Center.
          </p>
          <p className="prose">
            Palm Desert residents tend to be well-informed, active, and direct. You have probably already read about lens options, compared surgeons, and thought carefully about what matters to you. I respect that. My consultations are thorough, not scripted. I answer every question, and I give you my honest opinion about what will serve your vision best, even when that means steering you away from a more expensive option.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            There are several ophthalmologists in the Coachella Valley. Here is what sets Desert Vision Center apart:
          </p>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors, no hospital system telling me how many patients to see per hour. I own my practice, which means I answer to my patients and no one else.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. His approach to precision, technique, and patient-centered decision making shaped everything I do.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. That training gives me a complete understanding of the eye, front to back. When I evaluate your cataracts, I am also assessing the retina, the optic nerve, and the overall health of the eye in a way that most cataract-only surgeons cannot.</li>
            <li><strong>Over 20,000 surgeries:</strong> Surgical volume translates directly to experience with complications, anatomical variations, and challenging cases. I have seen virtually everything cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients who have been turned away by other surgeons, who have had a previous surgery that did not go well, or who have complicating conditions like diabetes, glaucoma, or prior retina surgery regularly come to my practice.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized by Palm Springs Life every year. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Surgery <strong>Services</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Every treatment plan at Desert Vision Center is individualized. I do not have a default recommendation. I have a process for understanding your eyes and your priorities, and the recommendation follows from there.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient removal of cataracts using the latest surgical techniques. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means less time away from your routine and fewer trips to the office. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. The right lens depends on your anatomy, your activities, and how you use your eyes. I walk you through every option honestly. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other cases that require advanced surgical skill. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management of glaucoma and diabetic retinopathy, including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            There is a pattern I see regularly. A patient from Palm Desert comes in for a cataract evaluation. They have already seen another surgeon who gave them a quick assessment, recommended the most expensive lens, and sent them on their way. They did not feel heard. They did not feel confident. So they kept looking.
          </p>
          <p className="prose">
            My consultations are different. I take the time to examine your eyes thoroughly, explain what I see, and discuss your options in the context of your actual life. If you are an avid golfer at Desert Willow or JW Marriott, that affects the lens conversation. If you read for hours every day, that changes the recommendation. If you have diabetes or a history of other eye procedures, I factor all of that in.
          </p>
          <p className="prose">
            I trained under Dr. Howard Gimbel during residency, a surgeon whose techniques are used in operating rooms worldwide. After that, I completed a retina fellowship. That dual training means I approach cataract surgery with a perspective that most surgeons simply do not have. I understand the entire eye, not just the lens.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Palm Desert residents who value thoroughness, honesty, and technical excellence in their healthcare consistently find their way to Desert Vision Center. The 10-minute drive to Rancho Mirage is one of the easiest decisions in the process.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Palm Desert</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From central Palm Desert, the drive is approximately 10 minutes.
          </p>
          <p className="prose">
            <strong>From El Paseo / central Palm Desert:</strong> Head northwest on Highway 111 toward Rancho Mirage. Turn right onto Bob Hope Drive. The office is on your right, just past the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            <strong>From Desert Willow / south Palm Desert:</strong> Take Cook Street or Portola Avenue north to Highway 111, then head west toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. The office is easily accessible, and we keep our waiting times short so you spend more time with the doctor than in the lobby.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for a cataract surgeon near <strong>Palm Desert?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is just 10 minutes away. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
