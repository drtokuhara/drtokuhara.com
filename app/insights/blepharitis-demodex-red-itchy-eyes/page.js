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
  title: 'Blepharitis and Demodex: The Hidden Cause of Red, Itchy Eyes - Dr. Keith Tokuhara',
  description: 'Red, itchy, irritated eyes that never quite go away? Blepharitis and Demodex mites are among the most common and most overlooked causes. What they are, why they matter for cataract surgery, and how to treat them.',
  keywords: ['blepharitis treatment', 'demodex eyelash mites', 'red itchy eyes causes', 'eyelid inflammation', 'blepharitis and cataract surgery', 'meibomian gland dysfunction', 'chronic red eyes treatment'],
  alternates: { canonical: '/insights/blepharitis-demodex-red-itchy-eyes' },
  openGraph: {
    title: 'Blepharitis and Demodex: The Hidden Cause of Red, Itchy Eyes | Dr. Keith Tokuhara',
    description: 'The most common eye condition most patients have never heard of. What blepharitis and Demodex mites actually are, why they make your eyes miserable, and what finally works.',
    url: 'https://drtokuhara.com/insights/blepharitis-demodex-red-itchy-eyes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blepharitis and Demodex: The Hidden Cause of Red, Itchy Eyes',
    description: 'The most common eye condition most patients have never heard of. Why your eyes are red and itchy, and what finally works.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is blepharitis and what causes it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blepharitis is chronic inflammation of the eyelids, usually along the lash line. It can be caused by bacterial buildup, oil gland dysfunction (meibomian gland dysfunction), skin conditions like rosacea, or Demodex mites. It is extremely common, especially in patients over 50, and tends to be a chronic condition that requires ongoing management rather than a one-time cure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are Demodex mites and can they live on eyelashes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Demodex are microscopic mites that naturally live in hair follicles and oil glands, including along the eyelashes. Most people have some Demodex without symptoms. When populations grow too large, they cause irritation, redness, itching, crusty lashes, and a gritty feeling. They are more common in older adults and can be a significant contributor to chronic blepharitis that does not respond to standard treatments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does blepharitis affect cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Untreated blepharitis can affect cataract surgery in several ways. It disrupts the tear film, which changes the measurements used to select your lens implant. This means the lens calculation may be less accurate, potentially affecting your outcome. It also increases infection risk. Most cataract surgeons want blepharitis well controlled before operating, and addressing it beforehand often leads to better surgical results and a more comfortable recovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can blepharitis be cured permanently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blepharitis is typically a chronic condition that can be managed effectively but not permanently cured. Most patients find that consistent lid hygiene, warm compresses, and appropriate treatment keep symptoms minimal. Flare-ups can occur with seasonal changes, stress, or lapses in routine. The goal is long-term control, not a one-time fix, and most patients do very well once they understand their condition and maintain good habits.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Blepharitis and Demodex: The Hidden Cause of Red, Itchy Eyes',
    description: 'Red, itchy, irritated eyes that never quite go away? Blepharitis and Demodex mites are among the most common and most overlooked causes. What they are, why they matter, and how to treat them.',
    slug: '/insights/blepharitis-demodex-red-itchy-eyes',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Blepharitis and Demodex', href: '/insights/blepharitis-demodex-red-itchy-eyes' },
  ]),
  faqSchema,
];

export default function InsightBlepharitisDemodex() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-golden-hour.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Education</span>
          <h1>Blepharitis and Demodex: The Hidden Cause of Red, <strong>Itchy Eyes</strong></h1>
          <p className="page-hero-sub">The most common eye condition most patients have never heard of. If your eyes have been red and irritated for months, this may be why.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            She had been using artificial tears four times a day for over a year. Her previous eye doctor told her she had dry eye and gave her a prescription. The drops helped a little, but the redness never fully went away. The itching came and went. Some mornings her lashes were crusted together.
          </p>
          <p>
            When she came to our office for a cataract evaluation, the first thing I noticed was her eyelids. The lash line was red. There was a waxy buildup at the base of her lashes. Under the slit lamp, I could see the telltale cylindrical dandruff-like deposits that Demodex mites leave behind.
          </p>
          <p>
            She did not have dry eye alone. She had blepharitis, and it had been there for a long time.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Blepharitis <strong>Actually Is</strong></h2>
          <p>
            Blepharitis is inflammation of the eyelids, specifically along the lash line and the tiny oil glands that sit just behind it. Those oil glands, called meibomian glands, produce the lipid layer of your tear film. When they become clogged or inflamed, the tears evaporate too quickly and the eyelids become irritated.
          </p>
          <p>
            It is extraordinarily common. In clinical practice, I see some degree of blepharitis in the majority of patients over 50. Most have never been told what it is. They have been given artificial tears or told their eyes are "just dry."
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Blepharitis is the most underdiagnosed condition in ophthalmology. Not because it is hard to find, but because it is easy to overlook.</strong></p>
          </div></BlurReveal>

          <p>
            There are two main types. Anterior blepharitis affects the outside of the eyelid, right at the lash line. It is often caused by bacteria or, increasingly recognized, by Demodex mites. Posterior blepharitis involves the meibomian glands themselves and is closely related to meibomian gland dysfunction, or MGD.
          </p>
          <p>
            Most patients have some combination of both.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Demodex <strong>Question</strong></h2>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/eye-closeup-single.png"
              alt="Close-up view of an eye, showing the detail of the iris and lash line where Demodex mites may be present"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <p>
            Demodex mites are microscopic organisms that live in hair follicles and oil glands. Nearly every adult has them. They are a normal part of the skin ecosystem, and in small numbers they cause no problems.
          </p>
          <p>
            But when populations grow too large, particularly in the lash follicles, they become a problem. Demodex feed on skin cells and sebum. Their waste products trigger inflammation. Their physical presence clogs the follicle openings. The result is chronic irritation that does not respond well to standard dry eye treatment.
          </p>
          <p>
            The classic sign under the slit lamp is cylindrical dandruff: tiny, waxy sleeves wrapped around the base of each eyelash. If I see that, Demodex is almost certainly a major contributor.
          </p>
          <p>
            Demodex blepharitis tends to be more common in patients over 60, in people with rosacea, and in those with weakened immune systems. But I see it across all ages. The mites are not a sign of poor hygiene. They are simply part of being human, and sometimes they overpopulate.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why This Matters for <strong>Cataract Surgery</strong></h2>
          <p>
            This is where blepharitis goes from "nuisance" to "clinically important."
          </p>
          <p>
            Before cataract surgery, we take precise measurements of the eye to calculate the correct lens implant power. Those measurements depend on the tear film being stable and the corneal surface being smooth. Blepharitis disrupts both.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>An unstable tear film changes the measurements. Changed measurements can mean a less accurate lens selection. That is why we want blepharitis controlled before surgery, not after.</strong></p>
          </div></BlurReveal>

          <p>
            There is also an infection risk consideration. The bacteria and inflammatory debris along blepharitic eyelids represent a potential source of contamination during surgery. While modern surgical prep minimizes this risk significantly, starting with clean, healthy lids provides an additional margin of safety.
          </p>
          <p>
            I have seen patients whose cataract surgery outcomes were compromised not by the surgery itself, but by unaddressed surface disease that made the preoperative measurements unreliable. It is one of the most preventable causes of a less-than-optimal result.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What <strong>Treatment Looks Like</strong></h2>
          <p>
            The good news is that blepharitis responds well to treatment. The less good news is that it requires consistency. This is a chronic condition, like managing blood pressure or cholesterol. You do not treat it once and walk away.
          </p>
          <p>
            The foundation is lid hygiene. Warm compresses applied to closed eyelids for 5 to 10 minutes help soften the oil in clogged meibomian glands. Gentle lid scrubs with diluted baby shampoo or commercially available lid wipes remove debris and bacteria from the lash line.
          </p>
          <p>
            For Demodex specifically, tea tree oil-based products have been a mainstay. More recently, prescription treatments targeting Demodex directly have become available and tend to be more effective and better tolerated than the older tea tree oil preparations.
          </p>
          <p>
            In-office treatments can make a significant difference for patients with moderate to severe disease. Thermal pulsation therapy (such as LipiFlow) heats and expresses the meibomian glands directly. Intense pulsed light (IPL) therapy reduces inflammation and improves gland function over a series of treatments.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-elderly-woman-smiling.jpg"
              alt="Older woman smiling with clear, comfortable eyes after treatment"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <p>
            For the patient I mentioned at the beginning, we started treatment three months before her cataract surgery. Lid hygiene, a short course of anti-Demodex drops, and one round of IPL. By the time she came in for her pre-op measurements, her tear film was stable, her lids were clean, and her measurements were reliable.
          </p>
          <p>
            Her cataract surgery went well. But just as importantly, her eyes felt better than they had in years. The redness was gone. The itching stopped. She told me the cataract surgery was great, but the blepharitis treatment changed her daily life.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Signs You Might <strong>Have It</strong></h2>
          <p>
            Blepharitis does not always announce itself dramatically. Many patients have lived with it so long they think their symptoms are normal. If any of the following sound familiar, it is worth having your eyelids evaluated:
          </p>
          <ul style={{lineHeight: '2', marginTop: '16px', marginBottom: '16px'}}>
            <li>Red, irritated eyelids that look worse in the morning</li>
            <li>Crusty or flaky debris on your lashes when you wake up</li>
            <li>A gritty, sandy feeling that artificial tears only partially relieve</li>
            <li>Itching along the lash line, especially later in the day</li>
            <li>Eyes that water excessively but still feel dry</li>
            <li>Fluctuating vision that clears briefly after blinking</li>
            <li>Eyelid styes or chalazia that keep coming back</li>
            <li>Sensitivity to light that seems disproportionate</li>
          </ul>
          <p>
            If you have been treated for dry eye without improvement, blepharitis may be the underlying cause that has not been addressed.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The treatment that finally worked was not for what I thought was wrong."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Bigger <strong>Picture</strong></h2>
          <p>
            Blepharitis is not dangerous. It will not cause blindness. But it can make your eyes genuinely miserable, and when left untreated, it can affect other procedures and treatments.
          </p>
          <p>
            What I tell patients is this: think of your eyelids the way you think of your gums. You do not just brush your teeth. You take care of the tissue around them. Your eyelids are the same. They are part of the system that keeps your eyes healthy, and they deserve attention.
          </p>
          <p>
            If your eyes have been red and irritated for months, and drops alone are not solving it, ask your eye doctor to take a close look at your eyelids. The answer may have been sitting right there the whole time.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/when-the-eye-surface-changes-everything" className="related-card">
              <h3>When the Eye Surface Changes Everything</h3>
              <p>How ocular surface disease affects cataract surgery planning and outcomes.</p>
            </Link>
            <Link href="/insights/cataract-pre-op-appointment" className="related-card">
              <h3>Your Cataract Pre-Op Appointment</h3>
              <p>What happens during the evaluation that determines your surgical plan.</p>
            </Link>
            <Link href="/dry-eye" className="related-card">
              <h3>Dry Eye Treatment</h3>
              <p>Advanced dry eye management at Desert Vision Center, including LipiFlow and IPL therapy.</p>
            </Link>
            <Link href="/insights/when-cataracts-are-not-the-real-problem" className="related-card">
              <h3>When Cataracts Are Not the Real Problem</h3>
              <p>Sometimes the cataract is not what is causing the symptoms. What else to consider.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
