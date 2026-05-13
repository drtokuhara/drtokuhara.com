'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
  ParallaxImage,
  VideoBackground,
  LineDraw,
} from '../components/ScrollAnimations';
import AudioNarration from '../components/AudioNarration';

export default function PatientJourneyContent() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* PAGE HERO */}
      <VideoBackground
        src="/media/desert-driving-freedom.mp4"
        poster="/media/dvc-building-exterior.jpg"
        overlayOpacity={0.5}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{position: 'relative', overflow: 'hidden'}}
        bottomOverlay={<AudioNarration src="/audio/narrations/patient-journey.mp3" />}
      >
        <div className="container">
          <h1 dangerouslySetInnerHTML={{ __html: t('patientJourney.title') || 'Your <strong>Patient Journey</strong>' }} />
          <p className="page-hero-sub">{t('patientJourney.subtitle') || 'From first visit to clear vision. No surprises. No pressure. Just a clear path.'}</p>
        </div>
      </VideoBackground>

      {/* PERSONAL MESSAGE VIDEO */}
      <section className="section section-white" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#007d95',
            marginBottom: '20px'
          }}>A personal message from Dr. Tokuhara</p>
          <div style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          }}>
            <video
              controls
              poster="/media/dr-t-research-message-poster.jpg"
              preload="metadata"
              playsInline
              style={{
                width: '100%',
                display: 'block',
              }}
            >
              <source src="/media/dr-t-research-message.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="prose" style={{fontSize: '1.15rem', lineHeight: '1.8'}}>
            {t('patientJourney.intro') || "I know cataract surgery feels like a big deal. It is. But it doesn\u2019t have to feel overwhelming. Here\u2019s exactly what happens from the moment you walk through our door to the moment you\u2019re back to living your life with clear vision. Step by step, so there are no surprises."}
          </p>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* STEP 1: THE EVALUATION */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">1</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}} dangerouslySetInnerHTML={{ __html: t('patientJourney.step1.title') || 'The <strong>Evaluation</strong>' }} />
                <p className="journey-step-subtitle">{t('patientJourney.step1.subtitle') || 'Your first visit. No commitment required.'}</p>
              </div>
            </div>
            <div className="journey-content-grid">
              <div className="journey-text">
                <p className="prose">
                  {t('patientJourney.step1.p1') || "Your first visit is a comprehensive eye exam. We measure your vision, map the surface of your eyes, and take detailed images of your lens. I\u2019m looking at the full picture \u2013 not just the cataract, but your cornea, your retina, your eye pressure, everything that matters."}
                </p>
                <p className="prose">
                  {t('patientJourney.step1.p2') || "Then we sit down and talk. I\u2019ll show you what I see, explain what it means in plain language, and answer every question you have. If surgery makes sense, I\u2019ll tell you why. If it doesn\u2019t, I\u2019ll tell you that too. No one in my office will ever pressure you into anything."}
                </p>
                <p className="prose">
                  {t('patientJourney.step1.p3') || "This visit is about information and trust. You\u2019re interviewing me as much as I\u2019m evaluating your eyes."}
                </p>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/dvc-testing-equipment.jpg"
                  alt={lang === 'es' ? 'Equipo de pruebas oculares en Desert Vision Center' : 'Diagnostic testing equipment at Desert Vision Center used during your initial evaluation'}
                  width={1200}
                  height={568}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--dune)" />

      {/* STEP 2: THE DECISION */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">2</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}} dangerouslySetInnerHTML={{ __html: t('patientJourney.step2.title') || 'The <strong>Decision</strong>' }} />
                <p className="journey-step-subtitle">{t('patientJourney.step2.subtitle') || 'Understanding your options. On your timeline.'}</p>
              </div>
            </div>
            <div className="journey-content-grid reverse">
              <div className="journey-text">
                <p className="prose">
                  {t('patientJourney.step2.p1') || "If surgery is the right move, the next step is choosing your lens implant. This is where things get personal. Your lens choice depends on your eyes, your lifestyle, and what matters most to you."}
                </p>
                <p className="prose">
                  {t('patientJourney.step2.p2') || "Do you want to be glasses-free for distance? Do you read for hours every day? Do you play golf and need sharp vision at arm\u2019s length? There\u2019s no single \u201Cbest\u201D lens \u2013 there\u2019s the best lens for you. I\u2019ll explain every option honestly, including the tradeoffs, and give you my recommendation. But the final decision is always yours."}
                </p>
                <p className="prose">
                  {t('patientJourney.step2.p3') || "Take the time you need. Some patients decide in one visit. Others want to think about it, talk to their family, or come back with more questions. That\u2019s not just okay \u2013 it\u2019s smart."}
                </p>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/dvc-exam-room.jpg"
                  alt={lang === 'es' ? 'Sala de examen en Desert Vision Center' : 'Desert Vision Center exam room where Dr. Tokuhara discusses your lens options'}
                  width={1200}
                  height={568}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* STEP 3: SURGERY DAY */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">3</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}} dangerouslySetInnerHTML={{ __html: t('patientJourney.step3.title') || 'Surgery <strong>Day</strong>' }} />
                <p className="journey-step-subtitle">{t('patientJourney.step3.subtitle') || 'Easier than you think. Most patients say so.'}</p>
              </div>
            </div>
            <div className="journey-content-grid">
              <div className="journey-text">
                <p className="prose">
                  {t('patientJourney.step3.p1') || "You\u2019ll arrive at the surgery center and we\u2019ll get you comfortable. Eye drops numb your eye completely \u2013 you won\u2019t feel pain. The procedure itself takes about 10 to 15 minutes. You\u2019re awake the entire time, but most patients are surprised by how calm and quick the experience is."}
                </p>
                <p className="prose">
                  {t('patientJourney.step3.p2') || "I use laser-assisted techniques for precision, and I talk you through what\u2019s happening so you\u2019re never in the dark. The cloudy lens comes out, the new lens goes in, and that\u2019s it. No stitches. No needles in the eye."}
                </p>
                <p className="prose">
                  {t('patientJourney.step3.p3') || "Bring someone to drive you home. Bring sunglasses. And bring your questions \u2013 I\u2019ll answer them right up until the moment we start."}
                </p>
                <div className="journey-detail-box">
                  <h4>{t('patientJourney.step3.whatToBring') || 'What to bring'}</h4>
                  <ul>
                    <li>{t('patientJourney.step3.bring1') || "A driver (you can\u2019t drive yourself home)"}</li>
                    <li>{t('patientJourney.step3.bring2') || 'Sunglasses for the ride back'}</li>
                    <li>{t('patientJourney.step3.bring3') || 'Comfortable, loose clothing'}</li>
                    <li>{t('patientJourney.step3.bring4') || "Your eye drops (we\u2019ll remind you which ones)"}</li>
                  </ul>
                </div>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/dr-t-slit-lamp-patient-view.jpg"
                  alt={lang === 'es' ? 'Dr. Tokuhara realizando un examen ocular' : 'Dr. Tokuhara performing an eye examination'}
                  width={600}
                  height={400}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--dune)" />

      {/* STEP 4: RECOVERY */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">4</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}} dangerouslySetInnerHTML={{ __html: t('patientJourney.step4.title') || 'The <strong>Recovery</strong>' }} />
                <p className="journey-step-subtitle">{t('patientJourney.step4.subtitle') || "Faster than you expect. We\u2019re with you the whole way."}</p>
              </div>
            </div>
            <div className="journey-content-grid reverse">
              <div className="journey-text">
                <h3 className="subsection-title">{t('patientJourney.step4.first24') || 'First 24 Hours'}</h3>
                <p className="prose">
                  {t('patientJourney.step4.first24text') || "Most patients notice a difference immediately. Colors look brighter. Things look sharper. Your eye may feel slightly scratchy or watery \u2013 that\u2019s normal. Rest, use your drops as directed, and resist the urge to rub your eye."}
                </p>
                <h3 className="subsection-title">{t('patientJourney.step4.firstWeek') || 'First Week'}</h3>
                <p className="prose">
                  {t('patientJourney.step4.firstWeekText') || "You\u2019ll come back the next day for a quick check. Most people are back to their normal routine within a few days \u2013 reading, watching TV, light walking. Avoid heavy lifting, dusty environments, and getting water directly in your eye. Your vision will continue to sharpen as your eye heals."}
                </p>
                <h3 className="subsection-title">{t('patientJourney.step4.followUp') || 'Follow-Up Visits'}</h3>
                <p className="prose">
                  {t('patientJourney.step4.followUpText') || "I\u2019ll see you at one day, one week, and one month after surgery. These visits are quick but important. I\u2019m checking the lens position, the healing, and your vision. If anything feels off between visits, call us. Don\u2019t wait and worry."}
                </p>
              </div>
              <div className="journey-image-wrap">
                <Image
                  src="/media/dvc-phoropter.jpg"
                  alt={lang === 'es' ? 'Foróptero en Desert Vision Center para medición de la vista' : 'Phoropter at Desert Vision Center used for precise vision measurement during follow-up visits'}
                  width={1200}
                  height={568}
                  className="journey-image"
                />
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* STEP 5: LIFE AFTER */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <div className="journey-step">
            <div className="journey-step-header">
              <span className="journey-step-number">5</span>
              <div>
                <h2 className="section-title" style={{marginBottom: '4px'}} dangerouslySetInnerHTML={{ __html: t('patientJourney.step5.title') || 'Life <strong>After</strong>' }} />
                <p className="journey-step-subtitle">{t('patientJourney.step5.subtitle') || 'This is the part people love talking about.'}</p>
              </div>
            </div>
            <div className="journey-lifestyle-grid">
              <div className="journey-text" style={{marginBottom: '32px'}}>
                <p className="prose">
                  {t('patientJourney.step5.p1') || "Your vision typically stabilizes within a few weeks. Once it does, we can finalize your glasses prescription if you need one. Some patients with premium lenses find they barely reach for glasses at all."}
                </p>
                <p className="prose">
                  {t('patientJourney.step5.p2') || "But here\u2019s what I hear most from patients: it\u2019s not just the acuity. It\u2019s the colors. The crispness. The confidence to drive at night again, to read a menu without pulling out your phone flashlight, to see your grandchildren\u2019s faces clearly across the room. That\u2019s what this is really about."}
                </p>
                <p className="prose">
                  {t('patientJourney.step5.p3') || "Cataract surgery doesn\u2019t just restore your vision. It restores your independence. Your hobbies. Your life in the Coachella Valley \u2013 the golf, the tennis, the hikes, the sunsets. All of it, in sharper focus."}
                </p>
              </div>
              <div className="journey-lifestyle-images">
                <div className="lifestyle-img-card">
                  <Image
                    src="/media/lifestyle-golf-man.jpg"
                    alt={lang === 'es' ? 'Hombre retirado jugando golf en el Valle de Coachella' : 'Retired man golfing in the Coachella Valley'}
                    width={400}
                    height={500}
                    className="lifestyle-img"
                  />
                </div>
                <div className="lifestyle-img-card">
                  <Image
                    src="/media/lifestyle-tennis-woman.jpg"
                    alt={lang === 'es' ? 'Mujer jugando tenis en un club del desierto' : 'Woman playing tennis at a desert country club'}
                    width={400}
                    height={500}
                    className="lifestyle-img"
                  />
                </div>
                <div className="lifestyle-img-card">
                  <Image
                    src="/media/lifestyle-convertible.jpg"
                    alt={lang === 'es' ? 'Mujer conduciendo un convertible en Palm Canyon Drive' : 'Woman driving a convertible on Palm Canyon Drive'}
                    width={400}
                    height={500}
                    className="lifestyle-img"
                  />
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center', padding: '60px 20px'}}>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('patientJourney.nervous.title') || 'If You\u2019re <strong>Nervous</strong>' }} />
          <p className="prose" style={{fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto'}}>
            {t('patientJourney.nervous.text') || "That\u2019s normal. I\u2019d be worried if you weren\u2019t. Eye surgery sounds scary, and no amount of reading on the internet fully prepares you for the real thing. That\u2019s what the conversation is for. Come in, ask your questions, and see if you feel comfortable. If you do, great. If you need more time, that\u2019s great too. There\u2019s no wrong answer here except rushing into something you\u2019re not ready for."}
          </p>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section-light">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Before Surgery</h3>
              <p>A detailed walkthrough of the pre-operative experience.</p>
            </Link>
            <Link href="/cataract-recovery" className="related-card">
              <h3>After Surgery</h3>
              <p>What to expect in recovery and when to call.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>A framework for evaluating who should operate on your eyes.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: t('patientJourney.cta.title') || 'Ready to take the <strong>first step?</strong>' }} />
          <p>{t('patientJourney.cta.subtitle') || "You don\u2019t need to be ready for surgery. You just need to be ready for a conversation."}</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">{t('common.scheduleConsultation') || 'Schedule a Consultation'}</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
