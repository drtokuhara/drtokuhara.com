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
      name: 'What is the difference between Vivity and PanOptix lenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vivity is an Extended Depth of Focus (EDOF) lens that stretches light for continuous focus from distance through intermediate, with minimal halos and glare. PanOptix is a trifocal lens that splits light into three focal points (distance, intermediate, and near), providing stronger near vision but with a slightly higher chance of nighttime visual phenomena like halos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which lens is better, Vivity or PanOptix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither lens is universally better. The right choice depends on your lifestyle, visual priorities, and eye health. Vivity is often preferred by patients who prioritize night driving and can tolerate light readers for fine print. PanOptix is often chosen by patients who want maximum glasses independence at all distances.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PanOptix Pro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PanOptix Pro is the next generation of the PanOptix trifocal lens by Alcon. It uses the same trifocal optic design with enhanced UV and blue-violet light filtering, more light utilization reaching the retina, and less light scatter for improved contrast sensitivity. Dr. Tokuhara was the first surgeon in the Coachella Valley to implant the PanOptix Pro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can everyone get a Vivity or PanOptix lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Not every eye is a good candidate for premium lens implants. Corneal irregularity, significant dry eye disease, epiretinal membrane, macular degeneration, and other conditions can limit the visual quality these lenses deliver. A thorough pre-operative evaluation is essential before recommending either option.',
      },
    },
  ],
};

export const metadata = {
  title: 'Vivity vs PanOptix: How to Choose Between Two Great Lens Options',
  description: 'An honest comparison of the Vivity EDOF and PanOptix trifocal lens implants. Dr. Tokuhara explains the real differences, who does best with each, and how to decide.',
  alternates: { canonical: '/vivity-vs-panoptix' },
  openGraph: {
    title: 'Vivity vs PanOptix Lens Comparison | Dr. Keith Tokuhara',
    description: 'Vivity or PanOptix? EDOF or trifocal? Dr. Tokuhara breaks down the real differences based on hundreds of cases in the Coachella Valley.',
    url: 'https://drtokuhara.com/vivity-vs-panoptix',
  },
};

export default function VivityVsPanoptix() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Vivity vs <strong>PanOptix</strong></h1></ScrollReveal>
          <p className="page-hero-sub">Two excellent lenses. Different approaches. The right choice depends entirely on how you want to see the world.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            If you have been told you are a candidate for a premium lens implant, there is a good chance you have heard two names: Vivity and PanOptix. Both are made by Alcon. Both are outstanding. And both generate a lot of confusion.
          </p>
          <p>
            I was the first surgeon in the Coachella Valley to implant both the Vivity lens and the PanOptix Pro. That early experience, combined with hundreds of subsequent cases with each, has given me a clear picture of who does best with which lens, and why.
          </p>
          <p>
            This page is not about selling you one over the other. It is about helping you understand the real differences so you can make a confident decision.
          </p>
        </div>
      </section>

      {/* THE CORE DIFFERENCE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Core <strong>Difference</strong></h2>
          <p>
            These two lenses solve the same problem, reducing dependence on glasses after cataract surgery, but they use fundamentally different optical designs to get there.
          </p>

          <div className="compare-grid" style={{marginTop: '32px'}}>
            <div style={{background: 'var(--white)', padding: '28px', borderRadius: '12px', borderTop: '3px solid var(--night-horizon)'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--night-horizon)', marginBottom: '12px'}}>Vivity (EDOF)</h3>
              <p style={{fontSize: '15px', lineHeight: '1.7', color: 'var(--text)'}}>
                Uses <strong>X-WAVE wavefront-shaping technology</strong> to stretch and shift light, creating an extended, continuous range of focus from distance through intermediate. No rings in the optic. Fewer halos and glare.
              </p>
            </div>
            <div style={{background: 'var(--white)', padding: '28px', borderRadius: '12px', borderTop: '3px solid var(--canyon)'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--canyon)', marginBottom: '12px'}}>PanOptix (Trifocal)</h3>
              <p style={{fontSize: '15px', lineHeight: '1.7', color: 'var(--text)'}}>
                Splits incoming light into <strong>three distinct focal points</strong>: distance, 60 cm (intermediate), and 40 cm (near). The PanOptix Pro adds enhanced UV/blue-violet filtering and gets more light to the retina.
              </p>
            </div>
          </div>

          <p style={{marginTop: '24px'}}>
            The simplest way to think about it: Vivity gives you a smooth, extended range with fewer visual side effects. PanOptix gives you sharper near vision with a slightly higher chance of halos, especially at night.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET / WHAT YOU ACCEPT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Each Lens <strong>Delivers</strong></h2>

          <div style={{marginBottom: '40px'}}>
            <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '16px'}}>Vivity</h3>
            <p><strong>What you get:</strong> Excellent distance vision. Strong intermediate vision (computer, dashboard, cooking). Smooth, continuous focus. Significantly fewer halos and glare compared to multifocal designs. High patient satisfaction for night driving.</p>
            <p><strong>What you accept:</strong> Fine print and close-up reading may still require light readers. Near vision is functional but not as crisp as PanOptix. This is the tradeoff for the smoother optical experience.</p>
          </div>

          <LineDraw />

          <div style={{marginTop: '40px'}}>
            <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '16px'}}>PanOptix / PanOptix Pro</h3>
            <p><strong>What you get:</strong> Strong vision at all three distances. Many patients rarely or never wear glasses. The Pro version delivers more light to the retina with improved contrast sensitivity. 20/20 is achievable at near, intermediate, and distance.</p>
            <p><strong>What you accept:</strong> A slight change in visual quality, particularly at night. Some patients notice halos around lights, especially in the first few months. For most, the brain adapts and the halos fade into the background. For a small percentage, they remain noticeable.</p>
          </div>
        </div>
      </section>

      {/* WHO DOES BEST WITH EACH */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Who Does Best with <strong>Each Lens</strong></h2>

          <div className="insight-list">
            <div className="insight-item">
              <strong>Vivity tends to work well for patients who:</strong>
              <ul className="content-list" style={{marginTop: '8px'}}>
                <li>Drive frequently at night and want the best possible night vision</li>
                <li>Already wear reading glasses and do not mind keeping a pair handy</li>
                <li>Prioritize visual quality and crispness over total glasses freedom</li>
                <li>Are sensitive to glare or have occupations where perfect night vision matters</li>
                <li>Want a premium lens but feel cautious about visual phenomena</li>
              </ul>
            </div>
            <div className="insight-item">
              <strong>PanOptix tends to work well for patients who:</strong>
              <ul className="content-list" style={{marginTop: '8px'}}>
                <li>Want to minimize or eliminate glasses for all activities</li>
                <li>Read frequently and value clear near vision without readers</li>
                <li>Are comfortable with a brief adaptation period as the brain adjusts</li>
                <li>Have healthy corneas, stable tear film, and no macular issues</li>
                <li>Understand that some nighttime halos are the tradeoff for near freedom</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PATIENT EXPERIENCE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">A Patient Who Has <strong>Both</strong></h2>
          <p>
            One of my patients had a first-generation PanOptix lens implanted in his right eye by another surgeon. He was happy with the lens but not with the experience at that office. When it came time for his left eye, he chose to come to Desert Vision Center.
          </p>
          <p>
            By that point, the PanOptix Pro had just been released. We discussed the differences, and he chose to upgrade to the Pro in his left eye. Within 24 hours, he noticed the difference.
          </p>
          <div className="clinic-thought" style={{marginTop: '24px'}}>
            <p>
              <em>"If I look through just my right eye, it is a little duller. If I close my right eye and look through my left, there is a brightness, a clearness, a sharper image. I am thrilled."</em>
            </p>
          </div>
          <p style={{marginTop: '16px'}}>
            That firsthand comparison between generations is rare. It confirms what the engineering data suggests: the Pro is a meaningful refinement, not just a marketing update.
          </p>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '24px'}}>
            <iframe
              src="https://www.youtube.com/embed/Yomf55PktXU"
              title="PanOptix vs PanOptix Pro - Real Patient Experience"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* NOT FOR EVERYONE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Not Every Eye Is a <strong>Candidate</strong></h2>
          <p>
            This is the part that does not always make it into the marketing materials. Premium lenses, whether Vivity or PanOptix, require a certain baseline of eye health to perform well.
          </p>
          <p>Conditions that can limit the performance of these lenses include:</p>
          <ul className="content-list">
            <li>Corneal irregularity or scarring</li>
            <li>Significant dry eye disease</li>
            <li>Epiretinal membrane</li>
            <li>Macular degeneration</li>
            <li>Advanced glaucoma</li>
            <li>Uncontrolled diabetes affecting the retina</li>
          </ul>
          <p>
            I evaluate each of these factors carefully before making a recommendation. Putting the right lens in the wrong eye is worse than not offering it at all. Sometimes the best lens for your life is a well-aimed monofocal, and there is nothing second-rate about that.
          </p>
        </div>
      </section>

      {/* FIRST IN COACHELLA VALLEY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Experience <strong>Matters</strong></h2>
          <p>
            I was the first surgeon in the Coachella Valley to implant both the Vivity and the PanOptix Pro. That is not a talking point. It is relevant because early adoption means more cases, more follow-up data, and a deeper understanding of how each lens performs across different patients, lifestyles, and eye conditions.
          </p>
          <p>
            Hundreds of cases later, I have seen what the studies predict and what they miss. I know which patients light up at their one-week visit and which ones need a longer conversation about expectations. That clinical experience is what guides my recommendations, not a product brochure.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients often ask, "Which one would you put in your own eye?" I understand the question. But the honest answer is that my eyes, my lifestyle, and my tolerance for tradeoffs are not yours. What I can tell you is this: I have implanted both lenses hundreds of times, and I am genuinely enthusiastic about both. The right choice is not the more expensive one or the newer one. It is the one that matches how you want to live.</em>
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Watch <strong>More</strong></h2>
          <div className="video-side-by-side">
            <div>
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px'}}>
                <iframe
                  src="https://www.youtube.com/embed/4EEq6cg9zyY"
                  title="Vivity Lens Behind the Scenes"
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>Vivity Lens: Behind the Scenes</p>
            </div>
            <div>
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px'}}>
                <iframe
                  src="https://www.youtube.com/embed/i7ME2ufk1iM"
                  title="First PanOptix Pro in Coachella Valley"
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>First PanOptix Pro in the Coachella Valley</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>All Lens Options Explained</h3>
              <p>Monofocal, toric, EDOF, and multifocal. The full picture.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the procedure involves from start to finish.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>The questions nobody tells you to ask.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
