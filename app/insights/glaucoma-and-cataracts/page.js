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
  title: 'Glaucoma and Cataracts: Managing Two Conditions at Once | Dr. Keith Tokuhara',
  description: 'Many patients have both glaucoma and cataracts. Dr. Tokuhara explains how both conditions interact, how glaucoma changes surgical planning, MIGS options during cataract surgery, and what patients should know before scheduling.',
  keywords: ['glaucoma and cataracts', 'cataract surgery with glaucoma', 'glaucoma and cataract surgery together', 'MIGS cataract surgery', 'iStent cataract', 'can you have cataract surgery with glaucoma', 'glaucoma drops after cataract surgery', 'managing glaucoma and cataracts'],
  alternates: { canonical: '/insights/glaucoma-and-cataracts' },
  openGraph: {
    title: 'Glaucoma and Cataracts: Managing Two Conditions at Once | Dr. Keith Tokuhara',
    description: 'A cataract surgeon explains how glaucoma changes the surgical conversation, what MIGS can offer, and why managing both conditions requires a broader lens.',
    url: 'https://drtokuhara.com/insights/glaucoma-and-cataracts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glaucoma and Cataracts: Managing Two Conditions at Once',
    description: 'When patients have glaucoma and cataracts, the surgical plan changes. Here is what an experienced surgeon considers.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you have cataract surgery if you have glaucoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most patients with glaucoma can safely have cataract surgery. In fact, cataract surgery alone often lowers eye pressure slightly, which can benefit glaucoma management. When appropriate, a minimally invasive glaucoma procedure (MIGS) can be performed at the same time as cataract surgery to further reduce pressure or decrease dependence on glaucoma eye drops. The key is that your surgeon understands both conditions and adjusts the surgical plan accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MIGS and how does it work during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MIGS stands for minimally invasive glaucoma surgery. These are small, low-risk procedures that can be performed through the same incision used for cataract surgery, adding only a few minutes to the operation. Options include tiny stents that improve the eye\'s natural drainage, procedures that open the drainage canal directly, or techniques that reduce fluid production. MIGS is best suited for mild to moderate glaucoma and can reduce or sometimes eliminate the need for daily glaucoma drops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does glaucoma affect which lens implant I can get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Glaucoma can influence lens selection. Patients with significant glaucoma-related visual field loss may not be ideal candidates for multifocal lens implants, because multifocal lenses divide light and can reduce contrast sensitivity. A monofocal or extended depth-of-focus lens may provide better functional vision for someone whose peripheral vision is already compromised. Your surgeon should evaluate the extent of glaucoma damage before making a lens recommendation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I still need glaucoma drops after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the severity of your glaucoma and whether a MIGS procedure is performed during cataract surgery. Some patients are able to reduce or stop their glaucoma drops after combined cataract and MIGS surgery. Others continue their drops but at a lower dose. Patients with advanced glaucoma will likely still need medications. Your surgeon can give you a realistic expectation based on your specific situation, but it is important not to stop any drops without your doctor\'s guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cataract surgery riskier if you have glaucoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract surgery in patients with glaucoma requires more careful planning, but it is not significantly riskier when performed by an experienced surgeon. Considerations include smaller pupils from long-term glaucoma drop use, the type of glaucoma present, whether a MIGS procedure will be combined, and how to manage eye pressure in the early postoperative period. These are routine adjustments for a surgeon who regularly manages both conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between glaucoma and cataracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataracts and glaucoma are two separate conditions that often coexist, especially in older adults. A cataract is a clouding of the natural lens inside the eye, which causes blurry or dim vision and is treated with surgery to replace the lens. Glaucoma is damage to the optic nerve, usually related to elevated eye pressure, that causes irreversible peripheral vision loss. Cataracts are reversible with surgery. Glaucoma damage is permanent, though further damage can be prevented with treatment.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Glaucoma and Cataracts: Managing Two Conditions at Once',
    description: 'An experienced cataract surgeon explains how glaucoma changes surgical planning, what MIGS can offer during cataract surgery, and how patients with both conditions can make informed decisions.',
    slug: '/insights/glaucoma-and-cataracts',
    datePublished: '2026-07-12',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Glaucoma and Cataracts', href: '/insights/glaucoma-and-cataracts' },
  ]),
  faqSchema,
];

export default function InsightGlaucomaAndCataracts() {
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
          <span className="insight-hero-cluster">Clinical Authority</span>
          <h1>Glaucoma and Cataracts: Managing <strong>Two Conditions at Once</strong></h1>
          <p className="page-hero-sub">When you have both glaucoma and cataracts, the surgical plan changes. Understanding how these conditions interact helps you make better decisions about your care.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="July 12, 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            At least once a week, a patient sits down in my office for a cataract evaluation and tells me, almost as an afterthought, that they also have glaucoma. Sometimes they have been on eye drops for years. Sometimes they have had laser treatments. And sometimes their previous doctor mentioned glaucoma but never explained what it meant for their cataract surgery.
          </p>
          <p>
            That last group concerns me the most. Because when glaucoma and cataracts coexist, the conversation about surgery changes in important ways. Not because surgery becomes dangerous, but because we have an opportunity to address both problems at once, and missing that opportunity means the patient may not get the full benefit of the procedure.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Two Conditions, <strong>One Eye</strong></h2>
          <p>
            Cataracts and glaucoma are different diseases that happen to share the same real estate. A cataract is a clouding of the natural lens. It makes vision blurry, dim, or washed out, and it is fixed by replacing the lens with a clear implant. Glaucoma is damage to the optic nerve, usually driven by elevated pressure inside the eye. It steals peripheral vision slowly and silently, and the damage it causes is permanent.
          </p>
          <p>
            Both become more common with age, which is why so many of my cataract patients also carry a glaucoma diagnosis. Some estimates suggest that up to 20 percent of cataract surgery patients have coexisting glaucoma or elevated eye pressure. That is not a small number.
          </p>
          <p>
            The reason this matters for surgical planning is straightforward: if I am already inside the eye to remove the cataract, I have a window of opportunity to do something about the glaucoma at the same time. In many cases, a small additional procedure can lower eye pressure, reduce the number of daily eye drops a patient needs, or both. But this only happens if the conversation happens before surgery, not after.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/glaucoma-cataracts-dual-condition.jpg"
              alt="Illustration showing the difference between cataract affecting the lens and glaucoma affecting the optic nerve, two conditions coexisting in the same eye"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Cataracts cloud the lens. Glaucoma damages the optic nerve. They are different conditions that frequently coexist, and addressing both during one surgery can benefit the right patients.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">How Glaucoma Changes the <strong>Surgical Conversation</strong></h2>
          <p>
            When a patient has only cataracts, the main decision is about the lens: which implant best matches their visual goals and lifestyle. When glaucoma is also present, the decision tree expands.
          </p>
          <p>
            First, I think about lens selection differently. Multifocal lens implants, the ones that provide both distance and near vision, divide incoming light among multiple focal points. That division reduces contrast sensitivity slightly. For a patient with healthy optic nerves, this tradeoff is usually negligible. But for a patient who already has peripheral vision loss from glaucoma, even a small reduction in contrast can make a meaningful difference in how they see in low light, how well they perceive edges and depth, and how comfortable they feel driving at night.
          </p>
          <p>
            This does not mean patients with glaucoma cannot have premium lenses. It means the decision requires more nuance. A patient with early, well-controlled glaucoma and minimal visual field loss may do perfectly well with a <Link href="/insights/panoptix-vs-vivity">Vivity extended depth-of-focus lens</Link>. A patient with moderate field loss may be better served by a monofocal implant that preserves full contrast. The key is matching the lens to the whole eye, not just the cataract.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Glaucoma does not disqualify you from cataract surgery. But it does change which lens implant will give you the best functional result. The surgeon who manages both conditions is the one best positioned to make that recommendation.</strong></p>
          </div></BlurReveal>

          <p>
            Second, I think about the pupils. Many patients on long-term glaucoma drops, particularly certain classes of medications, develop pupils that do not dilate well. A small pupil makes cataract surgery more challenging because the surgeon needs to see and access the lens through the pupil. This is not a barrier to surgery, but it requires additional steps and experience. I may use devices to gently expand the pupil or adjust my surgical technique to work safely in a tighter space.
          </p>
          <p>
            Third, I consider the opportunity for combined treatment. This is where the conversation gets most interesting for patients.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">MIGS: Treating Glaucoma <strong>During Cataract Surgery</strong></h2>
          <p>
            MIGS stands for minimally invasive glaucoma surgery. These are a family of small, low-risk procedures that can be performed through the same tiny incision already being used for cataract surgery. In most cases, a MIGS procedure adds only a few minutes to the total operating time. The patient does not notice any difference in their recovery.
          </p>
          <p>
            The goal of MIGS is modest and realistic: lower eye pressure enough to reduce dependence on daily glaucoma drops, or provide a buffer of pressure reduction that protects the optic nerve over time. MIGS is not a cure for glaucoma. It does not replace more aggressive surgical options when they are needed. But for patients with mild to moderate glaucoma who are already having cataract surgery, it represents a meaningful opportunity.
          </p>
          <p>
            Several MIGS options exist. Some involve placing a tiny stent in the eye's natural drainage canal to improve fluid outflow. Others directly open the drainage pathway using specialized instruments. Each approach has strengths and limitations, and the best choice depends on the type and severity of glaucoma, the anatomy of the drainage angle, and what will work best for a particular eye.
          </p>
          <p>
            What I tell patients is this: if you have glaucoma and you are already planning cataract surgery, we should talk about whether MIGS makes sense for you. For the right patient, it means coming out of cataract surgery with clearer vision and lower eye pressure, sometimes with fewer drops than before. That is a real benefit.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/migs-during-cataract-surgery.jpg"
              alt="Conceptual illustration of MIGS performed during cataract surgery, showing the combined approach to treating both conditions through one procedure"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">MIGS procedures are performed through the same small incision used for cataract surgery, adding only minutes to the procedure while offering meaningful pressure reduction for the right patients.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Drop <strong>Conversation</strong></h2>
          <p>
            Glaucoma drops are a daily reality for millions of people, and most patients tolerate them. But they are also a source of real frustration. The drops can be expensive, even with insurance. They can cause red eyes, stinging, eyelash changes, and chronic irritation of the eye surface. Remembering to use them one, two, or three times a day is a burden that accumulates over years.
          </p>
          <p>
            I have patients who have been on multiple glaucoma drops for a decade or more. When I tell them there is a possibility of reducing that burden during their cataract surgery, the conversation changes. They lean forward. They want to understand.
          </p>
          <p>
            Here is what I explain: after combined cataract and MIGS surgery, some patients are able to reduce their drops from three to one, or from two to zero. Others maintain the same regimen but achieve lower pressures than before, which provides a margin of safety for the optic nerve. And some patients, particularly those with more advanced glaucoma, will continue needing their full drop regimen because the disease requires that level of treatment.
          </p>
          <p>
            I never promise that drops will go away. But I think it is worth having an honest conversation about the possibility. Patients deserve to know that the option exists, even if the outcome is uncertain.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"I had been putting three different drops in my eyes every day for eight years. After my cataract surgery, Dr. Tokuhara told me to stop two of them. My pressure has been perfect on just one drop ever since."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What About <strong>Advanced Glaucoma?</strong></h2>
          <p>
            MIGS works best for mild to moderate glaucoma. Patients with advanced disease, those who have significant visual field loss, high pressures despite maximum medications, or a history of previous glaucoma surgery, may need more than what MIGS can offer.
          </p>
          <p>
            For these patients, cataract surgery and glaucoma treatment may need to be staged separately, or a more traditional glaucoma surgery like a trabeculectomy or tube shunt may be more appropriate. In some cases, doing the cataract surgery first and stabilizing the eye before addressing the glaucoma surgically is the safest approach. In others, addressing the glaucoma first and deferring the cataract makes more sense.
          </p>
          <p>
            These are not simple decisions, and they are the kind of decisions that benefit from a surgeon who manages both conditions regularly. The planning matters as much as the surgery itself.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Narrow Angles: When Cataract Surgery <strong>Treats the Glaucoma Risk</strong></h2>
          <p>
            There is a specific scenario I see frequently that deserves its own mention. Some patients have what is called narrow angles, a condition where the drainage pathway inside the eye is anatomically crowded. In these eyes, the natural lens, especially as it thickens with age, pushes against the iris and narrows the space where fluid drains out of the eye. This creates a risk of acute angle-closure glaucoma, a sudden and painful spike in eye pressure that can cause permanent damage in hours.
          </p>
          <p>
            For these patients, <Link href="/insights/narrow-angle-cataract">cataract surgery is not just about improving vision</Link>. Removing the thickened natural lens and replacing it with a thin artificial implant physically opens up the drainage angle. In many cases, this eliminates the risk of angle closure entirely. It is one of those situations where cataract surgery treats two problems at once: cloudy vision and a structural glaucoma risk.
          </p>
          <p>
            I have seen patients referred to me specifically for this reason, people whose glaucoma specialist recognized that the best way to manage their angle closure risk was to remove the cataract, even if the cataract was not yet causing significant vision problems. In the right clinical context, earlier cataract surgery can be the most effective glaucoma prevention strategy available.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What to Ask <strong>Your Surgeon</strong></h2>
          <p>
            If you have both glaucoma and cataracts, here are the questions that matter most before surgery:
          </p>
          <ul style={{marginBottom: '24px'}}>
            <li style={{marginBottom: '12px'}}><strong>How does my glaucoma affect which lens implant is right for me?</strong> This tells you whether the surgeon is thinking about both conditions, not just the cataract.</li>
            <li style={{marginBottom: '12px'}}><strong>Am I a candidate for MIGS during my cataract surgery?</strong> If your surgeon does not bring this up and you have glaucoma, ask about it.</li>
            <li style={{marginBottom: '12px'}}><strong>Is there a realistic chance of reducing my glaucoma drops?</strong> An honest answer here builds trust. A surgeon who oversells is a red flag.</li>
            <li style={{marginBottom: '12px'}}><strong>How will my eye pressure be managed after surgery?</strong> Glaucoma management does not stop at the operating room door. The postoperative period matters.</li>
            <li style={{marginBottom: '12px'}}><strong>Do you manage glaucoma patients regularly, or will I need to see a separate specialist?</strong> Coordination between a cataract surgeon and a glaucoma specialist is fine, but you want to know the plan.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Takeaway</strong></h2>
          <p>
            Having glaucoma does not prevent you from having cataract surgery. In many cases, it makes cataract surgery more valuable, because the procedure can address both conditions at once.
          </p>
          <p>
            But it does require a broader conversation. The lens selection is different. The surgical planning is different. The opportunity to combine treatments changes the equation. And the surgeon's experience with both conditions determines whether you get the full benefit of that opportunity.
          </p>
          <p>
            If you have been told you have glaucoma and cataracts, do not think of them as separate problems that need separate solutions. Think of them as two conditions that can be managed together, with the right plan and the right surgeon.
          </p>

          <div className="insight-image-block" style={{margin: '40px 0'}}>
            <Image
              src="/media/insights/glaucoma-cataracts-combined-care.jpg"
              alt="A patient having a thorough consultation about managing glaucoma and cataracts together, discussing surgical options and lens selection"
              width={900}
              height={600}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
            <p className="image-caption">Managing glaucoma and cataracts together requires a broader surgical conversation. The best outcomes come from planning that accounts for both conditions from the start.</p>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h3 className="section-title-sm">Related <strong>Reading</strong></h3>
          <ul className="insight-related-list">
            <li><Link href="/glaucoma">Understanding Glaucoma</Link></li>
            <li><Link href="/complex-cases/glaucoma-and-cataract">Complex Cases: Glaucoma and Cataract Surgery</Link></li>
            <li><Link href="/insights/narrow-angle-cataract">Narrow Angles and Cataracts</Link></li>
            <li><Link href="/insights/when-your-case-isnt-routine">Complex Cataract Surgery: When Your Case Is Not Routine</Link></li>
            <li><Link href="/insights/cataract-surgery-and-diabetes">Cataract Surgery and Diabetes</Link></li>
            <li><Link href="/insights/are-premium-lenses-worth-it">Are Premium Lenses Worth It?</Link></li>
          </ul>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container content-narrow text-center">
          <h2>Have Glaucoma and Cataracts?</h2>
          <p>If you are managing glaucoma and considering cataract surgery, the conversation about how to treat both conditions starts before you enter the operating room. Understanding your options helps you make a more informed decision about your care.</p>
          <p>Talk to your ophthalmologist about whether combined cataract and MIGS surgery is right for your situation. The best outcomes come from plans that account for the whole eye, not just the cataract.</p>
        </div>
      </section>
    </>
  );
}
