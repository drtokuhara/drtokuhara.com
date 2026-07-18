import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  KineticText,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'How to Choose a Cataract Surgeon: 5 Things That Actually Matter - Dr. Keith Tokuhara',
  description: 'A cataract surgeon with over 20,000 procedures explains what to look for when choosing a surgeon. Fellowship training, surgical volume, complication management, independence, and honest communication.',
  keywords: ['how to choose a cataract surgeon', 'what to look for in a cataract surgeon', 'cataract surgeon questions', 'best cataract surgeon', 'cataract surgery experience'],
  alternates: { canonical: '/insights/how-to-choose-a-cataract-surgeon' },
  openGraph: {
    title: 'How to Choose a Cataract Surgeon: 5 Things That Actually Matter | Dr. Keith Tokuhara',
    description: 'What separates a good cataract surgeon from the right one for you. Fellowship training, volume, complication management, independence, and communication.',
    url: 'https://drtokuhara.com/insights/how-to-choose-a-cataract-surgeon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a Cataract Surgeon: 5 Things That Actually Matter',
    description: 'What separates a good cataract surgeon from the right one for you. A surgeon with 20,000+ cases shares what he would tell his own family.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What training should a cataract surgeon have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for a surgeon who completed an ophthalmology residency and ideally a fellowship in anterior segment or cataract surgery. Fellowship training provides thousands of additional surgical cases under expert mentorship, building the judgment and technical skill needed for complex situations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cataract surgeries should my surgeon have performed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no official minimum, but surgeons who have performed thousands of procedures have encountered a wider range of complications and anatomical variations. High surgical volume builds pattern recognition that cannot be learned from textbooks alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask a cataract surgeon before surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask about their fellowship training, how many cataract surgeries they perform per year, how they handle complications, whether they are part of a corporate or private equity group, and what happens if something unexpected occurs during surgery. A confident surgeon welcomes these questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it matter if my cataract surgeon is part of a corporate practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can. Corporate and private equity-backed practices sometimes prioritize volume and revenue over individualized care. An independent surgeon typically has more freedom to spend time with each patient, recommend the best lens for that person rather than the most profitable one, and make decisions based purely on clinical judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my cataract surgeon can handle complications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask directly. A surgeon who can manage complications will talk openly about them. Look for someone trained in complex anterior segment surgery, secondary lens implantation techniques like Yamane fixation, and who regularly accepts referrals from other surgeons for difficult cases.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'How to Choose a Cataract Surgeon: 5 Things That Actually Matter',
    description: 'A cataract surgeon with over 20,000 procedures explains the five things that genuinely matter when choosing a surgeon for your cataract surgery.',
    slug: '/insights/how-to-choose-a-cataract-surgeon',
    datePublished: '2026-05-13',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'How to Choose a Cataract Surgeon', href: '/insights/how-to-choose-a-cataract-surgeon' },
  ]),
  faqSchema,
];

export default function InsightChooseASurgeon() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-architectural-precision.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
        bottomOverlay={<AudioNarration src="/audio/narrations/how-to-choose-a-cataract-surgeon.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Choosing Your Surgeon</span>
          <h1>How to Choose a Cataract Surgeon: <strong>5 Things That Actually Matter</strong></h1>
          <p className="page-hero-sub">Here is what I would tell my own family.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            If someone in my family needed cataract surgery, I would not tell them to search for "best cataract surgeon near me" and pick the top result. I would sit them down and explain what actually matters. Not marketing. Not office decor. Not even online reviews, though those can be a useful signal. I would talk about five things.
          </p>
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/complex-cases-patient-hope.jpg"
              alt="Patient finding hope and confidence through a thorough surgical consultation"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <p>
            These are the same five things I would want any patient to consider. Not because I am trying to promote myself, but because I have seen what happens when patients choose based on convenience alone. Sometimes it works out fine. Sometimes they end up in my office afterward, asking me to fix something that did not need to go wrong.
          </p>
          <p>
            Cataract surgery is the most commonly performed surgery in the world. Over four million procedures happen in the United States every year. The success rate is extraordinarily high. But "common" does not mean "simple." And the difference between a good outcome and a great one often comes down to the surgeon.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">1. Fellowship <strong>Training</strong></h2>
          <p>
            Every ophthalmologist learns cataract surgery during residency. But there is a significant difference between a surgeon who completed residency and one who then spent an additional one to two years in a fellowship focused on anterior segment and cataract surgery.
          </p>
          <p>
            Fellowship training means thousands of additional surgical cases under the direct supervision of the most experienced surgeons in the field. It means encountering complications early, in a controlled environment, with a mentor standing beside you. It means developing the judgment to know when a case is straightforward and when it is not.
          </p>
          <p>
            I completed my residency under <Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me">Dr. Howard Gimbel</Link>, one of the pioneers of modern cataract surgery. That training shaped not just my technique, but my philosophy: stay calm, stay prepared, and never assume a case will be routine. I also completed a fellowship in vitreoretinal surgery, which gives me the ability to manage complications that extend beyond the anterior segment of the eye.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Ask your surgeon: Where did you train? Did you complete a fellowship? Not every great surgeon did a fellowship, but the question itself tells you something about how seriously they pursued mastery.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">2. Surgical <strong>Volume</strong></h2>
          <p>
            There is no substitute for experience. A surgeon who has performed 500 cataract surgeries has seen a certain range of eyes. A surgeon who has performed 20,000 has seen nearly everything.
          </p>
          <p>
            Volume matters because cataract surgery is not a single procedure applied identically to every patient. Every eye is different. Dense brunescent cataracts behave differently than soft nuclear cataracts. Eyes with pseudoexfoliation present unique challenges. Patients with small pupils, previous refractive surgery, or weak zonules require real-time adjustments that cannot be scripted.
          </p>
          <p>
            High volume builds what surgeons sometimes call "pattern recognition," the ability to sense within the first few seconds of a procedure whether this eye will behave normally or demand something different. That instinct is not taught in a textbook. It is earned, one case at a time, over years.
          </p>
          <p>
            I have performed over 20,000 cataract and lens procedures. That number is not a marketing point. It is context. It means I have likely encountered a version of whatever your eye presents.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">3. Complication <strong>Management</strong></h2>
          <p>
            This is the one most patients never think to ask about. And it might be the most important.
          </p>
          <p>
            Every surgeon encounters complications. Cataract surgery has a very low complication rate, but "low" is not "zero." The capsule can tear. The lens can drop. The cornea can swell. These events are uncommon, but they happen, and when they do, the question is not whether your surgeon has seen it before. The question is whether your surgeon can manage it in real time, calmly and competently, without needing to stop the case and refer you elsewhere.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Every surgeon encounters complications. The question is whether yours can manage them."</p>
          </div></BlurReveal>

          <p>
            Some surgeons can only perform straightforward cataract surgery. When something unexpected happens, they close the eye and send the patient to a specialist. That is not necessarily wrong, but it means the patient undergoes a second procedure, often at a different facility, with a surgeon they have never met.
          </p>
          <p>
            A surgeon trained in <Link href="/complex-cases">complex anterior segment surgery</Link> can handle most complications in real time. If a lens drops into the vitreous cavity, a surgeon with retinal training can retrieve it. If a lens needs to be exchanged or suturelessly fixated, a surgeon who performs the <Link href="/yamane-technique">Yamane technique</Link> can do so without additional referrals. These capabilities matter, not because complications are common, but because if one happens to you, you want a surgeon who can solve it.
          </p>
          <p>
            I regularly receive referrals from other surgeons for cases that went sideways: <Link href="/dropped-lens-after-cataract-surgery">dropped lenses</Link>, dislocated implants, <Link href="/cataract-surgery-complications">post-surgical complications</Link> that need revision. Handling these cases is part of my practice. It is also part of why I approach every routine case with the same level of preparation.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">4. Physician <strong>Independence</strong></h2>
          <p>
            This is the part of the conversation that makes some people uncomfortable. But it matters, and patients deserve to understand it.
          </p>
          <p>
            Over the past decade, private equity firms and corporate management companies have been acquiring ophthalmology practices at an accelerating rate. The financial model is straightforward: buy practices, increase volume, cut costs, and sell at a profit. The doctors who work in these systems are often skilled. But they operate within structures that prioritize throughput.
          </p>
          <p>
            In a corporate-backed practice, your surgeon may have limited say in how long your consultation lasts, which lens options are presented to you, or how much time is spent on follow-up care. The business model rewards speed and standardization. Personalization takes longer and costs more.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>An independent surgeon answers to patients, not investors. That distinction shapes every recommendation, every conversation, and every surgical decision.</strong></p>
          </div></BlurReveal>

          <p>
            I am an independent physician. Desert Vision Center is not owned by a corporation, a hospital system, or a private equity group. That independence means I spend as long as each patient needs during the consultation. It means I recommend the lens that fits their eyes and their life, not the one that generates the highest margin. It means I make decisions based on <Link href="/ethical-cataract-care">clinical judgment alone</Link>.
          </p>
          <p>
            Ask your surgeon: Are you part of a larger management group? Who makes the business decisions in your practice? The answer will tell you a lot about the kind of care you can expect.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/surgical-precision-line-art.png"
              alt="Line art illustration representing surgical precision and careful technique"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <BlurReveal><div className="pull-quote">
            <p>"An independent surgeon answers to patients, not investors. That distinction shapes every recommendation, every conversation, and every surgical decision."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">5. Honest <strong>Communication</strong></h2>
          <p>
            The consultation is the most underrated part of cataract surgery. It is where expectations are set, risks are discussed, and decisions are made. A five-minute consultation cannot do this well. A consultant who tells you everything will be perfect is not being honest. And a surgeon who cannot clearly explain what they plan to do, and why, is someone you should think twice about trusting with your vision.
          </p>
          <p>
            Honest communication means telling a patient when surgery is not yet necessary, even if it means turning away revenue. It means explaining that a toric lens reduces astigmatism rather than promising it will eliminate glasses entirely. It means being direct about the tradeoffs of every lens option and helping the patient make an informed decision rather than a pressured one.
          </p>
          <p>
            It also means honesty about limitations. No surgery is risk-free. No lens is perfect for everyone. No surgeon bats a thousand. The best surgeons I have known over my career are the ones who say, "Here is what I can do, here is what I cannot promise, and here is what we will do if things do not go as planned."
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"If your surgeon is not willing to tell you when surgery is not the right call, ask yourself why."</p>
          </div></BlurReveal>

          <p>
            During my consultations, I spend as much time listening as I do explaining. A working parent who needs reliable near and distance vision for their job has different needs than a retired grandparent who reads for hours every day. A patient with dry eye disease needs a different lens conversation than one with a pristine ocular surface. These distinctions matter, and they can only surface when the surgeon takes the time to listen.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Putting It All <strong>Together</strong></h2>
          <p>
            Here is a practical summary. When you are evaluating a cataract surgeon, consider asking these questions:
          </p>
          <ul className="insight-list">
            <li>Where did you complete your surgical training? Did you do a fellowship?</li>
            <li>How many cataract surgeries have you performed?</li>
            <li>What happens if something unexpected occurs during my surgery? Can you handle it, or would I need to be referred to someone else?</li>
            <li>Is your practice independently owned, or part of a corporate or private equity group?</li>
            <li>How long does a typical consultation take? Will I have time to ask questions and understand my options?</li>
          </ul>
          <p>
            A good surgeon will not be offended by any of these. In fact, they will welcome them. These are the questions of a patient who is taking their vision seriously.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="insight-highlight">
            <p><strong>Choosing a cataract surgeon is not like choosing a restaurant. You do not get to try again if the experience is poor. Your eyes deserve a surgeon who was rigorously trained, has seen thousands of cases, can manage the unexpected, works independently of corporate influence, and communicates with honesty. That is not an unreasonable standard. It is the minimum.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I did not write this to tell you to choose me. I wrote it because too many patients make this decision based on who is closest to their house or who has the nicest website. Those things do not matter when you are on the operating table. What matters is the thousands of hours your surgeon spent preparing for the moment something does not go as expected. What matters is whether your surgeon will tell you the truth, even when the truth is "not yet" or "that lens is not right for you." If you are reading this and asking these questions, you are already doing better than most. Trust the process. Trust your instincts. And trust the surgeon who earns it.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/the-folder" className="related-card">
              <h3>The Folder - Dr. Keith Tokuhara</h3>
              <p>One patient's story of coming prepared.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>What sets an experienced cataract surgeon apart from the rest.</p>
            </Link>
            <Link href="/ethical-cataract-care" className="related-card">
              <h3>Ethical Cataract Care</h3>
              <p>Why independence and integrity matter in ophthalmology.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>When standard surgery is not enough. A look at the cases other surgeons refer out.</p>
            </Link>
            <Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me" className="related-card">
              <h3>What I Learned From the Surgeon Who Trained Me</h3>
              <p>A residency moment with Dr. Howard Gimbel that changed everything.</p>
            </Link>
            <Link href="/insights/cataract-surgery-at-50" className="related-card">
              <h3>Cataract Surgery at 50</h3>
              <p>Younger patients need more detailed lens conversations. Experience with complex cases matters even more.</p>
            </Link>
            <Link href="/insights/five-questions-before-surgery" className="related-card">
              <h3>5 Questions to Ask Before Surgery</h3>
              <p>Your surgeon should welcome every one of them.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a 70-minute first visit looks like, and why it matters.</p>
            </Link>
            <Link href="/insights/technology-behind-modern-cataract-surgery" className="related-card">
              <h3>The Technology Behind Modern Cataract Surgery</h3>
              <p>Understanding the tools matters less than choosing the surgeon who knows when and how to use them.</p>
            </Link>
            <Link href="/insights/why-i-do-my-own-post-op" className="related-card">
              <h3>Why I Do My Own Post-Op Care</h3>
              <p>Ask who will see you after surgery. The answer reveals the practice model.</p>
            </Link>
            <Link href="/insights/cataract-surgery-and-diabetes" className="related-card">
              <h3>Cataract Surgery and Diabetes</h3>
              <p>Diabetic patients need a surgeon who understands the additional considerations and complications.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Ready to <strong>Talk?</strong></h2>
            <p style={{marginBottom: '24px'}}>If you are considering cataract surgery and want a consultation with a surgeon who will take the time to listen, I would welcome the conversation.</p>
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
