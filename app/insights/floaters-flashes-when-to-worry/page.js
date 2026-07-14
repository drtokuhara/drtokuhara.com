import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Floaters, Flashes, and When to Worry | Dr. Keith Tokuhara',
  description: 'Eye floaters and flashing lights are common, but sometimes they signal something serious. Dr. Tokuhara explains what causes floaters, when flashes mean danger, and the signs that need same-day evaluation.',
  keywords: ['eye floaters causes', 'floaters in vision', 'flashing lights in eye', 'retinal detachment symptoms', 'when to worry about floaters', 'new floaters sudden', 'vitreous detachment', 'floaters and flashes eye doctor', 'curtain over vision'],
  alternates: { canonical: '/insights/floaters-flashes-when-to-worry' },
  openGraph: {
    title: 'Floaters, Flashes, and When to Worry | Dr. Keith Tokuhara',
    description: 'An ophthalmologist explains the difference between harmless floaters and the warning signs that need urgent evaluation.',
    url: 'https://drtokuhara.com/insights/floaters-flashes-when-to-worry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Floaters, Flashes, and When to Worry',
    description: 'Most floaters are harmless. But certain changes in your vision need same-day evaluation. Here is how to tell the difference.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes floaters in your vision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most floaters are caused by age-related changes in the vitreous, the gel-like substance that fills the inside of the eye. As you get older, the vitreous gradually shrinks and becomes more liquid. Small clumps of collagen fibers within the vitreous cast shadows on the retina, and those shadows are what you perceive as floaters. They may look like dots, threads, cobwebs, or small rings. This process is a normal part of aging and is more common after age 50, in people who are nearsighted, or after cataract surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are floaters dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most floaters are harmless and simply a nuisance. However, a sudden increase in the number of floaters, especially when accompanied by flashing lights or a shadow or curtain in your peripheral vision, can be a sign of a retinal tear or detachment. These conditions require prompt evaluation and treatment. A single small floater that has been present for months or years and has not changed is almost always benign. The key is whether the floaters are new, sudden, or associated with other symptoms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do flashing lights in your eye mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flashing lights in your vision usually mean that the vitreous is pulling on the retina. As the vitreous separates from the retinal surface, a process called posterior vitreous detachment, the mechanical traction stimulates the retina and produces the sensation of light even though no light is entering the eye. Flashes are more noticeable in dim lighting or at night. Most of the time, the vitreous separates cleanly and the flashes gradually stop over days to weeks. But if the vitreous pulls hard enough to tear the retina, that tear can lead to a retinal detachment if not treated promptly.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I see an eye doctor for floaters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should see an eye doctor the same day if you notice a sudden shower of new floaters, flashing lights in your vision, a shadow or curtain coming across your visual field, or a sudden decrease in vision. These symptoms can indicate a retinal tear or detachment, which is a medical emergency. If you have had stable floaters for a long time with no change, you can discuss them at your next routine eye exam. The urgency depends on whether the symptoms are new and sudden versus old and unchanged.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a posterior vitreous detachment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A posterior vitreous detachment, or PVD, is a common age-related event in which the vitreous gel separates from the back surface of the eye, specifically from the retina. It happens to most people eventually, usually after age 60. Symptoms include new floaters and sometimes brief flashes of light. In most cases, a PVD is harmless and the symptoms improve gradually over weeks to months. However, a PVD can occasionally cause a retinal tear if the vitreous pulls too strongly on the retina during the separation process. This is why new onset of floaters and flashes warrants an eye exam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can floaters go away on their own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Floaters do not disappear entirely, but they often become less noticeable over time. The brain gradually learns to filter them out, and the floaters themselves may settle lower in the eye, out of the line of sight. For most people, floaters that were very bothersome when they first appeared become much less distracting after several weeks to months. In rare cases where floaters severely affect quality of life and do not improve, a procedure called vitrectomy can be considered, but it carries its own risks and is typically reserved for extreme situations.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Floaters, Flashes, and When to Worry',
    description: 'An ophthalmologist explains the difference between harmless floaters and the warning signs that need urgent evaluation, including retinal tears and detachment.',
    slug: '/insights/floaters-flashes-when-to-worry',
    datePublished: '2026-07-05',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Floaters, Flashes, and When to Worry', href: '/insights/floaters-flashes-when-to-worry' },
  ]),
  faqSchema,
];

export default function InsightFloatersFlashes() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-twilight-v2.mp4"
        poster="/media/ambient-desert-blue-hour.mp4"
        overlayOpacity={0.6}
        overlayColor="10, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Education</span>
          <h1>Floaters, Flashes, and <strong>When to Worry</strong></h1>
          <p className="page-hero-sub">Most of the time, floaters are harmless. But a few specific changes in your vision need same-day evaluation. Knowing the difference matters.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="July 5, 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Nearly every week, I see a patient who is worried about floaters. They describe small dark spots drifting across their vision, little threads or cobwebs that move when they try to look at them, shapes that seem to swim just out of focus. Some have been noticing them for years. Others woke up that morning and saw something new.
          </p>
          <p>
            The conversation that follows depends entirely on which of those two stories they are telling me. Because the floaters themselves are not the issue. The issue is what they represent, and whether the eye is telling you something that needs attention right now.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What <strong>Floaters</strong> Actually Are</h2>
          <p>
            The inside of your eye is filled with a clear gel called the vitreous. When you are young, the vitreous is firm and transparent, like a perfectly set gelatin. As you age, it begins to liquefy and shrink. Small strands of collagen within the gel clump together, forming tiny shadows that fall on your retina, the light-sensitive tissue at the back of the eye.
          </p>
          <p>
            Those shadows are floaters. They are not on the surface of your eye. They are inside it. That is why blinking does not clear them and why they drift when you move your gaze, always lagging slightly behind where you are trying to look.
          </p>
          <p>
            For most people, this process is gradual. A small floater appears in your thirties. Another joins it in your forties. By your fifties and sixties, you may have a collection of small spots that you have learned to ignore. This is normal aging. It does not mean something is wrong with your eye.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/vitreous-floaters-diagram.jpg"
              alt="Diagram showing the vitreous gel inside the eye with collagen strands casting shadows on the retina, illustrating how floaters form"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Floaters are shadows cast on the retina by tiny clumps of collagen inside the vitreous gel. They are inside the eye, not on its surface, which is why they drift when you move your gaze.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">When the Vitreous <strong>Lets Go</strong></h2>
          <p>
            There is a moment in most people's lives when the vitreous separates from the retina. This is called a posterior vitreous detachment, or PVD, and it is one of the most common events in ophthalmology. It happens to most people after age 60, though it can occur earlier in people who are nearsighted, have had eye surgery, or have experienced trauma to the eye.
          </p>
          <p>
            When the vitreous pulls away from the retina, it often creates a sudden burst of new floaters. Patients describe it as a shower of spots, a cloud of tiny dots, or a large new ring-shaped floater that was not there before. Some see cobweb-like strands. The onset is sudden, sometimes over the course of minutes.
          </p>
          <p>
            This is also when flashing lights may appear. As the vitreous tugs on the retina during the separation, the mechanical pull stimulates the retinal cells. Your brain interprets that stimulation as light, even though no light is actually entering the eye. Patients describe the flashes as brief arcs of light in the periphery, like a camera flash going off to the side, or like seeing lightning in the corner of their vision. Flashes are often more noticeable in dim lighting or when the eyes are closed.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>A posterior vitreous detachment is the most common cause of new floaters and flashes. In most cases, it is harmless. But it is also the mechanism behind most retinal tears. That is why it requires evaluation.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Danger</strong> Window</h2>
          <p>
            Most of the time, the vitreous separates cleanly. It pulls away from the retinal surface, the flashes gradually stop over days to weeks, and the new floaters slowly become less prominent as the brain learns to filter them out. No treatment is needed.
          </p>
          <p>
            But sometimes the vitreous does not separate cleanly. If it is adhered strongly to a particular spot on the retina, the pulling force can tear the retinal tissue. A retinal tear is a small rip in the thin layer of tissue that captures light and sends signals to your brain.
          </p>
          <p>
            A tear by itself does not cause vision loss. But fluid from inside the eye can seep through that tear and get behind the retina, lifting it away from the wall of the eye like wallpaper peeling from a wall. That is a retinal detachment, and it is a true surgical emergency.
          </p>
          <p>
            The window between a retinal tear forming and a full detachment developing can be hours, days, or sometimes weeks. This is why timing matters. A retinal tear caught early can be sealed with a brief laser procedure in the office, preventing detachment entirely. A retinal detachment that has already occurred requires surgery to repair, and the visual outcome depends on how much of the retina detached and how quickly it was treated.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/retinal-tear-warning-signs.jpg"
              alt="Visual representation of warning signs: sudden increase in floaters, flashing lights, and a shadow or curtain across peripheral vision"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">The warning signs of a retinal tear: a sudden shower of new floaters, flashing lights, and a dark shadow or curtain moving across your field of vision. Any of these warrants same-day evaluation.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Signs That <strong>Need Attention</strong></h2>
          <p>
            After more than twenty years of examining patients with floaters, I have learned that patients are remarkably good at distinguishing between old floaters and something new. They know their eyes. When a patient tells me something changed today, I listen.
          </p>
          <p>
            Here are the specific symptoms that warrant same-day evaluation:
          </p>
          <ul style={{marginBottom: '24px'}}>
            <li style={{marginBottom: '12px'}}><strong>A sudden shower of new floaters.</strong> Not one small new spot, but a dramatic increase. Patients often describe it as "a bunch of dots appeared all at once" or "it looked like pepper was floating in my vision."</li>
            <li style={{marginBottom: '12px'}}><strong>Flashing lights.</strong> Brief arcs or streaks of light, especially in the periphery. These may be more prominent at night or in a dark room. Flashes that have been occurring for months and are unchanged are different from flashes that started today.</li>
            <li style={{marginBottom: '12px'}}><strong>A shadow or curtain in your peripheral vision.</strong> This is the symptom that concerns me most. It can look like a dark veil creeping in from the side, top, or bottom of your visual field. It usually does not hurt. It may be subtle at first. This can indicate that a retinal detachment is already in progress.</li>
            <li style={{marginBottom: '12px'}}><strong>A sudden decrease in vision.</strong> If your vision was fine yesterday and blurry today, with or without floaters, that needs evaluation. Several conditions beyond retinal problems can cause this, and all of them need attention.</li>
          </ul>

          <BlurReveal><div className="pull-quote">
            <p>"I thought it was just floaters. But when I saw the shadow, I knew something was different. I called the office that morning, and by the afternoon Dr. Tokuhara had treated a retinal tear with laser. He told me if I had waited a week, I might have needed surgery."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Signs That <strong>Can Wait</strong></h2>
          <p>
            Not every floater is an emergency. In fact, most are not.
          </p>
          <p>
            If you have had a small, stable floater for months or years that has not changed, that is almost certainly benign. If you notice a single tiny new spot but have no flashes, no shadow, and no change in vision, it is reasonable to call your eye doctor and describe the symptoms rather than rushing to the emergency room. Your doctor can determine the appropriate timing for an examination based on what you describe.
          </p>
          <p>
            The distinction I use in my own practice is simple: <strong>sudden and multiple versus gradual and isolated.</strong> A sudden shower of floaters with flashes is urgent. A single small floater that appeared sometime last week is worth mentioning at your next visit.
          </p>
          <p>
            I also tell patients that anxiety about floaters is common and understandable. Once you become aware of a floater, it is hard to stop noticing it. You may find yourself constantly checking your vision, looking at white walls, scanning for changes. This is a normal response, not a sign that something is getting worse. Over time, most people find that their brain adapts and the floater fades into the background.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Who Is at <strong>Higher Risk</strong></h2>
          <p>
            Some people are more likely to experience a posterior vitreous detachment, and therefore more likely to develop a retinal tear. Understanding your risk helps you know when to be more alert to changes in your vision.
          </p>
          <ul style={{marginBottom: '24px'}}>
            <li style={{marginBottom: '12px'}}><strong>Nearsightedness (myopia).</strong> If you wear glasses or contacts for distance vision, especially if your prescription is moderate to high, your eye is longer than average. A longer eye means a thinner retina and a vitreous that tends to separate earlier. Nearsighted individuals have a higher rate of retinal tears and detachments.</li>
            <li style={{marginBottom: '12px'}}><strong>After <Link href="/insights/cataract-surgery-step-by-step">cataract surgery</Link>.</strong> Removing the cataract and placing a new lens changes the environment inside the eye. The vitreous may separate sooner after surgery than it would have otherwise. This does not mean cataract surgery caused a problem. It means the natural timeline was accelerated.</li>
            <li style={{marginBottom: '12px'}}><strong>Family history of retinal detachment.</strong> There is a genetic component to retinal structure and vitreous attachment patterns. If a close family member had a retinal detachment, your risk is higher.</li>
            <li style={{marginBottom: '12px'}}><strong>Eye trauma.</strong> A significant blow to the eye or head can accelerate vitreous separation and increase the chance of a tear.</li>
            <li style={{marginBottom: '12px'}}><strong>Diabetes.</strong> <Link href="/insights/cataract-surgery-and-diabetes">Diabetic eye disease</Link> can affect the retina in ways that increase vulnerability to traction and tears. Patients with diabetes should be especially attentive to sudden visual changes.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Exam <strong>Looks Like</strong></h2>
          <p>
            When you come in for evaluation of new floaters or flashes, the most important part of the visit is a dilated eye exam. I place drops in your eyes to widen the pupils, which allows me to see the retina clearly from the center all the way to the far periphery where tears are most likely to occur.
          </p>
          <p>
            Using specialized lenses and a bright light, I examine the retinal surface in detail. I am looking for tears, thin spots, areas where the vitreous is still attached and pulling, and any signs that fluid has started to accumulate behind the retina.
          </p>
          <p>
            The exam takes about 15 to 20 minutes once the eyes are dilated. It is painless, though the light is bright. Your vision will be blurry for several hours after dilation, so you will want to have someone available to drive you or plan to wait until the drops wear off.
          </p>
          <p>
            If I find a retinal tear, I can often treat it the same day with laser. The laser creates a controlled area of adhesion around the tear, essentially welding the retina down and preventing fluid from getting underneath. The procedure takes a few minutes, is done in the office, and most patients feel only a mild sensation during treatment.
          </p>
          <p>
            If the retina looks healthy and the vitreous is simply separating in the expected way, I send you home with reassurance and a clear set of instructions about what to watch for in the coming weeks. In some cases, I will ask you to return in four to six weeks for a follow-up exam, because a small percentage of retinal tears develop in the weeks after the initial vitreous separation, not during it.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/dilated-retina-exam.jpg"
              alt="An ophthalmologist performing a dilated retinal examination with specialized lenses"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">A dilated exam is the single most important step when evaluating new floaters or flashes. It allows the surgeon to see the entire retina, including the far periphery where tears most commonly occur.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Living with <strong>Floaters</strong></h2>
          <p>
            For the majority of patients, the answer is simple: the floaters are not dangerous, and over time they will bother you less than they do right now.
          </p>
          <p>
            This can be frustrating to hear, especially when a floater is prominent and you notice it every time you look at the sky, read a book, or work on a computer. But the brain is remarkably good at adapting. Within weeks to months, most patients report that the floaters are still technically there but they have stopped paying attention to them. The floaters may also physically settle lower in the eye, moving out of the central line of sight.
          </p>
          <p>
            I sometimes compare it to a clock ticking in a quiet room. At first, it is all you can hear. After a while, you stop hearing it entirely, even though the clock has not gotten quieter. Your brain has simply decided that it is not important information and filters it out. Floaters follow a similar pattern.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The goal is not to eliminate floaters. It is to confirm they are harmless, understand what they mean, and know what changes would require you to come back.</strong></p>
          </div></BlurReveal>

          <p>
            In rare cases where floaters are so dense and central that they significantly impair quality of life, a surgical procedure called vitrectomy can be considered. This involves removing the vitreous gel and replacing it with a clear saline solution. It is effective but carries real surgical risks, including cataract acceleration and, ironically, retinal detachment. I reserve this option for patients who are genuinely debilitated by their floaters after months of observation, and only after a thorough discussion of the tradeoffs.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Takeaway</strong></h2>
          <p>
            Floaters are one of the most common reasons patients call my office. Most of the time, I can provide reassurance. The eye is aging normally, the retina is healthy, and the symptoms will gradually become less noticeable.
          </p>
          <p>
            But that reassurance only comes after an exam. And the timing of that exam matters.
          </p>
          <p>
            If you experience a sudden shower of new floaters, flashing lights, a shadow or curtain in your vision, or any sudden change in visual clarity, call your eye doctor that day. Do not wait for a routine appointment. Do not assume it will resolve on its own. These symptoms need a dilated exam to rule out a retinal tear or detachment.
          </p>
          <p>
            If you have had stable, familiar floaters for months or years and nothing has changed, bring it up at your next exam. It is worth mentioning, but it does not require urgent evaluation.
          </p>
          <p>
            The difference between a floater that is annoying and a floater that is dangerous is usually context: when it appeared, how quickly, and what other symptoms came with it. You do not need to diagnose yourself. You just need to know when to call.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h3 className="section-title-sm">Related <strong>Reading</strong></h3>
          <ul className="insight-related-list">
            <li><Link href="/insights/macular-degeneration-wet-vs-dry">Macular Degeneration: Wet vs Dry</Link></li>
            <li><Link href="/insights/cataract-surgery-and-diabetes">Cataract Surgery and Diabetes</Link></li>
            <li><Link href="/insights/cataract-surgery-step-by-step">Cataract Surgery Step by Step</Link></li>
            <li><Link href="/insights/when-cataracts-are-not-the-real-problem">When Cataracts Are Not the Real Problem</Link></li>
            <li><Link href="/insights/posterior-capsule-opacification">Posterior Capsule Opacification</Link></li>
            <li><Link href="/insights/subconjunctival-hemorrhage">Subconjunctival Hemorrhage</Link></li>
            <li><Link href="/insights/glaucoma-and-cataracts">Glaucoma and Cataracts: Managing Two Conditions at Once</Link></li>
          </ul>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container content-narrow text-center">
          <h2>New Floaters or Flashes? Do Not Wait.</h2>
          <p>If you experience a sudden shower of new floaters, flashing lights, or a shadow in your vision, contact your eye doctor that day. Early evaluation can catch retinal tears before they become retinal detachments, and prompt treatment makes all the difference.</p>
          <p>Not sure if your symptoms are urgent? Call your eye doctor's office and describe what you are experiencing. They can help you determine whether you need a same-day visit or can wait for a routine appointment.</p>
        </div>
      </section>
    </>
  );
}
