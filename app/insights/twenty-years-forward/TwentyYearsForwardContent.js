'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../LanguageContext';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';
import AuthorByline from '../../components/AuthorByline';

export default function TwentyYearsForwardContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <VideoBackground
        src="/media/ambient-desert-golden-hour.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Clinical Insight</span>
          <h1>Twenty Years <strong>Forward</strong></h1>
          <p className="page-hero-sub">She thought it was just aging. She had been adjusting for years. The exam told a different story.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* OPENING */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 9, 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            She came in expecting a new glasses prescription. That was all. Her optician had been adjusting her lenses every year for the past several years, each time nudging the numbers a little, trying to sharpen what had slowly gone soft. She had followed every recommendation. New frames. Updated lenses. Sometimes a slight improvement, sometimes not.
          </p>
          <p>
            She was 62, active, and frustrated. Not in the dramatic sense. More the quiet frustration of someone who has been doing everything right and still feeling like something is slipping away.
          </p>
          <p>
            "I think my eyes are just getting worse with age," she said, almost apologetically. As though declining vision were something she should simply accept.
          </p>
          <p>
            I hear that sentence more often than almost any other.
          </p>
        </div>
      </section>

      {/* THE SLOW FADE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Slow <strong>Fade</strong></h2>
          <p>
            Cataracts do not announce themselves. There is no single morning when you wake up and think, "Something is wrong with my lens." Instead, the change is incremental. So gradual that your brain adapts to it before your conscious mind even registers the shift.
          </p>
          <p>
            You stop driving at night, not because you made a deliberate decision, but because it just feels less comfortable. You hold your phone a little farther away. You ask for the table near the window at restaurants. You turn on a second lamp when you read.
          </p>
          <p>
            These are not conscious choices. They are adaptations. Small, invisible accommodations to a world that is slowly dimming.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The most common thing patients tell me after cataract surgery is not "I can see better." It is "I had no idea how much I was missing."</p>
          </div></BlurReveal>

          <p>
            That is what makes gradual vision loss so insidious. It does not feel like loss. It feels like aging. Like something inevitable and permanent. And because the change happens so slowly, you never get that single alarming moment that sends you to a doctor with urgency.
          </p>
          <p>
            Instead, you just quietly adjust your life. And you assume this is normal.
          </p>
        </div>
      </section>

      {/* WHAT THE EXAM REVEALED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What the Exam <strong>Revealed</strong></h2>
          <p>
            Her exam took time. Not because there was anything complicated, but because I wanted her to understand what we were looking at.
          </p>
          <p>
            Both eyes showed cataracts. The right was more advanced than the left. Not dramatically so, but enough to explain the creeping frustration she had been living with. The clouding in her natural lenses was scattering light, reducing contrast, and progressively blurring her vision in ways that no glasses prescription could fully correct.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Her optician had been doing the right thing, adjusting her prescription to compensate. But there is a limit to what glasses can do when the lens inside the eye itself is the problem. You can refine the optics in front of the eye all day. If the window is fogging from the inside, the view still dims.</strong></p>
          </div></BlurReveal>

          <p>
            When I showed her the imaging and explained what she was seeing, the shift was immediate. Not just in her understanding, but in her entire posture. Her shoulders dropped. She sat back in the chair.
          </p>
          <p>
            "So this isn't just aging?"
          </p>
          <p>
            No. This is treatable.
          </p>
        </div>
      </section>

      {/* THE MOMENT THAT CHANGES EVERYTHING */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Moment That Changes <strong>Everything</strong></h2>
          <p>
            I have been practicing ophthalmology for over twenty years, and I still find this particular moment in a consultation to be one of the most powerful.
          </p>
          <p>
            It is the moment when a patient who has been quietly accepting decline learns that what they are experiencing is not permanent. Not inevitable. Not the slow dimming of a light that cannot be relit.
          </p>
          <p>
            It is fixable.
          </p>
          <p>
            The relief is visible. Sometimes there are tears. Sometimes there is laughter. Sometimes it is just a long exhale and a quiet, "Really?"
          </p>
          <p>
            This patient had been reorganizing her life around a problem she did not know she had. She had stopped going to evening book club because she could not read comfortably in the low lighting. She had given up her weekly dinner with friends at a dimly lit restaurant she loved. She had started declining invitations that involved driving after dark.
          </p>
          <p>
            Each of these retreats was small. None of them felt like a crisis. But together, they represented a slow contraction of her world.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>She was not losing her vision. She was losing her life. One small accommodation at a time.</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* THE SILENT EPIDEMIC */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Silent <strong>Epidemic</strong></h2>
          <p>
            This is not one patient's story. It is a pattern I see constantly.
          </p>
          <p>
            According to the National Eye Institute, more than half of all Americans will have cataracts or have had cataract surgery by age 80. But long before that threshold, many patients are living with early to moderate cataracts that are quietly reshaping how they experience the world.
          </p>
          <p>
            They compensate. They adapt. They blame age.
          </p>
          <p>
            The prescription changes keep coming, each one a little less effective than the last. And because no single visit reveals a dramatic problem, the pattern can continue for years.
          </p>
          <p>
            I am not suggesting that every person who needs new glasses has cataracts. I am saying that when prescription changes stop working, when the world seems dimmer or more washed out than it used to, when night driving becomes unreliable, those are not just signs of aging. They may be signs that something specific and addressable is happening.
          </p>
          <p>
            And the difference between accepting it and investigating it can be the difference between a shrinking world and a full one.
          </p>
        </div>
      </section>

      {/* TWENTY YEARS FORWARD */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Twenty Years <strong>Forward</strong></h2>
          <p>
            The title of this reflection is not about looking back. It is about looking ahead.
          </p>
          <p>
            When we treated this patient's cataracts, we were not just restoring the vision she had lost over the past few years. We were giving her the next twenty years of her visual life back.
          </p>
          <p>
            Twenty years of reading without straining. Twenty years of driving confidently. Twenty years of walking into a dim restaurant and being able to read the menu without pulling out her phone flashlight. Twenty years of saying yes to invitations instead of quietly declining.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>That is what cataract surgery actually does when it is done at the right time, for the right reasons, with the right conversation beforehand. It does not just change how you see. It changes how you live. And it changes how long you get to live that way.</strong></p>
          </div></BlurReveal>

          <p>
            This is why timing matters. Not in the way patients fear, as though there is a countdown and they might miss the window. But in the sense that every month spent adjusting to unnecessary decline is a month that did not have to be that way.
          </p>
        </div>
      </section>

      {/* THE CONSULTATION THAT REFRAMES */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Consultation That <strong>Reframes</strong></h2>
          <p>
            If there is one thing I want patients to take from this story, it is this: do not assume that gradual vision change is just aging.
          </p>
          <p>
            It might be. But it also might not.
          </p>
          <p>
            A comprehensive evaluation, one that goes beyond checking your prescription and actually examines the structures of the eye, can reveal whether there is a treatable cause behind the slow fade. And that evaluation takes time. It requires questions about how you live, not just how you see on a chart.
          </p>

          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The patients who move me most are not the ones with dramatic presentations. They are the ones who have been quietly rearranging their lives around a problem they did not know was a problem. They come in apologetic, almost embarrassed, as though they are wasting my time. And then I get to tell them the thing they have not heard: this is not your fault, this is not permanent, and we can help. That conversation, the one that reframes decline as something fixable, is one of the reasons I still love this work after all these years.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/do-i-really-need-surgery" className="related-card">
              <h3>Do I Really Need Surgery Yet?</h3>
              <p>Sometimes the answer is not yet. Timing and honest evaluation matter.</p>
            </Link>
            <Link href="/insights/when-is-the-right-time" className="related-card">
              <h3>When Is the Right Time for Cataract Surgery?</h3>
              <p>There is no magic number. The right time depends on your life, not a chart.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a thorough consultation actually looks like, and why it matters.</p>
            </Link>
            <Link href="/insights/the-reader-who-almost-gave-up-her-books" className="related-card">
              <h3>The Reader Who Almost Gave Up Her Books</h3>
              <p>An 81-year-old delayed surgery for years because nobody told her she had a choice.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Not sure if it is time to <strong>get checked?</strong></h2>
          <p>If your glasses prescriptions keep changing but your vision still feels off, a comprehensive evaluation can tell you whether something more is going on.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/patient-journey" className="btn-secondary">See Your Patient Journey</Link>
          </div>
        </div>
      </section>
    </>
  );
}
