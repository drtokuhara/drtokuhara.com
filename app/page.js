import Link from 'next/link';

export default function Home() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Keith Tokuhara",
    "description": "Board-certified cataract surgeon specializing in advanced cataract surgery, complex cases, and premium lens implants in Rancho Mirage, California.",
    "url": "https://drtokuhara.com",
    "image": "https://drtokuhara.com/dr-t-hero.jpg",
    "telephone": "+17603404700",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "39000 Bob Hope Drive, Suite 101",
      "addressLocality": "Rancho Mirage",
      "addressRegion": "CA",
      "postalCode": "92270",
      "addressCountry": "US"
    },
    "medicalSpecialty": "Ophthalmology",
    "hospitalAffiliation": {
      "@type": "Hospital",
      "name": "Desert Vision Center"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Loma Linda University"
      }
    ],
    "award": "Palm Springs Life Top Doctor (2019-2026)",
    "sameAs": [
      "https://x.com/DoctorTokuhara",
      "https://youtube.com/@desertvisioncenter",
      "https://desertvisioncenter.com/ophthalmologist-dr-tokuhara/"
    ]
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Desert Vision Center",
    "description": "Advanced cataract surgery and comprehensive eye care in Rancho Mirage, California. Led by fellowship-trained cataract surgeon Dr. Keith Tokuhara.",
    "url": "https://desertvisioncenter.com",
    "telephone": "+17603404700",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "39000 Bob Hope Drive, Suite 101",
      "addressLocality": "Rancho Mirage",
      "addressRegion": "CA",
      "postalCode": "92270",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7397",
      "longitude": "-116.4112"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a cataract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A cataract is a clouding of the natural lens inside your eye. It is the most common cause of reversible vision loss and is treatable with surgery."
        }
      },
      {
        "@type": "Question",
        "name": "When is cataract surgery the right time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timing depends on how cataracts affect your daily life, not a specific number. If driving, reading, or daily activities are becoming difficult due to vision changes, it may be time to discuss surgery with your ophthalmologist."
        }
      },
      {
        "@type": "Question",
        "name": "What are my lens implant options for cataract surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no single best lens. Options include monofocal lenses, toric lenses for astigmatism, and multifocal or extended depth of focus lenses like PanOptix and Vivity. The right choice depends on your eyes, lifestyle, and vision goals."
        }
      }
    ]
  };

  return (
    <>
      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BANNER */}
      <section className="banner">
        <img src="/banner.jpg" alt="Desert Vision Center surgical suite in Rancho Mirage, California" className="banner-img" />
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Your vision deserves a surgeon who <strong>explains before operating.</strong></h1>
            <p>
              I&rsquo;m Dr. Keith Tokuhara, a cataract surgeon in the Coachella Valley. I think you should understand your surgery before you agree to it. That&rsquo;s not a radical idea. That&rsquo;s how medicine should work.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
              <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataracts</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/dr-t-hero.jpg" alt="Dr. Keith Tokuhara, cataract surgeon at Desert Vision Center" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-white">
        <div className="container">
          <h2 className="section-title">What I <strong>Do</strong></h2>
          <div className="section-subtitle">
            Advanced cataract surgery built on ethics, precision, and personalized care.
          </div>
          <div className="card-grid">
            <Link href="/cataract-surgery" className="card card-link">
              <h3>Advanced Cataract Surgery</h3>
              <p>Cataract surgery with fellowship trained precision. I use laser assisted techniques and choose your lens implant based on your eyes and your lifestyle, not a sales quota. Every surgery is planned specifically for you.</p>
              <span className="card-arrow">Learn more &rarr;</span>
            </Link>
            <Link href="/cataract-surgery#complex-cases" className="card card-link">
              <h3>Complex &amp; Corrective Cases</h3>
              <p>Patients travel from across the country for complicated cases, secondary lens implantations, and corrective procedures after disappointing results elsewhere. If another surgeon said your case is too difficult, I want to hear about it.</p>
              <span className="card-arrow">Learn more &rarr;</span>
            </Link>
            <Link href="/cataract-surgery#clear-in-a-day" className="card card-link">
              <h3>CLEAR in a Day&trade;</h3>
              <p>Same day bilateral cataract surgery. Both eyes, one surgeon, one day. I developed this protocol for patients who want convenience without cutting corners on safety. Not every patient is a candidate, and I&rsquo;ll tell you honestly if you&rsquo;re not.</p>
              <span className="card-arrow">Learn more &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-warm">
        <div className="container about-grid">
          <div className="about-image">
            <img src="/dr-t-about.jpg" alt="Dr. Keith Tokuhara in his Rancho Mirage clinic" />
          </div>
          <div className="about-text">
            <h2>The surgeon <strong>behind the scrub cap.</strong></h2>
            <p>
              I didn&rsquo;t become a cataract surgeon because it was easy. I chose it because giving someone their vision back is one of the most meaningful things you can do as a physician. Every patient reminds me of that.
            </p>
            <p>
              At Desert Vision Center, I provide concierge level care with meticulous surgical skill and a real commitment to patient first medicine. No corporate ownership. No private equity. No one telling me which lens to recommend or how many surgeries to book in a day. Just you and your surgeon, making decisions together.
            </p>
            <p>
              I completed my fellowship at Loma Linda University under Dr. Howard Gimbel, one of the most respected cataract surgeons in the world. Palm Springs Life has named me a Top Doctor every year since 2019.
            </p>
            <Link href="/about" className="btn-primary" style={{marginTop: '16px', display: 'inline-block'}}>Read My Full Story</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="section section-white">
        <div className="container trust-bar">
          <div className="trust-item">
            <div className="trust-number">13</div>
            <div className="trust-label">Years Serving the Coachella Valley</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">First</div>
            <div className="trust-label">In the Valley to Offer the Latest Trifocal Lens Technology</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">100%</div>
            <div className="trust-label">Kickback Free Guarantee</div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-warm">
        <div className="container">
          <h2 className="section-title">Cataract <strong>Education</strong></h2>
          <div className="section-subtitle">
            Everything you wanted to ask about cataracts, answered simply. No jargon. No scare tactics.
          </div>
          <div className="card-grid">
            <Link href="/education" className="card card-link">
              <h3>What Is a Cataract?</h3>
              <p>A cataract is a clouding of the natural lens inside your eye. Almost everyone develops cataracts eventually. It&rsquo;s the most common cause of vision loss that we can actually fix. If your vision feels hazy, washed out, or you&rsquo;re struggling with glare at night, cataracts might be the reason.</p>
              <span className="card-arrow">Watch videos &rarr;</span>
            </Link>
            <Link href="/education" className="card card-link">
              <h3>When Is Surgery the Right Call?</h3>
              <p>There&rsquo;s no magic number that tells you it&rsquo;s time. It depends on how your cataracts affect your daily life. Can you drive safely? Read comfortably? See the things that matter to you? If cataracts are getting in the way, it&rsquo;s worth a conversation. But there&rsquo;s no rush, and no one should be pressuring you.</p>
              <span className="card-arrow">Watch videos &rarr;</span>
            </Link>
            <Link href="/education" className="card card-link">
              <h3>Understanding Your Lens Options</h3>
              <p>There&rsquo;s no single &ldquo;best&rdquo; lens implant. The right one depends on your eyes, your health, your daily activities, and what you actually want from your vision after surgery. A good surgeon will walk you through the options honestly, not push the most expensive one.</p>
              <span className="card-arrow">Watch videos &rarr;</span>
            </Link>
          </div>

          {/* YOUTUBE VIDEO EMBEDS */}
          <div className="video-section">
            <h3 className="video-section-title">Watch &amp; Learn</h3>
            <div className="video-grid">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/iYKugpBcnQY"
                    title="What Are Cataracts? Dr. Tokuhara Explains"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">What Are Cataracts? Dr. Tokuhara Explains</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/vYTl3Eatzhw"
                    title="How to Choose Your Cataract Surgeon"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">How to Choose Your Cataract Surgeon</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/pn3W39CfemU"
                    title="Carol's Cataract Surgery Journey - 20/20 Vision"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Carol&rsquo;s Cataract Surgery Journey</p>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '32px'}}>
              <Link href="/education" className="btn-primary">Browse All Videos</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="section section-white">
        <div className="container" style={{maxWidth: '700px', textAlign: 'center'}}>
          <h2 className="section-title">My <strong>Approach</strong></h2>
          <p style={{color: 'var(--text-light)', fontSize: '17px', lineHeight: '1.8', marginTop: '16px'}}>
            I think you should understand your surgery before you agree to it. Not a sales pitch. A real conversation. If you&rsquo;re feeling rushed into a decision about your eyes, that&rsquo;s a red flag. A good surgeon wants you to feel ready, not pressured. That&rsquo;s how I practice.
          </p>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Ready to <strong>talk?</strong></h2>
          <p>You don&rsquo;t have to be ready for surgery to reach out. If something about your vision is bothering you, or you just have a question, I&rsquo;d rather you ask it now than worry about it.</p>

          <div className="contact-info">
            <div className="contact-details">
              <strong>Desert Vision Center</strong><br />
              39000 Bob Hope Drive, Suite 101<br />
              Rancho Mirage, CA 92270
            </div>
            <div className="contact-details">
              <strong>Phone:</strong> <a href="tel:7603404700">760.340.4700</a><br />
              <strong>Hours:</strong> Monday through Friday, 8:00 AM to 5:00 PM
            </div>
          </div>

          <div className="cta-buttons">
            <a href="tel:7603404700" className="btn-primary">Call 760.340.4700</a>
            <Link href="/contact" className="btn-secondary">Get Directions &amp; Details</Link>
          </div>
        </div>
      </section>
    </>
  );
}
