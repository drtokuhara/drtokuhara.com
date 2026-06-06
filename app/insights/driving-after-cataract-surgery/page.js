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
  title: 'Can You Drive After Cataract Surgery? - Dr. Keith Tokuhara',
  description: 'A cataract surgeon answers the most common question patients ask: when can I drive again after cataract surgery? The honest timeline and what determines readiness.',
  alternates: { canonical: '/insights/driving-after-cataract-surgery' },
  openGraph: {
    title: 'Can You Drive After Cataract Surgery? | Dr. Keith Tokuhara',
    description: 'When you can safely return to driving after cataract surgery, from a surgeon who gives real answers.',
    url: 'https://drtokuhara.com/insights/driving-after-cataract-surgery',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How soon can I drive after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients can drive within 24 hours after cataract surgery, provided their vision meets the legal driving standard and they feel comfortable. However, you must be cleared by your surgeon at the one-day post-operative visit before driving. Some patients need a few extra days if vision is still blurry or if they had complications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can I not drive immediately after surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You cannot drive immediately after surgery because of the sedative used during the procedure and because your vision may be blurry from dilating drops, swelling, or residual ointment. You must have someone drive you home from the surgery center. Driving is not safe until the sedative wears off and your vision stabilizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the legal vision requirement for driving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In California, you must have at least 20/40 vision in at least one eye to drive without restrictions. If your vision does not meet this standard after cataract surgery, you may need glasses or additional time for healing before driving is safe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drive at night after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Night driving may take longer to feel comfortable, especially if you received a multifocal lens that can cause halos around lights. Most patients can drive at night within one to two weeks, but some need additional adaptation time. Start with short daytime drives and progress to nighttime driving when you feel ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I only have one eye done?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you only have one eye treated and the untreated eye has good vision, you may be able to drive sooner, as long as your overall vision meets the legal standard. However, depth perception can be affected when the two eyes see very differently, so caution is advised until both eyes are treated or your brain adapts.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Can You Drive After Cataract Surgery?',
    description: 'A detailed answer to when you can safely return to driving after cataract surgery, including legal requirements and practical considerations.',
    slug: '/insights/driving-after-cataract-surgery',
    datePublished: '2026-06-05',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Driving After Cataract Surgery', href: '/insights/driving-after-cataract-surgery' },
  ]),
  faqSchema,
];

export default function InsightDrivingAfterCataractSurgery() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="page-hero page-hero-image" style={{
        backgroundImage: 'url(/media/driving-after-surgery-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 20, 30, 0.6)'
        }} />
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Recovery</span>
          <h1>Can You Drive After <strong>Cataract Surgery?</strong></h1>
          <p className="page-hero-sub">The honest timeline and what determines when you are ready to get back behind the wheel.</p>
          </ScrollReveal>
        </div>
      </div>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            The first question many patients ask after scheduling cataract surgery is not about the procedure itself or the lens options or the recovery timeline. It is simpler and more immediate: "When can I drive again?" For most people, driving is independence. Losing it, even temporarily, feels like losing control of your life.
          </p>
          <p>
            The short answer is that most patients can drive within 24 hours after cataract surgery, once cleared by their surgeon. But there are conditions. And the real answer depends on your vision, your comfort, and the specifics of your case.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why You Cannot Drive <strong>Immediately</strong></h2>
          <p>
            On the day of surgery, you cannot drive yourself home. This is non-negotiable. You will have received a mild IV sedative during the procedure. Even though you were awake and alert in the operating room, the sedative lingers for a few hours. Your reaction time is slower. Your judgment is impaired. Driving is unsafe.
          </p>
          <p>
            Beyond the sedative, your vision immediately after surgery is not reliable. Your pupil is still dilated. You may have ointment or drops in the eye that blur your sight. There may be mild swelling or haziness as the eye begins to heal. You can see, but not well enough to make quick decisions in traffic.
          </p>
          <p>
            You must arrange for someone to drive you to and from the surgery center. No exceptions. Most surgery centers will not release you unless you have a driver waiting.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>I have had patients try to convince me they can take an Uber home and then drive themselves the next day. I tell them the same thing every time: if you do not have a reliable driver, we reschedule the surgery. Safety is not negotiable.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The One-Day <strong>Follow-Up</strong></h2>
          <p>
            The next morning, you return for a post-operative check. I examine the eye, measure your vision, and assess how you are healing. This is when I clear you to drive or tell you to wait.
          </p>
          <p>
            Most patients have significant improvement in vision by the one-day mark. The sedative is gone. The pupil is returning to normal size. The eye has settled enough that depth perception and clarity are functional. If your vision meets the legal standard and you feel comfortable, you can drive.
          </p>
          <p>
            In California, the legal requirement is 20/40 vision or better in at least one eye. If you meet that threshold and your eye feels stable, driving is safe. Many patients leave the one-day visit and drive themselves home. Others prefer to wait another day or two, even if medically cleared, because they do not feel ready yet. That is fine. Clearance is medical permission, not a mandate.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When You Might Need <strong>More Time</strong></h2>
          <p>
            Not everyone is ready to drive at the one-day visit. Some patients need a few extra days. Common reasons include:
          </p>
          <ul>
            <li><strong>Residual blur.</strong> If the eye is still swollen or the cornea has mild edema, vision may not be sharp enough yet.</li>
            <li><strong>Light sensitivity.</strong> Some patients experience significant glare or light sensitivity in the first few days, making driving uncomfortable.</li>
            <li><strong>One eye treated, significant difference between eyes.</strong> If only one eye has been operated on and the other eye still has a dense cataract, the brain can struggle to merge the two images. Depth perception feels off. Driving may not feel safe until the second eye is done.</li>
            <li><strong>Complications or slower healing.</strong> If there was any complication during surgery or if healing is taking longer than usual, I may ask you to wait until the one-week visit before driving.</li>
          </ul>
          <p>
            If I tell you to wait, it is not arbitrary. It is because your vision is not stable enough yet or because the risk outweighs the benefit. Give it a few more days. Vision almost always improves.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Waiting one extra day to drive is frustrating. Causing an accident because you drove too soon is worse."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Night <strong>Driving</strong></h2>
          <p>
            Daytime driving and nighttime driving are different challenges. Even if you are cleared to drive during the day, night driving may take longer to feel comfortable.
          </p>
          <p>
            Multifocal lenses can cause halos and glare around lights, especially at night. Streetlights, headlights, and traffic signals may appear with rings or starbursts. Most patients adapt to this over time, but in the first week or two, nighttime driving can feel disorienting.
          </p>
          <p>
            If you received a standard monofocal lens, night driving is usually less of an issue. You may still notice some glare or light sensitivity in the early days, but it resolves quickly.
          </p>
          <p>
            My advice is to start with short daytime drives first. Get comfortable with how your new vision feels. Then try a short nighttime drive in a familiar area before attempting highway driving or long distances at night.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Patients who live in rural areas or drive long distances at night often ask about this ahead of time. I tell them the truth: if you chose a multifocal lens, expect an adaptation period for night driving. If nighttime driving is critical for your work or lifestyle, that conversation should happen before lens selection, not after surgery.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">One Eye vs <strong>Both Eyes</strong></h2>
          <p>
            If you are having both eyes done, the timeline changes slightly. After the first eye, you may be able to drive if the untreated eye still has reasonable vision. But depth perception can feel off when the two eyes are seeing very differently. Some patients feel comfortable driving with one eye done. Others do not.
          </p>
          <p>
            After the second eye is done, driving typically becomes much easier. Both eyes are now seeing through clear lenses. Depth perception normalizes. Vision stabilizes. Most patients feel fully confident behind the wheel within a few days of the second surgery.
          </p>
          <p>
            If you are having both eyes done on the same day through our CLEAR in a Day program, the recovery timeline is similar to having one eye done. You will still need a driver on surgery day. You will still be evaluated the next morning. And you will be cleared to drive once your vision meets the legal standard and you feel ready.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What the Law <strong>Says</strong></h2>
          <p>
            California law requires at least 20/40 vision in one eye to drive without restrictions. If your corrected vision is worse than 20/40 but better than 20/70, you may be allowed to drive during daylight hours only. If your vision is worse than 20/70 in both eyes, you cannot legally drive.
          </p>
          <p>
            After cataract surgery, most patients exceed the 20/40 threshold easily. But if you do not, you may need glasses to reach that standard. This is particularly relevant if you chose a lens optimized for near or intermediate vision and need distance correction for driving.
          </p>
          <p>
            I will tell you at your post-operative visit whether your vision meets the legal driving standard. If it does not, we will address it. Sometimes that means waiting a few more days for healing. Sometimes it means prescribing temporary glasses until your vision stabilizes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Practical <strong>Advice</strong></h2>
          <p>
            Even if you are medically cleared to drive, use common sense. Start with short, familiar routes. Avoid rush hour traffic and highways until you feel confident. Do not drive if the sun is directly in your eyes and you are still experiencing glare. Do not drive at night until you have tested your night vision in a safe, controlled setting.
          </p>
          <p>
            If something feels off, trust that feeling. Blurry vision, double vision, significant light sensitivity, or a sense of disorientation are all reasons to wait. Call the office. Come in for a check. Driving can wait.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The patients who do best after surgery are the ones who are patient with themselves. Rushing back to normal activities before you are ready does not make you heal faster. It just increases the risk of problems.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Insurance and <strong>Liability</strong></h2>
          <p>
            If you drive before being cleared by your surgeon and you are involved in an accident, your insurance company may deny coverage. They can argue that you were driving against medical advice. Even if the accident was not your fault, the fact that you were not medically cleared to drive can create liability issues.
          </p>
          <p>
            Wait for clearance. Get it in writing if you need documentation for work or insurance purposes. It is not worth the risk.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Driving is one of the most common sources of anxiety before cataract surgery. Patients worry about being dependent on others. They worry about losing their autonomy. They worry about how long it will take to get back to normal. What I tell them is this: for most people, the restriction is short. A day, maybe two. Occasionally a week. But the improvement in vision after surgery often makes driving easier and safer than it was before the cataract developed. You are not losing independence. You are getting it back. You just need a little patience to get there.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>Your First Week After Cataract Surgery</h3>
              <p>What to expect day by day in the first week of recovery.</p>
            </Link>
            <Link href="/cataract-recovery" className="related-card">
              <h3>Cataract Surgery Recovery</h3>
              <p>Complete guide to healing, restrictions, and returning to normal activities.</p>
            </Link>
            <Link href="/insights/best-lens-for-night-driving" className="related-card">
              <h3>Best Lens for Night Driving</h3>
              <p>How to choose a lens if nighttime driving is a priority.</p>
            </Link>
            <Link href="/clear-in-a-day" className="related-card">
              <h3>CLEAR in a Day</h3>
              <p>Same-day bilateral cataract surgery for faster recovery and return to driving.</p>
            </Link>
            <Link href="/insights/halos-after-cataract-surgery" className="related-card">
              <h3>Halos After Cataract Surgery</h3>
              <p>Why some lenses cause halos at night and what to expect.</p>
            </Link>
            <Link href="/insights/cataract-surgery-step-by-step" className="related-card">
              <h3>Cataract Surgery Step by Step</h3>
              <p>What actually happens during the procedure and immediately after.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
