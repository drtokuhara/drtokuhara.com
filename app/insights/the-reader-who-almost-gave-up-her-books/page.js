import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';

export const metadata = {
  title: 'The Reader Who Almost Gave Up Her Books',
  description: 'An 81-year-old avid reader delayed cataract surgery for years because she believed reading glasses were mandatory afterward. Nobody told her she had a choice.',
  alternates: { canonical: '/insights/the-reader-who-almost-gave-up-her-books' },
  openGraph: {
    title: 'The Reader Who Almost Gave Up Her Books | Dr. Keith Tokuhara',
    description: 'A story about lens choice, identity, and the difference between listing options and giving permission.',
    url: 'https://drtokuhara.com/insights/the-reader-who-almost-gave-up-her-books',
  },
};


const jsonLd = [
  articleSchema({
    title: 'The Reader Who Almost Gave Up Her Books',
    description: 'An 81-year-old avid reader delayed cataract surgery because she believed reading glasses were mandatory afterward.',
    slug: '/insights/the-reader-who-almost-gave-up-her-books',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Reader Who Almost Gave Up Her Books', href: '/insights/the-reader-who-almost-gave-up-her-books' },
  ]),
];

export default function InsightReader() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <span className="insight-hero-cluster">Lens Selection</span>
          <h1>The Reader Who Almost Gave Up <strong>Her Books</strong></h1>
          <p className="page-hero-sub">Sometimes the most important part of a cataract consultation isn't medical. It's giving someone permission to choose.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-reader-woman-books.jpg"
              alt="Elderly woman reading peacefully at home"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <p className="body-lead">
            She was 81 years old. She read for several hours every day - books at breakfast, books in the afternoon, books before bed. Reading wasn't a hobby. It was who she was.
          </p>
          <p>
            And she had been avoiding cataract surgery for years.
          </p>
          <p>
            Not because she was afraid of the procedure. Not because she didn't trust doctors. She had been told - by prior physicians, by friends, by word of mouth - that after cataract surgery, you <em>need</em> reading glasses. That's just how it works. Your near vision goes away, and you get glasses.
          </p>
          <p>
            For a woman whose entire daily life revolved around near vision, that was a dealbreaker. So she waited. And the cataracts got worse. And she started struggling with her books anyway.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Conversation That <strong>Changed Things</strong></h2>
          <p>
            When she came to see me, her vision was 20/50. She could still get by, but the clarity she needed for small print was fading. She was already making tradeoffs - using a magnifying glass, reading in brighter light, putting books down sooner than she wanted to.
          </p>
          <p>
            I asked her the question I always ask: "What matters most to you about your vision?"
          </p>
          <p>
            She didn't hesitate. "My books."
          </p>
          <p>
            So I explained something no one had told her before: we could aim the lens implant for near vision. A basic monofocal lens - fully covered by insurance - targeted at her reading distance. She would keep her books. The tradeoff? She'd need glasses for driving and television.
          </p>
          <p>
            She didn't just feel relieved. She was <em>excited</em>. Not because of premium technology. Not because of an expensive upgrade. Because someone finally told her that her visual outcome could match her life.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What This <strong>Taught Me</strong></h2>
          <p>
            There's a broader trend I've noticed over the past few years: more patients are preferring near targets. The definition of "functional vision" is evolving. Since COVID especially, people are spending more time at home, more time on screens at arm's length, more time with books and hobbies. Distance vision still matters, but it's not always the automatic priority it used to be.
          </p>
          <p>
            A basic monofocal lens with a near target is not a compromise. For the right patient, it's the best choice available. And it's covered by insurance.
          </p>
          <p>
            But here's the part that stays with me: she had the information she needed to make this decision years ago. It just wasn't presented in a way that included her. Nobody asked what her life looked like. They told her what the standard outcome was, and she assumed it was the only one.
          </p>
          <p>
            <strong>Education isn't just about explaining options. It's about giving permission to choose the one that fits.</strong>
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>If you're considering cataract surgery and you have a strong preference about how you use your eyes - reading, crafts, cooking, computers - tell your surgeon. The lens can be aimed at what matters to you. It's not always about getting the fanciest technology. Sometimes the simplest choice is the right one, and nobody bothered to mention it.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Related <strong>Reading</strong></h2>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A full guide to monofocal, toric, EDOF, and multifocal lenses - and how to decide.</p>
            </Link>
            <Link href="/insights/permission-to-see-again" className="related-card">
              <h3>Permission to See Again</h3>
              <p>Another story about a patient who needed something beyond a surgical plan.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
