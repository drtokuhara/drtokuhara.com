import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  KineticText,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Cataract Surgery and Diabetes: What You Need to Know - Dr. Keith Tokuhara',
  description: 'Diabetic patients develop cataracts earlier and face additional surgical considerations. A cataract surgeon explains the connection between diabetes and cataracts, why diabetic retinopathy evaluation matters, how blood sugar control affects healing, and what post-operative monitoring looks like.',
  keywords: ['cataract surgery diabetes', 'diabetic cataracts', 'diabetes cataract surgery risks', 'diabetic retinopathy cataract surgery', 'blood sugar control cataract surgery'],
  alternates: { canonical: '/insights/cataract-surgery-and-diabetes' },
  openGraph: {
    title: 'Cataract Surgery and Diabetes: What You Need to Know | Dr. Keith Tokuhara',
    description: 'Diabetic patients need to know how diabetes affects cataract development, surgical risk, lens choice, and healing. An honest, thorough explanation from a cataract surgeon serving the Coachella Valley.',
    url: 'https://drtokuhara.com/insights/cataract-surgery-and-diabetes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cataract Surgery and Diabetes: What You Need to Know',
    description: 'Diabetes changes cataract surgery planning, lens choice, and post-operative care. What every diabetic patient should know before surgery.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do diabetic patients develop cataracts earlier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chronically elevated blood sugar causes biochemical changes in the lens that accelerate clouding. The lens absorbs glucose from the aqueous fluid, and excess glucose is converted into sorbitol, which accumulates and disrupts the lens structure. Diabetic patients often develop visually significant cataracts in their 50s or even earlier, while non-diabetic patients typically do not develop cataracts until their 70s.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a retina evaluation before cataract surgery if I have diabetes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Diabetic retinopathy is one of the most common complications of long-standing diabetes, and it must be evaluated and, if necessary, treated before cataract surgery. Untreated diabetic retinopathy can worsen after cataract surgery. A dilated retina exam, and often OCT imaging, is essential to confirm that your retina is stable enough for surgery or to identify any treatment needed first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does blood sugar control affect cataract surgery healing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Poorly controlled blood sugar impairs wound healing, increases infection risk, and can worsen diabetic retinopathy or diabetic macular edema after surgery. Most surgeons prefer your hemoglobin A1C to be below 8.0% before elective cataract surgery, and ideally closer to 7.0%. If your blood sugar is not well controlled, working with your endocrinologist or primary care physician to improve control before surgery reduces risk and improves outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can diabetic patients receive premium lens implants like multifocals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the health of your retina. If you have diabetic retinopathy, especially macular involvement, premium multifocal or EDOF lenses may not perform well because the underlying retinal disease limits the quality of the image reaching your brain. Even if the cataract surgery is perfect, the lens cannot compensate for retinal pathology. For diabetic patients with healthy retinas, premium lenses can be excellent options. The decision must be individualized based on a thorough retina evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does post-operative monitoring look like for diabetic cataract patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diabetic patients require closer monitoring after cataract surgery than non-diabetic patients. In addition to standard post-operative visits, we watch carefully for signs of diabetic macular edema (swelling in the central retina), worsening retinopathy, delayed healing, and inflammation. Some diabetic patients benefit from prophylactic anti-inflammatory treatments to reduce the risk of macular edema. Follow-up visits are essential, not optional.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Cataract Surgery and Diabetes: What You Need to Know',
    description: 'Diabetic patients develop cataracts earlier and have additional surgical considerations. A cataract surgeon explains the connection, retinopathy evaluation, blood sugar control, lens choice, and post-operative care for diabetic cataract patients.',
    slug: '/insights/cataract-surgery-and-diabetes',
    datePublished: '2026-06-05',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Cataract Surgery and Diabetes', href: '/insights/cataract-surgery-and-diabetes' },
  ]),
  faqSchema,
];

export default function InsightDiabetesCataracts() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/hero-second-opinion-changed.jpg"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
        bottomOverlay={<AudioNarration src="/audio/narrations/cataract-surgery-and-diabetes.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Comorbidity / Education</span>
          <h1>Cataract Surgery and Diabetes: <strong>What You Need to Know</strong></h1>
          <p className="page-hero-sub">More common, earlier onset, additional considerations.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="June 5, 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            If you have diabetes and you are researching cataract surgery, you probably already know that diabetes increases your risk of developing cataracts. What you may not know is that diabetes also changes how we plan your surgery, which lens options are realistic, how closely we monitor your healing, and what long-term risks we need to watch for.
          </p>
          <p>
            I practice in the Coachella Valley, where diabetes prevalence is significantly higher than the national average, particularly in the eastern valley communities. I see diabetic cataract patients every week. Many of them arrive with incomplete information, outdated fears, or no understanding of why their retina exam matters more than the cataract itself.
          </p>
          <p>
            This is a thorough, honest explanation of what diabetic patients need to know before <Link href="/cataract-surgery">cataract surgery</Link>. Not to scare you. Not to discourage you. But to help you understand why diabetes requires a more careful conversation and why that care is worth it.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why Diabetic Patients Develop <strong>Cataracts Earlier</strong></h2>
          <p>
            Most people associate cataracts with aging. The typical non-diabetic patient develops visually significant cataracts in their 70s. Diabetic patients often develop them in their 50s, sometimes even earlier.
          </p>
          <p>
            The mechanism is biochemical. Chronically elevated blood sugar causes glucose to accumulate in the lens. The lens has no blood supply, so it absorbs glucose from the aqueous fluid that bathes it. Excess glucose is converted into sorbitol, a sugar alcohol that cannot easily leave the lens. Sorbitol accumulation disrupts the normal lens protein structure, leading to clouding. For a deeper explanation of all cataract causes, see <Link href="/insights/what-causes-cataracts">What Causes Cataracts</Link>.
          </p>
          <p>
            The longer you have had diabetes, and the less controlled your blood sugar has been over the years, the more likely you are to develop cataracts earlier than your peers. This is not a failure on your part. It is a consequence of the disease process.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>If you are in your 50s and your vision is getting cloudy, and you have diabetes, you are not imagining it. You are not too young for cataracts. Diabetic cataracts are common, treatable, and absolutely appropriate to address surgically when they affect your quality of life.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Diabetic Retinopathy: <strong>The Exam That Matters Most</strong></h2>
          <p>
            Here is the conversation I have with nearly every diabetic patient who comes in for a cataract consultation: the cataract is not the only thing we need to evaluate. Your retina matters just as much, and in some cases, more.
          </p>
          <p>
            <Link href="/diabetic-retinopathy">Diabetic retinopathy</Link> is damage to the blood vessels in the retina caused by years of elevated blood sugar. It is one of the most common complications of long-standing diabetes. Early diabetic retinopathy may not affect your vision at all. Advanced diabetic retinopathy can cause bleeding, swelling, and permanent vision loss.
          </p>
          <p>
            Why does this matter for cataract surgery? Because untreated or unstable diabetic retinopathy can worsen after cataract surgery. The inflammatory response from surgery, even routine, uneventful surgery, can trigger progression of retinopathy or cause diabetic macular edema (swelling in the central retina that blurs vision).
          </p>
          <p>
            Before I recommend cataract surgery for any diabetic patient, I perform a thorough dilated retina exam. In many cases, I also obtain OCT imaging of the macula to look for subtle swelling that is not visible on exam alone. If I find significant retinopathy, I refer the patient to a retina specialist for evaluation and, if necessary, treatment before proceeding with cataract surgery.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"If your retina is not stable, cataract surgery can make your vision worse, not better. That is why we check first."</p>
          </div></BlurReveal>

          <p>
            This can feel frustrating. You came in for cataract surgery, and now someone is telling you that you need to see another doctor first. But this is not a delay tactic. It is appropriate, evidence-based care. Addressing retinopathy before cataract surgery protects your vision in the long run.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Blood Sugar Control and <strong>Surgical Risk</strong></h2>
          <p>
            Cataract surgery is elective. That means we have the luxury of optimizing your health before proceeding. One of the most important factors we evaluate is your blood sugar control.
          </p>
          <p>
            Poorly controlled blood sugar impairs wound healing. It increases your risk of infection. It increases the likelihood of post-operative inflammation and diabetic macular edema. These are not theoretical risks. They are real, measurable complications that occur more frequently in diabetic patients with hemoglobin A1C levels above 8.0%.
          </p>
          <p>
            Most cataract surgeons, myself included, prefer your A1C to be below 8.0% before elective surgery, and ideally closer to 7.0%. If your A1C is significantly elevated, I will ask you to work with your endocrinologist or primary care physician to improve your blood sugar control before we schedule surgery.
          </p>
          <p>
            This is not a judgment. It is risk mitigation. Waiting a few months to bring your blood sugar into better control reduces your surgical risk and improves your healing. That delay is worth it.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>If a surgeon is willing to proceed with cataract surgery despite poorly controlled diabetes and significant retinopathy, that is not patient-centered care. That is prioritizing revenue over outcomes. A surgeon who asks you to optimize your health first is doing the right thing, even if it feels inconvenient.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Lens Choice for <strong>Diabetic Patients</strong></h2>
          <p>
            This is one of the most important and most misunderstood aspects of cataract surgery for diabetic patients.
          </p>
          <p>
            <Link href="/lens-implants-explained">Premium lens implants</Link>, particularly multifocal and Extended Depth of Focus lenses, are designed to reduce your dependence on glasses by providing clear vision at multiple distances. These lenses work beautifully in healthy eyes. But they rely on a healthy retina to deliver that quality image to your brain.
          </p>
          <p>
            If you have diabetic retinopathy, especially macular involvement, a premium lens may not perform as expected. Even if the cataract surgery is flawless, even if the lens is perfectly positioned, the underlying retinal disease limits the quality of the visual signal. You may end up with the optical side effects of a premium lens (halos, reduced contrast) without the benefits.
          </p>
          <p>
            For diabetic patients with clear, healthy retinas, premium lenses are absolutely an option. But for patients with any degree of diabetic retinopathy or macular changes, I usually recommend a standard monofocal lens. A monofocal lens provides excellent distance vision, does not introduce optical side effects, and does not depend on perfect retinal health to perform well.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The best lens is the one that matches the health of your retina, not the one that costs the most."</p>
          </div></BlurReveal>

          <p>
            If a surgeon is aggressively recommending a premium lens without thoroughly evaluating your retina, that is a warning sign. The lens conversation for diabetic patients should start with the retina exam, not the price list.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Post-Operative Care for <strong>Diabetic Patients</strong></h2>
          <p>
            Diabetic patients require closer monitoring after cataract surgery than non-diabetic patients. This is not optional. This is standard of care.
          </p>
          <p>
            In addition to the standard post-operative visits at one day, one week, and one month, I watch diabetic patients carefully for signs of diabetic macular edema. This is swelling in the central retina that can develop weeks or even months after surgery. It causes blurred, distorted central vision. It is treatable, but only if we catch it early.
          </p>
          <p>
            Some diabetic patients, particularly those with pre-existing mild retinopathy, benefit from prophylactic anti-inflammatory treatment to reduce the risk of post-operative macular edema. This may involve steroid or non-steroidal anti-inflammatory eye drops for a longer duration than the standard post-operative regimen.
          </p>
          <p>
            If you develop any new blurring, distortion, or vision changes in the weeks after surgery, you need to contact your surgeon immediately. Do not wait for your scheduled follow-up. Diabetic macular edema is time-sensitive.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Post-operative follow-up is not optional for diabetic patients. Missing appointments is not just inconvenient. It is clinically risky. If you are not willing or able to attend all scheduled follow-up visits, we need to have a different conversation about timing.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Fear Many Diabetic Patients <strong>Do Not Talk About</strong></h2>
          <p>
            I see it in the exam room all the time. A diabetic patient sits across from me, and I can tell they are carrying a fear they have not voiced. Eventually, it comes out: "I have heard that people with diabetes can go blind from eye surgery."
          </p>
          <p>
            This fear is understandable. Diabetes does increase the risk of vision loss, and surgery does carry risk. But the fear is often based on outdated information or stories from patients who had surgery decades ago, when our understanding of diabetic retinopathy and post-operative care was far less sophisticated.
          </p>
          <p>
            Here is the truth: cataract surgery in well-selected diabetic patients, with appropriate pre-operative evaluation, optimized blood sugar control, and close post-operative monitoring, has excellent outcomes. The vast majority of diabetic patients see better after surgery than before. The risk of significant vision loss is low.
          </p>
          <p>
            But "well-selected" is the key phrase. If your retinopathy is advanced and unstable, if your blood sugar is poorly controlled, if you are not able to attend follow-up visits, then cataract surgery carries higher risk. That is why the pre-operative conversation matters so much.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Diabetes changes the risk profile, but it does not make cataract surgery impossible. It makes the planning more important."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why the Coachella Valley <strong>Diabetes Prevalence Matters</strong></h2>
          <p>
            Diabetes prevalence in the Coachella Valley is significantly higher than the national average. The eastern valley communities, in particular, have some of the highest diabetes rates in California. Many of my diabetic cataract patients are from these communities.
          </p>
          <p>
            This means I see a higher volume of diabetic cataracts, diabetic retinopathy, and the complications that come with poorly controlled diabetes than many ophthalmologists in other parts of the country. That experience matters. I know what to look for. I know when to wait. I know when referral to a retina specialist is essential. And I know how to manage post-operative care for patients whose diabetes complicates healing.
          </p>
          <p>
            If you are a diabetic patient in the Coachella Valley, you deserve a surgeon who understands the specific challenges your community faces and who has the experience to navigate them safely.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What to Ask <strong>Your Surgeon</strong></h2>
          <p>
            If you are diabetic and considering cataract surgery, here are the questions you should ask:
          </p>
          <ul className="insight-list">
            <li>Have you evaluated my retina for diabetic retinopathy?</li>
            <li>Do I need a retina specialist evaluation before surgery?</li>
            <li>What is my most recent hemoglobin A1C, and is it controlled enough for surgery?</li>
            <li>Which lens implant do you recommend given the health of my retina?</li>
            <li>What is your post-operative monitoring plan for diabetic patients?</li>
            <li>What signs should I watch for that would require urgent follow-up?</li>
          </ul>
          <p>
            A <Link href="/insights/how-to-choose-a-cataract-surgeon">good surgeon</Link> will answer every one of these questions thoroughly. If the answers are rushed, vague, or dismissive, find another surgeon.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="insight-highlight">
            <p><strong>Diabetes complicates cataract surgery, but it does not make it impossible. What it requires is more careful evaluation, more thoughtful lens selection, better blood sugar control, and closer post-operative monitoring. If your surgeon is willing to provide that level of care, and if you are willing to participate fully in your own preparation and follow-up, the outcomes can be excellent. Diabetic patients deserve clear vision just as much as anyone else. They just need a surgeon who understands the extra steps required to get there safely.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I had a patient, a 58-year-old man with Type 2 diabetes for 20 years, who had been told by another surgeon that he was "too high risk" for cataract surgery. When I evaluated him, I found moderate non-proliferative diabetic retinopathy and an A1C of 9.2%. He was not too high risk. He was unprepared. We sent him to a retina specialist, who treated some early macular edema. We worked with his endocrinologist to improve his blood sugar control. Six months later, his A1C was 7.4%, his retinopathy was stable, and we performed his cataract surgery without complication. He sees 20/25 now. The lesson is not that every diabetic patient is a good candidate. The lesson is that many diabetic patients who are told "no" should have been told "not yet, but here is what we need to do first." That distinction matters.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/complex-cases/diabetes" className="related-card">
              <h3>Cataract Surgery with Diabetes</h3>
              <p>Complex case overview: how diabetes affects surgical planning and outcomes.</p>
            </Link>
            <Link href="/diabetic-retinopathy" className="related-card">
              <h3>Diabetic Retinopathy</h3>
              <p>Understanding diabetic retinopathy and how it affects your eye health.</p>
            </Link>
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>An honest reflection on premium versus standard lens implants and who benefits most.</p>
            </Link>
            <Link href="/insights/how-to-choose-a-cataract-surgeon" className="related-card">
              <h3>How to Choose a Cataract Surgeon</h3>
              <p>Five things that actually matter when choosing the surgeon who will operate on your eyes.</p>
            </Link>
            <Link href="/insights/when-cataracts-are-not-the-real-problem" className="related-card">
              <h3>When Cataracts Are Not the Real Problem</h3>
              <p>Why thorough retina evaluation matters before attributing all vision loss to cataracts.</p>
            </Link>
            <Link href="/complex-cases/macular-degeneration" className="related-card">
              <h3>Macular Degeneration and Cataracts</h3>
              <p>How macular degeneration affects cataract surgery planning and lens choice.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Ready to <strong>Talk?</strong></h2>
            <p style={{marginBottom: '24px'}}>If you are diabetic and want a thorough, honest evaluation before cataract surgery, I would welcome the conversation. We serve the entire Coachella Valley from our Rancho Mirage office.</p>
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
