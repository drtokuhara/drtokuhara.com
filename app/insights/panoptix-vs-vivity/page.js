import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'PanOptix vs Vivity: Which Multifocal Lens Is Right for You - Dr. Keith Tokuhara',
  description: 'A cataract surgeon who has implanted thousands of premium lenses explains the real differences between PanOptix and Vivity and how to choose.',
  alternates: { canonical: '/insights/panoptix-vs-vivity' },
  openGraph: {
    title: 'PanOptix vs Vivity: Which Multifocal Lens Is Right for You | Dr. Keith Tokuhara',
    description: 'Honest comparison of two popular premium lens options from a surgeon who implants both regularly.',
    url: 'https://drtokuhara.com/insights/panoptix-vs-vivity',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the main difference between PanOptix and Vivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PanOptix is a trifocal lens designed to provide clear vision at near, intermediate, and far distances. Vivity is an Extended Depth of Focus (EDOF) lens that provides excellent distance and intermediate vision with functional near vision. PanOptix offers stronger near vision but higher risk of halos. Vivity offers cleaner optics with less dramatic near vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which lens is better for reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PanOptix provides stronger near vision for sustained reading without glasses. Vivity can provide functional reading vision in good light but many patients still prefer reading glasses for small print or prolonged reading. If reading books and small print without glasses is a priority, PanOptix is usually the better choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which lens causes fewer halos at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vivity causes significantly fewer halos and less glare at night compared to PanOptix. Vivity uses non-diffractive optics, which produce cleaner nighttime vision. PanOptix is a diffractive multifocal lens that splits light into multiple focal points, which can create halos around lights, especially at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have PanOptix in one eye and Vivity in the other?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is called mix-and-match or blended vision. Some surgeons do this to balance near vision strength with reduced halos. However, it creates asymmetry between the eyes that some patients find difficult to adapt to. I rarely recommend this approach unless a patient specifically requests it after understanding the tradeoffs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I decide between PanOptix and Vivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The decision depends on your priorities. Choose PanOptix if near vision without glasses is critical and you can tolerate halos. Choose Vivity if you prioritize crisp distance and intermediate vision, drive frequently at night, or are sensitive to visual disturbances. A detailed consultation with your surgeon about your lifestyle and visual priorities is essential.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'PanOptix vs Vivity: Which Multifocal Lens Is Right for You',
    description: 'A detailed comparison of two popular premium lens implants from a surgeon who implants both, including honest discussion of tradeoffs.',
    slug: '/insights/panoptix-vs-vivity',
    datePublished: '2026-06-05',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'PanOptix vs Vivity', href: '/insights/panoptix-vs-vivity' },
  ]),
  faqSchema,
];

export default function InsightPanOptixVsVivity() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="page-hero page-hero-image" style={{
        backgroundImage: 'url(/media/panoptix-vivity-comparison.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 20, 30, 0.6)'
        }} />
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Lens Selection</span>
          <h1>PanOptix vs Vivity: Which Multifocal Lens <strong>Is Right for You</strong></h1>
          <p className="page-hero-sub">A surgeon's honest comparison of two popular premium lenses and how to choose between them.</p>
          </ScrollReveal>
        </div>
      </div>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Patients sit across from me in the exam room and ask the question I hear almost daily: "Which lens should I get, PanOptix or Vivity?" The answer is rarely simple. Both are excellent lenses. Both can provide freedom from glasses. But they work in fundamentally different ways, and choosing the wrong one for your eyes and your lifestyle can leave you disappointed.
          </p>
          <p>
            Here is what I tell them. And here is what you need to know if you are trying to make the same decision.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Technology</strong></h2>
          <p>
            PanOptix is a trifocal lens. It splits incoming light into three focal points: near (about 16 inches for reading), intermediate (about 24 to 30 inches for computer work), and distance. This is done through diffractive optics, a series of concentric rings etched onto the lens surface that bend light into multiple focal zones.
          </p>
          <p>
            Vivity is an Extended Depth of Focus (EDOF) lens. Instead of splitting light into discrete focal points, it stretches the focal range. Think of it as creating a smooth gradient of focus from distance through intermediate, with functional near vision depending on lighting and pupil size. Vivity uses non-diffractive wavefront-shaping technology, which means it does not rely on the ring pattern that trifocal lenses use.
          </p>
          <p>
            That difference in design drives everything else. PanOptix gives you three sharp zones. Vivity gives you a continuous range with less definition at the extremes.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/eye-closeup-both.png"
              alt="Close-up view of both eyes showing the clarity that premium lens implants can provide"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <BlurReveal><div className="insight-highlight">
            <p><strong>When I explain this to patients, I use an analogy. PanOptix is like having three pairs of glasses built into one lens. Vivity is like having progressive lenses. Both reduce your dependence on glasses, but the experience is different.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Near <strong>Vision</strong></h2>
          <p>
            If your primary goal is reading books, menus, and phone screens without glasses, PanOptix is usually the better choice. The dedicated near focal point at 16 inches is designed for exactly that purpose. Most PanOptix patients can read standard print comfortably without reaching for readers.
          </p>
          <p>
            Vivity provides functional near vision, but it is not as strong or as reliable as PanOptix. Many Vivity patients can read a text message or check a price tag in good lighting. But sustained reading of small print, especially in dim light, often still requires reading glasses.
          </p>
          <p>
            That does not make Vivity inferior. It makes it a different tool. If you rarely read books and mostly care about seeing your dashboard, your computer screen, and road signs clearly, Vivity may be the better fit.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The lens that works for your neighbor might not work for you. This is not about technology. It is about matching the lens to your life."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Intermediate <strong>Vision</strong></h2>
          <p>
            Both lenses provide excellent intermediate vision. This is the range where you use a computer, work on hobbies, cook, play cards, and look at a car dashboard. For most daily activities, PanOptix and Vivity perform similarly in this zone.
          </p>
          <p>
            Vivity may have a slight edge in the intermediate range because its Extended Depth of Focus design naturally emphasizes this zone. But the difference is subtle. Both lenses will let you see your computer screen without glasses.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Distance Vision and <strong>Nighttime Performance</strong></h2>
          <p>
            This is where Vivity pulls ahead for many patients. Distance vision with both lenses is generally sharp, but Vivity produces cleaner, crisper optics at distance, especially in low light and at night.
          </p>
          <p>
            PanOptix, because it is a diffractive multifocal, splits light into multiple focal points. That splitting creates halos and glare around lights, particularly at night. Streetlights, headlights, and traffic signals can appear with rings or starbursts around them. Most patients adapt to this over time, but some find it bothersome, especially when driving at night.
          </p>
          <p>
            Vivity does not use diffractive optics, so it produces significantly fewer halos. Patients who drive frequently at night, live in areas with a lot of nighttime driving, or are particularly sensitive to visual disturbances often prefer Vivity for this reason.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>I ask every patient about their nighttime driving habits before recommending a lens. If someone tells me they drive home from Los Angeles to Palm Springs at night twice a week, I steer them toward Vivity. If they tell me they rarely drive after sunset and want to read without glasses, PanOptix moves up the list.</strong></p>
          </div></BlurReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/night-driving-wind-turbines-cv.jpeg"
              alt="Clear nighttime driving view past wind turbines in the Coachella Valley"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Who Should Choose <strong>PanOptix</strong></h2>
          <p>
            PanOptix is the right choice if:
          </p>
          <ul>
            <li>Reading without glasses is a top priority.</li>
            <li>You want strong, reliable near vision for books, menus, and small print.</li>
            <li>You do not drive frequently at night or are willing to tolerate halos in exchange for better near vision.</li>
            <li>You want the broadest range of focus across all three distances.</li>
          </ul>
          <p>
            PanOptix is also a good choice for patients who are already familiar with multifocal contact lenses or progressive glasses and understand the concept of adapting to multifocal optics.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Who Should Choose <strong>Vivity</strong></h2>
          <p>
            Vivity is the right choice if:
          </p>
          <ul>
            <li>You prioritize crisp distance and intermediate vision over strong near vision.</li>
            <li>You drive frequently at night and want to minimize halos.</li>
            <li>You are willing to use reading glasses occasionally for prolonged reading or very small print.</li>
            <li>You are sensitive to visual disturbances like glare or halos and want the cleanest optics possible.</li>
          </ul>
          <p>
            Vivity is also a strong option for patients who had LASIK or other refractive surgery in the past and may be more prone to optical side effects with diffractive lenses.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Can You Mix <strong>and Match</strong>?</h2>
          <p>
            Some surgeons recommend putting PanOptix in one eye and Vivity in the other. The idea is to balance the strengths of both lenses: strong near vision from PanOptix and clean distance vision from Vivity.
          </p>
          <p>
            I rarely recommend this approach. The human brain is designed to fuse images from both eyes into a single coherent picture. When the two eyes are seeing through fundamentally different optical systems, that fusion can be disrupted. Some patients adapt. Others find the asymmetry uncomfortable or disorienting.
          </p>
          <p>
            If a patient strongly prefers this strategy after discussing the risks, I will do it. But my default recommendation is to match the lenses. Symmetry matters.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Mixing lenses sounds clever on paper. In practice, it creates more problems than it solves for most patients."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What About <strong>Astigmatism</strong>?</h2>
          <p>
            Both PanOptix and Vivity are available in toric versions to reduce astigmatism. If you have significant astigmatism (typically 0.75 diopters or more), you will need the toric version of whichever lens you choose.
          </p>
          <p>
            The toric versions work the same way as the non-toric versions, with the added benefit of reducing astigmatism. The visual outcomes are comparable. The decision between PanOptix and Vivity does not change based on astigmatism alone.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Consultation</strong></h2>
          <p>
            Choosing between PanOptix and Vivity is not something you should do based on an online article alone. The measurements of your eye, the health of your retina, your pupil size, your visual demands, and your tolerance for optical compromises all matter.
          </p>
          <p>
            I spend more time on premium lens consultations than on any other part of the pre-operative process. I ask about hobbies, work, driving habits, reading preferences, and past experiences with glasses or contacts. I look at corneal aberrations, tear film quality, and retinal health. All of it feeds into the recommendation.
          </p>
          <p>
            The goal is not to sell you the most expensive lens. The goal is to match the right lens to your eyes and your life. Sometimes that is PanOptix. Sometimes it is Vivity. Sometimes it is neither, and the standard monofocal lens is the better call.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>I have had patients come in convinced they want PanOptix, and after we talk through their priorities and lifestyle, they walk out choosing Vivity. I have had the reverse happen too. The conversation matters more than the initial assumption.</strong></p>
          </div></BlurReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/dvc-exam-room.jpg"
              alt="The consultation room at Desert Vision Center where lens selection discussions take place"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <BlurReveal><div className="pull-quote">
            <p>"The patients who do best are the ones who understand those tradeoffs going in and choose the lens that aligns with their priorities."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The hardest part of premium lens selection is managing expectations. Both PanOptix and Vivity are remarkable pieces of technology. Both can reduce or eliminate your dependence on glasses. But neither is perfect. Every lens involves tradeoffs. The patients who do best are the ones who understand those tradeoffs going in and choose the lens that aligns with their priorities. The ones who struggle are the ones who expect perfection or who choose a lens based on what worked for someone else. This is custom work. What works for your spouse or your friend might not work for you. That is why the consultation exists.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>The complete guide to understanding your lens options.</p>
            </Link>
            <Link href="/vivity-vs-panoptix" className="related-card">
              <h3>Vivity vs PanOptix (Main Comparison Page)</h3>
              <p>Detailed side-by-side comparison of both lenses.</p>
            </Link>
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>Honest discussion about the value and limitations of premium IOLs.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>Choosing the Standard Lens</h3>
              <p>Why the monofocal lens is still the right choice for many patients.</p>
            </Link>
            <Link href="/halos-after-cataract-surgery" className="related-card">
              <h3>Halos After Cataract Surgery</h3>
              <p>What causes halos with multifocal lenses and what to expect.</p>
            </Link>
            <Link href="/insights/best-lens-for-night-driving" className="related-card">
              <h3>Best Lens for Night Driving</h3>
              <p>How to choose a lens if nighttime driving is a priority.</p>
            </Link>
            <Link href="/insights/panoptix-vs-panoptix-pro" className="related-card">
              <h3>PanOptix vs PanOptix Pro</h3>
              <p>What changed in the newer PanOptix Pro version and why it matters.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
