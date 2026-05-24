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
import TiltCard from '../components/TiltCard';
import PageFAQ from '../components/PageFAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best cataract surgeon in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. His practice is located at 35900 Bob Hope Drive in Rancho Mirage, along the Eisenhower health corridor. He has performed over 20,000 surgeries and specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Eisenhower Health have an ophthalmologist on campus in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center is physician-owned and independent, not part of a hospital system or corporate chain. Dr. Tokuhara performs every surgery personally with no residents or fellows involved. He trained under Dr. Howard Gimbel at Loma Linda and completed a retina fellowship, giving him expertise across the full eye. Many patients choose DVC after experiencing longer waits or less personal care at larger systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Desert Vision Center accept seasonal or snowbird patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many seasonal residents schedule cataract surgery during their Coachella Valley stay, typically between October and April. The CLEAR in a Day program lets eligible patients have both eyes treated in a single visit, making it ideal for snowbirds who want surgery completed before heading home. Dr. Tokuhara coordinates follow-up scheduling to fit within your desert season.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers the full range of cataract surgery options including advanced cataract surgery, premium lens implants (Extended Depth of Focus, toric for astigmatism reduction, and multifocal), CLEAR in a Day same-day bilateral surgery, and complex case management for patients with prior eye surgery or complications. Every treatment plan is personalized.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara accept new patients without a referral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. No referral is required. Many Rancho Mirage patients self-refer after researching cataract surgeons, getting recommendations from neighbors, or comparing their options along the Bob Hope Drive medical corridor. Call 760.340.4700 or use the online contact form to schedule.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Rancho Mirage', href: '/cataract-surgeon-rancho-mirage' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon in Rancho Mirage | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Dr. Keith Tokuhara is a fellowship-trained cataract surgeon in Rancho Mirage, CA. Physician-owned practice on Bob Hope Drive near Eisenhower. Over 20,000 surgeries, complex case specialist, Top Doctor 2019-2026. Snowbird-friendly scheduling.',
  alternates: {
    canonical: '/cataract-surgeon-rancho-mirage',
  },
  openGraph: {
    title: 'Cataract Surgeon in Rancho Mirage | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara. Physician-owned practice on the Eisenhower corridor. Rancho Mirage residents and seasonal visitors. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-rancho-mirage',
  },
};

export default function CataractSurgeonRanchoMiragePage() {
  const pageFaqs = [
    { q: 'Does Eisenhower Health have an ophthalmologist on campus?', a: 'Not currently. For several years, Desert Vision Center was the only ophthalmology practice on the Eisenhower campus. When Dr. Tokuhara relocated DVC to its current address at 35900 Bob Hope Drive in 2020 to operate as a fully independent, physician-owned practice, Eisenhower did not replace the on-campus ophthalmology presence. There are ophthalmologists affiliated with Eisenhower, but none have offices on the actual campus. Desert Vision Center remains just minutes away on the same Bob Hope Drive corridor.' },
    { q: 'Can snowbirds and seasonal residents get cataract surgery during their desert stay?', a: 'Yes. Many seasonal residents from the Midwest, Canada, and the Pacific Northwest schedule cataract surgery between October and April. CLEAR in a Day lets eligible patients have both eyes treated in a single visit, making it easy to complete surgery and follow-up before heading home in May.' },
    { q: 'Does Dr. Tokuhara handle complex or revision cases?', a: 'Absolutely. Patients with dislocated lenses, failed prior procedures, diabetes, glaucoma, or cases other surgeons have declined regularly come to Desert Vision Center. His retina fellowship gives him expertise across the entire eye, not just the lens.' },
    { q: 'Do I need a referral?', a: 'No referral is required. Many patients find Dr. Tokuhara through their own research or word of mouth from neighbors and friends. Call 760.340.4700 or use the contact form to schedule.' },
    { q: 'What is CLEAR in a Day?', a: 'CLEAR in a Day is same-day bilateral cataract surgery for eligible patients. Both eyes treated in one visit, reducing total appointments and recovery time. Especially valuable for busy schedules and seasonal residents.' },
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

      <VideoBackground src="/media/ambient-desert-resort-sunrise.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Rancho Mirage</strong></h1>
          <p className="page-hero-sub">
            You have ophthalmologists along Bob Hope Drive and corporate groups that advertise heavily. The question is not whether you can find a cataract surgeon in Rancho Mirage. It is whether you can find one who owns their own practice, performs every surgery personally, and has 20,000+ cases of experience.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your City. <strong>Your Surgeon.</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I chose Rancho Mirage deliberately. The Eisenhower health corridor along Bob Hope Drive is one of the most respected medical addresses in the desert, and Desert Vision Center sits right in the middle of it, at 35900 Bob Hope Drive, Suite 175. For Rancho Mirage residents, having a fellowship-trained cataract surgeon five to ten minutes from home is not a convenience. It is an advantage, especially when post-operative visits are part of the equation.
          </p>
          <p className="prose">
            But proximity alone does not make a surgeon the right choice. Rancho Mirage is a city with options. You can visit one of the corporate ophthalmology groups on Highway 111. You can ask your primary care physician for a referral to whoever is in-network. What I offer is something those options often do not: a physician-owned practice where one surgeon handles your care from the first evaluation through the last follow-up, with no handoffs, no rotating providers, and no pressure to choose the most expensive lens on the shelf.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Rancho Mirage <strong>Landscape</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Rancho Mirage has three populations that all need cataract surgery at different points in their lives, and each one has a different relationship with the medical system here.
          </p>
          <p className="prose">
            <strong>Full-time retirees</strong> in communities like Thunderbird Heights, The Springs, and Rancho Mirage Country Club often have existing relationships with Eisenhower providers. When they ask about ophthalmology, they learn there is no on-campus eye doctor. For several years, Desert Vision Center was the only ophthalmology practice on the Eisenhower campus. In 2020, I relocated DVC to its current address to operate as a fully independent, physician-owned practice. Eisenhower never replaced the on-campus presence. When Margaret from the bridge club says "go see Dr. Tokuhara," it is usually because she experienced the difference between a corporate referral and a surgeon who has been part of this medical corridor for years.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-seniors-resort-promenade-night.jpg" alt="Rancho Mirage residents enjoying an evening walk along a resort promenade" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            <strong>Working families and healthcare workers</strong> who live along the Bob Hope Drive corridor or near Rancho Mirage High School need a surgeon who respects their time. They cannot sit in a waiting room for two hours. CLEAR in a Day, which treats both eyes in a single visit, was designed with working patients in mind.
          </p>
          <p className="prose">
            <strong>Seasonal residents</strong> from Canada, the Midwest, and the Pacific Northwest are here from October through April. They want cataract surgery done during their desert stay, ideally with enough follow-up time before they head home in May. I see this pattern every season. A snowbird notices worsening vision during the fall drive down, books a consultation in January, and has both eyes done before the wildflowers bloom. CLEAR in a Day is especially valuable for seasonal residents who need the timeline to work.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Patients Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The Coachella Valley has no shortage of ophthalmologists. Here is what separates my practice:
          </p>
          <StaggerChildren className="content-list-cards" staggerDelay={0.08}>
            <StaggerItem>
              <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
                <div className="card-inner" style={{padding: '1.5rem'}}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>Physician-Owned, No Corporate Pressure</h3>
                  <p className="prose" style={{marginBottom: 0}}>No private equity investors. No hospital system telling me how many patients to see per hour. I do not pay for referrals or participate in financial arrangements that influence who operates on your eyes. Patients come here because of reputation and outcomes.</p>
                </div>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
                <div className="card-inner" style={{padding: '1.5rem'}}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>One Surgeon, Start to Finish</h3>
                  <p className="prose" style={{marginBottom: 0}}>I perform every surgery personally. No residents, no fellows completing their training on your eyes. Your evaluation, your surgery, and your follow-up are all with me. That continuity is not a luxury. It is how medicine should work.</p>
                </div>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
                <div className="card-inner" style={{padding: '1.5rem'}}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>Training That Covers the Whole Eye</h3>
                  <p className="prose" style={{marginBottom: 0}}>I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. After residency, I completed a retina fellowship. That means when I evaluate your cataracts, I am also assessing the retina, the optic nerve, and the full health of the eye. Diabetic changes, macular concerns, glaucoma risk: I catch what cataract-only surgeons may not.</p>
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services for <strong>Rancho Mirage</strong> Patients</h2>
          </ScrollReveal>
          <p className="prose">
            Rancho Mirage patients tend to be well-researched and direct about their expectations. Here is what I offer and why each matters in this community:
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery</strong> with over 20,000 cases of personal experience. I use the latest techniques and handle every procedure myself. Whether your case is straightforward or complicated by other eye conditions, you get the same surgeon, the same precision. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day for seasonal residents and busy schedules.</strong> Same-day bilateral surgery for eligible patients means both eyes done in one visit. Snowbirds get surgery completed within their desert season. Working residents minimize time away from their routines. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants matched to your life, not my inventory.</strong> Extended Depth of Focus (EDOF) lenses for patients who want a broader range of clear vision. Toric lenses that reduce astigmatism. Multifocal options for those who want to minimize glasses. I walk you through every choice honestly and recommend what fits your eyes and your activities, whether that is reading bridge cards, driving on Frank Sinatra Drive at dusk, or watching the sunset from Sunnylands. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery.</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction. Patients whose cases were too difficult for another surgeon regularly find their way here. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Diabetic eye care and glaucoma management</strong> handled in-house with injections and laser treatment. My retina fellowship means I manage these conditions directly rather than referring you out and waiting for coordination between offices. <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/glaucoma">Glaucoma</Link>.</li>
          </ul>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/dvc-building-exterior.jpg" alt="Desert Vision Center building exterior on Bob Hope Drive in Rancho Mirage" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The <strong>Eisenhower Corridor</strong> Question</h2>
          </ScrollReveal>
          <p className="prose">
            Eisenhower Health is a world-class hospital and a pillar of this community. I have tremendous respect for the institution. But many Rancho Mirage residents are surprised to learn there is no ophthalmologist on the Eisenhower campus. For years, Desert Vision Center was the only ophthalmology practice there. When I moved DVC to 35900 Bob Hope Drive in 2020 to be fully independent, that on-campus presence was never replaced. There are affiliated ophthalmologists, but none with offices on the actual campus. Desert Vision Center is still right here on the same corridor, just a few minutes down Bob Hope Drive. And at DVC, you see me. Every visit. Every surgery. One surgeon, start to finish.
          </p>
          <p className="prose">
            The same applies to the corporate ophthalmology groups along Highway 111. Many are owned by private equity firms. The physicians are often excellent, but they work within structures that prioritize efficiency metrics over patient relationships. When the business model depends on seeing 40 patients a day, the conversation about your lens options gets shorter. The time spent understanding your specific visual goals gets compressed. The surgeon you met at consultation may not be the one who operates.
          </p>
          <p className="prose">
            I see a different number of patients. I spend a different amount of time with each one. And I will be the one in the operating room, every time.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/active-senior-woman-tying-shoes.jpeg" alt="Active senior woman getting ready for exercise in her bright, sun-filled home" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Whether you walk the fairways at Thunderbird, have lunch at The River, enjoy the gardens at Sunnylands, or pick up groceries at Ralphs on Monterey, your cataract surgeon should know this community the way you do. Desert Vision Center is not just located in Rancho Mirage. It was built for Rancho Mirage.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your Office Is <strong>Right Here</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. We are along the Eisenhower health corridor with easy access from Highway 111.
          </p>
          <p className="prose">
            For Rancho Mirage residents, the office is typically a 5 to 10 minute drive from most neighborhoods, including the communities around Country Club Drive, Frank Sinatra Drive, Gerald Ford Drive, and the neighborhoods near The River at Rancho Mirage. There is ample parking directly in front of the building. No parking structures, no shuttles, no GPS-required navigation through a hospital campus.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-sunny-pathway-luxury.jpg" alt="Couple walking along a sunny desert pathway in Rancho Mirage" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            This proximity matters. Post-operative care involves several follow-up visits, and for seasonal residents on a schedule, being five minutes from your surgeon's office makes the timeline work. If something comes up between visits, you are not calling a hospital operator. You are calling my office, and someone who knows your name answers.
          </p>
        </div>
      </section>

      <PageFAQ faqs={pageFaqs} heading="Questions Rancho Mirage Patients Ask" />

      <section className="cta">
        <div className="container">
          <h2>Rancho Mirage residents and seasonal visitors: <strong>see the difference for yourself.</strong></h2>
          <p>Physician-owned practice on Bob Hope Drive. Fellowship-trained surgeon. Over 20,000 cases. Snowbird-friendly scheduling. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
