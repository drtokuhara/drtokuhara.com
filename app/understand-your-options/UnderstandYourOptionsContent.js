'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';

export default function UnderstandYourOptionsContent() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-woman-outdoor-cafe.jpg"
          alt="Woman relaxing at an outdoor cafe"
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.4) 0%, rgba(0,20,30,0.7) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <h1 dangerouslySetInnerHTML={{ __html: t('understandOptions.title') || 'Understanding Your <strong>Options</strong>' }} />
          <p className="page-hero-sub">{t('understandOptions.subtitle') || "You don't need to decide anything right now. Start by understanding what you're dealing with."}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            {t('understandOptions.intro') || "If someone mentioned the word \"cataract\" at your last eye appointment, you probably have questions. That's exactly where you should be. Not rushing to a decision, not panicking, just learning. This page is your starting point."}
          </p>
        </div>
      </section>

      {/* WHAT IS A CATARACT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('understandOptions.whatIs.title') || 'What Is a <strong>Cataract?</strong>' }} />
          <p>
            {t('understandOptions.whatIs.p1') || "A cataract is the natural lens inside your eye becoming cloudy. That's it. It's not a growth, not a film over your eye, and not something you did wrong. It happens to virtually everyone who lives long enough. Think of it like a window that slowly gets fogged over. You can still see through it for a while, but eventually the fog makes everything harder."}
          </p>
          <p>
            {t('understandOptions.whatIs.p2') || "Colors may look duller. Night driving gets harder. Reading in dim light becomes a struggle. You might find yourself needing more light, or holding your phone closer, or squinting at the TV. These are all signs the lens is losing its clarity."}
          </p>
          <p>
            {t('understandOptions.whatIs.p3') || "Cataracts don't go away on their own, and no eye drop or supplement reverses them. When the time is right, the only treatment is replacing the cloudy lens with a clear artificial one. But \"when the time is right\" is a conversation, not a deadline."}
          </p>
        </div>
      </section>

      {/* WHEN IS SURGERY THE RIGHT CHOICE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('understandOptions.when.title') || 'When Is Surgery the <strong>Right Choice?</strong>' }} />
          <p>
            {t('understandOptions.when.p1') || "There's no magic number on an eye chart that tells you it's time. The right time for surgery is when your cataracts are affecting your life in ways that matter to you. For one person that's trouble driving at night. For another it's not being able to read sheet music or see a golf ball land."}
          </p>
          <p>
            {t('understandOptions.when.p2') || "Here are some signals that surgery might be worth discussing:"}
          </p>
          <ul className="content-list">
            <li>{t('understandOptions.when.sign1') || "Your glasses prescription keeps changing, but your vision doesn't really improve"}</li>
            <li>{t('understandOptions.when.sign2') || "Night driving feels unsafe, especially with oncoming headlights"}</li>
            <li>{t('understandOptions.when.sign3') || "You've given up activities you enjoy because you can't see well enough"}</li>
            <li>{t('understandOptions.when.sign4') || "Colors look washed out or yellowish"}</li>
            <li>{t('understandOptions.when.sign5') || "You need increasingly bright light to read comfortably"}</li>
            <li>{t('understandOptions.when.sign6') || "Double vision or ghost images in one eye"}</li>
          </ul>
          <p>
            {t('understandOptions.when.p3') || "If none of these apply, you may not need surgery yet, and that's perfectly fine. Cataracts are almost never an emergency. You have time to learn, ask questions, and decide on your terms."}
          </p>
        </div>
      </section>

      {/* LENS OPTIONS OVERVIEW */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('understandOptions.lenses.title') || 'Your <strong>Lens Options</strong>' }} />
          <p>
            {t('understandOptions.lenses.intro') || "When we remove your cataract, we replace it with an artificial lens implant. This lens is permanent, and it's the single biggest factor in how you'll see for the rest of your life. There's no \"best\" lens. There's the best lens for you. Here's a simplified overview:"}
          </p>

          <div className="options-card">
            <h3>{t('understandOptions.lenses.standard.title') || 'Standard (Monofocal) Lens'}</h3>
            <p>
              {t('understandOptions.lenses.standard.text') || "Excellent quality optics, typically set for clear distance vision. Most patients will still need reading glasses. This is the lens covered by insurance, and for many people it's a great choice. Don't let anyone make you feel like it's \"settling.\""}
            </p>
          </div>

          <div className="options-card">
            <h3>{t('understandOptions.lenses.edof.title') || 'Extended Depth of Focus (EDOF) Lens'}</h3>
            <p>
              {t('understandOptions.lenses.edof.text') || "Gives you a continuous range of vision from distance through intermediate (computer, dashboard, cooking). You may still need readers for fine print, but your overall range of clear vision is broader. A good option for patients who want functional freedom with realistic expectations."}
            </p>
          </div>

          <div className="options-card">
            <h3>{t('understandOptions.lenses.toric.title') || 'Toric Lens (for Astigmatism)'}</h3>
            <p>
              {t('understandOptions.lenses.toric.text') || "If you have significant astigmatism, a toric lens reduces it during cataract surgery. This can sharpen your uncorrected vision considerably. Available in both standard and premium configurations. Important to know: toric lenses reduce astigmatism, but some residual astigmatism is still possible even after perfect surgery."}
            </p>
          </div>

          <div className="options-card">
            <h3>{t('understandOptions.lenses.multifocal.title') || 'Multifocal Lens'}</h3>
            <p>
              {t('understandOptions.lenses.multifocal.text') || "Designed to provide both distance and near vision without glasses. Works well for many patients, but involves specific tradeoffs around night vision (halos, glare). Not ideal for everyone. This is a lens that requires an honest conversation about your expectations and tolerance for visual compromises."}
            </p>
          </div>

          <p style={{ marginTop: '24px' }}>
            {t('understandOptions.lenses.cta') || "Want the full breakdown? Visit our "}
            <Link href="/lens-implants-explained" style={{ color: '#007d95', fontWeight: 500 }}>
              {t('understandOptions.lenses.ctaLink') || 'Lens Implants Guide'}
            </Link>
            {t('understandOptions.lenses.ctaAfter') || " for a detailed look at each option, including who they work best for and the honest tradeoffs."}
          </p>
        </div>
      </section>

      {/* LIFESTYLE IMAGE */}
      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/stock-woman-outdoor-cafe.jpg"
              alt={lang === 'es' ? 'Mujer disfrutando de un cafe al aire libre con vision clara' : 'Woman enjoying an outdoor cafe with clear vision after cataract surgery'}
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* WHAT MAKES DR. T DIFFERENT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('understandOptions.different.title') || 'What Makes This Practice <strong>Different</strong>' }} />
          <div className="journey-content-grid">
            <div className="journey-text">
              <p>
                {t('understandOptions.different.p1') || "Desert Vision Center is independently owned and physician-led. That matters because it means no corporate metrics influencing what I recommend, no pressure to push premium lenses on patients who don't need them, and no assembly-line scheduling that cuts your consultation short."}
              </p>
              <p>
                {t('understandOptions.different.p2') || "I specialize in complex and revision cataract surgery, which means I see the cases other surgeons refer out. That experience shapes how I approach even routine cases. I plan for the unexpected, because I've seen what happens when surgeons don't."}
              </p>
              <p>
                {t('understandOptions.different.p3') || "But what patients tell me matters most is the conversation. I explain what I see, what I recommend, and why. I answer questions until you run out of them. And I'll tell you honestly if I think you should wait."}
              </p>
              <p style={{ marginTop: '16px' }}>
                <Link href="/choosing-your-surgeon" style={{ color: '#007d95', fontWeight: 500 }}>
                  {t('understandOptions.different.link') || "Read more about choosing a cataract surgeon"}
                </Link>
              </p>
            </div>
            <div className="journey-image-wrap">
              <Image
                src="/media/lifestyle-golf-couple-cart.jpg"
                alt={lang === 'es' ? 'Pareja disfrutando del golf en el Valle de Coachella' : 'Couple enjoying golf in the Coachella Valley'}
                width={600}
                height={400}
                className="journey-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE 2 */}
      <section className="section section-white" style={{paddingTop: 0, paddingBottom: '24px'}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/stock-group-tennis-portrait.jpg"
              alt={lang === 'es' ? 'Grupo de amigos jugando tenis en el Valle de Coachella' : 'Group of friends with tennis gear in the Coachella Valley - the active lifestyle clear vision supports'}
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* QUESTIONS TO BRING */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('understandOptions.questions.title') || 'Questions to Bring to Your <strong>Consultation</strong>' }} />
          <p>
            {t('understandOptions.questions.intro') || "You shouldn't have to guess what to ask. Here's a practical list. Print it, save it on your phone, or just bring it in your head:"}
          </p>
          <div className="checklist-grid">
            <div className="checklist-card">
              <h4>{t('understandOptions.questions.about') || 'About Your Eyes'}</h4>
              <ul>
                <li>{t('understandOptions.questions.q1') || "How advanced are my cataracts?"}</li>
                <li>{t('understandOptions.questions.q2') || "Is there anything else going on with my eyes that could affect surgery?"}</li>
                <li>{t('understandOptions.questions.q3') || "Do I have astigmatism, and does that change my options?"}</li>
              </ul>
            </div>
            <div className="checklist-card">
              <h4>{t('understandOptions.questions.timing') || 'About Timing'}</h4>
              <ul>
                <li>{t('understandOptions.questions.q4') || "Do I need surgery now, or can I wait?"}</li>
                <li>{t('understandOptions.questions.q5') || "What happens if I wait another year?"}</li>
                <li>{t('understandOptions.questions.q6') || "Will waiting make the surgery harder?"}</li>
              </ul>
            </div>
            <div className="checklist-card">
              <h4>{t('understandOptions.questions.lens') || 'About Lens Choice'}</h4>
              <ul>
                <li>{t('understandOptions.questions.q7') || "Which lens do you recommend for my eyes and lifestyle?"}</li>
                <li>{t('understandOptions.questions.q8') || "What are the tradeoffs of each option?"}</li>
                <li>{t('understandOptions.questions.q9') || "What will I still need glasses for?"}</li>
              </ul>
            </div>
            <div className="checklist-card">
              <h4>{t('understandOptions.questions.surgeon') || 'About the Surgeon'}</h4>
              <ul>
                <li>{t('understandOptions.questions.q10') || "How many cataract surgeries do you perform per year?"}</li>
                <li>{t('understandOptions.questions.q11') || "What happens if there's a complication during surgery?"}</li>
                <li>{t('understandOptions.questions.q12') || "Will I see you for my follow-up visits?"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: t('understandOptions.cta.title') || 'Ready for a <strong>conversation?</strong>' }} />
          <p>{t('understandOptions.cta.subtitle') || "You don't need to be ready for surgery. You just need to be curious enough to ask."}</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">{t('common.scheduleConsultation') || 'Schedule a Consultation'}</Link>
            <Link href="/patient-journey" className="btn-secondary">{t('common.seeYourJourney') || 'See Your Patient Journey'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
