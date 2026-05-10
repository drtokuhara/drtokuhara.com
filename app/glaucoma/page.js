import Link from 'next/link';
import { articleSchema, breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  VideoBackground,
  KineticText,
  LineDraw,
} from '../components/ScrollAnimations';
import AudioNarration from '../components/AudioNarration';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the early signs of glaucoma?',
      acceptedAnswer: { '@type': 'Answer', text: 'Glaucoma is called the silent thief of sight because it typically has no symptoms in its early stages. By the time you notice vision changes, permanent damage has already occurred. The only way to catch glaucoma early is through regular comprehensive eye exams that include optic nerve evaluation and eye pressure measurement.' },
    },
    {
      '@type': 'Question',
      name: 'How is glaucoma treated?',
      acceptedAnswer: { '@type': 'Answer', text: 'Glaucoma treatment aims to lower eye pressure to prevent further optic nerve damage. Options include prescription eye drops, laser procedures like selective laser trabeculoplasty (SLT), minimally invasive glaucoma surgery (MIGS), and traditional glaucoma surgery for advanced cases. Dr. Tokuhara tailors treatment to the type and severity of glaucoma.' },
    },
    {
      '@type': 'Question',
      name: 'Can glaucoma be cured?',
      acceptedAnswer: { '@type': 'Answer', text: 'Glaucoma cannot be cured, and vision lost to glaucoma cannot be restored. However, with early detection and consistent treatment, further vision loss can be slowed or prevented in most patients. This is why routine eye exams are so important, especially after age 40 or if you have risk factors.' },
    },
    {
      '@type': 'Question',
      name: 'Who is at risk for glaucoma?',
      acceptedAnswer: { '@type': 'Answer', text: 'Risk factors include age over 40, family history of glaucoma, African or Hispanic heritage, high eye pressure, thin corneas, and certain medical conditions like diabetes. People who live active outdoor lifestyles in the desert may delay eye exams because they feel fine, which makes routine screening even more critical.' },
    },
    {
      '@type': 'Question',
      name: 'Can glaucoma and cataracts be treated at the same time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. For patients who have both glaucoma and cataracts, combined procedures can address both conditions in a single surgery. Minimally invasive glaucoma surgery (MIGS) can be performed at the time of cataract surgery to help lower eye pressure and potentially reduce dependence on glaucoma drops. Dr. Tokuhara evaluates each patient individually to determine the best approach.' },
    },
  ],
};

const jsonLd = [
  physicianSchema,
  faqSchema,
  articleSchema({
    title: 'Glaucoma - The Silent Thief of Sight',
    description: 'Dr. Tokuhara explains glaucoma in plain language. Why it has no early symptoms, how it is detected, treatment options, and why routine eye exams in the Coachella Valley are essential.',
    slug: '/glaucoma',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Glaucoma', href: '/glaucoma' },
  ]),
];

export const metadata = {
  title: 'Glaucoma - The Silent Thief of Sight',
  description: 'Dr. Tokuhara explains glaucoma detection and treatment in the Coachella Valley. Why routine eye exams matter, management options from drops to surgery, and protecting your vision.',
  alternates: {
    canonical: '/glaucoma',
  },
  openGraph: {
    title: 'Glaucoma | Dr. Keith Tokuhara',
    description: 'Understanding glaucoma, the silent thief of sight. Detection, treatment options, and why routine eye exams in the Coachella Valley are essential.',
    url: 'https://drtokuhara.com/glaucoma',
  },
};

export default function GlaucomaPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* PAGE HERO */}
      <VideoBackground
        src="/media/ambient-desert-twilight-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <KineticText text="Glaucoma" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">The silent thief of sight. What you should know before it takes what you can not get back.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <AudioNarration src="/audio/narrations/glaucoma.mp3" title="Understanding Glaucoma" />

      {/* WHAT IS GLAUCOMA */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Is <strong>Glaucoma?</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Glaucoma is a group of eye diseases that damage the optic nerve, the cable that carries visual information from your eye to your brain. In most cases, the damage is caused by elevated pressure inside the eye. But here is the thing that makes glaucoma so dangerous: it does not hurt. There is no redness, no blurriness you would notice, no warning sign that sends you to the doctor. It progresses silently, and by the time you realize something is wrong, the damage is permanent.
          </p>
          <p className="prose">
            That is why glaucoma has earned the name "the silent thief of sight." It is one of the leading causes of irreversible blindness worldwide, and yet it is entirely manageable when caught early. The difference between someone who keeps their vision and someone who loses it often comes down to one thing: whether they had regular eye exams.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* HOW IT STEALS YOUR VISION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How Glaucoma <strong>Steals Your Vision</strong></h2>
          <p className="prose">
            Glaucoma starts at the edges. It takes your peripheral vision first, slowly narrowing your field of view like looking through a tunnel that gets smaller over time. Your brain is remarkably good at compensating. It fills in the gaps, adjusts, and you genuinely do not notice what is missing. You might bump into door frames more often. You might not see a car approaching from the side. You might struggle to find things on a cluttered desk. But you would not think "I am losing my vision."
          </p>
          <p className="prose">
            That is what makes it so insidious. Central vision, the part you use for reading and recognizing faces, stays sharp until the very late stages. By the time that goes, the optic nerve is severely damaged, and no treatment can bring back what was lost. Every nerve fiber that dies is gone for good.
          </p>
          <p className="prose">
            I have seen patients who had no idea anything was wrong until a routine exam revealed significant optic nerve damage. The exam that caught it probably saved their remaining vision. The patients who skip exams because they "see fine" are the ones who worry me most.
          </p>
        </div>
      </section>

      {/* RISK FACTORS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Who Is <strong>at Risk?</strong></h2>
          <p className="prose">
            Glaucoma can affect anyone, but certain factors put you at higher risk. Age is the biggest one. After 40, your risk starts climbing, and it increases with every decade. If you have a first degree relative with glaucoma, your risk is four to nine times higher than average.
          </p>
          <p className="prose">
            Race matters, too. African Americans are significantly more likely to develop glaucoma and tend to get it earlier and more severely. Hispanic and Latino populations also face elevated risk. People with diabetes, high blood pressure, or severe nearsightedness are at increased risk. So are patients who have had eye injuries or previous eye surgeries.
          </p>
          <p className="prose">
            Living in the Coachella Valley, I see a lot of patients who are active, feel healthy, and assume their eyes are fine because their distance vision is good. Feeling fine is not a screening tool. The only way to know is to get examined. A comprehensive eye exam with optic nerve evaluation, eye pressure measurement, and visual field testing can detect glaucoma years before you would ever notice symptoms on your own.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* DETECTION AND DIAGNOSIS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Detection and <strong>Diagnosis</strong></h2>
          <p className="prose">
            Diagnosing glaucoma is not as simple as checking eye pressure, though that is part of it. Some people have high pressure and never develop glaucoma. Others have normal pressure and lose vision anyway. That is why a thorough evaluation matters.
          </p>
          <p className="prose">
            I look at the optic nerve directly, examining its shape, color, and the ratio of the cup to the disc. I use optical coherence tomography (OCT) to measure the thickness of the nerve fiber layer, detecting thinning that the eye cannot see. Visual field testing maps your peripheral vision and reveals blind spots you did not know you had. Corneal thickness measurements help me interpret your pressure readings accurately.
          </p>
          <p className="prose">
            Taken together, these tests create a detailed picture of your optic nerve health. More importantly, they give us a baseline. Glaucoma is a disease we track over time. One set of numbers tells me where you are. Repeated measurements tell me whether you are stable or progressing, and that is what drives treatment decisions.
          </p>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Treatment <strong>Options</strong></h2>
          <p className="prose">
            The goal of glaucoma treatment is straightforward: lower the pressure inside your eye to a level that stops further optic nerve damage. We cannot reverse damage that has already happened, but we can protect what remains. The treatment approach depends on the type of glaucoma, its severity, and how your eye responds to each intervention.
          </p>

          <h3 className="subsection-title">Prescription Eye Drops</h3>
          <p className="prose">
            For many patients, daily eye drops are the first line of treatment. These work by either reducing the amount of fluid your eye produces or improving the drainage of that fluid. The challenge with drops is compliance. They need to be used every day, often more than once a day, and missing doses matters. I am honest with patients about this. If you know you are going to struggle with daily drops, I would rather discuss other options than pretend a prescription alone will solve the problem.
          </p>

          <h3 className="subsection-title">Laser Treatment</h3>
          <p className="prose">
            Selective laser trabeculoplasty (SLT) is a quick, in-office laser procedure that improves the drainage system inside your eye. It takes about five minutes, does not require an operating room, and can be as effective as eye drops in many patients. Some people use SLT as their primary treatment. Others use it to reduce the number of drops they need. The effect can wear off over time, but SLT can often be repeated.
          </p>

          <h3 className="subsection-title">Minimally Invasive Glaucoma Surgery (MIGS)</h3>
          <p className="prose">
            MIGS procedures are a newer category of glaucoma surgery that offer meaningful pressure reduction with less risk than traditional surgery. For patients who also need cataract surgery, MIGS devices can be implanted at the same time, addressing both conditions in a single procedure. These are not for everyone, and I will explain whether a MIGS approach makes sense for your situation.
          </p>

          <h3 className="subsection-title">Traditional Glaucoma Surgery</h3>
          <p className="prose">
            For advanced glaucoma or cases that do not respond to drops and laser, more involved surgical options exist. Trabeculectomy creates a new drainage pathway for fluid to leave the eye. Glaucoma drainage devices (tube shunts) are another option for eyes that need aggressive pressure lowering. These procedures have higher risk profiles, but for the right patient, they can be vision-saving.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* GLAUCOMA AND CATARACTS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Glaucoma and <strong>Cataracts Together</strong></h2>
          <p className="prose">
            Many patients I see have both glaucoma and cataracts, which is not surprising since both conditions become more common with age. The good news is that cataract surgery itself can sometimes help lower eye pressure, and we can combine cataract removal with a MIGS procedure to address both problems in one operation.
          </p>
          <p className="prose">
            This is an area where experience matters. Not every surgeon is comfortable managing both conditions simultaneously. The lens choice, the surgical technique, and the postoperative management all need to account for the glaucoma. I have managed hundreds of patients with combined glaucoma and cataracts, and I will tell you upfront what I think will work best for your specific eyes.
          </p>
          <p className="prose">
            If you have glaucoma and are developing cataracts, or if another doctor has told you that your glaucoma complicates cataract surgery, it is worth having a conversation. Combined management is often the most efficient path, and it can reduce your medication burden while improving your vision.
          </p>
        </div>
      </section>

      {/* WHY ROUTINE EXAMS MATTER */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Routine Exams <strong>Change Everything</strong></h2>
          <p className="prose">
            I keep coming back to this because it is the single most important message about glaucoma: the exam matters more than anything else. Not the drops. Not the laser. Not the surgery. The exam. Because none of those treatments help if you do not know you need them.
          </p>
          <p className="prose">
            In the Coachella Valley, I see a lot of healthy, active people who play golf, hike, swim, and enjoy an outdoor lifestyle. They feel great. Their distance vision is fine. They cannot imagine anything is wrong with their eyes. And most of the time, they are right. But the ones who are not right, the ones who have glaucoma quietly damaging their optic nerve, those are the patients who benefit most from catching it early.
          </p>
          <p className="prose">
            If you are over 40, get a comprehensive eye exam. If you have risk factors, get one sooner. If it has been more than two years since your last exam, schedule one. This is one of those situations where the cost of doing nothing is permanent, and the cost of doing something is an hour of your time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>

          <div className="faq-item">
            <h3>What are the early signs of glaucoma?</h3>
            <p className="prose">
              That is the problem: there are no early signs. Glaucoma does not cause pain, redness, or noticeable vision changes in its early stages. Your brain compensates for the peripheral vision loss, so you genuinely do not know it is happening. The only way to detect early glaucoma is through a comprehensive eye exam with optic nerve evaluation and pressure measurement.
            </p>
          </div>

          <div className="faq-item">
            <h3>How is glaucoma treated?</h3>
            <p className="prose">
              Treatment focuses on lowering eye pressure to protect the optic nerve. Options range from prescription eye drops and laser procedures (like SLT) to minimally invasive glaucoma surgery and traditional surgical approaches. I tailor the treatment plan to the type and severity of your glaucoma, your other eye conditions, and your lifestyle.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can glaucoma be cured?</h3>
            <p className="prose">
              No. Glaucoma cannot be cured, and vision lost to glaucoma cannot be restored. But with early detection and consistent treatment, we can slow or stop further damage in most patients. The key is catching it before significant vision loss occurs.
            </p>
          </div>

          <div className="faq-item">
            <h3>Who is at risk for glaucoma?</h3>
            <p className="prose">
              Risk increases with age, especially after 40. Family history of glaucoma, African or Hispanic heritage, diabetes, high blood pressure, severe nearsightedness, previous eye injuries, and thin corneas all increase risk. Even without risk factors, routine screening is recommended because glaucoma can develop in anyone.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can glaucoma and cataracts be treated at the same time?</h3>
            <p className="prose">
              Yes. For patients with both conditions, combined procedures can address glaucoma and cataracts in a single surgery. Minimally invasive glaucoma surgery (MIGS) can be performed during cataract surgery to help lower eye pressure and potentially reduce dependence on glaucoma drops. I evaluate each patient individually to determine the best approach.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section-light">
        <div className="container content-narrow">
          <h2 className="section-title">Explore <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/complex-cases/glaucoma-and-cataract" className="related-card">
              <h3>Glaucoma and Cataract Surgery</h3>
              <p>When both conditions need attention, combined management makes the difference.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What it is, when it makes sense, and what to expect from start to finish.</p>
            </Link>
            <Link href="/dry-eyes-desert" className="related-card">
              <h3>Dry Eyes and the Desert</h3>
              <p>Why the Coachella Valley is tough on your eyes, and what you can do about it.</p>
            </Link>
            <Link href="/diabetic-retinopathy" className="related-card">
              <h3>Diabetic Retinopathy</h3>
              <p>How diabetes affects your eyes and why early detection matters.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Concerned about <strong>your eye health?</strong></h2>
          <p>If it has been a while since your last comprehensive eye exam, or if you have been diagnosed with glaucoma and want a second opinion on your treatment plan, I am happy to see you.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
