import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
  ScaleOnScroll,
  StaggerChildren,
  StaggerItem,
} from '../components/ScrollAnimations';
import PageFAQ from '../components/PageFAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there an ophthalmologist or cataract surgeon in Big Bear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no ophthalmologist or cataract surgeon based in Big Bear Lake, Big Bear City, Lake Arrowhead, or anywhere in the San Bernardino Mountains. Residents requiring cataract surgery must travel off the mountain. Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is reachable via the back way, a flat route through the high desert that avoids the mountain pass descent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Desert Vision Center from Big Bear without driving down the mountain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Take the back way: CA-18 East through Big Bear City past Baldwin Lake to CA-247 (Old Woman Springs Road) down to Lucerne Valley, then CA-62 East through Yucca Valley and Joshua Tree to I-10 West. Exit at Bob Hope Drive in Rancho Mirage. This route is flat with no switchbacks or steep grades. Total drive: approximately 1.5 to 2 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for Big Bear residents to schedule cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many year-round Big Bear residents schedule medical procedures for late spring or early fall, between ski season and summer tourism. Roads are clear, the town is quieter, and recovery happens before the next busy season. However, the back way route is generally accessible year-round since it avoids the mountain passes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Big Bear residents have both eyes done in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. Both eyes treated in a single visit means one trip off the mountain instead of multiple drives. This is especially valuable for Big Bear residents dealing with seasonal road conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose Desert Vision Center over San Bernardino hospitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive time is comparable, but the route and experience are fundamentally different. The back way to Rancho Mirage is flat and avoids icy mountain passes. Desert Vision Center is physician-owned, with Dr. Tokuhara performing every surgery personally. No residents, no fellows, no large hospital system. Many Big Bear patients prefer the personal care and easier route.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Big Bear', href: '/cataract-surgeon-big-bear' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Big Bear Residents | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'No ophthalmologist in Big Bear? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is reachable via the back way, a flat high desert route. No mountain pass. 20,000+ surgeries. CLEAR in a Day. Seasonal scheduling for mountain residents.',
  alternates: {
    canonical: '/cataract-surgeon-big-bear',
  },
  openGraph: {
    title: 'Cataract Surgeon for Big Bear Residents | Desert Vision Center',
    description: 'No cataract surgeon on the mountain. Take the back way to Desert Vision Center in Rancho Mirage. Flat route, no mountain pass, fellowship-trained surgeon. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-big-bear',
  },
};

export default function CataractSurgeonBigBearPage() {
  const pageFaqs = [
    { q: 'What is "the back way" to Desert Vision Center?', a: 'The back way is CA-18 East from Big Bear through Big Bear City, past Baldwin Lake, to CA-247 (Old Woman Springs Road) down to Lucerne Valley. From there, CA-62 East through Yucca Valley and Joshua Tree connects to I-10 West. Exit at Bob Hope Drive in Rancho Mirage. The entire route is flat with a gradual descent. No switchbacks, no steep grades, no icy mountain passes.' },
    { q: 'Is the back way passable in winter?', a: 'CA-18 East from Big Bear City to CA-247 can have winter weather but is generally maintained. The key advantage is that once you descend to Lucerne Valley, the rest of the route is low-elevation desert. It is far more predictable than CA-18 West or CA-330 to San Bernardino in winter conditions.' },
    { q: 'Can I get both eyes done in one trip?', a: 'Yes. CLEAR in a Day is same-day bilateral cataract surgery for eligible patients. One trip off the mountain instead of multiple drives. For Big Bear residents, this is one of the most valuable options available.' },
    { q: 'What about night driving after cataract surgery?', a: 'Night driving typically improves dramatically after cataract surgery. The glare, halos, and reduced contrast that cataracts cause are eliminated with clear new lenses. For Big Bear residents who plow snow, work early mornings, or drive mountain roads at dusk, this is one of the most immediate quality-of-life improvements.' },
    { q: 'Do I need a referral?', a: 'No referral is required. Call 760.340.4700 or use the contact form to schedule.' },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-mountain-pine-forest.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Big Bear</strong> Residents</h1>
          <p className="page-hero-sub">
            There is no ophthalmologist on the mountain. When it is time for cataract surgery, Big Bear residents face a choice: the steep drive down to San Bernardino, or the back way east through the high desert to Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">No Eye Surgeon <strong>on the Mountain</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Big Bear is a community that embraces the tradeoffs of mountain living. The air is clean, the pace is slower, the forest and the lake are your backyard. Whether you spend your winters at Big Bear Mountain Resort and your summers on the water, or you are a year-round resident who walks the Alpine Pedal Path and shops at the Village, you chose this life knowing that some things require a drive.
          </p>
          <p className="prose">
            Specialized medical care is one of those things. There is no ophthalmologist in Big Bear Lake. No cataract surgeon in Big Bear City, Fawnskin, Lake Arrowhead, Running Springs, or anywhere in the San Bernardino Mountains.
          </p>
          <p className="prose">
            When cataracts begin affecting your vision, the default path sends you down the mountain to San Bernardino or Loma Linda. That means navigating CA-18 West or CA-330, the steep, winding roads that every mountain resident knows intimately. In summer, it is manageable. In winter, with ice, snow, and chain requirements, it is the drive most people dread. And you will need to make that drive multiple times: consultation, surgery, follow-up. Both eyes means doing it all twice.
          </p>
          <p className="prose">
            There is another option. One that most Big Bear residents do not know about until a neighbor mentions it.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The <strong>Back Way</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Locals call it the back way. Instead of driving down the mountain to San Bernardino, you drive east through the high desert to Rancho Mirage. The route follows CA-18 East from Big Bear Lake through Big Bear City, past Baldwin Lake, and connects to CA-247 (Old Woman Springs Road) down to Lucerne Valley. From there, CA-62 East takes you through Yucca Valley and Joshua Tree to I-10 West. Exit at Bob Hope Drive, and Desert Vision Center is right there.
          </p>
          <ScaleOnScroll maxScale={1.05}>
            <div style={{background: 'var(--night-horizon)', color: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center', margin: '1.5rem 0'}}>
              <p style={{fontSize: '1.1rem', margin: 0, opacity: 0.8}}>The back way to Desert Vision Center</p>
              <p style={{fontSize: '2rem', fontWeight: 700, margin: '0.5rem 0'}}>No switchbacks. No steep grades. No ice.</p>
              <p style={{fontSize: '1rem', margin: 0, opacity: 0.7}}>Approximately 1.5 to 2 hours, flat the entire way</p>
            </div>
          </ScaleOnScroll>
          <p className="prose">
            The descent from Big Bear to Lucerne Valley on CA-247 is gradual and straightforward. Once you are in the high desert, it is open road the rest of the way. Total drive time: approximately 1.5 to 2 hours. That is comparable to the mountain descent into San Bernardino, especially when you account for the slower speeds and white-knuckle driving on CA-18 or CA-330 in winter.
          </p>
          <p className="prose">
            The difference is what is waiting when you arrive.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A Practice Built for <strong>Mountain Patients</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I am Dr. Keith Tokuhara. I built Desert Vision Center as a physician-owned, independent practice because I believe cataract surgery should be personal, precise, and unhurried. Here is what that means for Big Bear patients specifically:
          </p>
          <ul className="content-list">
            <li><strong>CLEAR in a Day, fewer trips off the mountain:</strong> Eligible patients can have both eyes treated in a single visit. For Big Bear residents, this is a meaningful reduction in travel. One day instead of multiple trips down the mountain or through the high desert. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Seasonal scheduling:</strong> Many Big Bear residents schedule medical appointments for late spring or early fall, when the roads are clear and the town quiets down between seasons. My staff understands mountain logistics and works with out-of-area patients to schedule efficiently.</li>
            <li><strong>I perform every surgery personally:</strong> No residents, no fellows, no handoffs. In a hospital system, your surgery may involve trainees. At Desert Vision Center, it is me from start to finish.</li>
            <li><strong>Your consultation is a real conversation:</strong> I take the time to examine your eyes thoroughly, explain what I find, and discuss options in the context of your actual life. Not a 10-minute slot between 40 other patients.</li>
          </ul>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-evening-walk-dog.jpg" alt="Couple walking their dog in the evening, representing the active outdoor lifestyle of Big Bear residents" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Night Driving, Snow Plowing, and <strong>Mountain Safety</strong></h2>
          </ScrollReveal>
          <p className="prose">
            For Big Bear residents who work in snow removal, construction, or any job that requires safe driving in the dark, cataracts are not just an inconvenience. They are a safety hazard. The glare from oncoming headlights on CA-18, the reduced contrast when navigating mountain roads at dawn, the halos around streetlights in the Village: these are the daily realities that cataracts make dangerous.
          </p>
          <p className="prose">
            A snow plow operator working mountain roads at 4 AM needs sharp, reliable vision. A contractor driving to job sites across the mountain needs to judge distances and read terrain. A year-round resident simply driving to Stater Bros after dark should not be gripping the wheel because every headlight creates a starburst.
          </p>
          <p className="prose">
            Cataract surgery eliminates the glare, halos, and contrast loss. The improvement is often dramatic and immediate. Many patients tell me night driving transformed from something they feared to something they barely think about.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/senior-woman-gazing-desert-sunset.jpeg" alt="Senior woman enjoying a beautiful desert sunset view, the Coachella Valley destination at the end of the drive from Big Bear" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Surgeon <strong>and the Training</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I completed my ophthalmology residency at Loma Linda University under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. His techniques are used in operating rooms worldwide. After residency, I completed a retina fellowship, which means I evaluate the entire eye when I see you, not just the cataract. Diabetic changes, macular health, glaucoma risk: the full picture factors into your surgical plan.
          </p>
          <p className="prose">
            Over 20,000 surgeries. That is not a marketing number. It is the reason I can handle every complication, every anatomical variation, and every complex case that comes through the door. Patients with dislocated lenses, failed prior procedures, and cases other surgeons have declined regularly find their way to my practice. Desert Vision Center is physician-owned and independent. No corporate chain, no private equity investors, no one telling me how many patients to see per hour. Top Doctor from Palm Springs Life every year from 2019 through 2026. Named Best Cataract Surgeon in the Coachella Valley by NBC.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Lens Options for <strong>Mountain Life</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The lens implant you choose during cataract surgery is a decision that affects your vision for the rest of your life. For Big Bear residents, the right lens depends on how you spend your days:
          </p>
          <StaggerChildren staggerDelay={0.1}>
            <StaggerItem>
              <div style={{padding: '1rem 0', borderBottom: '1px solid var(--desert-sand)'}}>
                <p className="prose" style={{marginBottom: 0}}><strong>Extended Depth of Focus (EDOF) lenses</strong> provide a broader range of clear vision from intermediate to distance. Good for trail navigation, reading menus at a restaurant in the Village, and driving. <Link href="/lens-implants-explained">Explore lens options</Link>.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{padding: '1rem 0', borderBottom: '1px solid var(--desert-sand)'}}>
                <p className="prose" style={{marginBottom: 0}}><strong>Toric lenses</strong> reduce astigmatism, sharpening vision for patients who had significant astigmatism before surgery. Clearer distance vision without glasses.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{padding: '1rem 0'}}>
                <p className="prose" style={{marginBottom: 0}}><strong>Standard lenses covered by Medicare</strong> are an excellent option when they are the right fit. I will never push a premium lens when a standard lens serves your eyes and your goals. Honesty about lens selection is not a selling point. It is how medicine should work.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the <strong>Drive</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Big Bear residents are practical. You chose the mountain because the quality of life is worth the tradeoffs. You maintain your own driveway, carry chains in the truck, and plan around weather because that is what mountain living requires.
          </p>
          <p className="prose">
            Cataract surgery is not something you do every year. It is a one-time decision that affects your vision for the rest of your life. Whether you spend your time hiking Castle Rock, photographing the lake, reading on the porch, watching the stars over the San Bernardino National Forest, or plowing roads before dawn, clear vision makes all of it better and safer.
          </p>
          <p className="prose">
            The back way to Desert Vision Center is flat, easy, and about the same time as the mountain descent to San Bernardino. The difference is what is waiting when you arrive: a surgeon who knows your name, takes the time to get your plan right, and performs your surgery with the precision of 20,000+ cases of experience.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>No ophthalmologist on the mountain. A flat, easy drive east through the back way. A physician-owned practice where your surgeon performs every procedure personally. Big Bear residents deserve that option.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Big Bear</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Big Bear Lake, the drive is approximately 1.5 to 2 hours via the back way.
          </p>
          <p className="prose">
            <strong>The back way (recommended):</strong> Take CA-18 East from Big Bear Lake through Big Bear City, past Baldwin Lake. Continue on CA-247 (Old Woman Springs Road) north down to Lucerne Valley. From Lucerne Valley, take CA-247 south to CA-62 East through Yucca Valley and Joshua Tree. Continue on CA-62 to I-10 West. Exit at Bob Hope Drive in Rancho Mirage and head south. The office is on your right, near Eisenhower Health.
          </p>
          <p className="prose">
            <strong>Why the back way:</strong> This avoids the steep, winding descent on CA-18 West or CA-330 to San Bernardino. The grade from Big Bear to Lucerne Valley via CA-247 is gradual. Once in the high desert, the road is flat and open. This is particularly important in winter or after surgery when winding mountain roads are best avoided.
          </p>
          <p className="prose">
            Ample parking is available directly in front of the building.
          </p>
        </div>
      </section>

      <PageFAQ faqs={pageFaqs} heading="Questions Big Bear Patients Ask" />

      <section className="cta">
        <div className="container">
          <h2>Big Bear residents: <strong>take the back way to clear vision.</strong></h2>
          <p>No cataract surgeon on the mountain. The back way is flat, easy, and leads to a fellowship-trained surgeon with 20,000+ cases. CLEAR in a Day means one trip. Seasonal scheduling for mountain life. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
