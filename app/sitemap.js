export const dynamic = 'force-static';

import fs from 'fs';
import path from 'path';

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
    { path: '/gimbel-heritage', priority: 0.8, changeFrequency: 'monthly' },
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
    { path: '/when-cataract-surgery-doesnt-go-as-planned', priority: 0.8, changeFrequency: 'monthly' },
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
    { path: '/multifocal-vs-monofocal', priority: 0.8, changeFrequency: 'monthly' },
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
    { path: '/glaucoma', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/dry-eyes-desert', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/dust-in-eyes', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/posterior-subcapsular-cataract', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/narrow-angle-cataract', priority: 0.7, changeFrequency: 'monthly' },
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
    '/complex-cases/uveitis',
  ].map((path) => ({ path, priority: 0.7, changeFrequency: 'monthly' }));

  // Insight articles - auto-generated from disk so the sitemap never drifts
  // from the actual app/insights/ directory as articles are added.
  let insightSlugs = [];
  try {
    const insightsDir = path.join(process.cwd(), 'app', 'insights');
    insightSlugs = fs.readdirSync(insightsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .filter((d) => fs.existsSync(path.join(insightsDir, d.name, 'page.js')))
      .map((d) => d.name);
  } catch (e) {
    insightSlugs = [];
  }
  const insightPages = insightSlugs.map((slug) => ({
    path: `/insights/${slug}`, priority: 0.6, changeFrequency: 'monthly',
  }));

  // Our-story subpages
  const ourStoryPages = [
    '/our-story/built-in-the-desert',
    '/our-story/independent',
    '/our-story/one-surgeon',
    '/our-story/patient-referred',
    '/nervous-about-surgery',
  ].map((path) => ({ path, priority: 0.6, changeFrequency: 'monthly' }));

  // City landing pages - local SEO
  const cityPages = [
    { path: '/cataract-surgeon-rancho-mirage', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-palm-desert', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-indian-wells', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-la-quinta', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-palm-springs', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-cathedral-city', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-indio', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-coachella', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-desert-hot-springs', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-bermuda-dunes', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-thousand-palms', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-thermal-mecca', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-redlands', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-yucaipa', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-calimesa', priority: 0.7, changeFrequency: 'monthly' },
  ];

  // Geographic expansion pages - underserved communities beyond the valley
  const geographicPages = [
    { path: '/cataract-surgeon-mammoth-lakes', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-big-bear', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/cataract-surgeon-blythe', priority: 0.7, changeFrequency: 'monthly' },
  ];

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
    ...ourStoryPages,
    ...cityPages,
    ...geographicPages,
    ...utilityPages,
  ];

  return allPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-07-13'),
    changeFrequency,
    priority,
  }));
}
