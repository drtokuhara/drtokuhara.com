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
      name: 'Who is the best cataract surgeon near Indian Wells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 10 minutes from Indian Wells. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Indian Wells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 10-minute drive from Indian Wells via Highway 111. The office has ample parking and is easily accessible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get premium lens implants near Indian Wells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Desert Vision Center offers the full range of premium lens implants including EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. Dr. Tokuhara personalizes every lens recommendation based on your anatomy, lifestyle, and visual goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara handle complex cataract cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Complex cases are a core part of Dr. Tokuhara\'s practice. He manages patients with previous eye surgery, dislocated lenses, complications from prior procedures, and conditions like diabetes, glaucoma, and pseudoexfoliation. He is fellowship-trained in both cataract and retina surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to schedule a cataract consultation from Indian Wells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is needed. Indian Wells residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form. Many patients self-refer after researching cataract surgeons in the Coachella Valley.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Indian Wells', href: '/cataract-surgeon-indian-wells' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Indian Wells | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Indian Wells residents: Dr. Keith Tokuhara at Desert Vision Center is just 10 minutes away in Rancho Mirage. Fellowship-trained cataract surgeon, 20,000+ surgeries, premium lens implants, complex case expertise. Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-indian-wells',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Indian Wells | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, 10 minutes from Indian Wells. Premium lenses, complex cases, physician-owned practice. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-indian-wells',
  },
};

export default function CataractSurgeonIndianWellsPage() {
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
          <h1>Cataract Surgeon in <strong>Indian Wells</strong></h1>
          <p className="page-hero-sub">
            Indian Wells sets a high bar for everything. Your cataract surgeon should meet it. Desert Vision Center is 10 minutes away in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Care for <strong>Indian Wells</strong> Residents</h2>
          </ScrollReveal>
          <p className="prose">
            Indian Wells is a community built around excellence. From the world-class BNP Paribas Open to the city's beautifully maintained neighborhoods, residents here expect precision and quality in every aspect of their lives. Healthcare should be no different.
          </p>
          <p className="prose">
            When cataracts begin to affect your vision, the impact is personal. Maybe reading feels like more effort than it should. Maybe driving home after dinner on Highway 111 is less comfortable than it used to be. Maybe the tennis ball is harder to track, or your grandchildren's faces are not as sharp across the room. These are not small inconveniences for people who came to Indian Wells to live well.
          </p>
          <p className="prose">
            I treat a number of patients from Indian Wells, and I understand the standard they expect. My consultations are unhurried and thorough. I explain what is happening in your eyes, what your options are, and what I honestly recommend. There is no assembly-line approach, no corporate formula. Just a fellowship-trained surgeon who treats every patient as an individual.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Indian Wells residents have access to healthcare across the Coachella Valley. Here is why many choose Desert Vision Center:
          </p>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> Desert Vision Center is not part of a corporate chain or private equity portfolio. Every decision I make is based on what is best for your eyes, not what maximizes throughput or revenue.</li>
            <li><strong>Training that sets the standard:</strong> I trained under Dr. Howard Gimbel during my residency at Loma Linda University, learning surgical techniques that are considered the gold standard worldwide. After residency, I completed a retina fellowship, giving me a complete understanding of the eye from front to back.</li>
            <li><strong>Over 20,000 surgeries:</strong> Experience matters when something unexpected happens in the operating room. After more than 20,000 procedures, I have managed virtually every complication and variation cataract surgery can present.</li>
            <li><strong>Complex case expertise:</strong> Patients with previous eye surgery, dislocated lenses, diabetes, glaucoma, pseudoexfoliation, or complications from prior procedures are a core part of my practice. I do not shy away from difficult cases. I specialize in them.</li>
            <li><strong>No referral arrangements:</strong> Patients come to Desert Vision Center because of reputation and outcomes, not because of financial referral arrangements. That independence is central to how I practice.</li>
            <li><strong>Consistent recognition:</strong> Palm Springs Life Top Doctor every year from 2019 through 2026. NBC Best Cataract Surgeon in the Coachella Valley.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services <strong>Available</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> State-of-the-art techniques performed personally by Dr. Tokuhara from start to finish. <Link href="/cataract-surgery">Learn more about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit, minimizing time away from your activities. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options tailored to how you use your eyes. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, Yamane sutured lenses, iris reconstruction, and cases other surgeons have declined. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma care:</strong> Comprehensive monitoring, medical management, and surgical options. <Link href="/glaucoma">Learn about glaucoma</Link>.</li>
            <li><strong>Diabetic eye care:</strong> Fellowship-trained retina expertise for diabetic retinopathy, including in-house injections and laser treatment. <Link href="/diabetic-retinopathy">Learn about diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The surgeon you choose for cataract surgery will make decisions in the operating room that affect your vision for the rest of your life. Training, experience, and judgment matter more than marketing.
          </p>
          <p className="prose">
            My training under Dr. Howard Gimbel during residency gave me a foundation in surgical precision that I carry into every case. My retina fellowship added a dimension that most cataract surgeons lack: an understanding of the entire eye, including the macula and optic nerve, that informs how I plan and execute surgery.
          </p>
          <p className="prose">
            Whether you spend your days on the tennis court, reading in your garden, working from home, or keeping up with grandchildren, I bring that training to bear on your lens selection, your surgical plan, and your post-operative care. Premium lens implants can reduce or eliminate dependence on glasses, and the right choice depends on a detailed understanding of both your anatomy and how you actually use your eyes every day.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Indian Wells residents expect their healthcare to match the standard they set in every other part of their lives. Desert Vision Center was built on that same principle: no compromises on training, equipment, time, or attention.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Indian Wells</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Indian Wells, the drive is approximately 10 minutes.
          </p>
          <p className="prose">
            <strong>From central Indian Wells:</strong> Head northwest on Highway 111 through Palm Desert toward Rancho Mirage. Turn right onto Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>From the Indian Wells Tennis Garden area:</strong> Take Miles Avenue or Washington Street north to Highway 111, then head west toward Rancho Mirage.
          </p>
          <p className="prose">
            Ample parking is available directly in front of the building. Post-operative follow-up visits are typically brief, and the short drive from Indian Wells makes the entire surgical experience convenient.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Indian Wells residents: ready to see clearly <strong>again?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is just 10 minutes from Indian Wells. Schedule a consultation today. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
