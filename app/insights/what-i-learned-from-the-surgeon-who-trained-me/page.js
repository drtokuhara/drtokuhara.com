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
  title: 'What I Learned From the Surgeon Who Trained Me',
  description: 'A reflection on Dr. Howard Gimbel and the residency moment that shaped how Dr. Tokuhara approaches surgery and patient care. Surgical mentorship is not just about technique. It is about how you think.',
  alternates: { canonical: '/insights/what-i-learned-from-the-surgeon-who-trained-me' },
  openGraph: {
    title: 'What I Learned From the Surgeon Who Trained Me | Dr. Keith Tokuhara',
    description: 'A residency moment with Dr. Howard Gimbel that changed everything. Surgical mentorship shapes not just technique, but philosophy.',
    url: 'https://drtokuhara.com/insights/what-i-learned-from-the-surgeon-who-trained-me',
  },
};

const jsonLd = [
  articleSchema({
    title: 'What I Learned From the Surgeon Who Trained Me',
    description: 'A reflection on Dr. Howard Gimbel and the residency moment that shaped how Dr. Tokuhara approaches surgery and patient care. Surgical mentorship is not just about technique. It is about how you think.',
    slug: '/insights/what-i-learned-from-the-surgeon-who-trained-me',
    datePublished: '2026-05-09',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'What I Learned From the Surgeon Who Trained Me', href: '/insights/what-i-learned-from-the-surgeon-who-trained-me' },
  ]),
];

export default function InsightWhatILearnedFromTheSurgeon() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-precision-instrument.mp4"
        poster="/media/stock-couple-patio-scenic-view.jpg"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Philosophy of Care</span>
          <h1>What I Learned From the Surgeon Who <strong>Trained Me</strong></h1>
          <p className="page-hero-sub">The moment during residency that changed how I think about surgery, patients, and the difference between competence and mastery.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            During my residency, I trained under Dr. Howard Gimbel in Calgary. Gimbel was, and remains, one of the most important cataract surgeons of the modern era. He pioneered continuous curvilinear capsulorhexis, the technique that made modern cataract surgery predictable and safe. Before Gimbel refined that step, the capsular bag was an unpredictable variable. After him, it became a controlled one. Nearly every cataract surgeon in the world uses his contribution, whether they know his name or not.
          </p>
          <p>
            But the lesson that shaped me most was not a surgical technique. It was something quieter, and it happened on an ordinary Tuesday morning.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Case That <strong>Changed Everything</strong></h2>
          <p>
            We were operating on a patient with a dense brunescent cataract. The kind that turns the natural lens dark brown, almost opaque. These are technically demanding cases. The nucleus is hard. The visibility is reduced. The forces required to break up and remove the cataract are higher, which means the margin for error is narrower.
          </p>
          <p>
            I had seen Gimbel operate hundreds of times by that point. His hands were extraordinary, precise in a way that made difficult surgery look routine. But what happened next was not about his hands.
          </p>
          <p>
            Midway through the case, something shifted. The capsular bag, which should have remained taut and centered, developed a small radial tear at the edge of the capsulorhexis. In most operating rooms, this would trigger a change in atmosphere. Tension. Urgency. Perhaps a moment of visible concern.
          </p>
          <p>
            Gimbel did not change his posture. He did not speed up. He did not slow down dramatically. He paused, maybe two seconds, and then adjusted. He modified his technique in real time, converting the approach to manage the tear, protect the capsule from extending, and complete the surgery with the lens implanted securely in the bag.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The complication was managed so smoothly that if you had walked into the room five minutes later, you would not have known anything unusual had occurred. The patient's outcome was excellent. But what I remember most is not the outcome. It is the two seconds of silence before he adjusted.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What the Silence <strong>Taught Me</strong></h2>
          <p>
            After the case, I asked him about it. I expected a technical explanation. What I got was something else entirely.
          </p>
          <p>
            He said: "The complication is not the problem. Your reaction to the complication is the problem."
          </p>
          <p>
            He explained that in his early career, when something unexpected happened during surgery, his instinct was to act immediately. To fix it, fast. But speed without clarity compounds the error. The surgeon who reacts before thinking turns a manageable complication into an unmanageable one.
          </p>
          <p>
            The pause was deliberate. It was not hesitation. It was the discipline to assess before acting. To see the situation clearly before choosing a response. He told me that he had trained himself, over decades, to create that space, that two-second gap between surprise and decision, and that it had saved more outcomes than any instrument in his tray.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The complication is not the problem. Your reaction to the complication is the problem. That sentence rewired how I think about surgery. It rewired how I think about medicine entirely.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Beyond <strong>Technique</strong></h2>
          <p>
            Surgical training teaches you what to do. Fellowship teaches you when and why. But the deepest layer of mentorship teaches you how to think when everything is going well and, more importantly, how to think when it is not.
          </p>
          <p>
            Gimbel operated with what I can only describe as philosophical calm. He understood that surgery is a controlled disruption. You are entering a biological system, making deliberate changes, and managing the body's response to those changes in real time. The variables are enormous. The outcomes depend not just on preparation and skill, but on the surgeon's ability to adapt when the reality in front of them diverges from the plan.
          </p>
          <p>
            He taught me that mastery is not the absence of complications. It is the presence of composure when they arrive. A surgeon who has never encountered a complication is inexperienced. A surgeon who cannot manage one calmly is dangerous. The space between those two extremes is where real surgical judgment lives.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How It Shapes My <strong>Practice Today</strong></h2>
          <p>
            I think about that Tuesday morning more often than Gimbel would probably expect. Not the technique. The temperament. The principle that your response to the unexpected defines your outcomes more than your plan for the expected.
          </p>
          <p>
            It shows up in the way I approach complex cases. Patients with previous retinal surgery, with floppy iris syndrome, with pseudoexfoliation, with dense cataracts and weak zonules. The cases where the textbook gives you the starting plan but the reality in the operating room requires adjustment. In those moments, I hear Gimbel's voice: pause, assess, choose.
          </p>
          <p>
            It also shows up in how I talk to patients. When someone asks me what happens if something goes wrong during surgery, I do not deflect the question. I tell them that complications are uncommon but real, that I have managed them throughout my career, and that my training prepared me not just for the expected path but for every deviation from it.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Patients do not need a surgeon who has never encountered difficulty. They need a surgeon who knows exactly what to do when difficulty arrives. That distinction, between perfection and preparedness, is one of the most important things I learned during residency.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Craft Behind the <strong>Science</strong></h2>
          <p>
            Surgery is often discussed as though it were purely technical. Measurements, calculations, algorithms, machines. And those things matter. Precision in biometry, accuracy in lens power selection, the engineering of modern intraocular lenses: these are genuine marvels.
          </p>
          <p>
            But surgery is also a craft. It is performed by a person, in real time, on a living eye that does not always behave the way the preoperative data predicted. The craft is what fills the gap between the plan and the reality. It is judgment, touch, timing, experience, and the accumulated wisdom of having trained under someone who understood those things deeply.
          </p>
          <p>
            Gimbel gave me a technical foundation that I use every day. But the greater gift was the philosophy behind it: that the how-you-think matters more than the what-you-do. That composure under pressure is a skill, not a personality trait. That it can be developed, practiced, and passed on.
          </p>

          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>When patients ask about my training, they usually want to know where I went and what I learned. The honest answer is that I learned technique in the operating room and philosophy in the moments between cases. My mentor taught me how to operate. More importantly, he taught me how to think when the operation does not go as planned. That lesson has served every patient I have treated since.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a thorough consultation actually looks like, and why it matters.</p>
            </Link>
            <Link href="/insights/when-guilt-replaces-explanation" className="related-card">
              <h3>When Guilt Replaces Explanation</h3>
              <p>What happens when blame replaces compassion in medicine.</p>
            </Link>
            <Link href="/about" className="related-card">
              <h3>About Dr. Tokuhara</h3>
              <p>Training, philosophy, and the approach behind Desert Vision Center.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cataract Cases</h3>
              <p>When surgery requires more than a standard approach.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
