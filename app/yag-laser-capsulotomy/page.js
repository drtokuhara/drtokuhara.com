import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is YAG laser capsulotomy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YAG laser capsulotomy is a painless, in-office laser procedure that treats posterior capsule opacification (PCO), sometimes called a secondary cataract. The laser clears the cloudy membrane behind your lens implant to restore clear vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is YAG laser capsulotomy painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The procedure is painless. A special contact lens with coupling gel is placed on your eye to keep it open and focus the laser. Most patients describe seeing flashes of light but feeling no discomfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does YAG laser capsulotomy take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The actual laser treatment typically takes less than five minutes. Including preparation and post-procedure eye drops, most patients are in and out within 30 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can posterior capsule opacification come back after YAG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Once the posterior capsule is opened with the YAG laser, it does not grow back. The procedure is a one-time treatment.',
      },
    },
  ],
};

export const metadata = {
  title: 'YAG Laser Capsulotomy: What It Is, Why You Need It, and What to Expect',
  description: 'Blurry vision after cataract surgery? Posterior capsule opacification is common and completely treatable with a painless in-office YAG laser procedure. Dr. Tokuhara explains.',
  alternates: { canonical: '/yag-laser-capsulotomy' },
  openGraph: {
    title: 'YAG Laser Capsulotomy | Dr. Keith Tokuhara',
    description: 'What posterior capsule opacification is, why it happens after cataract surgery, and how a quick YAG laser treatment restores your clear vision.',
    url: 'https://drtokuhara.com/yag-laser-capsulotomy',
  },
};

export default function YagLaserCapsulotomy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>YAG Laser <strong>Capsulotomy</strong></h1></ScrollReveal>
          <p className="page-hero-sub">If your vision has become cloudy again after cataract surgery, you are not imagining it. Here is what is happening and how we fix it.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            One of the most common reasons patients come back to me months or years after cataract surgery is this: their vision was great for a while, and now it feels like the cataract has returned.
          </p>
          <p>
            It has not. What has happened is something called <strong>posterior capsule opacification</strong>, sometimes called a "secondary cataract." It is incredibly common, completely treatable, and the fix takes less than five minutes.
          </p>
        </div>
      </section>

      {/* WHAT IS PCO */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Is Posterior Capsule <strong>Opacification?</strong></h2>
          <p>
            During cataract surgery, I remove the cloudy natural lens from inside your eye and replace it with a clear artificial lens implant. That implant sits inside a thin, transparent membrane called the <strong>capsule</strong>, which we intentionally leave in place to support the new lens.
          </p>
          <p>
            Over time, cells on the back surface of that capsule can multiply and create a hazy film. Think of it like condensation forming on the inside of a window. The lens implant itself is perfectly fine. The cloudiness is on the membrane behind it.
          </p>
          <p>
            This can happen weeks, months, or even years after surgery. It does not mean anything went wrong. It is simply how some eyes heal.
          </p>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How It <strong>Feels</strong></h2>
          <p>Patients describe it in ways that sound a lot like their original cataract symptoms:</p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>"My vision was perfect after surgery, and now it is getting hazy again."</strong>
              <p>The gradual return of blur is the hallmark of PCO. It can be subtle at first, then progressively noticeable.</p>
            </div>
            <div className="insight-item">
              <strong>"Night driving is getting worse again, with glare and halos."</strong>
              <p>The cloudy capsule scatters light, creating the same visual disturbances that cataracts cause.</p>
            </div>
            <div className="insight-item">
              <strong>"Colors seem duller than right after surgery."</strong>
              <p>The membrane filters and diffuses light, reducing the vibrancy that you noticed when your vision was at its clearest.</p>
            </div>
          </div>
          <p>
            If any of this sounds familiar, the good news is straightforward: this is one of the most successfully treated conditions in all of ophthalmology.
          </p>
        </div>
      </section>

      {/* THE PROCEDURE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The YAG Laser <strong>Procedure</strong></h2>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/dr-t-slit-lamp-patient-view.jpg"
              alt="Dr. Tokuhara examining a patient at the slit lamp at Desert Vision Center"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="content-image-caption">The YAG laser is performed right in the office, using a device similar to the slit lamp microscope used during your eye exams.</div>
          </div>

          <p>
            YAG laser capsulotomy is done right in the office. No operating room. No anesthesia. No needles. Here is what to expect:
          </p>
          <ul className="content-list">
            <li><strong>You sit at the laser microscope</strong>, chin on the rest, forehead against the bar, just like a regular eye exam.</li>
            <li><strong>A special contact lens with coupling gel</strong> is placed on your eye. This keeps your eye open and focuses the laser energy precisely where it needs to go. You do not need to worry about blinking at the wrong time.</li>
            <li><strong>The laser fires short pulses</strong> that create a tiny opening in the cloudy capsule. The energy strips atoms to create a plasma wave that disintegrates the opacity. You may see flashes of light, but you will not feel pain.</li>
            <li><strong>The entire treatment takes a few minutes.</strong> Afterward, you receive eye drops and instructions for follow-up in one to two weeks.</li>
          </ul>
          <p>
            That is it. Most patients notice clearer vision within hours. Some notice it immediately.
          </p>
        </div>
      </section>

      {/* AFTER THE PROCEDURE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">After the <strong>Procedure</strong></h2>
          <p>
            Recovery is minimal. You will use anti-inflammatory eye drops for a short period, and we will check your eye pressure and vision at a follow-up visit within one to two weeks.
          </p>
          <p>
            There are no activity restrictions. You can drive, read, and return to normal life the same day.
          </p>
          <p>
            And here is the best part: <strong>once the capsule is opened, it does not cloud over again.</strong> This is a one-time treatment.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-couple-outdoor-sunshine.jpg" alt="Couple enjoying outdoor activities with clear vision after cataract surgery" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Watch the <strong>Procedure</strong></h2>
          <p>
            I made a video walking through the entire YAG laser capsulotomy process, including the equipment, the technique, and what patients see and feel. If you are scheduled for this procedure or considering it, this will answer most of your questions.
          </p>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '24px'}}>
            <iframe
              src="https://www.youtube.com/embed/JzspGX4RErQ"
              title="YAG Laser Capsulotomy - Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-seniors-resort-string-lights.jpg" alt="Seniors enjoying an evening gathering at a resort" width={1920} height={400} style={{width: '100%', objectFit: 'cover'}} />
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients sometimes feel embarrassed when they come in thinking their cataract has returned. They worry they waited too long or that something went wrong. Neither is true. Posterior capsule opacification is one of the most predictable events in ophthalmology, and the treatment is one of the most satisfying, for both doctor and patient. Five minutes, and the world is clear again.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What happens during surgery, from start to finish.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>Understanding the lens options and how to choose the right one for your life.</p>
            </Link>
            <Link href="/faq" className="related-card">
              <h3>Frequently Asked Questions</h3>
              <p>Common questions about cataracts, surgery, and recovery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
