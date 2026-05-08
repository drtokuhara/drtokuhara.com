import Link from 'next/link';

const caseData = {
  'alzheimers-dementia': { short: "Alzheimer's / Dementia" },
  'aphakia-after-retina': { short: 'Aphakia After Retina' },
  'diabetes': { short: 'Diabetes' },
  'down-syndrome': { short: 'Down Syndrome' },
  'floppy-iris': { short: 'Floppy Iris (IFIS)' },
  'fuchs-dystrophy': { short: "Fuchs' Dystrophy" },
  'glaucoma-and-cataract': { short: 'Glaucoma' },
  'macular-degeneration': { short: 'Macular Degeneration' },
  'parkinsons-disease': { short: "Parkinson's" },
  'previous-lasik': { short: 'Previous LASIK' },
  'previous-retina-surgery': { short: 'Previous Retina Surgery' },
  'previous-rk': { short: 'Previous RK' },
  'pseudoexfoliation': { short: 'Pseudoexfoliation' },
  'retained-silicone-oil': { short: 'Retained Silicone Oil' },
};

const relatedMap = {
  'alzheimers-dementia': ['parkinsons-disease', 'down-syndrome', 'diabetes', 'floppy-iris'],
  'aphakia-after-retina': ['previous-retina-surgery', 'retained-silicone-oil', 'macular-degeneration', 'diabetes'],
  'diabetes': ['macular-degeneration', 'glaucoma-and-cataract', 'previous-retina-surgery', 'aphakia-after-retina'],
  'down-syndrome': ['alzheimers-dementia', 'floppy-iris', 'pseudoexfoliation', 'parkinsons-disease'],
  'floppy-iris': ['pseudoexfoliation', 'glaucoma-and-cataract', 'parkinsons-disease', 'alzheimers-dementia'],
  'fuchs-dystrophy': ['pseudoexfoliation', 'glaucoma-and-cataract', 'floppy-iris', 'previous-lasik'],
  'glaucoma-and-cataract': ['pseudoexfoliation', 'fuchs-dystrophy', 'diabetes', 'macular-degeneration'],
  'macular-degeneration': ['diabetes', 'previous-retina-surgery', 'glaucoma-and-cataract', 'retained-silicone-oil'],
  'parkinsons-disease': ['alzheimers-dementia', 'floppy-iris', 'down-syndrome', 'diabetes'],
  'previous-lasik': ['previous-rk', 'fuchs-dystrophy', 'glaucoma-and-cataract', 'previous-retina-surgery'],
  'previous-retina-surgery': ['aphakia-after-retina', 'retained-silicone-oil', 'macular-degeneration', 'diabetes'],
  'previous-rk': ['previous-lasik', 'fuchs-dystrophy', 'glaucoma-and-cataract', 'pseudoexfoliation'],
  'pseudoexfoliation': ['floppy-iris', 'glaucoma-and-cataract', 'fuchs-dystrophy', 'previous-rk'],
  'retained-silicone-oil': ['aphakia-after-retina', 'previous-retina-surgery', 'macular-degeneration', 'glaucoma-and-cataract'],
};

export default function RelatedComplexCases({ current }) {
  const related = relatedMap[current] || [];
  if (related.length === 0) return null;

  return (
    <section className="related-complex-cases">
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="related-cases-label">Related Complex Cases</p>
        <div className="related-cases-grid">
          {related.map((slug) => {
            const info = caseData[slug];
            if (!info) return null;
            return (
              <Link key={slug} href={`/complex-cases/${slug}`} className="related-case-card">
                <span className="related-case-title">{info.short}</span>
              </Link>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
          <Link href="/complex-cases" style={{ fontSize: '0.9rem', color: 'var(--oasis)', textDecoration: 'none' }}>View All Complex Cases &rarr;</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <Link href="/cataract-surgery" style={{ fontSize: '0.9rem', color: 'var(--oasis)', textDecoration: 'none' }}>Cataract Surgery Overview &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
