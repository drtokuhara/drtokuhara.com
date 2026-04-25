import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Cataract Surgery in Rancho Mirage',
  description: 'Advanced cataract surgery with Dr. Keith Tokuhara at Desert Vision Center. Learn about the procedure, lens options, CLEAR in a Day bilateral surgery, recovery, and what to expect.',
  alternates: {
    canonical: '/cataract-surgery',
  },
  openGraph: {
    title: 'Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Advanced cataract surgery in the Coachella Valley. Laser assisted techniques, premium lens implants, and complex case expertise.',
    url: 'https://drtokuhara.com/cataract-surgery',
  },
};

export default function CataractSurgeryPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Cataract <strong>Surgery</strong></h1>
          <p className="page-hero-sub">What it is, when it makes sense, and what to expect from start to finish.</p>
        </div>
      </section>

      {/* WHAT ARE CATARACTS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Is a <strong>Cataract?</strong></h2>
          <p className="prose">
            A cataract is a clouding of the natural lens inside your eye. That lens sits behind your iris and pupil, and it&rsquo;s normally clear. Over time, proteins in the lens break down and clump together, making it cloudy. Your vision gets hazy. Colors look washed out. Night driving becomes a nightmare because of glare and halos.
          </p>
          <p className="prose">
            Almost everyone develops cataracts if they live long enough. It&rsquo;s the most common cause of vision loss in the world, and the good news is that it&rsquo;s completely fixable. Cataract surgery is one of the most frequently performed and successful surgical procedures in all of medicine.
          </p>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-1">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/iYKugpBcnQY"
                    title="What Are Cataracts? Dr. Tokuhara Explains"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">What Are Cataracts? Dr. Tokuhara Explains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN IS SURGERY RIGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When Is Surgery <strong>the Right Call?</strong></h2>
          <p className="prose">
            There&rsquo;s no magic number or test result that says &ldquo;it&rsquo;s time.&rdquo; Cataract surgery is an elective procedure, and the timing depends on you. The real question is: are cataracts getting in the way of the things you want to do?
          </p>
          <p className="prose">
            Can you drive safely at night? Can you read without straining? Are you having trouble recognizing faces or seeing clearly in bright light? If your cataracts are affecting your quality of life, it&rsquo;s worth having a conversation. But there&rsquo;s no rush, and nobody should be pressuring you into it.
          </p>
          <p className="prose">
            When we meet, I&rsquo;ll tell you honestly where your cataracts are and whether surgery makes sense now or whether waiting is perfectly fine. If you&rsquo;re not ready, that&rsquo;s okay. My job is to give you the information you need to make a good decision on your timeline.
          </p>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-1">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/YxmR_NSv5-k"
                    title="5 Questions to Ask Before Cataract Surgery"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">5 Questions to Ask Before Cataract Surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What to <strong>Expect</strong></h2>

          <h3 className="subsection-title">Before Surgery</h3>
          <p className="prose">
            We start with a thorough eye exam and measurements. I use advanced imaging to map your eye and plan your surgery. We&rsquo;ll talk about lens options, and I&rsquo;ll explain what each one actually does. No sales pitch. Just facts and my honest recommendation based on your eyes.
          </p>
          <p className="prose">
            You&rsquo;ll get a full rundown of what to expect on surgery day so there are no surprises. Most people are nervous before their first eye surgery. That&rsquo;s completely normal, and I&rsquo;d rather you ask me twenty questions than go in feeling anxious.
          </p>

          <h3 className="subsection-title">During Surgery</h3>
          <p className="prose">
            The procedure takes about 10 to 15 minutes per eye. You&rsquo;re awake, but your eye is numbed so you won&rsquo;t feel pain. I use laser assisted techniques for a level of precision that wasn&rsquo;t possible even a few years ago. The cloudy lens gets broken up and removed, and I place a new artificial lens implant in its place.
          </p>
          <p className="prose">
            Most patients say it was much easier than they expected. The anticipation is almost always worse than the actual experience.
          </p>

          <h3 className="subsection-title">Recovery</h3>
          <p className="prose">
            Most people notice improved vision within a day or two. You&rsquo;ll use eye drops for a few weeks and come back for follow up visits so I can make sure everything is healing well. There are some temporary restrictions, like avoiding heavy lifting and keeping water out of your eyes, but most patients are back to their normal routine pretty quickly.
          </p>

          <div className="content-image" style={{marginTop: '24px', marginBottom: '24px'}}>
            <Image
              src="/media/lifestyle-tennis-woman.jpg"
              alt="Woman playing tennis in the Coachella Valley with clear vision after cataract surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-2">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/XeELWvMkBY8"
                    title="What Happens in Cataract Pre-Op?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">What Happens in Cataract Pre-Op?</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/7mkouTcQWOo"
                    title="Cataract Recovery: What Happens After Surgery"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">What Happens After Surgery in the Recovery Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR IN A DAY */}
      <section id="clear-in-a-day" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">CLEAR in a Day<sup>&trade;</sup></h2>
          <div className="section-subtitle">Same day bilateral cataract surgery. Both eyes, one surgeon, one day.</div>
          <p className="prose">
            Traditionally, cataract surgery is done one eye at a time, weeks apart. That means two separate surgical days, two rounds of recovery, and weeks of imbalanced vision between your eyes. For the right patients, there&rsquo;s a better way.
          </p>
          <p className="prose">
            CLEAR in a Day is my protocol for same day bilateral cataract surgery. Both eyes are treated in a single session with independent sterile setups for each eye. The instruments are changed, the drapes are changed, everything is treated as if it&rsquo;s a completely separate surgery. Because it is.
          </p>
          <p className="prose">
            The advantages are real: one day of arranging rides and taking off work, faster visual recovery since both eyes improve together, and less overall disruption to your life. But I&rsquo;m not going to tell you every patient is a candidate. Some eyes need the sequential approach, and I&rsquo;ll tell you straight if that&rsquo;s your situation.
          </p>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-1">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/F8Z81PMgVR0"
                    title="How Do We Do Cataract Surgery in 2023?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">How We Do Cataract Surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LENS OPTIONS */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Lens <strong>Options</strong></h2>
          <div className="section-subtitle">There&rsquo;s no single &ldquo;best&rdquo; lens. The right one depends on your eyes, your lifestyle, and your goals.</div>
          <div className="card-grid">
            <div className="card">
              <h3>Monofocal Lenses</h3>
              <p>The standard lens implant. Sets your focus at one distance, usually far away. Most patients still need reading glasses afterward. It&rsquo;s reliable, proven, and covered by insurance. For a lot of patients, this is the right choice.</p>
            </div>
            <div className="card">
              <h3>Toric Lenses</h3>
              <p>Designed for patients with astigmatism. A toric lens corrects the irregular shape of your cornea at the same time as cataract removal. Without it, astigmatism will still blur your vision even after surgery. I use precise alignment techniques to get the best result.</p>
            </div>
            <div className="card">
              <h3>Multifocal &amp; Extended Depth Lenses</h3>
              <p>Lenses like PanOptix, PanOptix Pro, and Vivity give you a range of vision. Distance, intermediate, and sometimes near. The goal is reducing or eliminating dependence on glasses. These lenses aren&rsquo;t for everyone, and I&rsquo;ll explain why some eyes do better with them than others.</p>
            </div>
          </div>
          <div className="video-section" style={{marginTop: '40px'}}>
            <div className="video-grid">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/uCbLzD-KXe4"
                    title="Toric Lens Implants for Astigmatism"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Toric Lens Implants for Astigmatism</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/Yomf55PktXU"
                    title="PanOptix vs PanOptix Pro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">PanOptix vs PanOptix Pro: Real Patient Experience</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/4EEq6cg9zyY"
                    title="Vivity Lens Behind the Scenes"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Vivity Lens: Behind the Scenes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLEX CASES */}
      <section id="complex-cases" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Complex &amp; <strong>Corrective Cases</strong></h2>
          <p className="prose">
            Not every cataract surgery goes perfectly. And not every eye is straightforward. Some patients come to me after a bad experience with another surgeon. A dislocated lens implant. Iris damage. A posterior capsule rupture that left them with blurry vision and no answers. These are the cases I specialize in.
          </p>
          <p className="prose">
            I also see patients whose anatomy makes standard surgery difficult. Previous eye trauma, weak lens support structures, small pupils, dense cataracts. The cases that require a plan B, C, and D before you even start.
          </p>
          <p className="prose">
            If another doctor told you your case is too complicated or there&rsquo;s nothing more they can do, it&rsquo;s worth getting a second opinion. That&rsquo;s not a knock on your doctor. Some cases genuinely need a surgeon who handles complex work every day.
          </p>
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
                    title="Iris Damage Repair"
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
                    title="Yamane Technique for Dislocated Lens Implant"
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
          <h2>Have questions about <strong>your eyes?</strong></h2>
          <p>You don&rsquo;t need a referral to schedule a consultation. If you&rsquo;re thinking about cataract surgery, or you&rsquo;ve had a bad experience and want a second opinion, let&rsquo;s talk.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/education" className="btn-secondary">Browse All Educational Videos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
