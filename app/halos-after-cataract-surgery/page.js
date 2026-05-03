import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Are halos after cataract surgery normal?', acceptedAnswer: { '@type': 'Answer', text: 'Some degree of halos around lights is common in the first weeks to months after cataract surgery, especially with multifocal lens implants. For most patients, the brain adapts and halos become much less noticeable over time. Persistent or severe halos should be evaluated by your surgeon.' } },
    { '@type': 'Question', name: 'How long do halos last after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most patients notice halos diminishing significantly within 3-6 months as the brain adapts to the new lens optics, a process called neuroadaptation. In some patients, mild halos may persist permanently but rarely interfere with daily activities.' } },
    { '@type': 'Question', name: 'Do all lens implants cause halos?', acceptedAnswer: { '@type': 'Answer', text: 'Not equally. Multifocal lenses (like PanOptix) have a higher rate of noticeable halos because they split light into multiple focal points. EDOF lenses (like Vivity) produce fewer halos due to their wavefront-shaping design. Monofocal lenses generally produce the least visual phenomena.' } },
    { '@type': 'Question', name: 'Can halos after cataract surgery be fixed?', acceptedAnswer: { '@type': 'Answer', text: 'In many cases, halos improve on their own with neuroadaptation. If halos are caused by posterior capsule opacification, a YAG laser treatment resolves them. In rare cases where halos are debilitating and do not improve, lens exchange may be considered, though this is a more complex procedure.' } },
  ],
};

export const metadata = {
  title: 'Halos After Cataract Surgery: Why They Happen and What to Expect',
  description: 'Seeing halos around lights after cataract surgery? Dr. Tokuhara explains why this happens, which lenses cause more halos, when they go away, and when to be concerned.',
  alternates: { canonical: '/halos-after-cataract-surgery' },
  openGraph: {
    title: 'Halos After Cataract Surgery | Dr. Keith Tokuhara',
    description: 'A thorough explanation of halos after cataract surgery: causes, timeline, which lenses are involved, and when to see your surgeon.',
    url: 'https://drtokuhara.com/halos-after-cataract-surgery',
  },
};

export default function HalosAfterSurgery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero">
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Halos After <strong>Cataract Surgery</strong></h1></ScrollReveal>
          <p className="page-hero-sub">If you are seeing rings of light around headlights or streetlights after surgery, you are not alone. Here is what is happening and what to expect.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/halo-simulation-night-driving.png"
              alt="Simulation of halos around headlights at night, showing concentric rings of light as seen by some patients after cataract surgery with multifocal lens implants"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <div className="content-image-caption">A simulation of what halos look like when driving at night. Concentric rings of light around headlights are the most common visual phenomenon reported after multifocal lens implantation.</div>
          </div>
          <p className="body-lead">
            "Doctor, I am seeing halos around lights at night. Is that normal?"
          </p>
          <p>
            I hear this question frequently, especially in the first weeks and months after cataract surgery. The short answer: in most cases, yes, it is expected and it gets better. But the full answer depends on your lens type, your eye health, and how much time has passed.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why Halos <strong>Happen</strong></h2>
          <p>
            Halos after cataract surgery have several possible causes:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>The lens optic design</strong>
              <p>Multifocal lenses split incoming light into multiple focal points. Some of that split light creates concentric rings around bright light sources, especially at night. This is an inherent property of the optic, not a defect.</p>
            </div>
            <div className="insight-item">
              <strong>Corneal swelling</strong>
              <p>Mild corneal edema in the first days after surgery can scatter light. This resolves as the cornea heals, usually within the first week or two.</p>
            </div>
            <div className="insight-item">
              <strong>Posterior capsule opacification</strong>
              <p>If halos appear or worsen months to years after surgery, the cause may be a cloudy capsule behind the lens. A <Link href="/yag-laser-capsulotomy" style={{color: 'var(--night-horizon)'}}>YAG laser capsulotomy</Link> resolves this in minutes.</p>
            </div>
            <div className="insight-item">
              <strong>Residual refractive error</strong>
              <p>If the eye's prescription is not perfectly on target after surgery, light may scatter slightly. This can often be addressed with a minor enhancement or glasses for specific activities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Which Lenses Cause <strong>More Halos?</strong></h2>
          <div style={{display: 'grid', gap: '16px', marginTop: '20px'}}>
            <div style={{background: 'var(--bg-warm)', padding: '20px 24px', borderRadius: '8px', borderLeft: '3px solid var(--canyon)'}}>
              <strong>Multifocal (PanOptix, PanOptix Pro)</strong>
              <p style={{margin: '8px 0 0', fontSize: '15px'}}>Highest likelihood of noticeable halos, especially initially. Most patients adapt within 3-6 months. The tradeoff for excellent near, intermediate, and distance vision without glasses.</p>
            </div>
            <div style={{background: 'var(--bg-warm)', padding: '20px 24px', borderRadius: '8px', borderLeft: '3px solid var(--oasis)'}}>
              <strong>EDOF (Vivity)</strong>
              <p style={{margin: '8px 0 0', fontSize: '15px'}}>Significantly fewer halos than multifocal. Vivity's X-WAVE technology stretches light rather than splitting it, resulting in a smoother visual experience at night.</p>
            </div>
            <div style={{background: 'var(--bg-warm)', padding: '20px 24px', borderRadius: '8px', borderLeft: '3px solid var(--night-horizon)'}}>
              <strong>Monofocal</strong>
              <p style={{margin: '8px 0 0', fontSize: '15px'}}>Lowest risk of halos. Single focal point means no light splitting. Some transient halos possible from corneal healing or PCO.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-evening-walk-dog.jpg" alt="Couple walking in the evening with their dog, enjoying clear nighttime vision" width={1920} height={500} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <p>
            This is exactly why I spend so much time during the consultation discussing lens selection. Understanding this tradeoff before surgery, not after, is critical. For a detailed comparison, see <Link href="/vivity-vs-panoptix" style={{color: 'var(--night-horizon)'}}>Vivity vs PanOptix</Link>.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title"><strong>Neuroadaptation:</strong> Your Brain Learns to Filter</h2>
          <p>
            Here is the part most explanations miss: your brain is remarkably good at filtering out visual noise.
          </p>
          <p>
            In the first weeks after multifocal lens implantation, halos can feel prominent and distracting. But over time, your visual cortex learns to suppress the out-of-focus light rings. This process, called neuroadaptation, typically takes 3 to 6 months.
          </p>
          <p>
            Most patients who notice halos at one month report that they are significantly less noticeable, or completely gone, by three to six months. A small percentage of patients continue to notice them, but they rarely describe them as bothersome enough to affect daily life.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The key is managing expectations before surgery, not after. If you know halos are possible and temporary, they feel very different than if they catch you by surprise.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/stock-couple-pool-mountain-view.jpg"
              alt="Couple enjoying a clear view by the pool with mountain backdrop"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">When to Be <strong>Concerned</strong></h2>
          <p>Contact your surgeon if:</p>
          <ul className="content-list">
            <li>Halos are worsening rather than improving over time</li>
            <li>You notice a significant change in halos months or years after surgery (may indicate PCO)</li>
            <li>Halos are accompanied by pain, redness, or sudden vision loss</li>
            <li>Halos are severe enough to prevent you from driving safely at night</li>
            <li>You see halos in one eye but not the other, and it is getting worse</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I do not discourage multifocal lenses. I recommend them often, and most patients are thrilled. But I want every patient to understand that the trade for glasses freedom is a slight change in visual quality, particularly at night. If that sounds acceptable, it probably is. If it sounds concerning, we should talk about it before surgery, not after. An informed patient is a happy patient.</em>
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
            <Link href="/vivity-vs-panoptix" className="related-card">
              <h3>Vivity vs PanOptix</h3>
              <p>A detailed comparison including halo profiles for each lens.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>All lens options with honest tradeoffs.</p>
            </Link>
            <Link href="/yag-laser-capsulotomy" className="related-card">
              <h3>YAG Laser Capsulotomy</h3>
              <p>If halos returned months after surgery, PCO may be the cause.</p>
            </Link>
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Complications Guide</h3>
              <p>The full picture of what can happen after cataract surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
