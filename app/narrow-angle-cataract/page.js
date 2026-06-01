import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
  LineDraw,
  StaggerChildren,
  StaggerItem,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is narrow angle glaucoma and how does it relate to cataracts?', acceptedAnswer: { '@type': 'Answer', text: 'Narrow angle glaucoma occurs when the drainage angle of the eye, the space between the iris and cornea, becomes too narrow and blocks fluid outflow. This can cause dangerously high eye pressure. As a cataract grows, it thickens the natural lens and pushes the iris forward, further narrowing the angle. This means the cataract is often contributing to the narrow angle problem. Removing the cataract opens the angle and can resolve or significantly improve the condition.' } },
    { '@type': 'Question', name: 'Can cataract surgery replace laser iridotomy for narrow angles?', acceptedAnswer: { '@type': 'Answer', text: 'In many cases, yes. Cataract surgery removes the thickened natural lens and replaces it with a thin artificial lens, which opens the drainage angle and relieves the crowding that caused the narrow angle in the first place. For patients who have both a visually significant cataract and narrow angles, proceeding with cataract surgery can address both problems at once and avoid the need for a separate laser iridotomy.' } },
    { '@type': 'Question', name: 'Does having a prior laser iridotomy affect cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'It can. Eyes that have had a prior laser iridotomy may experience higher rates of postoperative corneal edema, which is swelling of the cornea that can temporarily blur vision after surgery. The iridotomy itself changes the anatomy slightly and may affect fluid dynamics during the procedure. An experienced surgeon accounts for this history and adjusts their surgical approach accordingly.' } },
    { '@type': 'Question', name: 'What is an acute angle closure attack?', acceptedAnswer: { '@type': 'Answer', text: 'An acute angle closure attack occurs when the drainage angle closes suddenly and completely, causing eye pressure to spike rapidly. Symptoms include severe eye pain, headache, nausea, blurred vision, and seeing halos around lights. This is a medical emergency requiring immediate treatment. Patients with known narrow angles should be aware of these symptoms.' } },
    { '@type': 'Question', name: 'How do I know if I have narrow angles?', acceptedAnswer: { '@type': 'Answer', text: 'Narrow angles are detected during a comprehensive eye exam, often using a technique called gonioscopy where the doctor uses a special lens to examine the drainage angle directly. Many patients with narrow angles have no symptoms until a crisis occurs. This is one reason routine eye exams are important, particularly for farsighted patients, women, and individuals of Asian descent, who are at higher risk.' } },
    { '@type': 'Question', name: 'Should I have cataract surgery sooner if I have narrow angles?', acceptedAnswer: { '@type': 'Answer', text: 'Possibly. In patients with narrow angles and a growing cataract, earlier cataract surgery can serve a dual purpose: improving vision and opening the drainage angle to reduce the risk of an acute angle closure attack. The timing depends on the severity of the angle narrowing, the visual significance of the cataract, and other individual factors. This is a decision best made with a surgeon who understands both conditions.' } },
  ],
};

export const metadata = {
  title: 'Narrow Angles and Cataracts: What Patients Need to Know',
  description: 'If you have narrow angles and cataracts, cataract surgery may treat both conditions at once. Dr. Keith Tokuhara explains narrow angle glaucoma, laser iridotomy, and why the sequence of treatment matters.',
  keywords: ['narrow angle glaucoma cataract', 'narrow angle cataract surgery', 'laser iridotomy vs cataract surgery', 'anatomically narrow angles', 'acute angle closure cataract', 'narrow angle treatment options'],
  alternates: { canonical: '/narrow-angle-cataract' },
  openGraph: {
    title: 'Narrow Angles and Cataracts | Dr. Keith Tokuhara',
    description: 'Narrow angles and cataracts often occur together. Cataract surgery can treat both. But the sequence matters, and prior iridotomy changes the surgical picture.',
    url: 'https://drtokuhara.com/narrow-angle-cataract',
  },
};

const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Understanding Cataracts', href: '/understanding-cataracts' },
  { name: 'Narrow Angles and Cataracts', href: '/narrow-angle-cataract' },
]);

export default function NarrowAngleCataract() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <VideoBackground
        src="/media/ambient-iris-closeup-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p className="page-hero-eyebrow">Cataract + Glaucoma</p>
            <h1>Narrow Angles <strong>and Cataracts</strong></h1>
            <p className="page-hero-sub" style={{maxWidth: '650px', margin: '16px auto 0'}}>Two conditions, one surgery. When narrow angles and cataracts occur together, removing the cataract can treat both. But the sequence of treatment matters more than most patients realize.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* WHAT ARE NARROW ANGLES */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Are <strong>Narrow Angles?</strong></h2>
          </ScrollReveal>
          <p>
            Inside your eye, there is a drainage system that keeps fluid flowing in and out at a steady rate. This system sits in a small space called the angle, located where the iris meets the cornea.
          </p>
          <p>
            In most eyes, this angle is wide open, and fluid drains without any trouble.
          </p>
          <p>
            In some eyes, the angle is anatomically narrow. The iris sits closer to the cornea than usual, which reduces the space available for fluid to drain. If the angle becomes too narrow, or closes entirely, fluid backs up and eye pressure rises, sometimes dangerously.
          </p>
          <p>
            This is the mechanism behind narrow angle glaucoma, also called angle closure glaucoma.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Many patients with narrow angles have no symptoms until a crisis occurs. This is why the condition is often discovered during a routine eye exam, not because the patient felt something was wrong.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      {/* THE CATARACT CONNECTION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">How Cataracts Make <strong>Narrow Angles Worse</strong></h2>
          </ScrollReveal>
          <p>
            Here is where the two conditions connect.
          </p>
          <p>
            Your natural lens sits directly behind the iris. As you age, the lens grows thicker. When a cataract develops, the lens becomes even thicker. In an eye that already has narrow angles, this additional thickness pushes the iris forward, further crowding the drainage angle.
          </p>
          <p>
            In other words, a growing cataract can be actively making a narrow angle problem worse.
          </p>
          <p>
            This creates a situation where two conditions that might seem unrelated are actually driving each other. The cataract is reducing your vision. The thickening lens is narrowing your angle. And the narrowing angle is increasing your risk of an acute pressure crisis.
          </p>
          <p>
            This is why ophthalmologists pay close attention to angle anatomy when evaluating cataracts, especially in patients who are farsighted, female, of Asian descent, or who have a family history of glaucoma.
          </p>
        </div>
      </section>

      {/* TWO TREATMENT PATHS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Two Treatment Paths: <strong>And Why the Sequence Matters</strong></h2>
          </ScrollReveal>
          <p>
            When narrow angles are identified, the traditional first step has been a laser procedure called a laser peripheral iridotomy (LPI). A small hole is created in the iris with a laser to allow fluid to bypass the pupil and flow more freely, opening the angle.
          </p>
          <p>
            This is a quick, effective procedure. But it does not address the underlying cause of the crowding: the thickening lens.
          </p>

          <div style={{margin: '32px 0'}}>
            <div style={{padding: '24px', background: 'var(--bg)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '16px'}}>
              <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '12px'}}>Path A: Cataract Surgery First (when both conditions are present)</h3>
              <p style={{color: 'var(--text)', lineHeight: 1.8, marginBottom: '12px'}}>
                When a patient has both a visually significant cataract and narrow angles, proceeding directly with cataract surgery can address both problems at once. Removing the thick natural lens and replacing it with a thin artificial lens opens the drainage angle, often dramatically.
              </p>
              <p style={{color: 'var(--text)', lineHeight: 1.8, margin: 0}}>
                <strong>The advantage:</strong> One procedure solves two problems. The cataract is removed, vision is restored, and the angle opens, reducing or eliminating the risk of angle closure. No separate laser procedure is needed.
              </p>
            </div>

            <div style={{padding: '24px', background: 'var(--bg)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)'}}>
              <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '12px'}}>Path B: Laser Iridotomy First, Then Cataract Surgery Later</h3>
              <p style={{color: 'var(--text)', lineHeight: 1.8, marginBottom: '12px'}}>
                In some situations, the narrow angle is identified before the cataract is ready for surgery. A laser iridotomy is performed to reduce immediate risk. Later, when the cataract becomes visually significant, surgery is scheduled.
              </p>
              <p style={{color: 'var(--text)', lineHeight: 1.8, margin: 0}}>
                <strong>The consideration:</strong> Eyes that have had a prior iridotomy can experience higher rates of corneal edema (swelling) after cataract surgery. The iridotomy changes the anatomy slightly and may affect how the eye responds during and after the procedure. This does not mean cataract surgery cannot be done. It means the surgeon should be aware of the history and prepared to manage the recovery accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SEQUENCE MATTERS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why This <strong>Matters to You</strong></h2>
          </ScrollReveal>
          <p>
            If you have been told you have narrow angles and cataracts, the most important question is not just "when should I have surgery?" It is "what is the right sequence of treatment for my specific situation?"
          </p>
          <p>
            For some patients, proceeding with cataract surgery and skipping the iridotomy entirely is the better path. The surgery itself opens the angle, and the patient avoids a separate procedure and its potential effects on the cornea.
          </p>
          <p>
            For others, the angle may be dangerously narrow and the cataract not yet ready for surgery. In that case, a laser iridotomy provides essential protection now, and cataract surgery can happen later with appropriate planning.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The right answer depends on how narrow the angle is, how advanced the cataract is, and whether there is an immediate risk of angle closure. This is a judgment call, not a formula.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* ACUTE ANGLE CLOSURE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">When Narrow Angles Become an <strong>Emergency</strong></h2>
          </ScrollReveal>
          <p>
            An acute angle closure attack occurs when the drainage angle closes suddenly and completely. Eye pressure spikes rapidly, sometimes to dangerous levels within hours.
          </p>
          <p>
            <strong>Symptoms include:</strong>
          </p>
          <ul style={{lineHeight: 2, color: 'var(--text)'}}>
            <li>Severe eye pain, often sudden</li>
            <li>Headache, sometimes mistaken for a migraine</li>
            <li>Nausea or vomiting</li>
            <li>Blurred vision or sudden vision loss</li>
            <li>Seeing rainbow-colored halos around lights</li>
            <li>The eye may appear red</li>
          </ul>
          <p>
            <strong>This is a medical emergency.</strong> If you experience these symptoms, seek immediate care. Acute angle closure can cause permanent vision loss if not treated quickly.
          </p>
          <p>
            For patients with known narrow angles, being aware of these symptoms is important. Most will never experience an attack. But knowing the warning signs can make the difference between a treatable event and a permanent one.
          </p>
        </div>
      </section>

      {/* WHO IS AT RISK */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Who Is at <strong>Higher Risk?</strong></h2>
          </ScrollReveal>
          <p>
            Narrow angles are more common in certain populations:
          </p>
          <ul style={{lineHeight: 2, color: 'var(--text)'}}>
            <li><strong>Farsighted patients (hyperopia):</strong> Farsighted eyes tend to be shorter than average, which naturally crowds the drainage angle.</li>
            <li><strong>Women:</strong> Women are two to three times more likely than men to develop angle closure.</li>
            <li><strong>Asian descent:</strong> Angle closure is significantly more prevalent in East Asian and Southeast Asian populations.</li>
            <li><strong>Age:</strong> The natural lens continues to thicken with age, progressively narrowing the angle in predisposed eyes.</li>
            <li><strong>Family history:</strong> If a first-degree relative has had angle closure, your risk is higher.</li>
          </ul>
          <p>
            Many patients with narrow angles are identified during routine eye exams using a technique called gonioscopy, where the doctor examines the angle directly with a special lens. This is one of the many reasons comprehensive eye exams matter even when you feel fine.
          </p>
        </div>
      </section>

      {/* THE CONVERSATION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Conversation to <strong>Have</strong></h2>
          </ScrollReveal>
          <p>
            If your ophthalmologist has told you that you have narrow angles and cataracts, here are the questions worth asking:
          </p>
          <ul style={{lineHeight: 2.2, color: 'var(--text)'}}>
            <li>How narrow are my angles? Is there an immediate risk of closure?</li>
            <li>Is my cataract contributing to the narrowing?</li>
            <li>Would cataract surgery open my angle enough to avoid a laser iridotomy?</li>
            <li>If I already had an iridotomy, how does that affect my cataract surgery?</li>
            <li>What is the best sequence of treatment for my specific situation?</li>
          </ul>
          <p>
            The answers will be different for every patient. That is why the evaluation and the conversation matter as much as the procedure itself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00313d 0%, #004d5c 100%)', color: '#fff'}}>
        <div className="container content-narrow" style={{textAlign: 'center', padding: '48px 0'}}>
          <h2 style={{fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '12px', fontFamily: 'var(--serif)'}}>Narrow Angles <strong>and Cataracts?</strong></h2>
          <p style={{color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6}}>Dr. Tokuhara evaluates both conditions together and helps you determine the right sequence of treatment for your eyes.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Learn <strong>More</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/glaucoma" className="related-card">
              <h3>Glaucoma</h3>
              <p>A comprehensive look at glaucoma types, diagnosis, and treatment options.</p>
            </Link>
            <Link href="/complex-cases/glaucoma-and-cataract" className="related-card">
              <h3>Glaucoma and Cataract Surgery</h3>
              <p>What to know when both conditions are present and how surgery can help.</p>
            </Link>
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>What cataracts are, how they develop, and the different types that affect vision.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the procedure involves from start to finish.</p>
            </Link>
            <Link href="/posterior-subcapsular-cataract" className="related-card">
              <h3>Posterior Subcapsular Cataracts</h3>
              <p>The fast-moving cataract linked to diabetes, steroids, and younger patients.</p>
            </Link>
            <Link href="/insights/the-lens-we-didnt-implant" className="related-card">
              <h3>The Lens We Didn't Implant</h3>
              <p>When intraoperative data tells a different story than the preoperative plan.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
