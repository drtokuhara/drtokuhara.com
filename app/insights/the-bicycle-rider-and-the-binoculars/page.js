import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'The Bicycle Rider Who Taught Me About Anisometropia - Dr. Keith Tokuhara',
  description: 'An avid cyclist described the vision imbalance between his eyes after cataract surgery as turning a binocular focusing wheel that never quite gets there. His analogy changed how Dr. Tokuhara explains anisometropia to patients.',
  keywords: ['anisometropia after cataract surgery', 'vision imbalance after cataract surgery', 'different prescription between eyes', 'cataract surgery one eye', 'binocular vision after cataract surgery'],
  alternates: { canonical: '/insights/the-bicycle-rider-and-the-binoculars' },
  openGraph: {
    title: 'The Bicycle Rider Who Taught Me About Anisometropia | Dr. Keith Tokuhara',
    description: 'An avid cyclist described the vision imbalance between his eyes after cataract surgery as turning a binocular focusing wheel that never quite gets there. It was the most accurate description of anisometropia I have ever heard.',
    url: 'https://drtokuhara.com/insights/the-bicycle-rider-and-the-binoculars',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Bicycle Rider Who Taught Me About Anisometropia',
    description: 'Sometimes a patient describes a condition better than any textbook. An avid cyclist and his binoculars.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is anisometropia after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Anisometropia is a significant difference in prescription between the two eyes. After cataract surgery in one eye, the operated eye may see clearly at distance while the other eye still has its original refractive error and cataract. This difference can cause the brain to struggle to combine the two images comfortably.' } },
    { '@type': 'Question', name: 'What are the symptoms of anisometropia?', acceptedAnswer: { '@type': 'Answer', text: 'Common symptoms include headaches, eye strain, a sense of imbalance, difficulty with depth perception, and a general feeling that something is off with your vision. Some patients describe it as trying to focus binoculars that never quite reach the right setting.' } },
    { '@type': 'Question', name: 'Does anisometropia go away after second eye cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, yes. When the second eye has cataract surgery and both eyes are brought to similar prescriptions, the imbalance resolves and both eyes work together comfortably again. This is one reason surgeons discuss timing and expectations before the first surgery.' } },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'The Bicycle Rider Who Taught Me About Anisometropia',
    description: 'An avid cyclist described the vision imbalance between his eyes after cataract surgery as turning a binocular focusing wheel that never quite gets there. His analogy changed how Dr. Tokuhara explains anisometropia to patients.',
    slug: '/insights/the-bicycle-rider-and-the-binoculars',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Bicycle Rider and the Binoculars', href: '/insights/the-bicycle-rider-and-the-binoculars' },
  ]),
  faqSchema,
];

export default function InsightBicycleRider() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-mountain-sierra-alpine.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">The Human Side</span>
          <h1>The Bicycle Rider Who Taught Me About <strong>Anisometropia</strong></h1>
          <p className="page-hero-sub">He described the vision imbalance between his eyes as turning a binocular focusing wheel that never quite gets there. It was the most accurate description I have ever heard.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            One of the most memorable lessons about vision did not come from a textbook. It came from an avid cyclist in his seventies who was preparing for a long summer ride through the mountains.
          </p>
          <p>
            He came to our office for a cataract evaluation because his vision had gradually become more difficult while riding and driving. Like many active patients, he wanted the sharpest possible distance vision for the activities he loved most.
          </p>
          <p>
            After discussing his options, he chose a monofocal lens designed for distance vision in his first eye. The surgery went beautifully.
          </p>
          <p>
            The next day, his vision in the operated eye was already noticeably clearer. But instead of celebrating his newfound clarity, he described a strange and frustrating sensation.
          </p>
          <p>
            His explanation stopped me in my tracks.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Binocular <strong>Wheel</strong></h2>

          <BlurReveal><div className="pull-quote">
            <p>&ldquo;Have you ever picked up a pair of binoculars? You know how there&rsquo;s a little wheel in the middle that you turn until everything snaps into focus? That&rsquo;s what my eyes feel like right now. It&rsquo;s as if I&rsquo;m turning that wheel over and over, trying to get both sides to match, but it never quite gets there.&rdquo;</p>
          </div></BlurReveal>

          <p>
            It was one of the most accurate descriptions of anisometropia I have ever heard.
          </p>
          <p>
            Anisometropia occurs when there is a significant difference in prescription between the two eyes. In his case, the newly operated eye was seeing clearly at distance while the other eye still had the refractive error and cataract it had always had. The difference was roughly three diopters.
          </p>
          <p>
            On paper, that may not sound dramatic.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Two Eyes, Two <strong>Different Pictures</strong></h2>
          <p>
            In real life, the brain suddenly receives two very different images. One image is clearer. One image is blurrier. The images may even appear slightly different in size. The eyes themselves may be healthy, but the visual system struggles to combine those images into one comfortable picture.
          </p>
          <p>
            Many patients describe headaches, eye strain, imbalance, or difficulty with depth perception. Others simply say that something feels &ldquo;off.&rdquo;
          </p>
          <p>
            For this cyclist, the binocular analogy captured it perfectly. No matter how hard he tried, the focusing wheel never seemed to reach the right setting.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>This is why cataract surgeons frequently discuss anisometropia before surgery, particularly when we expect a difference of three diopters or more between the eyes. While some patients tolerate it quite well, others find it surprisingly disruptive.</strong></p>
          </div></BlurReveal>

          <div className="content-image" style={{marginTop: '32px', marginBottom: '32px'}}>
            <Image
              src="/media/insights/anisometropia-binocular-vision-illustration.png"
              alt="Illustration showing the view through binoculars with one side clear and one side blurry, representing how anisometropia creates a vision imbalance between the two eyes after cataract surgery"
              width={680}
              height={680}
              style={{ width: '100%', maxWidth: '520px', height: 'auto', borderRadius: '12px', margin: '0 auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Decision to <strong>Proceed</strong></h2>
          <p>
            His second eye could still be corrected to about 20/30. By traditional standards, that is not terrible vision. But visual quality is about more than letters on an eye chart. It is about how comfortably the two eyes work together.
          </p>
          <p>
            Because his symptoms were significant, we decided to proceed with cataract surgery in the second eye.
          </p>
          <p>
            Afterward, everything changed.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The binoculars finally came into focus.</p>
          </div></BlurReveal>

          <p>
            Both eyes were working together again. The imbalance disappeared. His distance vision was sharp, comfortable, and natural. Most importantly, he was able to get back to the activities that mattered most to him.
          </p>
          <p>
            Not long afterward, he was back on the road, ready for another season of cycling and adventure.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">More Than an <strong>Eye Chart</strong></h2>
          <p>
            His story serves as an important reminder that cataract surgery is not simply about improving the vision in one eye. It is about restoring the way both eyes work together as a team.
          </p>
          <p>
            Sometimes the most important measurement is not what we see on the eye chart. It is whether the patient can once again experience the world comfortably, clearly, and without having to keep turning the focusing wheel.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00313d 0%, #004d5c 100%)', color: '#fff'}}>
        <div className="container content-narrow" style={{textAlign: 'center', padding: '48px 0'}}>
          <h2 style={{fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '12px', fontFamily: 'var(--serif)'}}>Questions About Vision After <strong>Cataract Surgery?</strong></h2>
          <p style={{color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6}}>If something feels off after surgery in one eye, or if you are considering surgery and want to understand what to expect, we are here to help.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Learn <strong>More</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>The Standard Lens Is Not a Consolation Prize</h3>
              <p>Why the monofocal lens is the right choice for many patients, and why recommending it is a sign of precision, not limitation.</p>
            </Link>
            <Link href="/insights/the-standard-lens-was-the-right-call" className="related-card">
              <h3>The Standard Lens Was the Right Call</h3>
              <p>A patient who researched every premium option, chose the standard lens, and six months later has no regrets.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A complete guide to the lens options available during cataract surgery and how to choose.</p>
            </Link>
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>Your First Week After Surgery</h3>
              <p>What is normal and what to watch for in the days following cataract surgery.</p>
            </Link>
            <Link href="/clear-in-a-day" className="related-card">
              <h3>CLEAR in a Day</h3>
              <p>Same-day bilateral cataract surgery for eligible patients. Both eyes, one visit, faster visual balance.</p>
            </Link>
            <Link href="/cataract-recovery" className="related-card">
              <h3>Cataract Recovery Guide</h3>
              <p>What to expect in the days and weeks after cataract surgery, from eye drops to follow-up visits.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
