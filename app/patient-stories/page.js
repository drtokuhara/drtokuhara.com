import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import {
  ScrollReveal,
  KineticText,
  StaggerChildren,
  StaggerItem,
  BlurReveal,
  VideoBackground,
  LineDraw,
} from '../components/ScrollAnimations';
import YouTubeShorts from '../components/YouTubeShorts';

const jsonLd = [
  articleSchema({
    title: 'Patient Stories: Real Experiences at Desert Vision Center',
    description: 'Watch real patients share their cataract surgery experiences at Desert Vision Center with Dr. Tokuhara. No actors, no scripts, just honest stories.',
    slug: '/patient-stories',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Patient Stories', href: '/patient-stories' },
  ]),
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What do patients say about cataract surgery at Desert Vision Center?', acceptedAnswer: { '@type': 'Answer', text: 'Patients consistently describe feeling heard before surgery, calm during the procedure, and surprised by how quickly they recovered. Many report seeing clearly the morning after surgery.' } },
      { '@type': 'Question', name: 'Are there patient testimonial videos for Dr. Tokuhara?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Desert Vision Center has recorded multiple patient testimonials. These are real patients sharing their own experiences, not actors or paid endorsements.' } },
      { '@type': 'Question', name: 'Does Dr. Tokuhara do cataract surgery on patients with only one eye?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Tokuhara has performed cataract surgery on monocular patients. Harold Baird shares his experience on this page. These cases require a surgeon with the experience and judgment to manage the additional risk.' } },
    ],
  },
];

export const metadata = {
  title: 'Patient Stories: Real Experiences at Desert Vision Center',
  description: 'Real patients. No actors, no scripts. Watch testimonial videos and read patient stories from Desert Vision Center.',
  alternates: { canonical: '/patient-stories' },
  openGraph: {
    title: 'Patient Stories | Desert Vision Center',
    description: 'Watch real patients share their cataract surgery experiences with Dr. Tokuhara.',
    url: 'https://drtokuhara.com/patient-stories',
  },
};

export default function PatientStories() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{"@context": "https://schema.org", "@type": "VideoObject", "name": "Cataract Surgery in a Monocular Eye | Mr. Baird\u2019s Journey to Desert Vision Center", "description": "Mr. Baird only has vision in one eye, making him a monocular patient - and deciding to undergo cataract surgery was not ", "thumbnailUrl": "https://i.ytimg.com/vi/vdD3lBubt58/maxresdefault.jpg", "uploadDate": "2025-03-21", "duration": "PT7M33S", "contentUrl": "https://www.youtube.com/watch?v=vdD3lBubt58", "embedUrl": "https://www.youtube.com/embed/vdD3lBubt58"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Laser Cataract Surgery with Dr. Tokuhara", "description": "What is it like to have laser cataract surgery?  Are you anxious about having cataract surgery?  Dr. Tokuhara's patient,", "thumbnailUrl": "https://i.ytimg.com/vi/3vEQKShP_Tg/maxresdefault.jpg", "uploadDate": "2021-07-26", "duration": "PT3M49S", "contentUrl": "https://www.youtube.com/watch?v=3vEQKShP_Tg", "embedUrl": "https://www.youtube.com/embed/3vEQKShP_Tg"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "What's the Difference Between PanOptix and PanOptix Pro? Real Patient Experience with Dr. Tokuhara", "description": "Thinking about cataract surgery in 2025? Wondering whether to choose the PanOptix Pro lens over the original PanOptix?\n\n", "thumbnailUrl": "https://i.ytimg.com/vi/Yomf55PktXU/maxresdefault.jpg", "uploadDate": "2025-06-20", "duration": "PT2M43S", "contentUrl": "https://www.youtube.com/watch?v=Yomf55PktXU", "embedUrl": "https://www.youtube.com/embed/Yomf55PktXU"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Philip Ferranti\u2019s Cataract Journey:  Coachella Valley Hiking Expert", "description": "What is it like to have cataract surgery?  Hiking expert and renowned author, Philip Ferranti, shares his journey throug", "thumbnailUrl": "https://i.ytimg.com/vi/pm6T4CUmLrE/maxresdefault.jpg", "uploadDate": "2023-02-26", "duration": "PT5M47S", "contentUrl": "https://www.youtube.com/watch?v=pm6T4CUmLrE", "embedUrl": "https://www.youtube.com/embed/pm6T4CUmLrE"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Dr. Tokuhara Patient Testimonial:  Eric Redd\u2019s Cataract Experience", "description": "What is it like to have cataract surgery?  Listen to Golf Professional, Eric Redd, talk about his personal experience. \n", "thumbnailUrl": "https://i.ytimg.com/vi/m3xHlebhPUQ/maxresdefault.jpg", "uploadDate": "2020-07-18", "duration": "PT2M29S", "contentUrl": "https://www.youtube.com/watch?v=m3xHlebhPUQ", "embedUrl": "https://www.youtube.com/embed/m3xHlebhPUQ"}]) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* CINEMATIC HERO */}
      <VideoBackground
        src="/media/ambient-desert-golden-hour.mp4"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '55vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p style={{fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--oasis)', marginBottom: '16px', fontWeight: 600}}>Real Patients, Real Stories</p>
          </ScrollReveal>
          <KineticText text="Patient Stories" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub" style={{maxWidth: '600px', margin: '16px auto 0'}}>No actors. No scripts. Just honest conversations from the people who have been through it.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO WITH IMAGE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/honest-consultation-trust.png"
              alt="Doctor having an honest conversation with a patient in the clinic"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <p className="body-lead">
            I could describe what cataract surgery is like at Desert Vision Center. But the people who have been through it can tell you something I cannot: what it actually feels like.
          </p>
          <p>
            Every patient on this page is a real person. Not an actor. Not a script. Just someone who agreed to share their experience because they thought it might help someone else make a decision they had been sitting with for too long.
          </p>
        </div>
      </section>

      {/* FEATURED STORY: Harold */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Featured: <strong>Harold Baird</strong></h2>
            <p style={{color: 'var(--text-light)', marginBottom: '8px', fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase'}}>Monocular Eye - The Highest-Stakes Surgery</p>
          </ScrollReveal>
          <p>
            Harold had been blind in one eye since age five. His remaining eye developed a cataract and a retinal detachment. He saw three surgeons before choosing Dr. Tokuhara, who spent 70 minutes in the first consultation. The result: 20/20+ vision, no astigmatism, no glasses for the first time in his life.
          </p>
          <BlurReveal><div className="pull-quote">
            <p>"He has magic in his hands. You walk in there and you think you are a rock star."</p>
          </div></BlurReveal>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)'}}>
            <iframe src="https://www.youtube.com/embed/vdD3lBubt58" title="Harold Baird: Monocular Eye Surgery" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <div style={{textAlign: 'center', marginTop: '16px'}}>
            <Link href="/monocular-cataract-surgery" style={{color: 'var(--night-horizon)', fontSize: '14px'}}>Read more about monocular cataract surgery →</Link>
          </div>
        </div>
      </section>

      {/* LIFESTYLE BREAK */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-sunny-pathway-luxury.jpg" alt="Couple walking confidently along a sunny pathway" width={1920} height={500} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* MORE VIDEO TESTIMONIALS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">More <strong>Patient Videos</strong></h2>
          </ScrollReveal>

          {/* Christina */}
          <div style={{marginBottom: '48px'}}>
            <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px'}}>Christina: Laser Cataract Surgery</h3>
            <p style={{color: 'var(--text-light)', marginBottom: '16px'}}>Christina came from a technology background and valued the precision of laser-assisted surgery. She describes the procedure as "amazingly quick and absolutely painless."</p>
            <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)'}}>
              <iframe src="https://www.youtube.com/embed/3vEQKShP_Tg" title="Christina: Laser Cataract Surgery" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
            </div>
          </div>

          <LineDraw />

          {/* PanOptix Patient */}
          <div style={{marginTop: '48px', marginBottom: '48px'}}>
            <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px'}}>PanOptix Trifocal: Two Generations, One Patient</h3>
            <p style={{color: 'var(--text-light)', marginBottom: '16px'}}>This patient had the original PanOptix in one eye and upgraded to the PanOptix Pro in the other with Dr. Tokuhara. Within 24 hours, she noticed the difference: brighter, clearer, sharper.</p>
            <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)'}}>
              <iframe src="https://www.youtube.com/embed/Yomf55PktXU" title="PanOptix Real Patient Experience" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
            </div>
          </div>

          <LineDraw />

          {/* Carol */}
          <div style={{marginTop: '48px', marginBottom: '48px'}}>
            <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px'}}>Carol: The Journey to 20/20</h3>
            <p style={{color: 'var(--text-light)', marginBottom: '16px'}}>Carol shares her complete journey from cloudy vision to perfect clarity, and why she chose Desert Vision Center.</p>
            <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)'}}>
              <iframe src="https://www.youtube.com/embed/uLY48kY8Opo" title="Carol's Cataract Surgery Journey" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
            </div>
          </div>

          <LineDraw />

          {/* Philip and Eric - side by side */}
          <div style={{marginTop: '48px'}} className="compare-grid">
            <div>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px'}}>Philip Ferranti</h3>
              <p style={{color: 'var(--text-light)', fontSize: '14px', marginBottom: '12px'}}>A Coachella Valley hiking enthusiast on getting back to the trails with clear vision.</p>
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)'}}>
                <iframe src="https://www.youtube.com/embed/pm6T4CUmLrE" title="Philip Ferranti Testimonial" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
              </div>
            </div>
            <div>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px'}}>Eric Redd</h3>
              <p style={{color: 'var(--text-light)', fontSize: '14px', marginBottom: '12px'}}>Why he chose Desert Vision Center and what the experience was like from start to finish.</p>
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)'}}>
                <iframe src="https://www.youtube.com/embed/m3xHlebhPUQ" title="Eric Redd Testimonial" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE BREAK */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-seniors-poolside-resort.jpg" alt="Seniors relaxing poolside at a luxury desert resort" width={1920} height={500} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* WRITTEN STORIES */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Patient Stories <strong>in Writing</strong></h2>
            <p>Some experiences are better told in full. These reflections explore the decision, the surgery, and the moment things changed.</p>
          </ScrollReveal>
          <StaggerChildren className="related-grid" style={{marginTop: '32px'}} staggerDelay={0.1}>
            <StaggerItem>
              <Link href="/insights/permission-to-see-again" className="related-card">
                <h3>Permission to See Again</h3>
                <p>A woman spent six years caring for her husband. When she finally came in for her own eyes, she needed permission to take care of herself.</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/insights/the-reader-who-almost-gave-up-her-books" className="related-card">
                <h3>The Reader Who Almost Gave Up Her Books</h3>
                <p>An 81-year-old reader delayed surgery because nobody told her she had a choice about how she would see afterward.</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/insights/when-ai-recommends-your-lens" className="related-card">
                <h3>When AI Recommends Your Lens</h3>
                <p>A patient used AI to choose his lens. Every tool agreed. But his eyes told a different story.</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/insights/the-man-who-wanted-his-younger-eyes-back" className="related-card">
                <h3>The Man Who Wanted His Younger Eyes Back</h3>
                <p>He did not just want better vision. He wanted to feel the way he did before glasses became part of his identity.</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/insights/when-guilt-replaces-explanation" className="related-card">
                <h3>When Guilt Replaces Explanation</h3>
                <p>A patient was told his complication was his fault. It was not.</p>
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/Dr-Tokuhara.jpg"
              alt="Dr. Keith Tokuhara"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Every patient who shares their story does it for the person who has not yet called. That generosity, that willingness to be vulnerable so a stranger feels less alone, is what makes this practice worth building. I am grateful to every person on this page.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* YouTube Shorts */}
      <YouTubeShorts
        title="Watch Their Stories"
        subtitle="Real patients sharing real experiences. No scripts, no actors."
      />

      {/* CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your Story <strong>Could Be Next</strong></h2>
            <p style={{maxWidth: '550px', margin: '0 auto 32px', color: 'var(--text-light)'}}>If you have been putting off cataract surgery, I hope these stories helped. The next step is a conversation, not a commitment.</p>
          </ScrollReveal>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
