'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import {
  ScrollReveal,
  KineticText,
  CountUp,
  BlurReveal,
  StaggerChildren,
  StaggerItem,
  VideoBackground,
} from '../components/ScrollAnimations';

export default function MyCataractDropsContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <VideoBackground
        src="/media/ambient-desert-sunrise.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p style={{fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--oasis)', marginBottom: '16px', fontWeight: 600}}>
              {t('myCataractDrops.freeForPatients') || 'Free for All Patients'}
            </p>
          </ScrollReveal>
          <KineticText text={t('myCataractDrops.heroTitle') || 'My Cataract Drops'} Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub" style={{maxWidth: '600px', margin: '16px auto 0'}}>
              {t('myCataractDrops.heroSub') || 'The app that makes sure you never miss an eye drop. Push notifications. Visual bottle tracking. Simple.'}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5} once={true}>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap'}}>
              <a href="https://apps.apple.com/app/my-cataract-drops/id6764231277" className="btn-primary" target="_blank" rel="noopener noreferrer">
                {t('myCataractDrops.downloadIphone') || 'Download for iPhone'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* STATS */}
      <section style={{background: 'var(--dark-rich)', padding: '48px 0'}}>
        <div className="container">
          <StaggerChildren style={{display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', textAlign: 'center'}} staggerDelay={0.15}>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={2} suffix="" duration={1.5} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', whiteSpace: 'pre-line'}}>
                  {t('myCataractDrops.bottlesTracked') || 'eye drop bottles\ntracked for you'}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={4} suffix="+" duration={1.5} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', whiteSpace: 'pre-line'}}>
                  {t('myCataractDrops.weeksSchedule') || 'weeks of\ndrop schedules'}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: '#fff', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  {t('myCataractDrops.freeLabel') ? t('myCataractDrops.freeLabel').split('\\n')[0] : 'Free'}
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', whiteSpace: 'pre-line'}}>
                  {t('myCataractDrops.freeLabel') ? t('myCataractDrops.freeLabel').split('\\n').slice(1).join('\n') : 'for all\nDVC patients'}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={0} suffix="" duration={1} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', whiteSpace: 'pre-line'}}>
                  {t('myCataractDrops.missedDrops') || 'missed drops\nwhen you use it'}
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* WHY WE BUILT IT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('myCataractDrops.whyBuilt') || 'Why I <strong>Built This</strong>' }} />
          </ScrollReveal>
          <p className="body-lead">
            {t('myCataractDrops.whyBuiltLead') || '"I cannot keep track of all these drops."'}
          </p>
          <p>
            {t('myCataractDrops.whyBuiltP1') || 'I used to hear this from patients every single week. Even though we simplify recovery by combining drops into a compounded bottle whenever possible, it is still surprisingly easy to lose track. You are living an active retirement, juggling a first eye and second eye schedule throughout the day, and life does not stop because you had surgery.'}
          </p>
          <p>
            {t('myCataractDrops.whyBuiltP2') || 'So I built an app to solve it. Not a generic medication tracker. A tool designed specifically for cataract surgery patients, by a cataract surgeon who knows exactly what the post-operative schedule looks like.'}
          </p>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" style={{textAlign: 'center'}} dangerouslySetInnerHTML={{ __html: t('myCataractDrops.howItWorks') || 'How It <strong>Works</strong>' }} />
          </ScrollReveal>

          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '48px', flexWrap: 'wrap'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-surgery-setup.png" alt={t('myCataractDrops.setupAlt') || 'My Cataract Drops surgery setup screen'} width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>
                {t('myCataractDrops.step1Title') || '1. Tell us about your surgery'}
              </h3>
              <p>{t('myCataractDrops.step1Text') || 'Select which eye was operated on and your surgery date. The app automatically builds your personalized drop schedule based on Dr. Tokuhara\'s post-operative protocol.'}</p>
            </div>
          </div>

          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '64px', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-dose-reminder.png" alt={t('myCataractDrops.reminderAlt') || 'My Cataract Drops dose reminder with push notification'} width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>
                {t('myCataractDrops.step2Title') || '2. Get reminded when each drop is due'}
              </h3>
              <p>{t('myCataractDrops.step2Text') || 'Push notifications tell you exactly which bottle to use and which eye to treat. No guessing, no checking the paper instructions. Just open, drop, confirm.'}</p>
            </div>
          </div>

          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '64px', flexWrap: 'wrap'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-how-to-apply.png" alt={t('myCataractDrops.howToApplyAlt') || 'My Cataract Drops how to apply eye drops guide'} width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>
                {t('myCataractDrops.step3Title') || '3. Learn the right technique'}
              </h3>
              <p>{t('myCataractDrops.step3Text') || 'Built-in guides show you exactly how to apply drops correctly, what is normal during recovery, and when to call the clinic. Written by Dr. Tokuhara, not generic medical content.'}</p>
            </div>
          </div>

          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '64px', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-all-set.png" alt={t('myCataractDrops.timelineAlt') || 'My Cataract Drops recovery timeline and treatment start confirmation'} width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>
                {t('myCataractDrops.step4Title') || '4. Track your recovery week by week'}
              </h3>
              <p>{t('myCataractDrops.step4Text') || 'See your progress through the recovery timeline. Know when drops taper, when follow-ups are due, and when you are approaching the finish line.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('myCataractDrops.seeInAction') || 'See It <strong>In Action</strong>' }} />
          </ScrollReveal>
          <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/im9_7hi4Dqg"
              title="My Cataract Drops app walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
            />
          </div>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>{t('myCataractDrops.whyMattersTitle') || 'Why this matters'}</h3>
            <p>
              <em>{t('myCataractDrops.whyMattersText') || 'Every surgeon says "use your drops." Not every surgeon personally builds you a tool to actually do it. Compliance with post-operative eye drops is one of the biggest variables in recovery outcomes. If I can make it easier for my patients to stay on schedule, their eyes heal better. It is that simple.'}</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('myCataractDrops.evidenceTitle') || 'Why Drop Reminders <strong>Work</strong>' }} />
          </ScrollReveal>
          <p className="body-lead">
            {t('myCataractDrops.evidenceLead') || 'This app is not a convenience feature. It is built on published clinical evidence.'}
          </p>
          <p>
            {t('myCataractDrops.evidenceP1') || 'Research consistently shows that forgetfulness is the number one reason patients miss their post-operative eye drops. Studies report that adherence rates for topical eye medications range from just 30% to 80% without any intervention. That gap between "prescribed" and "actually used" is where complications happen.'}
          </p>
          <p>
            {t('myCataractDrops.evidenceP2') || 'The good news: randomized controlled trials and systematic reviews confirm that push notification reminders significantly improve compliance. The approach behind My Cataract Drops is not guesswork. It is supported by peer-reviewed evidence from ophthalmology and digital health research.'}
          </p>

          <StaggerChildren className="insight-list" style={{marginTop: '40px'}} staggerDelay={0.08}>
            <StaggerItem>
              <div className="insight-item">
                <strong>{t('myCataractDrops.citation1Title') || 'SMS reminders reduce anxiety and improve compliance after cataract surgery'}</strong>
                <p>{t('myCataractDrops.citation1Text') || 'A randomized controlled trial found that medication reminders sent to patients after cataract surgery significantly reduced postoperative anxiety and improved drop compliance.'} <a href="https://www.jopan.org/article/S1089-9472(21)00269-0/fulltext" target="_blank" rel="noopener noreferrer">Journal of PeriAnesthesia Nursing</a></p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>{t('myCataractDrops.citation2Title') || 'Forgetfulness is the leading cause of noncompliance'}</strong>
                <p>{t('myCataractDrops.citation2Text') || 'A study of cataract surgery patients found that noncompliance is common even when patients understand the importance of their drops, with forgetfulness identified as a primary factor.'} <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9893395/" target="_blank" rel="noopener noreferrer">SAGE Open Medicine, 2023</a></p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>{t('myCataractDrops.citation3Title') || 'Smartphone notifications improve medication adherence'}</strong>
                <p>{t('myCataractDrops.citation3Text') || 'A review in Current Opinion in Ophthalmology found that digital tools and smartphone app notifications improve medication adherence, with untreated adherence rates for topical medications as low as 30%.'} <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8517037/" target="_blank" rel="noopener noreferrer">Current Opinion in Ophthalmology, 2022</a></p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>{t('myCataractDrops.citation4Title') || 'Automated reminders improve adherence (JAMA Ophthalmology)'}</strong>
                <p>{t('myCataractDrops.citation4Text') || "Published in one of ophthalmology's highest-impact journals, this study demonstrated that automated telecommunication-based reminders improved medication adherence for once-daily eye drops."} <a href="https://jamanetwork.com/journals/jamaophthalmology/fullarticle/1871612" target="_blank" rel="noopener noreferrer">JAMA Ophthalmology</a></p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>{t('myCataractDrops.citation5Title') || 'Eye drop reminder app improves adherence scores'}</strong>
                <p>{t('myCataractDrops.citation5Text') || 'The EyePhone study showed that a smartphone app with timed notifications improved scores on the Morisky Medication Adherence Scale, a validated measure of how consistently patients take their medications.'} <a href="https://europepmc.org/article/MED/33528649" target="_blank" rel="noopener noreferrer">Graefe&apos;s Archive, 2021</a></p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>{t('myCataractDrops.citation6Title') || 'Systematic review confirms apps promote adherence (2025)'}</strong>
                <p>{t('myCataractDrops.citation6Text') || 'The most recent systematic review in the Journal of Medical Internet Research confirmed that mobile applications effectively promote medication adherence across chronic conditions.'} <a href="https://www.jmir.org/2025/1/e60822" target="_blank" rel="noopener noreferrer">JMIR, 2025</a></p>
              </div>
            </StaggerItem>
          </StaggerChildren>

          <ScrollReveal direction="up" once={true}>
            <p style={{marginTop: '32px', fontSize: '15px', color: 'var(--text-light)'}}>
              {t('myCataractDrops.evidenceConclusion') || 'Better compliance means less inflammation, fewer complications, and smoother healing. That is why this app exists.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('myCataractDrops.featuresTitle') || 'Everything <strong>Included</strong>' }} />
          </ScrollReveal>
          <StaggerChildren className="insight-list" staggerDelay={0.08}>
            <StaggerItem><div className="insight-item"><strong>{t('myCataractDrops.featurePush') || 'Push notifications'}</strong><p>{t('myCataractDrops.featurePushDesc') || 'Alerts when each drop is due. Works even when the app is closed.'}</p></div></StaggerItem>
            <StaggerItem><div className="insight-item"><strong>{t('myCataractDrops.featureBottle') || 'Visual bottle tracking'}</strong><p>{t('myCataractDrops.featureBottleDesc') || "The app shows your bottle's relative fluid level as you progress through recovery. If the app shows half full but your real bottle is nearly empty, it is a gentle reminder that some doses may have missed their mark. Not a problem, just a signal that we can get you a refill before you run out."}</p></div></StaggerItem>
            <StaggerItem><div className="insight-item"><strong>{t('myCataractDrops.featureSchedule') || 'Personalized schedule'}</strong><p>{t('myCataractDrops.featureScheduleDesc') || "Based on your surgery date and Dr. Tokuhara's post-op protocol. Not a generic template."}</p></div></StaggerItem>
            <StaggerItem><div className="insight-item"><strong>{t('myCataractDrops.featureDose') || 'Dose tracking'}</strong><p>{t('myCataractDrops.featureDoseDesc') || 'Mark each dose as complete. See what you have done and what is still ahead.'}</p></div></StaggerItem>
            <StaggerItem><div className="insight-item"><strong>{t('myCataractDrops.featureTimeline') || 'Week-by-week timeline'}</strong><p>{t('myCataractDrops.featureTimelineDesc') || 'Know where you are in the recovery process at all times.'}</p></div></StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <Image src="/media/app-splash.png" alt={t('myCataractDrops.splashAlt') || 'My Cataract Drops app icon and splash screen'} width={200} height={400} style={{width: '150px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', margin: '0 auto 32px'}} />
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('myCataractDrops.downloadTitle') || 'Download <strong>My Cataract Drops</strong>' }} />
            <p style={{maxWidth: '500px', margin: '0 auto 32px', color: 'var(--text-light)'}}>
              {t('myCataractDrops.downloadSub') || 'Free for all Desert Vision Center patients. Available on iPhone. Your recovery starts here.'}
            </p>
          </ScrollReveal>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <a href="https://apps.apple.com/app/my-cataract-drops/id6764231277" className="btn-primary" target="_blank" rel="noopener noreferrer">
              {t('myCataractDrops.downloadIphone') || 'Download for iPhone'}
            </a>
            <Link href="/contact" className="btn-secondary">
              {t('common.scheduleConsultation') || 'Schedule a Consultation'}
            </Link>
          </div>
          <div style={{marginTop: '32px'}}>
            <Image src="/media/qr-code-app-store.png" alt={t('myCataractDrops.qrAlt') || 'Scan to download My Cataract Drops from the App Store'} width={160} height={160} style={{width: '160px', height: 'auto', margin: '0 auto'}} />
            <p style={{fontSize: '13px', color: 'var(--text-light)', marginTop: '12px'}}>
              {t('myCataractDrops.scanQR') || 'Scan with your iPhone camera to download'}
            </p>
          </div>
          <p style={{fontSize: '13px', color: 'var(--text-light)', marginTop: '24px'}}>
            {t('myCataractDrops.preSurgeryTip') || 'Having surgery soon? Download the app before your procedure so it is ready when you need it.'}
          </p>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('myCataractDrops.learnMore') || 'Learn <strong>More</strong>' }} />
          <div className="related-grid">
            <Link href="/cataract-recovery" className="related-card">
              <h3>{t('myCataractDrops.relatedRecovery') || 'Cataract Recovery'}</h3>
              <p>{t('myCataractDrops.relatedRecoveryDesc') || 'What happens in the recovery room and the days that follow.'}</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>{t('myCataractDrops.relatedPreOp') || 'Pre-Op Guide'}</h3>
              <p>{t('myCataractDrops.relatedPreOpDesc') || 'How to prepare for your surgery day.'}</p>
            </Link>
            <Link href="/ready-for-surgery" className="related-card">
              <h3>{t('myCataractDrops.relatedReady') || 'Ready for Surgery'}</h3>
              <p>{t('myCataractDrops.relatedReadyDesc') || 'Everything you need to know before, during, and after.'}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
