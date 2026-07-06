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
  title: 'Why I Perform My Own Post-Op Care | Dr. Keith Tokuhara',
  description: 'Many cataract surgeons delegate post-operative care to other providers. Dr. Tokuhara explains why he performs his own post-op exams and what that continuity means for patient safety and outcomes.',
  keywords: ['cataract surgery post-op care', 'surgeon does own follow up', 'cataract surgery follow up appointments', 'who does post-op after cataract surgery', 'cataract surgeon continuity of care', 'co-management cataract surgery', 'cataract post-op exam'],
  alternates: { canonical: '/insights/why-i-do-my-own-post-op' },
  openGraph: {
    title: 'Why I Perform My Own Post-Op Care | Dr. Keith Tokuhara',
    description: 'A cataract surgeon explains why he does his own post-operative care instead of delegating it, and why that continuity matters for patients.',
    url: 'https://drtokuhara.com/insights/why-i-do-my-own-post-op',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why I Perform My Own Post-Op Care',
    description: 'Most cataract surgeons delegate post-op. Here is why I do not, and why it matters for your outcome.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who performs post-op care after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the surgeon and the practice model. Some cataract surgeons perform all of their own post-operative examinations. Others use a co-management arrangement where the referring optometrist handles some or all of the follow-up visits. Both approaches are legal, but they offer different levels of continuity. When the operating surgeon performs the post-op care, they can directly assess healing, detect subtle complications, and make real-time adjustments based on what they saw during surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is co-management in cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Co-management is an arrangement where the surgeon performs the cataract surgery and then transfers some or all of the post-operative care to another provider, usually the optometrist who referred the patient. The referring provider examines the patient at the standard follow-up intervals and communicates with the surgeon if any concerns arise. While this model is common and can work well, it introduces a layer of separation between the surgeon who knows exactly what happened during the procedure and the provider assessing the healing process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many post-op visits are needed after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard post-operative schedule includes a visit the day after surgery, another at one week, and a final visit at approximately one month. Some patients require additional visits depending on their healing, lens type, or any intraoperative findings. The first few visits are the most important because that is when complications like elevated pressure, inflammation, or wound issues are most likely to appear and most effectively treated.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does it matter if the surgeon does the post-op care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The surgeon who operated on your eye has firsthand knowledge of the procedure: how the capsule responded, whether there were any intraoperative findings, how the lens was positioned, and what to monitor during healing. That context shapes how they interpret post-operative findings. A subtle amount of inflammation that might look routine to an outside provider could signal something specific to the surgeon who was inside the eye. Continuity between surgery and follow-up allows for faster, more informed clinical decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara perform his own post-op care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara performs his own post-operative examinations for every cataract surgery patient. He sees each patient the day after surgery, at one week, and at the one-month mark, with additional visits as needed. This continuity of care ensures that the same surgeon who performed the procedure is the one evaluating the outcome and making any necessary adjustments.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Why I Perform My Own Post-Op Care',
    description: 'A cataract surgeon explains why he does his own post-operative care instead of delegating it, and why that continuity matters for patient safety and outcomes.',
    slug: '/insights/why-i-do-my-own-post-op',
    datePublished: '2026-06-28',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Why I Do My Own Post-Op', href: '/insights/why-i-do-my-own-post-op' },
  ]),
  faqSchema,
];

export default function InsightPostOpCare() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-twilight-v2.mp4"
        poster="/media/ambient-desert-blue-hour.mp4"
        overlayOpacity={0.6}
        overlayColor="10, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Trust &amp; Authority</span>
          <h1>Why I Perform My Own <strong>Post-Op Care</strong></h1>
          <p className="page-hero-sub">The surgeon who operated on your eye is the one who best understands what happened inside it. That knowledge should not leave the room.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="June 28, 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            A patient came to me for a second opinion. She had cataract surgery at another practice three weeks earlier. Her vision was not what she expected. She was frustrated, worried, and had questions.
          </p>
          <p>
            I asked her who she saw for her post-op visits.
          </p>
          <p>
            "My eye doctor," she said. "The one who referred me."
          </p>
          <p>
            "And the surgeon?"
          </p>
          <p>
            "I saw him the day of surgery. I have not seen him since."
          </p>
          <p>
            That is more common than most patients realize. In many cataract surgery practices, the surgeon performs the operation, sees the patient briefly the next day, and then transfers follow-up care to the referring optometrist. It is called co-management, and it is a standard part of how high-volume surgical practices operate. It is legal. It is efficient. And I understand why it exists.
          </p>
          <p>
            But I do not do it. I never have.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What <strong>Co-Management</strong> Means</h2>
          <p>
            When a patient is co-managed, the optometrist who referred them to the surgeon takes over part of the post-operative care. This usually means the one-week and one-month follow-up visits happen at the optometrist's office rather than the surgeon's. The surgeon receives reports. The optometrist bills for those visits.
          </p>
          <p>
            This model developed for practical reasons. Surgical practices that operate on dozens of patients per week need a way to manage follow-up volume. Referring optometrists benefit from maintaining their relationship with the patient. And patients sometimes prefer the convenience of going to a closer office.
          </p>
          <p>
            On paper, it works. But there is something lost in the transfer that most patients do not recognize until something goes differently than expected.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/surgeon-post-op-slit-lamp.jpg"
              alt="Dr. Tokuhara examining a patient at the slit lamp during a post-operative visit"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">The slit lamp examination after surgery reveals details that only make full sense to the surgeon who was inside the eye. Context from the operating room shapes everything about how post-operative findings are interpreted.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What the Surgeon <strong>Knows</strong></h2>
          <p>
            Every cataract surgery is its own story. Even routine cases have nuance. How the capsulorhexis behaved. Whether the zonules felt slightly loose. How the cortex cleared. Whether the lens seated perfectly on the first pass or required a small adjustment. Whether there was a micro-bleed from the iris or a brief spike in pressure at the end.
          </p>
          <p>
            None of these details appear in the operative note the way they live in the surgeon's memory. The report says "uncomplicated phacoemulsification with posterior chamber intraocular lens placement." That is accurate. But it does not capture the texture of the procedure.
          </p>
          <p>
            When I examine that same eye the next day, those details inform everything I see. A slightly deeper anterior chamber might mean the lens is positioned a fraction further back than usual, something I noticed during implantation. A trace of anterior chamber reaction might correlate with the additional manipulation the capsule required. A pressure reading of 24 might concern someone who does not know that the viscoelastic was thicker than usual because the case demanded it.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The surgeon who was inside your eye interprets post-operative findings differently than someone reading a chart. That difference is not trivial. It is clinical.</strong></p>
          </div></BlurReveal>

          <p>
            This is not a criticism of optometrists. They are excellent clinicians. But they are interpreting the healing of a procedure they did not perform, based on a summary they did not write, in an eye they did not operate on. They are working without the full context.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The First Week <strong>Matters Most</strong></h2>
          <p>
            Most complications after cataract surgery, if they are going to happen, show up in the first week. Elevated pressure. Persistent inflammation. A wound that is not sealing properly. A lens that has shifted. Cystoid macular edema starting to develop.
          </p>
          <p>
            These are not emergencies in most cases, but they are time-sensitive. Early detection means a simple intervention: adjusting drops, adding a medication, performing a minor procedure. Late detection means a bigger problem that is harder to reverse.
          </p>
          <p>
            When I see my patients during that first week, I am not just checking boxes on a post-op form. I am comparing what I see to what I expected based on the surgery. If a patient's pressure is elevated at one day, I know whether it is likely from retained viscoelastic, whether there was an intraoperative finding that predisposes to pressure issues, or whether this is something new that needs attention. That context changes the clinical decision.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/post-op-continuity-care.jpg"
              alt="A warm clinical examination room representing continuity of care between surgeon and patient"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Continuity of care means the same surgeon who operated sees every post-operative visit. It is not just convenience. It is a clinical advantage.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Relationship <strong>Continues</strong></h2>
          <p>
            There is also something that goes beyond clinical data. When I see a patient the day after surgery, they have questions. They want to know if everything went well. They want reassurance from the person who was there. They want to hear, from the surgeon, that the healing looks exactly as expected.
          </p>
          <p>
            When I see them at one week, the conversation shifts. Now we are talking about visual recovery. What they are noticing. What is still improving. Whether the lens choice is delivering what we discussed.
          </p>
          <p>
            At one month, we are confirming the final outcome. Measuring the refraction. Making sure the healing is complete. Discussing whether the second eye is ready, if applicable.
          </p>
          <p>
            That arc, from preoperative counseling through surgery through the final post-op, is one continuous thread. I was the one who explained the lens options. I was the one who performed the surgery. I should be the one who evaluates whether the outcome matches the plan. If something needs adjusting, I want to be the one making that call because I have the complete picture.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"I saw the same doctor every time. He knew exactly what happened and he could answer every question. That meant everything to me."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients <strong>Should Ask</strong></h2>
          <p>
            I tell patients that one of the most important questions to ask before cataract surgery is a simple one: "Who will I see after my surgery?"
          </p>
          <p>
            The answer tells you a lot about the practice. Not because co-management is wrong, but because it reveals the model. If you will be seeing a different provider for your follow-up visits, you should know that in advance. You should understand what happens if something comes up at a post-op visit and the surgeon is not in the room.
          </p>
          <p>
            Some patients are perfectly comfortable with co-management. Others want the reassurance of seeing their surgeon at every visit. Both preferences are valid. What matters is that you know the arrangement before surgery, not after.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/patient-surgeon-trust.jpg"
              alt="A patient and surgeon in conversation, representing the trust built through continuity of care"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">The trust between surgeon and patient does not end in the operating room. It extends through every follow-up visit.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why I <strong>Choose This</strong></h2>
          <p>
            Performing my own post-op care takes more of my time. It limits the number of surgeries I can perform in a given week compared to a surgeon who delegates all follow-up. I understand the economics of the other model. I simply believe the continuity is too valuable to trade away.
          </p>
          <p>
            I trained under <Link href="/gimbel-heritage">Howard Gimbel</Link>, one of the pioneers of modern cataract surgery. His approach to the patient relationship was that it began at the first consultation and continued long after surgery. He did not hand patients off. He followed them. That philosophy shaped how I practice, and it has not changed in more than twenty years of performing cataract surgery.
          </p>
          <p>
            Every patient I operate on is a patient I will see again. I will check their eye at one day, one week, and one month. If they have concerns at three months or six months, they come back to me. If they develop a posterior capsule opacification two years later and need a <Link href="/yag-laser-capsulotomy">YAG laser</Link>, I will be the one performing it.
          </p>
          <p>
            That is not a marketing decision. It is a clinical one. When I look into an eye I operated on, I see more than a post-operative exam. I see the entire story. And that story helps me take better care of the patient in front of me.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The surgeon who performed your surgery is the most qualified person to evaluate how your eye is healing. That is not a matter of preference. It is a matter of context, continuity, and clinical judgment.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h3 className="section-title-sm">Related <strong>Reading</strong></h3>
          <ul className="insight-related-list">
            <li><Link href="/insights/how-to-choose-a-cataract-surgeon">How to Choose a Cataract Surgeon</Link></li>
            <li><Link href="/insights/first-week-after-cataract-surgery">Your First Week After Cataract Surgery</Link></li>
            <li><Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me">What I Learned From the Surgeon Who Trained Me</Link></li>
            <li><Link href="/insights/cataract-referral-kickbacks">Cataract Referral Kickbacks</Link></li>
            <li><Link href="/insights/posterior-capsule-opacification">Posterior Capsule Opacification</Link></li>
            <li><Link href="/insights/when-cataract-surgery-goes-wrong">When Cataract Surgery Goes Wrong</Link></li>
            <li><Link href="/contact">Schedule a Consultation</Link></li>
          </ul>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container content-narrow text-center">
          <h2>Continuity of Care Matters</h2>
          <p>At Desert Vision Center, your surgeon is your surgeon, from the first consultation through every follow-up visit. If you value that kind of continuity, we would be glad to meet you.</p>
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
