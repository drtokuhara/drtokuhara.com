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
    title: 'Independent. Physician-Owned.',
    description: 'No corporate parent. No private equity. Every recommendation comes from what is best for the patient. When Dr. T recommends a lens or treatment, it is because he thinks it is the right call, not because someone told him to hit a number.',
    slug: '/our-story/independent',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/#brand-stories' },
    { name: 'Independent', href: '/our-story/independent' },
  ]),
];

export const metadata = {
  title: 'Independent. Physician-Owned. - Our Story',
  description: 'No corporate parent. No private equity. Every recommendation comes from what is best for the patient. When Dr. T recommends a lens or treatment, it is because he thinks it is the right call, not because someone told him to hit a number.',
  alternates: {
    canonical: '/our-story/independent',
  },
  openGraph: {
    title: 'Independent. Physician-Owned. | Dr. Keith Tokuhara',
    description: 'No corporate parent. No private equity. Every recommendation comes from what is best for the patient. When Dr. T recommends a lens or treatment, it is because he thinks it is the right call, not because someone told him to hit a number.',
    url: 'https://drtokuhara.com/our-story/independent',
  },
};

export default function IndependentPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <VideoBackground 
        src="/media/ambient-desert-blue-hour.mp4" 
        poster="/media/desert-landscape-hero-1.png"
        overlayOpacity={0.5} 
        overlayColor="0, 20, 30" 
        className="page-hero page-hero-image" 
        style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <KineticText text="Independent. Physician-Owned." Tag="h1" mode="word" staggerDelay={0.05} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">No corporate parent. No private equity. Every recommendation comes from what is best for the patient, not what someone told me to hit a number.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScaleOnScroll scaleRange={[0.92, 1]} opacityRange={[0.7, 1]}>
            <p className="prose" style={{fontSize: '20px', lineHeight: 1.7}}>
              Most ophthalmology practices are no longer owned by the doctors who work there. They have been sold to private equity firms, hospital systems, or large corporate groups. The doctors still see patients. They still do surgery. But they do not make the decisions anymore.
            </p>
            <p className="prose" style={{fontSize: '20px', lineHeight: 1.7}}>
              Desert Vision Center is different. It is physician-owned. I make the decisions. When I recommend a lens, a treatment, or a course of action, that recommendation comes from what I think is best for the patient. Not from a mandate handed down by a corporate office. Not from a quarterly revenue target. Just from what I believe is right.
            </p>
          </ScaleOnScroll>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Independence <strong>Matters</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              When a practice is owned by a corporation or a private equity group, there are pressures that do not exist in an independent practice. Pressure to increase revenue per patient. Pressure to push premium lenses even when a standard lens might be a better fit. Pressure to hit surgical volume targets. Pressure to refer patients to in-network specialists even when a better option exists outside the network.
            </p>
            <p className="prose">
              Those pressures are not always obvious to the patient. The surgeon might still be skilled. The care might still be good. But the decision-making process is different. There is a layer between the doctor and the patient. A layer that cares more about efficiency and profitability than about what is actually best for the person sitting in the exam chair.
            </p>
          </BlurReveal>

          <FloatingQuote 
            quote="When I recommend a lens or treatment, it is because I think it is the right call. Not because someone told me to hit a number."
            delay={0.2}
          />
        </div>
      </section>

      {/* DESERT VISTA */}
      <PremiumImageBreak 
        src="/media/stock-couple-desert-overlook.jpg" 
        alt="Couple enjoying clear vision overlooking the Coachella Valley" 
        height="50vh"
        overlayOpacity={0.15}
      />

      {/* SAYING NO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Saying <strong>No</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              I have had opportunities to sell. Private equity groups approach ophthalmologists all the time. They make it sound appealing. You keep practicing. You keep seeing patients. But you no longer have to worry about the business side. They handle payroll, marketing, compliance, billing, all of it. You just focus on being a doctor.
            </p>
            <p className="prose">
              It sounds like a good deal. For some people, it is. But there is a trade-off. You lose control. You lose the ability to make decisions based purely on what you think is right. You become an employee, even if they still call you a partner.
            </p>
            <p className="prose">
              I have said no every time. Not because I think running a practice is easy. It is not. Not because I enjoy the administrative burden. I do not. But because I value the ability to make decisions without having to justify them to someone whose primary concern is return on investment.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* THE TRADE-OFF */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The <strong>Trade-Off</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              When you own your practice, you carry the risk. If something goes wrong, it is your problem. If revenue drops, you feel it. If an employee leaves, you have to figure out how to replace them. There is no corporate safety net. No one else to absorb the losses.
            </p>
            <p className="prose">
              But you also have freedom. Freedom to turn down a patient who is not a good fit. Freedom to recommend a less expensive option when it is the right call. Freedom to spend more time with a patient who needs it, even if it throws off the schedule. Freedom to refer to the best specialist, not just the one who is in-network or part of the same corporate group.
            </p>
            <p className="prose">
              That freedom is worth the trade-off.
            </p>
          </BlurReveal>

          <FloatingQuote 
            quote="I have the freedom to recommend what I actually think is right. Not what someone told me to recommend."
            delay={0.2}
          />
        </div>
      </section>

      {/* POOLSIDE IMAGE */}
      <PremiumImageBreak 
        src="/media/elderly-woman-poolside-desert.jpg" 
        alt="Elderly woman relaxing poolside with clear vision" 
        height="45vh"
        overlayOpacity={0.15}
      />

      {/* NO PRESSURE TO UPSELL */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">No Pressure to <strong>Upsell</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              In corporate practices, there is often pressure to maximize revenue per patient. That means pushing premium lenses. That means adding on services. That means converting as many patients as possible from basic cataract surgery to a higher-margin procedure.
            </p>
            <p className="prose">
              There is nothing inherently wrong with premium lenses. They are excellent options for the right patients. But they are not right for everyone. And when there is pressure to hit a certain percentage of premium lens uptake, the conversation changes. It stops being about what is best for the patient and starts being about hitting a target.
            </p>
            <p className="prose">
              I do not have that pressure. If a patient is a good candidate for a premium lens and they want one, I recommend it. If they are not a good candidate, or if a standard lens will meet their goals just as well, I tell them that. I do not get a bonus for upselling. I do not get penalized for choosing the less expensive option. My only incentive is to do what I think is right.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* LONG TERM */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Built for the <strong>Long Term</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              Private equity firms typically have a 5 to 7 year exit strategy. They buy a practice, optimize it for profitability, and then sell it to the next buyer. That model is fine for investors. It is not fine for patients. Because when the primary goal is maximizing short-term value for the next sale, long-term relationships and patient care often take a back seat.
            </p>
            <p className="prose">
              I am not trying to optimize Desert Vision Center for a sale. I am trying to build something that lasts. Something I can hand down. Something that serves this community well for decades. That changes how you make decisions. It changes what you prioritize. It changes what you are willing to say no to.
            </p>
            <p className="prose">
              This is not an investment property for me. This is my life's work.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* SUNSET IMAGE */}
      <PremiumImageBreak 
        src="/media/lifestyle-sunset-dining.jpg" 
        alt="Couple dining at sunset in the Coachella Valley" 
        height="45vh"
        overlayOpacity={0.2}
      />

      {/* FINAL THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What It Comes Down <strong>To</strong></h2>
          </ScrollReveal>
          <BlurReveal threshold={0.3} once={true}>
            <p className="prose">
              When you choose a surgeon, you are not just choosing someone with good hands and good training. You are choosing someone whose judgment you trust. And judgment is shaped by incentives. If a surgeon's incentives are aligned with corporate profitability targets, their judgment will be influenced by that. If their incentives are aligned with patient outcomes and long-term relationships, their judgment will be different.
            </p>
            <p className="prose">
              My incentives are simple. Do good work. Treat people well. Build something that lasts. There is no corporate parent looking over my shoulder. No private equity firm waiting for their return. Just me, my team, and the patients we serve.
            </p>
            <p className="prose">
              That is how it should be.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-warm">
        <div className="container content-narrow text-center">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" style={{marginBottom: '16px'}}>Schedule a Consultation</h2>
            <p className="prose" style={{marginBottom: '32px', fontSize: '18px'}}>
              Experience the difference of independent, physician-owned care.
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
