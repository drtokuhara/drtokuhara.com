import Link from 'next/link';
import Image from 'next/image';
import DynamicLightPortrait from '../DynamicLightPortrait';

export const metadata = {
  title: 'About Dr. Keith Tokuhara',
  description: 'Meet Dr. Keith Tokuhara, fellowship trained cataract surgeon at Desert Vision Center in Rancho Mirage. Learn about his training, philosophy, and commitment to ethical patient care.',
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
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>About <strong>Dr. Tokuhara</strong></h1>
          <p className="page-hero-sub">The surgeon, the educator, the person.</p>
        </div>
      </section>

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

      {/* TRAINING & CREDENTIALS */}
      <section className="section section-warm">
        <div className="container">
          <h2 className="section-title">Training &amp; <strong>Credentials</strong></h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <h3>Education</h3>
              <p>University of California, Riverside. Biology major, Philosophy minor. Valedictorian. UC Regents Scholar. Advanced Placement National Scholar.</p>
            </div>
            <div className="credential-item">
              <h3>Medical School</h3>
              <p>University of Hawaii, John A. Burns School of Medicine. Recognized for research and academic achievement.</p>
            </div>
            <div className="credential-item">
              <h3>Residency</h3>
              <p>Ophthalmology residency at Loma Linda University, trained under the legendary Dr. Howard Gimbel in cataract and refractive surgery.</p>
            </div>
            <div className="credential-item">
              <h3>Fellowship</h3>
              <p>Retina fellowship at Loma Linda University, focused on complex diseases of the posterior segment. This dual training gives me a perspective most cataract surgeons simply don&rsquo;t have.</p>
            </div>
            <div className="credential-item">
              <h3>Firsts in the Valley</h3>
              <p>First surgeon in the Coachella Valley to perform KDB Goniotomy, Yamane secondary lens fixation, Vivity lens implantation, and PanOptix Pro trifocal lens implantation.</p>
            </div>
            <div className="credential-item">
              <h3>Teaching &amp; Research</h3>
              <p>Co-founded an ophthalmology residency program. Clinical instructor and board examiner. Published researcher with presentations at ASCRS national conferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why I Practice <strong>This Way</strong></h2>
          <p className="prose">
            There&rsquo;s a problem in eye care that nobody wants to talk about. Referral kickbacks. Corporate chains that tell surgeons which lenses to use. Private equity firms buying up practices and squeezing out the doctors who built them. Patients end up as line items on a spreadsheet.
          </p>
          <p className="prose">
            That&rsquo;s not how I operate. Desert Vision Center is privately owned, physician led, and completely independent. No one tells me which lens to recommend. No one pressures me to book more surgeries. The only thing influencing my recommendations is what&rsquo;s actually best for your eyes.
          </p>
          <p className="prose">
            I also think you should know what&rsquo;s happening during your surgery. Not the glossy marketing version. The real version. That&rsquo;s why I make educational videos, explain things in plain language, and take the time to answer your questions. Even the uncomfortable ones.
          </p>

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

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Want to <strong>meet in person?</strong></h2>
          <p>Whether you have questions about your eyes or you&rsquo;re ready to talk about surgery, I&rsquo;m here.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
