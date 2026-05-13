import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';
import AudioNarration from '../components/AudioNarration';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why is my vision blurry after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Blurry vision in the first few days after surgery is normal as the eye heals. Common causes include corneal swelling, inflammation, and the eye adjusting to the new lens. If blur persists or worsens after the first week, it may be due to residual refractive error, cystoid macular edema, dry eye, or posterior capsule opacification. Your surgeon should evaluate persistent blur.' } },
    { '@type': 'Question', name: 'How long is vision blurry after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients notice significantly clearer vision within 24-48 hours. Mild blur or fluctuation is normal for the first 1-2 weeks. Full visual stability typically occurs within 4-6 weeks. If vision is still noticeably blurry after 2-4 weeks, contact your surgeon for evaluation.' } },
    { '@type': 'Question', name: 'Can cataracts come back after surgery?', acceptedAnswer: { '@type': 'Answer', text: 'No. Once a cataract is removed, it cannot return. However, the capsule behind the lens implant can become cloudy over time (posterior capsule opacification), which mimics cataract symptoms. This is easily treated with a painless YAG laser capsulotomy in the office.' } },
    { '@type': 'Question', name: 'When should I worry about blurry vision after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Contact your surgeon if you experience sudden vision loss, vision that was clear and then became blurry again, increasing pain or redness, or if blur is not improving after 2-4 weeks. Early evaluation leads to better outcomes for any treatable cause.' } },
  ],
};

export const metadata = {
  title: 'Blurry Vision After Cataract Surgery: Causes, Timeline, and When to Worry',
  description: 'Experiencing blurry vision after cataract surgery? Dr. Tokuhara explains the most common causes, the normal healing timeline, when blur is expected, and when to call your surgeon.',
  alternates: { canonical: '/blurry-vision-after-cataract-surgery' },
  openGraph: {
    title: 'Blurry Vision After Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Why vision may be blurry after cataract surgery, the normal timeline for clearing, and the signs that need medical attention.',
    url: 'https://drtokuhara.com/blurry-vision-after-cataract-surgery',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Blurry Vision After Surgery', href: '/blurry-vision-after-cataract-surgery' },
]);

export default function BlurryVisionAfterSurgery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <VideoBackground src="/media/ambient-light-tunnel.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}} bottomOverlay={<AudioNarration src="/audio/narrations/blurry-vision-after-cataract-surgery.mp3" />}>
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Blurry Vision After <strong>Cataract Surgery</strong></h1></ScrollReveal>
          <p className="page-hero-sub">If your vision is not as clear as you expected after surgery, here is what might be happening and what to do about it.</p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            You had cataract surgery expecting clear vision. But now things are blurry, and you are wondering if something went wrong.
          </p>
          <p>
            Take a breath. In most cases, some degree of blur in the early days is completely normal. But there are also specific causes of persistent blur that are treatable, and knowing the difference matters.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Normal <strong>Timeline</strong></h2>
          <div style={{display: 'grid', gap: '12px', marginTop: '20px'}}>
            <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap', marginTop: '2px'}}>Day 1</strong>
              <p style={{margin: 0, fontSize: '15px'}}>Vision is often noticeably better than before surgery, but hazy. Colors look brighter. The eye is still healing from the procedure.</p>
            </div>
            <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap', marginTop: '2px'}}>Days 2-7</strong>
              <p style={{margin: 0, fontSize: '15px'}}>Vision continues to sharpen. Mild blur and fluctuation are normal as corneal swelling resolves and the eye adjusts. Many patients are back to driving within a few days.</p>
            </div>
            <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap', marginTop: '2px'}}>Weeks 2-4</strong>
              <p style={{margin: 0, fontSize: '15px'}}>Vision should be stabilizing. Most patients feel confident in their new vision by this point. Mild dry eye can cause intermittent blur that improves with artificial tears.</p>
            </div>
            <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap', marginTop: '2px'}}>Weeks 4-6</strong>
              <p style={{margin: 0, fontSize: '15px'}}>Full visual stability. Final glasses prescription (if needed) is usually determined at this point. If blur persists beyond this window, further evaluation is warranted.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Common Causes of <strong>Persistent Blur</strong></h2>
          <p>If your vision remains blurry beyond the expected timeline, these are the most likely reasons:</p>

          <div className="insight-list">
            <div className="insight-item">
              <strong>Posterior Capsule Opacification (PCO)</strong>
              <p>The most common cause of blur returning months or years after surgery. The capsule behind the lens clouds over. Feels exactly like the cataract is back, but it is not. Fixed with a painless <Link href="/yag-laser-capsulotomy" style={{color: 'var(--night-horizon)'}}>YAG laser capsulotomy</Link> in the office.</p>
            </div>
            <div className="insight-item">
              <strong>Cystoid Macular Edema (CME)</strong>
              <p>Swelling at the center of the retina, typically appearing 4-6 weeks after surgery. Vision may have been good initially and then worsened. Usually responds to anti-inflammatory eye drops. More common in diabetic patients. Learn more on our <Link href="/cataract-surgery-complications#cme" style={{color: 'var(--night-horizon)'}}>complications page</Link>.</p>
            </div>
            <div className="insight-item">
              <strong>Residual Refractive Error</strong>
              <p>The lens implant power may not be a perfect match, leaving a small amount of nearsightedness, farsightedness, or astigmatism. This can usually be addressed with glasses, a minor laser enhancement, or in some cases a lens exchange.</p>
            </div>
            <div className="insight-item">
              <strong>Dry Eye</strong>
              <p>Cataract surgery can temporarily worsen dry eye symptoms. The ocular surface affects visual quality, so even mild dryness can cause fluctuating or hazy vision. Artificial tears and dry eye treatment usually resolve this.</p>
            </div>
            <div className="insight-item">
              <strong>Pre-existing Conditions</strong>
              <p>Macular degeneration, diabetic retinopathy, corneal scarring, epiretinal membrane, and other conditions can limit the visual clarity achievable after surgery. These are evaluated before surgery and discussed during the consultation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Can Cataracts <strong>Come Back?</strong></h2>
          <p>
            No. Once a cataract is removed, it cannot return. The natural lens has been permanently replaced with an artificial lens implant. What can happen is that the capsule behind the implant becomes cloudy (PCO), which mimics cataract symptoms. This is common, expected, and easily treated.
          </p>
          <p>
            If someone tells you your "cataract came back," what they likely mean is that you have developed posterior capsule opacification. A <Link href="/yag-laser-capsulotomy" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>5-minute YAG laser treatment</Link> in the office clears it permanently.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">When to Call <strong>Your Surgeon</strong></h2>
          <ul className="content-list">
            <li><strong>Sudden decrease in vision</strong> after initial improvement</li>
            <li><strong>Vision that was clear and then became blurry again</strong> weeks or months later</li>
            <li><strong>Blur accompanied by pain, redness, or light sensitivity</strong></li>
            <li><strong>New floaters, flashes of light, or shadows</strong> in your peripheral vision</li>
            <li><strong>Blur that is not improving</strong> after 2-4 weeks</li>
          </ul>
          <p>
            None of these automatically mean something is seriously wrong. But all of them deserve prompt evaluation. The earlier a treatable cause is identified, the better the outcome.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The most important thing I can tell patients about blur after surgery is this: do not suffer in silence. If your vision is not meeting your expectations, tell me. Sometimes the answer is "give it another two weeks." Sometimes it is a treatable condition we can fix today. Either way, you deserve an answer, not just reassurance.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Related <strong>Reading</strong></h2>
          <div className="related-grid">
            <Link href="/yag-laser-capsulotomy" className="related-card">
              <h3>YAG Laser Capsulotomy</h3>
              <p>The most common fix for blur that returns months after surgery.</p>
            </Link>
            <Link href="/cataract-recovery" className="related-card">
              <h3>Cataract Recovery</h3>
              <p>What to expect in the recovery room and the days that follow.</p>
            </Link>
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Complications Guide</h3>
              <p>A comprehensive look at everything that can happen after surgery.</p>
            </Link>
            <Link href="/halos-after-cataract-surgery" className="related-card">
              <h3>Halos After Surgery</h3>
              <p>Why you might see rings around lights, and when they go away.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
