import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
  LineDraw,
  StaggerChildren,
  StaggerItem,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the difference between a monofocal and multifocal lens implant?', acceptedAnswer: { '@type': 'Answer', text: 'A monofocal lens provides sharp vision at one distance, typically set for far away. Most patients with monofocal lenses need reading glasses for close-up tasks. A multifocal lens splits light into multiple focal points, allowing both distance and near vision without glasses. The tradeoff is that multifocal lenses can cause halos and glare around lights, especially at night, and may slightly reduce overall contrast clarity.' } },
    { '@type': 'Question', name: 'Do multifocal lenses cause halos at night?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Multifocal lenses work by splitting light into multiple focus points. This optical design creates concentric rings of light around bright sources like headlights and street lights, known as halos. Most patients adapt to them over several months and describe them as noticeable but manageable. However, for patients who drive frequently at night or are sensitive to visual disturbances, the halos may be bothersome enough to affect quality of life.' } },
    { '@type': 'Question', name: 'Is a monofocal lens worse than a multifocal?', acceptedAnswer: { '@type': 'Answer', text: 'No. A monofocal lens is not worse. It is different. Monofocal lenses provide the sharpest, clearest distance vision with the fewest visual side effects. There are no halos, no glare from the lens itself, and no reduction in contrast. The tradeoff is that you will need reading glasses for near tasks. For many patients, this is genuinely the better choice, particularly those with dry eye, corneal irregularity, or high visual demands at night.' } },
    { '@type': 'Question', name: 'How do I decide between monofocal and multifocal?', acceptedAnswer: { '@type': 'Answer', text: 'The decision depends on your daily visual needs, your eye health, and your tolerance for potential tradeoffs. A surgeon who takes the time to understand your lifestyle, measure your corneal surface, assess your tear film, and discuss realistic expectations will help you make the right choice. There is no universally best lens. There is only the best lens for your eyes and your life.' } },
    { '@type': 'Question', name: 'Can I switch from a multifocal lens to a monofocal if I do not like it?', acceptedAnswer: { '@type': 'Answer', text: 'In some cases, yes. A lens implant exchange is possible, particularly in the early postoperative period. However, it is a second surgery with its own risks and considerations. This is one reason the preoperative conversation about expectations is so important. The goal is to choose correctly the first time.' } },
    { '@type': 'Question', name: 'What about extended depth of focus (EDOF) lenses?', acceptedAnswer: { '@type': 'Answer', text: 'EDOF lenses like the Vivity offer a middle ground. They extend the range of focus from distance through intermediate (computer distance) without splitting light into distinct focal points. This means fewer halos than a multifocal, though near vision for fine print may still require reading glasses. EDOF lenses are a good option for patients who want some glasses independence without the full tradeoff profile of a multifocal.' } },
  ],
};

export const metadata = {
  title: 'Multifocal vs Monofocal Lens Implants: An Honest Comparison',
  description: 'Should you choose a multifocal or monofocal lens for cataract surgery? Dr. Keith Tokuhara compares the pros, cons, and real-world tradeoffs of each with visual simulations of day and night vision.',
  keywords: ['multifocal vs monofocal lens', 'multifocal IOL pros cons', 'monofocal cataract lens', 'multifocal lens halos', 'cataract lens comparison', 'best lens for cataract surgery', 'multifocal lens night driving'],
  alternates: { canonical: '/multifocal-vs-monofocal' },
  openGraph: {
    title: 'Multifocal vs Monofocal Lens: An Honest Comparison | Dr. Keith Tokuhara',
    description: 'Clear distance vision with reading glasses, or glasses freedom with halos at night? A cataract surgeon walks you through the real tradeoffs.',
    url: 'https://drtokuhara.com/multifocal-vs-monofocal',
  },
};

const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Lens Implants Explained', href: '/lens-implants-explained' },
  { name: 'Multifocal vs Monofocal', href: '/multifocal-vs-monofocal' },
]);

export default function MultifocalVsMonofocal() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <VideoBackground
        src="/media/ambient-crystal-alignment.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p className="page-hero-eyebrow">Lens Comparison</p>
            <h1>Multifocal vs Monofocal: <strong>An Honest Comparison</strong></h1>
            <p className="page-hero-sub" style={{maxWidth: '650px', margin: '16px auto 0'}}>One gives you sharp distance vision and reading glasses. The other gives you glasses freedom and halos at night. Neither is better. The right choice depends on your eyes and your life.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* THE CORE QUESTION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Question I Hear <strong>Every Week</strong></h2>
          </ScrollReveal>
          <p>
            Two to five times a week, a patient sits across from me and asks some version of the same question:
          </p>

          <BlurReveal><div className="pull-quote">
            <p>&ldquo;Should I get the multifocal lens so I do not need glasses, or should I just go with the standard lens?&rdquo;</p>
          </div></BlurReveal>

          <p>
            It is one of the most important decisions in cataract surgery. And it deserves an honest answer, not a sales pitch.
          </p>
          <p>
            Both lenses are excellent. Both restore clear vision. But they work differently, and they involve different tradeoffs. Understanding those tradeoffs before surgery is the difference between being happy with your result and wondering if you made the wrong choice.
          </p>
        </div>
      </section>

      {/* MONOFOCAL EXPLAINED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Monofocal Lens: <strong>What You Get</strong></h2>
          </ScrollReveal>
          <p>
            A monofocal lens has one focal point. It is typically set for distance vision, meaning everything far away, driving, watching television, seeing faces across a room, is sharp and clear.
          </p>
          <p>
            <strong>What you gain:</strong>
          </p>
          <ul style={{lineHeight: 2, color: 'var(--text)'}}>
            <li>The sharpest, highest-contrast distance vision available</li>
            <li>No halos or glare from the lens itself</li>
            <li>Clean night vision for driving</li>
            <li>Proven technology with decades of track record</li>
            <li>Covered by Medicare and most insurance with no additional out-of-pocket lens cost</li>
          </ul>
          <p>
            <strong>What you give up:</strong>
          </p>
          <ul style={{lineHeight: 2, color: 'var(--text)'}}>
            <li>You will need reading glasses for close-up tasks: books, phones, menus, labels</li>
            <li>Computer distance may require glasses depending on the setup</li>
          </ul>
          <p>
            For many patients, this is the right choice. The vision is clean, predictable, and free of optical side effects. If you do not mind reaching for readers, a monofocal lens delivers excellent results with the fewest surprises.
          </p>
        </div>
      </section>

      {/* MULTIFOCAL EXPLAINED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Multifocal Lens: <strong>What You Get</strong></h2>
          </ScrollReveal>
          <p>
            A multifocal lens uses concentric rings built into the optic to split incoming light into multiple focal points, typically for distance, intermediate (computer), and near vision.
          </p>
          <p>
            <strong>What you gain:</strong>
          </p>
          <ul style={{lineHeight: 2, color: 'var(--text)'}}>
            <li>Reduced dependence on glasses for most activities</li>
            <li>Ability to read your phone, a menu, or a book without reaching for readers</li>
            <li>Functional vision at distance, intermediate, and near</li>
          </ul>
          <p>
            <strong>What you give up:</strong>
          </p>
          <ul style={{lineHeight: 2, color: 'var(--text)'}}>
            <li>Halos around lights at night, especially headlights and street lights</li>
            <li>A slight reduction in overall contrast and crispness compared to a monofocal</li>
            <li>Some patients describe a "waxy" or slightly soft quality to vision, particularly in low light</li>
            <li>Additional out-of-pocket cost (multifocal lenses are a premium upgrade not covered by insurance)</li>
          </ul>
          <p>
            Most patients who choose a multifocal lens are happy with the result. The halos improve over the first three to six months as the brain adapts. But they do not disappear entirely. If you drive a lot at night or are sensitive to visual disturbances, this is important to understand before surgery.
          </p>
        </div>
      </section>

      {/* VISUAL COMPARISON - DAYTIME */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What You <strong>See: Daytime</strong></h2>
            <p style={{color: 'var(--text)', opacity: 0.8, marginBottom: '32px'}}>These simulations illustrate the general visual experience. Individual results vary based on eye health, lens model, and neural adaptation.</p>
          </ScrollReveal>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
            <div>
              <Image
                src="/media/vision-sim-monofocal-day.png"
                alt="Simulated daytime vision through a monofocal lens: sharp distance vision, with near objects slightly blurred"
                width={512}
                height={384}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
              <p style={{textAlign: 'center', fontSize: '14px', fontWeight: 600, color: 'var(--dark-rich)', marginTop: '8px'}}>Monofocal: Sharp distance, readers needed for near</p>
            </div>
            <div>
              <Image
                src="/media/vision-sim-multifocal-day.png"
                alt="Simulated daytime vision through a multifocal lens: good distance and near vision, with slightly reduced overall contrast"
                width={512}
                height={384}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
              <p style={{textAlign: 'center', fontSize: '14px', fontWeight: 600, color: 'var(--dark-rich)', marginTop: '8px'}}>Multifocal: Distance and near, slight contrast reduction</p>
            </div>
          </div>
          <p style={{fontSize: '14px', color: 'var(--text)', opacity: 0.7, textAlign: 'center'}}>
            In bright daylight, both lenses provide good functional vision. The monofocal is slightly crisper at distance. The multifocal adds near capability at the cost of a subtle reduction in overall sharpness.
          </p>
        </div>
      </section>

      {/* VISUAL COMPARISON - NIGHTTIME */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What You <strong>See: Nighttime</strong></h2>
            <p style={{color: 'var(--text)', opacity: 0.8, marginBottom: '32px'}}>This is where the difference matters most. The halos from a multifocal lens are most noticeable when driving at night.</p>
          </ScrollReveal>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
            <div>
              <Image
                src="/media/vision-sim-monofocal-night.png"
                alt="Simulated nighttime driving vision through a monofocal lens: clean, defined headlights with minimal glare"
                width={512}
                height={384}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
              <p style={{textAlign: 'center', fontSize: '14px', fontWeight: 600, color: 'var(--dark-rich)', marginTop: '8px'}}>Monofocal: Clean headlights, minimal glare</p>
            </div>
            <div>
              <Image
                src="/media/vision-sim-multifocal-night.png"
                alt="Simulated nighttime driving vision through a multifocal lens: headlights with visible concentric halos and starbursts"
                width={512}
                height={384}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
              <p style={{textAlign: 'center', fontSize: '14px', fontWeight: 600, color: 'var(--dark-rich)', marginTop: '8px'}}>Multifocal: Halos and starbursts around lights</p>
            </div>
          </div>
          <p style={{fontSize: '14px', color: 'var(--text)', opacity: 0.7, textAlign: 'center'}}>
            The halos are a direct result of how multifocal lenses work. Light is split into rings for different focal points, and those rings become visible around bright light sources. Most patients adapt. Some never stop noticing them.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE WHAT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Which Lens Is <strong>Right for You?</strong></h2>
          </ScrollReveal>

          <div style={{margin: '24px 0'}}>
            <div style={{padding: '24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '16px'}}>
              <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '12px'}}>A monofocal lens may be the better choice if:</h3>
              <ul style={{lineHeight: 2, color: 'var(--text)', margin: 0}}>
                <li>You drive frequently at night</li>
                <li>You have dry eye disease or an irregular corneal surface</li>
                <li>You had prior LASIK or refractive surgery</li>
                <li>You are sensitive to visual disturbances or glare</li>
                <li>You do not mind using reading glasses</li>
                <li>You prioritize the sharpest possible distance vision</li>
              </ul>
            </div>

            <div style={{padding: '24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)'}}>
              <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '12px'}}>A multifocal lens may be the better choice if:</h3>
              <ul style={{lineHeight: 2, color: 'var(--text)', margin: 0}}>
                <li>You strongly prefer not to wear reading glasses</li>
                <li>Your corneal surface is healthy and your tear film is stable</li>
                <li>You do not drive extensively at night</li>
                <li>You understand and accept the possibility of halos</li>
                <li>Your eye measurements are favorable for a multifocal design</li>
                <li>You have realistic expectations about what "glasses freedom" means</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE MIDDLE GROUND */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Middle Ground: <strong>EDOF Lenses</strong></h2>
          </ScrollReveal>
          <p>
            There is a third option that many patients find appealing. Extended Depth of Focus (EDOF) lenses, like the Vivity, stretch the focal range rather than splitting light into distinct points.
          </p>
          <p>
            The result is good distance and intermediate vision (computer, dashboard, cooking) with significantly fewer halos than a multifocal. The tradeoff is that fine near vision, small print and phone text, may still require reading glasses.
          </p>
          <p>
            For patients who want some glasses independence without the full halo profile of a multifocal, an EDOF lens is often the sweet spot.
          </p>
          <p>
            <Link href="/vivity-vs-panoptix" style={{fontWeight: 600}}>Read the full Vivity vs PanOptix comparison &#8594;</Link>
          </p>
        </div>
      </section>

      {/* THE REAL ANSWER */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Real <strong>Answer</strong></h2>
          </ScrollReveal>
          <p>
            Patients often ask me which lens I would choose for myself. The honest answer is that it depends on which version of me is answering.
          </p>
          <p>
            The version that reads for hours every night might choose a multifocal. The version that drives dark desert highways after late surgeries might choose a monofocal. The version that spends most of his day at a computer might choose an EDOF.
          </p>
          <p>
            That is the point.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>There is no universally best lens. There is only the best lens for your eyes, your measurements, your corneal surface, your tear film, your daily routine, and your tolerance for tradeoffs. That is why the consultation matters more than the brochure.</strong></p>
          </div></BlurReveal>

          <p>
            When I recommend a monofocal lens, it is not because I am being conservative. It is because I looked at your eyes and determined that a monofocal will give you the cleanest, most reliable outcome.
          </p>
          <p>
            When I recommend a multifocal, it is because your measurements, your surface health, and your lifestyle all point toward it being a good fit.
          </p>
          <p>
            Either way, you deserve to understand what you are choosing and what you are giving up. That is what this page is for.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00313d 0%, #004d5c 100%)', color: '#fff'}}>
        <div className="container content-narrow" style={{textAlign: 'center', padding: '48px 0'}}>
          <h2 style={{fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '12px', fontFamily: 'var(--serif)'}}>Which Lens Fits <strong>Your Life?</strong></h2>
          <p style={{color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6}}>The answer starts with a conversation, not a brochure. Dr. Tokuhara takes the time to understand your eyes and your daily life before making a recommendation.</p>
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
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A complete guide to every lens option available during cataract surgery.</p>
            </Link>
            <Link href="/vivity-vs-panoptix" className="related-card">
              <h3>Vivity vs PanOptix</h3>
              <p>EDOF vs trifocal: a detailed comparison of two popular premium lens options.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>The Standard Lens Is Not a Consolation Prize</h3>
              <p>Why recommending a monofocal is a sign of precision, not limitation.</p>
            </Link>
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>An honest reflection on when the upgrade is justified and when it is not.</p>
            </Link>
            <Link href="/insights/best-lens-for-night-driving" className="related-card">
              <h3>Best Lens for Night Driving</h3>
              <p>Which lens performs best when the sun goes down and the headlights come on.</p>
            </Link>
            <Link href="/insights/the-week-everything-changed" className="related-card">
              <h3>The Week Everything Changed</h3>
              <p>A patient whose perfect monovision setup stopped matching her life ten days after surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
