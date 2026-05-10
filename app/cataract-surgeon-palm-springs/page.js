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
      name: 'Who is the best cataract surgeon near Palm Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 20 minutes from Palm Springs. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Palm Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 20-minute drive from downtown Palm Springs via Highway 111. The drive follows the main valley corridor with easy, straightforward access.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available near Palm Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers standard and laser-assisted cataract surgery, premium lens implants including EDOF, toric, and multifocal lenses, CLEAR in a Day same-day bilateral surgery, and complex case management. Dr. Tokuhara creates a personalized treatment plan for every patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dr. Tokuhara a good choice for patients with complicated eye histories?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Complex cases are a specialty at Desert Vision Center. Dr. Tokuhara is fellowship-trained in both cataract and retina surgery and has performed over 20,000 procedures. He regularly treats patients with previous eye surgery, diabetes, glaucoma, dislocated lenses, and complications from prior procedures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral from my Palm Springs doctor to see Dr. Tokuhara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is needed. Palm Springs residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Palm Springs', href: '/cataract-surgeon-palm-springs' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Palm Springs | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Palm Springs residents: Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is 20 minutes away. Fellowship-trained cataract surgeon, 20,000+ surgeries, premium lens implants, complex case specialist. Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-palm-springs',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Palm Springs | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, 20 minutes from Palm Springs. Advanced surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-palm-springs',
  },
};

export default function CataractSurgeonPalmSpringsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-twilight.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Palm Springs</strong></h1>
          <p className="page-hero-sub">
            Palm Springs residents who value quality, independence, and trust in their healthcare choose Desert Vision Center. Just 20 minutes east in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Surgery for <strong>Palm Springs</strong> Residents</h2>
          </ScrollReveal>
          <p className="prose">
            Palm Springs has always attracted people with taste, independence, and an appreciation for doing things well. The mid-century modern architecture, the cultural scene, the Aerial Tramway, the art museums and film festivals. This is not a community that settles for average, in any area of life.
          </p>
          <p className="prose">
            When cataracts begin to cloud your vision, the effect goes beyond functional. Colors look duller. The desert light that defines Palm Springs loses its vibrancy. Night driving along Palm Canyon Drive becomes difficult. Reading menus, recognizing faces across a restaurant, watching a film at the Mary Pickford Theatre: all of it gradually diminishes. Most patients adapt without realizing how much they have compensated.
          </p>
          <p className="prose">
            I see many patients from Palm Springs, and the 20-minute drive to Desert Vision Center in Rancho Mirage is something they consistently say was one of the easiest decisions they made. What convinced them was not the proximity. It was the quality of the consultation, the honesty of the conversation, and the confidence that comes from choosing a surgeon who has done this over 20,000 times.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Springs has its own ophthalmology options. Here is why patients make the drive to Rancho Mirage:
          </p>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> Desert Vision Center is not affiliated with any corporate chain, hospital system, or private equity group. I own my practice, and that independence means clinical decisions are made exclusively for patient benefit.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University. Dr. Gimbel's contributions to cataract surgery are used in operating rooms worldwide. That level of training is foundational to how I approach every case.</li>
            <li><strong>Retina fellowship:</strong> My additional fellowship in retina surgery means I evaluate the entire eye, not just the cataract. For patients with macular concerns, diabetic changes, or previous retina surgery, this dual expertise is a significant advantage.</li>
            <li><strong>Over 20,000 surgeries:</strong> Surgical experience is not just a statistic. It is the accumulated ability to handle the unexpected, adapt plans in real time, and deliver consistently excellent outcomes across a wide range of eyes and conditions.</li>
            <li><strong>Complex case specialist:</strong> Patients with difficult histories, previous complications, or conditions that make surgery more challenging are a core part of my practice. I do not refer these cases out. I manage them.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized every year by Palm Springs Life. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Surgery <strong>Options</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Modern surgical technique performed personally by Dr. Tokuhara from start to finish. No hand-offs, no rotating surgeons. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral surgery for eligible patients. Both eyes treated in one visit means just one trip from Palm Springs, not multiple. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. I tailor the lens selection to your lifestyle, whether you spend your days reading, painting, golfing, or all three. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, Yamane sutured lenses, iris reconstruction, and cases other surgeons have declined. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Springs patients tend to be thoughtful, well-read, and discerning about their healthcare choices. Many have already researched cataract surgery extensively before they walk through my door. I find that the patients who have done the most research are often the most appreciative of a consultation where someone takes the time to actually listen to their questions and give honest, personalized answers.
          </p>
          <p className="prose">
            My background is unusual for a cataract surgeon. Training under Dr. Howard Gimbel during residency gave me a technical foundation in surgical precision that few residency programs can match. My retina fellowship gave me a perspective on the posterior segment of the eye that most anterior segment surgeons lack entirely. Together, these experiences mean I see the full picture when I evaluate your eyes.
          </p>
          <p className="prose">
            After more than 20,000 surgeries, I have the experience to manage virtually any situation that arises in the operating room. But what Palm Springs patients tell me they value most is not the number. It is the approach: thorough, unhurried, honest, and focused on getting the best possible result for their specific eyes and their specific life.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Palm Springs residents drive 20 minutes to Rancho Mirage for the same reason they chose Palm Springs in the first place: they know quality when they see it. Desert Vision Center was built for patients who expect excellence and are willing to seek it out.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Palm Springs</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From downtown Palm Springs, the drive is approximately 20 minutes.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Head southeast on Highway 111 through Cathedral City into Rancho Mirage. Turn left onto Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Take I-10 east to the Bob Hope Drive exit. Head south on Bob Hope Drive toward Highway 111. The office is on your left.
          </p>
          <p className="prose">
            The drive along Highway 111 is straightforward, scenic, and takes you through the heart of the valley. Ample parking is available directly in front of the building.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Palm Springs residents: your vision deserves <strong>the best.</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is 20 minutes from Palm Springs. Call or send a message to schedule a consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
