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
  title: 'The Eye You Least Suspect: When a Different Disease Appears in the Other Eye',
  description: 'A patient with a retinal vein occlusion in one eye noticed worsening vision. The problem was in the other eye: wet macular degeneration. A reflection on anchoring bias, diagnostic humility, and why ophthalmologists examine both eyes every time.',
  alternates: { canonical: '/insights/the-eye-you-least-suspect' },
  openGraph: {
    title: 'The Eye You Least Suspect | Dr. Keith Tokuhara',
    description: 'He assumed his right eye was getting worse. The problem was in his left. A reflection on anchoring bias and why we examine both eyes every time.',
    url: 'https://drtokuhara.com/insights/the-eye-you-least-suspect',
  },
};

const jsonLd = [
  articleSchema({
    title: 'The Eye You Least Suspect',
    description: 'A patient with a known retinal vein occlusion noticed worsening vision. The real problem was wet macular degeneration in the other eye. A reflection on anchoring bias and diagnostic humility.',
    slug: '/insights/the-eye-you-least-suspect',
    datePublished: '2026-05-09',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Eye You Least Suspect', href: '/insights/the-eye-you-least-suspect' },
  ]),
];

export default function InsightTheEyeYouLeastSuspect() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/eye-iris-detail-warm.mp4"
        poster="/media/the-eye-you-least-suspect-hero.png"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Clinical Insight</span>
          <h1>The Eye You Least <strong>Suspect</strong></h1>
          <p className="page-hero-sub">He assumed his right eye was getting worse. The real problem was in his left. A reflection on anchoring bias, diagnostic humility, and why we examine both eyes every time.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            A patient recently returned to my office for what seemed like a straightforward follow-up. Months earlier, he had been diagnosed with a central retinal vein occlusion in his right eye, a condition where the main vein draining blood from the retina becomes blocked.
          </p>
          <p>
            We had been watching carefully for complications: fluid buildup in the macula, progression to a more severe form of the disease, the kinds of changes that can quietly steal vision if they go undetected.
          </p>
          <p>
            Over the previous two weeks, he noticed his vision was not as sharp, particularly while reading on his iPad. Because we had spent months discussing the possibility of complications in his right eye, he assumed that was the source of the trouble.
          </p>
          <p>
            He was wrong. But not in a way anyone would expect.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Unexpected <strong>Finding</strong></h2>
          <p>
            His right eye was stable. The retinal hemorrhages from the vein occlusion were still present, but the macula was dry. No fluid. No swelling. The high-resolution OCT scan confirmed it.
          </p>
          <p>
            The problem was in his left eye.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Beneath the retina of a left eye we had been monitoring for early, dry age-related macular degeneration, something entirely new had emerged. Hemorrhage. Cystic fluid. Retinal thickening. The dry macular degeneration had quietly converted to the wet form, a more aggressive process that requires prompt treatment to preserve vision.</strong></p>
          </div></BlurReveal>

          <p>
            While we were watching one eye for one disease, a different disease announced itself in the other.
          </p>

          <div className="content-image" style={{marginTop: '32px'}}>
            <Image
              src="/media/eye-closeup-single.png"
              alt="Close-up view of a human eye during ophthalmic examination"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Patients Focus on the <strong>Wrong Eye</strong></h2>
          <p>
            This is more common than most people realize. The human brain integrates visual information from both eyes so seamlessly that it can be genuinely difficult to determine which eye is causing a problem. Cover one eye, and the answer might surprise you. Many patients who come to my office convinced that their right eye is the issue discover, sometimes with real shock, that the left eye was responsible all along.
          </p>
          <p>
            There is a reason for this beyond simple anatomy. Psychologists call it anchoring bias. Once a diagnosis exists, the mind attaches new information to that known explanation. This patient knew he had a vein occlusion in the right eye. So when his vision changed, his brain built the most logical story it could: the right eye must be getting worse.
          </p>
          <p>
            It is a very human response. We all reach for familiar explanations when something feels uncertain. It reduces anxiety. It gives us the sense that we understand what is happening, even when the full picture is more complex than we realize.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why We Examine <strong>Both Eyes</strong></h2>
          <p>
            Patients sometimes ask why we need to dilate and examine both eyes when only one seems to be causing trouble. It is a fair question, and the answer is simple: disease does not follow the stories we tell ourselves about it.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/eye-closeup-both.png"
              alt="Comparison view of both eyes during a comprehensive ophthalmic exam"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <p>
            The body does not organize its problems according to our expectations. A condition can develop silently in one eye while all of our attention, both the patient's and the physician's, is directed at the other. If we only looked where we already knew to look, we would miss the very thing that matters most.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>This is what diagnostic humility looks like in practice. It means accepting that the next finding may not come from the direction you expect.</p>
          </div></BlurReveal>

          <p>
            It means resisting the pull of pattern recognition long enough to see what is actually there, rather than what you assume should be there.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Philosophy of <strong>Seeing</strong></h2>
          <p>
            There is something deeper here that goes beyond clinical medicine. We tend to think of vision as a straightforward act. Light enters the eye, the brain processes it, and we see the world as it is. But that is not quite right.
          </p>
          <p>
            Vision is interpretive. What we see is filtered through the brain's assumptions, its expectations, its accumulated experience. We do not simply observe reality. We construct it, moment by moment, from incomplete information and prior belief.
          </p>
          <p>
            In this case, both the patient and the structure of the follow-up visit could easily have centered entirely on the right eye. The known problem. The expected complication. And if we had stopped there, the quiet emergence of wet macular degeneration in the left eye might have gone undetected for weeks longer.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Attention illuminates. But it also narrows. What you focus on reveals certain truths while potentially hiding others. Medicine, at its best, requires the discipline to look beyond the obvious, beyond the expected, and sometimes beyond the very place where everyone assumes the answer must be.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Observation as <strong>Protection</strong></h2>
          <p>
            This is why comprehensive examination is not a formality. It is not a billing exercise or a box to check. Every time we dilate both eyes, every time we scan both retinas, we are acknowledging a fundamental truth about the human body: it does not owe us predictability.
          </p>
          <p>
            The next problem may come from the eye you least suspect. And the only reliable defense against that uncertainty is the willingness to look everywhere, every time.
          </p>

          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>In ophthalmology, careful observation is not simply routine. It is protection. The eye that seems fine may be the one that needs you most. And the discipline to look, truly look, at what is in front of you rather than what you expect to find is one of the most important things a physician can practice.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/do-i-really-need-surgery" className="related-card">
              <h3>Do I Really Need Surgery Yet?</h3>
              <p>Sometimes the answer is not yet. Timing and honest evaluation matter.</p>
            </Link>
            <Link href="/complex-cases/macular-degeneration" className="related-card">
              <h3>Cataracts and Macular Degeneration</h3>
              <p>Managing cataract surgery when macular degeneration is also present.</p>
            </Link>
            <Link href="/insights/twenty-years-forward" className="related-card">
              <h3>Twenty Years Forward</h3>
              <p>She thought she just needed new glasses. The exam revealed something treatable, not just aging.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a thorough consultation actually looks like, and why it matters.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
