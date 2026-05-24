import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  KineticText,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'What to Expect at Your Cataract Pre-Op Appointment - Dr. Keith Tokuhara',
  description: 'The cataract pre-op appointment is where lens power is measured, surgical planning happens, and your questions are answered. What tests are performed, why they matter, and what you should ask during this critical visit before surgery is scheduled.',
  keywords: ['cataract pre-op appointment what happens', 'cataract surgery preparation', 'pre-op cataract evaluation', 'IOL measurements'],
  alternates: { canonical: '/insights/cataract-pre-op-appointment' },
  openGraph: {
    title: 'What to Expect at Your Cataract Pre-Op Appointment | Dr. Keith Tokuhara',
    description: 'The evaluation visit before surgery is scheduled. IOL Master biometry, topography, OCT, dilated exam, and lens discussion. What to expect and what to ask.',
    url: 'https://drtokuhara.com/insights/cataract-pre-op-appointment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Expect at Your Cataract Pre-Op Appointment',
    description: 'The measurements, scans, and conversations that happen before surgery is scheduled. Why this visit matters more than most patients realize.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens at a cataract pre-op appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pre-op appointment includes detailed measurements of your eye using an IOL Master or similar biometry device, corneal topography to assess astigmatism, OCT scans of the macula and optic nerve, a dilated eye exam, and a discussion about lens options. This visit determines which lens power is right for you and whether surgery is appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a cataract pre-op appointment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A thorough pre-op appointment typically takes 60 to 90 minutes, including time for dilation. Practices that rush through this visit in 20 or 30 minutes may not be providing the level of evaluation needed for optimal surgical planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is IOL Master biometry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IOL Master is a precise optical device that measures the length of your eye, the curvature of your cornea, and the depth of your anterior chamber. These measurements feed into formulas that calculate which lens power will give you the best vision after cataract surgery. Accuracy here is critical.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my eyes be dilated at the pre-op appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A dilated exam is necessary to fully evaluate the cataract, the health of the retina, and the optic nerve. Plan for blurred near vision and light sensitivity for several hours after the appointment. Bring sunglasses and arrange transportation if needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the pre-op appointment the same as the day-of-surgery visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The pre-op appointment happens before surgery is scheduled and involves detailed measurements and lens selection. The day-of-surgery preparations are different and involve final consent, medication administration, and surgical setup. These are two separate visits.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'What to Expect at Your Cataract Pre-Op Appointment',
    description: 'The cataract pre-op appointment is where lens power is measured, surgical planning happens, and your questions are answered. What tests are performed, why they matter, and what you should ask during this critical visit before surgery is scheduled.',
    slug: '/insights/cataract-pre-op-appointment',
    datePublished: '2026-05-14',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'What to Expect at Your Cataract Pre-Op Appointment', href: '/insights/cataract-pre-op-appointment' },
  ]),
  faqSchema,
];

export default function InsightCataractPreOpAppointment() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-architectural-precision.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
        bottomOverlay={<AudioNarration src="/audio/narrations/cataract-pre-op-appointment.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Process / Reassurance</span>
          <h1>What to Expect at Your <strong>Cataract Pre-Op Appointment</strong></h1>
          <p className="page-hero-sub">The evaluation visit where lens power is measured, surgical planning happens, and your questions are answered. This is where precision begins.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            The cataract pre-op appointment is not a formality. It is the most important visit before surgery. This is where we measure your eye with submillimeter precision, evaluate the health of your retina and optic nerve, discuss your visual goals, and choose the lens that best matches your needs. If this visit is rushed or incomplete, the entire surgical plan is built on a shaky foundation.
          </p>
          <p>
            Many patients assume the pre-op visit is just paperwork and scheduling. It is not. This is where the science of lens selection happens. The measurements taken during this appointment determine which lens power goes into your eye. A small error here can mean the difference between crisp distance vision and needing strong glasses afterward. Precision at this stage is not optional.
          </p>
          <p>
            Understanding what happens during the pre-op appointment, and why each test matters, helps you recognize whether your surgeon is investing the time and attention your eyes deserve.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">IOL Master <strong>Biometry</strong></h2>
          <p>
            The first and most critical measurement is biometry, typically performed using a device called an IOL Master. This instrument uses optical coherence technology to measure three key dimensions of your eye: axial length (the distance from the front of the cornea to the retina), corneal curvature (how steep or flat the front surface of your eye is), and anterior chamber depth (the space between the cornea and the natural lens).
          </p>
          <p>
            These numbers feed into mathematical formulas that predict which lens power will give you the best vision. Modern formulas are extraordinarily accurate when the measurements are precise. But if the biometry is off by even a fraction of a millimeter, the lens calculation will be wrong. That is why we repeat measurements if the initial readings are inconsistent, and why we sometimes use multiple devices to cross-check the data.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Biometry is not guesswork. It is engineering. The lens power calculation depends entirely on the accuracy of these measurements. A practice that skips biometry or relies on outdated measurement techniques is not practicing modern cataract surgery.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Corneal <strong>Topography</strong></h2>
          <p>
            Topography maps the surface of your cornea in exquisite detail. It shows irregularities, asymmetries, and patterns that affect how light enters your eye. This information is essential for detecting astigmatism, identifying eyes that had previous refractive surgery, and planning toric lens placement if astigmatism correction is needed.
          </p>
          <p>
            Some eyes have regular astigmatism, where the cornea is shaped more like a football than a basketball. These eyes benefit from a toric lens, which has built-in astigmatism correction. Other eyes have irregular astigmatism from conditions like keratoconus or previous surgery. These eyes may not be good candidates for certain premium lenses. Topography reveals these distinctions.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Without topography, a surgeon is guessing about corneal shape. With it, they are measuring. That distinction matters."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">OCT Scans of the Macula and <strong>Optic Nerve</strong></h2>
          <p>
            Optical coherence tomography, or OCT, produces high-resolution cross-sectional images of the retina. During the pre-op visit, we scan the macula (the central part of the retina responsible for sharp vision) and the optic nerve (which transmits visual information to the brain).
          </p>
          <p>
            These scans tell us whether there is underlying retinal disease that might limit your visual outcome even if the cataract surgery goes perfectly. Macular degeneration, diabetic retinopathy, epiretinal membranes, and macular holes all show up on OCT. If any of these conditions are present, they need to be discussed during the lens selection conversation. A patient with advanced macular degeneration, for example, may not benefit from a premium multifocal lens, because the retina cannot process the fine detail those lenses are designed to provide.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>OCT is not just for retina specialists. It is an essential part of cataract planning. A surgeon who skips this scan is missing critical information about your eye health and your realistic visual potential.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Dilated <strong>Exam</strong></h2>
          <p>
            After your pupils are dilated, the surgeon performs a detailed examination of the lens, the retina, and the optic nerve. This is when the density and location of the cataract are assessed. Some cataracts are soft and easy to remove. Others are dense, brunescent, and require more advanced surgical techniques. The dilated exam reveals which type of cataract you have.
          </p>
          <p>
            The exam also checks for other issues that could complicate surgery: weak zonules (the fibers that hold the lens in place), pseudoexfoliation (a condition that increases complication risk), corneal disease, or signs of previous trauma. All of these findings influence the surgical plan.
          </p>
          <p>
            Expect your vision to be blurry for several hours after dilation. Bring sunglasses and arrange transportation if you are not comfortable driving with dilated pupils.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Lens <strong>Discussion</strong></h2>
          <p>
            This is the part of the visit where many patients feel the most uncertainty. There are multiple lens options: monofocal, toric, extended depth of focus, multifocal. Each has advantages and limitations. The conversation should not feel like a sales pitch. It should feel like a collaboration.
          </p>
          <p>
            A good lens discussion starts with questions about your lifestyle. How much do you read? Do you work on a computer? Do you drive at night frequently? Do you have hobbies that require precision vision at specific distances? Are you willing to tolerate some visual tradeoffs, like halos around lights, in exchange for less dependence on glasses?
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The right lens for one patient is the wrong lens for another. A surgeon who recommends the same lens to everyone is not personalizing care. They are following a script."</p>
          </div></BlurReveal>

          <p>
            Your surgeon should also discuss the ocular surface. Dry eye disease affects lens performance, particularly with multifocal lenses. If your tear film is unstable, you may need treatment before surgery, or a different lens choice altogether.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How Long Should This <strong>Take?</strong></h2>
          <p>
            A thorough pre-op appointment takes time. Between the measurements, the scans, the dilated exam, and the lens discussion, expect the visit to last 60 to 90 minutes. Practices that complete this evaluation in 20 or 30 minutes are cutting corners. Either they are not performing all the necessary tests, or they are not spending enough time explaining your options.
          </p>
          <p>
            Time is a signal. A surgeon who rushes through the pre-op visit is likely rushing through other parts of the process as well. A surgeon who takes the time to answer your questions, show you your imaging, and explain the reasoning behind their lens recommendation is investing in your outcome.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Questions to <strong>Ask</strong></h2>
          <p>
            The pre-op appointment is your opportunity to clarify anything you do not understand. Do not leave with unanswered questions. Here are some worth asking:
          </p>

          <ul className="insight-list">
            <li>What do my biometry measurements show? Is my eye average, or does it have unusual dimensions that affect lens selection?</li>
            <li>Do I have astigmatism? If so, how much, and would a toric lens benefit me?</li>
            <li>Did the OCT scan show any retinal issues that might limit my vision after surgery?</li>
            <li>Which lens do you recommend, and why? What are the alternatives, and what are the tradeoffs?</li>
            <li>If I choose a premium lens, what happens if I am not satisfied with the result? Are there options for enhancement or exchange?</li>
            <li>Do I have dry eye or other ocular surface disease that needs treatment before surgery?</li>
            <li>When is the best time to schedule surgery, and how long will recovery take?</li>
          </ul>

          <BlurReveal><div className="insight-highlight">
            <p><strong>A surgeon who welcomes questions is confident in their plan. A surgeon who deflects or minimizes your concerns is showing you something about how they practice. Pay attention to that.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Pre-Op vs. Day-of-Surgery <strong>Prep</strong></h2>
          <p>
            One point of confusion: the pre-op appointment is not the same as the day-of-surgery preparation. The pre-op visit is an evaluation and planning session. It happens weeks or months before surgery and involves detailed testing and lens selection.
          </p>
          <p>
            The day-of-surgery preparation, which is covered in detail on the <Link href="/cataract-pre-op">cataract surgery day-of page</Link>, involves final consent, medication administration, and surgical setup. That visit is shorter and more procedural. The heavy lifting of measurement and decision-making happens at the pre-op appointment.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Happens <strong>Next?</strong></h2>
          <p>
            After the pre-op appointment, the surgeon reviews all the data and finalizes the lens power calculation. If you are having surgery in both eyes, the plan may evolve based on how the first eye heals. Some surgeons adjust the lens power for the second eye based on the refractive outcome of the first. This is normal and reflects attention to detail.
          </p>
          <p>
            You will receive instructions on preoperative medications, usually antibiotic and anti-inflammatory eye drops that start a few days before surgery. Follow these instructions carefully. The drops reduce infection risk and inflammation, both of which affect your outcome.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I spend more time on the pre-op visit than most surgeons. Not because I am inefficient, but because this is where the outcome is determined. If I choose the wrong lens power, or miss a subtle finding on OCT, or fail to detect irregular astigmatism on topography, the surgery itself can be flawless and the patient will still be disappointed. Precision here is not about perfectionism. It is about respecting the fact that your vision depends on decisions made in this room, at this visit, before you ever enter the operating room.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/cataract-pre-op" className="related-card">
              <h3>What to Expect on Surgery Day</h3>
              <p>The day-of-surgery preparation and what happens in the operating room.</p>
            </Link>
            <Link href="/insights/how-to-choose-a-cataract-surgeon" className="related-card">
              <h3>How to Choose a Cataract Surgeon</h3>
              <p>The five things that actually matter when selecting your surgeon.</p>
            </Link>
            <Link href="/insights/five-questions-before-surgery" className="related-card">
              <h3>5 Questions to Ask Before Surgery</h3>
              <p>What to ask your surgeon during the pre-op consultation.</p>
            </Link>
            <Link href="/lens-options" className="related-card">
              <h3>Lens Options</h3>
              <p>Monofocal, toric, extended depth of focus, and multifocal lenses explained.</p>
            </Link>
            <Link href="/insights/what-is-ora-machine" className="related-card">
              <h3>What Is the ORA Machine?</h3>
              <p>The measurement device that changed the accuracy of cataract surgery planning.</p>
            </Link>
            <Link href="/insights/the-number-that-wasnt-the-problem" className="related-card">
              <h3>The Number That Wasn't the Problem</h3>
              <p>When astigmatism looked fixable but the real issue was something else entirely.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Ready to <strong>Begin?</strong></h2>
            <p style={{marginBottom: '24px'}}>If you are considering cataract surgery and want a thorough pre-op evaluation with a surgeon who takes measurement seriously, I would welcome the conversation.</p>
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
