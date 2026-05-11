import Link from 'next/link';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'When Experience Speaks: The Surgical Training You Cannot See | Dr. Keith Tokuhara',
  description: 'How decades of surgical mentorship shape the decisions that matter most. A reflection on Dr. Howard Gimbel, intergenerational surgical wisdom, and a complicated case where training made all the difference.',
  alternates: { canonical: '/insights/when-experience-speaks' },
  openGraph: {
    title: 'When Experience Speaks | Dr. Keith Tokuhara',
    description: 'The principles a surgeon carries into every case are invisible to patients. But they determine everything. A reflection on mentorship, surgical heritage, and the training that shows up when it matters most.',
    url: 'https://drtokuhara.com/insights/when-experience-speaks',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does surgical training matter so much in cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract surgery is one of the most commonly performed procedures in the world, but not every case is routine. Complications can occur, and when they do, the surgeon\'s training determines how quickly and effectively they respond. Surgeons trained under experienced mentors carry principles for managing unexpected situations that go far beyond what a textbook can teach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a complication occurs during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common serious complication is a posterior capsule tear, which occurs when the thin membrane supporting the lens implant is damaged during surgery. An experienced surgeon will recognize this immediately, stabilize the eye with specialized techniques, and adapt the surgical plan. In skilled hands, most patients still achieve good visual outcomes even after a complication.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is keratoconus and how does it affect cataract surgery decisions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keratoconus is a condition where the cornea develops an irregular shape, causing unpredictable astigmatism. It affects which lens implant will perform best after cataract surgery. Toric lenses, which are designed to correct astigmatism, may not work reliably in eyes with keratoconus because the astigmatism is irregular rather than symmetric. A standard lens with glasses or specialty contact lenses often provides better visual quality in these cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my cataract surgeon has the experience to handle complications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask about their training background, how many surgeries they have performed, and whether they regularly manage complex or revision cases. Surgeons who accept referrals from other doctors for complicated cases have demonstrated a level of expertise that their peers recognize. Board certification, fellowship training, and a willingness to discuss complications honestly are all positive indicators.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'When Experience Speaks: The Surgical Training You Cannot See',
    description: 'How decades of surgical mentorship shape the decisions that matter most. A reflection on Dr. Howard Gimbel, intergenerational surgical wisdom, and a complicated case where training made all the difference.',
    slug: '/insights/when-experience-speaks',
    datePublished: '2026-05-11',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When Experience Speaks', href: '/insights/when-experience-speaks' },
  ]),
  faqSchema,
];

export default function InsightWhenExperienceSpeaks() {
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
          <span className="insight-hero-cluster">Surgical Heritage</span>
          <h1>When Experience <strong>Speaks</strong></h1>
          <p className="page-hero-sub">The principles a surgeon carries into every operating room are invisible. You cannot see them on a diploma or in a brochure. But they determine everything, especially when something unexpected happens.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />

          <p className="body-lead body-lead-dropcap">
            There is a moment in every surgeon's training when a principle stops being something you memorized and becomes something you feel. It moves from the textbook into your hands. It becomes part of how you see.
          </p>
          <p>
            For me, that moment happened during my residency at Loma Linda University, training under Dr. Howard V. Gimbel, one of the most influential cataract surgeons of the modern era. Dr. Gimbel invented the continuous curvilinear capsulorrhexis, a technique used in virtually every cataract surgery performed today worldwide. But what he taught me that mattered most was not a technique. It was a way of thinking.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>"Every step is diagnostic."</strong></p>
            <p>That was the principle. Surgery is not a checklist you execute in order. It is a conversation with the tissue, where each step reveals information that shapes the next decision. The capsule tells you about its elasticity. The hydrodissection tells you about the lens adhesion. The first fracture attempt tells you more about nuclear density than any preoperative measurement ever could.</p>
          </div></BlurReveal>

          <p>
            Dr. Gimbel would say it plainly: the expert surgeon reads these signals in real time. The novice follows a protocol regardless of what the tissue is saying. The difference between those two approaches is not academic. It is the difference between catching a problem early and missing it until it becomes a crisis.
          </p>
          <p>
            He extended this to complications. When a posterior capsule tears during surgery, which is the most common serious complication in cataract surgery, the instinct is to panic. Gimbel taught the opposite: stop. Look. Read what the tissue is telling you. If you can see the edge of the tear, you can often convert it into a controlled opening. If you rush, you extend the damage.
          </p>
          <p>
            He put it simply: "If one can see the end of any tear, or both ends, even these can be completed to avoid the extension of these tears out to the equator."
          </p>
          <p>
            That sentence has been in my hands for over 20,000 surgeries. Not because I recite it, but because it lives in the way I respond to the unexpected. It is the kind of knowledge you carry without thinking about it, until the moment arrives when you need it.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Case That Made <strong>Training Visible</strong></h2>
          <p>
            Not long ago, a 70-year-old man came to my office for a second opinion. He had undergone cataract surgery at another facility. Before his surgery, he had wanted a toric lens implant to reduce his astigmatism. During the procedure, the posterior capsule ruptured. The toric lens could not be safely placed. A different lens was used instead.
          </p>
          <p>
            After surgery, his vision dropped to hand-motion level. He could barely detect movement in front of his face. He was frightened. He was frustrated. He wanted to know what went wrong and whether anything could be done.
          </p>
          <p>
            When I examined him, I found what I expected to find after a complicated surgery: mild corneal swelling, vitreous gel in the front of the eye where it should not be, and retained lens material from the original procedure. The ruptured posterior capsule was clearly evident.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>In moments like this, training speaks before you do. Not the training that tells you what instrument to pick up. The training that tells you how to think about what you are seeing.</p>
          </div></BlurReveal>

          <p>
            The first thing I told this patient was that the lens his surgeon chose, a three-piece implant placed in the sulcus, was actually the right call given the capsule rupture. That was not a consolation. It was a clinical assessment. When the posterior capsule tears, the capsular bag can no longer safely hold a standard lens. Moving to a three-piece design in the sulcus is exactly what experienced surgeons are trained to do. The original surgeon adapted correctly under pressure.
          </p>
          <p>
            But the eye still needed help. The retained material and vitreous strands were sustaining inflammation and clouding his vision. We proceeded with surgery to carefully remove those remnants, clean up the vitreous, and give the eye a clear path to heal.
          </p>
          <p>
            It worked. Over weeks, his vision climbed steadily. The corneal swelling resolved. The inflammation quieted. His best-corrected vision recovered to 20/30, a remarkable result for an eye that had been at hand-motion level.
          </p>
          <p>
            But the story was not finished.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Diagnosis Nobody <strong>Expected</strong></h2>
          <p>
            Once the eye had fully stabilized, we performed detailed corneal imaging. Topography, the kind of precise mapping that reveals the true shape of the corneal surface. And that is when the deeper truth emerged.
          </p>
          <p>
            This patient had previously undiagnosed keratoconus.
          </p>
          <p>
            Keratoconus is a condition where the cornea develops an irregular, cone-like shape. It creates a type of astigmatism that is unpredictable and does not follow the neat, symmetric patterns that toric lenses are designed to correct. In eyes with significant keratoconus, a toric lens implant often underperforms because it is solving the wrong problem. The astigmatism is in the cornea's irregular surface, not in a simple curvature that can be offset by a lens.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The complication that seemed like a catastrophe had, inadvertently, prevented a lens choice that would not have served this patient well. The toric lens he originally wanted would have been unreliable in an eye with keratoconus. The standard lens placed during that difficult moment in surgery turned out to be the more appropriate choice all along.</strong></p>
          </div></BlurReveal>

          <p>
            This is what Gimbel meant by "every step is diagnostic." The posterior capsule rupture was a complication. The rescue was necessary. But the full story only became visible through systematic examination after the eye had healed. The corneal topography was a diagnostic step that revealed a condition no one knew existed, and it completely reframed what "success" meant for this patient.
          </p>
          <p>
            When it came time to operate on his second eye, we had the complete picture. We chose a standard monofocal lens, knowing that his keratoconus made any astigmatism-correcting lens unreliable. Glasses would handle the astigmatism better than any implant could. The surgery was uncomplicated. He achieved excellent functional vision in both eyes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why This <strong>Matters</strong></h2>
          <p>
            When you choose a cataract surgeon, you are not just choosing a pair of hands. You are choosing the accumulated wisdom those hands carry. The principles absorbed during years of training under experienced mentors. The pattern recognition developed across thousands of cases. The instinct to read what the tissue is saying, rather than forcing it to follow a plan.
          </p>
          <p>
            Dr. Gimbel taught me that surgery is a conversation, not a monologue. You bring your plan into the operating room, but the eye has the final word. Sometimes it confirms your plan. Sometimes it changes it. And sometimes, as in this case, it reveals something no one anticipated that transforms the entire story.
          </p>
          <p>
            He also taught me something about honesty. Gimbel showed his complications publicly. He presented cases that went wrong, techniques that failed, and moments where he was uncertain. He said that teaching which hides complications produces surgeons who cannot handle them. The cases that go perfectly teach you the technique. The cases that don't teach you medicine.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The depth of a surgeon's training is invisible during a routine case. It becomes visible the moment something unexpected happens. That is when the principles absorbed over years of mentorship, practice, and honest self-examination either show up or they don't.</p>
          </div></BlurReveal>

          <p>
            This patient's journey was not what anyone planned. He walked into one surgeon's office expecting clearer vision and walked out barely able to see. He arrived at my office scared, looking for answers. What he received was not just a surgical repair. It was the accumulated product of a training tradition that values reading the full story, responding to complications with calm precision, and never assuming you know everything about the eye in front of you until you have done the work to find out.
          </p>
          <p>
            Gimbel once said, speaking about something else entirely but capturing a truth that applies here: "There's a legacy here that is worth preserving and protecting and building on."
          </p>
          <p>
            He was right. That legacy does not live in a textbook or on a wall. It lives in the operating room, in the conversation between surgeon and tissue, in the moment when training speaks and the patient is better for it.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients sometimes ask me how many surgeries I have performed. The number is over 20,000, and it matters. But what matters more is what those surgeries taught me, and what the surgeon who trained me taught me before I ever held a blade. Every case is a conversation with the tissue. Every complication is a teacher. And every patient deserves a surgeon who has been listening long enough to hear what the eye is saying, especially when it is saying something unexpected.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me" className="related-card">
              <h3>What I Learned From the Surgeon Who Trained Me</h3>
              <p>A residency moment with Dr. Howard Gimbel that changed everything. Not a technique, but a principle.</p>
            </Link>
            <Link href="/insights/when-the-unexpected-leads-to-the-right-outcome" className="related-card">
              <h3>When the Unexpected Leads to the Right Outcome</h3>
              <p>A surgical complication revealed a hidden condition that changed the entire clinical picture.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a thorough consultation actually looks like, and why it matters.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex and Revision Cases</h3>
              <p>When cataract surgery does not go as planned, experience and training make all the difference.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
