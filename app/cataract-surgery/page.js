import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
  VideoBackground,
  KineticText,
  BlurReveal,
  LineDraw,
} from '../components/ScrollAnimations';
import AudioNarration from '../components/AudioNarration';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does cataract surgery take?',
      acceptedAnswer: { '@type': 'Answer', text: 'The actual cataract surgery procedure typically takes less than 15-20 minutes per eye. Including pre-op preparation and recovery observation, plan for about 2-3 hours at the surgical center.' },
    },
    {
      '@type': 'Question',
      name: 'Is cataract surgery painful?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Cataract surgery uses numbing eye drops and mild IV sedation. Most patients feel pressure but no pain during the procedure. Many patients say the experience was much easier than they expected.' },
    },
    {
      '@type': 'Question',
      name: 'How soon can I see after cataract surgery?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most patients notice improved vision within 24-48 hours. Vision continues to sharpen over the first week as the eye heals. Full visual stability typically occurs within 4-6 weeks.' },
    },
    {
      '@type': 'Question',
      name: 'Can I drive after cataract surgery?',
      acceptedAnswer: { '@type': 'Answer', text: 'You cannot drive yourself home from surgery. Most patients can resume driving within a few days once their vision meets the legal requirement, which Dr. Tokuhara confirms at the post-operative visit.' },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover cataract surgery?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, standard cataract surgery is covered by Medicare and most insurance plans when medically necessary. Premium lens implants and laser-assisted technology may involve additional out-of-pocket costs, which are discussed transparently during consultation.' },
    },
  ],
};

const jsonLd = [
  physicianSchema,
  faqSchema,
  articleSchema({
    title: 'Cataract Surgery - What to Know Before You Decide',
    description: 'Dr. Tokuhara explains cataract surgery in plain language. What it is, when it makes sense, lens options, recovery, and what to expect.',
    slug: '/cataract-surgery',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgery', href: '/cataract-surgery' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery - What to Know Before You Decide',
  description: 'Dr. Tokuhara explains cataract surgery in plain language. What it is, when it makes sense, lens options, recovery, and what to expect. No jargon, no pressure.',
  alternates: {
    canonical: '/cataract-surgery',
  },
  openGraph: {
    title: 'Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Advanced cataract surgery in the Coachella Valley. Laser assisted techniques, premium lens implants, and complex case expertise.',
    url: 'https://drtokuhara.com/cataract-surgery',
  },
};

export default function CataractSurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{"@context": "https://schema.org", "@type": "VideoObject", "name": "What are Cataracts?  Dr. Tokuhara Explains", "description": "What are cataracts?  What are the symptoms of cataracts?  How do you know if you have cataracts?  In this video, Dr. Tok", "thumbnailUrl": "https://i.ytimg.com/vi/iYKugpBcnQY/maxresdefault.jpg", "uploadDate": "2021-02-28", "duration": "PT4M13S", "contentUrl": "https://www.youtube.com/watch?v=iYKugpBcnQY", "embedUrl": "https://www.youtube.com/embed/iYKugpBcnQY"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "5 Questions to Ask Before Cataract Surgery", "description": "\"What questions should I ask my Cataract Surgeon?\"\n\nDo you or someone you love have cataracts?  Before you have cataract", "thumbnailUrl": "https://i.ytimg.com/vi/YxmR_NSv5-k/maxresdefault.jpg", "uploadDate": "2021-07-18", "duration": "PT3M56S", "contentUrl": "https://www.youtube.com/watch?v=YxmR_NSv5-k", "embedUrl": "https://www.youtube.com/embed/YxmR_NSv5-k"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "What Happens in Cataract Pre-Op?", "description": "Welcome to the Pre-Op Area at Desert Vision Center! \ud83d\udc41\ufe0f\u2728 Join Dr. Tokuhara as he takes you behind the scenes of the pre-o", "thumbnailUrl": "https://i.ytimg.com/vi/XeELWvMkBY8/maxresdefault.jpg", "uploadDate": "2025-04-03", "duration": "PT4M27S", "contentUrl": "https://www.youtube.com/watch?v=XeELWvMkBY8", "embedUrl": "https://www.youtube.com/embed/XeELWvMkBY8"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Cataract Recovery:  What happens after surgery in the recovery room?", "description": "After cataract surgery, you're brought to the recovery unit.  In this video, Dr. Tokuhara talks to the surgery nurses ab", "thumbnailUrl": "https://i.ytimg.com/vi/7mkouTcQWOo/maxresdefault.jpg", "uploadDate": "2023-03-12", "duration": "PT3M46S", "contentUrl": "https://www.youtube.com/watch?v=7mkouTcQWOo", "embedUrl": "https://www.youtube.com/embed/7mkouTcQWOo"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "How do we do cataract surgery in 2023?", "description": "In this lecture, Dr. Tokuhara discusses cataract surgery tools and technology that we use in 2023.  This is a cataract s", "thumbnailUrl": "https://i.ytimg.com/vi/F8Z81PMgVR0/hqdefault.jpg", "uploadDate": "2023-06-20", "duration": "PT1H6M56S", "contentUrl": "https://www.youtube.com/watch?v=F8Z81PMgVR0", "embedUrl": "https://www.youtube.com/embed/F8Z81PMgVR0"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Cataracts and Toric Lens Implants for Patients with Astigmatism", "description": "The astigmatism lens implant used in cataract surgery is called a toric lens.  In this video, Dr. Tokuhara reviews astig", "thumbnailUrl": "https://i.ytimg.com/vi/uCbLzD-KXe4/maxresdefault.jpg", "uploadDate": "2020-06-29", "duration": "PT8M28S", "contentUrl": "https://www.youtube.com/watch?v=uCbLzD-KXe4", "embedUrl": "https://www.youtube.com/embed/uCbLzD-KXe4"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "What's the Difference Between PanOptix and PanOptix Pro? Real Patient Experience with Dr. Tokuhara", "description": "Thinking about cataract surgery in 2025? Wondering whether to choose the PanOptix Pro lens over the original PanOptix?\n\n", "thumbnailUrl": "https://i.ytimg.com/vi/Yomf55PktXU/maxresdefault.jpg", "uploadDate": "2025-06-20", "duration": "PT2M43S", "contentUrl": "https://www.youtube.com/watch?v=Yomf55PktXU", "embedUrl": "https://www.youtube.com/embed/Yomf55PktXU"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Vivity Lens:  Cataract Surgery Behind The Scenes With Dr. Tokuhara", "description": "In this video, Dr. Tokuhara invites you into the operating room in Palm Springs on the very first day with the new Vivit", "thumbnailUrl": "https://i.ytimg.com/vi/4EEq6cg9zyY/hqdefault.jpg", "uploadDate": "2020-10-27", "duration": "PT4M23S", "contentUrl": "https://www.youtube.com/watch?v=4EEq6cg9zyY", "embedUrl": "https://www.youtube.com/embed/4EEq6cg9zyY"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "\u2018Botched\u2019 Cataract Surgery Edition:  Posterior Capsule Rupture Explained", "description": "\u201cWhy can\u2019t I see after cataract surgery?\u201d  \u201cI already had cataract surgery, why do I need to have surgery again.\u201d  Dr. T", "thumbnailUrl": "https://i.ytimg.com/vi/7VkbQx36LeI/maxresdefault.jpg", "uploadDate": "2021-04-27", "duration": "PT7M24S", "contentUrl": "https://www.youtube.com/watch?v=7VkbQx36LeI", "embedUrl": "https://www.youtube.com/embed/7VkbQx36LeI"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "'Botched' Cataract Surgery Edition:  Iris Damage Repair", "description": "\"Why do I have glare after cataract surgery?  Why is my pupil not round?  Why did my eye change color after cataract sur", "thumbnailUrl": "https://i.ytimg.com/vi/B8sM9Xa5mus/maxresdefault.jpg", "uploadDate": "2021-01-03", "duration": "PT8M15S", "contentUrl": "https://www.youtube.com/watch?v=B8sM9Xa5mus", "embedUrl": "https://www.youtube.com/embed/B8sM9Xa5mus"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Fixing a Dislocated Lens Implant:  Yamane Technique", "description": "Does cataract surgery last forever? What happens when the lens implant from cataract surgery dislocates?  Dr. Tokuhara d", "thumbnailUrl": "https://i.ytimg.com/vi/ZrnRIEa0F44/maxresdefault.jpg", "uploadDate": "2022-01-03", "duration": "PT3M36S", "contentUrl": "https://www.youtube.com/watch?v=ZrnRIEa0F44", "embedUrl": "https://www.youtube.com/embed/ZrnRIEa0F44"}]) }} />
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* PAGE HERO */}
      <VideoBackground
        src="/media/ambient-lens-refraction.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <KineticText text="Cataract Surgery" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">What it is, when it makes sense, and what to expect from start to finish.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <AudioNarration src="/audio/narrations/cataract-surgery.mp3" title="What Is Cataract Surgery Really Like?" />

      {/* WHAT ARE CATARACTS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Is a <strong>Cataract?</strong></h2>
          </ScrollReveal>
          <p className="prose">
            A cataract is a clouding of the natural lens inside your eye. That lens sits behind your iris and pupil, and it&rsquo;s normally clear. Over time, proteins in the lens break down and clump together, making it cloudy. Your vision gets hazy. Colors look washed out. Night driving becomes a nightmare because of glare and halos.
          </p>
          <p className="prose">
            Almost everyone develops cataracts if they live long enough. It&rsquo;s the most common cause of vision loss in the world, and the good news is that it&rsquo;s completely fixable. Cataract surgery is one of the most frequently performed and successful surgical procedures in all of medicine.
          </p>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-1">
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
            </div>
          </div>
        </div>
      </section>

      <LineDraw style={{margin: '0 auto', maxWidth: '200px'}} color="var(--oasis)" />

      {/* WHEN IS SURGERY RIGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When Is Surgery <strong>the Right Call?</strong></h2>
          <p className="prose">
            There&rsquo;s no magic number or test result that says &ldquo;it&rsquo;s time.&rdquo; Cataract surgery is an elective procedure, and the timing depends on you. The real question is: are cataracts getting in the way of the things you want to do?
          </p>
          <p className="prose">
            Can you drive safely at night? Can you read without straining? Are you having trouble recognizing faces or seeing clearly in bright light? If your cataracts are affecting your quality of life, it&rsquo;s worth having a conversation. But there&rsquo;s no rush, and nobody should be pressuring you into it.
          </p>
          <p className="prose">
            When we meet, I&rsquo;ll tell you honestly where your cataracts are and whether surgery makes sense now or whether waiting is perfectly fine. If you&rsquo;re not ready, that&rsquo;s okay. My job is to give you the information you need to make a good decision on your timeline.
          </p>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-1">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/YxmR_NSv5-k"
                    title="5 Questions to Ask Before Cataract Surgery"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">5 Questions to Ask Before Cataract Surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE BREAK */}
      <section className="section" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/stock-seniors-bocce-desert.jpg"
              alt="Seniors playing bocce in the desert sun"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What to <strong>Expect</strong></h2>

          <h3 className="subsection-title">Before Surgery</h3>
          <p className="prose">
            We start with a thorough eye exam and measurements. I use advanced imaging to map your eye and plan your surgery. We&rsquo;ll talk about lens options, and I&rsquo;ll explain what each one actually does. No sales pitch. Just facts and my honest recommendation based on your eyes.
          </p>
          <p className="prose">
            You&rsquo;ll get a full rundown of what to expect on surgery day so there are no surprises. Most people are nervous before their first eye surgery. That&rsquo;s completely normal, and I&rsquo;d rather you ask me twenty questions than go in feeling anxious.
          </p>

          <h3 className="subsection-title">During Surgery</h3>
          <p className="prose">
            The procedure takes about 10 to 15 minutes per eye. You&rsquo;re awake, but your eye is numbed so you won&rsquo;t feel pain. I use laser assisted techniques for a level of precision that wasn&rsquo;t possible even a few years ago. The cloudy lens gets broken up and removed, and I place a new artificial lens implant in its place.
          </p>
          <p className="prose">
            Most patients say it was much easier than they expected. The anticipation is almost always worse than the actual experience.
          </p>

          <h3 className="subsection-title">Recovery</h3>
          <p className="prose">
            Most people notice improved vision within a day or two. You&rsquo;ll use eye drops for a few weeks and come back for follow up visits so I can make sure everything is healing well. There are some temporary restrictions, like avoiding heavy lifting and keeping water out of your eyes, but most patients are back to their normal routine pretty quickly.
          </p>

          <div className="content-image" style={{marginTop: '24px', marginBottom: '24px'}}>
            <Image
              src="/media/lifestyle-tennis-woman.jpg"
              alt="Woman playing tennis in the Coachella Valley with clear vision after cataract surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-2">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/XeELWvMkBY8"
                    title="What Happens in Cataract Pre-Op?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">What Happens in Cataract Pre-Op?</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/7mkouTcQWOo"
                    title="Cataract Recovery: What Happens After Surgery"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">What Happens After Surgery in the Recovery Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR IN A DAY */}
      <section id="clear-in-a-day" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">CLEAR in a Day<sup>&trade;</sup></h2>
          <div className="section-subtitle">Same day bilateral cataract surgery. Both eyes, one surgeon, one day.</div>
          <p className="prose">
            Traditionally, cataract surgery is done one eye at a time, weeks apart. That means two separate surgical days, two rounds of recovery, and weeks of imbalanced vision between your eyes. For the right patients, there&rsquo;s a better way.
          </p>
          <p className="prose">
            CLEAR in a Day is my protocol for same day bilateral cataract surgery. Both eyes are treated in a single session with independent sterile setups for each eye. The instruments are changed, the drapes are changed, everything is treated as if it&rsquo;s a completely separate surgery. Because it is.
          </p>
          <p className="prose">
            The advantages are real: one day of arranging rides and taking off work, faster visual recovery since both eyes improve together, and less overall disruption to your life. But I&rsquo;m not going to tell you every patient is a candidate. Some eyes need the sequential approach, and I&rsquo;ll tell you straight if that&rsquo;s your situation.
          </p>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid video-grid-1">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/F8Z81PMgVR0"
                    title="How Do We Do Cataract Surgery in 2023?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">How We Do Cataract Surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LENS OPTIONS */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Lens <strong>Options</strong></h2>
            <div className="section-subtitle">There&rsquo;s no single &ldquo;best&rdquo; lens. The right one depends on your eyes, your lifestyle, and your goals.</div>
          </ScrollReveal>
          <StaggerChildren className="card-grid" staggerDelay={0.12}>
            <StaggerItem>
              <div className="card">
                <h3>Monofocal Lenses</h3>
                <p>The standard lens implant. Sets your focus at one distance, usually far away. Most patients still need reading glasses afterward. It&rsquo;s reliable, proven, and covered by insurance. For a lot of patients, this is the right choice.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card">
                <h3>Toric Lenses</h3>
                <p>Designed for patients with astigmatism. A toric lens reduces the irregular curvature of your cornea at the same time as cataract removal. Without it, astigmatism will still blur your vision even after surgery. I use precise alignment techniques to get the best result.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card">
                <h3>Multifocal &amp; Extended Depth Lenses</h3>
                <p>Lenses like PanOptix, PanOptix Pro, and Vivity give you a range of vision. Distance, intermediate, and sometimes near. The goal is reducing or eliminating dependence on glasses. These lenses aren&rsquo;t for everyone, and I&rsquo;ll explain why some eyes do better with them than others.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
          <div className="video-section" style={{marginTop: '40px'}}>
            <div className="video-grid">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/uCbLzD-KXe4"
                    title="Toric Lens Implants for Astigmatism"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Toric Lens Implants for Astigmatism</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/Yomf55PktXU"
                    title="PanOptix vs PanOptix Pro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">PanOptix vs PanOptix Pro: Real Patient Experience</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/4EEq6cg9zyY"
                    title="Vivity Lens Behind the Scenes"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Vivity Lens: Behind the Scenes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLEX CASES */}
      <section id="complex-cases" className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Complex &amp; <strong>Corrective Cases</strong></h2>
          <p className="prose">
            Not every cataract surgery goes perfectly. And not every eye is straightforward. Some patients come to me after a bad experience with another surgeon. A dislocated lens implant. Iris damage. A posterior capsule rupture that left them with blurry vision and no answers. These are the cases I specialize in.
          </p>
          <p className="prose">
            I also see patients whose anatomy makes standard surgery difficult. Previous eye trauma, weak lens support structures, small pupils, dense cataracts. The cases that require a plan B, C, and D before you even start.
          </p>
          <p className="prose">
            If another doctor told you your case is too complicated or there&rsquo;s nothing more they can do, it&rsquo;s worth getting a second opinion. That&rsquo;s not a knock on your doctor. Some cases genuinely need a surgeon who handles complex work every day.
          </p>
          <div className="video-section" style={{marginTop: '32px'}}>
            <div className="video-grid">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/7VkbQx36LeI"
                    title="Posterior Capsule Rupture Explained"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Posterior Capsule Rupture Explained</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/B8sM9Xa5mus"
                    title="Iris Damage Repair"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Iris Damage Repair After Cataract Surgery</p>
              </div>
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/ZrnRIEa0F44"
                    title="Yamane Technique for Dislocated Lens Implant"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Fixing a Dislocated Lens Implant: Yamane Technique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DR. TOKUHARA */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Patients Choose <strong>Dr. Tokuhara</strong></h2>
          <p className="prose">
            Desert Vision Center is physician-owned and fully independent. There is no corporate parent company, no private equity investors, and no one influencing which lenses I recommend or how I practice. Every surgical plan is built around your eyes, your lifestyle, and your goals.
          </p>
          <p className="prose">
            I completed my fellowship training under Dr. Howard Gimbel at Loma Linda University, one of the most respected names in cataract surgery worldwide. That training, combined with years of specializing in complex and revision cases, shapes how I approach every patient. Even routine cataracts benefit from the kind of planning and judgment that comes from handling the hardest cases regularly.
          </p>
          <p className="prose">
            Named a Top Doctor by Palm Springs Life every year since 2019. Recognized by NBC as the best cataract surgeon in the Coachella Valley. First in the valley to perform Yamane secondary lens fixation, Vivity lens implantation, and PanOptix Pro trifocal implantation.
          </p>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section-light">
        <div className="container content-narrow">
          <h2 className="section-title">Explore <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>Monofocal, toric, EDOF, and multifocal options. Which one fits your life?</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex and Revision Cases</h3>
              <p>When surgery is more complicated, experience matters most.</p>
            </Link>
            <Link href="/clear-in-a-day" className="related-card">
              <h3>CLEAR in a Day</h3>
              <p>Both eyes in a single visit for eligible patients.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Before Surgery</h3>
              <p>What happens in pre-op and how to prepare.</p>
            </Link>
            <Link href="/cataract-recovery" className="related-card">
              <h3>Recovery</h3>
              <p>What to expect after surgery and when to call.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>A framework for evaluating who should operate on your eyes.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Have questions about <strong>your eyes?</strong></h2>
          <p>You don&rsquo;t need a referral to schedule a consultation. If you&rsquo;re thinking about cataract surgery, or you&rsquo;ve had a bad experience and want a second opinion, let&rsquo;s talk.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/education" className="btn-secondary">Browse All Educational Videos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
