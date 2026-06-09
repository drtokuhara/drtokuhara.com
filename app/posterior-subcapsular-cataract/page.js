import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  VideoBackground,
  LineDraw,
  StaggerChildren,
  StaggerItem,
  ScaleOnScroll,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a posterior subcapsular cataract?', acceptedAnswer: { '@type': 'Answer', text: 'A posterior subcapsular cataract (PSC) is a type of cataract that forms on the back surface of the lens, directly in the path of light entering the eye. Because of its location, even a small PSC can cause significant symptoms including glare, difficulty reading, and trouble seeing in bright light. PSCs tend to progress more rapidly than other cataract types and often affect younger patients.' } },
    { '@type': 'Question', name: 'What causes posterior subcapsular cataracts?', acceptedAnswer: { '@type': 'Answer', text: 'PSC cataracts are associated with several conditions and risk factors including diabetes, prolonged corticosteroid use (oral, inhaled, or topical eye drops), prior eye surgery or injury, retinal conditions and their treatments, radiation exposure, and certain systemic conditions like myotonic dystrophy. They can also develop without a clear cause, particularly in younger patients.' } },
    { '@type': 'Question', name: 'Can you get cataracts in your 40s or 50s?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. While most cataracts develop gradually after age 60, posterior subcapsular cataracts can appear in patients in their 40s and 50s, sometimes earlier. Steroid use, diabetes, and prior eye surgery are among the most common reasons for earlier onset. If you are experiencing vision changes at a younger age, a comprehensive eye exam can determine whether a cataract is the cause.' } },
    { '@type': 'Question', name: 'How fast do posterior subcapsular cataracts progress?', acceptedAnswer: { '@type': 'Answer', text: 'PSC cataracts can progress significantly faster than other types. While a typical nuclear sclerotic cataract may take years to become visually significant, a PSC cataract can go from barely noticeable to surgery-worthy in months. Patients with diabetes or those on ongoing steroid therapy may experience particularly rapid progression.' } },
    { '@type': 'Question', name: 'Do steroid inhalers cause cataracts?', acceptedAnswer: { '@type': 'Answer', text: 'Prolonged use of inhaled corticosteroids, commonly prescribed for asthma and COPD, has been associated with an increased risk of posterior subcapsular cataracts. The risk increases with higher doses and longer duration of use. This does not mean you should stop your inhaler. It means your ophthalmologist should be aware of your medication history so they can monitor appropriately.' } },
    { '@type': 'Question', name: 'Is cataract surgery different for posterior subcapsular cataracts?', acceptedAnswer: { '@type': 'Answer', text: 'The surgical technique for removing a PSC cataract is the same as for other cataract types. However, PSC cataracts can sometimes be associated with other conditions that require additional consideration during surgery, such as weak zonules in patients with pseudoexfoliation, or the need for careful retinal evaluation in diabetic patients. An experienced cataract surgeon accounts for these factors during preoperative planning.' } },
  ],
};

export const metadata = {
  title: 'Posterior Subcapsular Cataracts (PSC): Causes, Symptoms, and Treatment',
  description: 'Posterior subcapsular cataracts cause rapid vision changes, glare, and reading difficulty. Common in younger patients, diabetics, and steroid users. Dr. Keith Tokuhara explains what PSC cataracts are, why they progress fast, and when surgery is needed.',
  keywords: ['posterior subcapsular cataract', 'PSC cataract', 'steroid cataract', 'cataract at young age', 'rapid cataract progression', 'diabetic cataract', 'cortisone cataract', 'cataract in 40s', 'fast growing cataract'],
  alternates: { canonical: '/posterior-subcapsular-cataract' },
  openGraph: {
    title: 'Posterior Subcapsular Cataracts (PSC) | Dr. Keith Tokuhara',
    description: 'PSC cataracts can progress in months, not years. They affect younger patients, cause severe glare, and are linked to steroids, diabetes, and prior eye surgery. A surgeon explains.',
    url: 'https://drtokuhara.com/posterior-subcapsular-cataract',
  },
};

const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Understanding Cataracts', href: '/understanding-cataracts' },
  { name: 'Posterior Subcapsular Cataracts', href: '/posterior-subcapsular-cataract' },
]);

export default function PosteriorSubcapsularCataract() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <VideoBackground
        src="/media/ambient-lens-refraction-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p className="page-hero-eyebrow">Cataract Types</p>
            <h1>Posterior Subcapsular <strong>Cataracts</strong></h1>
            <p className="page-hero-sub" style={{maxWidth: '650px', margin: '16px auto 0'}}>The cataract that does not wait. PSC cataracts can progress in months, cause severe glare, and affect patients decades younger than expected.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* WHAT IS A PSC */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-couple-consultation.jpg"
              alt="Couple consulting with their eye surgeon about a posterior subcapsular cataract diagnosis"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Is a Posterior Subcapsular <strong>Cataract?</strong></h2>
          </ScrollReveal>
          <p>
            Most people think of cataracts as a gradual clouding that develops slowly over years. For many patients, that is exactly what happens. The most common type, a nuclear sclerotic cataract, forms in the center of the lens and typically progresses at a pace measured in years, not months.
          </p>
          <p>
            A posterior subcapsular cataract is different.
          </p>
          <p>
            It forms on the back surface of the lens, directly in the path of light as it enters the eye. Because of its location, even a small PSC cataract can cause symptoms that feel dramatically out of proportion to its size.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>A PSC cataract the size of a pinhead can make reading difficult, turn oncoming headlights into blinding glare, and reduce vision in bright conditions more than a much larger nuclear cataract would.</strong></p>
          </div></BlurReveal>

          <p>
            This is the cataract that catches patients off guard. Vision may seem fine at the annual exam. Six months later, everything has changed.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>A PSC cataract the size of a pinhead can make reading difficult, turn oncoming headlights into blinding glare, and reduce vision in bright conditions more than a much larger nuclear cataract would.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* WHO GETS PSC */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Who Develops <strong>PSC Cataracts?</strong></h2>
          </ScrollReveal>
          <p>
            Unlike age-related nuclear cataracts, PSC cataracts have specific risk factors that can accelerate their development. Some patients are decades younger than the typical cataract patient.
          </p>

          <div style={{margin: '32px 0'}}>
            <StaggerChildren staggerDelay={0.1}>
              <StaggerItem>
                <div style={{padding: '20px 24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '12px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '8px'}}>Diabetes</h3>
                  <p style={{margin: 0, color: 'var(--text)', lineHeight: 1.7}}>Patients with diabetes, both type 1 and type 2, develop PSC cataracts at higher rates and at younger ages. Elevated blood sugar levels affect the metabolism of the lens itself, accelerating opacity. Diabetic patients may also develop cataracts that progress more rapidly than expected.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div style={{padding: '20px 24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '12px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '8px'}}>Corticosteroid Use</h3>
                  <p style={{margin: 0, color: 'var(--text)', lineHeight: 1.7}}>Prolonged use of corticosteroids in any form is one of the strongest risk factors. This includes oral steroids (prednisone), inhaled steroids for asthma or COPD, nasal steroid sprays, and topical steroid eye drops. The risk increases with dose and duration. Patients on long-term steroid therapy should have regular eye exams even if they have no symptoms.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div style={{padding: '20px 24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '12px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '8px'}}>Prior Eye Surgery or Injury</h3>
                  <p style={{margin: 0, color: 'var(--text)', lineHeight: 1.7}}>Eyes that have undergone previous surgery, particularly retinal procedures like vitrectomy, are at increased risk for developing PSC cataracts. Trauma to the eye, whether blunt or penetrating, can also trigger PSC formation. These cataracts can appear months to years after the original event.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div style={{padding: '20px 24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '12px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '8px'}}>Retinal Conditions and Treatments</h3>
                  <p style={{margin: 0, color: 'var(--text)', lineHeight: 1.7}}>Patients receiving treatment for retinal conditions, including intravitreal injections for macular degeneration or diabetic retinopathy, may develop PSC cataracts over time. The combination of the underlying condition and its treatment can accelerate lens changes.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div style={{padding: '20px 24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '12px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '8px'}}>Radiation Exposure</h3>
                  <p style={{margin: 0, color: 'var(--text)', lineHeight: 1.7}}>Patients who have received radiation therapy to the head, face, or eye area, often for cancer treatment, are at elevated risk for PSC cataracts. These may develop years after the radiation was completed.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div style={{padding: '20px 24px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '12px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: 600, color: 'var(--dark-rich)', marginBottom: '8px'}}>Younger Patients</h3>
                  <p style={{margin: 0, color: 'var(--text)', lineHeight: 1.7}}>PSC cataracts can develop in patients in their 40s and 50s, sometimes earlier. When a patient under 60 presents with a visually significant cataract, PSC is often the type involved. This surprises many patients who associate cataracts exclusively with aging.</p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/honest-consultation-trust.png"
              alt="Honest patient-doctor conversation building trust during a cataract evaluation"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Does a PSC Cataract <strong>Feel Like?</strong></h2>
          </ScrollReveal>
          <p>
            The symptoms of a PSC cataract are often more specific and more disruptive than those of other cataract types.
          </p>
          <p>
            <strong>Glare sensitivity.</strong> Bright lights become uncomfortable or even blinding. Oncoming headlights at night, sunlight reflecting off pavement, even the overhead lights in a grocery store can cause difficulty. This happens because the opacity is sitting right in the central visual axis where light concentrates.
          </p>
          <p>
            <strong>Reading difficulty.</strong> Near vision often deteriorates before distance vision. Patients notice they need more light to read, or that words seem to blur even with their current reading glasses. This is because the pupil constricts for near work, directing light straight through the PSC opacity.
          </p>
          <p>
            <strong>Rapid progression.</strong> Many patients describe a noticeable decline over weeks to months rather than the gradual change associated with other cataracts. It is not uncommon for a patient to say, "This was not a problem three months ago."
          </p>
          <p>
            <strong>Worse in bright conditions.</strong> Paradoxically, vision may actually be better in dim light when the pupil dilates and allows light around the opacity. In bright conditions, the pupil constricts and forces all light through the clouded area. This is the opposite of what most people expect.
          </p>
        </div>
      </section>

      {/* WHY PSC IS DIFFERENT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why PSC Cataracts Cause <strong>Disproportionate Symptoms</strong></h2>
          </ScrollReveal>
          <p>
            To understand why a small PSC cataract can be so disruptive, it helps to understand the anatomy.
          </p>
          <p>
            The natural lens sits behind the iris. Light passes through the pupil, enters the lens, and is focused onto the retina. A nuclear cataract clouds the entire center of the lens gradually, like fog thickening across a window. A cortical cataract forms spoke-like opacities around the edges, affecting peripheral vision before central vision.
          </p>
          <p>
            A PSC cataract forms a plaque on the back surface of the lens, right at the focal point where light converges. It is like a thumbprint on the exact spot of a camera lens where the image is sharpest. The rest of the lens may be perfectly clear, but that one small area of opacity scatters light across the retina instead of focusing it cleanly.
          </p>
          <p>
            This is why a patient can have a PSC cataract that looks small on examination but causes significant visual difficulty. And it is why patients with PSC cataracts often reach the point of needing surgery sooner than patients with other types.
          </p>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-joyful-clear-vision.jpg"
              alt="Patient joyful after successful cataract surgery restoring clear vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Treatment: When Surgery <strong>Makes Sense</strong></h2>
          </ScrollReveal>
          <p>
            There is no medication, eye drop, or lifestyle change that reverses a PSC cataract once it has formed. The treatment is the same as for other visually significant cataracts: surgical removal and replacement with a lens implant.
          </p>
          <p>
            The surgical technique for a PSC cataract is the same as for any other type. The clouded natural lens is removed through a small incision using ultrasound, and a clear artificial lens is implanted in its place. The procedure typically takes 10 to 15 minutes.
          </p>
          <p>
            However, PSC cataracts sometimes come with additional considerations that an experienced surgeon accounts for:
          </p>
          <ul style={{lineHeight: 2, color: 'var(--text)'}}>
            <li><strong>Diabetic patients</strong> may need a retinal evaluation before surgery to ensure the retina is stable and to optimize blood sugar control around the time of the procedure.</li>
            <li><strong>Patients on steroids</strong> require coordination between their prescribing physician and their surgeon to manage steroid use around surgery, particularly regarding postoperative inflammation.</li>
            <li><strong>Eyes with prior vitrectomy</strong> may have different surgical dynamics, including a deeper anterior chamber and different fluid behavior, that an experienced surgeon anticipates.</li>
            <li><strong>Younger patients</strong> may benefit from a more detailed discussion about lens implant options, since they will live with their implant for a longer period than a typical cataract patient.</li>
          </ul>
        </div>
      </section>

      {/* THE CONVERSATION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Conversation That <strong>Matters</strong></h2>
          </ScrollReveal>
          <p>
            If you have been told you have a posterior subcapsular cataract, the most important next step is not surgery. It is a conversation.
          </p>
          <p>
            A thorough evaluation should include an understanding of what caused the cataract, how quickly it is progressing, whether any underlying conditions need to be managed before surgery, and what lens implant makes the most sense for your eyes and your life.
          </p>
          <p>
            For younger patients in particular, this conversation matters even more. A 50-year-old with a PSC cataract has different visual needs and a longer horizon than a 75-year-old with a nuclear cataract. The lens choice, the timing, and the expected outcome all deserve careful thought.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>A PSC cataract does not wait patiently. But the decision about when and how to treat it should still be made carefully, with a surgeon who understands the full picture.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00313d 0%, #004d5c 100%)', color: '#fff'}}>
        <div className="container content-narrow" style={{textAlign: 'center', padding: '48px 0'}}>
          <h2 style={{fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '12px', fontFamily: 'var(--serif)'}}>Concerned About a <strong>PSC Cataract?</strong></h2>
          <p style={{color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6}}>Whether you have been recently diagnosed or are experiencing rapid vision changes, a comprehensive evaluation is the first step.</p>
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
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>What cataracts are, how they develop, and the different types that affect vision.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the procedure involves from start to finish.</p>
            </Link>
            <Link href="/diabetic-retinopathy" className="related-card">
              <h3>Diabetic Retinopathy</h3>
              <p>How diabetes affects the eye beyond cataracts, and why retinal health matters before surgery.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A complete guide to the lens options available during cataract surgery.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>When cataract surgery involves additional considerations like diabetes, prior surgery, or other conditions.</p>
            </Link>
            <Link href="/insights/the-lens-we-didnt-implant" className="related-card">
              <h3>The Lens We Didn't Implant</h3>
              <p>When intraoperative measurements told a different story than the preoperative plan.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
