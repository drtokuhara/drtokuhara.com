import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema, faqSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'What Causes Cataracts? UV, Aging, Diabetes, and Other Risk Factors - Dr. Keith Tokuhara',
  description: 'What causes cataracts? UV exposure, aging, diabetes, steroid use, genetics, trauma, and smoking all contribute. Evidence-based explanation from a cataract surgeon on what accelerates lens clouding and what you can control.',
  alternates: { canonical: '/insights/what-causes-cataracts' },
  openGraph: {
    title: 'What Causes Cataracts? Risk Factors and Prevention | Dr. Keith Tokuhara',
    description: 'UV exposure, aging, diabetes, steroids, genetics, trauma. What causes cataracts and what you can do about it.',
    url: 'https://drtokuhara.com/insights/what-causes-cataracts',
  },
};

const faqItems = [
  {
    question: 'What is the most common cause of cataracts?',
    answer: 'Aging is the most common cause. The lens proteins gradually break down and clump together over time, causing cloudiness. By age 80, more than half of Americans either have a cataract or have had cataract surgery. It is a normal part of aging, not a disease.'
  },
  {
    question: 'Can UV exposure cause cataracts?',
    answer: 'Yes. Prolonged UV exposure accelerates cataract formation, particularly cortical cataracts (cloudiness in the outer layer of the lens). Wearing UV-blocking sunglasses reduces this risk. The damage is cumulative, so protection matters at every age.'
  },
  {
    question: 'Does diabetes cause cataracts?',
    answer: 'Yes. Diabetic patients develop cataracts earlier and more rapidly than non-diabetic patients. High blood sugar causes changes in the lens that accelerate clouding. Good blood sugar control slows cataract progression but does not eliminate the risk.'
  },
  {
    question: 'Can you prevent cataracts?',
    answer: 'You cannot prevent age-related cataracts entirely, but you can slow their progression. Wear UV-blocking sunglasses, control blood sugar if you are diabetic, avoid smoking, and consider antioxidant-rich foods. None of these eliminate cataracts, but they may delay the need for surgery.'
  },
  {
    question: 'Do cataracts run in families?',
    answer: 'Yes, there is a genetic component. If your parents developed cataracts at a younger age, you may be at higher risk for early cataract formation. However, genetics is only one factor among many, and most cataracts are still driven primarily by aging and environmental exposure.'
  },
  {
    question: 'Can trauma cause cataracts?',
    answer: 'Yes. Blunt trauma to the eye can damage the lens and cause a traumatic cataract, sometimes immediately and sometimes years later. Penetrating injuries carry even higher risk. Protective eyewear during high-risk activities reduces this risk.'
  },
  {
    question: 'Do steroid medications cause cataracts?',
    answer: 'Yes. Long-term use of corticosteroids, particularly oral or inhaled steroids, increases cataract risk. The risk is dose-dependent and duration-dependent. If you require chronic steroid use, discuss monitoring with your ophthalmologist.'
  }
];

const jsonLd = [
  articleSchema({
    title: 'What Causes Cataracts?',
    description: 'What causes cataracts? UV exposure, aging, diabetes, steroid use, genetics, trauma, and smoking all contribute. Evidence-based explanation on what accelerates lens clouding and what you can control.',
    slug: '/insights/what-causes-cataracts',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'What Causes Cataracts', href: '/insights/what-causes-cataracts' },
  ]),
  faqSchema(faqItems),
];

export default function InsightWhatCausesCataracts() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-lens-refraction-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Education</span>
          <h1>What Causes <strong>Cataracts?</strong></h1>
          <p className="page-hero-sub">UV exposure, aging, diabetes, genetics, trauma, and other factors that cloud the lens.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Cataracts are clouding of the natural lens inside the eye. The lens, which sits behind the iris and pupil, is normally clear and flexible. Over time, the proteins that make up the lens break down and clump together, creating areas of opacity that scatter light and blur vision.
          </p>
          <p>
            This process happens to everyone if they live long enough. By age 80, more than half of Americans either have a cataract or have had cataract surgery. But not all cataracts form at the same rate, and not all are purely age-related. Here are the factors that accelerate cataract formation and what you can do about them.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Aging: The Primary <strong>Driver</strong></h2>
          <p>
            The most common cause of cataracts is simply getting older. The lens is made of water and protein. Over decades, these proteins undergo oxidative stress, UV damage, and metabolic changes that cause them to lose their transparency.
          </p>
          <p>
            This is not a disease. This is normal biology. The lens does not regenerate like skin or liver tissue. Damage accumulates over a lifetime, and eventually the clouding becomes visually significant.
          </p>
          <p>
            Most age-related cataracts develop slowly. You may not notice symptoms for years. When you do, they typically include blurred vision, increased glare from headlights, faded colors, difficulty reading in low light, and frequent prescription changes that no longer seem to help.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-wide">
          <ScrollReveal direction="up">
            <Image
              src="/media/tool-image-generation/what-causes-cataracts-eye---9a0d5051-a96d-485c-acfb-3af2d5053dda.png"
              alt="What causes cataracts - eye anatomy illustration"
              width={1200}
              height={675}
              className="content-image"
              style={{marginTop: '32px', marginBottom: '32px'}}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">UV Exposure: Cumulative <strong>Damage</strong></h2>
          <p>
            Ultraviolet radiation from sunlight damages lens proteins over time. The damage is cumulative, meaning that decades of sun exposure add up. This is why cataract rates are higher in regions with intense sunlight and why outdoor workers develop cataracts earlier than average.
          </p>
          <p>
            UV-blocking sunglasses reduce this risk. Not eliminate, but reduce. The protection needs to cover UVA and UVB wavelengths. Wraparound styles offer more coverage than small frames. Polarization is helpful for glare but does not add UV protection; check the label to confirm UV400 or 100% UV blocking.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>UV protection is most effective when started early. The damage you prevent at age 30 matters more than the damage you try to reverse at age 60.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Diabetes: Accelerated <strong>Progression</strong></h2>
          <p>
            Diabetic patients develop cataracts earlier and faster than non-diabetic patients. High blood sugar causes changes in the lens that accelerate protein breakdown and water accumulation. The lens swells, becomes cloudy, and loses transparency.
          </p>
          <p>
            Good blood sugar control slows this process but does not stop it. Diabetic cataracts can still develop even with excellent glucose management, but the rate of progression is significantly slower. Poorly controlled diabetes can lead to visually significant cataracts in patients as young as their 40s or 50s.
          </p>
          <p>
            Diabetic patients also face additional considerations during cataract surgery, particularly if they have diabetic retinopathy. Pre-operative retina evaluation is essential to assess macular health and plan for any necessary retina treatment before or after lens replacement. See <Link href="/insights/cataract-surgery-and-diabetes">Cataract Surgery and Diabetes</Link> for more detail.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Steroid Use: Medication-Induced <strong>Cataracts</strong></h2>
          <p>
            Long-term use of corticosteroids increases cataract risk. This includes oral steroids (prednisone), inhaled steroids (for asthma or COPD), and even topical steroid eye drops when used for extended periods.
          </p>
          <p>
            Steroid-induced cataracts typically form in a characteristic pattern called posterior subcapsular cataracts, which affect the back surface of the lens. These cataracts cause glare and difficulty reading even when distance vision is relatively preserved.
          </p>
          <p>
            If you require chronic steroid therapy for another medical condition, do not stop your medication, but discuss monitoring with your ophthalmologist. Regular eye exams can catch cataract formation early and allow for timely intervention when vision becomes affected.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Genetics: Family <strong>History</strong></h2>
          <p>
            Cataracts do run in families. If your parents developed cataracts at a younger age, you may be at higher risk for early cataract formation. The genetic component is not fully understood, but it likely involves variations in lens protein structure and antioxidant enzyme efficiency.
          </p>
          <p>
            Family history does not guarantee early cataracts, and lack of family history does not prevent them. Most cataracts are still driven primarily by aging and environmental factors. But if you have a strong family history, earlier screening and more aggressive UV protection may be warranted.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Trauma: Injury-Related <strong>Cataracts</strong></h2>
          <p>
            Blunt or penetrating trauma to the eye can damage the lens and cause a traumatic cataract. This can happen immediately after the injury or develop gradually over months to years.
          </p>
          <p>
            Traumatic cataracts are less common than age-related cataracts, but they disproportionately affect younger patients. Protective eyewear during sports, yard work, and industrial activities reduces this risk significantly.
          </p>
          <p>
            If you have had significant eye trauma in the past, even if your vision seems fine now, periodic eye exams are important to monitor for delayed cataract formation or other structural changes.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Smoking: Oxidative <strong>Stress</strong></h2>
          <p>
            Smoking increases cataract risk through oxidative damage to lens proteins. Studies show that smokers develop cataracts earlier than non-smokers, and the risk increases with the number of pack-years smoked.
          </p>
          <p>
            Quitting smoking reduces this risk, though the benefit takes years to accumulate. This is one of many reasons to quit, but it is worth noting for patients who wonder whether lifestyle changes can slow cataract progression. They can.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Other <strong>Factors</strong></h2>
          <p>
            Several other factors contribute to cataract formation, though their effects are generally smaller than aging, UV, and diabetes:
          </p>
          <ul>
            <li><strong>Alcohol use:</strong> Heavy alcohol consumption may accelerate cataract formation, though the data is mixed.</li>
            <li><strong>Radiation exposure:</strong> Ionizing radiation (from cancer treatment or occupational exposure) increases cataract risk.</li>
            <li><strong>Previous eye surgery:</strong> Retina surgery, glaucoma surgery, and even refractive surgery can accelerate cataract development.</li>
            <li><strong>Inflammatory eye diseases:</strong> Uveitis and other chronic inflammatory conditions increase cataract risk.</li>
            <li><strong>Nutritional deficiencies:</strong> Low antioxidant intake (vitamins C and E, carotenoids) may contribute to faster cataract progression, though supplementation trials have shown mixed results.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Can You <strong>Prevent</strong> Cataracts?</h2>
          <p>
            You cannot prevent age-related cataracts entirely. Everyone who lives long enough will develop them. But you can slow their progression:
          </p>
          <ul>
            <li>Wear UV-blocking sunglasses outdoors, every day, year-round.</li>
            <li>Control blood sugar if you are diabetic.</li>
            <li>Avoid smoking and limit alcohol.</li>
            <li>Eat a diet rich in antioxidants (leafy greens, colorful vegetables, fish).</li>
            <li>Use protective eyewear during high-risk activities.</li>
            <li>Get regular eye exams to catch cataracts early.</li>
          </ul>

          <BlurReveal><div className="insight-highlight">
            <p><strong>None of these eliminate cataracts. But they may delay the need for surgery by several years, and those years matter.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When Cataracts Become <strong>Significant</strong></h2>
          <p>
            Knowing what causes cataracts is useful, but the more important question is: when do they need treatment? The answer is when they interfere with your quality of life. Not when they first appear on an eye exam, but when they affect your ability to drive safely, read comfortably, work effectively, or enjoy activities that matter to you.
          </p>
          <p>
            Cataracts do not improve on their own. There are no eye drops or supplements that reverse lens clouding. When vision becomes limited, the only effective treatment is cataract surgery: removing the clouded lens and replacing it with a clear artificial lens implant.
          </p>
          <p>
            The decision about when to proceed with surgery is always yours. It is based on how much the cataracts bother you, not on how they look to the surgeon. See <Link href="/insights/when-do-i-need-cataract-surgery">Do I Really Need Cataract Surgery Right Now?</Link> for more on timing.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Takeaway</strong></h2>
          <p>
            Cataracts are caused primarily by aging, but UV exposure, diabetes, steroids, genetics, trauma, and smoking all accelerate the process. You cannot prevent cataracts entirely, but you can slow their progression through UV protection, blood sugar control, and healthy lifestyle choices.
          </p>
          <p>
            When cataracts become visually significant, surgery is the only effective treatment. The procedure is safe, effective, and restorative. The goal is not to avoid cataracts (you cannot), but to manage them wisely when the time comes.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow text-center">
          <div className="section-divider" style={{margin: '48px auto'}} />
          <p><strong>Questions about cataracts or cataract surgery?</strong></p>
          <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
