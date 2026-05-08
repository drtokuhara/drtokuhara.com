import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';
import TiltCard from '../components/TiltCard';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is complex cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Complex cataract surgery refers to cases that go beyond routine cataract removal. This includes patients with weak or missing zonules, prior eye surgery, trauma, small pupils, dense cataracts, or complications from a previous cataract procedure. These cases require specialized techniques and experience that not every surgeon offers.' } },
    { '@type': 'Question', name: 'Can a dislocated lens implant be fixed?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A dislocated or subluxated lens implant can often be repositioned or exchanged. Dr. Tokuhara specializes in these procedures, including scleral-fixated lenses using the Yamane technique. Many patients are told nothing can be done, but surgical correction is usually possible.' } },
    { '@type': 'Question', name: 'What should I do if I had a complication during cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Seek a second opinion from a surgeon who specializes in complex and revision cataract cases. Complications like retained lens fragments, posterior capsule rupture, or iris damage are manageable with the right expertise. Dr. Tokuhara regularly receives referrals from other surgeons for these situations.' } },
    { '@type': 'Question', name: 'What is secondary lens implantation?', acceptedAnswer: { '@type': 'Answer', text: 'Secondary lens implantation is the placement of an artificial lens in an eye that either never received one during cataract surgery or had a lens implant that dislocated and needed removal. This can be done using techniques like the Yamane method, which sutures a lens to the wall of the eye for stable, long-term positioning.' } },
    { '@type': 'Question', name: 'Does Dr. Tokuhara accept referrals for complex cases?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Tokuhara is a second-opinion specialist and regularly accepts referrals from other ophthalmologists for complex cataract surgery, revision procedures, and corrective cases. He sees these cases weekly, not occasionally.' } },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Complex Cataract Surgery and Corrective Cases',
    description: 'Dr. Tokuhara specializes in complex and revision cataract surgery. Second opinions, complications, secondary lens implantation, and cases other surgeons refer out.',
    slug: '/complex-cases',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
  ]),
  faqSchema,
];

export const metadata = {
  title: 'Complex Cataract Surgery & Corrective Cases - Second Opinion Specialist',
  description: 'Dr. Tokuhara specializes in complex cataract surgery, dislocated lens implant repair, retained lens fragments, and corrective surgery after complications. If another surgeon said nothing can be done, get a second opinion.',
  alternates: {
    canonical: '/complex-cases',
  },
  openGraph: {
    title: 'Complex & Corrective Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Expert in complex cataract surgery complications, dislocated lens implant repair, secondary lens implantation, and corrective reoperation. Coachella Valley second opinion specialist.',
    url: 'https://drtokuhara.com/complex-cases',
  },
};

export default function ComplexCasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{"@context": "https://schema.org", "@type": "VideoObject", "name": "\u2018Botched\u2019 Cataract Surgery Edition:  Posterior Capsule Rupture Explained", "description": "\u201cWhy can\u2019t I see after cataract surgery?\u201d  \u201cI already had cataract surgery, why do I need to have surgery again.\u201d  Dr. T", "thumbnailUrl": "https://i.ytimg.com/vi/7VkbQx36LeI/maxresdefault.jpg", "uploadDate": "2021-04-27", "duration": "PT7M24S", "contentUrl": "https://www.youtube.com/watch?v=7VkbQx36LeI", "embedUrl": "https://www.youtube.com/embed/7VkbQx36LeI"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "'Botched' Cataract Surgery Edition:  Iris Damage Repair", "description": "\"Why do I have glare after cataract surgery?  Why is my pupil not round?  Why did my eye change color after cataract sur", "thumbnailUrl": "https://i.ytimg.com/vi/B8sM9Xa5mus/maxresdefault.jpg", "uploadDate": "2021-01-03", "duration": "PT8M15S", "contentUrl": "https://www.youtube.com/watch?v=B8sM9Xa5mus", "embedUrl": "https://www.youtube.com/embed/B8sM9Xa5mus"}, {"@context": "https://schema.org", "@type": "VideoObject", "name": "Fixing a Dislocated Lens Implant:  Yamane Technique", "description": "Does cataract surgery last forever? What happens when the lens implant from cataract surgery dislocates?  Dr. Tokuhara d", "thumbnailUrl": "https://i.ytimg.com/vi/ZrnRIEa0F44/maxresdefault.jpg", "uploadDate": "2022-01-03", "duration": "PT3M36S", "contentUrl": "https://www.youtube.com/watch?v=ZrnRIEa0F44", "embedUrl": "https://www.youtube.com/embed/ZrnRIEa0F44"}]) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {/* PAGE HERO */}
      <VideoBackground src="/media/ambient-timepiece-mechanism.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>When Other Surgeons Say <strong>Nothing Can Be Done</strong></h1>
          <p className="page-hero-sub">Complex cataract surgery, corrective procedures, and honest second opinions for patients who&rsquo;ve been told there are no options left.</p>
        </div>
      </VideoBackground>

      {/* WHAT MAKES A CASE COMPLEX */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <h2 className="section-title">What Makes a Case <strong>Complex</strong></h2>
          <p className="prose">
            A cataract case becomes complex when something increases risk, reduces predictability, or requires additional surgical skill, tools, or planning. Not every cataract is routine. Most are, and that&rsquo;s good news. But some eyes come with challenges that change the entire approach. Those challenges fall into a few distinct categories.
          </p>

          <h3 className="subsection-title">Patient and Anatomy Factors</h3>
          <p className="prose">
            Dense or &ldquo;rock hard&rdquo; cataracts that resist standard techniques. Small pupils that won&rsquo;t dilate well. Weak zonules from pseudoexfoliation or trauma, where the lens support system is compromised. Prior eye surgery like LASIK, radial keratotomy, or vitrectomy that changes the anatomy I&rsquo;m working with. Corneal disease like keratoconus or Fuchs dystrophy. Shallow anterior chambers. High myopia or unusually short eyes.
          </p>

          <h3 className="subsection-title">Medical and Ocular Conditions</h3>
          <p className="prose">
            Diabetes with retinopathy adds layers of risk. Glaucoma, especially in eyes with prior glaucoma surgery, changes what&rsquo;s possible. Macular degeneration affects how much visual improvement surgery can deliver. Uveitis and inflammatory eye disease mean the eye may react unpredictably to any intervention.
          </p>

          <h3 className="subsection-title">Intraoperative Challenges</h3>
          <p className="prose">
            Some complexity only reveals itself during surgery. A poor red reflex that limits visibility. Floppy iris syndrome, where the iris billows unpredictably during the procedure. Capsular instability that increases the risk of a rupture. These situations require a surgeon who has seen them before and knows how to adapt in real time.
          </p>

          <h3 className="subsection-title">Refractive Complexity</h3>
          <p className="prose">
            Prior refractive surgery makes lens power calculations harder. Irregular astigmatism from any cause limits what a standard lens implant can achieve. And sometimes the complexity isn&rsquo;t anatomical at all. It&rsquo;s a patient with high expectations for premium lenses and spectacle independence, combined with an eye that may not cooperate with those goals. Managing that conversation honestly is its own kind of surgical skill.
          </p>

          <p className="prose" style={{marginTop: '24px'}}>
            Then there are the cases where the first surgery didn&rsquo;t go as planned. A lens implant that shifted out of position. A piece of the cataract left behind. Damage to the iris or the capsule. These things happen. Cataract surgery has an excellent track record, but no surgery is risk-free. What matters is what happens next. And too often, what happens next is not enough.
          </p>
        </div>
      </section>

      {/* MID-PAGE VISUAL BREAK */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '0'}}>
            <Image
              src="/media/complex-cases-patient-hope.jpg"
              alt="Patient looking hopeful after learning his complex case has options"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* CASES I SPECIALIZE IN */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cases I <strong>Specialize In</strong></h2>
            <div className="section-subtitle">These are the problems I solve every week. Not once a year. Every week.</div>
          </ScrollReveal>
          <StaggerChildren className="card-grid" staggerDelay={0.08}>
            <div className="card">
              <h3>Dislocated or Subluxated Lens Implants</h3>
              <p>A lens implant that has shifted, tilted, or fallen out of position. This can happen months or years after surgery due to progressive zonular weakness, pseudoexfoliation syndrome, or trauma. The lens may sublux partially or dislocate completely into the vitreous cavity. I use the Yamane flanged intrascleral fixation technique, a sutureless approach that creates stable, long-term lens centration even without capsular support. I was the first surgeon in the Coachella Valley to perform this technique.</p>
            </div>
            <div className="card">
              <h3>Retained Lens Fragments</h3>
              <p>Pieces of the cataract left behind during surgery. Small cortical fragments may resorb on their own, but larger nuclear fragments can trigger severe inflammation (lens-induced uveitis), sustained intraocular pressure elevation, and corneal edema. Timing matters: prolonged retention increases the risk of cystoid macular edema and permanent endothelial cell loss. I&rsquo;ve seen patients told to &ldquo;just wait it out&rdquo; when they needed the fragment removed promptly. If you&rsquo;re still having problems weeks after cataract surgery, this is one of the things I evaluate carefully.</p>
            </div>
            <div className="card">
              <h3>Posterior Capsule Rupture Complications</h3>
              <p>A tear in the capsule during surgery. It&rsquo;s the most common serious intraoperative complication, and how it&rsquo;s managed in the moment determines the long-term outcome. When it isn&rsquo;t handled well, patients end up with lens instability, retained material, or worse. I repair the consequences and place a stable lens when the original plan is no longer possible.</p>
            </div>
            <div className="card">
              <h3>Iris Damage and Reconstruction</h3>
              <p>The iris can be damaged during complicated surgery, from trauma, or from certain medical devices. A damaged iris causes severe light sensitivity, glare, and cosmetic concerns. I perform iris reconstruction to restore both function and appearance, reducing symptoms that can be genuinely debilitating.</p>
            </div>
            <div className="card">
              <h3>Failed or Unsatisfactory Premium Lens Outcomes</h3>
              <p>Multifocal and extended depth of focus lenses can deliver incredible results, but they&rsquo;re not right for every eye. Persistent dysphotopsia (unwanted visual phenomena like halos, starbursts, or waxy vision) can result from residual refractive error, posterior capsule opacification, dry eye, corneal irregularity, or simply a mismatch between the lens optics and the patient&rsquo;s visual system. When symptoms persist beyond the expected neuroadaptation period, the conversation shifts to whether the lens should be exchanged for a monofocal or EDOF alternative. I help patients navigate that decision honestly, based on objective testing and careful examination, without pressure to just &ldquo;give it more time.&rdquo;</p>
            </div>
            <div className="card">
              <h3>Secondary Lens Implantation</h3>
              <p>Some patients are left without a lens implant after a complicated surgery, or their original implant needs to come out. Secondary implantation using the Yamane technique lets me place a new lens in eyes that no longer have the natural capsule to hold one. It&rsquo;s a specialized procedure, and it changes lives for patients who&rsquo;ve been wearing thick glasses or contact lenses since their complication.</p>
            </div>
            <div className="card">
              <h3>Complex Anterior Segment Reconstruction</h3>
              <p>When multiple structures in the front of the eye are damaged, the repair isn&rsquo;t just one thing. It might involve the iris, the capsule, the lens, and the cornea all in the same case. Anterior segment reconstruction requires planning the entire repair as a single coordinated surgery, not a series of patchwork fixes.</p>
            </div>
            <div className="card">
              <h3>Reoperation After Another Surgeon&rsquo;s Complication</h3>
              <p>This is the hardest conversation in ophthalmology. Something went wrong, and now you need someone else to fix it. I approach these cases without judgment toward the original surgeon. Complications can happen to anyone. My focus is entirely on what we can do now to give you the best possible outcome.</p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CONDITION-SPECIFIC PAGES */}
      <section className="section section-warm">
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Explore Specific <strong>Conditions</strong></h2>
            <div className="section-subtitle">Each condition brings unique challenges. Learn how I approach the cases that require specialized expertise.</div>
          </ScrollReveal>
          <StaggerChildren className="insights-grid" staggerDelay={0.06}>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/macular-degeneration" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-group-lounge-toast.jpg" alt="Friends enjoying clear vision together at a Coachella Valley resort" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Retina + Cataract</span><h2 className="insight-card-title">Macular Degeneration</h2><p className="insight-card-desc">The only cataract surgeon in the valley who is board certified and fellowship trained in retina. Both conditions, one doctor.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/diabetes" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-couple-produce-market.jpg" alt="Couple shopping at a farmers market with clear, confident vision" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Systemic Disease</span><h2 className="insight-card-title">Diabetes &amp; Diabetic Retinopathy</h2><p className="insight-card-desc">Retinopathy screening, DME management, and surgical timing for diabetic patients.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/glaucoma-and-cataract" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-group-tennis-sunny.jpg" alt="Active seniors playing tennis in the Coachella Valley sun" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Combined Procedure</span><h2 className="insight-card-title">Glaucoma &amp; Cataract</h2><p className="insight-card-desc">Combined MIGS procedures including iStent and KDB Goniotomy to address both conditions in one surgery.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/fuchs-dystrophy" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-woman-portrait-sunlit-resort.jpg" alt="Woman relaxing at a sunlit desert resort" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Corneal</span><h2 className="insight-card-title">Fuchs Dystrophy</h2><p className="insight-card-desc">Endothelial cell considerations, combined DMEK/DSAEK approaches, and protecting your cornea during cataract surgery.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/previous-retina-surgery" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-group-pickleball-palms.jpg" alt="Group playing pickleball under palm trees" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Post-Surgical</span><h2 className="insight-card-title">After Retina Surgery</h2><p className="insight-card-desc">Post-vitrectomy cataracts, zonular changes, and navigating eyes with a history of gas or silicone oil.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/retained-silicone-oil" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-couple-sunset-cooking.jpg" alt="Couple cooking together at sunset in the desert" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Post-Surgical</span><h2 className="insight-card-title">Retained Silicone Oil</h2><p className="insight-card-desc">Post-retina surgery complications including emulsification, elevated pressure, and combined removal approaches.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/aphakia-after-retina" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-seniors-resort-string-lights.jpg" alt="Seniors enjoying evening at a resort under string lights" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Lens Fixation</span><h2 className="insight-card-title">Aphakia After Retina Surgery</h2><p className="insight-card-desc">Secondary lens implantation using the Yamane technique for patients left without a lens after complex retina procedures.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/previous-lasik" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-couple-farmers-market.jpg" alt="Couple browsing a Coachella Valley farmers market" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Refractive</span><h2 className="insight-card-title">After LASIK</h2><p className="insight-card-desc">Modified IOL calculations, managing refractive surprises, and setting realistic expectations for post-LASIK eyes.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/previous-rk" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-men-car-show.jpg" alt="Friends at a classic car show enjoying restored vision" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Refractive</span><h2 className="insight-card-title">After Radial Keratotomy</h2><p className="insight-card-desc">RK creates some of the most unpredictable corneas in ophthalmology. Specialized calculation and staged approaches.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/floppy-iris" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-family-outdoor-portrait.jpg" alt="Family gathered for an outdoor portrait in the desert" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Medication</span><h2 className="insight-card-title">Floppy Iris Syndrome (IFIS)</h2><p className="insight-card-desc">Tamsulosin, Flomax, and alpha-blocker associations. Surgical management with iris expansion and adapted technique.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/pseudoexfoliation" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/stock-couple-market-sunlight.jpg" alt="Couple walking through a sunlit market with clear vision" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Structural</span><h2 className="insight-card-title">Pseudoexfoliation</h2><p className="insight-card-desc">Weak zonules, capsular tension rings, and staged approaches for eyes with compromised lens support.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/parkinsons-disease" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/elderly-man-walker-desert-path.jpg" alt="Elderly Parkinson's patient with walker" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',objectPosition:'center 30%',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Neurological</span><h2 className="insight-card-title">Parkinson&rsquo;s Disease</h2><p className="insight-card-desc">Tremor management, medication timing, head positioning, and surgical adaptations for Parkinson&rsquo;s patients.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/down-syndrome" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/down-syndrome-patient-1.jpg" alt="Woman with Down syndrome smiling outdoors" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',objectPosition:'center 30%',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Special Populations</span><h2 className="insight-card-title">Down Syndrome</h2><p className="insight-card-desc">Earlier cataracts, anatomical considerations, cooperation challenges, and compassionate anesthesia planning.</p></div>
            </Link></TiltCard>
            <TiltCard style={{position: 'relative', borderRadius: '16px'}}><Link href="/complex-cases/alzheimers-dementia" className="insight-card insight-card-visual" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="insight-card-image"><Image src="/media/elderly-woman-poolside-desert.jpg" alt="Elderly woman in desert setting" width={600} height={340} style={{width:'100%',height:'180px',objectFit:'cover',objectPosition:'center 30%',borderRadius:'16px 16px 0 0'}} /></div>
              <div className="insight-card-body"><span className="insight-cluster">Special Populations</span><h2 className="insight-card-title">Alzheimer&rsquo;s &amp; Dementia</h2><p className="insight-card-desc">Informed consent, caregiver coordination, and honest benefit assessment for patients with cognitive decline.</p></div>
            </Link></TiltCard>
          </StaggerChildren>
        </div>
      </section>

      {/* THE SECOND OPINION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Second Opinion</strong></h2>
          <p className="prose">
            Let me say something clearly: getting a second opinion is not disrespectful to your doctor. It&rsquo;s not a betrayal. It&rsquo;s not an insult. It is one of the smartest things you can do when you&rsquo;re dealing with a complicated situation and you&rsquo;re not getting answers.
          </p>
          <p className="prose">
            I&rsquo;ve seen patients who were steered away from second opinions. Told that the complication was their fault for not choosing a more expensive option. Made to feel guilty for asking questions. That is not how medicine should work. When something goes wrong, the ethical response is honesty, compassion, and action. Not blame.
          </p>
          <p className="prose">
            When you come to me for a corrective evaluation, here&rsquo;s what to expect. I&rsquo;ll do a thorough exam. I&rsquo;ll look at everything with fresh eyes and no agenda. Then we&rsquo;ll have an honest conversation about what I find. Sometimes the news is good: the problem is fixable, and the path forward is clear. Sometimes it&rsquo;s more nuanced: we can improve things significantly, but perfection isn&rsquo;t realistic. And sometimes, honestly, the best answer is conservative management rather than another surgery.
          </p>
          <p className="prose">
            I will never tell you what you want to hear just to book a case. If surgery isn&rsquo;t the right move, I&rsquo;ll tell you that. If it is, I&rsquo;ll explain exactly what I plan to do, why, and what results you can realistically expect. You deserve that kind of transparency, especially after a difficult experience.
          </p>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">My Approach to <strong>Complex Surgery</strong></h2>
          <p className="prose">
            Complex surgery is not about being more aggressive. It&rsquo;s about being more prepared. Every case I take on starts with meticulous planning. I study the imaging. I map out the anatomy. I think through every scenario before I walk into the operating room, because in complex cases, you need a plan B, C, and D ready to go.
          </p>
          <p className="prose">
            There&rsquo;s something that people don&rsquo;t always understand about surgical expertise: the surgeon who manages complications regularly is better at preventing them. When you&rsquo;ve seen what can go wrong hundreds of times, you develop an instinct for avoiding those situations in the first place. You move differently. You make decisions earlier. You recognize warning signs that someone who only sees complex cases occasionally might miss.
          </p>
          <p className="prose">
            That&rsquo;s the difference between a surgeon who handles complex work every day and one who encounters it a few times a year. It&rsquo;s not about talent. It&rsquo;s about pattern recognition built through volume and focus. This is what I do. It&rsquo;s the core of my practice, not a side note.
          </p>
        </div>
      </section>

      {/* SURGICAL VIDEOS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">See the <strong>Work</strong></h2>
          <div className="section-subtitle">Real surgical videos showing how I approach complex and corrective cases.</div>
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
                    title="Iris Damage Repair After Cataract Surgery"
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
                    title="Fixing a Dislocated Lens Implant: Yamane Technique"
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

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>If another doctor told you there&rsquo;s nothing more they can do, <strong>let&rsquo;s talk.</strong></h2>
          <p>You don&rsquo;t need a referral. You don&rsquo;t need to feel guilty about asking for a second opinion. You just need someone who will look at your situation with fresh eyes and give you an honest answer.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/cataract-surgery" className="btn-secondary">Back to Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
