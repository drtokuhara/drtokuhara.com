import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is diabetic retinopathy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diabetic retinopathy is damage to the blood vessels in the retina caused by chronically elevated blood sugar. Over time, these vessels leak fluid, bleed, or grow abnormally, threatening central vision. It is the leading cause of blindness in working-age adults and progresses through four stages: mild NPDR, moderate NPDR, severe NPDR, and proliferative diabetic retinopathy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can diabetic retinopathy be treated without seeing a retina specialist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Desert Vision Center, yes. Dr. Tokuhara holds fellowship training in both cataract surgery and retina. He performs anti-VEGF injections and panretinal photocoagulation in-house, so diabetic patients do not need to be referred to a separate retina specialist. This means one surgeon, one cohesive treatment plan, and fewer appointments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should a diabetic patient have a dilated eye exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most diabetic patients should have a dilated eye exam at least once a year. Patients with known retinopathy or poorly controlled blood sugar may need exams every three to six months. The dilated exam allows the doctor to see the full retina, which a standard vision check cannot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does blood sugar control affect diabetic retinopathy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Large clinical trials have shown that keeping HbA1c in a healthy range significantly slows retinopathy progression. Blood sugar control is not just something your primary care doctor manages - it is one of the most powerful tools available to protect your vision. I discuss this with every diabetic patient I see.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still have cataract surgery if I have diabetic retinopathy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but timing matters. Mild retinopathy typically does not prevent cataract surgery. Moderate to severe retinopathy or active macular edema usually needs to be treated and stabilized first. Because Dr. Tokuhara is retina-trained, he can manage both conditions himself and sequence the treatments appropriately.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  articleSchema({
    title: 'Diabetic Retinopathy: What Every Diabetic Patient Should Know About Their Eyes',
    description: 'Diabetic retinopathy is the leading cause of blindness in working-age adults. Dr. Tokuhara is retina-trained and treats both retinopathy and cataracts in-house at Desert Vision Center.',
    slug: '/diabetic-retinopathy',
    datePublished: '2026-05-03',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Diabetic Retinopathy', href: '/diabetic-retinopathy' },
  ]),
];

export const metadata = {
  title: 'Diabetic Retinopathy: What Every Diabetic Patient Should Know About Their Eyes',
  description: 'Diabetic retinopathy damages the retina and threatens your central vision. Dr. Tokuhara is retina-trained and treats both retinopathy and cataracts in-house - no separate specialist needed.',
  alternates: {
    canonical: '/diabetic-retinopathy',
  },
  openGraph: {
    title: 'Diabetic Retinopathy Guide | Dr. Keith Tokuhara',
    description: 'Learn about diabetic retinopathy stages, treatment, and how Dr. Tokuhara manages both retinopathy and cataract surgery as one cohesive plan.',
    url: 'https://drtokuhara.com/diabetic-retinopathy',
  },
};

export default function DiabeticRetinopathyPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="page-hero">
        <div className="container">
          <h1>Diabetic Retinopathy: <strong>What Every Diabetic Patient Should Know</strong></h1>
          <p className="page-hero-sub">
            Diabetes is the leading cause of preventable blindness in working-age adults. Understanding what is happening in your eyes, and how to protect your vision, matters more than most patients realize.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 3, 2026" />

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Is <strong>Diabetic Retinopathy?</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The retina is the light-sensitive tissue lining the back of your eye. It functions like the film in a camera, capturing images and sending them to your brain. Blood sugar that stays elevated over time damages the tiny blood vessels that nourish the retina. Those vessels can leak fluid, bleed, swell, and eventually grow abnormal new vessels in places they should not exist. That entire process is diabetic retinopathy.
          </p>
          <p className="prose">
            What makes this condition particularly treacherous is that it causes no pain and no obvious symptoms in its early stages. By the time a patient notices blurring or dark spots, significant damage has often already occurred. This is why routine dilated eye exams are not optional for diabetic patients - they are how we catch retinopathy early, when treatment is most effective.
          </p>
          <p className="prose">
            I see this in my practice constantly. Patients come in for a cataract evaluation and I find retinopathy they did not know they had. Because I am fellowship-trained in retina as well as cataract surgery, I can evaluate and treat both problems. That dual training is genuinely rare among cataract surgeons, and it changes the care I can offer diabetic patients.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-seniors-outdoor-dining.jpg"
              alt="Seniors enjoying outdoor dining together - active living with well-managed diabetes"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Four Stages of <strong>Diabetic Retinopathy</strong></h2>
          <p className="prose">
            Diabetic retinopathy progresses through four defined stages. Where a patient falls on this spectrum determines how urgently treatment is needed and how it shapes cataract surgery planning.
          </p>
          <ul className="content-list">
            <li>
              <strong>Mild Non-Proliferative Diabetic Retinopathy (NPDR):</strong> The earliest stage. Small areas of balloon-like swelling called microaneurysms appear in the retinal blood vessels. Vision is typically normal at this point, and many patients have no symptoms. This stage is managed primarily by tightening blood sugar and blood pressure control, combined with close monitoring.
            </li>
            <li>
              <strong>Moderate NPDR:</strong> More blood vessels feeding the retina become blocked or damaged. Swelling in the central retina (the macula) may begin. Vision can start to blur at this stage, particularly for reading. Anti-VEGF injections may be indicated to reduce vascular leakage and macular edema.
            </li>
            <li>
              <strong>Severe NPDR:</strong> A large number of blood vessels are now blocked, significantly reducing blood flow to areas of the retina. The retina sends signals for new blood vessel growth in response to oxygen deprivation. These new vessels, when they form, are fragile and prone to bleeding. Panretinal photocoagulation (PRP laser) is the primary treatment at this stage to reduce abnormal vessel stimulation.
            </li>
            <li>
              <strong>Proliferative Diabetic Retinopathy (PDR):</strong> The most advanced and dangerous stage. Abnormal new blood vessels have grown on the surface of the retina or into the vitreous (the gel filling the eye). These vessels can bleed suddenly, causing floaters or dramatic vision loss. Scar tissue can form and pull the retina away from the eye wall (tractional retinal detachment). Aggressive treatment with PRP laser, anti-VEGF injections, and sometimes surgery is required.
            </li>
          </ul>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>The critical point is that early stages are treatable without major intervention. Catching retinopathy at stage 1 or 2 is a very different situation from catching it at stage 4. Annual dilated exams exist for exactly this reason.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How Diabetic Retinopathy <strong>Affects Vision</strong></h2>
          <p className="prose">
            Retinopathy threatens vision in several distinct ways depending on which structures are affected:
          </p>
          <ul className="content-list">
            <li><strong>Diabetic macular edema (DME):</strong> Leaking blood vessels cause the central retina to swell. Because the macula is responsible for sharp, detailed central vision, even mild swelling blurs reading, faces, and fine detail. DME is the most common cause of vision loss in diabetic patients and can occur at any stage of retinopathy.</li>
            <li><strong>Vitreous hemorrhage:</strong> When fragile new blood vessels bleed into the vitreous, patients see sudden floaters, dark streaks, or a red haze over their vision. A large hemorrhage can obscure vision entirely. This is often the first sign patients notice of proliferative retinopathy.</li>
            <li><strong>Tractional retinal detachment:</strong> Scar tissue from abnormal vessel growth can contract and physically pull the retina off the back of the eye. This requires urgent surgical repair and carries a risk of permanent vision loss if not treated promptly.</li>
            <li><strong>Neovascular glaucoma:</strong> Abnormal blood vessels can grow over the drainage angle of the eye, blocking fluid outflow and causing a severe, painful spike in eye pressure. This is one of the most dangerous complications of late-stage diabetic retinopathy.</li>
          </ul>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-couple-outdoor-sunshine.jpg"
              alt="Couple outdoors enjoying the sunshine together - maintaining active lives with managed diabetes"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">My Retina Training: <strong>One Surgeon, One Plan</strong></h2>
          <p className="prose">
            This is the part of my practice that I think matters most for diabetic patients, and it is something most patients do not know to look for when choosing an eye surgeon.
          </p>
          <p className="prose">
            I completed fellowship training in retina in addition to my cataract surgery training. That means I can perform anti-VEGF injections (Eylea, Lucentis, Avastin, Vabysmo) and panretinal photocoagulation (PRP laser) in my own office. Most cataract surgeons cannot do this. When they encounter diabetic retinopathy during a cataract evaluation, they refer patients to a separate retina specialist, who then manages the retina separately from the cataract.
          </p>
          <p className="prose">
            The problem with that split approach is coordination. The retina specialist does not know the cataract plan. The cataract surgeon does not know the retina status when the patient returns. Treatments can conflict or be sequenced poorly. Appointments multiply. The patient ends up managing two separate doctors who may not communicate clearly.
          </p>
          <p className="prose">
            At Desert Vision Center, I manage both. I evaluate the retinopathy, stage it, treat it with injections or laser as needed, and then perform the cataract surgery at the right time in the right sequence. One surgeon. One cohesive plan. Everything happens under the same roof, with full continuity of care.
          </p>

          <BlurReveal>
            <div className="clinic-thought">
              <h3>Why this matters practically</h3>
              <p>
                <em>A diabetic patient with moderate NPDR and developing macular edema needs anti-VEGF treatment before cataract surgery to protect the macula from surgical inflammation. I identify that, treat it, and then proceed with cataract removal when the retina is stable. Without retina training, a cataract surgeon would simply refer out and wait - adding months and multiple additional appointments to the process.</em>
              </p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Diabetic Retinopathy and <strong>Cataract Surgery</strong></h2>
          <p className="prose">
            Diabetic patients develop cataracts earlier and faster than the general population. Blood sugar fluctuations accelerate lens clouding, so it is very common for diabetic patients to need cataract surgery while also managing some degree of retinopathy.
          </p>
          <p className="prose">
            The interaction between the two conditions is significant and changes how surgery should be approached. Cataract surgery stimulates inflammation inside the eye, and that inflammation can worsen diabetic macular edema. Removing the cataract also improves the surgeon&rsquo;s view of the retina, which is sometimes necessary to properly treat proliferative retinopathy. Sequencing these two treatments correctly requires judgment that only comes from understanding both conditions in depth.
          </p>
          <p className="prose">
            For more detail on how I specifically manage cataract surgery in diabetic patients, including OCT imaging, lens selection, and postoperative protocols, see my page on <Link href="/complex-cases/diabetes">diabetes and cataract surgery</Link>.
          </p>

          <h2 className="section-title">Blood Sugar Control <strong>Protects Your Vision</strong></h2>
          <p className="prose">
            I want to be honest with my patients about this: no injection, no laser, and no surgery I can perform is as powerful as good blood sugar control at preventing retinopathy from developing in the first place.
          </p>
          <p className="prose">
            The landmark Diabetes Control and Complications Trial (DCCT) showed that intensive blood glucose control reduces the risk of developing retinopathy by 76 percent and slows progression of existing retinopathy by 54 percent. Those are enormous numbers. The HbA1c target matters. Working closely with your endocrinologist or primary care doctor to keep blood sugar in a healthy range is genuinely the most impactful thing a diabetic patient can do for their long-term vision.
          </p>
          <p className="prose">
            Blood pressure and cholesterol also play a role. Hypertension accelerates retinopathy progression. If you have diabetes, I encourage you to view your systemic health management as a direct investment in your vision.
          </p>

          <h2 className="section-title">The Importance of <strong>Dilated Eye Exams</strong></h2>
          <p className="prose">
            A standard vision screening at a primary care office or optometrist does not adequately evaluate the retina for diabetic damage. A dilated eye exam, where drops are used to widen the pupil, allows the doctor to see the full retina including the peripheral areas where early retinopathy often begins.
          </p>
          <p className="prose">
            I recommend that all diabetic patients have a dilated retinal exam at least once a year. Patients with known retinopathy, poorly controlled blood sugar, or a long history of diabetes may need more frequent monitoring, sometimes every three to six months. If you are a diabetic patient and you have not had a dilated exam in the past year, that is something to address soon.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{ margin: '0 0 40px 0' }}>
            <Image
              src="/media/stock-seniors-bocce-desert.jpg"
              alt="Seniors enjoying active outdoor activities in the Coachella Valley desert"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Related <strong>Reading</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/complex-cases/diabetes" className="related-card">
              <h3>Diabetes and Cataract Surgery</h3>
              <p>How diabetic retinopathy, macular edema, and blood sugar control specifically affect cataract surgery planning and outcomes.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery Overview</h3>
              <p>What to expect from the cataract surgery process, including evaluation, lens selection, and recovery.</p>
            </Link>
            <Link href="/is-cataract-surgery-safe" className="related-card">
              <h3>Is Cataract Surgery Safe?</h3>
              <p>An honest look at cataract surgery risks, how complications are managed, and what makes a surgeon qualified to handle complexity.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Have diabetes and concerned about your <strong>eye health?</strong></h2>
          <p>I evaluate both the retina and the cataract together. You get a complete picture of your eye health and a treatment plan that addresses everything in the right sequence.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
