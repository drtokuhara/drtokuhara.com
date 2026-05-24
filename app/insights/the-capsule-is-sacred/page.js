import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import GimbelQuotePlayer from '../../components/GimbelQuotePlayer';
import HeritageSeriesNav from '../../components/HeritageSeriesNav';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'The Capsule Is Sacred: How Dr. Gimbel Changed Cataract Surgery Forever',
  description: 'Dr. Howard Gimbel did not just invent a surgical technique. He gave cataract surgery a new philosophical foundation: the capsule is not an obstacle to remove. It is architecture to preserve. This is the beginning of a series exploring the surgical wisdom that shapes everything I do.',
  alternates: { canonical: '/insights/the-capsule-is-sacred' },
  openGraph: {
    title: 'The Capsule Is Sacred: How Dr. Gimbel Changed Cataract Surgery Forever | Dr. Keith Tokuhara',
    description: 'Before 1984, cataract surgeons opened the capsule with a can-opener technique. Dr. Gimbel showed the world a better way. This is the story of a paradigm shift.',
    url: 'https://drtokuhara.com/insights/the-capsule-is-sacred',
  },
};

const jsonLd = [
  articleSchema({
    title: 'The Capsule Is Sacred: How Dr. Gimbel Changed Cataract Surgery Forever',
    description: 'Dr. Howard Gimbel did not just invent a surgical technique. He gave cataract surgery a new philosophical foundation: the capsule is not an obstacle to remove. It is architecture to preserve. This is the beginning of a series exploring the surgical wisdom that shapes everything I do.',
    slug: '/insights/the-capsule-is-sacred',
    datePublished: '2026-05-14',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Capsule Is Sacred', href: '/insights/the-capsule-is-sacred' },
  ]),
];

export default function InsightTheCapsuleIsSacred() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-precision-instrument.mp4"
        poster="/media/stock-couple-patio-scenic-view.jpg"
        overlayOpacity={0.7}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          {/* Heritage badge */}
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(115, 192, 214, 0.15)',
            border: '1px solid rgba(115, 192, 214, 0.3)',
            borderRadius: '24px',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)',
          }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'Montserrat, sans-serif',
            }}>
              Surgical Heritage • 1984 - The Paradigm Shift
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}>
            The Capsule Is <strong style={{fontWeight: '700'}}>Sacred</strong>
          </h1>
          <p className="page-hero-sub" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            lineHeight: '1.6',
            maxWidth: '800px',
          }}>
            How Dr. Howard Gimbel changed cataract surgery forever, and why his philosophy shapes every decision I make in the operating room.
          </p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* Vertical timeline line (subtle visual thread) */}
      <div style={{
        position: 'fixed',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '2px',
        height: '60vh',
        background: 'linear-gradient(180deg, transparent 0%, rgba(115, 192, 214, 0.2) 50%, transparent 100%)',
        zIndex: '0',
        pointerEvents: 'none',
        display: 'none',
      }}
      className="heritage-timeline"
      />

      <section className="section section-white" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '40px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Before 1984, cataract surgeons opened the lens capsule with what was called a can-opener capsulotomy. The name describes it perfectly: a series of punctures around the anterior capsule, then tearing between them to create an opening. It worked. Lenses could be removed. But the edges were irregular, unpredictable. The capsule, weakened by multiple puncture points, was prone to tearing during the procedure. Complications were common enough that they were expected.
          </p>
          <p>
            Then Dr. Howard V. Gimbel introduced a different approach. He called it continuous curvilinear capsulorhexis. The term sounds technical, but the concept was elegantly simple: instead of puncturing and tearing, create one smooth, circular opening in the capsule, following the natural elasticity of the tissue. A single, controlled tear that moves in a spiral, curving back on itself until the opening is complete.
          </p>
          <p>
            He did not just invent a new technique. He gave cataract surgery a new philosophical foundation: <strong>the capsule is not an obstacle to remove. It is architecture to preserve.</strong>
          </p>
        </div>
      </section>

      {/* Voice of the Master: CCC Origin */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #fafaf8 0%, #f5f0eb 100%)',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}>
        <div className="container content-narrow">
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(0, 125, 149, 0.08)',
              borderRadius: '20px',
              marginBottom: '16px',
            }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#007d95',
                fontFamily: 'Montserrat, sans-serif',
              }}>
                Voice of the Master
              </span>
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '400',
              color: '#2a2a2a',
              marginBottom: '12px',
            }}>
              The Invention of Continuous Curvilinear Capsulorhexis
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#7a7a8e',
              fontStyle: 'italic',
            }}>
              Dr. Gimbel describes the moment he discovered a better way
            </p>
          </div>

          <GimbelQuotePlayer 
            src="/audio/gimbel/ccc-origin-story.mp3"
            quote="I started tearing... I did an arc, then left a little space... continuous curvilinear capsulorhexis."
            attribution="Dr. Howard V. Gimbel"
            source="History of Eyecare Podcast, 2023"
            duration={98}
          />
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container content-narrow">
          <h2 className="section-title" style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '40px',
          }}>
            Why the Capsule <strong>Matters</strong>
          </h2>
          <p>
            The capsule is the clear membrane that surrounds the natural lens of the eye. It is thin, nearly transparent, and deceptively strong. During cataract surgery, the cloudy lens inside the capsule is removed, and an artificial intraocular lens is placed within that same capsular bag. If the capsule tears in the wrong place, the entire surgical plan changes. The lens may need to be positioned differently. The surgery becomes more complex. Recovery becomes less predictable.
          </p>
          <p>
            Gimbel understood that the integrity of the capsule determined the success of everything that followed. If the opening was smooth and circular, the forces on the capsule were distributed evenly. The tissue could withstand manipulation. The lens could be removed safely. The implant could be positioned precisely where anatomy intended it to be.
          </p>

          <BlurReveal><div className="insight-highlight" style={{
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(0, 125, 149, 0.05) 0%, rgba(115, 192, 214, 0.08) 100%)',
            borderLeft: '4px solid #2e94a4',
            margin: '48px 0',
          }}>
            <p style={{margin: 0}}><strong>This was not merely a procedural improvement. It was a philosophical one. Gimbel demonstrated that respecting biological architecture produces better outcomes than forcing mechanical solutions. The tear follows the capsule's own structure. The surgeon guides, not dominates.</strong></p>
          </div></BlurReveal>

          <p>
            Within a few years, continuous curvilinear capsulorhexis became the standard of care worldwide. Nearly every cataract surgeon practicing today uses Gimbel's method, whether they trained under him directly or learned it from someone who did. It is foundational. It is the first step, the step upon which everything else depends.
          </p>
        </div>
      </section>

      <section className="section section-warm" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container content-narrow">
          <h2 className="section-title" style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '40px',
          }}>
            What I Learned From <strong>Watching Him</strong>
          </h2>
          <p>
            Dr. Gimbel would travel each month from Calgary to Loma Linda to teach us residents, and whenever he was in town, I made it a point to find him the moment my own clinical duties were finished. I would track down whatever operating room or clinic he was in and stay close, because every moment around him felt like an opportunity to learn.
          </p>
          <p>
            What made Dr. Gimbel unforgettable was not only his surgical skill, but the way he taught. His teaching style was humble, calm, and deeply practical. Even his shortest comments carried weight. He had a remarkable ability to explain difficult concepts in a way that immediately made sense in the real world of surgery rather than just in textbooks.
          </p>
          <p>
            Many evenings after clinic, I would run to the operating room and find him still operating hours later, often deep into some of the most difficult cases imaginable: pseudoexfoliation syndrome, dislocated lenses, dense complex cataracts, or pediatric cases requiring general anesthesia because of their complexity. No matter how challenging the situation became, he never appeared rattled. Even when the room around him became tense and the nurses were stressed, Dr. Gimbel remained calm, methodical, and composed.
          </p>
          <p>
            What amazed all of us was his steadiness under pressure. He moved through surgery with quiet confidence, never rushed, never emotional, always deliberate. Watching him felt as though he had already visualized every step before it happened. There was an almost supernatural sense of intention behind everything he did. He taught us that mastery in surgery was not loud or dramatic. It was calm, disciplined, and thoughtful.
          </p>
          <p>
            One of his teaching principles has stayed with me across 20,000 surgeries:
          </p>

          <BlurReveal><div className="pull-quote" style={{
            margin: '48px 0',
            padding: '32px 40px',
            background: 'white',
            borderLeft: '4px solid #73c0d6',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: '#2a2a2a',
              margin: '0 0 16px 0',
            }}>
              "This is another reason to always make the CCC smaller than the diameter of the optic, to have this option if it's needed."
            </p>
            <p className="pull-quote-attribution" style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#007d95',
              margin: 0,
            }}>
              Dr. Howard V. Gimbel
            </p>
          </div></BlurReveal>

          <p>
            He was explaining why he preferred a capsulorhexis opening slightly smaller than the lens implant itself. The immediate reason was mechanical: a smaller opening allows the optic to sit securely within the capsular bag, creating a stable, centered position. But the deeper reason was strategic. If something unexpected happened during surgery, if the posterior capsule tore, if the lens needed to be captured differently, a well-sized capsulorhexis gave him options.
          </p>
          <p>
            This is the essence of surgical wisdom. Gimbel was not just performing the step in front of him. He was anticipating the steps that might be necessary hours, days, or years later. The capsulorhexis was not designed only for today's surgery. It was designed for the complications that had not yet occurred, for the adjustments that might someday be needed, for the next surgeon who might have to revise this case a decade from now.
          </p>
          <p>
            One evening, after a particularly long surgical day, Dr. Gimbel invited me to his home. His wife prepared an incredible dinner, and for the first time I understood something deeper about him: he made people feel like family. That same warmth he showed at home was exactly how he treated his patients. When you were in the room with Dr. Gimbel, you never felt like a case or a number. He cared for people the way he would care for his own family, and that humanity was just as influential as his surgical brilliance.
          </p>
        </div>
      </section>

      {/* Voice of the Master: CCC sizing principle */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #f5f0eb 0%, #fafaf8 100%)',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}>
        <div className="container content-narrow">
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(0, 125, 149, 0.08)',
              borderRadius: '20px',
              marginBottom: '16px',
            }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#007d95',
                fontFamily: 'Montserrat, sans-serif',
              }}>
                Voice of the Master
              </span>
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '400',
              color: '#2a2a2a',
              marginBottom: '12px',
            }}>
              The Principle That Guides Every Surgery
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#7a7a8e',
              fontStyle: 'italic',
            }}>
              Surgical wisdom that anticipates complications before they occur
            </p>
          </div>

          <GimbelQuotePlayer 
            src="/audio/gimbel/ccc-smaller-than-optic.mp3"
            quote="Always make the CCC smaller than the diameter of the optic."
            attribution="Dr. Howard V. Gimbel"
            source="Gimbel Library surgical teaching"
            duration={10}
          />
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container content-narrow">
          <h2 className="section-title" style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '40px',
          }}>
            The Philosophy Behind the <strong>Technique</strong>
          </h2>
          <p>
            Gimbel taught that cataract surgery is not a series of isolated steps performed in sequence. It is a conversation with the eye's internal structures, where each action reveals information that shapes the next decision. The capsulorhexis tells you about capsular elasticity and zonular integrity. Hydrodissection, the step where fluid is injected to separate the lens from the capsule, reveals how tightly the cortex adheres and how mobile the nucleus will be. The first attempt to fracture the nucleus tells you more about its density than any preoperative grading could.
          </p>
          <p>
            He described this as reading the tissue. The expert surgeon does not simply execute a protocol. They observe, adjust, and respond to what the eye is communicating. When the capsule resists the initial tear, that resistance is diagnostic. It tells you the tissue may be fibrotic, or the zonules may be weak, or the patient's anatomy may require a different instrument. The surgeon who ignores those signals and forces the technique anyway is the one who encounters complications.
          </p>

          <BlurReveal><div className="insight-highlight" style={{
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(0, 125, 149, 0.05) 0%, rgba(115, 192, 214, 0.08) 100%)',
            borderLeft: '4px solid #2e94a4',
            margin: '48px 0',
          }}>
            <p style={{margin: 0}}><strong>In Gimbel's operating room, patience was a clinical skill, not a personality trait. He slowed deliberately at high-risk moments. He maintained steady rhythm during routine phases. And he recognized that hesitation at the wrong moment could itself become dangerous.</strong></p>
          </div></BlurReveal>

          <p>
            His teaching extended beyond what to do to how to think when things did not go as planned. He showed us not only successful surgeries but complicated ones. Cases where the capsule tore. Cases where the lens subluxated years after implantation. Cases where simple sulcus placement failed and required revision. He was willing to show the failures because he understood that surgical mastery is not the absence of complications. It is the presence of composure when they arrive.
          </p>

          <BlurReveal><div className="pull-quote" style={{
            margin: '48px 0',
            padding: '32px 40px',
            background: 'white',
            borderLeft: '4px solid #73c0d6',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: '#2a2a2a',
              margin: '0 0 16px 0',
            }}>
              "The cases that go perfectly teach you the technique. The cases that don't teach you medicine."
            </p>
            <p className="pull-quote-attribution" style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#007d95',
              margin: 0,
            }}>
              Dr. Howard V. Gimbel
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* Voice of the Master: It all builds off the CCC */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #fafaf8 0%, #f5f0eb 100%)',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}>
        <div className="container content-narrow">
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(0, 125, 149, 0.08)',
              borderRadius: '20px',
              marginBottom: '16px',
            }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#007d95',
                fontFamily: 'Montserrat, sans-serif',
              }}>
                Voice of the Master
              </span>
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '400',
              color: '#2a2a2a',
              marginBottom: '12px',
            }}>
              The Foundation of Modern Cataract Surgery
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#7a7a8e',
              fontStyle: 'italic',
            }}>
              Even Charles Kelman wished he had invented it
            </p>
          </div>

          <GimbelQuotePlayer 
            src="/audio/gimbel/builds-off-ccc.mp3"
            quote="It all builds off the CCC. CCC demanded fracturing the lens and not only demanded, but it facilitated. Kelman said, I wish I had come up with CCC."
            attribution="Dr. Howard V. Gimbel"
            source="History of Eyecare Podcast, 2023"
            duration={44}
          />
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container content-narrow">
          <h2 className="section-title" style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '40px',
          }}>
            How It Shapes My Practice <strong>Today</strong>
          </h2>
          <p>
            I think about the capsulorrhexis every single time I operate. Not because it is difficult, routine capsulorhexis in a standard cataract is one of the most predictable steps in modern surgery, but because it sets the foundation for everything that follows. If the opening is well-sized, centered, and structurally sound, the rest of the case proceeds smoothly. If it is not, every subsequent step becomes more challenging.
          </p>
          <p>
            In complex cases, the capsulorhexis becomes even more critical. Patients with weak zonules from pseudoexfoliation or Marfan syndrome. Patients with fibrotic capsules from prior inflammation. Patients whose cataracts are so dense that visualization is limited. In those eyes, the capsulorhexis is not just a step. It is a diagnostic and therapeutic act. The tissue tells you what it needs, and you respond accordingly.
          </p>
          <p>
            Gimbel's principle, that the capsule is the architecture of the eye, extends beyond the technical execution. It shapes how I communicate with patients. When someone asks what makes cataract surgery safe, part of the answer is modern equipment, advanced lens technology, and precise measurements. But another part is this: the surgery respects the eye's own structure. We work within the anatomy, not against it. We preserve what cannot be replaced.
          </p>

          <BlurReveal><div style={{
            padding: '48px',
            background: 'linear-gradient(135deg, rgba(46, 148, 164, 0.08) 0%, rgba(115, 192, 214, 0.12) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 125, 149, 0.15)',
            margin: '56px 0',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
          }}>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
              fontWeight: '600',
              color: '#2a2a2a',
              marginBottom: '20px',
            }}>
              A thought from the clinic
            </h3>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: '#4a4a5e',
              margin: 0,
              fontStyle: 'italic',
            }}>
              Patients often focus on the lens implant itself, the technology that will restore their vision. That matters. But what matters just as much is the surgical philosophy that determines how that lens is placed. Gimbel taught me that the best technology in the world is only as good as the technique used to position it. And the best technique is one that respects the biological architecture of the eye, treating the capsule not as an obstacle but as the very structure that makes precision possible.
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, rgba(10, 26, 36, 1) 0%, rgba(0, 125, 149, 0.95) 100%)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}>
        <div className="container content-narrow">
          <div style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              marginBottom: '20px',
            }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Montserrat, sans-serif',
              }}>
                From the Archive
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '400',
              color: 'white',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}>
              Dr. Gimbel's Message to <strong>Surgeons</strong>
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Why he dedicated decades to teaching through video, and what he hoped other surgeons would learn
            </p>
          </div>

          {/* Responsive YouTube embed */}
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(115, 192, 214, 0.3)',
          }}>
            <iframe
              src="https://www.youtube.com/embed/gKxpV3SmIE4"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Dr. Gimbel's Message to Viewers"
            />
          </div>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container content-narrow">
          <h2 className="section-title" style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '40px',
          }}>
            A Legacy That <strong>Continues</strong>
          </h2>
          <p>
            Dr. Gimbel passed along something more valuable than a technique. He passed along a way of thinking about surgery, about patient care, and about the responsibility we carry when we operate on someone's vision. The principles he taught are not historical artifacts. They are living guidance.
          </p>
          <p>
            Every difficult case I encounter, every complication I manage, every decision about lens selection or surgical approach, is informed by what he demonstrated: that mastery is built on humility, that technique serves philosophy, and that the capsule, that thin, transparent membrane, is sacred.
          </p>

          <BlurReveal><div className="insight-highlight" style={{
            padding: '48px',
            background: 'linear-gradient(135deg, rgba(0, 125, 149, 0.08) 0%, rgba(115, 192, 214, 0.12) 100%)',
            borderLeft: '4px solid #007d95',
            margin: '56px 0',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
          }}>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.75',
              margin: 0,
            }}>
              <strong>The continuous curvilinear capsulorhexis changed cataract surgery forever. But the deeper lesson was this: when you respect the architecture of the eye, when you work with the tissue rather than against it, when you anticipate not just the surgery in front of you but the challenges that may come years later, you are practicing medicine at its highest level.</strong>
            </p>
          </div></BlurReveal>

          <p>
            That is the foundation Dr. Gimbel gave me. And it is the foundation I carry into every case.
          </p>
        </div>
      </section>

      {/* Voice of the Master: To God Be the Glory */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #fafaf8 0%, rgba(10, 26, 36, 0.03) 100%)',
        paddingTop: '64px',
        paddingBottom: '80px',
      }}>
        <div className="container content-narrow">
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(0, 125, 149, 0.08)',
              borderRadius: '20px',
              marginBottom: '16px',
            }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#007d95',
                fontFamily: 'Montserrat, sans-serif',
              }}>
                Voice of the Master
              </span>
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '400',
              color: '#2a2a2a',
              marginBottom: '12px',
            }}>
              The Heart of a Surgeon
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#7a7a8e',
              fontStyle: 'italic',
            }}>
              Why he innovated, and what mattered most
            </p>
          </div>

          <GimbelQuotePlayer 
            src="/audio/gimbel/to-god-be-glory.mp3"
            quote="To God be the glory. I didn't do any of that because I wanted to become famous. I just did it because it seemed like the best thing to do at the time."
            attribution="Dr. Howard V. Gimbel"
            source="History of Eyecare Podcast, 2023"
            duration={32}
          />
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: '64px', paddingBottom: '80px'}}>
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              marginBottom: '40px',
            }}>
              Related <strong>Reading</strong>
            </h2>
          </ScrollReveal>
          <div className="related-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            <Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me" className="related-card" style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              display: 'block',
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Playfair Display, Georgia, serif',
                marginBottom: '12px',
                color: '#2a2a2a',
              }}>
                What I Learned From the Surgeon Who Trained Me
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#7a7a8e',
                lineHeight: '1.6',
                margin: 0,
              }}>
                The residency moment that changed how I think about surgery and complications.
              </p>
            </Link>
            <Link href="/complex-cases" className="related-card" style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              display: 'block',
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Playfair Display, Georgia, serif',
                marginBottom: '12px',
                color: '#2a2a2a',
              }}>
                Complex Cataract Cases
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#7a7a8e',
                lineHeight: '1.6',
                margin: 0,
              }}>
                When surgery requires more than a standard approach, Gimbel's principles matter most.
              </p>
            </Link>
            <Link href="/about" className="related-card" style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              display: 'block',
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Playfair Display, Georgia, serif',
                marginBottom: '12px',
                color: '#2a2a2a',
              }}>
                About Dr. Tokuhara
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#7a7a8e',
                lineHeight: '1.6',
                margin: 0,
              }}>
                Training, philosophy, and the lineage that shapes Desert Vision Center.
              </p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card" style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              display: 'block',
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: 'Playfair Display, Georgia, serif',
                marginBottom: '12px',
                color: '#2a2a2a',
              }}>
                The Consultation That Changed Everything
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#7a7a8e',
                lineHeight: '1.6',
                margin: 0,
              }}>
                What a thorough evaluation actually looks like, and why it matters.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <HeritageSeriesNav currentSlug="/insights/the-capsule-is-sacred" />
        </div>
      </section>
    </>
  );
}
