'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';

export default function ReadyForSurgeryContent() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 dangerouslySetInnerHTML={{ __html: t('readyForSurgery.title') || 'Ready to See <strong>Clearly Again</strong>' }} />
          <p className="page-hero-sub">{t('readyForSurgery.subtitle') || "You've made the decision. Here's everything you need to feel prepared, confident, and calm."}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            {t('readyForSurgery.intro') || "Making the decision to move forward with cataract surgery is the hardest part for most patients. The surgery itself? That's the part we're built for. This page walks you through every step so there are no surprises, no confusion, and nothing left to wonder about."}
          </p>
        </div>
      </section>

      {/* TIMELINE OVERVIEW */}
      <section className="section section-warm">
        <div className="container">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('readyForSurgery.timeline.title') || 'Your <strong>Timeline</strong>' }} />
          <p className="section-intro" style={{ maxWidth: '680px', margin: '0 auto 40px' }}>
            {t('readyForSurgery.timeline.intro') || "From consultation to clear vision, here's what the path looks like:"}
          </p>
          <div className="timeline-grid">
            <div className="timeline-step">
              <div className="timeline-marker">1</div>
              <h3>{t('readyForSurgery.timeline.step1.title') || 'Consultation'}</h3>
              <p>{t('readyForSurgery.timeline.step1.text') || "Comprehensive exam, measurements, lens discussion. You'll leave with a clear plan and answers to every question."}</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-marker">2</div>
              <h3>{t('readyForSurgery.timeline.step2.title') || 'Pre-Op Preparation'}</h3>
              <p>{t('readyForSurgery.timeline.step2.text') || "Start eye drops a few days before surgery. Simple checklist. We walk you through everything."}</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-marker">3</div>
              <h3>{t('readyForSurgery.timeline.step3.title') || 'Surgery Day'}</h3>
              <p>{t('readyForSurgery.timeline.step3.text') || "About 10 to 15 minutes. You're awake, comfortable, and home within a couple of hours."}</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-marker">4</div>
              <h3>{t('readyForSurgery.timeline.step4.title') || 'Recovery'}</h3>
              <p>{t('readyForSurgery.timeline.step4.text') || "Most patients see clearly the next day. Full stabilization over a few weeks. Follow-up visits at day one, one week, and one month."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR IN A DAY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('readyForSurgery.clear.title') || 'Same-Day Bilateral Surgery: <strong>CLEAR in a Day</strong>' }} />
          <p>
            {t('readyForSurgery.clear.p1') || "If you have cataracts in both eyes, you may not need two separate surgeries weeks apart. CLEAR in a Day (Cataract Lens Exchange And Restoration) is our same-day bilateral approach: both eyes treated in a single visit."}
          </p>
          <p>
            {t('readyForSurgery.clear.p2') || "This means one preparation day instead of two, one recovery period instead of two, and your vision comes together faster because both eyes heal in sync. It's not right for every patient, and I'll tell you honestly if your situation calls for a staged approach instead. But for the right candidate, it simplifies everything."}
          </p>
          <p>
            <Link href="/clear-in-a-day" style={{ color: '#007d95', fontWeight: 500 }}>
              {t('readyForSurgery.clear.link') || "Learn more about CLEAR in a Day"}
            </Link>
          </p>
        </div>
      </section>

      {/* PRE-OP PREPARATION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('readyForSurgery.preop.title') || 'Pre-Op <strong>Preparation</strong>' }} />
          <p>
            {t('readyForSurgery.preop.intro') || "Getting ready for surgery is straightforward. Our team will give you specific instructions, but here's the general picture:"}
          </p>

          <div className="prep-section">
            <h3>{t('readyForSurgery.preop.drops.title') || 'Eye Drops'}</h3>
            <p>
              {t('readyForSurgery.preop.drops.text') || "You'll start prescription eye drops a few days before surgery. These reduce inflammation and help prevent infection. We'll give you a simple schedule, and our staff will walk you through exactly which drop goes when."}
            </p>
          </div>

          <div className="prep-section">
            <h3>{t('readyForSurgery.preop.meds.title') || 'Medications'}</h3>
            <p>
              {t('readyForSurgery.preop.meds.text') || "Bring a list of all your current medications to your pre-op visit. Most medications can continue as normal. If anything needs to be adjusted, we'll coordinate with your primary doctor. Blood thinners are a common question: in most cases they don't need to be stopped, but we'll confirm this individually."}
            </p>
          </div>

          <div className="prep-section">
            <h3>{t('readyForSurgery.preop.day.title') || 'The Day Before'}</h3>
            <ul className="content-list">
              <li>{t('readyForSurgery.preop.day.item1') || "Use your pre-op drops as scheduled"}</li>
              <li>{t('readyForSurgery.preop.day.item2') || "Arrange your ride (you cannot drive yourself home after surgery)"}</li>
              <li>{t('readyForSurgery.preop.day.item3') || "No food or drink after midnight (or as instructed)"}</li>
              <li>{t('readyForSurgery.preop.day.item4') || "Wear comfortable, loose clothing, nothing that goes over your head"}</li>
              <li>{t('readyForSurgery.preop.day.item5') || "Skip makeup, perfume, and cologne on surgery day"}</li>
              <li>{t('readyForSurgery.preop.day.item6') || "Get a good night's sleep. The surgery is the easy part."}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SURGERY DAY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('readyForSurgery.surgeryDay.title') || 'Surgery <strong>Day</strong>' }} />
          <p>
            {t('readyForSurgery.surgeryDay.intro') || "Here's what actually happens, step by step. No medical jargon, no hand-waving."}
          </p>

          <div className="surgery-steps">
            <div className="surgery-step-item">
              <div className="surgery-step-time">{t('readyForSurgery.surgeryDay.arrival.time') || 'Arrival'}</div>
              <div className="surgery-step-detail">
                <p>{t('readyForSurgery.surgeryDay.arrival.text') || "You'll arrive about an hour before your procedure. We check you in, confirm everything, and start dilating your eye with drops. You'll meet the anesthesia team and have a chance to ask any last questions."}</p>
              </div>
            </div>

            <div className="surgery-step-item">
              <div className="surgery-step-time">{t('readyForSurgery.surgeryDay.prep.time') || 'Preparation'}</div>
              <div className="surgery-step-detail">
                <p>{t('readyForSurgery.surgeryDay.prep.text') || "Numbing drops are applied to your eye. You'll receive a mild sedative to help you relax. You're awake the entire time, but most patients describe feeling calm and comfortable. No needles in the eye."}</p>
              </div>
            </div>

            <div className="surgery-step-item">
              <div className="surgery-step-time">{t('readyForSurgery.surgeryDay.procedure.time') || '10 to 15 Minutes'}</div>
              <div className="surgery-step-detail">
                <p>{t('readyForSurgery.surgeryDay.procedure.text') || "The procedure itself is quick. I use a small incision, typically less than 3mm, to remove the cloudy lens and place your new implant. You may see light and movement, but you won't feel pain. I talk you through what's happening so you're never guessing."}</p>
              </div>
            </div>

            <div className="surgery-step-item">
              <div className="surgery-step-time">{t('readyForSurgery.surgeryDay.after.time') || 'Afterward'}</div>
              <div className="surgery-step-detail">
                <p>{t('readyForSurgery.surgeryDay.after.text') || "You'll rest briefly in recovery, then go home with your driver. We'll place a clear shield over your eye to protect it while you sleep. Most patients are surprised how straightforward the whole experience was."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('readyForSurgery.recovery.title') || 'Recovery: What\'s <strong>Actually Normal</strong>' }} />
          <p>
            {t('readyForSurgery.recovery.intro') || "Recovery is faster than most patients expect. Here's the realistic timeline:"}
          </p>

          <div className="recovery-timeline">
            <div className="recovery-block">
              <h3>{t('readyForSurgery.recovery.day1.title') || 'Day One'}</h3>
              <p>{t('readyForSurgery.recovery.day1.text') || "Many patients notice improved vision within hours. Your eye may feel slightly gritty, watery, or sensitive to light. This is normal. You'll come in for a quick post-op check. Use your drops as directed. Take it easy."}</p>
            </div>

            <div className="recovery-block">
              <h3>{t('readyForSurgery.recovery.week1.title') || 'First Week'}</h3>
              <p>{t('readyForSurgery.recovery.week1.text') || "Most patients return to normal daily activities within a few days: reading, watching TV, light walking, cooking. Avoid rubbing your eye, heavy lifting, swimming, and dusty environments. Your vision continues to sharpen as the eye heals."}</p>
            </div>

            <div className="recovery-block">
              <h3>{t('readyForSurgery.recovery.month1.title') || 'First Month'}</h3>
              <p>{t('readyForSurgery.recovery.month1.text') || "By your one-month visit, your eye is typically healed and your vision has stabilized. If you need an updated glasses prescription, we finalize it now. Most patients are back to full activity well before this point."}</p>
            </div>
          </div>

          <div className="clinic-thought" style={{ marginTop: '32px' }}>
            <h3>{t('readyForSurgery.recovery.callUs.title') || 'When to call us'}</h3>
            <p>
              {t('readyForSurgery.recovery.callUs.text') || "Sudden vision loss, increasing pain, or flashing lights: call immediately. Don't wait for your next appointment. Don't Google it. Call us. We'd rather hear from you ten times with false alarms than miss one real concern."}
            </p>
          </div>
        </div>
      </section>

      {/* YOUR SUPPORT TEAM */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('readyForSurgery.team.title') || 'Your Support Team at <strong>Desert Vision Center</strong>' }} />
          <p>
            {t('readyForSurgery.team.p1') || "Cataract surgery isn't just a procedure. It's an experience, and the people around you shape that experience as much as the technology. At Desert Vision Center, our team is small by design. That means the same people who greet you at your first visit are the ones who check on you after surgery."}
          </p>
          <p>
            {t('readyForSurgery.team.p2') || "You see me, your surgeon, at every visit. Not a rotating cast. Not whoever happens to be available. Me. Because I need to know your eyes, your concerns, and your progress firsthand."}
          </p>
          <p>
            {t('readyForSurgery.team.p3') || "Our surgical coordinators will walk you through scheduling, insurance questions, lens costs, and preparation. If you have a question at 7 PM the night before surgery, we're reachable. You shouldn't have to carry your anxiety alone."}
          </p>
          <div style={{ marginTop: '32px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
            <Image
              src="/media/lifestyle-desert-home-woman.jpg"
              alt={lang === 'es' ? 'Mujer disfrutando de su hogar en el Valle de Coachella con vista a las montanas' : 'Woman enjoying her Coachella Valley home with mountain views'}
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: t('readyForSurgery.cta.title') || 'Ready to move <strong>forward?</strong>' }} />
          <p>{t('readyForSurgery.cta.subtitle') || "Schedule your surgical consultation. We'll take it from here."}</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">{t('common.scheduleConsultation') || 'Schedule a Consultation'}</Link>
            <Link href="/clear-in-a-day" className="btn-secondary">{t('common.learnAboutClearInADay') || 'Learn About CLEAR in a Day'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
