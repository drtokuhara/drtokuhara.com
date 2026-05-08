import Link from 'next/link';
import Image from 'next/image';
import DynamicLightPortrait from '../DynamicLightPortrait';
import { physicianSchema, breadcrumbSchema } from '../schema';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
  ParallaxImage,
  KineticText,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Dr. Tokuhara\'s training and background?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Keith Tokuhara is a fellowship-trained cataract and anterior segment surgeon. He completed his fellowship under Dr. Howard Gimbel, a pioneer in cataract surgery. He is also board certified in retina, making him uniquely qualified to manage complex cases involving both the front and back of the eye.' } },
    { '@type': 'Question', name: 'Is Desert Vision Center a private or corporate practice?', acceptedAnswer: { '@type': 'Answer', text: 'Desert Vision Center is a fully independent, physician-owned practice. Dr. Tokuhara is not affiliated with any corporate or private-equity group. This independence means treatment decisions are based solely on what is best for the patient, not corporate quotas or profit targets.' } },
    { '@type': 'Question', name: 'Where is Desert Vision Center located?', acceptedAnswer: { '@type': 'Answer', text: 'Desert Vision Center is located in Rancho Mirage, California, serving the Coachella Valley and surrounding areas including Palm Springs, Palm Desert, Indian Wells, and La Quinta.' } },
    { '@type': 'Question', name: 'Does Dr. Tokuhara do international surgical missions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Tokuhara participates in international surgical missions, bringing advanced eye care to underserved communities. These experiences reinforce his commitment to ethical, patient-centered care.' } },
    { '@type': 'Question', name: 'What makes Dr. Tokuhara different from other cataract surgeons?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Tokuhara combines fellowship training in both cataract/anterior segment surgery and retina, physician independence from corporate influence, expertise in complex and revision cases, and a commitment to ethical care. He is a surgeon other doctors refer their most challenging cases to.' } },
  ],
};

const jsonLd = [
  physicianSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ]),
  faqSchema,
];

export const metadata = {
  title: 'About Dr. Keith Tokuhara - The Surgeon Behind the Scrub Cap',
  description: 'The full story. Training under Dr. Howard Gimbel, international surgical missions, complex case expertise, and why physician independence matters. Meet the person, not just the credentials.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Dr. Keith Tokuhara | Cataract Surgeon',
    description: 'Fellowship trained cataract surgeon in Rancho Mirage. The full story behind Desert Vision Center.',
    url: 'https://drtokuhara.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{"@context": "https://schema.org", "@type": "VideoObject", "name": "Ethical Cataract Surgery & Patient-First Eye Care | Dr. Tokuhara at Ethics in Eyecare 2025", "description": "On June 28, 2025, local physicians and advocates gathered for the Ethics in Eyecare event hosted by Desert Vision Center", "thumbnailUrl": "https://i.ytimg.com/vi/sG3rN3WXW3o/maxresdefault.jpg", "uploadDate": "2025-06-29", "duration": "PT1M22S", "contentUrl": "https://www.youtube.com/watch?v=sG3rN3WXW3o", "embedUrl": "https://www.youtube.com/embed/sG3rN3WXW3o"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "The unspoken story of cataract referral kickbacks:   What you need to know", "description": "I get this question often enough from patients that I thought it would be worthwhile to make a video about it. It\u2019s the ", "thumbnailUrl": "https://i.ytimg.com/vi/oPV_lteXtzo/maxresdefault.jpg", "uploadDate": "2024-07-02", "duration": "PT4M51S", "contentUrl": "https://www.youtube.com/watch?v=oPV_lteXtzo", "embedUrl": "https://www.youtube.com/embed/oPV_lteXtzo"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Welcome to Desert Vision Center:  Dr. Tokuhara Cataract Surgeon", "description": "From the talented team at Desert Vision Center, we bring you videos of our daily life, our patients, and our world-class", "thumbnailUrl": "https://i.ytimg.com/vi/ZoV2RTUlEZo/maxresdefault.jpg", "uploadDate": "2022-02-12", "duration": "PT55S", "contentUrl": "https://www.youtube.com/watch?v=ZoV2RTUlEZo", "embedUrl": "https://www.youtube.com/embed/ZoV2RTUlEZo"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Dr. Tokuhara Recognized on NBC as the Best Cataract Surgeon in Coachella Valley", "description": "In this short segment clip from NBC\u2019s Roggin Report (aired May 16, 2025), Dr. Tokuhara is recognized as the best catarac", "thumbnailUrl": "https://i.ytimg.com/vi/aXl4PhNQBg8/maxresdefault.jpg", "uploadDate": "2025-05-21", "duration": "PT24S", "contentUrl": "https://www.youtube.com/watch?v=aXl4PhNQBg8", "embedUrl": "https://www.youtube.com/embed/aXl4PhNQBg8"}]) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {/* PAGE HERO */}
      <VideoBackground src="/media/ambient-desert-twilight-v2.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <KineticText text="About Dr. Tokuhara" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">The surgeon, the educator, the person.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* BIO SECTION */}
      <section className="section section-white">
        <div className="container about-grid">
          <div className="about-image">
            <DynamicLightPortrait
              src="/media/821A6722.JPG"
              normalSrc="/media/821A6722-normal.jpg"
              alt="Dr. Keith Tokuhara, cataract surgeon at Desert Vision Center in Rancho Mirage"
              width={1080}
              height={1620}
            />
          </div>
          <div className="about-text">
            <h2>The <strong>short version</strong></h2>
            <p>
              I&rsquo;m a cataract surgeon in Rancho Mirage, California. I run Desert Vision Center, an independent practice that I took over in 2016 and built into what it is today. Patients come to me for advanced cataract surgery, complex cases that other surgeons won&rsquo;t touch, and honest answers about their eyes.
            </p>
            <p>
              I did my residency and fellowship at Loma Linda University, where I trained under Dr. Howard Gimbel. If you know cataract surgery, you know that name. He&rsquo;s one of the most respected surgeons in the field, and training under him shaped the way I think about every case.
            </p>
            <p>
              Palm Springs Life has named me a Top Doctor every year since 2019. I was recognized by NBC as the best cataract surgeon in the Coachella Valley. Those things are nice, but what actually matters is what happens in the operating room and the conversations we have before we get there.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH VIDEO */}
      <section className="section section-warm">
        <div className="container" style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <h2 className="section-title">A Message About <strong>Research &amp; Innovation</strong></h2>
          <p style={{color: 'var(--text-light)', marginBottom: '24px', fontSize: '1.05rem'}}>What drives my approach to cataract surgery, and why staying at the frontier of research matters for every patient I see.</p>
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          }}>
            <video
              controls
              muted
              autoPlay
              playsInline
              poster="/media/dr-t-research-message-poster.jpg"
              preload="metadata"
              style={{
                width: '100%',
                display: 'block',
              }}
            >
              <source src="/media/dr-t-research-message.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      </section>

      {/* TRAINING & CREDENTIALS */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Training &amp; <strong>Credentials</strong></h2>
          </ScrollReveal>
          <StaggerChildren className="credentials-grid" staggerDelay={0.1}>
            <StaggerItem className="credential-item">
              <h3>Education</h3>
              <p>University of California, Riverside. Biology major, Philosophy minor. Valedictorian. UC Regents Scholar. Advanced Placement National Scholar.</p>
            </StaggerItem>
            <StaggerItem className="credential-item">
              <h3>Medical School</h3>
              <p>University of Hawaii, John A. Burns School of Medicine. Recognized for research and academic achievement.</p>
            </StaggerItem>
            <StaggerItem className="credential-item">
              <h3>Residency</h3>
              <p>Ophthalmology residency at Loma Linda University, trained under the legendary Dr. Howard Gimbel in cataract and refractive surgery.</p>
            </StaggerItem>
            <StaggerItem className="credential-item">
              <h3>Fellowship</h3>
              <p>Retina fellowship at Loma Linda University, focused on complex diseases of the posterior segment. This dual training gives me a perspective most cataract surgeons simply don&rsquo;t have.</p>
            </StaggerItem>
            <StaggerItem className="credential-item">
              <h3>Firsts in the Valley</h3>
              <p>First surgeon in the Coachella Valley to perform KDB Goniotomy, Yamane secondary lens fixation, Vivity lens implantation, and PanOptix Pro trifocal lens implantation.</p>
            </StaggerItem>
            <StaggerItem className="credential-item">
              <h3>Teaching &amp; Research</h3>
              <p>Co-founded an ophthalmology residency program. Clinical instructor and board examiner. Published researcher with presentations at ASCRS national conferences.</p>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* LIFESTYLE IMAGE BREAK */}
      <section className="section" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/dvc-office-front.png"
              alt="Desert Vision Center office"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why I Practice <strong>This Way</strong></h2>
          </ScrollReveal>
          <BlurReveal>
          <p className="prose">
            There&rsquo;s a problem in eye care that nobody wants to talk about. Referral kickbacks. Corporate chains that tell surgeons which lenses to use. Private equity firms buying up practices and squeezing out the doctors who built them. Patients end up as line items on a spreadsheet.
          </p>
          <p className="prose">
            That&rsquo;s not how I operate. Desert Vision Center is privately owned, physician led, and completely independent. No one tells me which lens to recommend. No one pressures me to book more surgeries. The only thing influencing my recommendations is what&rsquo;s actually best for your eyes.
          </p>
          <p className="prose">
            I also think you should know what&rsquo;s happening during your surgery. Not the glossy marketing version. The real version. That&rsquo;s why I make educational videos, explain things in plain language, and take the time to answer your questions. Even the uncomfortable ones.
          </p>
          </BlurReveal>

          <ScrollReveal direction="up" delay={0.1} once={true}>
          <div className="video-section" style={{marginTop: '40px'}}>
            <div className="video-grid video-grid-2">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/sG3rN3WXW3o"
                    title="Ethical Cataract Surgery and Patient-First Eye Care"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Ethical Cataract Surgery &amp; Patient First Eye Care</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/oPV_lteXtzo"
                    title="The Unspoken Story of Cataract Referral Kickbacks"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">The Unspoken Story of Cataract Referral Kickbacks</p>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERNATIONAL MISSIONS & FAMILY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Beyond the <strong>Operating Room</strong></h2>
          <h3 style={{color: 'var(--night-horizon)', marginBottom: '12px'}}>International Surgical Missions</h3>
          <p className="prose">
            I&rsquo;ve done surgical mission work in the Philippines, Micronesia, and Guam. These trips remind you why you went into medicine in the first place. People who have been functionally blind for years, getting their sight back with a 15 minute procedure. No insurance paperwork. No lens upgrades. Just a patient who needs help and a surgeon who can provide it.
          </p>
          <p className="prose">
            Those experiences stay with you. They shape how you treat every patient, whether they&rsquo;re in Guam or Rancho Mirage.
          </p>

          <div className="content-image" style={{marginTop: '32px'}}>
            <Image
              src="/media/lifestyle-joshua-tree.jpg"
              alt="Joshua Tree landscape in the Coachella Valley - the desert community Dr. Tokuhara calls home"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h3 style={{color: 'var(--night-horizon)', marginTop: '40px', marginBottom: '12px'}}>Family</h3>
          <p className="prose">
            Outside the office, I&rsquo;m a husband and father of four. My approach to medicine reflects my personal values. I treat every patient with the same care and respect I&rsquo;d want for my own family. That&rsquo;s not a tagline. That&rsquo;s just how it works.
          </p>
          <p className="prose">
            And yes, I wear colorful socks in surgery. If you want to know why, there&rsquo;s a video for that.
          </p>

          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-2">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/ZoV2RTUlEZo"
                    title="Welcome to Desert Vision Center"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Welcome to Desert Vision Center</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/aXl4PhNQBg8"
                    title="Dr. Tokuhara Recognized on NBC"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Recognized on NBC as Best Cataract Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COACHELLA VALLEY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/about-coachella-valley-golden-hour.jpg"
              alt="Coachella Valley desert landscape at golden hour with palm trees and mountains"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <p className="prose" style={{marginTop: '24px', textAlign: 'center', color: 'var(--text-secondary)', fontStyle: 'italic'}}>
            The Coachella Valley. Where I chose to build a practice, raise a family, and take care of people.
          </p>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Awards &amp; <strong>Recognition</strong></h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <h3>NBC Recognition</h3>
              <p>Recognized by NBC as the best cataract surgeon in the Coachella Valley. The segment highlighted Dr. Tokuhara's expertise in complex cases and his commitment to patient-first care.</p>
            </div>
            <div className="credential-item">
              <h3>Palm Springs Life Top Doctor</h3>
              <p>Named a Top Doctor by Palm Springs Life magazine every year since 2019. Selected through a peer-nominated process that recognizes clinical excellence in the desert community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Want to <strong>meet in person?</strong></h2>
          <p>Whether you have questions about your eyes or you&rsquo;re ready to talk about surgery, I&rsquo;m here.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
