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
  title: 'Macular Degeneration: Wet vs Dry - What You Need to Know',
  description: 'Dry and wet macular degeneration are not the same disease. A retina fellowship-trained cataract surgeon explains the real differences, what each means for your vision, and why the distinction matters for treatment.',
  keywords: ['macular degeneration', 'wet macular degeneration', 'dry macular degeneration', 'AMD', 'age-related macular degeneration', 'wet vs dry AMD', 'retina specialist Coachella Valley', 'macular degeneration treatment', 'anti-VEGF injections'],
  alternates: { canonical: '/insights/macular-degeneration-wet-vs-dry' },
  openGraph: {
    title: 'Macular Degeneration: Wet vs Dry | Dr. Keith Tokuhara',
    description: 'Dry and wet macular degeneration behave differently and require different approaches. A retina fellowship-trained surgeon explains what each means for your vision.',
    url: 'https://drtokuhara.com/insights/macular-degeneration-wet-vs-dry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macular Degeneration: Wet vs Dry',
    description: 'A retina fellowship-trained cataract surgeon explains the real differences between wet and dry AMD and why the distinction matters.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between wet and dry macular degeneration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dry macular degeneration involves the gradual thinning and breakdown of the macula, the central part of the retina responsible for sharp vision. It progresses slowly over years and accounts for about 85 to 90 percent of all AMD cases. Wet macular degeneration occurs when abnormal blood vessels grow beneath the retina and leak fluid or blood, causing rapid and often sudden vision loss. Wet AMD is less common but more immediately threatening to central vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can dry macular degeneration turn into wet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dry macular degeneration can convert to the wet form at any time. This is why regular monitoring is important, even when the dry form appears stable. Patients with intermediate or advanced dry AMD are at higher risk for conversion. Symptoms of conversion include a sudden change in vision, new distortion of straight lines, or a dark spot in the center of vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is wet macular degeneration treated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wet macular degeneration is treated with anti-VEGF injections, medications injected directly into the eye that block the growth factor responsible for abnormal blood vessel formation. These injections can slow or stop the leakage, preserve remaining vision, and in some cases improve vision. Treatment typically requires a series of injections, initially monthly, with the interval adjusted based on the eye response. Newer medications like faricimab allow longer intervals between treatments for some patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a cure for macular degeneration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is currently no cure for either form of macular degeneration. For dry AMD, the AREDS2 vitamin formulation has been shown to reduce the risk of progression in intermediate and advanced cases. For wet AMD, anti-VEGF injections are highly effective at controlling the disease, but treatment is ongoing. Research into geographic atrophy treatments, gene therapy, and stem cell approaches is active and producing new options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still have cataract surgery if I have macular degeneration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cataract surgery is safe for most patients with macular degeneration and is often beneficial. Removing the cataract allows the surgeon to better monitor the retina and often improves peripheral and functional vision even when macular degeneration limits central acuity. However, lens selection matters: multifocal lenses are generally not recommended because they can reduce contrast sensitivity, which is already compromised by the macular disease. A surgeon with retina training understands these nuances.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Macular Degeneration: Wet vs Dry - What You Need to Know',
    description: 'A retina fellowship-trained cataract surgeon explains the real differences between wet and dry macular degeneration and why the distinction matters for your vision.',
    slug: '/insights/macular-degeneration-wet-vs-dry',
    datePublished: '2026-06-14',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Macular Degeneration: Wet vs Dry', href: '/insights/macular-degeneration-wet-vs-dry' },
  ]),
  faqSchema,
];

export default function InsightMacularDegenerationWetVsDry() {
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
          <span className="insight-hero-cluster">Education</span>
          <h1>Macular Degeneration: <strong>Wet vs Dry</strong></h1>
          <p className="page-hero-sub">They share a name, but they are not the same disease. Understanding the difference changes how you think about your vision.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="June 14, 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            She sat down in my exam chair and said, "My other doctor told me I have macular degeneration. He said there is nothing they can do." She was 74 years old. She had stopped reading. She had stopped driving at night. She was quietly losing confidence in her independence, and she believed the diagnosis was a sentence.
          </p>
          <p>
            The first question I asked her was simple: "Did they tell you which kind?"
          </p>
          <p>
            She looked at me as if there were only one kind. And that is the problem. When patients hear "macular degeneration," most assume the worst. They picture blindness. They picture a future without reading, without recognizing faces, without the visual details that make daily life feel normal. And while macular degeneration is a serious diagnosis, the reality depends entirely on which form you have, and what is happening inside the retina right now.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Two Diseases, <strong>One Name</strong></h2>
          <p>
            Age-related macular degeneration, or AMD, affects the macula, the small central area of the retina responsible for your sharpest, most detailed vision. It is the part of the retina you use when you read, recognize faces, thread a needle, or watch a golf ball land on the green.
          </p>
          <p>
            There are two forms: dry and wet. They share the same location in the eye and the same name, but they behave very differently, progress at different speeds, and require completely different management.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/macular-degeneration-eye-anatomy.png"
              alt="Cross-section of the human eye showing the macula and retinal structures affected by macular degeneration"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">The macula is the center of the retina, responsible for fine detail vision. Both dry and wet macular degeneration affect this critical area, but in different ways.</p>
          </div>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Dry AMD accounts for roughly 85 to 90 percent of all macular degeneration cases. It is the more common form, and for many patients, it progresses slowly enough that vision remains functional for years.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Dry Macular Degeneration: <strong>The Slow Shift</strong></h2>
          <p>
            Dry AMD develops when the light-sensitive cells in the macula gradually thin and break down over time. Small yellow deposits called drusen accumulate beneath the retina. In early stages, most patients notice nothing at all. The diagnosis is often made during a routine eye exam, before any symptoms appear.
          </p>
          <p>
            As dry AMD progresses from early to intermediate to advanced, patients may notice that straight lines appear slightly wavy, that reading requires more light than it used to, or that colors seem less vivid. The central vision becomes gradually less sharp, while the peripheral vision remains intact.
          </p>
          <p>
            The advanced form of dry AMD is called geographic atrophy. In this stage, patches of retinal tissue in the macula die, creating permanent blind spots in the central vision. Geographic atrophy progresses slowly, but once tissue is lost, it does not come back.
          </p>
          <p>
            For years, there was no treatment for dry AMD beyond lifestyle modifications and the AREDS2 vitamin formulation, which has been shown to reduce progression risk in intermediate and advanced cases by about 25 percent. Recently, new injectable treatments for geographic atrophy, such as pegcetacoplan and avacincaptad pegol, have become available. These do not reverse damage, but they can slow the rate of retinal tissue loss in some patients. This is a meaningful step forward, and the research is still evolving.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Wet Macular Degeneration: <strong>The Urgent One</strong></h2>
          <p>
            Wet AMD is different. It occurs when abnormal blood vessels grow beneath the retina in a process called choroidal neovascularization. These vessels are fragile. They leak fluid and blood into the retinal layers, causing rapid swelling and distortion of the macula.
          </p>
          <p>
            The symptoms of wet AMD tend to appear suddenly. A patient may notice that straight lines look bent, that a dark spot has appeared in the center of their vision, or that their reading vision has deteriorated sharply over days or weeks. This is a fundamentally different timeline than dry AMD, which unfolds over years.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/macular-degeneration-reading-difficulty.png"
              alt="A senior woman struggling to read a book in warm sunlight, illustrating the central vision loss caused by macular degeneration"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Central vision loss from macular degeneration often affects reading first. Patients describe the words becoming harder to track, letters blending together, or a dark smudge over the page.</p>
          </div>

          <p>
            Wet AMD accounts for only about 10 to 15 percent of macular degeneration cases, but it is responsible for the majority of severe vision loss associated with the disease. The good news is that it is treatable. Anti-VEGF injections, medications delivered directly into the eye, block the growth factor that drives the abnormal blood vessel formation. These injections can stop the leaking, reduce the swelling, and in many cases stabilize or even improve vision.
          </p>
          <p>
            The most commonly used anti-VEGF medications include ranibizumab (Lucentis), aflibercept (Eylea), and faricimab (Vabysmo). Newer options like faricimab have the advantage of longer duration, meaning some patients can go two or three months between injections rather than receiving them monthly.
          </p>
          <p>
            The key with wet AMD is speed. The sooner treatment begins after symptoms appear, the better the visual outcome. Waiting weeks or months allows the leaking blood vessels to cause more damage to the retinal tissue, and that damage may be permanent.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"He told me there was nothing they could do. But he never told me I had the kind that responds to treatment. I lost three months."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Conversion <strong>Question</strong></h2>
          <p>
            One of the most important things patients with dry AMD need to understand is that dry can convert to wet. At any point. The transition is not predictable, and it is not always gradual. A patient can have stable dry AMD for years and then develop wet AMD overnight.
          </p>
          <p>
            This is why regular monitoring matters. During my retina fellowship training at Loma Linda University, I learned that the patients who do best are the ones who understand what to watch for: a sudden change in vision, new distortion of straight lines, or a new dark spot in the central vision. These are signs of conversion, and they warrant an urgent exam.
          </p>
          <p>
            Many ophthalmologists recommend that patients with intermediate or advanced dry AMD use an Amsler grid at home, a simple printed grid of straight lines that the patient checks daily with each eye individually. If the lines start to appear wavy or a new area of the grid seems missing, it is time to call.
          </p>
          <p>
            I tell my patients: you are the first line of monitoring between visits. No imaging device replaces the awareness of someone who knows what to look for.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why This Matters <strong>for Cataract Patients</strong></h2>
          <p>
            Macular degeneration and cataracts are both age-related conditions. Many patients have both. And when they do, the cataract can mask the macular degeneration, making it harder to see the retina clearly during exams and harder for the patient to know how much of their vision loss is from the cataract versus the macular disease.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/retina-consultation-exam.png"
              alt="An ophthalmologist reviewing retinal imaging with a patient during a consultation"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Retinal imaging like OCT allows us to see the layers of the macula in cross-section, detect fluid, measure tissue thickness, and track changes over time.</p>
          </div>

          <p>
            Removing the cataract is almost always beneficial. It clears the optical path, lets us monitor the retina more accurately, and typically improves the patient's functional vision, peripheral vision, contrast, and color perception, even if the central vision is limited by the macular disease.
          </p>
          <p>
            But lens selection matters. Multifocal lenses, which split light to provide both distance and near focus, are generally not recommended for patients with macular degeneration. The macular disease already reduces contrast sensitivity, and multifocal optics reduce it further. In most cases, a high-quality monofocal lens provides the best visual quality for these patients.
          </p>
          <p>
            This is one of the reasons my training matters. I completed a retina fellowship after my cataract surgery training under Dr. Howard Gimbel. I understand both the front and back of the eye, the cataract and the macular disease, and I make lens decisions with the full picture in mind. A cataract surgeon without retina training may not fully appreciate how the macular condition should influence the surgical plan.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The worst outcome is choosing a lens that looks perfect on paper but performs poorly in an eye with macular disease. Lens selection for these patients requires retina-level understanding.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What You Can <strong>Control</strong></h2>
          <p>
            Macular degeneration has a genetic component. If a parent or sibling had it, your risk is higher. You cannot change your genes. But there are factors that influence how the disease progresses:
          </p>
          <ul style={{marginBottom: '24px'}}>
            <li><strong>Smoking</strong> is the single most modifiable risk factor. Smokers are two to four times more likely to develop AMD, and quitting at any age reduces the risk of progression.</li>
            <li><strong>UV protection</strong> matters. Wear sunglasses with UV-A and UV-B protection, especially in high-sun environments like the Coachella Valley.</li>
            <li><strong>Diet</strong> plays a role. Leafy greens, fish high in omega-3 fatty acids, and a diet rich in antioxidants have been associated with lower AMD risk.</li>
            <li><strong>AREDS2 vitamins</strong> are recommended for patients with intermediate or advanced dry AMD. These are specific formulations (lutein, zeaxanthin, zinc, copper, vitamins C and E) that have been clinically shown to reduce progression risk.</li>
            <li><strong>Blood pressure and cardiovascular health</strong> may influence macular degeneration. Managing hypertension and maintaining cardiovascular fitness supports retinal blood flow.</li>
          </ul>
          <p>
            None of these will cure macular degeneration. But they give patients some agency in a diagnosis that can otherwise feel helpless. And that matters.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Conversation <strong>That Should Happen</strong></h2>
          <p>
            When I see a patient with macular degeneration, whether dry or wet, I make sure they leave the office understanding four things:
          </p>
          <p>
            First, which form they have. This is not a detail. It determines everything about the treatment plan, the monitoring schedule, and the prognosis.
          </p>
          <p>
            Second, what to watch for. Conversion from dry to wet can happen between visits. Patients need to know the warning signs and know to call immediately, not wait for their next scheduled appointment.
          </p>
          <p>
            Third, what we can do. For dry AMD, that means vitamins, lifestyle modifications, and now potentially geographic atrophy treatments. For wet AMD, that means anti-VEGF injections, which are highly effective when started early.
          </p>
          <p>
            Fourth, how this affects their cataract plan if they have both conditions. The cataract conversation changes when macular degeneration is part of the picture, and patients deserve a surgeon who understands that.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The patient who walked in believing nothing could be done walked out understanding that she had dry macular degeneration, that her vision could be monitored and protected, and that her cataract was the more fixable part of the problem. The diagnosis had not changed. But her understanding of it had.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h3 className="section-title-sm">Related <strong>Reading</strong></h3>
          <ul className="insight-related-list">
            <li><Link href="/complex-cases/macular-degeneration">Macular Degeneration and Cataract Surgery</Link></li>
            <li><Link href="/diabetic-retinopathy">Diabetic Retinopathy</Link></li>
            <li><Link href="/insights/cataract-surgery-and-diabetes">Cataract Surgery and Diabetes</Link></li>
            <li><Link href="/insights/when-cataracts-are-not-the-real-problem">When Cataracts Are Not the Real Problem</Link></li>
            <li><Link href="/insights/choosing-the-standard-lens">The Standard Lens Is Not a Consolation Prize</Link></li>
            <li><Link href="/insights/do-i-really-need-surgery">Do I Really Need Surgery?</Link></li>
            <li><Link href="/insights/floaters-flashes-when-to-worry">Floaters, Flashes, and When to Worry</Link></li>
            <li><Link href="/contact">Schedule a Consultation</Link></li>
          </ul>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container content-narrow text-center">
          <h2>Questions About Macular Degeneration?</h2>
          <p>Understanding your diagnosis is the first step toward protecting your vision. A consultation with a retina fellowship-trained surgeon can clarify where you stand and what comes next.</p>
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
