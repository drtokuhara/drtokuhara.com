'use client';

import { ScrollReveal, StaggerChildren, StaggerItem } from './ScrollAnimations';

export default function PageFAQ({ faqs, heading = 'Common Questions' }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="section section-warm" id="faq">
      <div className="container content-narrow">
        <ScrollReveal direction="up" once={true}>
          <h2 className="section-title">{heading}</h2>
        </ScrollReveal>
        <StaggerChildren className="faq-list" staggerDelay={0.08}>
          {faqs.map((item, index) => (
            <StaggerItem key={index}>
              <div className="faq-item">
                <h3 className="faq-question">{item.q}</h3>
                <p className="faq-answer prose">{item.a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
