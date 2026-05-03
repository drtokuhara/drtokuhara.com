import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are cataract referral kickbacks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract referral kickbacks occur when a referring doctor receives financial incentives, gifts, or other benefits in exchange for sending patients to a specific cataract surgeon or surgical center. This practice is illegal under the federal Stark Law, which was created to protect patients from physicians making decisions based on financial gain rather than patient welfare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are cataract referral kickbacks common?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While the exact prevalence is unknown, the Office of Inspector General has prosecuted several multi-million dollar cases in recent years, including a $17 million settlement in Tennessee, a $2.9 million settlement in Texas, and a $1.1 million settlement in Rhode Island, all for illegal cataract referral kickback arrangements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my cataract surgeon referral is legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask your referring doctor directly about their relationship with the surgeon. A legitimate referral is based on surgical skill, outcomes, and what is best for you. Red flags include being referred to a surgeon far away when qualified surgeons are nearby, being pressured to use a specific surgeon without explanation, or your referring doctor seeming financially motivated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ethical cataract care pledge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ethical cataract care pledge is a commitment by ophthalmologists to oppose financial incentives that influence cataract surgery referrals. Dr. Tokuhara hosted the Stand for Ethical Eye Care seminar in the Coachella Valley and signed the Ethical Cataract Care Contract, urging other doctors to do the same.',
      },
    },
  ],
};

export const metadata = {
  title: 'Ethical Cataract Care: Referral Kickbacks, Transparency, and Choosing with Confidence',
  description: 'The unspoken story of cataract referral kickbacks. Dr. Tokuhara explains the Stark Law, real prosecution cases, and why your surgeon should be chosen for skill, not financial incentives.',
  alternates: { canonical: '/ethical-cataract-care' },
  openGraph: {
    title: 'Ethical Cataract Care | Dr. Keith Tokuhara',
    description: 'Cataract referral kickbacks are illegal but still happen. Dr. Tokuhara speaks out about transparency, ethics, and putting patients first.',
    url: 'https://drtokuhara.com/ethical-cataract-care',
  },
};

export default function EthicalCataractCare() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Ethical <strong>Cataract Care</strong></h1></ScrollReveal>
          <p className="page-hero-sub">Your cataract surgeon should be chosen for their skill, not because someone got paid to send you there.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/honest-consultation-trust.png"
              alt="Doctor and patient having an honest, face-to-face conversation in a clinic"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <div className="content-image-caption">Trust starts with an honest conversation, not a financial arrangement.</div>
          </div>
          <p className="body-lead">
            I am going to talk about something that most surgeons avoid. Not because it is complicated, but because it is uncomfortable.
          </p>
          <p>
            There is a financial system behind many cataract surgery referrals that patients never see. Some of these arrangements are perfectly legal. Some are not. And the difference matters, because it determines whether the surgeon you are sent to was chosen for their ability, or for their willingness to pay for the referral.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">A Patient's <strong>Question</strong></h2>
          <p>
            A patient I will call Mr. J came to me after being originally referred to a cataract practice over an hour away. He went to that appointment and was deeply disappointed in the experience. So he did his own research, asked his friends, and found me, right in town, just down the street.
          </p>
          <p>
            After his surgery, 20/20 result, he asked me a simple question:
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Doctor, why was I sent all the way over there when you are right here?"</p>
          </div></BlurReveal>

          <p>
            That question is more common than you might think. And the answer, in many cases, involves something called referral kickbacks.
          </p>
        </div>
      </section>

      {/* WHAT ARE KICKBACKS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Are Cataract <strong>Referral Kickbacks?</strong></h2>
          <p>
            Some cataract practices rely heavily on referrals. That in itself is not unusual. The problem begins when those referrals come with built-in financial incentives: gifts, entertainment, education sponsorships, or direct payments in exchange for sending patients to a specific surgeon.
          </p>
          <p>
            This is illegal under the <strong>Stark Law</strong>, a federal law created to protect patients from physicians making decisions based on financial reimbursement rather than the patient's best interest.
          </p>
          <p>
            Despite the law, it still happens.
          </p>
        </div>
      </section>



      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-desert-overlook.jpg" alt="Couple overlooking the Coachella Valley desert landscape" width={1920} height={500} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* REAL CASES */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Real <strong>Consequences</strong></h2>
          <p>
            The Office of Inspector General has begun prosecuting these arrangements aggressively. Recent settlements include:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>Tennessee: $17 million settlement</strong>
              <p>For providing gifts, entertainment, and continuing education programs to optometrists in exchange for cataract patient referrals.</p>
            </div>
            <div className="insight-item">
              <strong>Texas: $2.9 million settlement</strong>
              <p>For allegations of kickbacks to referring doctors in exchange for cataract surgery referrals.</p>
            </div>
            <div className="insight-item">
              <strong>Rhode Island: $1.1 million settlement</strong>
              <p>To resolve whistleblower claims about false claims to federal healthcare programs resulting from illegal kickback relationships.</p>
            </div>
          </div>
          <p>
            These are not theoretical risks. These are real practices that were operating for years before someone spoke up.
          </p>
        </div>
      </section>

      {/* WHAT I'M DOING ABOUT IT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Taking a <strong>Stand</strong></h2>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/ethics-seminar-speaker.png"
              alt="Physician speaking at an ethics in eyecare seminar"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <p>
            In 2025, I hosted the <strong>Stand for Ethical Eye Care</strong> seminar at Hotel Paseo in the Coachella Valley. The event brought together physicians and community members to discuss the reality of hidden kickback practices in eye care.
          </p>
          <p>
            At that event, I signed the <strong>Ethical Cataract Care Contract</strong>, a public pledge to oppose financial incentives that influence surgical referrals. Other local doctors joined me in that commitment.
          </p>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/sG3rN3WXW3o"
              title="Ethical Cataract Surgery - Dr. Tokuhara on KESQ News"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>KESQ News coverage of the Stand for Ethical Eye Care seminar.</p>

          <BlurReveal><div className="insight-highlight" style={{marginTop: '32px'}}>
            <p><strong>"If we don't speak out, the kickback process will become the norm. The idea is to flip the script. If we can empower patients to know what questions to ask and how to navigate a system where monetary influences exist, we will have much better patient trust."</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What You Can <strong>Do</strong></h2>
          <p>
            When you receive a referral for cataract surgery, you have every right to ask questions:
          </p>
          <ul className="content-list">
            <li><strong>Ask your referring doctor about their relationship with the surgeon.</strong> Are they referring you because of skill and outcomes, or is there a financial arrangement?</li>
            <li><strong>Do your own research.</strong> Look at the surgeon's credentials, patient reviews, and whether they are in your community.</li>
            <li><strong>Consider proximity.</strong> If you are being sent an hour away when qualified surgeons are nearby, ask why.</li>
            <li><strong>Trust your instincts.</strong> If the referral feels rushed, unexplained, or pressured, you always have the right to seek a second opinion.</li>
            <li><strong>Remember: you choose your surgeon.</strong> A referral is a suggestion, not a requirement.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-outdoor-toast.jpg" alt="Seniors raising a toast outdoors - the trust and community that ethical care builds" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Full <strong>Story</strong></h2>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '16px'}}>
            <iframe
              src="https://www.youtube.com/embed/oPV_lteXtzo"
              title="Cataract Referral Kickbacks - What You Need to Know"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>My full explanation of cataract referral kickbacks, the Stark Law, and what patients should know.</p>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-lawn-sunset-coachella.jpg" alt="Couple enjoying a Coachella Valley sunset on the lawn" width={1920} height={500} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* PERSONAL NOTE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>Why this matters to me</h3>
            <p>
              <em>In my practice, most patients come by word of mouth or direct referral from friends and family. I do not participate in kickback arrangements. I never have. I believe the doctor-patient relationship is sacred, and financial incentives that distort referrals erode the very foundation of trust that medicine depends on. That is why I speak publicly about this. Not to point fingers, but to give patients the information they need to make truly independent choices about their care.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>The qualities that matter when selecting a cataract surgeon, beyond the referral.</p>
            </Link>
            <Link href="/about" className="related-card">
              <h3>About Dr. Tokuhara</h3>
              <p>Background, training, philosophy, and why independence matters.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What happens during the procedure, from consultation to recovery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
