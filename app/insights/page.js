import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
  VideoBackground,
  ScaleOnScroll,
  LineDraw,
} from '../components/ScrollAnimations';
import TiltCard from '../components/TiltCard';

export const metadata = {
  title: 'Insights from the Clinic',
  description: 'Clinical reflections from Dr. Keith Tokuhara on cataract surgery, lens implant decisions, IOL selection, and the things about eye care that don\'t fit in a brochure.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights from the Clinic | Dr. Keith Tokuhara',
    description: 'Real clinical stories and reflections on cataracts, surgery decisions, and patient care from a Coachella Valley ophthalmologist.',
    url: 'https://drtokuhara.com/insights',
  },
};

const insights = [
  {
    slug: 'when-ai-recommends-your-lens',
    title: 'When AI Recommends Your Lens... But Your Eye Tells a Different Story',
    date: 'May 2026',
    description: 'A patient used AI to choose his cataract lens. Every tool agreed. But his eyes told a different story. A reflection on the limits of AI in medicine.',
    cluster: 'Clinical Judgment',
    image: '/media/stock-couple-market-sunlight.jpg',
  },
  {
    slug: 'five-questions-before-surgery',
    title: '5 Questions to Ask Before Cataract Surgery',
    date: 'May 2026',
    description: 'Your surgeon should welcome every one of them. The five most important questions to ask before cataract surgery, and what the answers reveal.',
    cluster: 'Decisions & Timing',
    image: '/media/stock-couple-patio-scenic-view.jpg',
  },
  {
    slug: 'three-things-patients-say',
    title: 'Three Things Patients Say That Tell Me Which Lens to Recommend',
    date: 'May 2026',
    description: 'Your words tell me more than any chart. How three common statements in the exam room reveal which lens implant fits your life.',
    cluster: 'Lens Selection',
    image: '/media/stock-couple-art-interior.jpg',
  },
  {
    slug: 'when-is-the-right-time',
    title: 'When Is the Right Time for Cataract Surgery?',
    date: 'April 2026',
    description: 'The question I hear more than any other. There is no magic number. The right time depends on your life, not a chart.',
    cluster: 'Decisions & Timing',
    image: '/media/stock-couple-lawn-sunset-coachella.jpg',
  },
  {
    slug: 'when-patients-wait',
    title: 'When Patients Wait',
    date: 'April 2026',
    description: 'Her outcome was excellent. Her biggest regret was that she didn\'t do it sooner. The psychology of timing, outcome bias, and why readiness is not the same as candidacy.',
    cluster: 'Decisions & Timing',
    image: '/media/stock-woman-outdoor-cafe.jpg',
  },
  {
    slug: 'the-man-who-wanted-his-younger-eyes-back',
    title: 'The Man Who Wanted His Younger Eyes Back',
    date: 'April 2026',
    description: 'He didn\'t just want better vision. He wanted to feel the way he did before glasses became part of his identity. Sometimes the most important surgical decision is choosing to wait.',
    cluster: 'Decisions & Timing',
    image: '/media/stock-men-car-show.jpg',
  },
  {
    slug: 'when-guilt-replaces-explanation',
    title: 'When Guilt Replaces Explanation',
    date: 'April 2026',
    description: 'A patient was told his cataract complication was his fault. It wasn\'t. What happens when blame replaces compassion in medicine.',
    cluster: 'Ethics & Trust',
    image: '/media/x-patient-contemplation-waiting-room.jpg',
  },
  {
    slug: 'the-reader-who-almost-gave-up-her-books',
    title: 'The Reader Who Almost Gave Up Her Books',
    date: 'April 2026',
    description: 'An 81-year-old avid reader delayed surgery for years because nobody told her she had a choice about how she would see afterward.',
    cluster: 'Lens Selection',
    image: '/media/stock-woman-dog-livingroom.png',
  },
  {
    slug: 'permission-to-see-again',
    title: 'Permission to See Again',
    date: 'April 2026',
    description: 'A woman spent six years caring for her husband. When she finally came in for her own eyes, she didn\'t need a surgical plan. She needed permission.',
    cluster: 'Decision Making',
    image: '/media/stock-family-golden-hour-walk.jpg',
  },
  {
    slug: 'the-number-that-wasnt-the-problem',
    title: 'The Number That Wasn\'t the Problem',
    date: 'April 2026',
    description: 'A man with keratoconus saw residual astigmatism after cataract surgery and wanted a lens exchange. The real answer was understanding why that number wasn\'t what it seemed.',
    cluster: 'Surgical Restraint',
    image: '/media/stock-friends-indoor-portrait.jpg',
  },
  {
    slug: 'when-more-isnt-better',
    title: 'When More Isn\'t Better',
    date: 'April 2026',
    description: 'A 32-year-old had a multifocal lens, then a YAG, then LASIK. A year later she still wasn\'t seeing right. Sometimes each fix creates the need for the next one.',
    cluster: 'Expectations & Reality',
    image: '/media/stock-couple-night-walk-dog.jpg',
  },
  {
    slug: 'twenty-years-forward',
    title: 'Twenty Years Forward',
    date: 'April 2026',
    description: 'She chose a multifocal lens at 68. Now at 88 with macular degeneration, that decision looks different. What this teaches about lens choices, tradeoffs, and making decisions for a future you cannot predict.',
    cluster: 'Lens Selection',
    image: '/media/stock-seniors-resort-promenade-night.jpg',
  },
];

export default function InsightsPage() {
  return (
    <>
      <VideoBackground
        src="/media/ambient-desert-sunrise.mp4"
        poster="/media/stock-couple-market-sunlight.jpg"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{position: 'relative', overflow: 'hidden'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Insights from the <strong>Clinic</strong></h1>
            <p className="page-hero-sub">These aren't medical articles. They're reflections - on the patients I see, the decisions we navigate together, and what I've learned about the space between a diagnosis and a choice.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white" style={{paddingBottom: 0}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="content-image">
            <Image
              src="/media/20210109_095037.jpg"
              alt="Inside Desert Vision Center - where these conversations happen"
              width={800}
              height={380}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="content-image" style={{maxWidth: '800px', margin: '0 auto 48px'}}>
            <Image
              src="/media/stock-seniors-outdoor-toast.jpg"
              alt="Seniors toasting at an outdoor dinner - the moments that matter after cataract surgery"
              width={800}
              height={533}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <StaggerChildren className="insights-grid" staggerDelay={0.08}>
            {insights.map((insight, i) => (
              <StaggerItem key={insight.slug} direction={i % 2 === 0 ? 'left' : 'right'}>
                <ScaleOnScroll scaleRange={[0.95, 1]} opacityRange={[0.8, 1]}>
                  <TiltCard style={{position: 'relative', borderRadius: '12px'}}>
                    <Link href={`/insights/${insight.slug}`} className="insight-card insight-card-visual">
                      <div className="insight-card-image">
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          width={600}
                          height={340}
                          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
                        />
                      </div>
                      <div className="insight-card-body">
                        <span className="insight-cluster">{insight.cluster}</span>
                        <h2 className="insight-card-title">{insight.title}</h2>
                        <p className="insight-card-desc">{insight.description}</p>
                        <span className="insight-date">{insight.date}</span>
                      </div>
                    </Link>
                  </TiltCard>
                </ScaleOnScroll>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
