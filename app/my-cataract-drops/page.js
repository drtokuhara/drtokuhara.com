import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  CountUp,
  BlurReveal,
  StaggerChildren,
  StaggerItem,
  VideoBackground,
  LineDraw,
} from '../components/ScrollAnimations';

export const metadata = {
  title: 'My Cataract Drops: Free Eye Drop Reminder App from Desert Vision Center',
  description: 'Never miss an eye drop again. My Cataract Drops sends push notifications when each drop is due, tracks your progress, and guides you through recovery. Free for all patients.',
  alternates: { canonical: '/my-cataract-drops' },
  openGraph: {
    title: 'My Cataract Drops App | Desert Vision Center',
    description: 'A free app that sends push notifications for every eye drop after cataract surgery. Personally built by Dr. Tokuhara for his patients.',
    url: 'https://drtokuhara.com/my-cataract-drops',
  },
};

export default function MyCataractDrops() {
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
            <p style={{fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--oasis)', marginBottom: '16px', fontWeight: 600}}>Free for All Patients</p>
          </ScrollReveal>
          <KineticText text="My Cataract Drops" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub" style={{maxWidth: '600px', margin: '16px auto 0'}}>The app that makes sure you never miss an eye drop. Push notifications. Visual bottle tracking. Simple.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5} once={true}>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap'}}>
              {/* App Store badges - uncomment when live */}
              {/* <a href="https://apps.apple.com/app/my-cataract-drops/id..." className="btn-primary">Download for iPhone</a> */}
              {/* <a href="https://play.google.com/store/apps/details?id=..." className="btn-secondary" style={{borderColor: 'rgba(255,255,255,0.3)', color: '#fff'}}>Download for Android</a> */}
              <span className="btn-primary" style={{opacity: 0.8}}>Coming Soon to the App Store</span>
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
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>eye drop bottles<br />tracked for you</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={4} suffix="+" duration={1.5} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>weeks of<br />drop schedules</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: '#fff', marginBottom: '4px', fontFamily: 'var(--serif)'}}>Free</p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>for all<br />DVC patients</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p style={{fontSize: '42px', fontWeight: 300, color: 'var(--oasis)', marginBottom: '4px', fontFamily: 'var(--serif)'}}>
                  <CountUp end={0} suffix="" duration={1} />
                </p>
                <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em'}}>missed drops<br />when you use it</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* WHY WE BUILT IT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why I <strong>Built This</strong></h2>
          </ScrollReveal>
          <p className="body-lead">
            "I cannot keep track of all these drops."
          </p>
          <p>
            I used to hear this from patients every single week. Even though we simplify recovery by combining drops into a compounded bottle whenever possible, it is still surprisingly easy to lose track. You are living an active retirement, juggling a first eye and second eye schedule throughout the day, and life does not stop because you had surgery.
          </p>
          <p>
            So I built an app to solve it. Not a generic medication tracker. A tool designed specifically for cataract surgery patients, by a cataract surgeon who knows exactly what the post-operative schedule looks like.
          </p>
        </div>
      </section>

      {/* APP SHOWCASE - Phone Screenshots */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" style={{textAlign: 'center'}}>How It <strong>Works</strong></h2>
          </ScrollReveal>

          {/* Feature 1: Setup */}
          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '48px', flexWrap: 'wrap'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-surgery-setup.png" alt="My Cataract Drops surgery setup screen" width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>1. Tell us about your surgery</h3>
              <p>Select which eye was operated on and your surgery date. The app automatically builds your personalized drop schedule based on Dr. Tokuhara's post-operative protocol.</p>
            </div>
          </div>

          {/* Feature 2: Notifications */}
          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '64px', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-dose-reminder.png" alt="My Cataract Drops dose reminder with push notification" width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>2. Get reminded when each drop is due</h3>
              <p>Push notifications tell you exactly which bottle to use and which eye to treat. No guessing, no checking the paper instructions. Just open, drop, confirm.</p>
            </div>
          </div>

          {/* Feature 3: Education */}
          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '64px', flexWrap: 'wrap'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-how-to-apply.png" alt="My Cataract Drops how to apply eye drops guide" width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>3. Learn the right technique</h3>
              <p>Built-in guides show you exactly how to apply drops correctly, what is normal during recovery, and when to call the clinic. Written by Dr. Tokuhara, not generic medical content.</p>
            </div>
          </div>

          {/* Feature 4: Recovery tracking */}
          <div style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '64px', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
            <div style={{flex: '1 1 300px', textAlign: 'center'}}>
              <Image src="/media/app-all-set.png" alt="My Cataract Drops recovery timeline and treatment start confirmation" width={300} height={600} style={{width: '250px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
            </div>
            <div style={{flex: '1 1 400px'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px'}}>4. Track your recovery week by week</h3>
              <p>See your progress through the recovery timeline. Know when drops taper, when follow-ups are due, and when you are approaching the finish line.</p>
            </div>
          </div>
        </div>
      </section>



      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>Why this matters</h3>
            <p>
              <em>Every surgeon says "use your drops." Not every surgeon personally builds you a tool to actually do it. Compliance with post-operative eye drops is one of the biggest variables in recovery outcomes. If I can make it easier for my patients to stay on schedule, their eyes heal better. It is that simple.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* FEATURES LIST */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Everything <strong>Included</strong></h2>
          </ScrollReveal>
          <StaggerChildren className="insight-list" staggerDelay={0.08}>
            <StaggerItem><div className="insight-item"><strong>Push notifications</strong><p>Alerts when each drop is due. Works even when the app is closed.</p></div></StaggerItem>
            <StaggerItem><div className="insight-item"><strong>Visual bottle tracking</strong><p>The app shows your bottle's relative fluid level as you progress through recovery. If the app shows half full but your real bottle is nearly empty, it is a gentle reminder that some doses may have missed their mark. Not a problem, just a signal that we can get you a refill before you run out.</p></div></StaggerItem>
            <StaggerItem><div className="insight-item"><strong>Personalized schedule</strong><p>Based on your surgery date and Dr. Tokuhara's post-op protocol. Not a generic template.</p></div></StaggerItem>
            <StaggerItem><div className="insight-item"><strong>Dose tracking</strong><p>Mark each dose as complete. See what you have done and what is still ahead.</p></div></StaggerItem>

            <StaggerItem><div className="insight-item"><strong>Week-by-week timeline</strong><p>Know where you are in the recovery process at all times.</p></div></StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <Image src="/media/app-splash.png" alt="My Cataract Drops app icon and splash screen" width={200} height={400} style={{width: '150px', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', margin: '0 auto 32px'}} />
            <h2 className="section-title">Download <strong>My Cataract Drops</strong></h2>
            <p style={{maxWidth: '500px', margin: '0 auto 32px', color: 'var(--text-light)'}}>Free for all Desert Vision Center patients. Available on iPhone. Your recovery starts here.</p>
          </ScrollReveal>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            {/* Uncomment when live on App Store */}
            {/* <a href="https://apps.apple.com/app/my-cataract-drops/id..." className="btn-primary">Download for iPhone</a> */}
            <span className="btn-primary" style={{opacity: 0.8}}>Coming Soon to the App Store</span>
            <Link href="/contact" className="btn-secondary">Schedule a Consultation</Link>
          </div>
          <p style={{fontSize: '13px', color: 'var(--text-light)', marginTop: '24px'}}>Having surgery soon? Download the app before your procedure so it is ready when you need it.</p>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-recovery" className="related-card">
              <h3>Cataract Recovery</h3>
              <p>What happens in the recovery room and the days that follow.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Pre-Op Guide</h3>
              <p>How to prepare for your surgery day.</p>
            </Link>
            <Link href="/ready-for-surgery" className="related-card">
              <h3>Ready for Surgery</h3>
              <p>Everything you need to know before, during, and after.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
