import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import {
  ScrollReveal,
  VideoBackground,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';
import RelatedComplexCases from '../../components/RelatedComplexCases';
import AuthorByline from '../../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Cataract Surgery with Uveitis',
    description: 'Uveitis changes everything about cataract surgery. Dr. Tokuhara explains why these cases require specialized management and what patients should know before proceeding.',
    slug: '/complex-cases/uveitis',
    datePublished: '2026-05-20',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Uveitis', href: '/complex-cases/uveitis' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery with Uveitis - Desert Vision Center',
  description: 'Uveitis patients develop cataracts earlier and face higher surgical risks. Dr. Tokuhara explains the specialized approach required for safe, effective cataract surgery in eyes with a history of uveitis.',
  alternates: { canonical: '/complex-cases/uveitis' },
  openGraph: {
    title: 'Cataract Surgery with Uveitis | Dr. Keith Tokuhara',
    description: 'Inflammation changes everything about cataract surgery. Expert management of uveitic cataracts at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/uveitis',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I have cataract surgery if I have uveitis?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but the inflammation must be completely quiet for at least three months before surgery. Operating on an eye with active uveitis dramatically increases the risk of complications including severe postoperative inflammation, cystoid macular edema, and poor visual outcomes. The timing of surgery is critical.' } },
    { '@type': 'Question', name: 'Why do uveitis patients develop cataracts earlier?', acceptedAnswer: { '@type': 'Answer', text: 'Chronic intraocular inflammation directly damages the lens, causing it to become cloudy faster than normal aging would. Additionally, the corticosteroid medications used to control uveitis, whether eye drops, injections, or oral steroids, are themselves a well-known cause of cataract formation. The combination of inflammation and treatment accelerates cataract development, often by decades.' } },
    { '@type': 'Question', name: 'How long should uveitis be quiet before cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'The standard guideline is at least three months of complete inflammatory control, meaning zero cells in the anterior chamber and minimal vitreous inflammation, before scheduling surgery. Some cases with a history of severe or recurrent flares may benefit from even longer quiet periods. This reduces the risk of a dangerous postoperative inflammatory rebound.' } },
    { '@type': 'Question', name: 'What are the risks of cataract surgery with uveitis?', acceptedAnswer: { '@type': 'Answer', text: 'Uveitic eyes face higher rates of postoperative inflammation, cystoid macular edema, posterior capsule opacification, elevated eye pressure, and inflammatory membrane formation. Intraoperatively, posterior synechiae (scar tissue binding the iris to the lens), small pupils, and fragile iris tissue create additional surgical challenges. With proper preoperative preparation and aggressive perioperative anti-inflammatory treatment, most patients still achieve good visual outcomes.' } },
  ],
};

export default function UveitisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-crystal-alignment.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <h1>Cataract Surgery with <strong>Uveitis</strong></h1>
          <p className="page-hero-sub">Inflammation changes everything about cataract surgery. These eyes need a different level of preparation, technique, and follow-up.</p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 20, 2026" />

          <h2 className="section-title">Why Uveitis Makes Cataract Surgery <strong>Different</strong></h2>
          <p className="prose">
            Uveitis is inflammation inside the eye. It can affect different structures: the iris and ciliary body (anterior uveitis), the vitreous (intermediate uveitis), the retina and choroid (posterior uveitis), or all of the above (panuveitis). It has many causes, from autoimmune conditions to infections, and sometimes the cause is never identified.
          </p>
          <p className="prose">
            What matters for cataract surgery is this: uveitis patients develop cataracts earlier than other people their age, often decades earlier. The inflammation itself damages the lens, and the corticosteroid medications used to control the inflammation also cause cataracts. Posterior subcapsular cataracts, the type that forms at the back of the lens and creates significant glare and reading difficulty, are particularly common in uveitis patients.
          </p>
          <p className="prose">
            The result is a younger patient population with cataracts that are visually significant, eyes that have been through repeated inflammatory episodes, and anatomy that has been altered by scar tissue, medications, and chronic disease. These are not routine cataract cases by any measure.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-family-golden-hour-walk.jpg"
              alt="Family walking together during golden hour, enjoying clear vision and time outdoors"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">The Three-Month Rule: <strong>Timing Is Everything</strong></h2>
          <p className="prose">
            The single most important factor in a successful uveitic cataract surgery is timing. The eye must be completely quiet, with zero inflammatory cells in the anterior chamber and minimal vitreous haze, for at least three months before surgery can be safely scheduled.
          </p>
          <p className="prose">
            This is not a suggestion. It is the standard of care, supported by decades of evidence. Operating on an eye with active or recently active uveitis is one of the most predictable ways to cause a catastrophic postoperative inflammatory response. The surgical trauma of cataract extraction itself triggers inflammation even in healthy eyes. In an eye that is already primed for inflammation, the response can be severe: dense fibrin formation in the anterior chamber, aggressive cystoid macular edema, hypotony, and in worst cases, permanent vision loss.
          </p>
          <p className="prose">
            Some patients feel frustrated by this waiting period, especially when their cataract is significantly limiting their vision. I understand that frustration. But rushing surgery in a uveitic eye is one of the few decisions in cataract surgery that can turn a difficult case into a disaster. Patience here is not conservative practice. It is the right practice.
          </p>
          <p className="prose">
            For patients with a history of severe or recurrent flares, I may wait even longer than three months. Each eye is different, and the decision is guided by the specific type of uveitis, its response to treatment, and the patient&rsquo;s overall inflammatory control.
          </p>

          <h2 className="section-title">What Makes These Eyes <strong>Surgically Challenging</strong></h2>
          <p className="prose">
            Even when the inflammation is well controlled, uveitic eyes carry the scars of their disease. Several features make surgery more technically demanding:
          </p>
          <ul className="content-list">
            <li><strong>Posterior synechiae:</strong> Scar tissue forms between the iris and the lens capsule during inflammatory episodes. These adhesions bind the iris to the lens and prevent normal pupil dilation. Before I can safely remove the cataract, these synechiae must be carefully broken using specialized instruments, without damaging the fragile lens capsule underneath.</li>
            <li><strong>Small, poorly dilating pupils:</strong> Chronic inflammation and synechiae can permanently limit how far the pupil opens. A normal cataract surgery requires good pupil dilation to access the lens. In uveitic eyes, I frequently need to use iris retractor hooks or pupil expansion rings to safely widen the pupil during the procedure.</li>
            <li><strong>Fragile iris tissue:</strong> Repeated inflammation makes the iris tissue atrophic and vascular. It bleeds more easily and tears more readily than healthy iris tissue. Every intraoperative maneuver must account for this fragility.</li>
            <li><strong>Lens capsule weakness:</strong> In some uveitic eyes, particularly those with long-standing disease or prior vitrectomy, the lens capsule and zonules (the fibers holding the lens in place) may be weakened. This affects how the surgery is performed and which lens implant techniques are appropriate.</li>
            <li><strong>Posterior capsule opacification:</strong> Uveitic eyes develop posterior capsule opacification (clouding behind the lens implant) at much higher rates than normal eyes. This may require a YAG laser capsulotomy sooner after surgery than would typically be expected.</li>
          </ul>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-seniors-outdoor-dining.jpg"
              alt="Friends sharing a meal outdoors, enjoying quality time together"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">My Approach: <strong>Before, During, and After</strong></h2>

          <h3 className="subsection-title">Before Surgery</h3>
          <p className="prose">
            Preparation for uveitic cataract surgery starts well before the day of the procedure. In addition to confirming at least three months of complete inflammatory control, I coordinate with the patient&rsquo;s uveitis specialist or rheumatologist when one is involved in their care.
          </p>
          <p className="prose">
            I start an aggressive perioperative anti-inflammatory regimen before surgery. This typically includes:
          </p>
          <ul className="content-list">
            <li>Topical corticosteroid drops (such as prednisolone acetate) started one week before surgery, dosed four times daily</li>
            <li>Topical NSAID drops (such as ketorolac or nepafenac) started one week before surgery to provide additional protection against postoperative cystoid macular edema</li>
            <li>For patients with herpetic uveitis (caused by herpes simplex or herpes zoster), antiviral medication is started before surgery and continued through the postoperative period to prevent reactivation</li>
          </ul>
          <p className="prose">
            If a patient has a history of recurrent cystoid macular edema, I may also coordinate an intravitreal steroid injection (such as Ozurdex) either before or at the time of surgery to provide sustained anti-inflammatory coverage during the critical postoperative healing window.
          </p>

          <h3 className="subsection-title">During Surgery</h3>
          <p className="prose">
            The surgical technique must be adapted to the specific challenges present in each eye. Synechiolysis, the careful separation of iris adhesions from the lens capsule, is performed at the beginning of the case using viscoelastic and fine instruments. After synechiolysis, I use iris retraction to maintain adequate pupil dilation throughout the procedure. Depending on the anatomy, this may involve iris retractor hooks, a Malyugin ring, or a Visitec i-Ring, each chosen based on how the pupil and iris respond after the synechiae are released.
          </p>
          <p className="prose">
            The phacoemulsification itself requires a careful balance of efficiency and gentleness. Prolonged surgical time in a uveitic eye increases inflammation and bleeding. But rushing through adhesions or dense cortex risks capsule damage. I use lower fluidic settings and careful cortex removal, paying particular attention to the cortex that is often unusually adherent to the capsule in these eyes.
          </p>
          <p className="prose">
            Lens implant selection matters. In most uveitic eyes, I implant a standard one-piece acrylic lens in the capsular bag. Hydrophobic acrylic lenses are generally preferred over hydrophilic acrylic lenses in uveitic eyes because they accumulate fewer inflammatory deposits on their surface. I am cautious about multifocal or extended depth of focus lenses in patients with uveitis, because any postoperative inflammation or macular edema can compromise the optical performance of these premium lenses.
          </p>
          <p className="prose">
            At the end of the case, I ensure the anterior chamber is thoroughly cleaned of any residual lens material, viscoelastic, and inflammatory debris. Intracameral steroid or a subconjunctival steroid injection may be given at the conclusion of surgery for additional anti-inflammatory coverage.
          </p>

          <h3 className="subsection-title">After Surgery</h3>
          <p className="prose">
            Postoperative management in uveitic eyes is more intensive and longer than in routine cataract surgery. Where a typical cataract patient might taper off steroid drops over four to six weeks, uveitis patients often require a slower, more extended taper lasting two to three months or longer.
          </p>
          <p className="prose">
            I see uveitis patients more frequently in the early postoperative period, typically at day one, week one, and then every one to two weeks for the first month or two. I am watching closely for signs of inflammatory rebound, cystoid macular edema (which I monitor with OCT imaging), and elevated eye pressure from the steroid treatment.
          </p>
          <p className="prose">
            The steroid taper is guided by the eye&rsquo;s response, not a fixed schedule. If I see cells returning in the anterior chamber, the taper slows down or temporarily reverses. The goal is to get the eye through the healing period without a flare while also managing the side effects of prolonged steroid use, particularly elevated intraocular pressure.
          </p>

          <h2 className="section-title">The Uveitis Etiology <strong>Matters</strong></h2>
          <p className="prose">
            Not all uveitis is the same, and the underlying cause significantly influences surgical planning and expected outcomes:
          </p>
          <ul className="content-list">
            <li><strong>Fuchs heterochromic iridocyclitis</strong> is generally the most favorable scenario. These patients tend to have mild postoperative inflammation, and visual outcomes are typically excellent. The surgery is still technically different from a routine case, but the postoperative course is usually smoother.</li>
            <li><strong>Juvenile idiopathic arthritis (JIA)-associated uveitis</strong> is among the most challenging. These patients, often young, are at high risk for severe postoperative inflammation, membrane formation, and phthisis. Surgical planning is especially meticulous, and the postoperative anti-inflammatory regimen is aggressive.</li>
            <li><strong>Herpetic uveitis</strong> (HSV or VZV) requires antiviral prophylaxis perioperatively. Surgical stress can reactivate the virus, causing a devastating postoperative uveitic flare.</li>
            <li><strong>Sarcoidosis, Behcet disease, and other systemic autoimmune causes</strong> require coordination with your physician or rheumatologist to ensure all members of your healthcare team are on board and communicating for the best possible recovery from surgery.</li>
            <li><strong>Idiopathic uveitis,</strong> where no cause is identified despite workup, is managed based on the clinical behavior of the disease: how severe the flares are, how frequently they recur, and how the eye responds to treatment.</li>
          </ul>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-farmers-market.jpg"
              alt="Couple browsing a local farmers market, enjoying everyday activities with clear vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">What You Should <strong>Know</strong></h2>
          <p className="prose">
            If you have uveitis and are developing a cataract, the most important things to understand are:
          </p>
          <ul className="content-list">
            <li><strong>Your inflammation must be controlled first.</strong> No exceptions. If your eye is still flaring, the priority is getting the uveitis under control, not removing the cataract.</li>
            <li><strong>The surgery itself is usually successful.</strong> Most uveitis patients achieve good visual outcomes from cataract surgery when it is properly timed and managed. The path is just more involved than a routine case.</li>
            <li><strong>Recovery takes longer.</strong> Plan for a more intensive drop regimen and more frequent office visits in the weeks and months after surgery. This is normal for uveitic eyes and is part of protecting your result.</li>
            <li><strong>Premium lenses may not be appropriate.</strong> Multifocal and extended depth of focus lenses depend on precise optics that can be compromised by even mild postoperative inflammation or macular edema. A high-quality monofocal lens is often the safest choice for the best long-term outcome.</li>
            <li><strong>Your surgeon should have experience with uveitic cataracts.</strong> These cases require a different skill set and mindset than routine cataract surgery. Not every cataract surgeon manages uveitic eyes regularly.</li>
          </ul>
        </div>
      </section>

      <RelatedComplexCases current="uveitis" />
      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Have uveitis and need <strong>cataract surgery?</strong></h2>
          <p>These cases require careful timing, aggressive inflammation control, and experienced surgical management. Let&rsquo;s evaluate your eye and build the right plan.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
