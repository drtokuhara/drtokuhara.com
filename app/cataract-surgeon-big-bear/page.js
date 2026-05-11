import Link from 'next/link';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
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
      name: 'Is there an ophthalmologist or cataract surgeon in Big Bear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no ophthalmologist or cataract surgeon based in Big Bear Lake or the surrounding mountain communities. Residents requiring cataract surgery must travel off the mountain. Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is reachable via a flat, straightforward route through the high desert, avoiding the mountain pass descent to San Bernardino.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Desert Vision Center from Big Bear without driving down the mountain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Big Bear, take CA-18 East to CA-247 (Old Woman Springs Road) down to Lucerne Valley, then continue to CA-62 East through Yucca Valley and Joshua Tree. From CA-62, take I-10 West to the Bob Hope Drive exit in Rancho Mirage. This route is flat and avoids the steep, winding descent on CA-18/CA-330 to San Bernardino. Total drive is approximately 1.5 to 2 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a Big Bear resident choose Desert Vision Center over San Bernardino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive to Desert Vision Center via the high desert route is comparable in time to the mountain descent into San Bernardino, especially in winter when mountain roads can be icy. Desert Vision Center offers a physician-owned, independent practice with personalized attention. Dr. Tokuhara performs every surgery personally, with no residents or fellows. Many Big Bear patients prefer this to the larger hospital systems in San Bernardino.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Big Bear residents have both eyes done in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. This means both eyes can be treated in a single visit, reducing the number of trips off the mountain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options does Dr. Tokuhara offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers advanced cataract surgery, premium lens implants including EDOF (extended depth of focus), toric lenses for astigmatism reduction, and multifocal options. Dr. Tokuhara also specializes in complex and revision cases. Every treatment plan is individualized to the patient.',
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
  description: 'No ophthalmologist in Big Bear? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage offers advanced cataract surgery just 1.5-2 hours via the flat high desert route. No mountain pass required. 20,000+ surgeries. Flexible scheduling.',
  alternates: {
    canonical: '/cataract-surgeon-big-bear',
  },
  openGraph: {
    title: 'Cataract Surgeon for Big Bear Residents | Desert Vision Center',
    description: 'No cataract surgeon on the mountain. Dr. Tokuhara at Desert Vision Center is reachable from Big Bear via a flat desert route, no mountain pass descent. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-big-bear',
  },
};

export default function CataractSurgeonBigBearPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-golden-hour.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Big Bear</strong> Residents</h1>
          <p className="page-hero-sub">
            There is no ophthalmologist on the mountain. When it is time for cataract surgery, Big Bear residents face a choice: the steep drive down to San Bernardino, or a flat, easy route east to Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">No Eye Surgeon <strong>on the Mountain</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Big Bear is a community that embraces the tradeoffs of mountain living. The air is clean, the pace is slower, the forest is your backyard. But when it comes to specialized medical care, the mountain creates real barriers. There is no ophthalmologist in Big Bear Lake. No cataract surgeon in Lake Arrowhead, Running Springs, or anywhere in the San Bernardino Mountains.
          </p>
          <p className="prose">
            When cataracts begin to affect your vision, the default path sends you down the mountain to San Bernardino or Loma Linda. That means navigating CA-18 or CA-330, the steep, winding roads that every Big Bear resident knows well. In summer, it is manageable. In winter, with ice and snow, it is the drive most people dread. And you will need to make that drive multiple times: once for consultation, once for surgery, again for follow-up. Both eyes means doing it all twice.
          </p>
          <p className="prose">
            There is another option. One that most Big Bear residents do not know about.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The <strong>Flat Route</strong> East</h2>
          </ScrollReveal>
          <p className="prose">
            Instead of driving down the mountain to San Bernardino, you can drive east through the high desert to Rancho Mirage. The route follows CA-18 East to CA-247 (Old Woman Springs Road) down to Lucerne Valley, then continues on CA-62 through Yucca Valley and Joshua Tree to I-10 West. Exit at Bob Hope Drive, and Desert Vision Center is right there.
          </p>
          <p className="prose">
            This route is flat. No switchbacks. No steep grades. No ice-covered mountain passes. The descent from Big Bear to Lucerne Valley on CA-247 is gradual and straightforward. Once you are in the high desert, it is open road the rest of the way.
          </p>
          <p className="prose">
            Total drive time: approximately 1.5 to 2 hours. That is comparable to the mountain descent into San Bernardino, but without the white-knuckle driving. And what is waiting at the other end is fundamentally different from a large hospital system.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A Different Kind of <strong>Practice</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I am Dr. Keith Tokuhara. I built Desert Vision Center as a physician-owned, independent practice because I believe cataract surgery should be personal, unhurried, and precise. Here is what that means for Big Bear patients:
          </p>
          <ul className="content-list">
            <li><strong>I perform every surgery personally:</strong> No residents, no fellows, no handoffs. In a hospital system, your surgery may involve trainees. At Desert Vision Center, it is me from start to finish.</li>
            <li><strong>Your consultation is a real conversation:</strong> I take the time to examine your eyes thoroughly, explain what I find, and discuss options in the context of your actual life and priorities.</li>
            <li><strong>CLEAR in a Day for fewer trips off the mountain:</strong> Eligible patients can have both eyes treated in a single visit. For Big Bear residents, this is a meaningful reduction in travel. One day instead of multiple trips down the mountain.</li>
            <li><strong>Flexible scheduling:</strong> I understand you are coordinating around travel, weather, and mountain logistics. My staff works with out-of-area patients to schedule efficiently.</li>
            <li><strong>Independent practice, no corporate pressure:</strong> No one tells me how many patients to see per hour. I set my own standards, and those standards are high.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Dr. Tokuhara</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Choosing a cataract surgeon is one of the most important medical decisions you will make. Here is my background:
          </p>
          <ul className="content-list">
            <li><strong>Fellowship-trained at Loma Linda University:</strong> I completed my ophthalmology residency under Dr. Howard Gimbel at Loma Linda, one of the most influential cataract surgeons in the world. I then completed a retina fellowship, giving me training across the entire eye.</li>
            <li><strong>Over 20,000 surgeries:</strong> That experience means I have handled every type of complication, anatomical variation, and challenging case cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients who have been told their case is too difficult, who had a prior surgery that did not go well, or who have other eye conditions like diabetes or glaucoma regularly come to my practice.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized by Palm Springs Life every year. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Surgery <strong>Services</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Every treatment plan is individualized. I evaluate your eyes, listen to your priorities, and build a plan from there. The procedure itself typically takes 10 to 15 minutes per eye.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise cataract removal using modern techniques. I perform every procedure personally. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes, one trip off the mountain. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> Extended depth of focus (EDOF) lenses for a broader range of clear vision. Toric lenses to reduce astigmatism. Multifocal options. I walk you through every choice honestly. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other advanced cases. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the <strong>Drive</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Big Bear residents are practical. You chose the mountain because the quality of life is worth the tradeoffs. You maintain your own roads, drive in conditions that would terrify a city driver, and plan around weather because that is what mountain living requires.
          </p>
          <p className="prose">
            Cataract surgery is not something you do every year. It is a one-time decision that affects your vision for the rest of your life. Whether you spend your time on the trails, behind a camera, at the lake, reading on the porch, or watching the stars over the San Bernardino National Forest, clear vision makes all of it better.
          </p>
          <p className="prose">
            The drive to Desert Vision Center through the high desert is flat, easy, and about the same time as the mountain descent to San Bernardino. The difference is what is waiting when you arrive: a surgeon who knows your name, takes the time to get your plan right, and performs your surgery with the precision of 20,000+ cases of experience.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>No ophthalmologist on the mountain. A flat, easy drive east to a physician-owned practice where your surgeon performs every procedure personally. Big Bear residents deserve that option.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Big Bear</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Big Bear Lake, the drive is approximately 1.5 to 2 hours.
          </p>
          <p className="prose">
            <strong>Recommended route (flat, no mountain pass):</strong> Take CA-18 East from Big Bear Lake toward Baldwin Lake and Big Bear City. Continue on CA-247 (Old Woman Springs Road) north down to Lucerne Valley. From Lucerne Valley, take CA-247 south to CA-62 East through Yucca Valley and Joshua Tree. Continue on CA-62 to I-10 West. Exit at Bob Hope Drive in Rancho Mirage and head south. The office is on your right, near Eisenhower Health.
          </p>
          <p className="prose">
            <strong>Why this route:</strong> This avoids the steep, winding descent on CA-18 West or CA-330 to San Bernardino. The grade from Big Bear to Lucerne Valley via CA-247 is gradual. Once in the high desert, the road is flat and open. This is particularly important in winter or during post-surgery recovery when winding mountain roads are best avoided.
          </p>
          <p className="prose">
            Ample parking is available directly in front of the building.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Big Bear residents: <strong>skip the mountain pass.</strong></h2>
          <p>No cataract surgeon on the mountain? Take the flat route east to Desert Vision Center in Rancho Mirage. Fellowship-trained, 20,000+ surgeries, and flexible scheduling for out-of-area patients. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
