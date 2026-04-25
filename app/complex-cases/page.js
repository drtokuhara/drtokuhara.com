import Link from 'next/link';

export const metadata = {
  title: 'Complex Cataract Surgery & Corrective Cases - Second Opinion Specialist',
  description: 'Dr. Tokuhara specializes in complex cataract surgery, dislocated lens implant repair, retained lens fragments, and corrective surgery after complications. If another surgeon said nothing can be done, get a second opinion.',
  alternates: {
    canonical: '/complex-cases',
  },
  openGraph: {
    title: 'Complex & Corrective Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Expert in complex cataract surgery complications, dislocated lens implant repair, secondary lens implantation, and corrective reoperation. Coachella Valley second opinion specialist.',
    url: 'https://drtokuhara.com/complex-cases',
  },
};

export default function ComplexCasesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>When Other Surgeons Say <strong>Nothing Can Be Done</strong></h1>
          <p className="page-hero-sub">Complex cataract surgery, corrective procedures, and honest second opinions for patients who&rsquo;ve been told there are no options left.</p>
        </div>
      </section>

      {/* WHAT MAKES A CASE COMPLEX */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Makes a Case <strong>Complex</strong></h2>
          <p className="prose">
            A cataract case becomes complex when something increases risk, reduces predictability, or requires additional surgical skill, tools, or planning. Not every cataract is routine. Most are, and that&rsquo;s good news. But some eyes come with challenges that change the entire approach. Those challenges fall into a few distinct categories.
          </p>

          <h3 className="subsection-title">Patient and Anatomy Factors</h3>
          <p className="prose">
            Dense or &ldquo;rock hard&rdquo; cataracts that resist standard techniques. Small pupils that won&rsquo;t dilate well. Weak zonules from pseudoexfoliation or trauma, where the lens support system is compromised. Prior eye surgery like LASIK, radial keratotomy, or vitrectomy that changes the anatomy I&rsquo;m working with. Corneal disease like keratoconus or Fuchs dystrophy. Shallow anterior chambers. High myopia or unusually short eyes.
          </p>

          <h3 className="subsection-title">Medical and Ocular Conditions</h3>
          <p className="prose">
            Diabetes with retinopathy adds layers of risk. Glaucoma, especially in eyes with prior glaucoma surgery, changes what&rsquo;s possible. Macular degeneration affects how much visual improvement surgery can deliver. Uveitis and inflammatory eye disease mean the eye may react unpredictably to any intervention.
          </p>

          <h3 className="subsection-title">Intraoperative Challenges</h3>
          <p className="prose">
            Some complexity only reveals itself during surgery. A poor red reflex that limits visibility. Floppy iris syndrome, where the iris billows unpredictably during the procedure. Capsular instability that increases the risk of a rupture. These situations require a surgeon who has seen them before and knows how to adapt in real time.
          </p>

          <h3 className="subsection-title">Refractive Complexity</h3>
          <p className="prose">
            Prior refractive surgery makes lens power calculations harder. Irregular astigmatism from any cause limits what a standard lens implant can achieve. And sometimes the complexity isn&rsquo;t anatomical at all. It&rsquo;s a patient with high expectations for premium lenses and spectacle independence, combined with an eye that may not cooperate with those goals. Managing that conversation honestly is its own kind of surgical skill.
          </p>

          <p className="prose" style={{marginTop: '24px'}}>
            Then there are the cases where the first surgery didn&rsquo;t go as planned. A lens implant that shifted out of position. A piece of the cataract left behind. Damage to the iris or the capsule. These things happen. Cataract surgery has an excellent track record, but no surgery is risk-free. What matters is what happens next. And too often, what happens next is not enough.
          </p>
        </div>
      </section>

      {/* CASES I SPECIALIZE IN */}
      <section className="section section-warm">
        <div className="container">
          <h2 className="section-title">Cases I <strong>Specialize In</strong></h2>
          <div className="section-subtitle">These are the problems I solve every week. Not once a year. Every week.</div>
          <div className="card-grid">
            <div className="card">
              <h3>Dislocated or Subluxated Lens Implants</h3>
              <p>A lens implant that has shifted, tilted, or fallen out of position. This can happen months or years after surgery. The lens needs to be repositioned or replaced, and the technique matters enormously. I use the Yamane flanged haptic technique to secure lenses without sutures, giving patients a stable, long-term result.</p>
            </div>
            <div className="card">
              <h3>Retained Lens Fragments</h3>
              <p>Pieces of the cataract left behind during surgery. Sometimes small fragments are managed conservatively, but larger pieces can cause inflammation, elevated eye pressure, and corneal damage. I&rsquo;ve seen patients told to &ldquo;just wait it out&rdquo; when they needed the fragment removed urgently. If you&rsquo;re still having problems weeks after cataract surgery, this is one of the things I look for.</p>
            </div>
            <div className="card">
              <h3>Posterior Capsule Rupture Complications</h3>
              <p>A tear in the capsule during surgery. It&rsquo;s the most common serious intraoperative complication, and how it&rsquo;s managed in the moment determines the long-term outcome. When it isn&rsquo;t handled well, patients end up with lens instability, retained material, or worse. I repair the consequences and place a stable lens when the original plan is no longer possible.</p>
            </div>
            <div className="card">
              <h3>Iris Damage and Reconstruction</h3>
              <p>The iris can be damaged during complicated surgery, from trauma, or from certain medical devices. A damaged iris causes severe light sensitivity, glare, and cosmetic concerns. I perform iris reconstruction to restore both function and appearance, reducing symptoms that can be genuinely debilitating.</p>
            </div>
            <div className="card">
              <h3>Failed or Unsatisfactory Premium Lens Outcomes</h3>
              <p>Multifocal and extended depth lenses can deliver incredible results, but they&rsquo;re not right for every eye. When a premium lens causes persistent glare, halos, or blurred vision that doesn&rsquo;t improve, the conversation shifts to whether the lens should be exchanged or a different approach taken. I help patients navigate that decision honestly, without pressure to just &ldquo;give it more time.&rdquo;</p>
            </div>
            <div className="card">
              <h3>Secondary Lens Implantation</h3>
              <p>Some patients are left without a lens implant after a complicated surgery, or their original implant needs to come out. Secondary implantation using the Yamane technique lets me place a new lens in eyes that no longer have the natural capsule to hold one. It&rsquo;s a specialized procedure, and it changes lives for patients who&rsquo;ve been wearing thick glasses or contact lenses since their complication.</p>
            </div>
            <div className="card">
              <h3>Complex Anterior Segment Reconstruction</h3>
              <p>When multiple structures in the front of the eye are damaged, the repair isn&rsquo;t just one thing. It might involve the iris, the capsule, the lens, and the cornea all in the same case. Anterior segment reconstruction requires planning the entire repair as a single coordinated surgery, not a series of patchwork fixes.</p>
            </div>
            <div className="card">
              <h3>Reoperation After Another Surgeon&rsquo;s Complication</h3>
              <p>This is the hardest conversation in ophthalmology. Something went wrong, and now you need someone else to fix it. I approach these cases without judgment toward the original surgeon. Complications can happen to anyone. My focus is entirely on what we can do now to give you the best possible outcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SECOND OPINION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Second Opinion</strong></h2>
          <p className="prose">
            Let me say something clearly: getting a second opinion is not disrespectful to your doctor. It&rsquo;s not a betrayal. It&rsquo;s not an insult. It is one of the smartest things you can do when you&rsquo;re dealing with a complicated situation and you&rsquo;re not getting answers.
          </p>
          <p className="prose">
            I&rsquo;ve seen patients who were steered away from second opinions. Told that the complication was their fault for not choosing a more expensive option. Made to feel guilty for asking questions. That is not how medicine should work. When something goes wrong, the ethical response is honesty, compassion, and action. Not blame.
          </p>
          <p className="prose">
            When you come to me for a corrective evaluation, here&rsquo;s what to expect. I&rsquo;ll do a thorough exam. I&rsquo;ll look at everything with fresh eyes and no agenda. Then we&rsquo;ll have an honest conversation about what I find. Sometimes the news is good: the problem is fixable, and the path forward is clear. Sometimes it&rsquo;s more nuanced: we can improve things significantly, but perfection isn&rsquo;t realistic. And sometimes, honestly, the best answer is conservative management rather than another surgery.
          </p>
          <p className="prose">
            I will never tell you what you want to hear just to book a case. If surgery isn&rsquo;t the right move, I&rsquo;ll tell you that. If it is, I&rsquo;ll explain exactly what I plan to do, why, and what results you can realistically expect. You deserve that kind of transparency, especially after a difficult experience.
          </p>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">My Approach to <strong>Complex Surgery</strong></h2>
          <p className="prose">
            Complex surgery is not about being more aggressive. It&rsquo;s about being more prepared. Every case I take on starts with meticulous planning. I study the imaging. I map out the anatomy. I think through every scenario before I walk into the operating room, because in complex cases, you need a plan B, C, and D ready to go.
          </p>
          <p className="prose">
            There&rsquo;s something that people don&rsquo;t always understand about surgical expertise: the surgeon who manages complications regularly is better at preventing them. When you&rsquo;ve seen what can go wrong hundreds of times, you develop an instinct for avoiding those situations in the first place. You move differently. You make decisions earlier. You recognize warning signs that someone who only sees complex cases occasionally might miss.
          </p>
          <p className="prose">
            That&rsquo;s the difference between a surgeon who handles complex work every day and one who encounters it a few times a year. It&rsquo;s not about talent. It&rsquo;s about pattern recognition built through volume and focus. This is what I do. It&rsquo;s the core of my practice, not a side note.
          </p>
        </div>
      </section>

      {/* SURGICAL VIDEOS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">See the <strong>Work</strong></h2>
          <div className="section-subtitle">Real surgical videos showing how I approach complex and corrective cases.</div>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/7VkbQx36LeI"
                    title="Posterior Capsule Rupture Explained"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Posterior Capsule Rupture Explained</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/B8sM9Xa5mus"
                    title="Iris Damage Repair After Cataract Surgery"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Iris Damage Repair After Cataract Surgery</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/ZrnRIEa0F44"
                    title="Fixing a Dislocated Lens Implant: Yamane Technique"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Fixing a Dislocated Lens Implant: Yamane Technique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>If another doctor told you there&rsquo;s nothing more they can do, <strong>let&rsquo;s talk.</strong></h2>
          <p>You don&rsquo;t need a referral. You don&rsquo;t need to feel guilty about asking for a second opinion. You just need someone who will look at your situation with fresh eyes and give you an honest answer.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/cataract-surgery" className="btn-secondary">Back to Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
