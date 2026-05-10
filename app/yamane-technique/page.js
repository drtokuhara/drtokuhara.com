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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Yamane technique for dislocated lens implants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Yamane technique is a sutureless intrascleral haptic fixation procedure. Each haptic of the dislocated lens is externalized through a small scleral tunnel, and a tiny flange is created at the end using thermal cautery. The flange is then tucked under the conjunctiva, holding the lens securely centered without any sutures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do lens implants dislocate after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lens implant can dislocate years or even decades after successful cataract surgery. Causes include ocular trauma, progressive weakening of the zonular fibers (the fine filaments that hold the lens in place), conditions like pseudoexfoliation syndrome, and prior retina surgery. The lens may shift gradually or dislodge suddenly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Yamane technique surgery take to recover from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery from the Yamane technique is similar to recovery from cataract surgery. Most patients notice improvement in vision within the first few days. Full stability typically occurs over several weeks. Because there are no sutures, there is less risk of suture-related complications that can occur with older fixation methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Yamane technique better than suture fixation for dislocated lenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Yamane technique offers several advantages over older suture-based fixation. Sutures can erode, break, or cause long-term inflammation. The Yamane flanges are permanent and do not degrade over time. The technique also avoids the astigmatism-inducing large incisions required for some older approaches. It requires advanced surgical skill and is not offered everywhere.',
      },
    },
  ],
};

export const metadata = {
  title: 'The Yamane Technique: Fixing a Dislocated Lens Implant Without Sutures',
  description: 'Dr. Tokuhara explains the Yamane technique for repositioning a dislocated lens implant - a sutureless intrascleral fixation procedure for patients whose lens has shifted years after cataract surgery.',
  alternates: { canonical: '/yamane-technique' },
  openGraph: {
    title: 'The Yamane Technique: Dislocated Lens Implant Repair | Dr. Keith Tokuhara',
    description: 'When a lens implant dislocates years after cataract surgery, the Yamane technique can restore it without sutures. Dr. Tokuhara explains the procedure.',
    url: 'https://drtokuhara.com/yamane-technique',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Yamane Technique', href: '/yamane-technique' },
]);

export default function YamaneTechniquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "VideoObject", "name": "Fixing a Dislocated Lens Implant:  Yamane Technique", "description": "Does cataract surgery last forever? What happens when the lens implant from cataract surgery dislocates?  Dr. Tokuhara d", "thumbnailUrl": "https://i.ytimg.com/vi/ZrnRIEa0F44/maxresdefault.jpg", "uploadDate": "2022-01-03", "duration": "PT3M36S", "contentUrl": "https://www.youtube.com/watch?v=ZrnRIEa0F44", "embedUrl": "https://www.youtube.com/embed/ZrnRIEa0F44"}) }} />

      {/* HERO */}
      <VideoBackground src="/media/ambient-timepiece-mechanism.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>The Yamane <strong>Technique</strong></h1>
          </ScrollReveal>
          <p className="page-hero-sub">Fixing a dislocated lens implant - without a single stitch.</p>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            Cataract surgery replaces your natural lens with a permanent implant. For the vast majority of patients, that implant stays exactly where it was placed - for the rest of their life. But for some patients, years later, the lens shifts.
          </p>
          <p>
            When that happens, the world does not simply blur. It moves. Patients describe a shimmering, a jiggling, a sense that their vision is unstable in ways that are difficult to explain to someone who has not experienced it. One patient I saw had his original cataract surgery fifteen years earlier. Everything had been fine for over a decade. Then, gradually, his world started to tremble.
          </p>
          <p>
            Under examination, I could see his lens implant moving visibly every time he shifted his gaze. The support structure, called the zonular fibers, had weakened over time. The implant that had been stable for fifteen years was no longer anchored.
          </p>
          <p>
            This is the problem the Yamane technique was designed to solve.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-evening-stroll.jpg" alt="Seniors on an evening walk - the stable, clear vision the Yamane technique restores" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* WHY LENSES DISLOCATE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why a Lens Implant <strong>Dislocates</strong></h2>
          <p>
            Your natural lens - and the implant that replaces it - is held in place by a ring of fine filaments called zonular fibers. These fibers attach the lens capsule to the inner wall of the eye, keeping the lens centered behind the pupil. They are remarkably delicate structures, and several things can weaken or break them:
          </p>
          <ul className="content-list">
            <li><strong>Trauma</strong> - a blow to the eye can rupture zonular fibers immediately or weaken them in ways that lead to late dislocation</li>
            <li><strong>Pseudoexfoliation syndrome</strong> - a common condition where protein flakes accumulate on eye structures and progressively damage the zonules over years</li>
            <li><strong>Prior retina surgery</strong> - vitrectomy procedures can affect the structural integrity of the posterior segment</li>
            <li><strong>Natural aging</strong> - in some patients, zonular weakening occurs without any identifiable underlying cause</li>
          </ul>
          <p>
            The dislocation can happen slowly, with the lens gradually drifting over months, or suddenly, with the lens dropping dramatically from its normal position. Either way, the result is the same: a lens that is no longer doing its job.
          </p>
        </div>
      </section>

      {/* WHAT THE YAMANE TECHNIQUE IS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How the Yamane Technique <strong>Works</strong></h2>
          <p>
            The Yamane technique, also called sutureless intrascleral haptic fixation, solves the problem by anchoring the lens directly into the wall of the eye itself - no stitches required.
          </p>
          <p>
            A lens implant has two thin arms called haptics that normally rest inside the lens capsule. When the capsule can no longer hold the lens, those haptics need a new anchor. The Yamane technique creates that anchor inside the sclera, the white wall of the eye.
          </p>
          <p>
            Here is what happens during the procedure:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <p><strong>Step 1: Two scleral tunnels are created.</strong> Using a fine needle, I create a small tunnel through the sclera on each side of the eye, precisely positioned to accept each haptic of the lens.</p>
            </div>
            <div className="insight-item">
              <p><strong>Step 2: The haptics are externalized.</strong> Each haptic is threaded through its scleral tunnel and brought to the surface of the eye, outside the conjunctiva.</p>
            </div>
            <div className="insight-item">
              <p><strong>Step 3: A flange is formed.</strong> Using a low-temperature cautery device, I gently melt the very tip of each haptic to form a small mushroom-shaped flange. This flange is larger than the tunnel, so it cannot pull back through.</p>
            </div>
            <div className="insight-item">
              <p><strong>Step 4: The flanges are buried.</strong> Each flange is tucked beneath the conjunctiva, where it sits invisibly and permanently. The lens is now anchored at two precise points within the scleral wall itself.</p>
            </div>
          </div>
          <p>
            The result is a perfectly centered lens implant - stable, secure, and entirely suture-free. Because there are no stitches, there is no suture erosion, no long-term inflammation from degrading material, and no risk of suture-related complications that plagued older approaches.
          </p>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/ZrnRIEa0F44"
              title="The Yamane Technique: Sutureless Intrascleral Haptic Fixation - Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>A full walkthrough of the Yamane technique, including anatomy, surgical steps, and patient outcomes.</p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <LineDraw />
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Who This <strong>Surgery Helps</strong></h2>
          <p>
            The Yamane technique is advanced reconstructive surgery. I perform it regularly for patients who come to me from other practices - patients who had successful cataract surgery elsewhere, sometimes years or decades ago, and are now dealing with a dislocated implant.
          </p>
          <p>
            You may be a candidate for this procedure if:
          </p>
          <ul className="content-list">
            <li>Your lens implant has shifted out of position and your vision has become unstable or blurry</li>
            <li>You experience monocular diplopia - a doubling or ghosting of images in one eye</li>
            <li>You can see the edge of the lens implant in your visual field</li>
            <li>Your vision shimmers or jiggles when you move your eyes</li>
            <li>You have pseudoexfoliation syndrome and have been told your lens support is compromised</li>
            <li>Your lens dislocated following trauma</li>
          </ul>
          <p>
            Not every dislocated lens requires the Yamane technique. Minor subluxations may be managed with observation. But when the dislocation is affecting your quality of life, and when conservative options are no longer sufficient, this procedure offers a durable, elegant solution.
          </p>

          <BlurReveal className="pull-quote">
            <p>"The flanges are permanent. They do not degrade, they do not erode, and they do not require future maintenance. When we reposition your lens with the Yamane technique, the goal is that you never need to think about it again."</p>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-couple-garden-blooming.jpg" alt="Couple in a blooming garden - the vibrant, stable world that restored vision reveals" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients who come to me with a dislocated lens are often frightened. They thought cataract surgery was behind them. They feel like something has gone wrong in a way they cannot explain, and they do not know whether it can be fixed. I find that one of the most important things I can do in that first consultation is simply describe what I see, and describe what I can do about it. The Yamane technique is a remarkable piece of surgical engineering. Explaining it clearly - and watching the fear in someone's face be replaced by understanding - is one of the parts of this work I love most.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <PageFAQ faqs={[
        { q: 'What is the Yamane technique for dislocated lens implants?', a: 'The Yamane technique is a sutureless intrascleral haptic fixation procedure. Each haptic of the lens is externalized through a small scleral tunnel, and a tiny flange is created using thermal cautery. The flange is tucked under the conjunctiva, holding the lens securely without any sutures.' },
        { q: 'Why do lens implants dislocate after cataract surgery?', a: 'A lens implant can dislocate years or even decades after successful cataract surgery. Causes include ocular trauma, progressive weakening of the zonular fibers, conditions like pseudoexfoliation syndrome, and prior retina surgery. The lens may shift gradually or dislodge suddenly.' },
        { q: 'How long does Yamane technique surgery take to recover from?', a: 'Recovery is similar to recovery from cataract surgery. Most patients notice improvement in vision within the first few days. Full stability typically occurs over several weeks. Because there are no sutures, there is less risk of suture-related complications.' },
        { q: 'Is the Yamane technique better than suture fixation for dislocated lenses?', a: 'The Yamane technique offers several advantages over older suture-based fixation. Sutures can erode, break, or cause long-term inflammation. The Yamane flanges are permanent and do not degrade over time. Dr. Tokuhara was the first surgeon in the Coachella Valley to perform this technique.' },
      ]} />

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Cataract Surgery Complications</h3>
              <p>What can go wrong during surgery, and how I manage it - including the Yamane technique for capsule compromise.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>Surgery when other conditions are involved. Prior retina surgery, pseudoexfoliation, and more.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>Understanding the different types of lens implants and how we choose the right one for you.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
