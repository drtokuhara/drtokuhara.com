import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  VideoBackground,
  StaggerChildren,
  StaggerItem,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens when lens material drops into the back of the eye during cataract surgery?',
      acceptedAnswer: { '@type': 'Answer', text: 'When lens fragments fall into the vitreous cavity during cataract surgery, it is called a retained lens fragment or dropped nucleus. This is a known complication that occurs in roughly 1-2% of cataract surgeries. The fragments cannot be left in place because they can cause inflammation, elevated eye pressure, and retinal problems. A two-step approach is used: first, a retina surgeon performs a vitrectomy to remove the fragments, and later, a secondary lens implant is placed to restore vision.' },
    },
    {
      '@type': 'Question',
      name: 'How is a dropped lens fragment removed from the eye?',
      acceptedAnswer: { '@type': 'Answer', text: 'A vitreoretinal surgeon performs a procedure called a pars plana vitrectomy (PPV). Using microsurgical instruments inserted through tiny incisions in the sclera, the surgeon removes the vitreous gel and carefully extracts the retained lens material. This is typically done within one to two weeks of the original surgery, depending on the amount of inflammation and the clinical situation.' },
    },
    {
      '@type': 'Question',
      name: 'Why is a secondary lens implant needed after a dropped lens fragment?',
      acceptedAnswer: { '@type': 'Answer', text: 'When the posterior capsule ruptures and lens material drops into the vitreous, the capsular bag that normally holds the lens implant is often too damaged to support one. After the retina surgeon removes the retained fragments and the eye has healed, a secondary lens implant can be placed using specialized techniques like Yamane intrascleral fixation, sulcus-fixated lenses, or anterior chamber lenses. This second surgery restores focused vision without the need for thick aphakic glasses.' },
    },
    {
      '@type': 'Question',
      name: 'What is the Yamane technique for secondary lens implantation?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Yamane technique is a sutureless method for anchoring a lens implant directly into the wall of the eye (sclera) using a double-needle approach. The lens haptics are externalized through the sclera and heat-cauterized to create small flanges that lock the lens in place. It provides excellent stability and centration without the need for sutures, which can erode or loosen over time. Dr. Tokuhara uses this technique regularly for secondary lens implantation.' },
    },
    {
      '@type': 'Question',
      name: 'Who performs the secondary lens implant after a dropped lens fragment?',
      acceptedAnswer: { '@type': 'Answer', text: 'The surgery is typically a team effort. A vitreoretinal surgeon handles the vitrectomy to remove the retained lens fragments. Once the eye has recovered, an anterior segment specialist like Dr. Tokuhara performs the secondary lens implant. Dr. Tokuhara is fellowship-trained in both cornea/anterior segment surgery and vitreoretinal surgery, giving him unique perspective on these complex cases. He works alongside retina colleagues throughout the process.' },
    },
  ],
};

export const metadata = {
  title: 'Dropped Lens After Cataract Surgery: Retained Lens Fragments and Secondary Lens Implantation',
  description: 'What happens when lens material drops into the vitreous during cataract surgery. The two-step team approach: vitrectomy by a retina surgeon, then secondary lens implant by Dr. Tokuhara. Coachella Valley.',
  alternates: { canonical: '/dropped-lens-after-cataract-surgery' },
  openGraph: {
    title: 'Dropped Lens After Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Retained lens fragments after cataract surgery require a coordinated approach. Learn about vitrectomy, secondary lens implantation, and why experience matters.',
    url: 'https://drtokuhara.com/dropped-lens-after-cataract-surgery',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Dropped Lens', href: '/dropped-lens-after-cataract-surgery' },
]);

export default function DroppedLensAfterCataractSurgery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <VideoBackground
        src="/media/ambient-crystal-alignment.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '55vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p style={{fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--oasis)', marginBottom: '16px', fontWeight: 600}}>A Complication That Requires a Team Approach</p>
          </ScrollReveal>
          <KineticText text="Dropped Lens After Cataract Surgery" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub" style={{maxWidth: '650px', margin: '16px auto 0'}}>When lens material falls into the back of the eye, recovery takes two surgeons and two steps. Here is how it works.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <p className="body-lead">
              "The surgeon told me pieces of my cataract fell to the back of my eye. What does that mean?"
            </p>
          </ScrollReveal>
          <p>
            This is one of the most unsettling things a patient can hear. You went in for a routine procedure, and now you are being told something unexpected happened. You may be scared. You may be confused. You almost certainly have questions that no one has fully answered yet.
          </p>
          <p>
            Let me explain exactly what happened, what comes next, and why, with the right team, this is a very manageable situation.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What <strong>Happened</strong></h2>
          </ScrollReveal>
          <p>
            During cataract surgery, the cloudy natural lens is broken into small pieces using ultrasound energy and removed through a tiny incision. The lens sits inside a thin, transparent membrane called the <strong>capsule</strong>. The surgeon opens the front of the capsule, removes the cataract, and places the new lens implant inside the remaining capsular bag.
          </p>
          <p>
            Sometimes, the back wall of that capsule (the posterior capsule) tears. When this happens, pieces of the cataract can fall through the tear and drop into the <strong>vitreous cavity</strong>, the gel-filled space at the back of the eye, in front of the retina.
          </p>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginTop: '24px', borderLeft: '3px solid var(--oasis)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>How common is this?</strong> Posterior capsule rupture with retained lens fragments occurs in roughly 1-2% of cataract surgeries. It is a known, recognized complication. It does not necessarily mean the surgeon made an error. Certain eyes are at higher risk: those with very dense cataracts, pseudoexfoliation, weak zonules, prior trauma, or previous eye surgery.</p>
          </div>
        </div>
      </section>

      {/* WHY IT CAN'T STAY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why the Fragments <strong>Need to Come Out</strong></h2>
          </ScrollReveal>
          <p>
            Lens material sitting in the vitreous cavity does not belong there. Left in place, it can cause:
          </p>
          <ul className="content-list">
            <li><strong>Chronic inflammation</strong> that damages the retina and other structures</li>
            <li><strong>Elevated eye pressure (glaucoma)</strong> from inflammatory debris clogging the drainage system</li>
            <li><strong>Cystoid macular edema</strong>, swelling at the center of the retina that blurs vision</li>
            <li><strong>Retinal detachment</strong> from traction on the retina by the vitreous gel</li>
          </ul>
          <p>
            The urgency depends on the amount of retained material and the level of inflammation. In some cases, the vitrectomy is scheduled within days. In others, controlled inflammation allows a more planned timeline of one to two weeks.
          </p>
        </div>
      </section>

      {/* THE TWO-STEP APPROACH */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Two-Step <strong>Team Approach</strong></h2>
            <p>Recovering from a dropped lens fragment is not a single procedure. It is a coordinated, two-stage process involving two surgeons with complementary expertise.</p>
          </ScrollReveal>

          <div style={{marginTop: '32px'}}>
            <StaggerChildren staggerDelay={0.15}>
              <StaggerItem>
                <div style={{background: 'var(--white)', padding: '32px 28px', borderRadius: '10px', marginBottom: '24px', borderLeft: '4px solid var(--oasis)'}}>
                  <div style={{display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px'}}>
                    <div style={{minWidth: '52px', height: '52px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, flexShrink: 0}}>1</div>
                    <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', margin: 0}}>Vitrectomy: Removing the Retained Fragments</h3>
                  </div>
                  <p style={{marginBottom: '12px'}}>
                    A <strong>vitreoretinal surgeon</strong> (retina specialist) performs a <strong>pars plana vitrectomy</strong> (PPV). Through tiny incisions in the sclera (the white wall of the eye), the surgeon uses microsurgical instruments to:
                  </p>
                  <ul className="content-list">
                    <li>Remove the vitreous gel that surrounds the lens fragments</li>
                    <li>Carefully extract each piece of retained lens material</li>
                    <li>Inspect the retina for any tears or detachment and treat them if found</li>
                    <li>Clear any residual inflammation</li>
                  </ul>
                  <p style={{fontSize: '14px', color: 'var(--text-light)', margin: '12px 0 0'}}>
                    This surgery is performed by the retina surgeon, not the cataract surgeon. It requires a different skill set, different instruments, and different training.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div style={{background: 'var(--white)', padding: '32px 28px', borderRadius: '10px', marginBottom: '24px', borderLeft: '4px solid var(--night-horizon)'}}>
                  <div style={{display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px'}}>
                    <div style={{minWidth: '52px', height: '52px', borderRadius: '50%', background: 'var(--oasis)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, flexShrink: 0}}>2</div>
                    <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', margin: 0}}>Secondary Lens Implant: Restoring Vision</h3>
                  </div>
                  <p style={{marginBottom: '12px'}}>
                    After the eye has recovered from the vitrectomy (typically several weeks to a few months), <strong>Dr. Tokuhara performs the secondary lens implantation</strong>. Because the capsular bag is usually too compromised to hold a standard lens implant, specialized techniques are required:
                  </p>
                  <ul className="content-list">
                    <li><strong><Link href="/yamane-technique" style={{color: 'var(--night-horizon)'}}>Yamane intrascleral fixation</Link></strong> - a sutureless technique that anchors the lens haptics directly into the wall of the eye using a double-needle approach with heat-cauterized flanges</li>
                    <li><strong>Sulcus-fixated lens</strong> - placing the implant in the ciliary sulcus (the groove behind the iris) with or without suture fixation</li>
                    <li><strong>Anterior chamber IOL</strong> - a lens designed to sit in front of the iris, used in specific anatomical situations</li>
                  </ul>
                  <p style={{fontSize: '14px', color: 'var(--text-light)', margin: '12px 0 0'}}>
                    The choice of technique depends on the eye's anatomy, the condition of the remaining capsule, and the individual patient's needs.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* WHY EXPERIENCE MATTERS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why This Requires a Surgeon Experienced with <strong>Complex Secondary Implants</strong></h2>
          </ScrollReveal>
          <p>
            Placing a lens implant into an eye that has already had a complication and a vitrectomy is fundamentally different from placing one during a routine cataract surgery. The capsular support structure is compromised or absent. The anatomy has changed. The vitreous is gone. The margin for error is smaller.
          </p>
          <p>
            This is a procedure that requires:
          </p>
          <ul className="content-list">
            <li>Expertise in alternative lens fixation techniques (not just standard bag placement)</li>
            <li>Experience evaluating what support structures remain in each individual eye</li>
            <li>Familiarity with the unique challenges of operating in a vitrectomized eye</li>
            <li>The judgment to choose the right technique for each situation</li>
          </ul>
          <p>
            Dr. Tokuhara is fellowship-trained in both <strong>cornea and anterior segment surgery</strong> and <strong>vitreoretinal surgery</strong>. This dual training gives him a perspective that few surgeons have: he understands the retina surgeon's work, the vitrectomized anatomy, and the structural challenges that follow, in addition to his expertise with advanced lens implantation techniques like <Link href="/yamane-technique" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>Yamane fixation</Link>.
          </p>

          <BlurReveal><div className="insight-highlight" style={{marginTop: '24px'}}>
            <p><strong>Dr. Tokuhara is the anterior segment specialist who handles the lens implant portion of this team approach. He is not the retina surgeon. He works alongside retina colleagues, each contributing the expertise their portion of the care requires.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What to <strong>Expect</strong></h2>
          </ScrollReveal>
          <p>
            If you or someone you know has experienced a dropped lens fragment, here is the typical timeline:
          </p>

          <StaggerChildren staggerDelay={0.1}>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '16px', fontWeight: 300, flexShrink: 0}}>Days<br/>1-14</div>
                <div>
                  <strong>Vitrectomy to remove retained fragments</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>Performed by a vitreoretinal surgeon. Timing depends on the clinical situation. Anti-inflammatory medications are used to control swelling.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '14px', fontWeight: 300, flexShrink: 0}}>Weeks<br/>4-12</div>
                <div>
                  <strong>Healing and stabilization</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>The eye needs time to recover from the vitrectomy before a second surgery. During this period, you may wear a temporary glasses correction or manage with the other eye. Regular monitoring ensures healing is on track.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--oasis)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>✓</div>
                <div>
                  <strong>Secondary lens implant by Dr. Tokuhara</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>Once the eye is stable and quiet, the permanent lens implant is placed using the technique best suited to the eye's anatomy. Vision is restored.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>

          <p style={{marginTop: '16px'}}>
            The total process from complication to final visual recovery takes several months. It requires patience. But the vast majority of patients achieve good visual outcomes when the care is coordinated between experienced surgeons.
          </p>
        </div>
      </section>

      {/* SECONDARY IOL OPTIONS - deeper */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Secondary Lens Implant <strong>Options</strong></h2>
          </ScrollReveal>
          <p>
            When the capsular bag can no longer support a lens, other fixation methods are available. Each has specific advantages depending on the individual anatomy:
          </p>

          <StaggerChildren className="insight-list" staggerDelay={0.1}>
            <StaggerItem>
              <div className="insight-item">
                <strong><Link href="/yamane-technique" style={{color: 'var(--night-horizon)'}}>Yamane Intrascleral Fixation</Link></strong>
                <p>Dr. Tokuhara's preferred technique for most cases. A three-piece lens is fixated directly into the sclera using a double-needle, sutureless approach. The haptics are externalized and heat-cauterized to create flanges that lock the lens in place. No sutures means no risk of suture erosion or loosening over time. The lens sits in the natural position behind the iris, providing the most physiologic optics.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>Sulcus-Fixated Lens</strong>
                <p>If some capsular support remains (partial capsule or intact anterior capsule), a lens can be placed in the sulcus, the groove between the iris and the ciliary body. This may include suture fixation to the sclera for added stability, or it may be stable on its own if enough support structure is present.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>Anterior Chamber IOL</strong>
                <p>In certain anatomical situations, a lens designed to sit in front of the iris may be the best option. Modern anterior chamber lenses have improved significantly from older designs and can provide excellent outcomes in the right patient. They are typically considered when scleral fixation is not ideal.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients who come to me after a dropped lens fragment are often dealing with two things at once: the physical reality of needing more surgery, and the emotional weight of something going wrong during what they were told was routine. Both are valid. I take time to explain exactly what happened, what the plan is, and what we expect the final outcome to be. Clarity is the best antidote to fear. And the truth is, with the right team and the right approach, these eyes can see well again.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Need a Secondary Lens <strong>Implant?</strong></h2>
            <p style={{maxWidth: '520px', margin: '0 auto 32px', color: 'var(--text-light)'}}>If you have had a complication requiring lens fragment removal and need a secondary implant, Dr. Tokuhara can evaluate your eye and discuss the best approach.</p>
          </ScrollReveal>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Learn <strong>More</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/yamane-technique" className="related-card">
              <h3>Yamane Technique</h3>
              <p>Sutureless intrascleral lens fixation for displaced or unsupported implants.</p>
            </Link>
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Complications Guide</h3>
              <p>The comprehensive guide to everything that can happen during and after surgery.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>Cataract surgery when other eye conditions are involved.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>Understanding the different types of artificial lenses available.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
