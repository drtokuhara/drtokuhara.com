import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Lens Implants Explained: Monofocal, Toric, EDOF, and Multifocal',
    description: 'A guide to cataract lens implant options based on how you live. Monofocal, toric, EDOF, and multifocal lenses explained with honest tradeoffs.',
    slug: '/lens-implants-explained',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Lens Implants Explained', href: '/lens-implants-explained' },
  ]),
];

export const metadata = {
  title: 'Lens Implants Explained: Monofocal, Toric, EDOF, and Multifocal',
  description: 'An honest guide to cataract lens implants. Not which is "best" - which is best for your life. Tradeoffs, lifestyle considerations, and what your surgeon is really thinking.',
  alternates: { canonical: '/lens-implants-explained' },
  openGraph: {
    title: 'Lens Implants Explained | Dr. Keith Tokuhara',
    description: 'Monofocal, Toric, EDOF, and Multifocal - what each lens does, who it works best for, and the tradeoffs nobody mentions.',
    url: 'https://drtokuhara.com/lens-implants-explained',
  },
};

export default function LensImplantsExplained() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Lens Implants <strong>Explained</strong></h1>
          <p className="page-hero-sub">There is no "best" lens. There's only the best lens for how you live. Here's how to think about it.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/IMG_5162.jpeg"
              alt="Dr. Tokuhara with advanced diagnostic equipment at Desert Vision Center"
              width={680}
              height={510}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="content-image-caption">Lens selection starts with precise measurements - the right data leads to the right choice.</div>
          </div>
          <AuthorByline />
          <p className="body-lead">
            During cataract surgery, your clouded natural lens is removed and replaced with an artificial lens implant - called an intraocular lens, or IOL. This lens is permanent. It's the one decision in cataract surgery that stays with you for the rest of your life.
          </p>
          <p>
            That's why this conversation matters. And that's why I want to be honest with you: choosing a lens is not about features. It's about tradeoffs. Every lens gives you something and asks you to accept something in return. The goal is to find the match that fits your life - not the one that sounds the most impressive.
          </p>
        </div>
      </section>

      {/* MONOFOCAL */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Monofocal <strong>Lens</strong></h2>
          <p className="lens-tagline">The reliable foundation. Covered by insurance.</p>
          <p>
            A monofocal lens gives you clear vision at one distance. Most patients choose distance - sharp for driving, television, walking around. You'd wear reading glasses for close work. The standard monofocal IOL is the most extensively studied implant in ophthalmology, with decades of clinical data supporting its reliability and optical quality.
          </p>
          <p>
            But here's something that doesn't get enough airtime: <strong>a monofocal lens aimed at near vision is a perfectly valid choice.</strong> I had a patient - an avid reader, 81 years old - who had delayed surgery for years because she believed reading glasses were mandatory after cataract surgery. No one had told her we could aim the lens for reading instead.
          </p>
          <p>
            When I explained the option, she didn't just feel relieved. She was excited. Not because of premium technology, but because the plan matched her life. She reads for hours every day. That's who she is. The lens should reflect that.
          </p>
          <div className="lens-tradeoff">
            <p><strong>What you get:</strong> Excellent clarity at your chosen distance. Reliable. Proven. Fully covered by insurance.</p>
            <p><strong>What you accept:</strong> Glasses for the other distance. If you pick distance, you need readers. If you pick near, you need glasses for driving.</p>
            <p><strong>Best for:</strong> Patients who don't mind glasses for some tasks and want the most predictable outcome. Patients with strong near-vision identity (readers, craftspeople, artists).</p>
          </div>
        </div>
      </section>

      {/* TORIC */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Toric <strong>Lens</strong></h2>
          <p className="lens-tagline">For patients with astigmatism. Sharper uncorrected vision.</p>
          <p>
            If you have astigmatism - an irregular curvature of the cornea - a standard lens won't fully address it. A toric lens is designed to compensate for that shape, giving you sharper uncorrected vision at your chosen distance. Common toric platforms include the AcrySof IQ Toric, Tecnis Toric, and enVista Toric, each with specific toricity ranges and optical characteristics.
          </p>
          <p>
            An important clarification: <strong>a toric lens reduces astigmatism. It does not eliminate it completely.</strong> Precise axis alignment is critical. Even a few degrees of misalignment can diminish the astigmatism-reducing effect. I use intraoperative aberrometry and digital marking systems to achieve the most accurate alignment possible. Some residual astigmatism is still possible even after a technically excellent surgery, particularly with higher degrees of corneal irregularity. Most patients are very happy with the result, but I want you to have realistic expectations going in.
          </p>
          <div className="lens-tradeoff">
            <p><strong>What you get:</strong> Significantly sharper distance vision without glasses if you have astigmatism. Works with your eye's specific shape.</p>
            <p><strong>What you accept:</strong> Still a single-focus lens - you'll need readers for close work. Premium cost above insurance coverage.</p>
            <p><strong>Best for:</strong> Patients with moderate to significant astigmatism who want the clearest possible distance vision without glasses.</p>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE - DISTANCE VISION */}
      <section className="section section-warm" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/lifestyle-couple-golf-course-sunset.jpg"
              alt="Couple enjoying golf at sunset in the Coachella Valley with clear distance vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="content-image-caption">Clear distance vision means getting back to the activities you love.</div>
          </div>
        </div>
      </section>

      {/* EDOF */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Extended Depth of Focus <strong>(EDOF)</strong></h2>
          <p className="lens-tagline">A wider range of clear vision. A modern middle ground.</p>
          <p>
            EDOF lenses stretch your focus from distance through intermediate - roughly arm's length. That means driving, cooking, using a computer, and reading your phone are all clearer without glasses. Fine print and prolonged close reading may still benefit from light readers.
          </p>
          <p>
            The Vivity lens by Alcon uses a proprietary wavefront-shaping technology called X-WAVE. Unlike multifocal lenses that split light into discrete focal points, Vivity stretches and shifts light to extend the range of focus. The result is a more continuous visual experience with significantly less risk of halos and glare than traditional multifocal designs. Clinical studies have shown that Vivity patients report fewer nighttime visual disturbances while still achieving meaningful glasses independence for distance and intermediate tasks.
          </p>
          <p>
            I was the first surgeon in the Coachella Valley to implant the Vivity lens. That early experience, combined with hundreds of subsequent cases, has given me a nuanced understanding of which patients do best with this technology and where its limitations lie.
          </p>
          <div className="lens-tradeoff">
            <p><strong>What you get:</strong> Good distance and intermediate vision. Less dependence on glasses for most activities. Lower risk of halos and glare compared to multifocal.</p>
            <p><strong>What you accept:</strong> Small print and close-up detail work may still need readers. Not as strong at near as multifocal. Premium cost.</p>
            <p><strong>Best for:</strong> Active patients who use computers, cook, and drive - and who value visual quality over total glasses independence.</p>
          </div>
        </div>
      </section>

      {/* MULTIFOCAL */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Multifocal <strong>Lens</strong></h2>
          <p className="lens-tagline">The closest to glasses-free at all distances. With tradeoffs.</p>
          <p>
            Multifocal lenses split incoming light to create multiple focal points - distance, intermediate, and near - simultaneously. The result: many patients rarely or never need glasses for any task.
          </p>
          <p>
            The PanOptix trifocal by Alcon provides three distinct focal points: distance, 60 cm (intermediate), and 40 cm (near). The newer PanOptix Pro uses the same trifocal optic in a material with enhanced UV and blue-violet light filtering. I was the first surgeon in the Coachella Valley to implant the PanOptix Pro. For patients with healthy eyes and realistic expectations, these lenses can genuinely transform daily life.
          </p>
          <p>
            But here's the tradeoff nobody mentions in the marketing: splitting light means each focal point gets less of it. The diffractive rings on the lens surface create concentric zones that distribute approximately 88% of available light across the three focal points. Some patients notice halos or rings around lights at night, or a slight reduction in contrast, especially in dim conditions. For most people, the brain adapts through a process called neuroadaptation over weeks or months and it stops being noticeable. For a small percentage, it remains bothersome.
          </p>
          <p>
            Not every eye is a good candidate for a multifocal. Corneal irregularity, dry eye disease, epiretinal membrane, macular degeneration, and significant astigmatism can all limit the visual quality a multifocal lens can deliver. I evaluate each of these factors carefully before recommending a multifocal, because putting the right lens in the wrong eye is worse than not offering it at all.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/lifestyle-couple-walking-dog-night.jpg"
              alt="Couple walking their dog at night - clear night vision matters for everyday moments"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="content-image-caption">Night vision quality matters for everyday moments - a key consideration when choosing your lens.</div>
          </div>
          <p>
            I don't discourage multifocal lenses. I recommend them often, and most patients are thrilled. But I want every patient to understand that the trade for glasses-freedom is a slight change in visual quality - particularly at night. If that sounds acceptable, it probably is. If it sounds concerning, we should talk about it.
          </p>
          <div className="lens-tradeoff">
            <p><strong>What you get:</strong> The best chance at functional vision at all distances without glasses. Freedom for reading, driving, and everything in between.</p>
            <p><strong>What you accept:</strong> Possible halos and glare, especially at night. Slight contrast reduction in dim light. Premium cost. Not ideal for patients with other eye conditions (macular degeneration, advanced glaucoma).</p>
            <p><strong>Best for:</strong> Patients who strongly dislike wearing glasses, have healthy eyes beyond cataracts, and are comfortable with the adaptation period.</p>
          </div>
        </div>
      </section>

      {/* PATIENT IMAGE */}
      <section className="section section-warm" style={{paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/patient-elderly-man-calm.jpg"
              alt="Patient feeling reassured about his lens implant options"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* HOW I THINK ABOUT IT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How I <strong>Think About It</strong></h2>
          <p>
            When I sit with a patient and we talk about lenses, I'm not thinking about what's newest or most expensive. I'm thinking about their life. How they spend their day. What frustrates them about their current vision. What they're afraid of losing.
          </p>
          <p>
            Some of my most satisfied patients chose the simplest lens - because it was the right one for them. Lens selection is not about maximizing features. It's about minimizing the gap between what you expect and what you experience.
          </p>
          <p>
            If you leave a consultation feeling confused or pressured, that's not a reflection of you - it's a sign the conversation wasn't focused on the right things.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Cataract surgery is not just removing opacity. It's negotiating identity, habits, and expectations. Patients are choosing between versions of their future self. Education isn't about listing options - it's about giving permission to choose the one that fits.</em>
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>If you're still learning about cataracts themselves, start here.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>The lens matters. So does the person putting it in. Here's how to evaluate.</p>
            </Link>
            <Link href="/insights/the-reader-who-almost-gave-up-her-books" className="related-card">
              <h3>The Reader Who Almost Gave Up Her Books</h3>
              <p>A story about a patient who didn't know she had a choice - until someone told her.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
