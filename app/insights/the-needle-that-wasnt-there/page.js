import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'The Needle That Wasn\'t There: Why an Ophthalmologist\'s Widow Avoided Cataract Surgery for Years',
  description: 'An 86-year-old woman delayed cataract surgery for years because of a fear of retrobulbar blocks. Her late husband was an ophthalmologist. Modern surgery uses numbing drops, not needles. A reflection on outdated fears and how medicine evolves.',
  alternates: { canonical: '/insights/the-needle-that-wasnt-there' },
  openGraph: {
    title: 'The Needle That Wasn\'t There | Dr. Keith Tokuhara',
    description: 'She avoided surgery for years because of a needle that is no longer used. A story about outdated fears, grief, and the moment everything changed.',
    url: 'https://drtokuhara.com/insights/the-needle-that-wasnt-there',
  },
};

const jsonLd = [
  articleSchema({
    title: 'The Needle That Wasn\'t There',
    description: 'An ophthalmologist\'s widow delayed cataract surgery for years because of outdated fears about retrobulbar blocks. Modern surgery changed everything.',
    slug: '/insights/the-needle-that-wasnt-there',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Needle That Wasn\'t There', href: '/insights/the-needle-that-wasnt-there' },
  ]),
];

export default function InsightNeedle() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/elderly-woman-poolside-desert.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center 30%'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Decisions & Timing</span>
          <h1>The Needle That <strong>Wasn't There</strong></h1>
          <p className="page-hero-sub">She avoided cataract surgery for years because of a procedure that is no longer used. Her late husband was an ophthalmologist.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            An 86-year-old woman returned today for her postoperative visit after cataract surgery. She was thrilled. 20/20 vision. Smiling before she even sat down.
          </p>
          <p>
            But what stayed with me was not the visual outcome. It was what she said next.
          </p>
          <p>
            Her late husband had been an ophthalmologist. She herself was a nurse. She had spent a lifetime around medicine, hearing stories, seeing outcomes, understanding just enough to form very specific fears.
          </p>
          <p>
            For years, she avoided cataract surgery because of one thing: the idea of a needle behind the eye.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Fear That <strong>Took Hold</strong></h2>
          <p>
            She had heard about retrobulbar blocks. Friends had described "seeing the needle," or at least anticipating it, and that image stuck. It became the dominant narrative in her mind about what cataract surgery meant.
          </p>
          <p>
            A retrobulbar block is an older anesthetic technique where numbing medication is delivered behind the eye with a needle to immobilize it. While still used in select cases, it is no longer routine for standard cataract surgery.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Today, most cataract surgery is performed using topical anesthesia: numbing drops combined with light sedation. There is no needle behind the eye in the vast majority of modern cases.</strong></p>
          </div></BlurReveal>

          <p>
            Patients may be aware of light, colors, or gentle movement, but not pain. The experience has fundamentally changed from what it was decades ago.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Moment Everything <strong>Shifted</strong></h2>
          <p>
            When she learned that modern cataract surgery no longer routinely involves a needle behind the eye, she was stunned. And then, a little regretful.
          </p>
          <p>
            She told me she wished she had not waited so long. That her vision had limited her more than she admitted. That she wished her husband had been there to guide her through the decision, to update her understanding of how surgery had evolved.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"You need to tell people this. Tell them they are not getting that needle."</p>
          </div></BlurReveal>

          <p>
            And she is right.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/elderly-woman-walker-desert-garden.jpg"
              alt="Elderly woman smiling in a desert garden with mountains in the background"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">Why This <strong>Happens</strong></h2>
          <p>
            What happened here is not rare. It is deeply human.
          </p>
          <p>
            She did not delay surgery because she was irrational. She delayed because her brain did exactly what brains are designed to do: protect her from perceived threat.
          </p>
          <p>
            Her fear was not based on her own experience. It was built from vivid mental images, secondhand stories, and emotionally charged details. A needle near the eye is a powerful image. Once that image takes hold, it becomes difficult to dislodge, even when the reality changes.
          </p>
          <p>
            Psychologists call this <strong>availability bias</strong>: the most vivid, emotionally intense information becomes the most "real" in our minds, regardless of how current or accurate it is.
          </p>
          <p>
            Layer on her background, a nurse married to an ophthalmologist, and you get something even more complex. She did not feel uninformed. She felt <em>informed</em>. That is actually more dangerous, because it reduces the likelihood of questioning those beliefs.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Grief and <strong>Decision-Making</strong></h2>
          <p>
            There is grief woven into this story. She was not just afraid of surgery. She lost the person she trusted to help her feel safe in making that decision. Without him, the uncertainty grew.
          </p>
          <p>
            And then something important happened: new information replaced old fear.
          </p>
          <p>
            The moment she understood that the procedure had fundamentally changed, her emotional response shifted almost immediately. Relief, followed by regret.
          </p>
          <p>
            That regret matters. Many patients carry it quietly: lost years of better vision, avoided experiences, unnecessary limitations.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="insight-highlight">
            <p><strong>If your understanding of a medical procedure is based on something you heard years ago, it may no longer be true. Medicine evolves quickly. Your mental picture may be outdated. And sometimes, updating that picture changes everything.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>How many decisions in our lives are we delaying because we are reacting to an outdated version of reality? In medicine especially, how many people are living with avoidable limitations, not because solutions do not exist, but because the story they are telling themselves has not been updated? Sometimes progress is not just about better technology. Sometimes it is about letting go of old fears that no longer belong to the present.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/is-cataract-surgery-safe" className="related-card">
              <h3>Is Cataract Surgery Safe?</h3>
              <p>An honest, evidence-based look at what modern cataract surgery involves.</p>
            </Link>
            <Link href="/insights/do-i-really-need-surgery" className="related-card">
              <h3>Do I Really Need Surgery Yet?</h3>
              <p>Sometimes the best answer is not yet. Timing matters.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Pre-Op Guide</h3>
              <p>What actually happens before surgery. No surprises.</p>
            </Link>
            <Link href="/insights/permission-to-see-again" className="related-card">
              <h3>Permission to See Again</h3>
              <p>Another story about a patient who waited, and why that was okay.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
