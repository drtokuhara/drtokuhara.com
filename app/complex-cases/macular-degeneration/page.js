import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import {
  ScrollReveal,
  VideoBackground,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';
import RelatedComplexCases from '../../components/RelatedComplexCases';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';

const jsonLd = [
  articleSchema({
    title: 'Macular Degeneration and Cataract Surgery - The Only Dual-Trained Surgeon in the Valley',
    description: 'Dr. Tokuhara is the only cataract surgeon in the Coachella Valley who is both board certified and fellowship trained in retina. He manages macular degeneration and cataracts together.',
    slug: '/complex-cases/macular-degeneration',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Macular Degeneration', href: '/complex-cases/macular-degeneration' },
  ]),
];

export const metadata = {
  title: 'Macular Degeneration and Cataract Surgery - Dual-Trained Cataract and Retina Specialist',
  description: 'Dr. Tokuhara is the only cataract surgeon in the Coachella Valley who is board certified AND fellowship trained in retina. He manages both macular degeneration and cataracts, giving patients complete care under one roof.',
  alternates: { canonical: '/complex-cases/macular-degeneration' },
  openGraph: {
    title: 'Macular Degeneration & Cataract Surgery | Dr. Keith Tokuhara',
    description: 'The only dual-trained cataract and retina specialist in the Coachella Valley. Complete macular degeneration and cataract care.',
    url: 'https://drtokuhara.com/complex-cases/macular-degeneration',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "Can I have cataract surgery with macular degeneration?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Cataract surgery is safe and beneficial for most patients with macular degeneration. Removing the cataract allows better monitoring of the retina and often improves functional vision even when macular degeneration limits central acuity. Premium multifocal lenses are generally not recommended in these cases." } },
    { '@type': 'Question', name: "Will cataract surgery improve vision if I have macular degeneration?", acceptedAnswer: { '@type': 'Answer', text: "Cataract surgery removes the cloudy lens, which is a separate problem from macular degeneration. Patients typically experience brighter, clearer peripheral vision and improved contrast. The degree of central vision improvement depends on the severity of the macular disease." } }
  ],
};

export default function MacularDegenerationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        bottomOverlay={<AudioNarration src="/audio/narrations/macular-degeneration.mp3" />}
        src="/media/ambient-desert-twilight-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <h1>Macular Degeneration and <strong>Cataract Surgery</strong></h1>
          <p className="page-hero-sub">The only cataract surgeon in the Coachella Valley who is board certified and fellowship trained in retina. Both conditions, one doctor who understands them completely.</p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">A Unique <strong>Perspective</strong></h2>
          <p className="prose">
            Most cataract surgeons are not retina specialists. Most retina specialists do not perform cataract surgery. I do both. I completed my cataract training under Dr. Howard Gimbel, one of the most respected cataract surgeons in the world, and I completed a retina fellowship at Loma Linda University. I am the only cataract surgeon in the Coachella Valley who is both board certified and fellowship trained in retina.
          </p>
          <p className="prose">
            This matters more than you might think. When a patient has both macular degeneration and cataracts - and many do, since both are age-related conditions - the cataract surgeon needs to understand the retina to make good decisions. What lens to choose, what visual outcome to expect, whether the timing is right for surgery, and how the cataract is affecting the ability to monitor and treat the macular disease.
          </p>
          <p className="prose">
            A cataract surgeon without retina training looks at the lens. I look at the whole eye.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-seniors-formal-resort-dusk.jpg"
              alt="Seniors walking along a resort promenade at night - enjoying life with well-managed eye conditions"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/macular-degeneration-vision-sim.png"
              alt="Simulation of vision with age-related macular degeneration showing central vision loss with clear peripheral vision in a Coachella Valley landscape"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <div className="content-image-caption">How macular degeneration affects vision: the center of your view becomes blurred or dark while peripheral vision remains clear. Cataract surgery can improve the surrounding vision and make monitoring the retina easier.</div>
          </div>
          <h2 className="section-title">How Macular Degeneration Affects <strong>Cataract Decisions</strong></h2>
          <p className="prose">
            Macular degeneration limits the eye's central vision. Even with a perfect cataract surgery and a perfect lens implant, a patient with significant macular disease will not achieve 20/20 vision. The cataract surgery removes one obstacle (the cloudy lens), but the macular problem remains. This means the visual improvement from surgery may be less dramatic than it would be in an eye with a healthy macula.
          </p>
          <p className="prose">
            That does not mean surgery is not worthwhile. In many cases, removing the cataract still provides meaningful improvement - better contrast, less glare, clearer peripheral vision, and improved ability to function in daily life. And critically, removing the cataract gives me and your retina specialist a better view of the macula for monitoring and treatment.
          </p>

          <h2 className="section-title">Lens Selection with <strong>Macular Disease</strong></h2>
          <p className="prose">
            Lens implant choice is particularly important in patients with macular degeneration:
          </p>
          <ul className="content-list">
            <li><strong>Multifocal lenses are generally not recommended:</strong> These lenses split light into multiple focal points, which reduces contrast sensitivity. A patient with macular degeneration already has compromised contrast. Adding a multifocal lens can make things worse, not better.</li>
            <li><strong>Monofocal lenses are often the safest choice:</strong> A high-quality monofocal lens delivers the best optical quality and highest contrast. For a patient whose macula is compromised, every bit of contrast matters.</li>
            <li><strong>Yellow-tinted (blue-filtering) IOLs:</strong> Some evidence suggests that blue-light filtering IOLs may offer a degree of macular protection, though this remains debated. I discuss the evidence with patients and let them make an informed choice.</li>
            <li><strong>Future-proofing the choice:</strong> I think about what might happen to the macula over the next 10 to 20 years. A lens choice that works well now but creates problems if the macular disease progresses is not a good choice.</li>
          </ul>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-convertible-desert.jpg"
              alt="Couple riding in a golf cart - maintaining an active desert lifestyle"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Complete Care Under <strong>One Roof</strong></h2>
          <p className="prose">
            Because I manage both conditions, you are not bouncing between a cataract surgeon and a retina specialist who may not communicate effectively. I can assess your cataract, evaluate your macula, discuss the interplay between the two, and make a unified recommendation. If you need anti-VEGF injections for wet macular degeneration, I understand how that treatment interacts with surgical timing. If your dry macular degeneration is being monitored, I know what to look for and when to be concerned.
          </p>
          <p className="prose">
            This is not marketing. It is a genuine clinical advantage. Fragmented care leads to miscommunication, delayed decisions, and suboptimal outcomes. Integrated care leads to better decisions and better results.
          </p>

          <h2 className="section-title">Setting Honest <strong>Expectations</strong></h2>
          <p className="prose">
            I will always be straightforward about what cataract surgery can and cannot do for a patient with macular degeneration. I will not promise perfect vision when the macula limits it. But I will explain exactly what improvement to expect and why it is worth pursuing. For most patients with both conditions, the answer is clear: removing the cataract helps. The question is how much, and the answer depends on the specifics of your macula, your cataract, and your visual goals.
          </p>
        </div>
      </section>

      <RelatedComplexCases current="macular-degeneration" />
      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Have macular degeneration and cataracts? <strong>Let&rsquo;s talk.</strong></h2>
          <p>I&rsquo;m the only cataract surgeon in the valley with retina fellowship training. I understand both conditions and can give you a complete picture.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
