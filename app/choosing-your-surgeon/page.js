import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Choosing a Cataract Surgeon: The Questions Nobody Tells You to Ask',
  description: 'A framework for evaluating cataract surgeons — not a checklist. What surgical volume really means, how to evaluate complication experience, and the red flags most patients miss.',
  alternates: { canonical: '/choosing-your-surgeon' },
  openGraph: {
    title: 'Choosing a Cataract Surgeon | Dr. Keith Tokuhara',
    description: 'What to actually look for in a cataract surgeon. Beyond credentials — the questions that matter and the red flags that don\'t show up on a website.',
    url: 'https://drtokuhara.com/choosing-your-surgeon',
  },
};

export default function ChoosingYourSurgeon() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Choosing a Cataract <strong>Surgeon</strong></h1>
          <p className="page-hero-sub">The questions nobody tells you to ask — and why the answer isn't always the biggest name or the closest office.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-couple-consultation.jpg"
              alt="Couple meeting with their eye surgeon during a cataract consultation"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <p className="body-lead">
            Most patients choose a cataract surgeon the same way they choose a restaurant — someone recommended it, the reviews looked fine, and the office was nearby. That works often enough. But cataract surgery is one of the most personal medical decisions you'll make, and how you choose matters more than most people realize.
          </p>
          <p>
            This isn't a checklist. It's a way of thinking about trust, experience, and what you actually need from the person operating on your eyes.
          </p>
        </div>
      </section>

      {/* HOW MOST PEOPLE END UP WITH THEIR SURGEON */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How Most People <strong>End Up</strong> With Their Surgeon</h2>
          <p>
            Here's the truth: most cataract surgery patients don't choose their surgeon at all. They're referred. Their optometrist sends them somewhere — usually to a practice the optometrist has a professional relationship with. That's not inherently bad, but it means the decision was made for you before you even knew you had options.
          </p>
          <p>
            Patients are educated about their diagnosis, about treatment options, about lens types. But almost never about <em>where</em> they can get care. Provider choice is treated as fixed, when it really isn't.
          </p>
          <p>
            I've seen patients drive an hour to a university medical center for routine cataract surgery — not because their case required it, but because nobody mentioned they had a closer option that was equally qualified. The best surgical plan on paper doesn't help if it doesn't fit into your life.
          </p>
        </div>
      </section>

      {/* WHAT ACTUALLY MATTERS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Actually <strong>Matters</strong></h2>

          <h3 className="content-subhead">Experience with complications — not just with routine cases</h3>
          <p>
            Every cataract surgeon can do a straightforward case. What separates surgeons is what they do when something unexpected happens. Ask about their experience with complications. Not "do complications happen?" — of course they do. Ask: "When something goes wrong, what happens next?"
          </p>
          <p>
            A surgeon who handles their own complications, who has the skill set to manage the unexpected in real time, is different from a surgeon who refers complications elsewhere. Both exist. You want to know which one you're seeing.
          </p>

          <h3 className="content-subhead">Honesty about lens recommendations</h3>
          <p>
            Premium lens implants can be genuinely life-changing for the right patient. But they're not right for everyone. If a surgeon only recommends the most expensive option, or makes you feel guilty for choosing a standard lens, that's a signal worth paying attention to.
          </p>
          <p>
            Good lens selection is about matching the lens to your life — your hobbies, your visual priorities, your tolerance for tradeoffs. It's a conversation, not a sales pitch.
          </p>

          <h3 className="content-subhead">Willingness to say "not yet"</h3>
          <p>
            Some of the best cataract consultations I've had ended with "let's wait." The cataract was real, but it wasn't affecting the patient's life enough to justify surgery. That's not a failed appointment — that's good medicine.
          </p>
          <p>
            Be cautious of any surgeon who makes you feel like surgery is urgent when you're still seeing reasonably well. Cataracts almost never require emergency treatment. You have time.
          </p>

          <h3 className="content-subhead">Who you see after surgery</h3>
          <p>
            Ask who handles your post-operative care. In some practices, you'll never see your surgeon after the procedure. You'll be seen by an optometrist or another doctor in the group. That's not always a problem, but you should know in advance.
          </p>
          <p>
            If something feels off after surgery, you want access to the person who was in the operating room. Not a voicemail. Not "the next available provider."
          </p>
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Red <strong>Flags</strong></h2>
          <ul className="content-list">
            <li><strong>Pressure to decide immediately.</strong> Cataract surgery is almost never urgent. If you feel rushed, slow down.</li>
            <li><strong>Guilt about your choices.</strong> If a surgeon implies that complications happened because you chose the "wrong" option, that's blame — not medicine.</li>
            <li><strong>No discussion of tradeoffs.</strong> Every lens, every technique, every timing decision involves tradeoffs. If no one mentions any, you're not getting the full picture.</li>
            <li><strong>The surgeon doesn't answer your questions directly.</strong> Vague answers, redirecting to a coordinator, or dismissing concerns are signs that communication won't improve after surgery.</li>
            <li><strong>You can't find out who will manage complications.</strong> If the answer is unclear or "we'll cross that bridge when we come to it," keep looking.</li>
          </ul>
        </div>
      </section>

      {/* SECOND OPINIONS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Second Opinions Are <strong>Normal</strong></h2>
          <p>
            I want to normalize something that patients often feel awkward about: getting a second opinion. This is your body. Your eyes. Your decision. No good surgeon is offended by a patient who wants another perspective.
          </p>
          <p>
            A second opinion isn't a vote of no confidence — it's due diligence. And sometimes, the second opinion confirms everything the first surgeon said, and you go back to them with more confidence. That's a perfectly good outcome.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I recently saw a patient who had been told by his original surgeon that his cataract complication happened because he chose standard surgery over laser. He believed it was his fault. It wasn't. The complication had nothing to do with that choice. But the guilt kept him from seeking help for months. When he finally came in, we were able to fix the problem and restore his vision. The lesson: complications are never the patient's fault. And the first thing any surgeon should offer when something goes wrong is compassion and a plan — not blame.</em>
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>Start here if you want to understand what cataracts actually are and how they affect your life.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A guide to lens options based on how you live — not what costs the most.</p>
            </Link>
            <Link href="/insights/when-guilt-replaces-explanation" className="related-card">
              <h3>When Guilt Replaces Explanation</h3>
              <p>A story about what happens when a surgeon blames the patient instead of solving the problem.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
