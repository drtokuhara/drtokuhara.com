import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal, BlurReveal, LineDraw } from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is cataract surgery safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cataract surgery is one of the safest and most commonly performed surgeries in the world, with over 4 million procedures performed annually in the United States alone. The success rate exceeds 99%. While no surgery is completely risk-free, serious complications are rare and most are treatable.' } },
    { '@type': 'Question', name: 'What are the risks of cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Risks include infection (endophthalmitis, approximately 1 in 1,000-3,000), posterior capsule rupture (1-3%), cystoid macular edema, retinal detachment, and iris damage. An experienced surgeon minimizes these risks through technique, preparation, and the ability to manage complications if they occur.' } },
    { '@type': 'Question', name: 'How many cataract surgeries are performed each year?', acceptedAnswer: { '@type': 'Answer', text: 'Over 4 million cataract surgeries are performed annually in the United States, making it the most commonly performed surgery in the country. Worldwide, the number exceeds 20 million annually.' } },
    { '@type': 'Question', name: 'What makes cataract surgery so safe?', acceptedAnswer: { '@type': 'Answer', text: 'Modern cataract surgery uses small incisions (often less than 3mm), topical anesthesia (numbing drops instead of needles), advanced phacoemulsification technology, and precise intraocular lens calculations. The procedure typically takes less than 15-20 minutes, and most patients go home the same day.' } },
  ],
};

export const metadata = {
  title: 'Is Cataract Surgery Safe? An Honest Answer from a Surgeon Who Has Performed 10,000+',
  description: 'An honest, evidence-based answer about cataract surgery safety. Dr. Tokuhara covers success rates, real risks, what makes it safe, and what makes it safer with the right surgeon.',
  alternates: { canonical: '/is-cataract-surgery-safe' },
  openGraph: {
    title: 'Is Cataract Surgery Safe? | Dr. Keith Tokuhara',
    description: 'Over 4 million performed annually in the US with a 99%+ success rate. Here is what that means and what it does not.',
    url: 'https://drtokuhara.com/is-cataract-surgery-safe',
  },
};

export default function IsCataractSurgerySafe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero">
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Is Cataract Surgery <strong>Safe?</strong></h1></ScrollReveal>
          <p className="page-hero-sub">The short answer is yes. The honest answer takes a few more paragraphs.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            Cataract surgery is the most commonly performed surgery in the United States. Over four million procedures are done every year. The success rate exceeds 99%.
          </p>
          <p>
            Those numbers are remarkable. But if you are the patient sitting in the exam chair, statistics only go so far. You want to know: is it safe for <em>me</em>? What could go wrong? And what happens if it does?
          </p>
          <p>
            I have performed over 10,000 cataract surgeries. Here is what I tell every patient who asks.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Makes It <strong>So Safe</strong></h2>
          <p>Modern cataract surgery bears almost no resemblance to what it was even 20 years ago:</p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>Tiny incisions</strong>
              <p>Typically less than 3mm. Many are self-sealing, meaning no stitches are needed. Smaller wounds heal faster and carry less risk of infection.</p>
            </div>
            <div className="insight-item">
              <strong>Topical anesthesia</strong>
              <p>Numbing eye drops instead of injections around the eye. This eliminates needle-related risks entirely and allows patients to recover faster.</p>
            </div>
            <div className="insight-item">
              <strong>Advanced phacoemulsification</strong>
              <p>Ultrasound technology breaks the cataract into tiny fragments that are gently suctioned out. Less energy, less tissue disruption, faster healing.</p>
            </div>
            <div className="insight-item">
              <strong>Femtosecond laser option</strong>
              <p>Computer-guided <Link href="/laser-cataract-surgery" style={{color: 'var(--night-horizon)'}}>laser precision</Link> for the most critical steps of surgery. Not required for every patient, but available when it adds value.</p>
            </div>
            <div className="insight-item">
              <strong>Quick procedure</strong>
              <p>Typically 15-20 minutes. You go home the same day. Most patients are back to normal activities within days.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-sunny-pathway-luxury.jpg" alt="Couple walking confidently through a sunny pathway" width={1920} height={400} style={{width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 30%'}} />
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Risks <strong>Honestly</strong></h2>
          <p>
            "Safe" does not mean "zero risk." No surgery does. Here is a transparent look at the real numbers:
          </p>
          <div style={{display: 'grid', gap: '12px', marginTop: '20px'}}>
            <div style={{background: 'var(--bg-warm)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap'}}>1-3%</strong>
              <div><strong>Posterior capsule rupture.</strong> The membrane behind the cataract breaks during surgery. Manageable by an experienced surgeon during the same procedure. <Link href="/cataract-surgery-complications#capsule-rupture" style={{color: 'var(--night-horizon)'}}>Learn more</Link></div>
            </div>
            <div style={{background: 'var(--bg-warm)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap'}}>1-2%</strong>
              <div><strong>Cystoid macular edema.</strong> Swelling at the retina center, usually appearing weeks after surgery. Most cases respond to anti-inflammatory drops. <Link href="/cataract-surgery-complications#cme" style={{color: 'var(--night-horizon)'}}>Learn more</Link></div>
            </div>
            <div style={{background: 'var(--bg-warm)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap'}}>0.5-1%</strong>
              <div><strong>Retinal detachment.</strong> Rare but serious. Higher risk in very nearsighted eyes. Requires prompt surgical repair. <Link href="/cataract-surgery-complications#retinal-detachment" style={{color: 'var(--night-horizon)'}}>Learn more</Link></div>
            </div>
            <div style={{background: 'var(--bg-warm)', padding: '20px 24px', borderRadius: '8px', display: 'flex', gap: '16px'}}>
              <strong style={{color: 'var(--night-horizon)', fontSize: '14px', whiteSpace: 'nowrap'}}>~0.05%</strong>
              <div><strong>Endophthalmitis.</strong> Internal eye infection. Extremely rare with modern antisepsis protocols. The most feared complication, and the one we take the most precautions to prevent. <Link href="/cataract-surgery-complications#endophthalmitis" style={{color: 'var(--night-horizon)'}}>Learn more</Link></div>
            </div>
          </div>
          <p style={{marginTop: '24px'}}>
            For a comprehensive guide to every complication, how I manage each one, and the research behind the numbers, visit my <Link href="/cataract-surgery-complications" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>Cataract Surgery Complications</Link> page. It is the most thorough resource of its kind on any surgeon's website.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Makes It <strong>Safer</strong></h2>
          <p>
            The procedure is safe. But the right surgeon makes it safer. Here is what to look for:
          </p>
          <ul className="content-list">
            <li><strong>Surgical volume.</strong> A surgeon who performs hundreds of cases per year has seen more variations and managed more unexpected situations than one who does a few dozen.</li>
            <li><strong>Complication management experience.</strong> Every surgeon encounters complications. The question is whether they have the training to handle them in real time.</li>
            <li><strong>Fellowship training.</strong> Sub-specialty training in areas like medical retina means the surgeon understands the full eye, not just the cataract.</li>
            <li><strong>Honesty.</strong> A surgeon who talks openly about risks, sets realistic expectations, and counsels you against surgery when it is not in your interest. <Link href="/ethical-cataract-care" style={{color: 'var(--night-horizon)'}}>Ethics matter</Link>.</li>
            <li><strong>Complex case experience.</strong> If you have <Link href="/complex-cases" style={{color: 'var(--night-horizon)'}}>additional eye conditions</Link>, you need a surgeon who has managed eyes like yours before.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The question patients are really asking when they say "is it safe?" is not about statistics. It is about trust. They want to know: will I be okay? And the honest answer is: with the right preparation, the right surgeon, and the right expectations, the overwhelming majority of patients do beautifully. I cannot promise zero risk. No one can. But I can promise that I prepare for every surgery as if it were the most important one I will ever do. Because for you, it is.</em>
            </p>
          </div></BlurReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Complications Guide</h3>
              <p>The most comprehensive complication resource on any surgeon's site.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>What actually matters when selecting who operates on your eyes.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the procedure involves from start to finish.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Pre-Op Guide</h3>
              <p>Exactly what happens before you go into the operating room.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
