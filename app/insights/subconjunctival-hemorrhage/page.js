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
  title: 'Subconjunctival Hemorrhage: Why Your Eye Looks Scary but You Are Fine - Dr. Keith Tokuhara',
  description: 'A bright red spot on the white of your eye is alarming. A cataract surgeon explains why subconjunctival hemorrhage is usually harmless and what to watch for.',
  alternates: { canonical: '/insights/subconjunctival-hemorrhage' },
  openGraph: {
    title: 'Subconjunctival Hemorrhage: Why Your Eye Looks Scary but You Are Fine | Dr. Keith Tokuhara',
    description: 'Why a bright red spot on your eye is usually harmless, from a surgeon who sees this weekly.',
    url: 'https://drtokuhara.com/insights/subconjunctival-hemorrhage',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a subconjunctival hemorrhage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A subconjunctival hemorrhage is a broken blood vessel on the white surface of the eye. It appears as a bright red patch and looks alarming but is almost always harmless. The blood is trapped under a clear membrane called the conjunctiva.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes a subconjunctival hemorrhage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common causes include straining (coughing, sneezing, vomiting, heavy lifting), minor trauma, rubbing your eyes, blood thinners, or simply waking up with one. Often there is no identifiable cause. High blood pressure can contribute but does not always mean your pressure is out of control.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a subconjunctival hemorrhage take to heal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most subconjunctival hemorrhages resolve on their own within 7 to 14 days. Larger ones may take up to three weeks. The red color gradually fades to yellow or green before disappearing, similar to a bruise on the skin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I see a doctor for a subconjunctival hemorrhage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most subconjunctival hemorrhages do not require urgent medical attention. See a doctor if you have vision loss, significant eye pain, trauma to the eye, recurrent hemorrhages, or if you are on blood thinners and the bleeding does not stop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a subconjunctival hemorrhage cause blindness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A subconjunctival hemorrhage is blood on the surface of the eye, not inside the eye. It does not affect your vision or damage the retina, lens, or optic nerve. It looks severe but is not a threat to your eyesight.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Subconjunctival Hemorrhage: Why Your Eye Looks Scary but You Are Fine',
    description: 'A cataract surgeon explains why a bright red spot on the white of your eye is usually harmless and when to be concerned.',
    slug: '/insights/subconjunctival-hemorrhage',
    datePublished: '2026-06-05',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Subconjunctival Hemorrhage', href: '/insights/subconjunctival-hemorrhage' },
  ]),
  faqSchema,
];

export default function InsightSubconjunctivalHemorrhage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="page-hero page-hero-image" style={{
        backgroundImage: 'url(/media/subconjunctival-hemorrhage-hero.png)',
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
          <span className="insight-hero-cluster">Eye Conditions</span>
          <h1>Subconjunctival Hemorrhage: Why Your Eye Looks <strong>Scary but You Are Fine</strong></h1>
          <p className="page-hero-sub">A surgeon's reassuring explanation of the bright red spot that sends people to urgent care.</p>
          </ScrollReveal>
        </div>
      </div>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            You wake up, look in the mirror, and the white of your eye is bright red. Not pink. Not bloodshot. Solid red, like someone took a paintbrush to it. You did not hit your head. You did not feel anything happen. It just appeared.
          </p>
          <p>
            The first thought is usually, "Am I having a stroke?" The second is, "Do I need to go to the ER?" The answer to both, almost always, is no. What you are looking at is a subconjunctival hemorrhage. A broken blood vessel on the surface of the eye. It looks terrifying. It is not.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What It <strong>Is</strong></h2>
          <p>
            The white part of your eye, the sclera, is covered by a thin, clear membrane called the conjunctiva. This membrane contains tiny blood vessels. When one of those vessels breaks, blood spreads under the conjunctiva, trapped between the membrane and the eye itself.
          </p>
          <p>
            Because the blood has nowhere to go, it pools in a bright red patch. The conjunctiva is transparent, so you see every drop. It looks worse than it is. The blood is on the surface of the eye, not inside it. Your vision is fine. The eye itself is fine. What you are seeing is cosmetic, not dangerous.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>I see this weekly in clinic. Patients walk in convinced something is catastrophically wrong. I check their vision, examine the eye, and tell them the same thing: it will look worse before it looks better, and then it will fade completely. Most are relieved. Some do not believe me until it actually goes away.</strong></p>
          </div></BlurReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/eye-closeup-single.png"
              alt="Close-up view of an eye showing the surface structures where subconjunctival hemorrhage occurs"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What <strong>Causes</strong> It</h2>
          <p>
            Sometimes there is an obvious trigger. A hard sneeze. A bout of vomiting. Heavy lifting at the gym. A coughing fit that would not quit. Rubbing your eyes aggressively when you woke up. Any sudden spike in pressure can rupture a tiny vessel.
          </p>
          <p>
            Other times, there is no trigger at all. You go to bed with normal eyes and wake up with a red one. This happens more often than people expect. The vessels on the eye are fragile. They can break from almost nothing.
          </p>
          <p>
            Blood thinners make it more common. Aspirin, warfarin, apixaban, rivaroxaban. Any medication that reduces clotting can increase the likelihood of a subconjunctival hemorrhage. That does not mean the medication is dangerous or that you need to stop it. It just means the threshold for a vessel to break is lower.
          </p>
          <p>
            High blood pressure is another contributing factor. But having a subconjunctival hemorrhage does not automatically mean your blood pressure is out of control. I have seen patients with perfect blood pressure readings walk in with a bright red eye. Still, if you have recurrent hemorrhages, checking your blood pressure is worth doing.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The hardest part is convincing people that something this dramatic can be this benign."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What It <strong>Is Not</strong></h2>
          <p>
            A subconjunctival hemorrhage is not bleeding inside the eye. It is not retinal bleeding. It is not macular degeneration. It is not glaucoma. It is not a sign of detachment or rupture. It is a surface problem, like a bruise on your skin. Alarming to look at, harmless in function.
          </p>
          <p>
            It does not cause vision loss. If your vision is blurry, that is a separate issue and needs evaluation. A subconjunctival hemorrhage, by itself, does not affect how you see. The blood is outside the optical pathway. Light still reaches the retina normally.
          </p>
          <p>
            It is also not contagious. You cannot give it to someone else. It is not pink eye. It is not an infection. It is purely mechanical. A vessel broke. Blood leaked. That is it.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How It <strong>Heals</strong></h2>
          <p>
            There is no treatment. The blood has to reabsorb on its own, the same way a bruise on your arm fades. That takes time. Usually seven to fourteen days. Larger hemorrhages can take up to three weeks.
          </p>
          <p>
            The appearance changes as it heals. The bright red fades to a darker red, then brown, then yellow or green. Eventually it disappears. People often think it is getting worse when the color shifts, but that progression is normal. It is the body breaking down and clearing the blood.
          </p>
          <p>
            There is nothing you can do to speed it up. Artificial tears can help if the eye feels scratchy or dry, but they will not make the hemorrhage go away faster. Ice does not help. Heat does not help. Time is the only cure.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Patients ask if wearing sunglasses will help. It will not make the hemorrhage heal faster, but it will make you feel less self-conscious when you go out in public. That counts for something.</strong></p>
          </div></BlurReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/stock-seniors-formal-resort-dusk.jpg"
              alt="Seniors enjoying a peaceful evening at a desert resort, relaxed and reassured"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <BlurReveal><div className="pull-quote">
            <p>"The eye is designed to look alarming when something goes wrong. A bright red patch triggers every survival instinct. But in this case, the alarm is cosmetic."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When to <strong>Worry</strong></h2>
          <p>
            Most subconjunctival hemorrhages need no medical attention. But there are exceptions. See a doctor if:
          </p>
          <ul>
            <li><strong>You have vision loss or blurry vision.</strong> That suggests something more serious is happening inside the eye.</li>
            <li><strong>You have significant eye pain.</strong> A subconjunctival hemorrhage is usually painless. Pain means something else might be wrong.</li>
            <li><strong>You had trauma to the eye.</strong> A blow to the head or face can cause deeper injury. The surface bleeding might be the least of it.</li>
            <li><strong>The hemorrhage keeps recurring.</strong> One episode is normal. Multiple episodes in a short period deserve evaluation.</li>
            <li><strong>You are on blood thinners and the bleeding does not stop.</strong> Most hemorrhages stabilize within a day or two. If it keeps spreading, that is worth checking.</li>
          </ul>
          <p>
            If none of those apply, you can wait it out. The eye will look dramatic for a week or two, and then it will be fine.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">After Cataract <strong>Surgery</strong></h2>
          <p>
            Subconjunctival hemorrhages are common after cataract surgery. The surgery itself can cause minor trauma to the conjunctiva. The eye is manipulated, positioned, and held steady. A small vessel can break during that process.
          </p>
          <p>
            When it happens post-operatively, it looks the same. Bright red. Alarming. Benign. It does not mean the surgery went wrong. It does not affect your visual outcome. It is a cosmetic side effect that resolves on its own.
          </p>
          <p>
            I tell patients before surgery that this can happen. Some still panic when they see it. The reassurance is the same: it will fade. Your eye is healing normally underneath the redness.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The mismatch between how a subconjunctival hemorrhage looks and how serious it actually is creates a lot of unnecessary fear. I have had patients drive themselves to urgent care convinced they were having a medical emergency. They were not. The eye is designed to look alarming when something goes wrong. A bright red patch triggers every survival instinct. But in this case, the alarm is cosmetic. The eye itself is fine. The hardest part of my job is sometimes just convincing people that their own eyes are not lying to them, just exaggerating a little.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/blepharitis-demodex-red-itchy-eyes" className="related-card">
              <h3>Blepharitis and Demodex</h3>
              <p>When red, itchy eyes are caused by inflammation at the lash line.</p>
            </Link>
            <Link href="/dry-eyes-desert" className="related-card">
              <h3>Dry Eyes in the Desert</h3>
              <p>Why living in the Coachella Valley makes dry eye worse and what to do about it.</p>
            </Link>
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>Your First Week After Cataract Surgery</h3>
              <p>What is normal and what to watch for in the first days after surgery.</p>
            </Link>
            <Link href="/blurry-vision-after-cataract-surgery" className="related-card">
              <h3>Blurry Vision After Cataract Surgery</h3>
              <p>Common causes of persistent blur after surgery and when to be concerned.</p>
            </Link>
            <Link href="/insights/floaters-flashes-when-to-worry" className="related-card">
              <h3>Floaters, Flashes, and When to Worry</h3>
              <p>When new floaters and flashing lights need same-day evaluation.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
