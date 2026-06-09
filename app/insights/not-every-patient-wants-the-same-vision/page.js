import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Not Every Cataract Surgery Patient Wants the Same Vision - Dr. Keith Tokuhara',
  description: 'A physician underwent cataract surgery after LASIK with a Vivity lens and intentional near-target to optimize his professional work. A case about personalized vision, lens choice, and understanding that success is not one-size-fits-all.',
  keywords: ['personalized cataract surgery', 'vivity lens for doctors', 'cataract surgery for physicians', 'lens choice for near vision', 'customized IOL selection', 'cataract surgery after LASIK'],
  alternates: { canonical: '/insights/not-every-patient-wants-the-same-vision' },
  openGraph: {
    title: 'Not Every Cataract Surgery Patient Wants the Same Vision | Dr. Keith Tokuhara',
    description: 'A physician chose cataract surgery optimized for near and intermediate work over perfect distance vision. A case about personalization and understanding your visual priorities.',
    url: 'https://drtokuhara.com/insights/not-every-patient-wants-the-same-vision',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Not Every Cataract Surgery Patient Wants the Same Vision',
    description: 'The best cataract surgery is not the same for everyone. It is about alignment between the technology and how you live.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can cataract surgery be customized to my lifestyle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Modern cataract surgery allows surgeons to choose from multiple lens types and refractive targets based on each patient\'s visual priorities. A surgeon can target distance vision, near vision, or balanced intermediate vision depending on what matters most to you in your daily life and work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Vivity lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Vivity lens is an extended depth-of-focus (EDOF) intraocular lens that provides a broader range of vision than a standard monofocal lens while producing relatively fewer nighttime halos and glare compared to traditional multifocal lenses. It is designed to optimize intermediate and functional near vision while maintaining good distance vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you have cataract surgery after LASIK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it requires more detailed planning. Prior LASIK changes the shape of the cornea, which can affect the accuracy of lens power calculations during cataract surgery. Experienced surgeons use specialized measurements and calculation methods to account for these changes and achieve accurate outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to target near vision instead of distance after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Depending on a patient\'s work and lifestyle, the surgeon may intentionally target slight residual myopia to optimize near and intermediate vision. This approach is often chosen by professionals who spend most of their day working at close distances, such as physicians, dentists, artists, or those who do detailed computer work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do some patients still need glasses after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because every lens involves trade-offs. A patient who chooses excellent near and intermediate vision may still prefer glasses for certain distance tasks like nighttime driving. Conversely, a patient who optimizes distance vision will likely need glasses for reading. The goal is not perfection in every category simultaneously but rather alignment with how you actually live and work.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Not Every Cataract Surgery Patient Wants the Same Vision',
    description: 'A physician underwent cataract surgery after LASIK with a Vivity lens and intentional near-target to optimize his professional work. A case about personalized vision and understanding that success is not one-size-fits-all.',
    slug: '/insights/not-every-patient-wants-the-same-vision',
    datePublished: '2026-05-24',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Not Every Patient Wants the Same Vision', href: '/insights/not-every-patient-wants-the-same-vision' },
  ]),
  faqSchema,
];

export default function NotEveryPatientWantsSameVisionPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground
        src="/media/ambient-mountain-sierra-alpine.mp4"
        poster="/media/hero-cataracts-glaucoma.jpg"
        fallbackColor="#0a1628"
        overlayOpacity={0.7}
        overlayColor="10, 22, 40"
        className="page-hero page-hero-image"
        style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}
        bottomOverlay={<AudioNarration src="/audio/narrations/not-every-patient-wants-the-same-vision.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <p className="page-hero-eyebrow">Clinical Insight</p>
            <h1 className="page-hero-title">Not Every Cataract Surgery Patient Wants the Same Vision</h1>
            <p className="page-hero-sub">A physician&rsquo;s choice to optimize near and intermediate vision over perfect distance.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <article className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 24, 2026" />

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              A 59-year-old physician came to my office for a cataract evaluation after noticing worsening vision in his left eye over several months. He had previously undergone LASIK for nearsightedness many years earlier and had enjoyed good vision for a long time afterward.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              But now things were changing.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              As a procedural specialist, his vision was not just about convenience. It directly affected how he worked, how confidently he performed procedures, and how efficiently he moved through long days of patient care.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              He told me something many surgeons quietly worry about but rarely say out loud: even small declines in visual quality can become mentally exhausting when your profession depends on precision.
            </p>
          </ScrollReveal>

          <BlurReveal once={true}>
            <div style={{ background: 'var(--sand-light, #f8f5f0)', padding: '32px', borderRadius: '12px', margin: '32px 0', borderLeft: '4px solid var(--oasis)' }}>
              <p className="prose" style={{ margin: 0 }}>
                His examination showed 20/20 vision in the right eye but 20/50 vision in the left eye with a significant myopic shift requiring about a -4 prescription. We could clearly see the old LASIK flaps in both corneas, along with some mild interface haze in the left eye. He also had a moderate nuclear sclerotic cataract in that eye, which explained both the progressive blur and the refractive shift.
              </p>
            </div>
          </BlurReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/dvc-phoropter-exam.png"
              alt="Patient receiving a detailed phoropter examination at Desert Vision Center"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              From a clinical standpoint, this case was interesting because several factors had to be balanced carefully.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Patients with prior myopic LASIK often require more detailed planning before cataract surgery because previous corneal reshaping can affect intraocular lens calculations. In addition, this patient&rsquo;s professional demands were highly specific. He spent much of his day working at near and intermediate distances: operating, reviewing charts, documenting on computers, and interacting with patients in examination rooms.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              In other words, his visual priorities were different from someone whose primary goal might be driving or distance activities.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Lens Discussion</h2>
            <p className="prose">
              We spent a long time discussing lens options, visual goals, and realistic trade-offs. He strongly desired spectacle independence because constantly switching between glasses during procedures and patient care disrupted his workflow and concentration.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Ultimately, he chose a Vivity lens, an extended depth-of-focus intraocular lens designed to provide a broader range of vision with relatively minimal nighttime visual side effects compared to some multifocal lenses.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              But equally important was the refractive target.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Rather than aiming for perfect distance vision, we intentionally targeted slight residual myopia in the operated eye. That decision was highly personalized to his lifestyle and work demands. By leaving him slightly nearsighted, we optimized his ability to function comfortably at near and intermediate distances without glasses.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Outcome</h2>
            <p className="prose">
              His surgery went smoothly and without complications.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              After surgery, he achieved excellent uncorrected near and intermediate vision. He could comfortably perform computer work, review patient charts, and function in procedural settings without glasses. For distance, he measured approximately 20/40 uncorrected and corrected to 20/20 with glasses. He still prefers glasses for nighttime driving, but for the majority of his daily life, he functions independently without correction and remains extremely happy with the outcome.
            </p>
          </ScrollReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-69yo-man-pool-palm-desert.jpg"
              alt="Active man enjoying life in Palm Desert with restored vision after cataract surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              What I appreciate about this case is that it demonstrates an important truth about modern cataract surgery: success is not one-size-fits-all.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Personalization Principle</h2>
            <p className="prose">
              Many patients assume cataract surgery is simply about &ldquo;making vision 20/20.&rdquo; But in reality, vision is personal. A professional photographer, a truck driver, a pilot, a teacher, and a surgeon may all prioritize completely different things even if they technically have the same eye condition.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              The psychology behind these decisions matters just as much as the measurements.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              For highly detail-oriented professionals, vision problems often create a unique type of stress. It is not only the fear of blur itself. It is the fear of losing efficiency, confidence, precision, or independence in an environment where performance matters deeply. In medicine especially, physicians are often uncomfortable becoming patients themselves. They are used to being the one solving problems, not experiencing vulnerability. This patient approached the process thoughtfully, analytically, and with a clear understanding that every lens choice involves compromise.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              And that is one of the most important philosophical lessons in ophthalmology.
            </p>
          </ScrollReveal>

          <BlurReveal once={true}>
            <div style={{ background: 'var(--sand-light, #f8f5f0)', padding: '32px', borderRadius: '12px', margin: '40px 0', borderLeft: '4px solid var(--oasis)' }}>
              <p className="prose" style={{ fontWeight: 700, fontSize: '1.4rem', margin: 0, color: 'var(--midnight)' }}>
                There is no perfect lens.
              </p>
            </div>
          </BlurReveal>

          <BlurReveal><div className="pull-quote">
            <p>"The goal is not perfection in every category simultaneously. The goal is alignment between the technology and the patient's real life."</p>
          </div></BlurReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Every visual solution in life involves trade-offs. The goal is not perfection in every category simultaneously. The goal is alignment between the technology and the patient&rsquo;s real life.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              Sometimes the best outcome is not the sharpest distance chart measurement. Sometimes it is the ability to move naturally through daily life with less friction, less dependence, and greater ease.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              For this patient, the ability to work comfortably at near and intermediate distances mattered more than being completely glasses-free for nighttime driving. Once that priority became clear, the surgical plan became clearer too.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Customization, Not Just Surgery</h2>
            <p className="prose">
              That is where cataract surgery becomes more than a procedure. It becomes customization.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" once={true}>
            <p className="prose">
              The best cataract surgery is not simply about removing a cloudy lens. It is about understanding how a patient lives, works, reads, drives, creates, and experiences the world.
            </p>
          </ScrollReveal>

          <BlurReveal once={true}>
            <div style={{ background: 'var(--sand-light, #f8f5f0)', padding: '32px', borderRadius: '12px', margin: '40px 0', borderLeft: '4px solid var(--oasis)' }}>
              <p className="prose" style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                Because ultimately, the best vision is not the same for everyone.
              </p>
            </div>
          </BlurReveal>

          <ScrollReveal direction="up" once={true}>
            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e0d8' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Related Reading</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><Link href="/vivity-vs-panoptix" className="lux-text-link">Vivity vs PanOptix</Link></li>
                <li><Link href="/insights/are-premium-lenses-worth-it" className="lux-text-link">Are Premium Lenses Worth It?</Link></li>
                <li><Link href="/insights/best-lens-for-night-driving" className="lux-text-link">Best Lens for Night Driving</Link></li>
                <li><Link href="/insights/choosing-the-standard-lens" className="lux-text-link">Choosing the Standard Lens</Link></li>
                <li><Link href="/complex-cases/previous-lasik" className="lux-text-link">Cataract Surgery After LASIK</Link></li>
                <li><Link href="/insights/three-things-patients-say" className="lux-text-link">Three Things Patients Say</Link></li>
                <li><Link href="/insights/when-more-isnt-better" className="lux-text-link">When More Isn&rsquo;t Better</Link></li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
