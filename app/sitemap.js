export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://drtokuhara.com';

  // Core pages - highest priority
  const corePages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/cataract-surgery', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/lens-implants-explained', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/complex-cases', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/clear-in-a-day', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/patient-journey', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/education', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/patient-stories', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/insights', priority: 0.8, changeFrequency: 'weekly' },
  ];

  // Service and educational pages
  const servicePages = [
    { path: '/choosing-your-surgeon', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/cataract-pre-op', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-recovery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/understanding-cataracts', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/what-causes-cataracts', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/is-cataract-surgery-safe', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/laser-cataract-surgery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgery-complications', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ethical-cataract-care', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ready-for-surgery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/understand-your-options', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/monocular-cataract-surgery', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/my-cataract-drops', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/about-coachella-valley-eye-care', priority: 0.6, changeFrequency: 'monthly' },
  ];

  // Lens comparison and technology pages
  const lensPages = [
    { path: '/vivity-vs-panoptix', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/panoptix-vs-panoptix-pro', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/toric-lens-astigmatism', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/clareon-lens', priority: 0.7, changeFrequency: 'monthly' },
  ];

  // Post-surgery condition pages
  const conditionPages = [
    { path: '/blurry-vision-after-cataract-surgery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/dysphotopsia-after-cataract-surgery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/halos-after-cataract-surgery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/dropped-lens-after-cataract-surgery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/yag-laser-capsulotomy', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/yamane-technique', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/diabetic-retinopathy', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/dust-in-eyes', priority: 0.5, changeFrequency: 'monthly' },
  ];

  // Complex case subpages
  const complexCasePages = [
    '/complex-cases/alzheimers-dementia',
    '/complex-cases/aphakia-after-retina',
    '/complex-cases/diabetes',
    '/complex-cases/down-syndrome',
    '/complex-cases/floppy-iris',
    '/complex-cases/fuchs-dystrophy',
    '/complex-cases/glaucoma-and-cataract',
    '/complex-cases/macular-degeneration',
    '/complex-cases/parkinsons-disease',
    '/complex-cases/previous-lasik',
    '/complex-cases/previous-retina-surgery',
    '/complex-cases/previous-rk',
    '/complex-cases/pseudoexfoliation',
    '/complex-cases/retained-silicone-oil',
  ].map((path) => ({ path, priority: 0.7, changeFrequency: 'monthly' }));

  // Insight articles
  const insightPages = [
    '/insights/the-consultation-that-changed-everything',
    '/insights/do-i-really-need-surgery',
    '/insights/when-is-the-right-time',
    '/insights/when-the-surgeon-says-wait',
    '/insights/when-patients-wait',
    '/insights/permission-to-see-again',
    '/insights/the-needle-that-wasnt-there',
    '/insights/the-reader-who-almost-gave-up-her-books',
    '/insights/the-man-who-wanted-his-younger-eyes-back',
    '/insights/the-number-that-wasnt-the-problem',
    '/insights/when-ai-recommends-your-lens',
    '/insights/when-guilt-replaces-explanation',
    '/insights/when-more-isnt-better',
    '/insights/are-premium-lenses-worth-it',
    '/insights/five-questions-before-surgery',
    '/insights/three-things-patients-say',
    '/insights/twenty-years-forward',
  ].map((path) => ({ path, priority: 0.6, changeFrequency: 'monthly' }));

  // Utility pages
  const utilityPages = [
    { path: '/app-privacy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const allPages = [
    ...corePages,
    ...servicePages,
    ...lensPages,
    ...conditionPages,
    ...complexCasePages,
    ...insightPages,
    ...utilityPages,
  ];

  return allPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-05-06'),
    changeFrequency,
    priority,
  }));
}
