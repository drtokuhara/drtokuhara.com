import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Toric Lens Implants: Reducing Astigmatism During Cataract Surgery | Dr. Keith Tokuhara',
  description: 'Most patients have heard they have astigmatism but don\'t understand how it affects cataract surgery. A cataract surgeon with 20,000+ procedures explains how toric lenses reduce astigmatism and who benefits most.',
  alternates: { canonical: '/insights/toric-lens-astigmatism' },
  openGraph: {
    title: 'Toric Lens Implants: Reducing Astigmatism During Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Astigmatism doesn\'t have to mean blurry vision after cataract surgery. Learn how toric lenses work, who benefits most, and why surgical precision matters.',
    url: 'https://drtokuhara.com/insights/toric-lens-astigmatism',
  },
};

const jsonLd = [
  articleSchema({
    title: 'Toric Lens Implants: Reducing Astigmatism During Cataract Surgery',
    description: 'Most patients have heard they have astigmatism but don\'t understand how it affects cataract surgery. A cataract surgeon with 20,000+ procedures explains how toric lenses reduce astigmatism and who benefits most.',
    slug: '/insights/toric-lens-astigmatism',
    datePublished: '2026-05-17',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Toric Lens Implants', href: '/insights/toric-lens-astigmatism' },
  ]),
];

export default function InsightToricLensAstigmatism() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-lens-refraction-v2.mp4"
        poster="/media/stock-couple-bar-golf-view.jpg"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Lens Selection</span>
          <h1>Toric Lens Implants: Reducing Astigmatism <strong>During Cataract Surgery</strong></h1>
          <p className="page-hero-sub">Most patients have been told they have astigmatism. Very few understand what it actually means for their cataract surgery, or that there is a way to reduce it at the same time.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Almost every week, a patient sits down across from me and says something like, "I know I have astigmatism, I've had it forever." When I ask what that means to them, most pause. They know it is a thing. They know it is on their glasses prescription. They know someone told them about it years ago. But what it actually is, how it affects their vision, and what it means now that they need cataract surgery? That part is usually a blank.
          </p>
          <p>
            It is one of the most common conditions in ophthalmology, and one of the least well explained. So before we talk about toric lenses or surgical options, let me start where I start with my patients: with what astigmatism actually is.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Astigmatism <strong>Actually Is</strong></h2>
          <p>
            The simplest way I explain it: a perfectly round cornea focuses light like a basketball. Every curve is the same, so light converges to a single point. With astigmatism, the cornea is shaped more like a football. It has one curve that is steeper and another that is flatter. Light passing through that surface does not land in one clean focal point. It spreads. The result is blur, not the kind you get from nearsightedness or farsightedness alone, but a smearing quality, like looking through glass that is slightly warped.
          </p>
          <p>
            Most people have had this their entire lives. Glasses and contact lenses compensate for it easily, so it never felt like a problem. But when a cataract develops and the natural lens inside the eye has to be replaced, astigmatism suddenly becomes part of the surgical equation.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Removing the cataract is only half the job. If the cornea has significant astigmatism and it goes unaddressed, vision will still be blurry at distance, even after a technically perfect surgery. The new lens is clear, but the light reaching it is still being distorted by the corneal shape.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How Toric Lenses <strong>Work</strong></h2>
          <p>
            A toric intraocular lens is engineered with built-in astigmatism reduction. Unlike a standard lens, which has uniform power across its surface, a toric lens has different powers along different axes. When placed inside the eye and precisely aligned to the corneal astigmatism, it compensates for the corneal shape, bringing light closer to a single focal point.
          </p>
          <p>
            The key word is "reduces." A toric lens reduces astigmatism. It does not eliminate it entirely. In most cases, the reduction is dramatic, enough that patients notice a meaningful improvement in distance clarity without glasses. But biology is not engineering. There is always some residual astigmatism possible, even after a well-planned, well-executed surgery. I make sure my patients understand that upfront. Not to lower expectations, but to set honest ones.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Who Benefits <strong>Most</strong></h2>
          <p>
            Not every patient with astigmatism needs a toric lens. Generally, I start considering a toric when corneal astigmatism is around 0.75 diopters or more. Below that, the visual impact is often minimal, and a standard lens may be perfectly adequate. Above that threshold, the difference a toric makes becomes increasingly noticeable.
          </p>
          <p>
            But the amount of astigmatism is only part of the picture. The regularity of the astigmatism matters just as much. A patient with clean, symmetric corneal astigmatism, the classic "football shape," is an excellent toric candidate. A patient whose astigmatism is irregular, perhaps from prior radial keratotomy, keratoconus, or significant corneal scarring, may not benefit from a standard toric approach. Irregular astigmatism does not follow the predictable pattern that a toric lens is designed to address.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The best candidates for a toric lens are patients with regular corneal astigmatism, a healthy ocular surface, and realistic expectations. The lens is a precision tool. It works best when the eye it is going into behaves predictably.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Alignment <strong>Precision Matters</strong></h2>
          <p>
            A toric lens has to be rotationally aligned to work. If the astigmatism in the cornea runs along one axis, the corrective power in the lens must line up with that same axis. Even a few degrees of misalignment reduces the lens's effectiveness. At 10 degrees off, roughly a third of the corrective effect is lost. At 30 degrees, it is essentially neutralized.
          </p>
          <p>
            This is where surgical experience becomes critical. Marking the eye, using intraoperative aberrometry like the ORA system to verify alignment in real time, understanding how different incision locations affect the final astigmatic outcome, these are the details that separate a good toric result from a disappointing one. Over 20,000 surgeries, I have developed a deep respect for how much these fine details matter. The technology is excellent, but the surgeon's hands and judgment are what make it work.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Toric Combined with <strong>Extended Range</strong></h2>
          <p>
            One of the more exciting developments in recent years is the availability of toric lenses combined with Extended Depth of Focus technology. These lenses reduce astigmatism and extend the range of vision, giving patients functional clarity at distance and intermediate, and sometimes near, all in one implant.
          </p>
          <p>
            Not everyone is a candidate for this combination. The eye's surface health has to be good. The astigmatism needs to be regular and within the treatable range. The patient's expectations need to be aligned with what the technology can realistically deliver. When all of those factors line up, the results can be remarkable. When they do not, a toric monofocal may be the smarter, more predictable choice.
          </p>
          <p>
            That decision is one I make with the patient, not for the patient. The measurements guide us. The conversation finalizes it.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What I Tell <strong>My Patients</strong></h2>
          <p>
            Addressing astigmatism during cataract surgery is one of the most impactful upgrades available to patients today. For decades, astigmatism was just something people lived with. You had glasses, the glasses handled it, and that was that. But now, during a surgery you are already having, there is an opportunity to reduce that astigmatism in a way that meaningfully decreases your dependence on glasses for distance vision.
          </p>
          <p>
            For the right patient, a toric lens can change the daily experience of seeing. Driving without distance glasses. Watching television clearly. Looking across a room and seeing faces in focus. These are not small things.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Astigmatism used to be something patients simply accepted. "That's just how my eyes are." Now, during cataract surgery, there is a real opportunity to reduce it. Not a guarantee of perfection, but a meaningful, measurable improvement that most patients notice immediately.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I think about how many patients spent decades being told "you have astigmatism" as though it were a permanent sentence. A fixed characteristic of their eyes that could never change. And for most of their lives, that was true. Glasses compensated, but the underlying shape of the cornea was what it was. Now, during a surgery they are already planning, we can address it directly. Not perfectly, not in every case, but in a way that would have seemed remarkable just a generation ago. The option exists. The conversation is worth having. And for many patients, the result is one of the most satisfying parts of their entire cataract surgery experience.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lens Implants Worth It?</h3>
              <p>An honest reflection on premium versus standard lens implants and what the answer depends on.</p>
            </Link>
            <Link href="/insights/the-lens-nobody-talks-about" className="related-card">
              <h3>The Lens Nobody Talks About</h3>
              <p>Why the most expensive option is not always the right one, and the quiet power of a well-chosen monofocal.</p>
            </Link>
            <Link href="/insights/three-things-patients-say" className="related-card">
              <h3>Three Things Patients Say That Tell Me Which Lens</h3>
              <p>Your words tell me more than any chart. How a few key phrases guide lens selection.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>The Standard Lens Is Not a Consolation Prize</h3>
              <p>Why choosing the standard lens is sometimes the smartest, most considered decision a patient can make.</p>
            </Link>
            <Link href="/insights/what-is-ora-machine" className="related-card">
              <h3>What Is the ORA Machine?</h3>
              <p>How intraoperative aberrometry helps verify lens power and alignment in real time during surgery.</p>
            </Link>
            <Link href="/insights/how-to-choose-a-cataract-surgeon" className="related-card">
              <h3>How to Choose a Cataract Surgeon</h3>
              <p>What to look for, what to ask, and why experience with complex cases matters more than you think.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
