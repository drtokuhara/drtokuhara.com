import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema } from '../schema';
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
    slug: 'choosing-the-standard-lens',
    title: 'The Standard Lens Is Not a Consolation Prize',
    date: 'May 2026',
    description: 'The standard monofocal lens delivers excellent distance vision. For many patients, it is the right choice. Not a downgrade, not a compromise. When and why the standard lens is genuinely the best option.',
    cluster: 'Lens Selection',
    image: '/media/hero-standard-lens-cataract-surgery.png',
  },
  {
    slug: 'laser-vs-traditional-cataract-surgery',
    title: 'Laser vs Traditional Cataract Surgery: What\'s the Real Difference?',
    date: 'May 2026',
    description: 'Patients hear "laser" and assume it is automatically better. The truth is more nuanced. What the femtosecond laser actually does, what it does not do, and how to decide which approach is right for your eyes.',
    cluster: 'The Procedure',
    image: '/media/stock-couple-patio-scenic-view.jpg',
  },
  {
    slug: 'when-do-i-need-cataract-surgery',
    title: 'Do I Really Need Cataract Surgery Right Now? How to Know When It\'s Time',
    date: 'May 2026',
    description: 'The most common question in cataract consultations. No emergency, no rush, but waiting too long has real risks. How to self-assess, what happens when patients delay, and why the decision is always yours.',
    cluster: 'Decisions & Timing',
    image: '/media/stock-couple-lawn-sunset-coachella.jpg',
  },
  {
    slug: 'how-to-choose-a-cataract-surgeon',
    title: 'How to Choose a Cataract Surgeon: 5 Things That Actually Matter',
    date: 'May 2026',
    description: 'Fellowship training, surgical volume, complication management, physician independence, and honest communication. Here is what I would tell my own family about choosing a cataract surgeon.',
    cluster: 'Choosing Your Surgeon',
    image: '/media/stock-couple-outdoor-sunshine.jpg',
  },
  {
    slug: 'when-cataract-surgery-doesnt-go-as-planned',
    title: 'When Cataract Surgery Doesn\'t Go As Planned',
    date: 'May 2026',
    description: 'Posterior capsule rupture, dislocated lenses, retained fragments, cloudy vision, premium lens problems. If something went wrong, you deserve answers. Most complications can be evaluated, explained, and often improved.',
    cluster: 'Complications & Trust',
    image: '/media/hero-when-surgery-doesnt-go-as-planned.png',
    href: '/when-cataract-surgery-doesnt-go-as-planned',
  },
  {
    slug: 'when-cataract-surgery-goes-wrong',
    title: 'What Happens When Cataract Surgery Goes Wrong (And How We Fix It)',
    date: 'May 2026',
    description: 'Complications are rare but real. What separates a good surgeon is how they handle the unexpected. An honest look at capsule tears, dropped lenses, IOL exchanges, and why experience matters most.',
    cluster: 'Complications & Trust',
    image: '/media/stock-couple-desert-overlook.jpg',
  },
  {
    slug: 'when-experience-speaks',
    title: 'When Experience Speaks',
    date: 'May 2026',
    description: 'The principles a surgeon carries into every operating room are invisible. But they determine everything. A reflection on Dr. Howard Gimbel, intergenerational surgical wisdom, and a case where decades of training made all the difference.',
    cluster: 'Surgical Heritage',
    image: '/media/stock-seniors-formal-resort-dusk.jpg',
  },
  {
    slug: 'cataract-surgery-step-by-step',
    title: 'Cataract Surgery Step by Step: What Actually Happens',
    date: 'May 2026',
    description: 'A surgeon with over 20,000 procedures walks you through exactly what happens before, during, and after cataract surgery. No jargon, no sugarcoating.',
    cluster: 'The Procedure',
    image: '/media/hero-cataract-surgery-step-by-step.png',
  },
  {
    slug: 'first-week-after-cataract-surgery',
    title: 'Your First Week After Cataract Surgery: Day by Day',
    date: 'May 2026',
    description: 'What to expect each day during your first week of recovery. What is normal, what is not, when to call, and why the drops matter more than you think.',
    cluster: 'Recovery',
    image: '/media/hero-first-week-after-cataract-surgery.png',
  },
  {
    slug: 'is-cataract-surgery-painful',
    title: 'Is Cataract Surgery Painful? Here\'s the Honest Answer',
    date: 'May 2026',
    description: 'The fear of pain keeps more patients from cataract surgery than any other concern. Here is what you actually feel, what you see, and why the anticipation is almost always worse than the reality.',
    cluster: 'Fear & Reassurance',
    image: '/media/stock-woman-portrait-sunlit-resort.jpg',
  },
  {
    slug: 'the-lens-nobody-talks-about',
    title: 'The Lens Nobody Talks About',
    date: 'May 2026',
    description: 'He arrived with a folder full of research, convinced he needed the most expensive multifocal lens. His dry eye and early macular changes told a different story. The best lens is the one that matches your eyes, not the one that costs the most.',
    cluster: 'Lens Selection',
    image: '/media/stock-couple-bar-golf-view.jpg',
  },
  {
    slug: 'what-i-learned-from-the-surgeon-who-trained-me',
    title: 'What I Learned From the Surgeon Who Trained Me',
    date: 'May 2026',
    description: 'A residency moment with Dr. Howard Gimbel that changed everything. Not a technique, but a principle: your reaction to the complication is the problem. How mentorship shapes not just skill, but surgical philosophy.',
    cluster: 'Philosophy of Care',
    image: '/media/elderly-man-courtyard-desert.jpg',
  },
  {
    slug: 'twenty-years-forward',
    title: 'Twenty Years Forward',
    date: 'May 2026',
    description: 'She thought she just needed new glasses. Her optician adjusted her prescription every year, but things still weren\'t right. The exam revealed cataracts. A reflection on how patients accept gradual vision loss as aging, and the consultation that changes everything.',
    cluster: 'Clinical Insight',
    image: '/media/stock-seniors-resort-promenade-night.jpg',
  },
  {
    slug: 'when-the-eye-surface-changes-everything',
    title: 'When the Eye Surface Changes Everything',
    date: 'May 2026',
    description: 'She did everything right. Multiple adjustment treatments, long drives to Los Angeles, months of follow-up visits. But her vision never settled. The problem was not the lens. It was the surface of the eye.',
    cluster: 'Clinical Insight',
    image: '/media/stock-woman-portrait-pool-dusk.jpg',
  },
  {
    slug: 'when-the-unexpected-leads-to-the-right-outcome',
    title: 'When the Unexpected Leads to the Right Outcome',
    date: 'May 2026',
    description: 'A surgical complication left him with hand-motion vision. What looked like a catastrophe revealed a hidden condition that changed everything we thought we knew about his eyes.',
    cluster: 'Patient Stories',
    image: '/media/stock-couple-stargazing-desert.jpg',
  },
  {
    slug: 'the-eye-you-least-suspect',
    title: 'The Eye You Least Suspect',
    date: 'May 2026',
    description: 'He assumed his right eye was getting worse. The real problem was in his left: wet macular degeneration had emerged silently. A reflection on anchoring bias, diagnostic humility, and why we examine both eyes every time.',
    cluster: 'Clinical Insight',
    image: '/media/stock-man-portrait-outdoor-dining.jpg',
  },
  {
    slug: 'the-consultation-that-changed-everything',
    title: 'The Consultation That Changed Everything',
    date: 'May 2026',
    description: 'Harold Baird had been to three ophthalmologists in ten-minute appointments before he came to see me. His first visit with me lasted 70 minutes. This is what a consultation should feel like.',
    cluster: 'Philosophy of Care',
    image: '/media/stock-couple-brunch-patio.jpg',
  },
  {
    slug: 'the-needle-that-wasnt-there',
    title: 'The Needle That Wasn\'t There',
    date: 'May 2026',
    description: 'An 86-year-old woman avoided surgery for years because of a needle that is no longer used. Her late husband was an ophthalmologist. A story about outdated fears and how medicine evolves.',
    cluster: 'Decisions & Timing',
    image: '/media/elderly-woman-poolside-desert.jpg',
  },
  {
    slug: 'do-i-really-need-surgery',
    title: '"Do I Really Need Cataract Surgery Yet?"',
    date: 'May 2026',
    description: 'A 70-year-old man was told surgery could eliminate his glasses. His vision was 20/25+. After an honest exam, we decided together to wait.',
    cluster: 'Surgical Restraint',
    image: '/media/stock-man-walking-dog-sunset.png',
  },
  {
    slug: 'when-the-surgeon-says-wait',
    title: 'When the Surgeon Says Wait',
    date: 'May 2026',
    description: 'Many surgeons default to yes because surgery generates revenue. A reflection on the courage it takes to tell a patient they are not ready, and why that honesty builds lasting trust.',
    cluster: 'Surgical Restraint',
    image: '/media/stock-seniors-evening-stroll.jpg',
  },
  {
    slug: 'when-ai-recommends-your-lens',
    title: 'When AI Recommends Your Lens... But Your Eye Tells a Different Story',
    date: 'May 2026',
    description: 'A patient used AI to choose his cataract lens. Every tool agreed. But his eyes told a different story. A reflection on the limits of AI in medicine.',
    cluster: 'Clinical Judgment',
    image: '/media/stock-couple-market-sunlight.jpg',
  },
  {
    slug: 'are-premium-lenses-worth-it',
    title: 'Are Premium Lens Implants Worth It?',
    date: 'May 2026',
    description: 'An honest reflection on premium versus standard lens implants. The answer depends on your life, your eyes, and the quality of your pre-surgical conversation.',
    cluster: 'Lens Selection',
    image: '/media/stock-couple-pool-mountain-view.jpg',
  },
  {
    slug: 'five-questions-before-surgery',
    title: '5 Questions to Ask Before Cataract Surgery',
    date: 'May 2026',
    description: 'Your surgeon should welcome every one of them. The five most important questions to ask before cataract surgery, and what the answers reveal.',
    cluster: 'Decisions & Timing',
    image: '/media/stock-couple-outdoor-dining-view.jpg',
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
    image: '/media/stock-couple-sunset-cooking.jpg',
  },
  {
    slug: 'when-patients-wait',
    title: 'When Patients Wait',
    date: 'April 2026',
    description: 'Her outcome was excellent. Her biggest regret was that she didn\'t do it sooner. The psychology of timing, outcome bias, and why readiness is not the same as candidacy.',
    cluster: 'Decisions & Timing',
    image: '/media/elderly-woman-window-desert-view.png',
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
    slug: 'life-after-cataract-surgery',
    title: 'Life After Cataract Surgery: 5 Things Patients Say They Didn\'t Expect',
    date: 'May 2026',
    description: 'Brighter colors, better night driving, emotional moments, and the most common reaction: why didn\'t I do this sooner? Real things patients report after cataract surgery that nobody warned them about.',
    cluster: 'Patient Stories',
    image: '/media/stock-couple-wildflower-field.jpg',
  },
  {
    slug: 'cataract-referral-kickbacks',
    title: 'What Are Cataract Referral Kickbacks? What Every Patient Should Know',
    date: 'May 2026',
    description: 'Some eye care providers receive financial incentives for referring patients to specific surgeons. Co-management fees, facility ownership, referral patterns, and why physician independence matters.',
    cluster: 'Ethics & Trust',
    image: '/media/stock-group-cafe-outdoor.jpg',
  },
  {
    slug: 'when-more-isnt-better',
    title: 'When More Isn\'t Better',
    date: 'April 2026',
    description: 'A 32-year-old had a multifocal lens, then a YAG, then LASIK. A year later she still wasn\'t seeing right. Sometimes each fix creates the need for the next one.',
    cluster: 'Expectations & Reality',
    image: '/media/stock-woman-portrait-evening-glamour.jpg',
  },
  {
    slug: 'what-is-ora-machine',
    title: 'What Is the ORA Machine in Cataract Surgery?',
    date: 'May 2026',
    description: 'Intraoperative aberrometry sounds impressive. But what does the ORA machine actually do, when does it help, and when should you not rely on it? A surgeon\'s honest take.',
    cluster: 'The Procedure',
    image: '/media/stock-couple-night-restaurant.jpg',
  },
  {
    slug: 'second-opinion-cataract-surgery',
    title: 'Getting a Second Opinion Before Cataract Surgery',
    date: 'May 2026',
    description: 'If something feels off about the plan, the pressure, or the conversation, a second opinion is not an insult. It is good judgment. Here is what to look for.',
    cluster: 'Ethics & Trust',
    image: '/media/stock-couple-evening-walk-dog.jpg',
  },
  {
    slug: 'panoptix-vs-panoptix-pro',
    title: 'PanOptix vs PanOptix Pro: What Changed and Does It Matter?',
    date: 'May 2026',
    description: 'An honest comparison of both generations of Alcon\'s trifocal lens. What improved in the Pro, whether it matters for your surgery, and a patient who has one of each.',
    cluster: 'Lens Selection',
    image: '/media/hero-panoptix-vs-panoptix-pro.png',
    href: '/panoptix-vs-panoptix-pro',
  },
  {
    slug: 'cataract-pre-op-appointment',
    title: 'What Happens at a Cataract Pre-Op Appointment',
    date: 'May 2026',
    description: 'The appointment before surgery is where the real decisions happen. What measurements are taken, what questions to ask, and why this visit matters more than you think.',
    cluster: 'The Procedure',
    image: '/media/stock-couple-sunny-pathway-luxury.jpg',
  },
  {
    slug: 'medicare-cataract-surgery',
    title: 'Does Medicare Cover Cataract Surgery?',
    date: 'May 2026',
    description: 'The short answer is yes. The longer answer involves understanding what is covered, what is not, and where the real out-of-pocket costs come from.',
    cluster: 'Decisions & Timing',
    image: '/media/stock-couple-produce-market.jpg',
  },
];

const insightsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Insights from the Clinic',
  description: 'Clinical reflections from Dr. Keith Tokuhara on cataract surgery, lens implant decisions, and patient care.',
  url: 'https://drtokuhara.com/insights',
  author: {
    '@type': 'Physician',
    name: 'Dr. Keith Tokuhara',
    url: 'https://drtokuhara.com/about',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Insights', href: '/insights' },
]);

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
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
                    <Link href={insight.href || `/insights/${insight.slug}`} className="insight-card insight-card-visual">
                      <div className="insight-card-image">
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          width={600}
                          height={340}
                          style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center 30%', borderRadius: '12px 12px 0 0' }}
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
