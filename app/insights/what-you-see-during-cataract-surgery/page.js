import Link from 'next/link';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'What Do You Actually See During Cataract Surgery? - Dr. Keith Tokuhara',
  description: 'Most patients worry about being awake during cataract surgery. Here\'s exactly what you see, what you feel, and why it\'s easier than you think.',
  keywords: ['what do you see during cataract surgery', 'cataract surgery patient perspective', 'awake during cataract surgery what to expect', 'what does cataract surgery feel like', 'cataract surgery experience'],
  alternates: { canonical: '/insights/what-you-see-during-cataract-surgery' },
  openGraph: {
    title: 'What Do You Actually See During Cataract Surgery? | Dr. Keith Tokuhara',
    description: 'The honest answer about being awake during cataract surgery. What you see, what you feel, and why most patients say it was easier than expected.',
    url: 'https://drtokuhara.com/insights/what-you-see-during-cataract-surgery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Do You Actually See During Cataract Surgery?',
    description: 'The truth about being awake during cataract surgery. Most patients are surprised by how easy it actually is.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you see the instruments during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Patients do not see surgical instruments during the procedure. The eye is anesthetized, and what patients typically see is bright light, abstract colors, and occasionally blurred shapes or shadows. The surgeon is working at a microscopic level, far beyond what the unanesthetized parts of your eye can focus on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does cataract surgery hurt while it is happening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The eye is fully numbed with anesthetic drops or a small injection. Most patients feel no pain during the procedure. Some report a sensation of pressure or awareness that something is happening, but not pain. The anesthetic is highly effective, and additional numbing can be administered during surgery if needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do patients actually see during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients describe seeing bright light, sometimes with colors like orange, blue, or white. Some see abstract swirling shapes or blurred patterns. A few see almost nothing at all. What you see depends on the microscope light, the instruments used, and how your eye responds. None of it is sharp or alarming. Many patients say it felt almost dreamlike.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are you awake during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract surgery is performed under local anesthesia because it is safer, faster, and allows for a smoother recovery than general anesthesia. Patients are awake but relaxed, often with mild sedation to ease anxiety. Being awake does not mean you feel pain or see anything disturbing. Most patients describe the experience as surprisingly calm.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does cataract surgery actually take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The surgery itself typically takes 10 to 15 minutes per eye. Preparation and post-procedure monitoring add time, but the actual procedure is brief. Many patients are surprised by how quickly it is over. The combination of short duration and effective anesthesia is one reason most patients report the experience was easier than they expected.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'What Do You Actually See During Cataract Surgery?',
    description: 'Most patients worry about being awake during cataract surgery. Here\'s exactly what you see, what you feel, and why it\'s easier than you think.',
    slug: '/insights/what-you-see-during-cataract-surgery',
    datePublished: '2026-05-24',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'What You See During Cataract Surgery', href: '/insights/what-you-see-during-cataract-surgery' },
  ]),
  faqSchema,
];

export default function InsightWhatYouSeeDuringCataractSurgery() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-sunrise-golden.mp4"
        poster="/media/stock-couple-patio-scenic-view.jpg"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
        bottomOverlay={<AudioNarration src="" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Curiosity / Fear & Reassurance</span>
          <h1>What Do You Actually See <strong>During Cataract Surgery?</strong></h1>
          <p className="page-hero-sub">The question almost every patient asks. The honest answer: you won't see what you think you will, and that is a good thing.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />

          <p className="body-lead body-lead-dropcap">
            The first time someone tells you that you will be awake during cataract surgery, a very specific fear sets in. You imagine seeing everything. The instruments. The cuts. The moment your lens is removed. You picture yourself as a witness to your own surgery, unable to look away, locked in place while the procedure happens in front of you.
          </p>
          <p>
            I hear this worry constantly. In consultations. In pre-operative calls. In messages from patients the night before surgery. The question is always phrased differently, but it is always the same question: <em>What am I going to see?</em>
          </p>
          <p>
            So here is the truth, as clearly as I can give it: you will not see what you are worried about. You will not see instruments coming at your eye. You will not see the surgeon's hands. You will not see sharp objects, incisions, or anything that resembles the medical illustrations in a textbook. What you will see, if you see anything clearly at all, is mostly just light.
          </p>
          <p>
            Let me explain why, and what patients actually report.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why You <strong>Can't See Sharp Images</strong> During Surgery</h2>
          <p>
            Your eye works like a camera. To see something clearly, light has to pass through your cornea, through your lens, and focus precisely on your retina. During cataract surgery, several things prevent that from happening.
          </p>
          <p>
            First, your eye is anesthetized. You are not moving it. The surgeon is controlling the position. You are not focusing on anything because your eye is not trying to focus. It is relaxed, held steady, and numbed.
          </p>
          <p>
            Second, the very thing that allows you to see clearly in normal life, your natural lens, is the thing being removed. Once the cataract is broken up and the lens material begins to come out, your eye loses its ability to focus. You are essentially looking at the world through an eye that no longer has a lens in it. Everything becomes a blur.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Third, and most importantly, the instruments used in cataract surgery are incredibly small and incredibly close to your eye. They are working at a microscopic level, often just millimeters from the structures inside your eye. Even if your eye could focus, you physically cannot focus on something that close. It would be like trying to read a book held one inch from your face. You would see color and light, but no detail.</strong></p>
          </div></BlurReveal>

          <p>
            What this means in practice is that the terrifying image in your head, the one where you watch a blade approach your eye in high definition, is not physically possible. Your eye cannot create that image. The equipment, the anesthetic, the loss of your natural lens, and the proximity of the instruments all prevent it. You are awake, yes. But you are not seeing the surgery the way you imagine it.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients <strong>Actually Report Seeing</strong></h2>
          <p>
            I have asked this question to thousands of patients after surgery. The answers are remarkably consistent. Here is what people say.
          </p>
          
          <h3 style={{marginTop: '2rem'}}>Bright Light</h3>
          <p>
            Almost everyone sees light. The surgical microscope is positioned directly over your eye, and it is bright. Not painfully bright, because your eye is anesthetized and your pupil is dilated, but bright enough that it dominates your visual field. Many patients describe it as a soft white or yellowish glow. Some say it felt like looking up at a cloudy sky on a sunny day.
          </p>

          <h3 style={{marginTop: '2rem'}}>Colors and Shapes</h3>
          <p>
            Some patients see colors. Blues, oranges, whites, sometimes a shifting pattern of color as the surgeon works. A few describe it as kaleidoscopic, not in a sharp geometric way, but in a soft, abstract way. Shapes may appear, usually blurred circles or ovals. None of it is sharp. None of it is recognizable as a surgical instrument. It is more like watching light move through water.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>One patient told me: "I kept waiting to see something scary. I never did. It was just light and color, kind of pretty actually. I remember thinking, that's it? This is what I was so worried about?"</p>
          </div></BlurReveal>

          <h3 style={{marginTop: '2rem'}}>Shadows and Movement</h3>
          <p>
            A few patients report seeing shadows or a sense of movement, like something passing in front of the light. This is normal. The surgeon's hands, the instruments, and the irrigation fluid all create shadows. But again, these are not sharp images. They are vague, fleeting, and most patients describe them as non-threatening. Several have compared it to looking at shadows through a shower curtain.
          </p>

          <h3 style={{marginTop: '2rem'}}>Almost Nothing</h3>
          <p>
            Some patients, particularly those who receive stronger sedation or who have denser cataracts, report seeing almost nothing at all. They are aware that the procedure is happening, they hear voices and feel gentle pressure, but visually, the experience is dim or blank. They describe it as dreamlike, distant, or as if it happened to someone else.
          </p>

          <p style={{marginTop: '2rem'}}>
            The most common reaction I hear after surgery is surprise. Patients expected to see more. They expected to feel more. They were bracing for something vivid and unsettling, and what they got instead was abstract, brief, and far less intense than they imagined.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What About <strong>the Pain?</strong></h2>
          <p>
            This always comes up alongside the question about what you see. If you are awake, does it hurt?
          </p>
          <p>
            No. The eye is one of the most sensitive parts of the body, but it is also one of the easiest to anesthetize effectively. We use numbing drops, and in some cases a small injection of anesthetic around the eye. By the time surgery begins, you do not feel pain. You may feel touch. You may feel pressure. You may be aware that something is happening. But you do not feel pain.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Patients describe the sensation as strange but not painful. A sense of something pressing lightly on the eye. A feeling of coolness from the irrigation fluid. Awareness without discomfort. Many patients say they felt nothing at all. A few say they felt a brief moment of pressure during lens insertion, but even that is not painful, just unusual.</strong></p>
          </div></BlurReveal>

          <p>
            If at any point during surgery a patient reports discomfort, we can administer more anesthetic. Pain is not part of the process. Anxiety and anticipation, yes. Pain, no.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why We <strong>Don't Use General Anesthesia</strong></h2>
          <p>
            At this point, many patients ask: if being awake is so unsettling for people, why not just put them to sleep?
          </p>
          <p>
            The answer is that general anesthesia carries risks that local anesthesia does not. Cataract surgery is a short, low-risk procedure. Putting a patient fully under anesthesia introduces risks related to breathing, blood pressure, and post-operative confusion, especially in older patients. It also requires a longer recovery period and more intensive monitoring.
          </p>
          <p>
            Local anesthesia, by contrast, is safe, fast-acting, and wears off quickly. Patients can go home within an hour of surgery. They are alert, oriented, and able to follow post-operative instructions immediately. The trade-off, being awake during the procedure, sounds worse than it is. The visual experience is minimal, the duration is short, and the anesthetic prevents pain.
          </p>
          <p>
            For the vast majority of patients, once the procedure is over, they understand why local anesthesia was the right choice. The fear of being awake is larger than the reality of being awake.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>10 Minutes</strong> Everyone Worries About</h2>
          <p>
            Cataract surgery typically takes 10 to 15 minutes per eye. That includes making the incisions, breaking up the cataract with ultrasound, removing the lens material, inserting the new lens implant, and ensuring everything is stable. It is a short procedure. But when you are lying on the table, waiting for it to begin, those minutes can feel longer than they are.
          </p>
          <p>
            Most of my pre-operative conversations are not about the surgery itself. They are about managing the anticipation. Patients are not afraid of the surgery. They are afraid of the moment before the surgery starts, when they are awake, aware, and waiting.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>A retired school principal told me: "I was terrified right up until the moment it started. Then I realized I couldn't see anything scary, I couldn't feel anything painful, and it was already halfway done. I had worked myself up for nothing."</p>
          </div></BlurReveal>

          <p>
            That is the most common post-operative sentiment I hear. Not that it was easy, though many say that. But that it was easier than expected. The gap between what patients feared and what they experienced is often enormous.
          </p>
          <p>
            I tell every patient the same thing: the fear is real, and it is valid. But the fear is based on an image in your head that does not match the reality of the procedure. You will not see what you think you will see. You will not feel what you think you will feel. And when it is over, most patients are surprised by how undramatic the whole thing was.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Helps <strong>the Most</strong></h2>
          <p>
            If the idea of being awake during surgery still feels overwhelming, here are the things that patients tell me made the biggest difference.
          </p>

          <h3 style={{marginTop: '2rem'}}>Knowing What to Expect</h3>
          <p>
            The unknown is always worse than the known. Patients who understand what they will see, or more accurately, what they will not see, report lower anxiety. That is why I spend time in every consultation explaining this in detail. It is not about convincing you the procedure is easy. It is about replacing the terrifying image in your head with an accurate one.
          </p>

          <h3 style={{marginTop: '2rem'}}>Sedation Options</h3>
          <p>
            We offer mild sedation for patients who want it. This does not put you to sleep, but it takes the edge off. You remain awake and able to follow instructions, but you feel calmer and more relaxed. Many patients choose this option, and most say it made the experience significantly easier. Some report that the procedure felt like it passed in a blur, even though they were technically awake the entire time.
          </p>

          <h3 style={{marginTop: '2rem'}}>Trusting the Process</h3>
          <p>
            This sounds abstract, but it matters. Cataract surgery is one of the most commonly performed surgeries in the world. Tens of millions of people have been through it. The technique is refined, the outcomes are predictable, and the anesthetic works. You are not the first person to be afraid. You are not the first person to wonder what you will see. And you will not be the first person to come out the other side and say, "that was not as bad as I thought."
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I have performed over 20,000 cataract surgeries, and I have never had a patient tell me afterward that the visual experience during surgery was traumatic. I have had patients say it was strange. I have had patients say it was boring. I have had patients say they barely remember it. But the thing they were afraid they would see, the sharp, vivid, disturbing image of their own surgery, that does not happen. The eye does not work that way. The procedure does not work that way. And knowing that, really understanding it, is often the thing that finally allows patients to move forward.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <div className="cta-block" style={{textAlign: 'center', padding: '48px 0'}}>
              <h2 className="section-title">Still Have <strong>Questions?</strong></h2>
              <p style={{maxWidth: '600px', margin: '0 auto 24px'}}>
                If you are still unsure about what to expect during cataract surgery, the best thing you can do is ask. We will walk through the entire process, answer every question, and make sure you feel prepared before the day arrives.
              </p>
              <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/is-cataract-surgery-painful" className="related-card">
              <h3>Is Cataract Surgery Painful?</h3>
              <p>The honest answer about pain, discomfort, and what you actually feel during and after surgery.</p>
            </Link>
            <Link href="/insights/cataract-surgery-step-by-step" className="related-card">
              <h3>Cataract Surgery Step by Step</h3>
              <p>What happens during each stage of the procedure, explained in plain language.</p>
            </Link>
            <Link href="/insights/the-needle-that-wasnt-there" className="related-card">
              <h3>The Needle That Wasn't There</h3>
              <p>One patient's story about the moment they realized their fear was bigger than the reality.</p>
            </Link>
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>Your First Week After Cataract Surgery</h3>
              <p>What to expect day by day during the first week of recovery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
