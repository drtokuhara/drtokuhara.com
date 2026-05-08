import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  CountUp,
  BlurReveal,
  VideoBackground,
  LineDraw,
  StaggerChildren,
  StaggerItem,
  ScaleOnScroll,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is YAG laser capsulotomy?', acceptedAnswer: { '@type': 'Answer', text: 'YAG laser capsulotomy is a painless, in-office laser procedure that treats posterior capsule opacification (PCO), sometimes called a secondary cataract. The laser clears the cloudy membrane behind your lens implant to restore clear vision. The procedure takes less than five minutes.' } },
    { '@type': 'Question', name: 'Is YAG laser capsulotomy painful?', acceptedAnswer: { '@type': 'Answer', text: 'No. The procedure is painless. A special contact lens with coupling gel is placed on your eye to keep it open and focus the laser. Most patients describe seeing flashes of light but feeling no discomfort.' } },
    { '@type': 'Question', name: 'How long does YAG laser capsulotomy take?', acceptedAnswer: { '@type': 'Answer', text: 'The actual laser treatment typically takes less than five minutes. Including preparation and post-procedure eye drops, most patients are in and out within 30 minutes.' } },
    { '@type': 'Question', name: 'Can posterior capsule opacification come back after YAG?', acceptedAnswer: { '@type': 'Answer', text: 'No. Once the posterior capsule is opened with the YAG laser, it does not grow back. The procedure is a one-time treatment.' } },
    { '@type': 'Question', name: 'How common is posterior capsule opacification after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'PCO develops in approximately 20-30% of patients within five years of cataract surgery. It is the most common reason patients return with blurry vision after an initially successful surgery. It is not a complication but a normal healing response.' } },
    { '@type': 'Question', name: 'How soon can I see after YAG laser capsulotomy?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients notice clearer vision within hours of the procedure. Some notice improvement immediately. There are no activity restrictions, and you can drive, read, and return to normal life the same day.' } },
  ],
};

export const metadata = {
  title: 'YAG Laser Capsulotomy: The Complete Guide to Treating Posterior Capsule Opacification',
  description: 'The definitive guide to YAG laser capsulotomy. What posterior capsule opacification is, why it happens, how the procedure works, and what to expect. By Dr. Keith Tokuhara, Coachella Valley.',
  alternates: { canonical: '/yag-laser-capsulotomy' },
  openGraph: {
    title: 'YAG Laser Capsulotomy | Dr. Keith Tokuhara',
    description: 'Blurry vision after cataract surgery? PCO is common and completely treatable. The definitive patient guide from a fellowship-trained cataract surgeon.',
    url: 'https://drtokuhara.com/yag-laser-capsulotomy',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'YAG Laser Capsulotomy', href: '/yag-laser-capsulotomy' },
]);

export default function YagLaserCapsulotomy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* CINEMATIC HERO WITH VIDEO */}
      <VideoBackground
        src="/media/ambient-iris-closeup.mp4"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p style={{fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--oasis)', marginBottom: '16px', fontWeight: 600}}>The Most Common Post-Cataract Procedure</p>
          </ScrollReveal>
          <KineticText text="YAG Laser Capsulotomy" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub" style={{maxWidth: '650px', margin: '16px auto 0'}}>If your vision has become cloudy again after cataract surgery, you are not imagining it. Five minutes can fix it.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* STATS BAR */}
      <section style={{background: 'var(--dark-rich)', padding: '48px 0'}}>
        <div className="container">
          <StaggerChildren style={{display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', textAlign: 'center'}} staggerDelay={0.15}>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={30} suffix="%" duration={2} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>of patients develop PCO<br />within 5 years</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={5} suffix=" min" duration={1.5} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>procedure time<br />in the office</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={0} suffix="" duration={1} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>stitches, needles,<br />or operating rooms</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: '#fff', marginBottom: '4px', fontFamily: 'var(--serif)'}}>1x</p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>one-time treatment<br />capsule never reclouds</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <p className="body-lead">
              "Doctor, I think my cataract came back."
            </p>
          </ScrollReveal>
          <p>
            I hear this more than almost anything else. A patient had successful cataract surgery, saw beautifully for months or years, and now things are getting hazy again. They are worried. They think something went wrong.
          </p>
          <p>
            It did not. What happened is something called <strong>posterior capsule opacification</strong>, and it is one of the most predictable, most treatable conditions in all of ophthalmology.
          </p>
        </div>
      </section>

      {/* WHAT IS PCO - with visual explanation */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Is Happening <strong>Inside Your Eye</strong></h2>
          </ScrollReveal>
          <p>
            During cataract surgery, I remove the cloudy natural lens and replace it with a clear artificial lens implant. That implant sits inside a thin, transparent membrane called the <strong>capsule</strong>, which I intentionally leave in place to support the new lens.
          </p>
          <p>
            Over time, cells on the back surface of that capsule can multiply and create a hazy film. Think of it like condensation forming on the inside of a window. The lens implant itself is perfectly fine. The cloudiness is on the membrane behind it.
          </p>

          <BlurReveal><div className="insight-highlight" style={{marginTop: '32px'}}>
            <p><strong>This is not a complication. It is not a sign that anything went wrong. It happens in up to 30% of patients within five years. And the fix takes less time than your morning coffee.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      {/* SYMPTOMS - animated cards */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">How It <strong>Feels</strong></h2>
            <p>Patients describe it in ways that sound exactly like their original cataract symptoms:</p>
          </ScrollReveal>
          <StaggerChildren className="insight-list" staggerDelay={0.1}>
            <StaggerItem>
              <div className="insight-item">
                <strong>"My vision was perfect after surgery, and now it is getting hazy again."</strong>
                <p>The gradual return of blur is the hallmark. It can be subtle at first, then progressively noticeable.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>"Night driving is getting worse again, with glare and halos."</strong>
                <p>The cloudy capsule scatters light, creating the same visual disturbances that cataracts cause.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>"Colors seem duller than right after surgery."</strong>
                <p>The membrane filters and diffuses light, reducing the vibrancy you noticed when your vision was at its clearest.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>"I thought cataracts could not come back?"</strong>
                <p>They cannot. This is not a cataract returning. It is a different structure, the capsule, becoming cloudy. And unlike cataracts, this is fixed with a laser, not surgery.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* FULL-WIDTH LIFESTYLE BREAK */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-outdoor-sunshine.jpg" alt="Couple enjoying clear vision outdoors in the Coachella Valley sunshine" width={1920} height={500} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* THE PROCEDURE - step by step with imagery */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Procedure: <strong>Five Minutes to Clear</strong></h2>
          </ScrollReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/dr-t-slit-lamp-patient-view.jpg"
              alt="Dr. Tokuhara at the slit lamp performing a YAG laser capsulotomy at Desert Vision Center"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="content-image-caption">The YAG laser looks like the slit lamp microscope used during your regular eye exams. Same chair, same chin rest, completely different outcome.</div>
          </div>

          <p>No operating room. No anesthesia. No needles. Here is exactly what happens:</p>

          <StaggerChildren staggerDelay={0.08}>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>1</div>
                <div>
                  <strong>You sit at the laser microscope</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>Chin on the rest, forehead against the bar. Just like a regular eye exam.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>2</div>
                <div>
                  <strong>A special lens is placed on your eye</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>With coupling gel, it keeps your eye open and focuses the laser precisely. No blinking worries.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>3</div>
                <div>
                  <strong>The laser fires short pulses</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>Each pulse creates a plasma wave that disintegrates the cloudy capsule. You see flashes of light but feel nothing.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--oasis)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>✓</div>
                <div>
                  <strong>Done. Eye drops and you are on your way.</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>Most patients notice clearer vision within hours. Many notice it immediately. Follow-up in one to two weeks.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* AFTER - RECOVERY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">After the <strong>Procedure</strong></h2>
          </ScrollReveal>
          <p>
            Recovery is minimal. You use anti-inflammatory eye drops for a short period, and we check your eye pressure and vision at a follow-up visit within one to two weeks.
          </p>
          <ul className="content-list">
            <li>No activity restrictions</li>
            <li>You can drive, read, and return to normal life the same day</li>
            <li>Vision improves within hours for most patients</li>
          </ul>

          <BlurReveal><div className="pull-quote" style={{marginTop: '32px'}}>
            <p>Once the capsule is opened, it does not cloud over again. This is a one-time treatment.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* VIDEO SECTION - with cinematic framing */}
      <VideoBackground
        src="/media/ambient-lens-refraction.mp4"
        overlayOpacity={0.7}
        overlayColor="0, 20, 30"
        style={{padding: '80px 0'}}
      >
        <div className="container content-narrow" style={{position: 'relative', zIndex: 2}}>
          <ScrollReveal direction="up" once={true}>
            <h2 style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', textAlign: 'center', marginBottom: '16px'}}>Watch the Procedure</h2>
            <p style={{color: 'rgba(255,255,255,0.75)', textAlign: 'center', maxWidth: '550px', margin: '0 auto 32px', fontSize: '16px'}}>I walk through the entire YAG laser capsulotomy, including the equipment, the technique, and what patients see and feel.</p>
          </ScrollReveal>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)'}}>
            <iframe
              src="https://www.youtube.com/embed/JzspGX4RErQ"
              title="YAG Laser Capsulotomy - Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </VideoBackground>

      {/* WHO NEEDS IT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Who Needs <strong>This Procedure?</strong></h2>
          </ScrollReveal>
          <p>
            YAG laser capsulotomy is appropriate if you have had cataract surgery and are experiencing:
          </p>
          <ul className="content-list">
            <li>Gradually worsening blur that was not there immediately after surgery</li>
            <li>Increased glare or halos, especially at night</li>
            <li>A feeling that your vision "is not as good as it used to be" after surgery</li>
            <li>Colors that seem less vivid than in the months following your cataract procedure</li>
          </ul>
          <p>
            The diagnosis is confirmed with a simple exam. I can see the cloudy capsule under the microscope, and in most cases, we can schedule the YAG treatment for the same week or even the same day.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients sometimes feel embarrassed when they come in thinking their cataract has returned. They worry they waited too long or that something went wrong. Neither is true. Posterior capsule opacification is one of the most predictable events in ophthalmology, and the treatment is one of the most satisfying, for both doctor and patient. Five minutes, and the world is clear again.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Vision Cloudy After <strong>Cataract Surgery?</strong></h2>
            <p style={{maxWidth: '500px', margin: '0 auto 32px', color: 'var(--text-light)'}}>If your vision was clear after surgery and has become hazy again, posterior capsule opacification is the most likely cause. A quick exam will confirm it.</p>
          </ScrollReveal>
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
            <Link href="/blurry-vision-after-cataract-surgery" className="related-card">
              <h3>Blurry Vision After Surgery</h3>
              <p>All the reasons vision can blur after cataract surgery, and what to do.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the original procedure involves from start to finish.</p>
            </Link>
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Complications Guide</h3>
              <p>The comprehensive guide to everything that can happen after surgery.</p>
            </Link>
            <Link href="/halos-after-cataract-surgery" className="related-card">
              <h3>Halos After Surgery</h3>
              <p>Why you might see rings around lights, and when they resolve.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
