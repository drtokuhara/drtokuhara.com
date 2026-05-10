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
      name: 'Who is the best cataract surgeon near La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon a short drive from La Quinta. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 15 to 20 minute drive from La Quinta via Highway 111 or Interstate 10. The office has ample parking and is located along the Eisenhower health corridor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What lens options are available for cataract surgery near La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers premium lens implants including EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. Dr. Tokuhara personalizes every lens selection based on your anatomy, lifestyle, and visual priorities, whether that is golf, reading, driving, or all of the above.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get both eyes done the same day near La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Desert Vision Center offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. Both eyes are treated in a single visit, which means fewer trips between La Quinta and the office and a faster return to your routine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. La Quinta residents can call Desert Vision Center at 760.340.4700 or use the online contact form to schedule a consultation directly.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in La Quinta', href: '/cataract-surgeon-la-quinta' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near La Quinta | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'La Quinta residents: Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage offers fellowship-trained cataract surgery, premium lens implants, and complex case expertise. 20,000+ surgeries. Top Doctor 2019-2026. A short drive from PGA West.',
  alternates: {
    canonical: '/cataract-surgeon-la-quinta',
  },
  openGraph: {
    title: 'Cataract Surgeon Near La Quinta | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, serving La Quinta residents from Rancho Mirage. Premium lenses, complex cases, physician-owned. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-la-quinta',
  },
};

export default function CataractSurgeonLaQuintaPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/golf-course-wide-golden.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>La Quinta</strong></h1>
          <p className="page-hero-sub">
            La Quinta residents live for the outdoors. When cataracts get in the way, Desert Vision Center in Rancho Mirage delivers the surgical expertise your active lifestyle demands.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Care for <strong>La Quinta</strong> Residents</h2>
          </ScrollReveal>
          <p className="prose">
            La Quinta is defined by outdoor living. PGA West, La Quinta Resort and Club, SilverRock, hiking trails in the Santa Rosa Mountains, and a community that moved here specifically to be active under the desert sun. Golf, tennis, pickleball, cycling, hiking: this is not retirement, it is a lifestyle upgrade.
          </p>
          <p className="prose">
            Cataracts threaten that lifestyle in ways that creep up gradually. The golf ball is harder to see against a bright sky. Depth perception on the fairway feels off. Night driving back from dinner in Palm Desert becomes stressful. Colors look washed out. By the time most patients come to see me, they have been compensating for months or years without realizing how much vision they have lost.
          </p>
          <p className="prose">
            I see La Quinta patients regularly, and the conversation almost always starts the same way: they want to get back to the activities they love, and they want a surgeon who takes the time to understand what that means for their lens choice and surgical plan. That is exactly how I practice.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> Desert Vision Center is my practice. No corporate oversight, no private equity investors dictating how I practice medicine. Every decision is made for one reason: what is best for your eyes.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, learning surgical precision from one of the most respected cataract surgeons in the world. That foundation shapes every surgery I perform.</li>
            <li><strong>Retina fellowship:</strong> My additional training in retina surgery gives me a complete view of the eye. I assess not just the cataract, but the retina, macula, and optic nerve. This matters especially for patients with diabetes, macular degeneration, or previous retina procedures.</li>
            <li><strong>Over 20,000 surgeries:</strong> Surgical experience compounds. After this many procedures, I have encountered and managed virtually every complication and anatomical variation that cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients turned away elsewhere, patients with prior surgical complications, patients with multiple eye conditions. These are a core part of my practice, not an occasional exception.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized annually by Palm Springs Life. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services for <strong>Active Eyes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            For La Quinta patients with outdoor-focused lifestyles, the lens choice in cataract surgery is particularly important. Here is what Desert Vision Center offers:
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, modern technique performed personally by Dr. Tokuhara. No hand-offs, no assistants doing the surgery. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral surgery for eligible patients. Both eyes in one visit means fewer trips from La Quinta and a faster return to your activities. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range, toric lenses that reduce astigmatism, and multifocal options. For golfers and tennis players, the right lens can mean the difference between glasses on the course and freedom from them. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, Yamane technique, iris reconstruction, and cases requiring advanced surgical skill. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Comprehensive eye care:</strong> Glaucoma management, diabetic eye care, dry eye treatment, and ongoing monitoring for patients with multiple conditions. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/dry-eyes-desert">Dry eye</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            La Quinta patients tend to ask sharp, specific questions. They have done their research. They want to know why one lens versus another, what the realistic outcomes are, and whether the surgeon they are considering has handled cases like theirs before. I welcome that.
          </p>
          <p className="prose">
            My training under Dr. Howard Gimbel during residency was not just technical. It instilled a philosophy: understand the eye in front of you, plan meticulously, and execute precisely. My retina fellowship added another layer. When I evaluate your eyes for cataract surgery, I am assessing the full picture, including the health of the retina and the optic nerve, which can affect both the surgical plan and the visual outcome.
          </p>
          <p className="prose">
            With over 20,000 surgeries, I bring an experience base that is difficult to match. But numbers alone are not the point. What matters is that when something unexpected happens in the operating room, or when a patient's eyes present an unusual challenge, I have the training, experience, and judgment to adapt. That confidence comes from years of handling exactly those situations.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Your outdoor lifestyle is not an afterthought in the lens selection conversation. It is the starting point. For La Quinta patients who golf, play tennis, cycle, or hike, the surgical plan is built around getting you back to what you love with the clearest, most comfortable vision possible.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>La Quinta</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From La Quinta, the drive is approximately 15 to 20 minutes.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Head northwest on Highway 111 through Indian Wells and Palm Desert toward Rancho Mirage. Turn right onto Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Take I-10 west to the Bob Hope Drive exit. Head south on Bob Hope Drive. The office is on your left before you reach Highway 111.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. For CLEAR in a Day patients, both eyes are treated in one visit, which means fewer total trips from La Quinta.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>La Quinta residents: ready to see your best <strong>game again?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is a short drive from La Quinta. Call us or send a message to schedule a consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
