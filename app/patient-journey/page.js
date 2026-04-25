import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Your Patient Journey — From First Visit to Clear Vision',
  description: 'Step-by-step guide to cataract surgery with Dr. Keith Tokuhara. From your first evaluation through recovery and life after surgery. No surprises, no pressure.',
  alternates: {
    canonical: '/patient-journey',
  },
  openGraph: {
    title: 'Your Patient Journey | Dr. Keith Tokuhara',
    description: 'What to expect from first visit to clear vision. A step-by-step guide to cataract surgery at Desert Vision Center.',
    url: 'https://drtokuhara.com/patient-journey',
  },
};

export default function PatientJourneyPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Your <strong>Patient Journey</strong></h1>
          <p className="page-hero-sub">From first visit to clear vision. No surprises. No pressure. Just a clear path.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="prose" style={{fontSize: '1.15rem', lineHeight: '1.8'}}>
            I know cataract surgery feels like a big deal. It is. But it doesn&rsquo;t have to feel overwhelming. Here&rsquo;s exactly what happens from the moment you walk through our door to the moment you&rsquo;re back to living your life with clear vision. Step by step, so there are no surprises.
          </p>
        </div>
      </section>

      {/* STEP 1: THE EVALUATION */}
      <section className="section section-warm">
        <div className="container">
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">1</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}}>The <strong>Evaluation</strong></h2>
                <p className="journey-step-subtitle">Your first visit. No commitment required.</p>
              </div>
            </div>
            <div className="journey-content-grid">
              <div className="journey-text">
                <p className="prose">
                  Your first visit is a comprehensive eye exam. We measure your vision, map the surface of your eyes, and take detailed images of your lens. I&rsquo;m looking at the full picture — not just the cataract, but your cornea, your retina, your eye pressure, everything that matters.
                </p>
                <p className="prose">
                  Then we sit down and talk. I&rsquo;ll show you what I see, explain what it means in plain language, and answer every question you have. If surgery makes sense, I&rsquo;ll tell you why. If it doesn&rsquo;t, I&rsquo;ll tell you that too. No one in my office will ever pressure you into anything.
                </p>
                <p className="prose">
                  This visit is about information and trust. You&rsquo;re interviewing me as much as I&rsquo;m evaluating your eyes.
                </p>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/patient-couple-consultation.jpg"
                  alt="Patient consultation at Desert Vision Center"
                  width={600}
                  height={400}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2: THE DECISION */}
      <section className="section section-white">
        <div className="container">
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">2</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}}>The <strong>Decision</strong></h2>
                <p className="journey-step-subtitle">Understanding your options. On your timeline.</p>
              </div>
            </div>
            <div className="journey-content-grid reverse">
              <div className="journey-text">
                <p className="prose">
                  If surgery is the right move, the next step is choosing your lens implant. This is where things get personal. Your lens choice depends on your eyes, your lifestyle, and what matters most to you.
                </p>
                <p className="prose">
                  Do you want to be glasses-free for distance? Do you read for hours every day? Do you play golf and need sharp vision at arm&rsquo;s length? There&rsquo;s no single &ldquo;best&rdquo; lens — there&rsquo;s the best lens <em>for you</em>. I&rsquo;ll explain every option honestly, including the tradeoffs, and give you my recommendation. But the final decision is always yours.
                </p>
                <p className="prose">
                  Take the time you need. Some patients decide in one visit. Others want to think about it, talk to their family, or come back with more questions. That&rsquo;s not just okay — it&rsquo;s smart.
                </p>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/lifestyle-sunset-dining.jpg"
                  alt="Retired couple enjoying dinner in the Coachella Valley"
                  width={600}
                  height={400}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 3: SURGERY DAY */}
      <section className="section section-warm">
        <div className="container">
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">3</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}}>Surgery <strong>Day</strong></h2>
                <p className="journey-step-subtitle">Easier than you think. Most patients say so.</p>
              </div>
            </div>
            <div className="journey-content-grid">
              <div className="journey-text">
                <p className="prose">
                  You&rsquo;ll arrive at the surgery center and we&rsquo;ll get you comfortable. Eye drops numb your eye completely — you won&rsquo;t feel pain. The procedure itself takes about 10 to 15 minutes. You&rsquo;re awake the entire time, but most patients are surprised by how calm and quick the experience is.
                </p>
                <p className="prose">
                  I use laser-assisted techniques for precision, and I talk you through what&rsquo;s happening so you&rsquo;re never in the dark. The cloudy lens comes out, the new lens goes in, and that&rsquo;s it. No stitches. No needles in the eye.
                </p>
                <p className="prose">
                  Bring someone to drive you home. Bring sunglasses. And bring your questions — I&rsquo;ll answer them right up until the moment we start.
                </p>
                <div className="journey-detail-box">
                  <h4>What to bring</h4>
                  <ul>
                    <li>A driver (you can&rsquo;t drive yourself home)</li>
                    <li>Sunglasses for the ride back</li>
                    <li>Comfortable, loose clothing</li>
                    <li>Your eye drops (we&rsquo;ll remind you which ones)</li>
                  </ul>
                </div>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/dr-t-slit-lamp-patient-view.jpg"
                  alt="Dr. Tokuhara performing an eye examination"
                  width={600}
                  height={400}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 4: RECOVERY */}
      <section className="section section-white">
        <div className="container">
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">4</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}}>The <strong>Recovery</strong></h2>
                <p className="journey-step-subtitle">Faster than you expect. We&rsquo;re with you the whole way.</p>
              </div>
            </div>
            <div className="journey-content-grid reverse">
              <div className="journey-text">
                <h3 className="subsection-title">First 24 Hours</h3>
                <p className="prose">
                  Most patients notice a difference immediately. Colors look brighter. Things look sharper. Your eye may feel slightly scratchy or watery — that&rsquo;s normal. Rest, use your drops as directed, and resist the urge to rub your eye.
                </p>
                <h3 className="subsection-title">First Week</h3>
                <p className="prose">
                  You&rsquo;ll come back the next day for a quick check. Most people are back to their normal routine within a few days — reading, watching TV, light walking. Avoid heavy lifting, dusty environments, and getting water directly in your eye. Your vision will continue to sharpen as your eye heals.
                </p>
                <h3 className="subsection-title">Follow-Up Visits</h3>
                <p className="prose">
                  I&rsquo;ll see you at one day, one week, and one month after surgery. These visits are quick but important. I&rsquo;m checking the lens position, the healing, and your vision. If anything feels off between visits, call us. Don&rsquo;t wait and worry.
                </p>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/lifestyle-poolside-reading.jpg"
                  alt="Woman reading by a resort pool in Palm Desert"
                  width={600}
                  height={400}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 5: LIFE AFTER */}
      <section className="section section-warm">
        <div className="container">
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">5</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}}>Life <strong>After</strong></h2>
                <p className="journey-step-subtitle">This is the part people love talking about.</p>
              </div>
            </div>
            <div className="journey-lifestyle-grid">
              <div className="journey-text" style={{marginBottom: '32px'}}>
                <p className="prose">
                  Your vision typically stabilizes within a few weeks. Once it does, we can finalize your glasses prescription if you need one. Some patients with premium lenses find they barely reach for glasses at all.
                </p>
                <p className="prose">
                  But here&rsquo;s what I hear most from patients: it&rsquo;s not just the acuity. It&rsquo;s the colors. The crispness. The confidence to drive at night again, to read a menu without pulling out your phone flashlight, to see your grandchildren&rsquo;s faces clearly across the room. That&rsquo;s what this is really about.
                </p>
                <p className="prose">
                  Cataract surgery doesn&rsquo;t just restore your vision. It restores your independence. Your hobbies. Your life in the Coachella Valley — the golf, the tennis, the hikes, the sunsets. All of it, in sharper focus.
                </p>
              </div>
              <div className="journey-lifestyle-images">
                <div className="lifestyle-img-card">
                  <Image
                    src="/media/lifestyle-golf-man.jpg"
                    alt="Retired man golfing in the Coachella Valley"
                    width={400}
                    height={500}
                    className="lifestyle-img"
                  />
                </div>
                <div className="lifestyle-img-card">
                  <Image
                    src="/media/lifestyle-tennis-woman.jpg"
                    alt="Woman playing tennis at a desert country club"
                    width={400}
                    height={500}
                    className="lifestyle-img"
                  />
                </div>
                <div className="lifestyle-img-card">
                  <Image
                    src="/media/lifestyle-convertible.jpg"
                    alt="Woman driving a convertible on Palm Canyon Drive"
                    width={400}
                    height={500}
                    className="lifestyle-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center', padding: '60px 20px'}}>
          <h2 className="section-title">If You&rsquo;re <strong>Nervous</strong></h2>
          <p className="prose" style={{fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto'}}>
            That&rsquo;s normal. I&rsquo;d be worried if you weren&rsquo;t. Eye surgery sounds scary, and no amount of reading on the internet fully prepares you for the real thing. That&rsquo;s what the conversation is for. Come in, ask your questions, and see if you feel comfortable. If you do, great. If you need more time, that&rsquo;s great too. There&rsquo;s no wrong answer here except rushing into something you&rsquo;re not ready for.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to take the <strong>first step?</strong></h2>
          <p>You don&rsquo;t need to be ready for surgery. You just need to be ready for a conversation.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
