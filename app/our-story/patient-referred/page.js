import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
  ScaleOnScroll,
  PremiumImageBreak,
  NumberReveal,
} from '../../components/ScrollAnimations';

const jsonLd = [
  articleSchema({
    title: '98% Patient Referred',
    description: 'DVC does not advertise the way most practices do. 98% of patients come from other patients. That is not a marketing strategy. That is trust. You cannot buy that.',
    slug: '/our-story/patient-referred',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/#brand-stories' },
    { name: '98% Patient Referred', href: '/our-story/patient-referred' },
  ]),
];

export const metadata = {
  title: '98% Patient Referred - Our Story',
  description: 'DVC does not advertise the way most practices do. 98% of patients come from other patients. That is not a marketing strategy. That is trust. You cannot buy that.',
  alternates: {
    canonical: '/our-story/patient-referred',
  },
  openGraph: {
    title: '98% Patient Referred | Dr. Keith Tokuhara',
    description: 'DVC does not advertise the way most practices do. 98% of patients come from other patients. That is not a marketing strategy. That is trust. You cannot buy that.',
    url: 'https://drtokuhara.com/our-story/patient-referred',
  },
};

export default function PatientReferredPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <VideoBackground 
        src="/media/ambient-desert-sunrise-v2.mp4" 
        poster="/media/desert-landscape-hero-2.png"
        overlayOpacity={0.5} 
        overlayColor="0, 20, 30" 
        className="page-hero page-hero-image" 
        style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Our Story</span>
            <h1><strong>98%</strong> Patient Referred</h1>
            <p className="page-hero-sub">We do not advertise the way most practices do. 98% of our patients come from other patients. That is not a marketing strategy. That is trust. You cannot buy that.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Most ophthalmology practices spend a lot of money on advertising. Billboards. Radio ads. Direct mail. Google ads. They pay for new patients because that is how they have to grow. When you are part of a larger corporate group, that advertising spend is part of the model. It is expected.
          </p>
          <p>
            We do not do that. We never have. Nearly every patient who walks through our door was sent here by another patient. Someone who had surgery with me, recovered well, and told their friend or family member to come see me when it was their turn.
          </p>
        </div>
      </section>

      {/* NUMBER DISPLAY */}
      <section className="section section-warm">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '48px 0',
          }}>
            <NumberReveal number="98%" label="Patient Referred" delay={0} />
            <NumberReveal number="30+" label="Years in Practice" delay={0.2} />
            <NumberReveal number="0" label="Billboards" delay={0.4} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why That <strong>Matters</strong></h2>
          <p>
            When a practice relies on advertising to bring in patients, there is pressure to convert. To upsell. To hit volume targets. Every patient becomes a number. Every surgery becomes part of a quota. That is not necessarily malicious. It is just what happens when the business model depends on high volume and paid acquisition.
          </p>
          <p>
            When your patients come from referrals, the pressure is different. The pressure is to do good work. To treat people well. To be someone worth recommending. Because if you are not, the referrals stop. And then the practice stops.
          </p>
          <p>
            That is a better kind of pressure. It keeps you honest.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>When your patients come from referrals, the pressure is to do good work. To treat people well. To be someone worth recommending.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* LIFESTYLE IMAGE */}
      <PremiumImageBreak 
        src="/media/stock-couple-stargazing-desert.jpg" 
        alt="Couple enjoying clear vision under desert night sky" 
        height="50vh"
        overlayOpacity={0.15}
      />

      {/* TRUST */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Trust Is <strong>Earned</strong></h2>
          <p>
            You cannot buy trust. You cannot run an ad campaign for it. You cannot fake it with testimonials or staged photos or corporate messaging. Trust is earned one patient at a time. One surgery at a time. One conversation at a time.
          </p>
          <p>
            When someone tells their spouse, their sister, their golf partner to come see me, they are putting their own credibility on the line. They are saying, "I trust this person with something as important as my vision, and I think you should too." That is not a casual recommendation. That is personal.
          </p>
          <p>
            I do not take that lightly.
          </p>
        </div>
      </section>

      {/* THE STANDARD */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Standard</strong></h2>
          <p>
            Every patient I see knows they were sent here by someone who trusted me. That means I am not just treating them. I am honoring the trust of the person who referred them. And I am either earning or losing the trust that will determine whether they send the next person.
          </p>
          <p>
            That is a high standard. It is supposed to be.
          </p>
          <p>
            When 98% of your patients come from referrals, you do not get to cut corners. You do not get to have a bad day and shrug it off. You do not get to treat people like numbers because your entire practice depends on those people being willing to vouch for you.
          </p>
          <p>
            Some surgeons would find that stressful. I find it clarifying. It tells me exactly what matters. The patient in front of me. The outcome. The experience. Everything else is noise.
          </p>
        </div>
      </section>

      {/* COMMUNITY IMAGE */}
      <PremiumImageBreak 
        src="/media/stock-seniors-outdoor-dining.jpg" 
        alt="Group of friends dining outdoors in the Coachella Valley" 
        height="45vh"
        overlayOpacity={0.2}
      />

      {/* LONG TERM */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Built for the <strong>Long Term</strong></h2>
          <p>
            A practice built on referrals is a practice built to last. It is not vulnerable to marketing budget cuts or algorithm changes or advertising platform disruptions. It is vulnerable to one thing: doing bad work.
          </p>
          <p>
            That is exactly the vulnerability I want. It keeps me focused on what actually matters. Not volume. Not growth for growth's sake. Just good outcomes and good relationships.
          </p>
          <p>
            If I do that well, the practice takes care of itself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <h2 className="section-title" style={{marginBottom: '16px'}}>Schedule a Consultation</h2>
          <p style={{marginBottom: '32px', fontSize: '18px'}}>
            Join the 98% of patients who were referred by someone they trust.
          </p>
          <a href="https://www.desertvisioncenter.com/contact" className="button button-primary button-large">
            Contact Desert Vision Center
          </a>
        </div>
      </section>
    </>
  );
}
