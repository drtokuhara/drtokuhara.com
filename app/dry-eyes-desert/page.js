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
      name: 'Why is dry eye so common in the Coachella Valley?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Coachella Valley has extremely low humidity, persistent wind, intense UV exposure, and heavy reliance on air conditioning. This combination creates a uniquely harsh environment for the tear film. Residents who spend time outdoors for golf, tennis, hiking, or swimming are especially vulnerable to chronic dry eye symptoms.' },
    },
    {
      '@type': 'Question',
      name: 'Is dry eye just about discomfort, or can it affect my vision?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dry eye absolutely affects your vision. The tear film is actually the first optical surface of your eye, and when it is unstable or thin, your vision fluctuates, especially when reading, driving, or using screens. Severe dry eye can also affect surgical candidacy and outcomes for procedures like cataract surgery.' },
    },
    {
      '@type': 'Question',
      name: 'When should I see a doctor instead of using over-the-counter drops?',
      acceptedAnswer: { '@type': 'Answer', text: 'If you are using artificial tears more than four times a day, if your symptoms are worsening despite OTC drops, if you have persistent redness or a gritty sensation, or if your vision fluctuates throughout the day, it is time to see an eye doctor. Chronic dry eye is a disease that needs proper diagnosis and targeted treatment, not just lubrication.' },
    },
    {
      '@type': 'Question',
      name: 'Can dry eye affect cataract surgery results?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dry eye can compromise the accuracy of preoperative measurements used to select your lens implant, and it can slow healing and visual recovery after surgery. Dr. Tokuhara evaluates and often treats dry eye before cataract surgery to ensure the best possible outcome.' },
    },
    {
      '@type': 'Question',
      name: 'What treatments are available beyond artificial tears?',
      acceptedAnswer: { '@type': 'Answer', text: 'Treatment options include prescription anti-inflammatory drops (like Restasis or Xiidra), punctal plugs to conserve your natural tears, warm compress therapy for meibomian gland dysfunction, omega-3 supplementation, in-office procedures like intense pulsed light (IPL), and environmental modifications. The right treatment depends on the underlying cause of your dry eye.' },
    },
  ],
};

const jsonLd = [
  physicianSchema,
  faqSchema,
  articleSchema({
    title: 'Dry Eyes and the Desert - Why the Coachella Valley Is Tough on Your Eyes',
    description: 'Dr. Tokuhara explains why dry eye is so common in the Coachella Valley. Low humidity, wind, UV, and AC create the perfect storm. Learn about symptoms, treatment, and when OTC drops are not enough.',
    slug: '/dry-eyes-desert',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Dry Eyes and the Desert', href: '/dry-eyes-desert' },
  ]),
];

export const metadata = {
  title: 'Dry Eyes and the Desert - Why the Coachella Valley Is Tough on Your Eyes',
  description: 'Dr. Tokuhara explains dry eye treatment in the Coachella Valley. Why the desert environment causes chronic dry eye, when to see a doctor, and how it affects cataract surgery outcomes.',
  alternates: {
    canonical: '/dry-eyes-desert',
  },
  openGraph: {
    title: 'Dry Eyes and the Desert | Dr. Keith Tokuhara',
    description: 'Why dry eye is so common in the Coachella Valley and what you can do about it. From OTC drops to advanced treatment options.',
    url: 'https://drtokuhara.com/dry-eyes-desert',
  },
};

export default function DryEyesDesertPage() {
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
        src="/media/ambient-desert-golden-hour-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <KineticText text="Dry Eyes and the Desert" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">Why the Coachella Valley is one of the hardest places in the country on your eyes, and what you can do about it.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <AudioNarration src="/audio/narrations/dry-eyes-desert.mp3" title="Dry Eyes and the Desert" />

      {/* THE DESERT DIFFERENCE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Desert <strong>Difference</strong></h2>
          </ScrollReveal>
          <p className="prose">
            If you live in the Coachella Valley, you already know how the environment feels on your skin. The dry air, the wind, the relentless sun. What you might not realize is that the same conditions are even harder on your eyes. The tear film that coats the surface of your eye is incredibly thin, and in a desert climate, it evaporates faster than your body can replace it.
          </p>
          <p className="prose">
            The Coachella Valley sits below sea level in some areas. Humidity often drops below 10 percent. Wind carries dust and allergens across open desert. The UV index is among the highest in the country. And then there is air conditioning, which removes even more moisture from the air inside your home. Put it all together, and you have one of the most hostile environments for tear film stability anywhere in the United States.
          </p>
          <p className="prose">
            This is not a minor inconvenience. For many residents, especially seasonal visitors who split time between the desert and more humid climates, dry eye symptoms can be genuinely life-altering. And for patients considering eye surgery, untreated dry eye can affect both preoperative measurements and postoperative outcomes.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* MORE THAN DISCOMFORT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">More Than <strong>Discomfort</strong></h2>
          <p className="prose">
            Most people think of dry eye as an annoyance. Your eyes feel gritty, they burn a little, you reach for some drops. But chronic dry eye disease is more than that. It is an inflammatory condition that, left untreated, progressively damages the surface of your eye and degrades your quality of vision.
          </p>
          <p className="prose">
            Here is something patients are often surprised to learn: the tear film is the first optical surface of your eye. Light passes through your tears before it even reaches your cornea. When that tear film is unstable, thin, or patchy, your vision fluctuates. You might notice that reading is comfortable for a few seconds after a blink, then gets blurry. Or that your vision seems fine in the morning but deteriorates by afternoon. Or that driving at night feels worse than it should. These are not just comfort issues. They are vision issues.
          </p>
          <p className="prose">
            Chronic dry eye also affects quality of life in ways that do not show up on a vision chart. Eye fatigue after screen use. Difficulty wearing contact lenses. Headaches. The constant awareness that something is not right with your eyes. I take these complaints seriously because I have seen how much better patients feel when we address the root cause instead of masking symptoms with drops.
          </p>
        </div>
      </section>

      {/* WHAT CAUSES IT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Causes <strong>Dry Eye?</strong></h2>
          <p className="prose">
            Dry eye is not one disease. It is a spectrum, and the causes vary from patient to patient. Understanding what is driving your dry eye is the first step toward treating it effectively. Here is what I most commonly see in our desert population:
          </p>

          <h3 className="subsection-title">Evaporative Dry Eye</h3>
          <p className="prose">
            This is the most common type, and the desert makes it worse. Your tears evaporate faster than they should because the outer oil layer of the tear film is deficient. The meibomian glands along your eyelid margins produce that oil layer, and when they become clogged or dysfunctional, the protective oil barrier breaks down. The result is rapid tear evaporation, especially in low humidity and windy conditions.
          </p>

          <h3 className="subsection-title">Aqueous Deficient Dry Eye</h3>
          <p className="prose">
            Some patients do not produce enough of the watery component of tears. This can be related to age, autoimmune conditions like Sjogren syndrome, medications (antihistamines, blood pressure medications, antidepressants), or previous eye surgeries. Desert living makes even a mild aqueous deficiency symptomatic because there is no environmental moisture to compensate.
          </p>

          <h3 className="subsection-title">Environmental Factors</h3>
          <p className="prose">
            Screen time is a major contributor. When you stare at a phone, tablet, or computer, your blink rate drops by as much as 60 percent. Combine that with dry desert air and air-conditioned rooms, and your tear film does not stand a chance. Golf, tennis, hiking, and swimming in chlorinated pools all add stress to an already challenged ocular surface. Even ceiling fans and car air vents pointed at your face contribute.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* DRY EYE AND SURGERY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Dry Eye and <strong>Surgical Candidacy</strong></h2>
          <p className="prose">
            This is an area where I am particularly careful, and where I think some practices miss the mark. Dry eye directly affects cataract surgery outcomes. The measurements we use to select your lens implant depend on a smooth, stable tear film. If your corneal surface is irregular because of dry eye, those measurements will be off, and your lens selection could be suboptimal.
          </p>
          <p className="prose">
            I have seen patients come in for a cataract evaluation with significant dry eye disease that no one had addressed. If I operate on those eyes without treating the surface first, the results will not be as good as they should be. That is not a minor detail. It is the difference between a patient who is thrilled with their vision and one who is frustrated.
          </p>
          <p className="prose">
            This is why I evaluate the ocular surface as part of every cataract consultation. If dry eye needs treatment before surgery, I will tell you, and we will work on it together. It might add a few weeks to the timeline, but the improvement in accuracy and outcomes is worth it. Rushing to surgery with an unhealthy eye surface is a disservice to the patient.
          </p>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Treatment <strong>Options</strong></h2>
          <p className="prose">
            Effective dry eye treatment starts with understanding the cause. A bottle of artificial tears from the drugstore might be fine for occasional dryness, but chronic dry eye disease requires a structured approach. Here is what I recommend and prescribe based on what your examination reveals:
          </p>

          <h3 className="subsection-title">Artificial Tears and Lubricants</h3>
          <p className="prose">
            For mild symptoms, preservative-free artificial tears used several times a day can provide relief. I prefer preservative-free formulations because the preservatives in bottled drops can actually worsen inflammation with frequent use. At night, a thicker lubricating gel or ointment helps protect the eye surface during sleep when you are not blinking.
          </p>

          <h3 className="subsection-title">Prescription Anti-Inflammatory Drops</h3>
          <p className="prose">
            Chronic dry eye involves an inflammatory cycle. Your eyes get dry, the surface becomes inflamed, inflammation disrupts tear production, and the dryness gets worse. Prescription drops like cyclosporine (Restasis, Cequa) and lifitegrast (Xiidra) break that cycle by targeting the underlying inflammation. These take weeks to reach full effect, but they address the disease rather than just the symptoms.
          </p>

          <h3 className="subsection-title">Meibomian Gland Therapy</h3>
          <p className="prose">
            If your dry eye is driven by meibomian gland dysfunction (and in the desert, it often is), we need to address the oil glands directly. This can range from warm compress therapy and lid hygiene at home to in-office procedures that clear blocked glands and restore oil flow. Treating the glands is critical because no amount of artificial tears will fix an evaporative problem.
          </p>

          <h3 className="subsection-title">Punctal Plugs</h3>
          <p className="prose">
            These tiny devices are placed in the tear drainage openings at the inner corner of your eyelids. They keep your natural tears on the eye surface longer by slowing drainage. It is a quick, painless in-office procedure that can make a meaningful difference, especially for patients with aqueous deficiency. Plugs can be temporary (dissolvable) or semi-permanent, depending on your needs.
          </p>

          <h3 className="subsection-title">Environmental Modifications</h3>
          <p className="prose">
            Sometimes the most effective interventions are the simplest. Using a humidifier at home, wearing wraparound sunglasses outdoors, adjusting your screen position so you are looking slightly downward (which reduces the exposed surface area of your eye), taking regular blink breaks during screen use, and redirecting air vents away from your face. These are not glamorous solutions, but they work, and they cost nothing.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* WHEN TO SEE A DOCTOR */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When to <strong>See a Doctor</strong></h2>
          <p className="prose">
            Over-the-counter drops are fine for occasional dryness. But if any of the following apply to you, it is time for a proper evaluation:
          </p>
          <p className="prose">
            You are using artificial tears more than four times a day. Your symptoms are getting worse despite consistent drop use. You have persistent redness, grittiness, or a burning sensation. Your vision fluctuates throughout the day, especially during reading or screen work. Your eyes water excessively (which is, counterintuitively, a sign of dry eye, as your eyes try to compensate with reflex tears). You are considering cataract surgery or another eye procedure.
          </p>
          <p className="prose">
            Dry eye is treatable. Not just manageable, but genuinely treatable in most cases. The first step is figuring out what type of dry eye you have and what is causing it. From there, we build a treatment plan that actually targets the problem. I would rather see a patient early, when the condition is easier to control, than after years of worsening symptoms and surface damage.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>

          <div className="faq-item">
            <h3>Why is dry eye so common in the Coachella Valley?</h3>
            <p className="prose">
              The combination of extremely low humidity, persistent wind, intense UV exposure, and heavy air conditioning use creates one of the most challenging environments for your tear film in the country. Residents who spend time outdoors for golf, tennis, or hiking are especially vulnerable.
            </p>
          </div>

          <div className="faq-item">
            <h3>Is dry eye just about discomfort, or can it affect my vision?</h3>
            <p className="prose">
              Dry eye absolutely affects your vision. The tear film is the first optical surface of your eye. When it is unstable, your vision fluctuates, especially during reading, driving, or screen use. Severe dry eye can also compromise surgical candidacy and outcomes for procedures like cataract surgery.
            </p>
          </div>

          <div className="faq-item">
            <h3>When should I see a doctor instead of using over-the-counter drops?</h3>
            <p className="prose">
              If you are using artificial tears more than four times a day, your symptoms are worsening, you have persistent redness or grittiness, or your vision fluctuates throughout the day, it is time for a proper evaluation. Chronic dry eye is a disease that needs diagnosis and targeted treatment, not just lubrication.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can dry eye affect cataract surgery results?</h3>
            <p className="prose">
              Yes. Dry eye can compromise the accuracy of preoperative measurements used to select your lens implant. It can also slow healing and affect visual recovery. I evaluate and often treat dry eye before cataract surgery to ensure the best possible outcome.
            </p>
          </div>

          <div className="faq-item">
            <h3>What treatments are available beyond artificial tears?</h3>
            <p className="prose">
              Options include prescription anti-inflammatory drops, punctal plugs to conserve natural tears, warm compress therapy for meibomian gland dysfunction, omega-3 supplementation, in-office gland expression, and environmental modifications like humidifiers and wraparound sunglasses. The right approach depends on the underlying cause of your dry eye.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section-light">
        <div className="container content-narrow">
          <h2 className="section-title">Explore <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/glaucoma" className="related-card">
              <h3>Glaucoma</h3>
              <p>The silent thief of sight. Why routine exams matter, especially in the desert.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What it is, when it makes sense, and what to expect from start to finish.</p>
            </Link>
            <Link href="/diabetic-retinopathy" className="related-card">
              <h3>Diabetic Retinopathy</h3>
              <p>How diabetes affects your eyes and why early detection matters.</p>
            </Link>
            <Link href="/dust-in-eyes" className="related-card">
              <h3>Dust in Eyes</h3>
              <p>What to do when the desert wind gets the better of you.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Tired of <strong>dry, irritated eyes?</strong></h2>
          <p>If over-the-counter drops are not cutting it, or if you want to understand what is actually causing your symptoms, let us figure it out together. A proper evaluation is the first step toward real relief.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
