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
  title: 'Is Cataract Surgery Painful? Here\'s the Honest Answer - Dr. Keith Tokuhara',
  description: 'An honest, experience-based answer to the most common question patients ask before cataract surgery. What you actually feel, what you see, and why the fear is almost always worse than the reality.',
  alternates: { canonical: '/insights/is-cataract-surgery-painful' },
  openGraph: {
    title: 'Is Cataract Surgery Painful? Here\'s the Honest Answer | Dr. Keith Tokuhara',
    description: 'The fear of pain keeps many patients from getting cataract surgery. Here is what actually happens, from a surgeon who has performed over 10,000 procedures.',
    url: 'https://drtokuhara.com/insights/is-cataract-surgery-painful',
  },
};

const jsonLd = [
  articleSchema({
    title: 'Is Cataract Surgery Painful? Here\'s the Honest Answer',
    description: 'An honest, experience-based answer about pain during cataract surgery. What patients actually feel, what they see, and why the anticipation is almost always worse than the reality.',
    slug: '/insights/is-cataract-surgery-painful',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Is Cataract Surgery Painful?', href: '/insights/is-cataract-surgery-painful' },
  ]),
];

export default function InsightPainful() {
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
          <span className="insight-hero-cluster">Fear &amp; Reassurance</span>
          <h1>Is Cataract Surgery <strong>Painful?</strong></h1>
          <p className="page-hero-sub">The honest answer from a surgeon who has performed over 10,000 cataract procedures.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            This is the question I hear most often. Not which lens to choose. Not how long recovery takes. Not even whether insurance covers it. The first thing most patients want to know is: <em>Will it hurt?</em>
          </p>
          <p>
            I have performed over 10,000 cataract surgeries. And after all of them, this remains the question that carries the most weight in the room. Not because the answer is complicated, but because fear has a way of filling in the blanks when information is missing.
          </p>
          <p>
            So here is the honest answer.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients Actually <strong>Feel</strong></h2>
          <p>
            Modern cataract surgery uses topical anesthesia, which means numbing drops placed directly on the surface of the eye. There is no needle behind the eye for the vast majority of cases. There is no general anesthesia. You are awake, but comfortable. Most patients also receive a mild sedative through an IV to help them relax.
          </p>
          <p>
            During the procedure itself, which typically takes between 8 and 15 minutes, patients feel pressure. Not pain. There is a sensation of gentle touch, of water running across the eye, sometimes a slight feeling of fullness. But pain, the sharp, alarming kind people imagine, is not part of it.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The most common thing patients say afterward is: "That's it? I was worried for nothing." And they say it with a mix of relief and mild frustration at themselves for waiting.</strong></p>
          </div></BlurReveal>

          <p>
            That frustration is worth paying attention to. Because the fear of pain is one of the most common reasons people delay cataract surgery, sometimes for years. And during those years, their vision continues to decline.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients Actually <strong>See</strong></h2>
          <p>
            This is the other question that creates anxiety: "Will I see the instruments coming at my eye?"
          </p>
          <p>
            No. You will not see a scalpel or a blade or anything sharp. What most patients describe is a bright light, sometimes with soft colors moving around it. Some see a kaleidoscope effect. Some see nothing at all. But nobody watches the surgery happen. The microscope light above you is bright enough that the details of what is happening are completely obscured.
          </p>
          <p>
            Patients sometimes tell me they saw "a beautiful light show." One patient described it as staring into a sunset through water. That is about as close to the universal experience as I can describe.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Where the Fear <strong>Comes From</strong></h2>
          <p>
            When I sit with a nervous patient before surgery, I do not dismiss their fear. I understand it. The eye is one of the most psychologically vulnerable parts of the body. The idea of someone operating on it triggers a primal protective response. That is normal.
          </p>
          <p>
            But here is what I have observed over two decades of doing this: the fear is almost never based on information. It is based on imagination. Patients construct a mental movie of what they think cataract surgery looks like, and that movie is usually wrong. It includes pain, bright lights, feeling everything, seeing instruments. None of those things reflect the actual experience.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The anticipation is always worse than the surgery. Always."</p>
          </div></BlurReveal>

          <p>
            I have seen patients shake in the pre-op area and then walk out of the operating room smiling. That shift happens in minutes. Because once the gap between imagination and reality closes, the fear evaporates.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">After <strong>Surgery</strong></h2>
          <p>
            Most patients feel mild scratchiness or a gritty sensation in the hours after surgery. Some describe it as having an eyelash in the eye. This is normal and typically resolves within 24 hours. Over-the-counter artificial tears and the prescribed post-operative drops manage it easily.
          </p>
          <p>
            By the next morning, most patients notice a dramatic improvement in clarity. Colors look more vivid. Contrast is sharper. The world looks different. And the dominant feeling is not discomfort. It is surprise.
          </p>
          <p>
            Surprise at how fast it was. Surprise at how little it hurt. Surprise at how much they had been missing.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">A Note About <strong>Honesty</strong></h2>
          <p>
            I could tell every patient that cataract surgery is completely painless and leave it at that. But that would not be fully honest.
          </p>
          <p>
            The truth is that rare cases involve more sensation than usual. Some patients with very dense cataracts require a bit more work, and the procedure takes longer. Patients with certain eye conditions, like pseudoexfoliation or small pupils, may experience slightly more awareness during the procedure. And a small number of patients simply metabolize the numbing drops faster than average.
          </p>
          <p>
            In those situations, I adjust. More anesthetic can be given at any point during the surgery. Communication between surgeon and patient is constant. If someone tells me they feel something, I respond immediately. The goal is never to push through discomfort. The goal is for every patient to leave saying exactly what most of them say: "That was nothing."
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="insight-highlight">
            <p><strong>If you are postponing cataract surgery because you are afraid it will hurt, I understand. But the reality is that the procedure is one of the most well-tolerated surgeries in all of medicine. Over 4 million cataract surgeries are performed every year in the United States. The techniques, the anesthesia, and the technology have been refined to the point where patient comfort is not an afterthought. It is the standard.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Fear is a reasonable response to the unknown. But when the unknown becomes known, fear loses its power. The patients who tell me they wish they had not waited so long are not saying they wish they had been braver. They are saying they wish someone had given them a clearer picture sooner. That is what I am trying to do here. Not to convince you. Just to fill in the blanks that your imagination has been filling with the wrong information.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/the-needle-that-wasnt-there" className="related-card">
              <h3>The Needle That Wasn't There</h3>
              <p>She avoided surgery for years because of a procedure that is no longer used.</p>
            </Link>
            <Link href="/insights/do-i-really-need-surgery" className="related-card">
              <h3>Do I Really Need Surgery Yet?</h3>
              <p>Sometimes the best answer is not yet. Timing matters.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Pre-Op Guide</h3>
              <p>What actually happens before surgery. No surprises.</p>
            </Link>
            <Link href="/is-cataract-surgery-safe" className="related-card">
              <h3>Is Cataract Surgery Safe?</h3>
              <p>An honest look at safety, risks, and what the numbers actually say.</p>
            </Link>
            <Link href="/insights/cataract-surgery-step-by-step" className="related-card">
              <h3>Cataract Surgery Step by Step</h3>
              <p>What actually happens during the procedure, start to finish.</p>
            </Link>
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>Your First Week After Surgery</h3>
              <p>A day-by-day guide to recovery and what to expect.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
