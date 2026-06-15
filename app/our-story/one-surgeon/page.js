import { articleSchema, breadcrumbSchema } from '../../schema';
import {
  ScrollReveal,
  BlurReveal,
  KineticText,
  VideoBackground,
  ScaleOnScroll,
  PremiumImageBreak,
  FloatingQuote,
} from '../../components/ScrollAnimations';

const jsonLd = [
  articleSchema({
    title: 'One Surgeon. One Accountability.',
    description: 'The surgeon you meet is the surgeon who operates and the surgeon who sees you afterward. No rotating specialists. No co-management handoffs. One person accountable for your outcome.',
    slug: '/our-story/one-surgeon',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/#brand-stories' },
    { name: 'One Surgeon', href: '/our-story/one-surgeon' },
  ]),
];

export const metadata = {
  title: 'One Surgeon. One Accountability. - Our Story',
  description: 'The surgeon you meet is the surgeon who operates and the surgeon who sees you afterward. No rotating specialists. No co-management handoffs. One person accountable for your outcome.',
  alternates: {
    canonical: '/our-story/one-surgeon',
  },
  openGraph: {
    title: 'One Surgeon. One Accountability. | Dr. Keith Tokuhara',
    description: 'The surgeon you meet is the surgeon who operates and the surgeon who sees you afterward. No rotating specialists. No co-management handoffs. One person accountable for your outcome.',
    url: 'https://drtokuhara.com/our-story/one-surgeon',
  },
};

export default function OneSurgeonPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <VideoBackground 
        src="/media/ambient-desert-twilight-v2.mp4" 
        poster="/media/desert-landscape-hero-3.png"
        overlayOpacity={0.5} 
        overlayColor="0, 20, 30" 
        className="page-hero page-hero-image" 
        style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <KineticText text="One Surgeon. One Accountability." Tag="h1" mode="word" staggerDelay={0.05} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">The surgeon you meet is the surgeon who operates and the surgeon who sees you afterward. No rotating specialists. No co-management handoffs. One person accountable for your outcome.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScaleOnScroll scaleRange={[0.92, 1]} opacityRange={[0.7, 1]}>
            <p className="prose" style={{fontSize: '20px', lineHeight: 1.7}}>
              In many practices, you meet one surgeon for the consultation, get operated on by that surgeon, and then see a different doctor for your post-op visits. Sometimes a resident. Sometimes a rotating optometrist. Sometimes an associate who has never been in the operating room with you.
            </p>
            <p className="prose" style={{fontSize: '20px', lineHeight: 1.7}}>
              That model might work fine when everything goes well. But when something goes wrong, or when your result is not what you expected, you end up explaining your situation to someone who was not there. Who did not make the decisions. Who cannot answer your questions with certainty because they were not the one holding the instruments.
            </p>
          </ScaleOnScroll>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Real <strong>Accountability</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              When I see you for a consultation, I am evaluating your case. I am the one who will operate. I am the one who will see you the next day, the next week, and every visit after that. If something goes wrong, you see me. If you have a question about what happened in surgery, you ask me. If the outcome is not what we hoped for, I am the one who has to answer for it.
            </p>
            <p className="prose">
              That is real accountability. Not the kind that gets delegated to someone else. The kind where there is no one else to pass it to.
            </p>
          </BlurReveal>

          <FloatingQuote 
            quote="When I see you for a consultation, I am evaluating your case. I am the one who will operate. I am the one who will see you afterward. If something goes wrong, you see me."
            delay={0.2}
          />
        </div>
      </section>

      {/* CONSULTATION IMAGE */}
      <PremiumImageBreak 
        src="/media/patient-couple-consultation.jpg" 
        alt="Dr. Tokuhara consulting with patient couple" 
        height="50vh"
        overlayOpacity={0.1}
      />

      {/* WHY IT MATTERS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why That <strong>Matters</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              Surgery is not a transaction. It is a relationship. And like any relationship, it depends on continuity. When you see the same person every time, that person knows your case. They know your goals. They remember what you talked about in the first visit. They know what happened in the operating room because they were the one making the decisions.
            </p>
            <p className="prose">
              When you see a different person every time, you lose that continuity. You have to re-explain your concerns. You have to hope that whoever you are seeing has actually read your chart. You have to wonder if they are giving you the real story or just the version they were told to give you.
            </p>
            <p className="prose">
              I do not want my patients to have to wonder.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* COMPLICATIONS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">When Things Go <strong>Wrong</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              Cataract surgery has an excellent track record. Most surgeries go exactly as planned. But no surgery is risk-free. Sometimes there is a complication. Sometimes the result is not what we hoped for. Sometimes a patient develops an issue weeks or months later.
            </p>
            <p className="prose">
              When that happens, I am the one who handles it. Not an associate. Not a junior surgeon. Me. The same person who did the surgery in the first place. I know what I did. I know what I saw. I know what I was thinking at the time. That knowledge matters when you are trying to figure out what went wrong and what to do next.
            </p>
            <p className="prose">
              Some surgeons operate and move on. They leave the post-op care to someone else. That might be more efficient for them. But it is not better for the patient.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* OUTDOOR ACTIVITY IMAGE */}
      <PremiumImageBreak 
        src="/media/elderly-man-walker-desert-path.jpg" 
        alt="Elderly man walking confidently on desert path after cataract surgery" 
        height="45vh"
        overlayOpacity={0.15}
      />

      {/* TRUST */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">One Person You Can <strong>Trust</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              When you choose a surgeon, you are not just choosing a set of hands. You are choosing someone to trust with something as important as your vision. That trust is easier to build when you are dealing with one person. When you know that person is accountable. When you know they will still be there if something goes wrong.
            </p>
            <p className="prose">
              I have seen patients who went to practices with rotating surgeons. They liked their surgeon. The surgery went well. But then they never saw that surgeon again. Post-op visits were handled by someone else. When they had a question, they had to talk to someone who did not remember them. When they developed an issue months later, they were told their original surgeon was no longer with the practice.
            </p>
            <p className="prose">
              That is not how I work. If I operate on you, I see you afterward. If you have a problem six months later, you call my office and you see me. If you need revision surgery, I am the one who does it. There is no one else to pass it to. That is the deal.
            </p>
          </BlurReveal>

          <FloatingQuote 
            quote="If I operate on you, I see you afterward. If you have a problem six months later, you see me. There is no one else to pass it to. That is the deal."
            delay={0.2}
          />
        </div>
      </section>

      {/* SIMPLICITY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">It Should Be <strong>Simple</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              This should not be a selling point. It should be the standard. The surgeon you meet should be the surgeon who operates and the surgeon who sees you afterward. That should be obvious.
            </p>
            <p className="prose">
              But it is not the standard anymore. In many practices, especially those owned by private equity groups or large hospital systems, efficiency matters more than continuity. Surgeons operate. Associates handle follow-up. Optometrists do the post-op visits. Everyone has a role. It is efficient. It scales well. It just does not serve the patient as well as it could.
            </p>
            <p className="prose">
              I prefer the old way. One surgeon. One relationship. One person accountable.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-white">
        <div className="container content-narrow text-center">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" style={{marginBottom: '16px'}}>Schedule a Consultation</h2>
            <p className="prose" style={{marginBottom: '32px', fontSize: '18px'}}>
              Meet the surgeon who will be there for every step of your journey.
            </p>
            <a href="https://www.desertvisioncenter.com/contact" className="button button-primary button-large">
              Contact Desert Vision Center
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
