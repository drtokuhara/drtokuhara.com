import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do if I get dust or sand in my eye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not rub your eye. Rubbing pushes debris deeper and risks a corneal abrasion. Instead, blink repeatedly to produce natural tears, which may flush the particle out on their own. If that does not work, rinse your eye gently with clean water or sterile saline. If pain or irritation persists, see an eye doctor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is rubbing your eyes dangerous when you have something in them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rubbing drives the particle deeper into the conjunctiva or against the cornea, where it can cause a corneal abrasion - a painful scratch on the surface of the eye. Even a fine dust particle can cause significant damage when rubbed across the cornea repeatedly.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I see a doctor after getting something in my eye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'See an eye doctor if you have persistent pain that does not resolve after rinsing, continued redness or light sensitivity, vision changes, or the persistent feeling that something is stuck even after flushing. These signs suggest a corneal abrasion, embedded particle, or infection that needs professional treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do sunglasses protect against dust in the Coachella Valley?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sunglasses - especially wraparound styles - provide a physical barrier against wind-blown dust, sand, and debris. They also protect against UV radiation, which is significant in the desert. Wearing sunglasses outdoors in the Coachella Valley is one of the most practical things you can do for long-term eye health.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ocular surface disease and how does desert dust contribute to it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ocular surface disease is a broad term for conditions affecting the tear film and outer surface of the eye, including dry eye, blepharitis, and chronic conjunctivitis. Desert environments accelerate these conditions through low humidity, wind-blown particulates, and UV exposure. Patients in the Coachella Valley are at higher risk than the general population.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  articleSchema({
    title: 'What to Do When You Get Dust in Your Eyes: A Desert Eye Care Guide',
    description: 'Living in the Coachella Valley means dealing with dust, wind, and sand year-round. Dr. Tokuhara explains what to do, what not to do, and when to see a doctor.',
    slug: '/dust-in-eyes',
    datePublished: '2026-05-03',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Dust in Eyes: Desert Eye Care', href: '/dust-in-eyes' },
  ]),
];

export const metadata = {
  title: 'What to Do When You Get Dust in Your Eyes: A Desert Eye Care Guide',
  description: 'Dust, sand, and wind are facts of life in the Coachella Valley. Dr. Tokuhara explains the right steps to take when debris gets in your eye - and when to call the doctor.',
  alternates: {
    canonical: '/dust-in-eyes',
  },
  openGraph: {
    title: 'Dust in Your Eyes: Desert Eye Care Guide | Dr. Keith Tokuhara',
    description: 'Desert residents face unique eye risks from dust and wind. Learn what to do, what to avoid, and when to see an eye doctor in the Coachella Valley.',
    url: 'https://drtokuhara.com/dust-in-eyes',
  },
};

export default function DustInEyesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "VideoObject", "name": "What to do when you get dust in your eyes?", "description": "The Coachella Valley is one of the driest, windiest places in the world.  What should you do when the wind blows sand an", "thumbnailUrl": "https://i.ytimg.com/vi/NJ1dx9nKHCA/maxresdefault.jpg", "uploadDate": "2024-05-17T00:00:00Z", "duration": "PT1M44S", "contentUrl": "https://www.youtube.com/watch?v=NJ1dx9nKHCA", "embedUrl": "https://www.youtube.com/embed/NJ1dx9nKHCA"}) }} />
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-golden-hour-v2.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <KineticText
            text="Dust in Your Eyes"
            Tag="h1"
            mode="word"
            staggerDelay={0.06}
          />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">
              A practical guide for Coachella Valley residents: what to do, what to avoid, and when desert dust becomes a medical problem.
            </p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 3, 2026" />

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Desert Living and <strong>Your Eyes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            If you live in the Coachella Valley, you know what it feels like to step outside and immediately have something blow into your eye. Wind-blown dust, fine sand, pollen, and particulates are part of everyday life here in ways that people in other climates simply do not experience. I see the consequences of that in my practice regularly.
          </p>
          <p className="prose">
            Most of the time, it is manageable. Blink a few times, rinse your eye, and move on. But desert residents - more than most populations - are at elevated risk for chronic eye surface conditions caused by repeated exposure to dust, dry air, UV radiation, and wind. Knowing the right response in the moment, and knowing when something needs medical attention, is genuinely useful here.
          </p>
          <p className="prose">
            As featured in a KESQ news segment, I want to share the practical guidance I give my patients every day.
          </p>

          <div className="video-section" style={{ marginTop: '32px' }}>
            <div className="video-grid video-grid-1">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/NJ1dx9nKHCA"
                    title="Dr. Tokuhara on KESQ: What to Do When You Get Dust in Your Eyes"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Dr. Tokuhara on KESQ News: Desert Eye Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The First Rule: <strong>Don&rsquo;t Rub</strong></h2>
          <p className="prose">
            When something gets in your eye, the instinctive response is to rub it. That instinct is almost always wrong.
          </p>
          <p className="prose">
            Rubbing pushes the debris deeper into the conjunctival folds, where it is harder to flush out and more likely to cause irritation. Worse, it can drag a particle across the cornea, the clear surface at the front of your eye. Even a tiny grain of sand, when rubbed across the cornea, can cause a corneal abrasion - a painful scratch that can take days to heal and is vulnerable to infection.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>The rule is simple: no rubbing. Even if it itches. Even if it burns. Rub, and you risk turning a minor irritation into a genuine injury.</strong></p>
            </div>
          </BlurReveal>

          <h2 className="section-title">What to <strong>Do Instead</strong></h2>
          <ul className="content-list">
            <li>
              <strong>Blink deliberately:</strong> Your tears are your eye&rsquo;s built-in flushing system. Blinking repeatedly stimulates tear production and may move or dislodge the particle naturally. Start here before doing anything else.
            </li>
            <li>
              <strong>Rinse with clean water:</strong> If blinking does not resolve it, rinse your eye gently with clean water. Tilt your head, hold your eye open, and let water flow across it. A clean cup of water works fine. Sterile saline is ideal but not required in a pinch.
            </li>
            <li>
              <strong>Pull the upper lid over the lower:</strong> An old but effective technique - gently pulling the upper eyelid out and over the lower lid can use the lower lashes to sweep debris from the underside of the upper lid. Only try this if you feel comfortable doing it without rubbing.
            </li>
            <li>
              <strong>Avoid cotton swabs or fingers directly on the eye:</strong> Do not attempt to remove a particle with your finger or a cotton swab. These introduce new irritants and risk additional corneal injury.
            </li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Common Desert Eye <strong>Problems</strong></h2>
          <p className="prose">
            Beyond the immediate problem of a particle in your eye, desert residents face a set of chronic eye conditions that are more common here than in other environments:
          </p>
          <ul className="content-list">
            <li>
              <strong>Conjunctivitis (pink eye):</strong> Inflammation of the conjunctiva, the clear membrane covering the white of the eye. Dust, allergens, and wind can all trigger allergic or irritant conjunctivitis. You notice redness, watering, and a gritty or burning feeling.
            </li>
            <li>
              <strong>Blepharitis:</strong> Inflammation of the eyelid margins. Dust and dry desert air contribute to the buildup of oils and debris at the base of the lashes. This causes chronic irritation, crusty lids in the morning, and a recurring scratchy feeling.
            </li>
            <li>
              <strong>Dry eye and ocular surface disease:</strong> Low desert humidity accelerates tear evaporation. Wind makes it worse. Over time, repeated insults from dust, wind, and UV create chronic ocular surface disease - a condition that ranges from mild irritation to significant vision disruption. This is very common in the Coachella Valley.
            </li>
            <li>
              <strong>Corneal abrasions:</strong> Scratches on the corneal surface from debris. Most heal on their own within 24 to 48 hours, but they hurt, and they can become infected if not treated appropriately.
            </li>
          </ul>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-seniors-bocce-desert.jpg"
              alt="Seniors enjoying outdoor activities in the Coachella Valley desert sunshine"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Sunglasses: Your Best <strong>Prevention Tool</strong></h2>
          <p className="prose">
            A good pair of sunglasses is the single most effective thing a desert resident can do to protect their eyes year-round. Here is what that means in practice:
          </p>
          <p className="prose">
            Sunglasses act as a physical barrier against wind-blown dust, sand, and particles. Wraparound styles offer better coverage than standard frames. But the protection does not stop there - sunglasses also block ultraviolet radiation, which is intense in the desert and contributes to cataracts, macular degeneration, and pterygium (a growth on the white of the eye caused by UV and wind exposure).
          </p>
          <p className="prose">
            Look for lenses that block 100 percent of both UVA and UVB radiation. Polarized lenses reduce glare on sunny desert days, which is especially useful for driving. A hat with a brim adds further protection by limiting overhead UV exposure.
          </p>
          <p className="prose">
            I tell my patients: sunglasses in the desert are not optional. They are medical equipment.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When to See a <strong>Doctor</strong></h2>
          <p className="prose">
            Most cases of dust or debris in the eye resolve with the steps above. But some situations need professional evaluation. Come in or call us if you have:
          </p>
          <ul className="content-list">
            <li><strong>Persistent pain:</strong> If your eye still hurts after flushing and resting for a few hours, something may be embedded or a corneal abrasion may need treatment.</li>
            <li><strong>The feeling of something still stuck:</strong> A particle caught under the eyelid can cause ongoing irritation that flushing alone does not resolve. This needs to be removed under examination.</li>
            <li><strong>Redness that worsens or does not improve:</strong> Persistent or increasing redness suggests inflammation or infection, not just irritation.</li>
            <li><strong>Light sensitivity:</strong> Photophobia after an eye injury is a sign that the cornea may be involved and should be examined.</li>
            <li><strong>Vision changes:</strong> Blurring, haziness, or any change in vision after a foreign body event is a reason to call immediately.</li>
            <li><strong>Discharge:</strong> Yellow or green discharge suggests infection, which requires prompt treatment.</li>
          </ul>

          <BlurReveal>
            <div className="clinic-thought">
              <h3>The takeaway for desert residents</h3>
              <p>
                <em>Most eye irritations from dust and wind are minor and self-resolving. But the desert environment means your eyes are under more daily stress than they would be almost anywhere else in the country. Protecting them with sunglasses, not rubbing when debris gets in, and knowing when to call are the three things that will make the biggest difference over time.</em>
              </p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Ocular Surface Disease in <strong>Desert Communities</strong></h2>
          <p className="prose">
            Ocular surface disease is a broad category that includes dry eye syndrome, blepharitis, meibomian gland dysfunction, and chronic conjunctival irritation. It is common everywhere, but it is more common in desert environments.
          </p>
          <p className="prose">
            The reasons are straightforward. Low humidity accelerates tear evaporation, reducing the protective tear film on the cornea. Wind increases exposure to particulates and accelerates that same evaporation. UV exposure damages the surface cells of the eye and the conjunctiva over time. Add high temperatures and limited shade, and you have an environment that is genuinely hard on the eye surface.
          </p>
          <p className="prose">
            Many patients who come to me with cataracts also have significant ocular surface disease. This matters because cataract surgery outcomes depend in part on a healthy eye surface. I evaluate and treat surface disease as part of surgical preparation whenever needed. This is one of the ways that thorough preoperative care makes cataract surgery outcomes better.
          </p>
          <p className="prose">
            If you have been experiencing chronic dry, itchy, red, or gritty eyes - and you live in the desert - it is worth getting evaluated. These conditions are treatable, and treating them improves your comfort and your long-term eye health.
          </p>

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Related <strong>Reading</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/faq" className="related-card">
              <h3>Frequently Asked Questions</h3>
              <p>Common questions about eye health, cataract surgery, and care at Desert Vision Center - answered directly.</p>
            </Link>
            <Link href="/contact" className="related-card">
              <h3>Schedule an Appointment</h3>
              <p>If you have persistent eye irritation or questions about your vision, we are here. No referral needed.</p>
            </Link>
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>Desert UV exposure is a risk factor for cataracts. Learn what cataracts are and what to expect.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Dealing with chronic eye irritation from <strong>desert conditions?</strong></h2>
          <p>Desert Vision Center treats the full range of eye surface conditions common in the Coachella Valley. Let&rsquo;s take a look.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule an Appointment</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
