import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';

const jsonLd = [
  articleSchema({
    title: 'CLEAR in a Day - Same Day Bilateral Cataract Surgery',
    description: 'Both eyes in a single visit. CLEAR in a Day is same-day bilateral cataract surgery for eligible patients at Desert Vision Center.',
    slug: '/clear-in-a-day',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'CLEAR in a Day', href: '/clear-in-a-day' },
  ]),
];

export const metadata = {
  title: 'CLEAR in a Day - Same Day Bilateral Cataract Surgery',
  description: 'CLEAR in a Day is Dr. Tokuhara\'s protocol for same-day bilateral cataract surgery at Desert Vision Center. Both eyes, one surgeon, one day. Learn about the safety protocol, candidacy, and what to expect.',
  alternates: {
    canonical: '/clear-in-a-day',
  },
  openGraph: {
    title: 'CLEAR in a Day | Dr. Keith Tokuhara',
    description: 'Same-day bilateral cataract surgery in Rancho Mirage. Both eyes treated in one session with independent sterile setups. Learn if you\'re a candidate.',
    url: 'https://drtokuhara.com/clear-in-a-day',
  },
};

export default function ClearInADayPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>CLEAR in a Day<sup>&trade;</sup></h1>
          <p className="page-hero-sub">Both eyes. One surgeon. One day. A smarter path to clear vision.</p>
        </div>
      </section>

      {/* WHAT IS CLEAR IN A DAY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Is <strong>CLEAR in a Day?</strong></h2>
          <p className="prose">
            CLEAR in a Day is my protocol for same-day bilateral cataract surgery. Instead of the traditional approach of operating on one eye, waiting two to four weeks, and then doing the second eye, both eyes are treated in a single surgical session.
          </p>
          <p className="prose">
            CLEAR stands for Clear Lens Extraction for Accelerated Recovery. The goal is not a promise of perfect vision the same day, but a streamlined approach that reduces the overall recovery timeline by treating both eyes together rather than weeks apart.
          </p>
          <p className="prose">
            This isn&rsquo;t a shortcut or a compromise. It&rsquo;s a carefully designed protocol that combines advanced surgical technique with rigorous safety standards. I developed it because I saw too many patients struggling through weeks of imbalanced vision between their first and second surgery, rearranging their lives twice, and spending more time away from the things they love than necessary.
          </p>
          <div className="content-image" style={{marginTop: '32px'}}>
            <Image
              src="/media/lifestyle-couple-resort.jpg"
              alt="Couple enjoying the resort lifestyle in the Coachella Valley after cataract surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* WHY BOTH EYES SAME DAY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why Both Eyes <strong>the Same Day?</strong></h2>
          <p className="prose">
            The traditional two-surgery approach made sense decades ago when techniques were less refined and outcomes less predictable. Today, cataract surgery is one of the safest and most successful procedures in all of medicine. The question isn&rsquo;t whether we can do both eyes the same day. It&rsquo;s whether there&rsquo;s a good reason not to.
          </p>

          <h3 className="subsection-title">The advantages are practical and real</h3>
          <p className="prose">
            <strong>One day of logistics.</strong> One ride to and from surgery. One day of arranging your schedule. One set of pre-operative preparations. For patients who travel to see me, or who have caregivers coordinating their support, this makes a meaningful difference.
          </p>
          <p className="prose">
            <strong>Faster visual recovery.</strong> When both eyes improve together, your brain adapts more quickly. With the sequential approach, you spend weeks with one clear eye and one foggy eye. Your depth perception is off. Your glasses prescription is suddenly wrong for one side. It&rsquo;s disorienting, and it lasts until the second surgery catches up.
          </p>
          <p className="prose">
            <strong>Less disruption to your life.</strong> One recovery period instead of two. Fewer follow-up visits spread across fewer weeks. You get back to driving, reading, golf, tennis, and everything else sooner. For people who live active lives in the Coachella Valley, that matters.
          </p>
          <p className="prose">
            <strong>Better lens optimization.</strong> When I can see how both eyes respond together from the start, I can fine-tune your visual outcome more effectively. The eyes work as a team, and treating them as a team makes sense.
          </p>
        </div>
      </section>

      {/* SAFETY PROTOCOL */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Safety <strong>Protocol</strong></h2>
          <p className="prose">
            This is the part I want to be very clear about, because safety is non-negotiable. When I do both eyes the same day, I don&rsquo;t treat it as one long surgery. I treat it as two completely independent procedures that happen to be scheduled back to back.
          </p>

          <h3 className="subsection-title">Here is exactly what that means</h3>
          <p className="prose">
            <strong>Separate sterile setups.</strong> After the first eye is complete, everything is broken down. New sterile drapes. New sterile instruments. New sterile supplies. The second eye gets its own setup as if you had come in on a completely different day.
          </p>
          <p className="prose">
            <strong>Independent instrument trays.</strong> The instruments used on your first eye never touch your second eye. Each eye gets its own dedicated set, opened fresh.
          </p>
          <p className="prose">
            <strong>Separate medications and solutions.</strong> The eye drops, the irrigating solutions, and the viscoelastic materials are all independent for each eye. Nothing is shared between procedures.
          </p>
          <p className="prose">
            <strong>Different lens implant lots.</strong> When possible, I use lens implants from different manufacturing lots for each eye. This is an extra layer of safety that eliminates any theoretical risk from a single production batch.
          </p>
          <p className="prose">
            <strong>Full re-verification.</strong> Before starting the second eye, the surgical team re-verifies the patient, the eye, the lens power, and the procedure. It&rsquo;s a complete restart of the safety checklist.
          </p>
          <p className="prose">
            The research supports this approach. Large-scale studies published in peer-reviewed journals show that same-day bilateral cataract surgery, performed with proper protocols, has complication rates comparable to the sequential approach. The key is doing it right, and that means never cutting corners on the sterile technique.
          </p>
        </div>
      </section>

      {/* WHO IS A CANDIDATE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Who Is a <strong>Candidate?</strong></h2>
          <p className="prose">
            I&rsquo;m going to be honest: not every patient is right for CLEAR in a Day. This protocol works best for patients who meet certain criteria, and I evaluate each case individually.
          </p>

          <h3 className="subsection-title">Good candidates typically have</h3>
          <ul className="content-list">
            <li>Cataracts in both eyes that are affecting their quality of life</li>
            <li>Healthy eyes without significant complicating conditions</li>
            <li>No history of complicated eye surgery</li>
            <li>Good overall health with no uncontrolled systemic conditions</li>
            <li>A practical desire to minimize the number of surgical days and recovery periods</li>
            <li>The ability to follow post-operative instructions carefully for both eyes simultaneously</li>
          </ul>

          <h3 className="subsection-title">This may not be right for you if</h3>
          <ul className="content-list">
            <li>You have advanced glaucoma or other conditions that add complexity to the surgery</li>
            <li>Your cataracts are extremely dense or technically challenging</li>
            <li>You have only one functioning eye (we would never risk your only seeing eye in a bilateral setting)</li>
            <li>You have a history of complications with previous eye surgery</li>
            <li>You have conditions that increase infection risk, such as chronic blepharitis that hasn&rsquo;t been adequately treated</li>
            <li>You simply prefer the traditional one-at-a-time approach, and that&rsquo;s completely valid</li>
          </ul>

          <p className="prose">
            I will tell you straight if I think the sequential approach is better for your situation. My job is to give you the best outcome, not the fastest one. If doing both eyes the same day introduces any unnecessary risk for your specific case, we won&rsquo;t do it.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT ON SURGERY DAY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What to Expect on <strong>Surgery Day</strong></h2>

          <h3 className="subsection-title">Before you arrive</h3>
          <p className="prose">
            You&rsquo;ll receive detailed instructions ahead of time. Start your pre-operative eye drops as directed. Arrange a ride, because you will not be driving yourself home. Wear comfortable clothing. Eat a light meal beforehand. Leave the stress at the door.
          </p>

          <h3 className="subsection-title">At the surgery center</h3>
          <p className="prose">
            When you arrive, the team will get you checked in and comfortable. We&rsquo;ll dilate both eyes and begin preparing you for the procedure. I&rsquo;ll see you before we start, and we&rsquo;ll confirm everything together.
          </p>

          <h3 className="subsection-title">The procedure</h3>
          <p className="prose">
            The first eye takes about 10 to 15 minutes. You&rsquo;re awake, but your eye is numbed so you won&rsquo;t feel pain. Most patients describe seeing some light and colors but nothing uncomfortable. Once the first eye is done, we reset completely. New drapes, new instruments, new setup. Then we proceed with the second eye.
          </p>
          <p className="prose">
            Total time in the operating room is typically 30 to 45 minutes for both eyes. Your total time at the surgery center, including prep and recovery, is usually two to three hours.
          </p>

          <h3 className="subsection-title">Going home</h3>
          <p className="prose">
            You&rsquo;ll go home with protective shields over both eyes. Your vision will be blurry at first, which is normal. Most patients notice a significant improvement by the next morning. You&rsquo;ll come back to see me the day after surgery so I can check both eyes and make sure everything looks excellent.
          </p>

          <div className="content-image" style={{marginTop: '32px'}}>
            <Image
              src="/media/lifestyle-morning-walk.jpg"
              alt="Person enjoying a morning walk in the Coachella Valley with clear vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* RECOVERY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Recovery: CLEAR in a Day vs. <strong>Traditional Approach</strong></h2>
          <p className="prose">
            With the traditional sequential approach, your recovery looks something like this: surgery on the first eye, a few weeks of healing with one clear eye and one foggy eye, then surgery on the second eye, then another few weeks of recovery. The whole process takes about a month or more.
          </p>
          <p className="prose">
            With CLEAR in a Day, both eyes heal together. Many patients notice improvement within the first few days, though full visual recovery varies and can take one to several weeks depending on the individual. You&rsquo;ll use eye drops in both eyes for about a month, and I&rsquo;ll see you for follow-up visits to monitor your progress.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/lifestyle-couple-cycling-palm-desert.jpg"
              alt="Couple cycling together in Palm Desert after cataract surgery recovery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <div className="content-image-caption">Most patients are back to active living within days, not weeks.</div>
          </div>

          <h3 className="subsection-title">The practical difference</h3>
          <p className="prose">
            Instead of spending a month with mismatched vision between your two eyes, the bilateral approach allows both eyes to recover on the same timeline. Your brain doesn&rsquo;t have to compensate for the difference, which can make the adjustment feel more natural. Most patients return to their normal activities sooner than with the traditional staged approach, though the exact timeline depends on how each eye heals.
          </p>
          <p className="prose">
            The restrictions are the same as any cataract surgery: avoid rubbing your eyes, skip swimming and hot tubs for a couple of weeks, don&rsquo;t do heavy lifting for the first few days, and use your drops as prescribed. The only difference is that you&rsquo;re doing it once instead of twice.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/lifestyle-couple-walking-dog-morning.jpg"
              alt="Couple walking their dog on a bright morning - back to routine after CLEAR in a Day"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <div className="content-image-caption">Back to your morning routine. One recovery, not two.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Common <strong>Questions</strong></h2>

          <h3 className="subsection-title">Is same-day bilateral surgery new?</h3>
          <p className="prose">
            No. It has been performed safely around the world for years, and the practice has been growing steadily in the United States. The published research consistently shows that outcomes are comparable to the sequential approach when proper safety protocols are followed. What is relatively new is the broader acceptance among surgeons and patients that this is a legitimate, well-supported option.
          </p>

          <h3 className="subsection-title">What if something goes wrong with the first eye?</h3>
          <p className="prose">
            If anything during the first eye gives me any reason for concern, I will not proceed with the second eye. Period. That is a non-negotiable part of the protocol. The second eye only happens if the first eye went perfectly. Your safety always comes first, even if it means rescheduling.
          </p>

          <h3 className="subsection-title">Will my insurance cover both eyes the same day?</h3>
          <p className="prose">
            In most cases, yes. Medicare and most private insurers cover bilateral cataract surgery performed on the same day. My team will verify your coverage before scheduling and let you know if there are any considerations specific to your plan.
          </p>

          <h3 className="subsection-title">What about infection risk?</h3>
          <p className="prose">
            This is the question every surgeon thinks about carefully. The risk of infection after cataract surgery is very low, roughly 1 in 3,000 to 1 in 5,000 cases. The theoretical concern with bilateral surgery is a simultaneous infection in both eyes. The independent sterile setups, separate instruments, separate solutions, and different lens lots are all designed to eliminate that risk. The published data shows no increased infection rate with properly performed same-day bilateral surgery.
          </p>

          <h3 className="subsection-title">Can I choose different lenses for each eye?</h3>
          <p className="prose">
            Absolutely. In fact, sometimes using different lenses in each eye is part of the plan. For example, I might use a distance-focused lens in your dominant eye and an intermediate or near-focused lens in the other. This is called a blended vision strategy, and it works well for many patients. We discuss all of this before surgery day.
          </p>

          <h3 className="subsection-title">How soon can I drive after CLEAR in a Day?</h3>
          <p className="prose">
            Most patients are driving within a few days, sometimes as early as the day after surgery. It depends on how quickly your vision clears and how comfortable you feel. I&rsquo;ll check your vision at your first post-operative visit and let you know when you&rsquo;re good to go.
          </p>

          <h3 className="subsection-title">I&rsquo;m nervous about having both eyes done at once. Is that normal?</h3>
          <p className="prose">
            Completely normal. Most patients who choose CLEAR in a Day have some level of nervousness going in. And almost all of them say afterward that they&rsquo;re glad they did it this way. The anxiety beforehand is real, but it&rsquo;s usually much worse than the actual experience. I&rsquo;ll walk you through everything, answer every question, and make sure you feel ready before we proceed.
          </p>
        </div>
      </section>

      {/* LIFESTYLE IMAGE */}
      <section className="section section-warm" style={{paddingTop: 0, paddingBottom: '40px'}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/lifestyle-golf-man.jpg"
              alt="Man enjoying golf in the Coachella Valley with clear vision after cataract surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Is CLEAR in a Day <strong>right for you?</strong></h2>
          <p>The only way to know is to have a conversation. I&rsquo;ll evaluate your eyes, talk through your options, and give you my honest recommendation. No pressure. Just information.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
