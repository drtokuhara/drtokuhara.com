export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-brand">Dr. Keith Tokuhara</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Cataract Care</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Your vision deserves a surgeon who <strong>explains before operating.</strong></h1>
            <p>
              I'm Dr. Keith Tokuhara — a cataract surgeon in the Coachella Valley who believes patients should understand their surgery, not just agree to it.
            </p>
            <div className="hero-buttons">
              <a href="#education" className="btn-primary">Learn About Cataracts</a>
              <a href="#contact" className="btn-secondary">Schedule a Consultation</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/dr-t-hero.jpg" alt="Dr. Keith Tokuhara" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-white">
        <div className="container">
          <div className="section-title">What I <strong>Do</strong></div>
          <div className="section-subtitle">
            Advanced cataract surgery with a commitment to ethics, precision, and personalized care.
          </div>
          <div className="card-grid">
            <div className="card">
              <h3>Advanced Cataract Surgery</h3>
              <p>Fellowship-trained surgical precision using the latest technology, including laser-assisted techniques and premium lens implants tailored to your lifestyle.</p>
            </div>
            <div className="card">
              <h3>Complex & Corrective Cases</h3>
              <p>Patients from across the country seek out my expertise for complicated cases, secondary lens implantations, and corrective procedures after unsatisfactory outcomes elsewhere.</p>
            </div>
            <div className="card">
              <h3>CLEAR in a Day™</h3>
              <p>Same-day bilateral cataract surgery — both eyes, one expert, one day. Designed for patients who value convenience without compromise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-warm">
        <div className="container about-grid">
          <div className="about-image">
            <img src="/dr-t-about.jpg" alt="Dr. Tokuhara in clinic" />
          </div>
          <div className="about-text">
            <h2>The surgeon <strong>behind the scrub cap.</strong></h2>
            <p>
              I didn't become a cataract surgeon because it was easy. I became one because restoring someone's vision is one of the most meaningful things a person can do with their hands and their judgment. Every patient I see reminds me of that.
            </p>
            <p>
              At Desert Vision Center, I offer concierge-level care, meticulous surgical skill, and a fierce commitment to patient-first medicine — free from corporate or private equity influence.
            </p>
            <p>
              Consecutively recognized as a Top Doctor by Palm Springs Life from 2019 through 2025. Fellowship-trained at Loma Linda University under world-renowned cataract surgeon Dr. Howard Gimbel.
            </p>
            <a href="https://desertvisioncenter.com/ophthalmologist-dr-tokuhara/" className="btn-primary" style={{marginTop: '16px'}}>Full Bio</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="section section-white">
        <div className="container trust-bar">
          <div className="trust-item">
            <div className="trust-number">30+</div>
            <div className="trust-label">Years Serving the Coachella Valley</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">First</div>
            <div className="trust-label">Surgeon in the Valley to Perform PanOptix Pro</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">100%</div>
            <div className="trust-label">Kickback-Free Guarantee</div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-warm">
        <div className="container">
          <div className="section-title">Cataract <strong>Education</strong></div>
          <div className="section-subtitle">
            Everything you wanted to ask about cataracts — answered simply. No jargon. No scare tactics.
          </div>
          <div className="card-grid">
            <div className="card">
              <h3>What Is a Cataract?</h3>
              <p>A cataract is a clouding of the natural lens inside your eye. It's the most common cause of reversible vision loss — and it's treatable.</p>
            </div>
            <div className="card">
              <h3>When Is Surgery Right?</h3>
              <p>Not based on a number — based on how cataracts affect your daily life. There's no rush in most cases. The decision should be shared between you and your surgeon.</p>
            </div>
            <div className="card">
              <h3>Understanding Your Lens Options</h3>
              <p>There's no single "best" lens. The right choice depends on your eyes, your lifestyle, and what matters most in your daily vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="section section-white">
        <div className="container" style={{maxWidth: '700px', textAlign: 'center'}}>
          <div className="section-title">My <strong>Approach</strong></div>
          <p style={{color: 'var(--text-light)', fontSize: '17px', lineHeight: '1.8', marginTop: '16px'}}>
            I believe patients deserve to understand their surgery before they agree to it. Not a sales pitch — a real conversation. If you feel rushed into a decision about eye surgery, that's not a good sign. A good surgeon wants you to feel ready, not pressured.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Ready to <strong>talk?</strong></h2>
          <p>You don't need to be ready for surgery to reach out. If you have a question, I'd rather you ask it now than carry it around.</p>
          <a href="tel:7603404700" className="btn-primary">Call 760.340.4700</a>
          <a href="https://desertvisioncenter.com" className="btn-secondary">Visit Desert Vision Center</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">Dr. Keith Tokuhara, M.D.</div>
              <p style={{fontSize: '13px'}}>Cataract Surgeon · Educator · Rancho Mirage, CA</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <a href="#about">About</a>
                <a href="#services">Cataract Care</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-col">
                <h4>Practice</h4>
                <a href="https://desertvisioncenter.com">Desert Vision Center</a>
                <a href="tel:7603404700">760.340.4700</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Dr. Keith Tokuhara. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
