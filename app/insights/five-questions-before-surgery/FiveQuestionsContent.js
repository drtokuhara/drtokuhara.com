'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal, BlurReveal, LineDraw } from '../../components/ScrollAnimations';

export default function FiveQuestionsContent() {
  return (
    <>
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-couple-patio-scenic-view.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center 30%'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <span className="insight-hero-cluster">Decisions &amp; Timing</span>
          <h1>Five Questions to Ask Before <strong>Cataract Surgery</strong></h1>
          <p className="page-hero-sub">Your surgeon should welcome every one of them. If they don't, that tells you something too.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal>
            <div className="section-divider" style={{margin: '32px auto'}} />
            <p className="body-lead body-lead-dropcap">
              When your cataract consultation ends, your surgeon will almost certainly ask: &ldquo;Do you have any questions for me?&rdquo; Most patients say no. Not because they don't have questions, but because they don't know which ones matter.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Here are five. They are not complicated. They are not confrontational. But the answers will tell you more about your surgeon and your surgery than any brochure ever could.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal>
            <h2 className="section-title"><strong>1.</strong> What are my lens options, and which one fits my life?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Modern cataract surgery replaces your clouded natural lens with an artificial one. The lens you choose is permanent. It is the single most important decision in your surgery.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              Options range from standard monofocal lenses (covered by insurance, excellent at one distance) to premium lenses that reduce astigmatism or provide multiple focal points. Extended Depth of Focus lenses like Vivity stretch your range. Multifocal lenses like PanOptix give near, intermediate, and far vision.
            </p>
          </ScrollReveal>
          <BlurReveal>
            <p style={{fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--night-horizon)', padding: '16px 0'}}>
              Not every lens works for every eye. A good surgeon will tell you which options are realistic for your specific situation, not just which ones exist.
            </p>
          </BlurReveal>
        </div>
      </section>

      <LineDraw style={{maxWidth: '200px', margin: '0 auto'}} />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal>
            <h2 className="section-title"><strong>2.</strong> Do you use laser or traditional technique, and why?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              There are two approaches to cataract surgery: traditional (by hand) and laser-assisted (computer-guided). Both produce excellent outcomes in experienced hands. The laser adds precision to certain steps. The surgeon's skill and judgment matter more than the tool.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              The important thing is not which technique your surgeon uses. It is whether they can explain why they prefer it for your case. A thoughtful answer here tells you the surgeon is thinking about you specifically, not applying a one-size-fits-all protocol.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <LineDraw style={{maxWidth: '200px', margin: '0 auto'}} />

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal>
            <h2 className="section-title"><strong>3.</strong> Does your technology verify measurements during surgery?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Intraoperative aberrometry (such as the ORA system) allows your surgeon to double-check lens calculations while you are on the table. Think of it as a real-time confirmation that the lens power and position are optimized before the surgery ends.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              Not every practice has this technology. Not every case requires it. But knowing whether your surgeon has access to it, and when they use it, gives you insight into how thorough their process is.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <LineDraw style={{maxWidth: '200px', margin: '0 auto'}} />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal>
            <h2 className="section-title"><strong>4.</strong> What happens if something goes wrong?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              This is the question most patients are afraid to ask. But it is the most important one.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              Complications during cataract surgery are uncommon. But they happen. A posterior capsule tear, a retained lens fragment, an unexpected finding. The question is not whether your surgeon has ever encountered these. The question is whether they can handle them.
            </p>
          </ScrollReveal>
          <BlurReveal>
            <p style={{fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--night-horizon)', padding: '16px 0'}}>
              A surgeon who handles complex and revision cases regularly thinks about prevention differently than one who only does straightforward surgery. Their experience changes how they plan, how they operate, and how they respond when something unexpected happens.
            </p>
          </BlurReveal>
        </div>
      </section>

      <LineDraw style={{maxWidth: '200px', margin: '0 auto'}} />

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal>
            <h2 className="section-title"><strong>5.</strong> Who takes care of me after surgery?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              This one surprises people. Not every surgeon manages their own post-operative care. Some practices share follow-up visits with associates, optometrists, or co-management partners.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              That is not inherently bad. But you should know the plan. You should know who will see you the day after surgery, who will monitor your healing, and who to call if something feels wrong at 9 PM on a Tuesday.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p>
              The answer to this question tells you how your surgeon thinks about the relationship. Is it a procedure, or is it a commitment?
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal>
            <h2 className="section-title">Why These <strong>Questions Matter</strong></h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              These five questions are not a test. They are a conversation starter. A surgeon who welcomes them is a surgeon who respects your role in the decision. A surgeon who rushes past them is telling you something about how the rest of the experience will feel.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              You are not being difficult by asking. You are being smart. Your eyes deserve that.
            </p>
          </ScrollReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>

          <LineDraw style={{margin: '40px auto', maxWidth: '200px'}} />

          <ScrollReveal delay={0.2}>
            <p style={{textAlign: 'center', marginTop: '24px'}}>
              <Link href="/choosing-your-surgeon" className="cta-link">
                More on choosing your surgeon &rarr;
              </Link>
            </p>
            <p style={{textAlign: 'center', marginTop: '12px'}}>
              <Link href="/contact" className="cta-link">
                Schedule a consultation &rarr;
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
