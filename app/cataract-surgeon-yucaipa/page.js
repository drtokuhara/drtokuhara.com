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
      name: 'Who is the best cataract surgeon near Yucaipa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage completed his residency at Loma Linda University, just down the hill from Yucaipa. He has performed over 20,000 surgeries and been recognized as Top Doctor every year from 2019 through 2026. He specializes in advanced and complex cataract cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Yucaipa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately one hour east of Yucaipa via Interstate 10 through the San Gorgonio Pass. The same I-10 you take when heading to the desert for a weekend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I keep my CDL or commercial license after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cataract surgery typically improves visual acuity significantly. Many patients who were struggling to meet CDL vision requirements return to full driving certification after surgery. Dr. Tokuhara understands the visual standards required for commercial driving and tailors the surgical plan to meet those needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a Yucaipa resident drive past Loma Linda for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara trained at Loma Linda and offers the same caliber of expertise in a physician-owned practice with personalized care, shorter waits, and the same surgeon at every visit. His CLEAR in a Day program lets eligible patients have both eyes done in one trip. Many Yucaipa patients prefer this to the large hospital system experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Yucaipa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Yucaipa', href: '/cataract-surgeon-yucaipa' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Yucaipa Residents | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Yucaipa residents: Dr. Keith Tokuhara trained at nearby Loma Linda University and offers personalized cataract care at Desert Vision Center in Rancho Mirage. CDL-friendly vision restoration, working families, active retirees. One hour east through the pass.',
  alternates: {
    canonical: '/cataract-surgeon-yucaipa',
  },
  openGraph: {
    title: 'Cataract Surgeon for Yucaipa Residents | Desert Vision Center',
    description: 'Loma Linda-trained, independent practice. Dr. Tokuhara serves Yucaipa residents from Desert Vision Center in Rancho Mirage. Personalized care for working families and active retirees. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-yucaipa',
  },
};

export default function CataractSurgeonYucaipaPage() {
  const pageFaqs = [
    { q: 'Will cataract surgery help me pass my CDL or DOT vision exam?', a: 'In most cases, yes. Cataract surgery typically restores visual acuity to levels well above the CDL requirement. Dr. Tokuhara understands the specific vision standards for commercial drivers and plans accordingly. Many patients return to full certification after recovery.' },
    { q: 'How is Dr. Tokuhara different from the Loma Linda eye doctors?', a: 'Dr. Tokuhara trained at Loma Linda under Dr. Howard Gimbel. He offers the same world-class surgical foundation in a physician-owned practice where he performs every surgery personally. No residents, no fellows, no rotating providers. Shorter waits, easier parking, and one surgeon who knows your eyes from start to finish.' },
    { q: 'Can both eyes be done in one trip from Yucaipa?', a: 'Yes. CLEAR in a Day is same-day bilateral cataract surgery for eligible patients. One trip through the pass instead of multiple drives. Especially valuable for working patients who need to minimize time off.' },
    { q: 'What about patients with diabetes or glaucoma?', a: 'Dr. Tokuhara completed a retina fellowship after his cataract training. He evaluates and manages diabetic eye changes, glaucoma, and other conditions in-house. No referral chains between specialists.' },
    { q: 'Do I need a referral?', a: 'No. Call 760.340.4700 or use the contact form to schedule directly.' },
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

      <VideoBackground src="/media/ambient-desert-golden-hour.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Yucaipa</strong> Residents</h1>
          <p className="page-hero-sub">
            Yucaipa sits at the gateway to the San Gorgonio Pass. The drive east through the pass to Rancho Mirage follows the same I-10 you take when you head to the desert for a weekend. At the other end: a surgeon who trained at Loma Linda and built something better.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Yucaipa Is a <strong>Working Town</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Yucaipa has a character that is distinctly its own. Not quite the Inland Empire flatlands, not quite the mountains. A hillside community at 2,600 feet with apple orchards on Oak Glen Road, Wildwood Canyon trails in the backyard, Crafton Hills College anchoring the south side, and a family-oriented culture that values self-reliance and honest work.
          </p>
          <p className="prose">
            The retiree population is growing, and many of those retirees are active people who chose Yucaipa for its space, its affordability, and its proximity to both the mountains and the desert. But Yucaipa is also a community of working families. Bus drivers, truck drivers, equipment operators, warehouse workers commuting to the logistics corridor along the I-10. Teachers at Yucaipa High and the elementary schools. Healthcare workers making the drive down to Loma Linda every morning.
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-family-golden-hour-walk.jpg" alt="Family walking together at golden hour, representing Yucaipa's family-oriented community" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            Both groups need clear vision. But for different reasons.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">When Your Job <strong>Depends on Your Eyes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            If your livelihood depends on your vision, cataract surgery is not optional. It is how you keep your certification and your paycheck. Yucaipa has a significant number of residents who hold commercial driver's licenses, operate heavy equipment, or work in roles where visual acuity is not just important but legally required.
          </p>
          <TiltCard className="tilt-card-wrapper" maxTilt={4} glare={true} glareOpacity={0.1}>
            <div className="card-inner" style={{padding: '1.5rem'}}>
              <h3 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>CDL, DOT, and Working Vision</h3>
              <p className="prose" style={{marginBottom: 0}}>CDL drivers need to meet specific visual acuity standards. Cataracts that develop gradually can erode your vision below the threshold before you realize it. Cataract surgery typically restores acuity well above the CDL requirement. I understand these standards and plan your surgery around them. If you need to pass a DOT physical, that informs the lens choice and the timeline.</p>
            </div>
          </TiltCard>
          <p className="prose" style={{marginTop: '1.5rem'}}>
            The same applies to school bus drivers running routes through Beaumont and the pass corridor, construction workers, and anyone whose employer requires periodic vision screens. Cataracts do not care about your schedule or your certification deadline. But your surgeon should.
          </p>
          <p className="prose">
            CLEAR in a Day, which treats both eyes in a single visit, means working patients make one trip through the pass instead of multiple drives spread across weeks. For someone who cannot afford to take repeated days off, that changes whether surgery is practical at all.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">For Yucaipa's <strong>Active Retirees</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The other half of Yucaipa's cataract surgery population is the retiree community, and these are not people who sit still. They hike Wildwood Canyon with the dog. They pick apples at Oak Glen in the fall with the grandkids. They garden, read, drive to Redlands for dinner, and spend weekends exploring Cherry Valley and the foothills.
          </p>
          <p className="prose">
            When cataracts start interfering with those activities, the trail gets harder to navigate, the apple picking is less fun when you cannot see the fruit clearly, and driving at dusk on Yucaipa Boulevard becomes something you avoid. These are not dramatic symptoms. They are the gradual erosion of daily life that people accept for too long because "it is just getting older."
          </p>
          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-wildflower-field.jpg" alt="Couple walking through a wildflower field, representing the outdoor lifestyle Yucaipa retirees enjoy" width={800} height={450} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
          <p className="prose">
            It does not have to be. Cataract surgery is a 10 to 15 minute procedure that typically restores clear vision within days. And with the right lens choice, many patients reduce or eliminate their dependence on glasses for everyday activities.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Loma Linda Training, <strong>Independent Practice</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I know the area well. I completed my ophthalmology residency at Loma Linda University, just down the hill from Yucaipa, and lived in the region for several years. I trained under Dr. Howard Gimbel, whose cataract techniques are used in operating rooms worldwide. That training was exceptional.
          </p>
          <p className="prose">
            But I also learned something during those years: large hospital systems, no matter how prestigious, are not always the best setting for patient care. After completing a retina fellowship, I chose to build Desert Vision Center as an independent, physician-owned practice. The retina training means I evaluate the entire eye, not just the cataract. Diabetic changes, macular issues, glaucoma risk: I catch what cataract-only surgeons may miss. For Yucaipa patients with diabetes or other eye conditions, this means one surgeon handling everything rather than coordinating between multiple specialists.
          </p>
          <p className="prose">
            Over 20,000 surgeries later, I have seen virtually every variation and complication that cataract surgery can produce. Patients with dislocated lenses, failed prior procedures, Yamane sutured IOLs, and cases other surgeons have declined regularly find their way to my practice. The experience means I can look at a challenging case and have a plan.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Right Services for <strong>Yucaipa Patients</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Your default option might be the hospital system down the hill. Here is what Desert Vision Center offers instead:
          </p>
          <ul className="content-list">
            <li><strong>CLEAR in a Day for fewer trips through the pass:</strong> Both eyes in one visit for eligible patients. This is the single most valuable service for Yucaipa residents, whether you are a working driver who needs minimal time off or a retiree who wants to avoid multiple drives. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Lens implants matched to your actual life:</strong> Extended Depth of Focus (EDOF) lenses for patients who need a broader range of clear vision. Toric lenses that reduce astigmatism. Multifocal options for those who want to minimize glasses. I match the lens to how you use your eyes, whether that is reading equipment gauges, hiking a trail, or watching grandkids play at the park. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision cataract surgery:</strong> If you have been told your case is too difficult, or a prior procedure did not go well, I regularly handle these situations. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Diabetic eye care and glaucoma management:</strong> Handled in-house with injections and laser treatment. My retina fellowship means these conditions are not referrals. They are part of what I do. <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/glaucoma">Glaucoma</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Worth the Drive <strong>Through the Pass</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Yucaipa residents know the pass. You drive through it to get to the desert, to visit family in the Valley, to escape the winter fog that settles over the Inland Empire. The drive to Desert Vision Center follows that same I-10, and it takes about an hour.
          </p>
          <p className="prose">
            You have options closer to home, including the Loma Linda system I trained at. And that is a reasonable choice. But if you have ever sat in a waiting room for two hours, felt rushed through an appointment, or been handed a brochure instead of a real conversation about your lens options, you know there is a difference between care and processing.
          </p>
          <p className="prose">
            At Desert Vision Center, I take the time to understand how you use your eyes, what activities matter most to you, and what your expectations are. Then I give you an honest recommendation. Not the most expensive one. Not the fastest one. The right one.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-woman-cleaning-mirror.jpeg" alt="Senior woman polishing a mirror in her bright, modern bathroom, a perfect metaphor for clear vision" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Whether you are a student at Crafton Hills, a parent at Yucaipa High, a CDL driver running the I-10 corridor, or a retiree hiking Wildwood Canyon, clear vision shapes your daily life. Desert Vision Center is one hour east through the pass, and the difference is worth the drive.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Yucaipa</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Yucaipa, the drive is approximately one hour.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head east on I-10 from Yucaipa through Beaumont, Banning, and the San Gorgonio Pass. Continue east into the Coachella Valley and exit at Bob Hope Drive. Head south. The office is on your left, near the Eisenhower Medical Center area. You will pass the windmills at the top of the pass, and once you are through, it is open desert the rest of the way.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. CLEAR in a Day means eligible patients can have both eyes done in a single trip.
          </p>
        </div>
      </section>

      <PageFAQ faqs={pageFaqs} heading="Questions Yucaipa Patients Ask" />

      <section className="cta">
        <div className="container">
          <h2>Yucaipa residents: <strong>clear vision is one hour east.</strong></h2>
          <p>Loma Linda training, physician-owned practice, CDL-friendly scheduling. One trip through the pass with CLEAR in a Day. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
