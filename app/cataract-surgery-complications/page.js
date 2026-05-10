import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';
import PageFAQ from '../components/PageFAQ';
import AudioNarration from '../components/AudioNarration';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How common are cataract surgery complications?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cataract surgery has a success rate exceeding 99%. Serious complications like posterior capsule rupture occur in approximately 1-3% of cases. Harvard\'s Massachusetts Eye and Ear reported their rate at 1.7% in 2018. While rare, having an experienced surgeon who can manage complications is essential.' },
    },
    {
      '@type': 'Question',
      name: 'What is posterior capsule rupture during cataract surgery?',
      acceptedAnswer: { '@type': 'Answer', text: 'Posterior capsule rupture occurs when the thin membrane behind the cataract breaks during surgery. This can allow cataract fragments to fall toward the retina, cause vitreous to pull forward (risking retinal detachment), or compromise the support structure for the lens implant. An experienced surgeon can manage this during the procedure.' },
    },
    {
      '@type': 'Question',
      name: 'Can iris damage from cataract surgery be repaired?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Iris damage can be repaired with microsurgical suturing techniques. Dr. Tokuhara regularly performs iris repair surgery for patients who experienced complications elsewhere, restoring pupil shape and reducing debilitating glare symptoms.' },
    },
    {
      '@type': 'Question',
      name: 'What is a dislocated lens implant and how is it fixed?',
      acceptedAnswer: { '@type': 'Answer', text: 'A dislocated lens implant occurs when the artificial lens shifts or falls out of position, sometimes years after surgery. Dr. Tokuhara uses the Yamane technique, a sutureless method that anchors the lens haptics directly into the sclera, to reposition or replace dislocated lenses.' },
    },
    {
      '@type': 'Question',
      name: 'Can I still get a premium lens if I had a complication?',
      acceptedAnswer: { '@type': 'Answer', text: 'In most cases of posterior capsule rupture, premium lenses cannot be placed traditionally. However, advanced techniques like reverse optic capture and intrascleral fixation can provide alternative options. Each case requires individual evaluation.' },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I had a complication from cataract surgery elsewhere?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Tokuhara regularly sees patients for second-opinion consultations after complications from surgery performed elsewhere. With fellowship training in both cataract surgery and medical retina, he is uniquely qualified to evaluate and manage these situations. Contact Desert Vision Center to schedule a consultation.' },
    },
  ],
};

export const metadata = {
  title: 'Cataract Surgery Complications: What Can Go Wrong and How I Handle It',
  description: 'The most comprehensive guide to cataract surgery complications available. Dr. Tokuhara explains posterior capsule rupture, iris damage, dislocated lenses, endophthalmitis, and more. With research data, real patient stories, and management strategies.',
  alternates: { canonical: '/cataract-surgery-complications' },
  openGraph: {
    title: 'Cataract Surgery Complications | Dr. Keith Tokuhara',
    description: 'What can go wrong during cataract surgery, how complications are managed, and why choosing an experienced surgeon matters more than you think.',
    url: 'https://drtokuhara.com/cataract-surgery-complications',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Complications', href: '/cataract-surgery-complications' },
]);


const pageFaqs = [
  { q: 'How common are cataract surgery complications?', a: 'Cataract surgery has a success rate exceeding 99%. Serious complications like posterior capsule rupture occur in approximately 1-3% of cases. Harvard\'s Massachusetts Eye and Ear reported their rate at 1.7% in 2018. While rare, having an experienced surgeon who can manage complications is essential.' },
  { q: 'What is posterior capsule rupture during cataract surgery?', a: 'Posterior capsule rupture occurs when the thin membrane behind the cataract breaks during surgery. This can allow cataract fragments to fall toward the retina, cause vitreous to pull forward (risking retinal detachment), or compromise the support structure for the lens implant. An experienced surgeon can manage this during the procedure.' },
  { q: 'Can iris damage from cataract surgery be repaired?', a: 'Yes. Iris damage can be repaired with microsurgical suturing techniques. Dr. Tokuhara regularly performs iris repair surgery for patients who experienced complications elsewhere, restoring pupil shape and reducing debilitating glare symptoms.' },
  { q: 'What is a dislocated lens implant and how is it fixed?', a: 'A dislocated lens implant occurs when the artificial lens shifts or falls out of position, sometimes years after surgery. Dr. Tokuhara uses the Yamane technique, a sutureless method that anchors the lens haptics directly into the sclera, to reposition or replace dislocated lenses.' },
  { q: 'Can I still get a premium lens if I had a complication?', a: 'In most cases of posterior capsule rupture, premium lenses cannot be placed traditionally. However, advanced techniques like reverse optic capture and intrascleral fixation can provide alternative options. Each case requires individual evaluation.' },
  { q: 'What should I do if I had a complication from cataract surgery elsewhere?', a: 'Dr. Tokuhara regularly sees patients for second-opinion consultations after complications from surgery performed elsewhere. With fellowship training in both cataract surgery and medical retina, he is uniquely qualified to evaluate and manage these situations. Contact Desert Vision Center to schedule a consultation.' },
];

export default function CataractSurgeryComplications() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{"@context": "https://schema.org", "@type": "VideoObject", "name": "\u2018Botched\u2019 Cataract Surgery Edition:  Posterior Capsule Rupture Explained", "description": "\u201cWhy can\u2019t I see after cataract surgery?\u201d  \u201cI already had cataract surgery, why do I need to have surgery again.\u201d  Dr. T", "thumbnailUrl": "https://i.ytimg.com/vi/7VkbQx36LeI/maxresdefault.jpg", "uploadDate": "2021-04-27", "duration": "PT7M24S", "contentUrl": "https://www.youtube.com/watch?v=7VkbQx36LeI", "embedUrl": "https://www.youtube.com/embed/7VkbQx36LeI"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "'Botched' Cataract Surgery Edition:  Iris Damage Repair", "description": "\"Why do I have glare after cataract surgery?  Why is my pupil not round?  Why did my eye change color after cataract sur", "thumbnailUrl": "https://i.ytimg.com/vi/B8sM9Xa5mus/maxresdefault.jpg", "uploadDate": "2021-01-03", "duration": "PT8M15S", "contentUrl": "https://www.youtube.com/watch?v=B8sM9Xa5mus", "embedUrl": "https://www.youtube.com/embed/B8sM9Xa5mus"}]) }} />

      {/* HERO */}
      <VideoBackground src="/media/ambient-crystal-alignment.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}} bottomOverlay={<AudioNarration src="/audio/narrations/cataract-surgery-complications.mp3" />}>
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Cataract Surgery <strong>Complications</strong></h1></ScrollReveal>
          <p className="page-hero-sub">What can go wrong, how I handle it, and why this page exists at all.</p>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            Most surgeon websites do not have a page like this. I think that is a mistake.
          </p>
          <p>
            Cataract surgery is one of the safest, most successful procedures in all of medicine. The success rate exceeds 99%. But "safe" does not mean "risk-free," and pretending complications do not exist does not serve patients. It just means they are unprepared if something does happen.
          </p>
          <p>
            I would rather you understand the risks honestly than be surprised by them later. And I would rather you know that if a complication occurs, your surgeon has both the training and the temperament to handle it.
          </p>
        </div>
      </section>

      {/* JUMP NAVIGATION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Topics <strong>Covered</strong></h2>
          <p>Click any topic to learn more:</p>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px'}} className="compare-grid">
            <a href="#capsule-rupture" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--night-horizon)', fontSize: '15px'}}>
              <strong>Posterior Capsule Rupture</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>1-3% of surgeries. Manageable with experience.</span>
            </a>
            <a href="#iris-damage" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--night-horizon)', fontSize: '15px'}}>
              <strong>Iris Damage</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>Repairable with microsurgical techniques.</span>
            </a>
            <a href="#dislocated-lens" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--night-horizon)', fontSize: '15px'}}>
              <strong>Dislocated Lens Implant</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>Can occur years later. Yamane technique fixes it.</span>
            </a>
            <a href="#cme" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--night-horizon)', fontSize: '15px'}}>
              <strong>Cystoid Macular Edema</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>Swelling at the macula. Usually treatable.</span>
            </a>
            <a href="#endophthalmitis" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--night-horizon)', fontSize: '15px'}}>
              <strong>Endophthalmitis</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>Rare infection. Prevention is key.</span>
            </a>
            <a href="#retinal-detachment" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--night-horizon)', fontSize: '15px'}}>
              <strong>Retinal Detachment</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>Rare but serious. Requires prompt treatment.</span>
            </a>
            <a href="#pco" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--night-horizon)', fontSize: '15px'}}>
              <strong>Posterior Capsule Opacification</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>Common, expected, easily treated with YAG laser.</span>
            </a>
            <a href="#second-opinions" style={{display: 'block', padding: '16px 20px', background: 'var(--white)', borderRadius: '8px', textDecoration: 'none', color: 'var(--text)', borderLeft: '3px solid var(--canyon)', fontSize: '15px'}}>
              <strong>Second Opinions</strong><br />
              <span style={{fontSize: '13px', color: 'var(--text-light)'}}>Had a complication elsewhere? I can help.</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHY EXPERIENCE MATTERS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Experience with Complications <strong>Matters</strong></h2>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/complex-cases-surgical-precision.jpg"
              alt="Surgical precision during cataract surgery at Desert Vision Center"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <p>
            I regularly see patients for second-opinion consultations after complications from cataract surgery performed elsewhere. This is a significant part of my practice. With fellowship training in medical retina, I am uniquely positioned to manage both the anterior segment complications of cataract surgery and the posterior segment consequences that can follow.
          </p>
          <p>
            Here is what I have learned from those consultations: the complication itself is rarely what causes the most damage. <strong>It is how the complication is managed, and how the patient is treated afterward, that determines the outcome.</strong>
          </p>
        </div>
      </section>

      {/* POSTERIOR CAPSULE RUPTURE */}
      <section id="capsule-rupture" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Posterior Capsule <strong>Rupture</strong></h2>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', borderLeft: '3px solid var(--oasis)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>Incidence:</strong> 1-3% of cataract surgeries. Harvard Massachusetts Eye and Ear reported 1.7% (2018). <strong>Risk factors:</strong> previous retina surgery, intravitreal injections, trauma, dense cataracts, pseudoexfoliation. <strong>Outcome with proper management:</strong> majority achieve good visual outcomes.</p>
          </div>

          <p>
            During cataract surgery, the natural lens sits inside a thin membrane called the capsule. We open the front to access the cataract and leave the back intact. It is just two to four micrometers thin, and it provides structural support for the new lens implant.
          </p>
          <p>
            When the posterior capsule breaks during surgery, three things can go wrong:
          </p>
          <ul className="content-list">
            <li><strong>Cataract fragments can fall toward the retina.</strong> If pieces drop to the back of the eye, a secondary surgery with a vitreoretinal surgeon may be needed to retrieve them safely.</li>
            <li><strong>Vitreous can migrate forward.</strong> The gel-like substance in the center of the eye can shift through the broken capsule and pull on the retina, potentially causing a detachment.</li>
            <li><strong>The lens implant loses its support.</strong> Without an intact capsule, the new lens can dislocate or fall to the back of the eye.</li>
          </ul>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>How I manage it</h3>
          <ul className="content-list">
            <li><strong>Anterior vitrectomy</strong> to carefully remove any vitreous that has migrated forward, minimizing retinal traction</li>
            <li><strong>Safe fragment removal</strong> without causing additional damage</li>
            <li><strong>Alternative lens placement</strong> using sulcus positioning with optic capture</li>
            <li><strong><Link href="/yamane-technique" style={{color: 'var(--night-horizon)'}}>Yamane intrascleral fixation</Link></strong> for cases where the capsule is too compromised, anchoring the lens directly into the sclera without sutures</li>
          </ul>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>Can you still get a premium lens?</h3>
          <p>
            Usually, no. Techniques like reverse optic capture (Gimbel) and the Kanabrava four-flange technique can allow toric or multifocal placement in select cases, but long-term stability data is still emerging. Each case requires individual assessment.
          </p>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginTop: '24px', fontSize: '14px', color: 'var(--text-light)'}}>
            <strong style={{color: 'var(--text)'}}>Research references:</strong>
            <ul style={{marginTop: '8px', marginBottom: 0, paddingLeft: '20px'}}>
              <li>Narendran et al. "The Cataract National Dataset electronic multi-centre audit of 55,567 operations." <em>Eye</em>, 2009. Reported posterior capsule rupture rate of 1.92%.</li>
              <li>Massachusetts Eye and Ear Comprehensive Ophthalmology Service. Posterior capsule rupture rate of 1.7%, 2018.</li>
              <li>Gimbel HV et al. "Posterior capsule rupture during phacoemulsification: rescue optic capture." <em>J Cataract Refract Surg</em>, 2018.</li>
            </ul>
          </div>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe src="https://www.youtube.com/embed/7VkbQx36LeI" title="Posterior Capsule Rupture Explained" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>My detailed explanation with anatomy diagrams and management strategies.</p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* IRIS DAMAGE */}
      <section id="iris-damage" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Iris Damage <strong>Repair</strong></h2>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', borderLeft: '3px solid var(--oasis)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>Cause:</strong> Iris prolapse through incision sites during surgery due to poor fluidics or surgical control. <strong>Symptoms:</strong> Severe glare, light sensitivity, cosmetic changes to the pupil. <strong>Treatment:</strong> Microsurgical iris repair with suturing techniques.</p>
          </div>

          <div className="content-image" style={{marginBottom: '24px'}}>
            <Image
              src="/media/complex-cases-patient-hope.jpg"
              alt="Patient finding hope after a complicated cataract surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '16px'}}>A patient's story</h3>
          <p>
            A 73-year-old woman came to me after two years of debilitating glare following cataract surgery at another practice. Her vision measured 20/30 and 20/40, numbers that look reasonable on paper. But her reality:
          </p>
          <div className="insight-list">
            <div className="insight-item"><p>Could not tolerate bright lights. Even the darkest sunglasses were not enough.</p></div>
            <div className="insight-item"><p>Kept the windows of her house closed just to block the sun.</p></div>
            <div className="insight-item"><p>Could not drive. Relied entirely on her husband for transportation.</p></div>
            <div className="insight-item"><p>Went to the grocery store only in the early morning or late evening.</p></div>
          </div>
          <p>
            Under the microscope, I found iris damage at the incision sites in both eyes. Light was passing directly through the damaged tissue, a finding called transillumination.
          </p>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>The repair</h3>
          <p>
            Using microsurgical suturing techniques, I reconnected the damaged iris and rebuilt the pupil sphincter muscle. Think of it like carefully tying laces to close gaps in delicate fabric.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>First day after surgery: 20/20 vision. Glare resolved. She could drive again.</strong></p>
          </div></BlurReveal>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe src="https://www.youtube.com/embed/B8sM9Xa5mus" title="Iris Damage Repair" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>Before and after photographs and full explanation of the repair technique.</p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* DISLOCATED LENS */}
      <section id="dislocated-lens" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Dislocated Lens <strong>Implant</strong></h2>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', borderLeft: '3px solid var(--oasis)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>When:</strong> Can occur months or years after surgery. <strong>Causes:</strong> Trauma, pseudoexfoliation, weakened zonules, prior retina surgery. <strong>Symptoms:</strong> Shifting vision, "the world shakes" with eye movement. <strong>Fix:</strong> <Link href="/yamane-technique" style={{color: 'var(--night-horizon)'}}>Yamane sutureless intrascleral fixation</Link>.</p>
          </div>

          <p>
            We always talk about lens implants lasting the rest of your life. In most cases, they do. But sometimes trauma, weakened support structures, or other factors cause the lens to shift or dislocate years after the original surgery.
          </p>
          <p>
            I recently saw a patient whose lens had dislocated 15 years after her original cataract surgery. Every time she looked up or down, the world seemed to shake. Under the microscope, you could literally see the lens implant moving inside the eye with each blink.
          </p>
          <p>
            Using the <Link href="/yamane-technique" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>Yamane technique</Link>, I was able to reposition and anchor her lens without sutures, resulting in a perfectly centered, stable implant.
          </p>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginTop: '24px', fontSize: '14px', color: 'var(--text-light)'}}>
            <strong style={{color: 'var(--text)'}}>Research references:</strong>
            <ul style={{marginTop: '8px', marginBottom: 0, paddingLeft: '20px'}}>
              <li>Yamane S et al. "Flanged intrascleral intraocular lens fixation with double-needle technique." <em>Ophthalmology</em>, 2017.</li>
              <li>Late IOL dislocation occurs in approximately 0.1-3% of cases depending on risk factors and follow-up duration (Pueringer et al., <em>J Cataract Refract Surg</em>, 2011).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* CME */}
      <section id="cme" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Cystoid Macular <strong>Edema (CME)</strong></h2>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', borderLeft: '3px solid var(--oasis)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>Incidence:</strong> Clinical CME occurs in approximately 1-2% of uncomplicated cataract surgeries. Subclinical CME (detectable only on OCT) may be higher. <strong>Timing:</strong> Usually appears 4-6 weeks after surgery. <strong>Risk factors:</strong> Diabetes, uveitis, epiretinal membrane, complicated surgery. <strong>Treatment:</strong> Anti-inflammatory drops, sometimes injections.</p>
          </div>

          <p>
            Cystoid macular edema is swelling at the center of the retina (the macula) that can develop after cataract surgery. It occurs when inflammation causes fluid to accumulate in tiny cyst-like spaces in the retinal tissue.
          </p>
          <p>
            Patients notice blurred or distorted central vision, usually developing a few weeks after surgery, after initially seeing well. The good news: most cases respond to treatment with anti-inflammatory eye drops (NSAIDs and/or steroids). Persistent cases may require a steroid injection or other targeted therapy.
          </p>
          <p>
            Diabetic patients and those who had complicated surgery are at higher risk. I monitor all my patients closely in the post-operative period and start treatment early when signs of CME appear on OCT imaging.
          </p>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginTop: '24px', fontSize: '14px', color: 'var(--text-light)'}}>
            <strong style={{color: 'var(--text)'}}>Research references:</strong>
            <ul style={{marginTop: '8px', marginBottom: 0, paddingLeft: '20px'}}>
              <li>Lobo CL et al. "Macular alterations after small-incision cataract surgery." <em>J Cataract Refract Surg</em>, 2004.</li>
              <li>Henderson BA et al. "Clinical pseudophakic cystoid macular edema: risk factors for development and duration." <em>J Cataract Refract Surg</em>, 2007.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* ENDOPHTHALMITIS */}
      <section id="endophthalmitis" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title"><strong>Endophthalmitis</strong></h2>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', borderLeft: '3px solid var(--canyon)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>Incidence:</strong> Approximately 0.03-0.1% (roughly 1 in 1,000 to 1 in 3,000 surgeries). <strong>Timing:</strong> Usually within the first week after surgery. <strong>Severity:</strong> This is the most feared cataract surgery complication. Prompt treatment is critical. <strong>Prevention:</strong> Povidone-iodine antisepsis, intracameral antibiotics, sterile technique.</p>
          </div>

          <p>
            Endophthalmitis is an infection inside the eye. It is rare, but it is the complication that every cataract surgeon takes the most seriously because it can threaten vision permanently if not treated immediately.
          </p>
          <p>
            Warning signs include increasing pain, worsening redness, and decreasing vision in the days following surgery. If you experience any of these, contact your surgeon immediately. Do not wait until your next scheduled appointment.
          </p>
          <p>
            Prevention is everything. At Desert Vision Center, we follow evidence-based protocols including povidone-iodine antisepsis, intracameral antibiotic injection at the end of surgery, and rigorous sterile technique throughout every procedure.
          </p>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginTop: '24px', fontSize: '14px', color: 'var(--text-light)'}}>
            <strong style={{color: 'var(--text)'}}>Research references:</strong>
            <ul style={{marginTop: '8px', marginBottom: 0, paddingLeft: '20px'}}>
              <li>ESCRS Endophthalmitis Study Group. Prophylaxis of postoperative endophthalmitis following cataract surgery. <em>J Cataract Refract Surg</em>, 2007. Demonstrated 5x reduction in endophthalmitis with intracameral cefuroxime.</li>
              <li>Endophthalmitis Vitrectomy Study (EVS). <em>Arch Ophthalmol</em>, 1995. Landmark trial establishing treatment guidelines.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* RETINAL DETACHMENT */}
      <section id="retinal-detachment" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Retinal <strong>Detachment</strong></h2>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', borderLeft: '3px solid var(--oasis)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>Incidence:</strong> Approximately 0.5-1% within the first year after cataract surgery. Higher in highly myopic eyes. <strong>Warning signs:</strong> Sudden flashes of light, shower of new floaters, shadow or curtain in peripheral vision. <strong>Treatment:</strong> Surgical repair by a vitreoretinal surgeon. <strong>Key:</strong> Prompt recognition dramatically improves outcomes.</p>
          </div>

          <p>
            Cataract surgery slightly increases the lifetime risk of retinal detachment. The risk is highest in the first year after surgery and is more elevated in patients with high myopia (severe nearsightedness), a history of retinal problems, or who experienced complications during surgery.
          </p>
          <p>
            My fellowship training in medical retina means I understand this risk from both sides: as a cataract surgeon who takes precautions to minimize it, and as a retina-trained physician who knows exactly what to look for during follow-up. I personally monitor my patients for retinal changes and can coordinate immediate referral for surgical repair if needed.
          </p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* PCO */}
      <section id="pco" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Posterior Capsule <strong>Opacification (PCO)</strong></h2>

          <div style={{background: 'var(--white)', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', borderLeft: '3px solid var(--oasis)'}}>
            <p style={{margin: 0, fontSize: '14px'}}><strong>Incidence:</strong> Up to 20-30% of patients within 5 years. <strong>This is not a complication.</strong> It is a normal part of how some eyes heal after surgery. <strong>Treatment:</strong> <Link href="/yag-laser-capsulotomy" style={{color: 'var(--night-horizon)'}}>YAG laser capsulotomy</Link>, a painless 5-minute in-office procedure. <strong>Outcome:</strong> One-time treatment, capsule does not cloud again.</p>
          </div>

          <p>
            Strictly speaking, PCO is not a surgical complication. It is a natural healing response where cells on the capsule multiply and create a hazy film behind the lens implant. It feels like the cataract is returning, but the lens itself is fine.
          </p>
          <p>
            I include it on this page because it is the most common reason patients contact me with concerns after surgery. The treatment, <Link href="/yag-laser-capsulotomy" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>YAG laser capsulotomy</Link>, is one of the most satisfying procedures in ophthalmology: five minutes, no pain, clear vision restored.
          </p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* SECOND OPINIONS */}
      <section id="second-opinions" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Second Opinions After <strong>Complications</strong></h2>

          <div className="content-image" style={{marginBottom: '24px'}}>
            <Image
              src="/media/dr-t-slit-lamp-patient-view.jpg"
              alt="Dr. Tokuhara examining a patient at the slit lamp"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="content-image-caption">Every second-opinion consultation begins with a thorough examination and an honest conversation about what happened and what can be done.</div>
          </div>

          <p>
            A significant part of my practice involves seeing patients who experienced complications from cataract surgery performed elsewhere. If you are in that situation, I want you to know a few things:
          </p>
          <ul className="content-list">
            <li>You are not a burden. You deserve answers.</li>
            <li>Complications do not always mean the surgeon did something wrong. But you deserve to understand what happened.</li>
            <li>Many complications are repairable. Iris damage, dislocated lenses, retained fragments, and other issues often have solutions.</li>
            <li>My dual fellowship training in cataract surgery and medical retina means I evaluate these cases from both the front and back of the eye.</li>
          </ul>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* WHAT TO WATCH FOR */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">When to Call <strong>Your Surgeon</strong></h2>
          <p>
            Most cataract surgeries are uneventful. But know these warning signs:
          </p>
          <ul className="content-list">
            <li><strong>Sudden decrease in vision</strong></li>
            <li><strong>Increasing pain</strong> not relieved by over-the-counter medication</li>
            <li><strong>Flashes of light</strong> or a sudden increase in floaters</li>
            <li><strong>A shadow or curtain</strong> in your peripheral vision</li>
            <li><strong>Increasing redness</strong> that worsens after the first day</li>
          </ul>
          <p>
            These symptoms do not necessarily mean something is wrong. But they warrant prompt evaluation. The earlier a complication is identified, the better the outcome.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I have spent years thinking about why some surgeons avoid talking about complications. I think it comes from a good place, a desire to reassure, to not frighten patients away from a procedure that will genuinely improve their lives. But reassurance built on incomplete information is fragile. I would rather a patient walk into surgery with clear eyes, literally and figuratively, than discover after the fact that they were never told what was possible. Trust is not built by hiding risk. It is built by facing it together.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

            <PageFAQ faqs={pageFaqs} />

{/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/yamane-technique" className="related-card">
              <h3>Yamane Technique</h3>
              <p>Sutureless lens fixation for dislocated implants.</p>
            </Link>
            <Link href="/yag-laser-capsulotomy" className="related-card">
              <h3>YAG Laser Capsulotomy</h3>
              <p>Treating posterior capsule opacification after surgery.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>Cataract surgery when other eye conditions are involved.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>Why experience and honesty matter more than marketing.</p>
            </Link>
            <Link href="/ethical-cataract-care" className="related-card">
              <h3>Ethical Cataract Care</h3>
              <p>The unspoken story of referral kickbacks in eye care.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the standard procedure involves from start to finish.</p>
            </Link>
            <Link href="/insights/when-guilt-replaces-explanation" className="related-card">
              <h3>When Guilt Replaces Explanation</h3>
              <p>What happens when a complication is met with blame instead of a plan.</p>
            </Link>
            <Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me" className="related-card">
              <h3>What I Learned from the Surgeon Who Trained Me</h3>
              <p>The lessons from Dr. Gimbel that shape how I handle every complication.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
