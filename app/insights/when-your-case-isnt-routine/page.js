import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Complex Cataract Surgery: When Your Case Isn\'t Routine - Dr. Keith Tokuhara',
  description: 'Not every cataract surgery is straightforward. Weak zonules, prior eye surgery, trauma, and other factors can make your case complex. Here is how an experienced surgeon approaches cases other doctors refer out.',
  keywords: ['complex cataract surgery', 'complicated cataract', 'weak zonules', 'prior eye surgery cataract', 'cataract referral', 'revision cataract surgery', 'secondary lens implant', 'ophthalmologist Rancho Mirage', 'cataract surgeon complex cases'],
  alternates: { canonical: '/insights/when-your-case-isnt-routine' },
  openGraph: {
    title: 'Complex Cataract Surgery: When Your Case Isn\'t Routine | Dr. Keith Tokuhara',
    description: 'Not every cataract surgery is straightforward. Here is how an experienced surgeon approaches the cases other doctors refer out.',
    url: 'https://drtokuhara.com/insights/when-your-case-isnt-routine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complex Cataract Surgery: When Your Case Isn\'t Routine',
    description: 'Not every cataract surgery is straightforward. Here is how an experienced surgeon approaches the cases other doctors refer out.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a cataract surgery case complex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cataract surgery case becomes complex when factors beyond the cataract itself affect the surgical plan. Common examples include weak or missing zonules (the tiny fibers that hold the lens in place), very dense or brunescent cataracts that are harder to remove, prior eye surgeries such as retina repair or glaucoma procedures, trauma to the eye, small pupils that limit the surgeon\'s view, and conditions like pseudoexfoliation or Marfan syndrome that weaken the support structures of the lens. Each of these requires a different approach and additional surgical techniques.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still have cataract surgery if my case is complicated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most complex cataract cases can still be treated surgically. The key difference is that the surgery requires a surgeon with experience managing the specific complication. Techniques like capsular tension rings, iris expansion devices, and sutured or scleral-fixated lens implants allow experienced surgeons to safely operate on eyes that less experienced surgeons might decline. The goal is the same: clear vision with a stable lens implant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do some surgeons refer out complex cataract cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complex cataract cases carry higher surgical risk and require techniques that are not part of every surgeon\'s regular practice. A surgeon who sees straightforward cataracts most of the time may not have the experience or comfort level to manage intraoperative surprises like a broken capsule, a dropped lens fragment, or an eye that has been structurally altered by prior surgery. Referring the case to a surgeon who handles these situations regularly is a responsible decision. It is not a failure. It is good judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a secondary lens implant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A secondary lens implant is an artificial lens placed in the eye after the original lens implant has dislocated, was never placed during the first surgery, or needs to be replaced. This can happen months or years after the original cataract surgery. The new lens may be sutured to the sclera (the white wall of the eye), fixated using the Yamane technique (a sutureless flanged approach), or placed in the anterior chamber, depending on the anatomy of the eye and what structures are available for support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my cataract case is complex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your surgeon should tell you if your case involves additional risk factors. Signs that your case may be complex include a history of prior eye surgery (retina, glaucoma, corneal transplant), known conditions like pseudoexfoliation, Marfan syndrome, or a history of eye trauma, a very dense or mature cataract, difficulty dilating the pupil, or if another surgeon has declined to operate or recommended a specialist. If you have been told your case is not straightforward, seeking a consultation with a surgeon experienced in complex cases is a reasonable next step.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Complex Cataract Surgery: When Your Case Isn\'t Routine',
    description: 'Not every cataract surgery is straightforward. Here is how an experienced surgeon approaches the cases other doctors refer out.',
    slug: '/insights/when-your-case-isnt-routine',
    datePublished: '2026-06-07',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When Your Case Isn\'t Routine', href: '/insights/when-your-case-isnt-routine' },
  ]),
  faqSchema,
];

export default function InsightComplexCataractSurgery() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-precision-instrument.mp4"
        poster="/media/ambient-desert-blue-hour.mp4"
        overlayOpacity={0.6}
        overlayColor="10, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Complex Cases</span>
          <h1>Complex Cataract Surgery: <strong>When Your Case Isn't Routine</strong></h1>
          <p className="page-hero-sub">Not every eye follows the textbook. Some cases require a surgeon who knows what to do when the plan changes.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="June 7, 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            He had been referred by another ophthalmologist. The note was brief: "Dense cataract, weak zonules, history of retina surgery. I am not comfortable operating on this eye." The patient was understandably anxious. He had been told he needed cataract surgery, and then told that his surgeon would not do it. He wanted to know if anyone could.
          </p>
          <p>
            I see patients like this regularly. Not because their cataracts are unusual. But because something about their eyes makes the surgery more demanding than a routine case. And in those situations, experience is the difference between a good outcome and a complication.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Makes a Case <strong>Complex</strong></h2>
          <p>
            Most cataract surgery is straightforward. The lens is cloudy. The surgeon removes it with ultrasound energy and places a clear artificial lens. The patient sees better the next day. This is the experience for the vast majority of people.
          </p>
          <p>
            But some eyes do not cooperate that cleanly. The structures that hold the lens in place, called zonules, may be weak or partially missing. The cataract itself may be extremely dense, requiring more energy and more time to break apart. The pupil may not dilate well, limiting what the surgeon can see and access. There may be scar tissue from prior surgery, or the eye may have been structurally altered by trauma, retina repair, or a glaucoma procedure.
          </p>
          <p>
            Each of these factors changes the surgical approach. Sometimes dramatically. A case that would normally take 15 minutes might take 45. Techniques that are optional in a routine case become essential. And the margin for error gets smaller.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Complex does not mean impossible. It means the surgeon needs a broader set of tools, more experience managing the unexpected, and the judgment to adapt the plan as the case unfolds.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Eyes Other Surgeons <strong>Refer Out</strong></h2>
          <p>
            There is no shame in a surgeon referring a case they are not comfortable with. In fact, it is one of the most responsible things a surgeon can do. The problem is when the patient is left without a clear next step. They know they need surgery. They know their surgeon will not do it. But no one has explained what happens next.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/complex-cataract-surgical-planning.jpg"
              alt="Surgeon reviewing detailed eye imaging and surgical planning for a complex cataract case"
              width={900}
              height={506}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Every complex case begins long before the operating room, with careful review of imaging, anatomy, and surgical options.</p>
          </div>

          <p>
            The most common reasons a cataract case gets referred to a specialist include:
          </p>
          <p>
            <strong>Weak or missing zonules.</strong> The zonules are tiny fibers, thinner than a human hair, that suspend the lens inside the eye like a trampoline. When these fibers are weakened by conditions like pseudoexfoliation, Marfan syndrome, or simply advanced age, the lens can shift during surgery. Managing this requires capsular tension rings, sometimes sutured in place, and a careful surgical tempo that avoids stressing the remaining support.
          </p>
          <p>
            <strong>Prior eye surgery.</strong> An eye that has had retina surgery, glaucoma drainage devices, or a corneal transplant presents a completely different surgical environment. The anatomy has been altered. Instruments that work fine in a virgin eye may not fit the same way. Vitreous gel may be in abnormal positions. These cases require the surgeon to adjust technique on the fly, drawing on experience rather than routine.
          </p>
          <p>
            <strong>Dense or brunescent cataracts.</strong> A cataract that has been left to mature for years becomes extremely hard, sometimes brown or even white. These cataracts require significantly more ultrasound energy to remove, which increases the risk of corneal damage and other complications. They also tend to have weaker capsular support, making lens placement more precarious.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/complex-cataract-capsular-support.jpg"
              alt="Illustration showing the delicate capsular support structures inside the eye during cataract surgery"
              width={900}
              height={506}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">The capsular bag and zonules form the support system for the lens implant. When these structures are compromised, the surgeon needs a backup plan.</p>
          </div>

          <p>
            <strong>Small pupils.</strong> If the pupil does not dilate adequately, the surgeon is operating through a smaller window with limited visibility. Iris expansion devices and careful pharmacologic dilation can help, but these add complexity and time.
          </p>
          <p>
            <strong>Trauma history.</strong> An eye that sustained blunt force trauma years ago may have a fractured lens capsule, subluxated (partially dislocated) lens, or scarring that is not apparent until the surgery begins.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why Training <strong>Matters Here</strong></h2>
          <p>
            I trained in cataract and anterior segment surgery under Dr. Howard Gimbel during my residency at Loma Linda University. Dr. Gimbel is one of the pioneers of modern cataract surgery and was among the first to develop continuous curvilinear capsulorhexis, the technique that made safe, predictable cataract surgery possible worldwide. Training under him meant learning not just how to do routine cases well, but how to think through cases that deviated from the plan.
          </p>
          <p>
            After residency, I completed a retina fellowship. That gave me a deep understanding of the back of the eye, which is critical when managing complex anterior segment cases. A dislocated lens fragment that falls into the vitreous cavity. An eye with silicone oil from a prior retina surgery. A patient with diabetic retinopathy whose retina needs consideration before and after cataract surgery. These situations require knowledge of both the front and back of the eye, and the ability to manage both in a single surgical plan.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"He told me no one could help. That I would just have to live with the blurry vision. I'm glad I got a second opinion."</p>
          </div></BlurReveal>

          <p>
            This combination of training is not common. Most cataract surgeons do not have retina fellowship training. Most retina surgeons do not perform cataract surgery regularly. Having both perspectives means I can see the whole picture and plan for contingencies that a surgeon with only one perspective might not anticipate.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Happens When a <strong>Lens Dislocates</strong></h2>
          <p>
            One of the most common complex scenarios I manage is a dislocated lens implant. This is a patient who had cataract surgery months or years ago, and over time the artificial lens has shifted out of position. It may tilt, decenter, or fall entirely into the vitreous cavity.
          </p>
          <p>
            This happens because the capsular bag that holds the lens can weaken over time, especially in patients with pseudoexfoliation or a history of trauma. The lens implant was placed correctly during the original surgery, but the support structure deteriorated.
          </p>
          <p>
            The solution is a secondary lens implant. This means removing the dislocated lens and either repositioning it or replacing it with a new lens that is fixated to the wall of the eye. Techniques like the Yamane method, which uses flanged haptics placed through tiny scleral tunnels, allow us to secure a lens in an eye that has no capsular support at all.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/complex-cataract-experience-matters.jpg"
              alt="Close-up of an ophthalmologist's hands performing precise microsurgery, representing the skill required for complex cataract cases"
              width={900}
              height={506}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Complex cases demand microsurgical precision. The techniques used in these situations are not part of routine cataract surgery training.</p>
          </div>

          <p>
            These are not emergencies in most cases, but they do need to be addressed. A dislocated lens causes blurry vision, double images, and sometimes inflammation. The longer it remains out of position, the more difficult the correction can become.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Conversation <strong>Patients Deserve</strong></h2>
          <p>
            When a patient comes to me after being told their case is too complex for their original surgeon, the first thing I do is explain what is actually going on. Not in medical jargon. In plain language. What makes their eye different. What additional steps the surgery will require. What the realistic expectations are for recovery and outcome.
          </p>
          <p>
            Complex does not mean risky in the sense of "something bad will probably happen." It means the margin is narrower, the technique needs to be adapted, and the surgeon needs to be prepared for multiple contingencies. With experience and the right approach, the outcomes for complex cases are very good. Not every eye achieves 20/20 vision, especially when there are other conditions like macular degeneration or diabetic retinopathy, but almost every patient sees meaningfully better after surgery.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The worst outcome is not a complex surgery. It is telling a patient nothing can be done when, in the right hands, something can.</strong></p>
          </div></BlurReveal>

          <p>
            I believe patients deserve an honest assessment of what is possible. If I cannot help, I say so. But more often than not, there is a path forward. It just requires a surgeon who has seen enough variation to know what that path looks like.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">When to Seek a <strong>Second Opinion</strong></h2>
          <p>
            If you have been told your cataract case is too complicated, or if a surgeon has declined to operate, it does not mean surgery is off the table. It means you should consult with a surgeon who regularly handles complex cases.
          </p>
          <p>
            Signs that a second opinion may be valuable:
          </p>
          <ul style={{marginBottom: '24px'}}>
            <li>Your surgeon mentioned weak zonules, a small pupil, or a very dense cataract</li>
            <li>You have a history of prior eye surgery (retina, glaucoma, corneal transplant, LASIK, or RK)</li>
            <li>Your lens implant from a previous cataract surgery has shifted or dislocated</li>
            <li>You were told that nothing can be done for your vision</li>
            <li>You have a systemic condition like Marfan syndrome, pseudoexfoliation, or a history of uveitis</li>
          </ul>
          <p>
            A consultation does not commit you to surgery. It gives you information. And in complex cases, information is the most important thing you can have.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h3 className="section-title-sm">Related <strong>Reading</strong></h3>
          <ul className="insight-related-list">
            <li><Link href="/complex-cases">Complex Cataract Cases at Desert Vision Center</Link></li>
            <li><Link href="/insights/when-cataract-surgery-goes-wrong">When Cataract Surgery Goes Wrong</Link></li>
            <li><Link href="/insights/second-opinion-cataract-surgery">Getting a Second Opinion Before Cataract Surgery</Link></li>
            <li><Link href="/insights/the-capsule-is-sacred">The Capsule Is Sacred</Link></li>
            <li><Link href="/insights/second-opinion-that-changed-everything">A Second Opinion That Changed Everything</Link></li>
            <li><Link href="/yamane-technique">Dislocated Lens and the Yamane Technique</Link></li>
            <li><Link href="/insights/what-happens-if-i-wait-too-long">What Happens If I Wait Too Long?</Link></li>
            <li><Link href="/insights/glaucoma-and-cataracts">Glaucoma and Cataracts: Managing Two Conditions at Once</Link></li>
            <li><Link href="/contact">Schedule a Consultation</Link></li>
          </ul>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container content-narrow text-center">
          <h2>Have You Been Told Your Case Is Complex?</h2>
          <p>If another surgeon has referred you out or declined to operate, a consultation with a surgeon experienced in complex cataract cases can give you clarity about your options.</p>
          <p><strong>Desert Vision Center</strong><br />
          35900 Bob Hope Dr, Suite 175<br />
          Rancho Mirage, CA 92270</p>
          <p>Serving Rancho Mirage, Palm Desert, Indian Wells, La Quinta, Palm Springs, and the Coachella Valley.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Schedule Your Consultation</Link>
        </div>
      </section>
    </>
  );
}
