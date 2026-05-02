'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../LanguageContext';
import AuthorByline from '../../components/AuthorByline';

export default function TwentyYearsForwardContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-seniors-resort-promenade-night.jpg"
          alt="Seniors strolling along a resort promenade at night"
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.4) 0%, rgba(0,20,30,0.7) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <h1 dangerouslySetInnerHTML={{ __html: t('insights.twentyYears.title') || 'Twenty Years <strong>Forward</strong>' }} />
          <p className="page-hero-sub">{t('insights.twentyYears.subtitle') || 'A cataract decision across time.'}</p>
        </div>
      </section>

      {/* OPENING */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="April 30, 2026" />
          <p className="body-lead">
            A patient sat in my chair today who made me pause in a way that charts and imaging never do.
          </p>
          <p>
            She is 88 years old. Twenty years ago, she had cataract surgery performed elsewhere and chose a multifocal lens implant. At the time, that decision likely made perfect sense. She was in her late 60s, active, independent, and wanting freedom from glasses. That is what these lenses promise: range of vision, convenience, a lifestyle upgrade.
          </p>
          <p>
            Now, two decades later, her situation is different.
          </p>
          <p>
            She has developed age-related macular degeneration. Her best corrected vision is around 20/80. She no longer drives. And as I examined her, I found myself thinking not just about her eyes today, but about the moment, twenty years ago, when she made that decision.
          </p>
          <p>
            Because the truth is, that version of her was not thinking about this version of her.
          </p>
        </div>
      </section>

      {/* THE DECISION THAT MADE SENSE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Decision That <strong>Made Sense</strong></h2>
          <p>
            When patients consider cataract surgery, they are often presented with choices. Some lenses offer simplicity and clarity. Others offer range and convenience. Multifocal lenses fall into that second category. They can reduce dependence on glasses and support an active lifestyle.
          </p>
          <p>
            But every choice in medicine is a tradeoff.
          </p>
          <p>
            Multifocal lenses work by splitting light into multiple focal points. That allows for distance and near vision, but it comes at a cost: reduced contrast sensitivity and potential visual phenomena like glare or halos. In a healthy eye, many patients adapt well to this.
          </p>
          <p>
            But the eye is not a static organ. It changes. The retina, in particular, can evolve over time.
          </p>
          <p>
            Conditions like macular degeneration affect how the eye processes detail and contrast. When that happens, the visual compromises of a multifocal lens can become more noticeable.
          </p>
          <p>
            So naturally, the question arises: would she be seeing better today if she had chosen a different lens?
          </p>
          <p>
            The honest answer is that we do not know for certain. But it is reasonable to say that a simpler lens may have provided more stable visual quality as her retina changed over time.
          </p>
        </div>
      </section>

      {/* LIFESTYLE IMAGE */}
      <section className="section section-warm" style={{paddingTop: '24px', paddingBottom: '24px'}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/stock-seniors-bocce-group.jpg"
              alt="Group of senior friends enjoying bocce ball in the desert - aging actively with good vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* THE PSYCHOLOGICAL REALITY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Psychological <strong>Reality</strong></h2>
          <p>
            It is easy, from where we stand today, to look backward and question past decisions. But that perspective is misleading.
          </p>
          <p>
            At 68, her priorities were clear: independence, mobility, freedom from glasses.
          </p>
          <p>
            At 88, her priorities are different: safety, function, adaptation to visual decline.
          </p>
          <p>
            These are not the same person psychologically, even though they are the same individual.
          </p>
          <p>
            As humans, we naturally make decisions based on our current identity, not a distant future version of ourselves that we can barely imagine. Psychologists call this "present bias." We prioritize what matters now, and we discount what might happen decades later.
          </p>
          <p>
            That is not a flaw. It is how we are wired.
          </p>
          <p>
            So rather than viewing her past decision as a mistake, it may be more accurate to see it as a choice that served her well for many years, one that simply did not anticipate every possible future outcome.
          </p>
          <p>
            And realistically, no decision ever can.
          </p>
        </div>
      </section>

      {/* THE PHILOSOPHICAL TENSION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Philosophical <strong>Tension</strong></h2>
          <p>
            This case highlights a deeper question that extends beyond ophthalmology:
          </p>
          <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--night-horizon)', margin: '24px 0' }}>
            When we make decisions, should we prioritize the present version of ourselves, or the person we will become?
          </p>
          <p>
            As surgeons, we face a version of this question every day.
          </p>
          <p>
            Do we optimize for the patient sitting in front of us right now? Or do we try to protect the future version of that patient, someone who may have different needs, different limitations, and different values?
          </p>
          <p>
            The challenge is that the future is uncertain.
          </p>
          <p>
            We cannot predict who will develop macular degeneration. We cannot fully anticipate how someone's life circumstances will evolve. And we cannot assume that what matters to a person today will still matter to them twenty years from now.
          </p>
          <p>
            What we can do is acknowledge that every choice carries both benefits and vulnerabilities.
          </p>
          <p>
            A lens that maximizes convenience today may introduce tradeoffs later. A lens that preserves optical simplicity may require more dependence on glasses now.
          </p>
          <p>
            There is no perfect answer. Only different balances.
          </p>
        </div>
      </section>

      {/* LIFESTYLE IMAGE */}
      <section className="section" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/stock-seniors-evening-stroll.jpg"
              alt="Seniors enjoying an evening stroll together"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* A BETTER WAY TO THINK ABOUT IT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">A Better Way to <strong>Think About It</strong></h2>
          <p>
            So what should patients take from this?
          </p>
          <p>
            Not fear. Not regret. But awareness.
          </p>
          <p>
            When you are considering cataract surgery, you are not just making a decision for today. You are making a decision that will live with you for decades.
          </p>
          <p>
            That does not mean you should avoid advanced technology. It means you should understand the tradeoffs clearly.
          </p>
          <p>
            Ask yourself:
          </p>
          <ul className="content-list">
            <li>What matters most to me right now?</li>
            <li>How might my priorities change over time?</li>
            <li>Am I comfortable with the potential downsides of this choice if my eyes change in the future?</li>
          </ul>
          <p>
            And for us, as surgeons, this case is a reminder of something equally important:
          </p>
          <p>
            Our role is not just to recommend a procedure. It is to help patients see beyond the moment they are in, without pretending we can predict the future.
          </p>
          <p>
            We are not choosing for them. We are guiding them through uncertainty.
          </p>
        </div>
      </section>

      {/* THE TAKEAWAY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              Looking at this patient, I do not see a wrong decision. I see a human decision, made at the right time, for the right reasons, with the information available.
            </p>
            <p>
              But I also see an opportunity. An opportunity to have deeper conversations. An opportunity to frame choices not as "better" or "worse," but as tradeoffs across time. An opportunity to respect both the patient in front of us, and the person they are still becoming.
            </p>
            <p>
              Because in medicine, as in life, the hardest decisions are not about what is right today. They are about how today's choices echo into a future we cannot fully see.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Related <strong>Reading</strong></h2>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A guide to your lens options based on how you live, not what costs the most.</p>
            </Link>
            <Link href="/understand-your-options" className="related-card">
              <h3>Understanding Your Options</h3>
              <p>Start here if you are exploring cataract surgery and want to learn before deciding.</p>
            </Link>
            <Link href="/insights/when-more-isnt-better" className="related-card">
              <h3>When More Isn't Better</h3>
              <p>Why the most advanced option is not always the right one.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: 'Want to talk through your <strong>options?</strong>' }} />
          <p>The best lens decision starts with an honest conversation about your eyes, your life, and your priorities.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/patient-journey" className="btn-secondary">See Your Patient Journey</Link>
          </div>
        </div>
      </section>
    </>
  );
}
