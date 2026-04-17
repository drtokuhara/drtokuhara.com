import Link from 'next/link';

export const metadata = {
  title: 'Contact Desert Vision Center',
  description: 'Schedule a consultation with Dr. Keith Tokuhara at Desert Vision Center. Located at 35900 Bob Hope Dr, Suite 175, Rancho Mirage, CA 92270. Call 760.340.4700.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Dr. Keith Tokuhara',
    description: 'Schedule a consultation at Desert Vision Center in Rancho Mirage. Call 760.340.4700.',
    url: 'https://drtokuhara.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Get in <strong>Touch</strong></h1>
          <p className="page-hero-sub">You don&rsquo;t need a referral to come see me. If you have a question about your eyes, just call.</p>
        </div>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="section section-white">
        <div className="container contact-page-grid">
          <div className="contact-page-info">
            <h2>Desert Vision <strong>Center</strong></h2>

            <div className="contact-block">
              <h3>Address</h3>
              <p>
                35900 Bob Hope Drive, Suite 175<br />
                Rancho Mirage, CA 92270
              </p>
            </div>

            <div className="contact-block">
              <h3>Phone</h3>
              <p>
                <a href="tel:7603404700" className="contact-phone">760.340.4700</a>
              </p>
            </div>

            <div className="contact-block">
              <h3>Office Hours</h3>
              <p>
                Monday through Friday<br />
                8:00 AM to 5:00 PM
              </p>
              <p className="contact-note">Closed Saturday and Sunday</p>
            </div>

            <div className="contact-block">
              <h3>Schedule Online</h3>
              <p>
                You can also request an appointment through the Desert Vision Center website.
              </p>
              <a href="https://desertvisioncenter.com" className="btn-primary" style={{marginTop: '12px', display: 'inline-block'}}>Visit desertvisioncenter.com</a>
            </div>

            <div className="contact-block">
              <h3>What to Bring</h3>
              <ul className="contact-list">
                <li>Photo ID</li>
                <li>Insurance card (if applicable)</li>
                <li>List of current medications</li>
                <li>Any previous eye records or imaging, if you have them</li>
                <li>Your questions. Write them down so you don&rsquo;t forget.</li>
              </ul>
            </div>
          </div>

          <div className="contact-page-map">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8!2d-116.4134!3d33.7397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1a9b23456789%3A0xabcdef1234567890!2s39000+Bob+Hope+Dr+%23101%2C+Rancho+Mirage%2C+CA+92270!5e0!3m2!1sen!2sus!4v1713200000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{border: 0, borderRadius: '16px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Desert Vision Center location on Google Maps"
              />
            </div>
            <div className="map-directions">
              <a
                href="https://www.google.com/maps/dir//39000+Bob+Hope+Dr+%23101,+Rancho+Mirage,+CA+92270"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What to Expect at Your <strong>First Visit</strong></h2>
          <p className="prose">
            Your first appointment is a comprehensive eye exam. We&rsquo;ll check your vision, look at the health of your eyes, and take measurements if surgery might be on the table. Plan for about an hour and a half. We dilate your pupils, which means your vision will be blurry for a few hours after, so bring sunglasses and arrange a ride if you can.
          </p>
          <p className="prose">
            I&rsquo;ll sit down with you and go over everything we find. If you&rsquo;re a candidate for surgery, we&rsquo;ll talk about options. If you&rsquo;re not, I&rsquo;ll tell you that too. No pressure either way. This visit is about getting you information, not getting you on a surgical calendar.
          </p>
          <p className="prose">
            New patients often tell me they expected to feel rushed and didn&rsquo;t. That&rsquo;s by design. I don&rsquo;t book my schedule like a factory floor.
          </p>
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to <strong>schedule?</strong></h2>
          <p>Call the office directly or visit Desert Vision Center online. My team will take care of you from the first phone call.</p>
          <div className="cta-buttons">
            <a href="tel:7603404700" className="btn-primary">Call 760.340.4700</a>
            <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
