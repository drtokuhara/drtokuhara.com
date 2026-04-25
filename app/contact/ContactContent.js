'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';

export default function ContactContent() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 dangerouslySetInnerHTML={{ __html: t('contact.title') || 'Get in <strong>Touch</strong>' }} />
          <p className="page-hero-sub">{t('contact.subtitle') || "You don\u2019t need a referral to come see me. If you have a question about your eyes, just call."}</p>
        </div>
      </section>

      {/* CLINIC EXTERIOR */}
      <section className="section section-white" style={{paddingBottom: 0}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="content-image">
            <Image
              src="/media/IMG-0661.jpg"
              alt={lang === 'es' ? 'Exterior de Desert Vision Center en Rancho Mirage, California' : 'Desert Vision Center exterior in Rancho Mirage, California'}
              width={800}
              height={455}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="section section-white">
        <div className="container contact-page-grid">
          <div className="contact-page-info">
            <h2 dangerouslySetInnerHTML={{ __html: t('contact.clinicTitle') || 'Desert Vision <strong>Center</strong>' }} />

            <div className="contact-block">
              <h3>{t('contact.address') || 'Address'}</h3>
              <p>
                35900 Bob Hope Drive, Suite 175<br />
                Rancho Mirage, CA 92270
              </p>
            </div>

            <div className="contact-block">
              <h3>{t('contact.phone') || 'Phone'}</h3>
              <p>
                <a href="tel:7603404700" className="contact-phone">760.340.4700</a>
              </p>
            </div>

            <div className="contact-block">
              <h3>{t('contact.officeHours') || 'Office Hours'}</h3>
              <p>
                {t('contact.officeHoursText') || 'Monday through Friday'}<br />
                {t('contact.officeHoursTime') || '8:00 AM to 5:00 PM'}
              </p>
              <p className="contact-note">{t('contact.closedWeekend') || 'Closed Saturday and Sunday'}</p>
            </div>

            <div className="contact-block">
              <h3>{t('contact.scheduleOnline') || 'Schedule Online'}</h3>
              <p>
                {t('contact.scheduleOnlineText') || 'You can also request an appointment through the Desert Vision Center website.'}
              </p>
              <a href="https://desertvisioncenter.com" className="btn-primary" style={{marginTop: '12px', display: 'inline-block'}}>{t('contact.visitSite') || 'Visit desertvisioncenter.com'}</a>
            </div>

            <div className="contact-block">
              <h3>{t('contact.whatToBring') || 'What to Bring'}</h3>
              <ul className="contact-list">
                <li>{t('contact.bring1') || 'Photo ID'}</li>
                <li>{t('contact.bring2') || 'Insurance card (if applicable)'}</li>
                <li>{t('contact.bring3') || 'List of current medications'}</li>
                <li>{t('contact.bring4') || 'Any previous eye records or imaging, if you have them'}</li>
                <li>{t('contact.bring5') || "Your questions. Write them down so you don\u2019t forget."}</li>
              </ul>
            </div>
          </div>

          <div className="contact-page-map">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8!2d-116.4134!3d33.7397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s35900+Bob+Hope+Dr+Suite+175%2C+Rancho+Mirage%2C+CA+92270!5e0!3m2!1sen!2sus!4v1713200000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{border: 0, borderRadius: '16px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === 'es' ? 'Ubicación de Desert Vision Center en Google Maps' : 'Desert Vision Center location on Google Maps'}
              />
            </div>
            <div className="map-directions">
              <a
                href="https://www.google.com/maps/dir//35900+Bob+Hope+Dr+Suite+175,+Rancho+Mirage,+CA+92270"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common.getDirections') || 'Get Directions'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE */}
      <section className="section section-warm" style={{paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/lifestyle-sunset-dining.jpg"
              alt={lang === 'es' ? 'Cena al atardecer en el Valle de Coachella' : 'Sunset dining in the Coachella Valley - the lifestyle our patients enjoy'}
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('contact.firstVisitTitle') || 'What to Expect at Your <strong>First Visit</strong>' }} />
          <p className="prose">
            {t('contact.firstVisitP1') || "Your first appointment is a comprehensive eye exam. We\u2019ll check your vision, look at the health of your eyes, and take measurements if surgery might be on the table. Plan for about an hour and a half. We dilate your pupils, which means your vision will be blurry for a few hours after, so bring sunglasses and arrange a ride if you can."}
          </p>
          <p className="prose">
            {t('contact.firstVisitP2') || "I\u2019ll sit down with you and go over everything we find. If you\u2019re a candidate for surgery, we\u2019ll talk about options. If you\u2019re not, I\u2019ll tell you that too. No pressure either way. This visit is about getting you information, not getting you on a surgical calendar."}
          </p>
          <p className="prose">
            {t('contact.firstVisitP3') || "New patients often tell me they expected to feel rushed and didn\u2019t. That\u2019s by design. I don\u2019t book my schedule like a factory floor."}
          </p>
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="cta">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: t('contact.ctaTitle') || 'Ready to <strong>schedule?</strong>' }} />
          <p>{t('contact.ctaText') || "Call the office directly or visit Desert Vision Center online. My team will take care of you from the first phone call."}</p>
          <div className="cta-buttons">
            <a href="tel:7603404700" className="btn-primary">{t('common.callPhone') || 'Call 760.340.4700'}</a>
            <Link href="/cataract-surgery" className="btn-secondary">{t('common.learnAboutCataractSurgery') || 'Learn About Cataract Surgery'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
