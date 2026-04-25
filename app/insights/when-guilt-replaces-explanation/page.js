import Link from 'next/link';

export const metadata = {
  title: 'When Guilt Replaces Explanation',
  description: 'A patient believed his cataract complication was his fault because he chose standard surgery over laser. It wasn\'t. A reflection on ethics, blame, and what patients deserve when things go wrong.',
  alternates: { canonical: '/insights/when-guilt-replaces-explanation' },
  openGraph: {
    title: 'When Guilt Replaces Explanation | Dr. Keith Tokuhara',
    description: 'What happens when a surgeon blames the patient instead of solving the problem. A clinical reflection on ethics and trust.',
    url: 'https://drtokuhara.com/insights/when-guilt-replaces-explanation',
  },
};

export default function InsightGuilt() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="insight-hero-cluster">Ethics & Trust</span>
          <h1>When Guilt Replaces <strong>Explanation</strong></h1>
          <p className="page-hero-sub">A clinical reflection on what patients deserve when surgery doesn't go as planned.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            He sat across from me and said, "I know it was my fault."
          </p>
          <p>
            He was 69 years old. He'd had cataract surgery at another practice a few months earlier, and it hadn't gone well. His vision in that eye never came back. When he asked why, the surgeon's partner told him it was because he had chosen standard surgery instead of laser.
          </p>
          <p>
            He believed it. For months, he carried that. The guilt of having made the "wrong" choice. The belief that if he had just spent more money, his eye would be fine.
          </p>
          <p>
            He was wrong - not about wanting answers, but about the answer he was given.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Actually <strong>Happened</strong></h2>
          <p>
            When I examined him, I found a large piece of his natural lens - a nuclear fragment - sitting in the front of his eye. The original cataract surgery had been complicated by a rupture during the procedure, and the fragment hadn't been fully removed. The cornea had started to swell from the retained material pressing against it. The surgical wound had partially come apart.
          </p>
          <p>
            None of this had anything to do with whether he chose laser or standard surgery. Complications during cataract surgery happen - rarely, but they happen - regardless of technique. What matters is how they're handled.
          </p>
          <p>
            In this case, the complication wasn't addressed. And instead of an honest explanation, the patient received blame.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What I Told <strong>Him</strong></h2>
          <p>
            The first thing I said was: <strong>"This was not your fault."</strong>
          </p>
          <p>
            Choosing standard cataract surgery over laser did not cause this complication. The two things are unrelated. He needed to hear that clearly, without qualification, before we talked about anything else.
          </p>
          <p>
            Then I explained what I found, what we could do about it, and why his other eye needed to wait. "Forget the other eye for now," I told him. "Let's fix this eye first. The fragment needs to come out."
          </p>
          <p>
            We took him to the operating room. I removed the retained fragment and repaired the corneal wound. A month later, his vision was fully restored.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why This <strong>Matters</strong></h2>
          <p>
            This isn't a story about one bad practice. It's about a pattern I see more often than I'd like. When complications happen, some surgeons - or their partners, their staff, their systems - respond with deflection. The patient gets blame instead of a plan. Guilt instead of compassion. A recommendation to proceed with the other eye instead of fixing the one that's broken.
          </p>
          <p>
            Patients are vulnerable after a complication. They're scared. They want someone to explain what happened and tell them it's going to be okay. If the first thing they hear is that it was their fault, they internalize it. They stop asking questions. They stop seeking help. And the problem gets worse.
          </p>
          <p>
            Complications are never the patient's fault. And the ethical response - the only acceptable response - is honesty, compassion, and action.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>If you've had a cataract surgery complication and you're not sure what happened, you're allowed to ask. You're allowed to get a second opinion. And if anyone tells you it was your fault - question that. Complications are a part of surgery. Blame is not a part of care.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Related <strong>Reading</strong></h2>
          <div className="related-grid">
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>What to look for - and what to watch out for - when picking someone to operate on your eyes.</p>
            </Link>
            <Link href="/understanding-cataracts" className="related-card">
              <h3>Understanding Cataracts</h3>
              <p>A deeper explanation of what cataracts are and when it's time to consider surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
