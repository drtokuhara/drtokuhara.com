import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does Dr. Tokuhara have patient education videos?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Tokuhara has created a library of free educational videos covering cataracts, cataract surgery, lens implant options, recovery expectations, and patient stories. All videos are available on this page and on the Desert Vision Center YouTube channel.' } },
    { '@type': 'Question', name: 'Where can I learn about cataract surgery before my appointment?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Tokuhara provides free video education organized by topic: understanding cataracts, surgery options, lens implants, recovery, and real patient experiences. Watching these before your consultation helps you ask better questions and feel more confident about the process.' } },
    { '@type': 'Question', name: 'Are the education videos free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All patient education videos are completely free. There is no login, no paywall, and no sales pitch. They are created by Dr. Tokuhara to help patients make informed decisions about their eye care.' } },
    { '@type': 'Question', name: 'What topics do the education videos cover?', acceptedAnswer: { '@type': 'Answer', text: 'The video library covers five main areas: understanding cataracts and how they affect vision, cataract surgery and what to expect, lens implant options including premium lenses, recovery and post-operative care, and real patient stories from Desert Vision Center.' } },
  ],
};

export const metadata = {
  title: 'Patient Education Videos by Dr. Tokuhara',
  description: 'Dr. Tokuhara explains cataracts, surgery, lens implants, and recovery in plain language. Free educational videos. No jargon, no sales pitch.',
  alternates: {
    canonical: '/education',
  },
  openGraph: {
    title: 'Patient Education | Dr. Keith Tokuhara',
    description: 'Free educational videos about cataracts, surgery, lens options, and patient stories from Dr. Tokuhara at Desert Vision Center.',
    url: 'https://drtokuhara.com/education',
  },
};

const videoCategories = [
  {
    title: 'Understanding Cataracts',
    description: 'What cataracts are, how they affect your vision, and the basics you should know.',
    videos: [
      { id: 'iYKugpBcnQY', title: 'What Are Cataracts? Dr. Tokuhara Explains', desc: 'A straightforward explanation of what cataracts are and how they affect your vision.' },
      { id: 'nP9Xi_aC-0w', title: 'Cataract Lecture: Introduction and Overview', desc: 'A deeper look at cataract development, types, and when they start to matter.' },
      { id: 'r3sV8sKtNW0', title: 'Diabetic Retinopathy: Introduction', desc: 'How diabetes affects the eye, and why it matters for cataract patients with diabetes.' },
      { id: 'JzspGX4RErQ', title: 'YAG Laser Capsulotomy for Posterior Capsule Opacification', desc: 'What happens if your vision gets cloudy again after cataract surgery, and how a quick laser fixes it.' },
    ],
  },
  {
    title: 'Choosing Your Surgeon',
    description: 'How to find the right cataract surgeon, questions to ask, and what to watch out for.',
    videos: [
      { id: 'vYTl3Eatzhw', title: 'How to Choose Your Cataract Surgeon', desc: 'What actually matters when picking a surgeon. Not the marketing. The real stuff.' },
      { id: 'YxmR_NSv5-k', title: '5 Questions to Ask Before Cataract Surgery', desc: 'The questions most patients forget to ask, and why they matter.' },
      { id: 'X9exdy0pTyw', title: 'Is Your Cataract Surgeon Really Your Choice? (KESQ News)', desc: 'Dr. Tokuhara on KESQ talking about how referral patterns affect who does your surgery.' },
      { id: 'oPV_lteXtzo', title: 'The Unspoken Story of Cataract Referral Kickbacks', desc: 'The financial incentives in eye care that most patients never hear about.' },
      { id: 'sG3rN3WXW3o', title: 'Ethical Cataract Surgery and Patient First Eye Care', desc: 'Dr. Tokuhara at Ethics in Eyecare 2025 on what patient first medicine actually looks like.' },
    ],
  },
  {
    title: 'Lens Options',
    description: 'Different lens implants explained. What they do, who they work best for, and honest pros and cons.',
    videos: [
      { id: 'uCbLzD-KXe4', title: 'Toric Lens Implants for Astigmatism', desc: 'How toric lenses reduce astigmatism during cataract surgery.' },
      { id: 'Yomf55PktXU', title: 'PanOptix vs PanOptix Pro: Real Patient Experience', desc: 'The differences between PanOptix and PanOptix Pro, with a real patient sharing their experience.' },
      { id: '4EEq6cg9zyY', title: 'Vivity Lens: Behind the Scenes', desc: 'A look at the Vivity extended depth of focus lens and how it works in practice.' },
      { id: '85V5DGG6Rw0', title: 'Clareon Lens: Cataract Surgery with Dr. Tokuhara', desc: 'The Clareon monofocal lens and what makes it different from older monofocal options.' },
      { id: 'i7ME2ufk1iM', title: 'First PanOptix Pro Surgery in Coachella Valley', desc: 'Dr. Tokuhara performs the first PanOptix Pro trifocal lens surgery in the valley.' },
    ],
  },
  {
    title: 'Surgery Experience',
    description: 'What actually happens before, during, and after cataract surgery. No sugarcoating.',
    videos: [
      { id: 'F8Z81PMgVR0', title: 'How We Do Cataract Surgery', desc: 'A walkthrough of the modern cataract surgery procedure from start to finish.' },
      { id: '3vEQKShP_Tg', title: 'Laser Cataract Surgery with Dr. Tokuhara', desc: 'How laser assisted techniques add precision to cataract surgery.' },
      { id: 'XeELWvMkBY8', title: 'What Happens in Cataract Pre-Op?', desc: 'What to expect at your pre-operative appointment before surgery day.' },
      { id: '7mkouTcQWOo', title: 'Cataract Recovery: What Happens After Surgery?', desc: 'The recovery room, the first few days, and what to expect as your eye heals.' },
      { id: 'ZoV2RTUlEZo', title: 'Welcome to Desert Vision Center', desc: 'A video tour of the practice so you know what to expect when you walk in.' },
    ],
  },
  {
    title: 'Patient Stories',
    description: 'Real patients sharing their experience. Not actors. Not scripts. Just honest stories.',
    videos: [
      { id: 'pn3W39CfemU', title: "Carol's Cataract Surgery Journey: 20/20 Vision", desc: "Carol's experience going from cloudy vision to 20/20 with Dr. Tokuhara." },
      { id: 'm3xHlebhPUQ', title: "Eric Redd's Cataract Experience", desc: "Eric shares what cataract surgery was like and why he chose Desert Vision Center." },
      { id: 'pm6T4CUmLrE', title: "Philip Ferranti's Cataract Journey", desc: "Philip, a Coachella Valley hiking enthusiast, talks about getting his vision back." },
      { id: 'vdD3lBubt58', title: "Cataract Surgery in a Monocular Eye: Mr. Baird's Journey", desc: "One of the highest stakes surgeries there is: cataract surgery when you only have one functioning eye." },
      { id: 'aXl4PhNQBg8', title: 'Dr. Tokuhara Recognized on NBC', desc: 'NBC recognizes Dr. Tokuhara as the best cataract surgeon in the Coachella Valley.' },
    ],
  },
  {
    title: 'Complex Cases',
    description: 'The difficult surgeries. Complications, corrections, and cases other surgeons turned away.',
    videos: [
      { id: '7VkbQx36LeI', title: 'Posterior Capsule Rupture Explained', desc: 'What happens when the capsule behind the lens tears during surgery, and how to handle it.' },
      { id: 'B8sM9Xa5mus', title: 'Iris Damage Repair After Cataract Surgery', desc: 'Repairing iris damage from a complicated cataract procedure performed elsewhere.' },
      { id: 'ZrnRIEa0F44', title: 'Fixing a Dislocated Lens Implant: Yamane Technique', desc: 'When a lens implant falls out of position and needs to be secured with an advanced technique.' },
    ],
  },
  {
    title: 'More from Dr. Tokuhara',
    description: 'Eye health, conference talks, practice life, and a few things that are just fun.',
    videos: [
      { id: 'jeFeoWY2PjM', title: 'Top 3 Eye Consults: Red Eye, Diabetes, Macular Degeneration', desc: 'The most common eye problems Dr. Tokuhara sees and what you should know about each one.' },
      { id: 'STz5Xa3ghsU', title: 'Glaucoma Overview', desc: 'An introduction to glaucoma: what it is, how it affects vision, and treatment approaches.' },
      { id: 'NJ1dx9nKHCA', title: 'What to Do When You Get Dust in Your Eyes', desc: 'Practical advice for a common problem. Spoiler: don\'t rub.' },
      { id: '0cuh_27jUtE', title: 'EnChroma Color Deficiency Glasses', desc: 'Trying on color deficiency correction glasses at Desert Vision Center.' },
      { id: 't8io32ShMYM', title: 'ASCRS 2025 in Los Angeles', desc: 'Behind the scenes at the biggest cataract surgery conference in the country.' },
      { id: 'q2FvsydPIpk', title: 'Dr. Tokuhara Discusses Family on KESQ News', desc: 'The personal side: family, values, and why they shape the way he practices.' },
      { id: 'h8FW2R_GlG0', title: 'DVC Staff Wellness Day', desc: 'A look at the Desert Vision Center team and how they take care of each other.' },
      { id: 'fcFDudaozA4', title: 'Why Ophthalmologists Wear Colorful Socks', desc: 'The important questions in medicine. Finally answered.' },
      { id: 'MSOiF-MAvv4', title: 'Documentation in Ophthalmology', desc: 'A talk for eye care professionals on documentation and record keeping.' },
    ],
  },
];


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education' },
]);

export default function EducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* PAGE HERO */}
      <VideoBackground src="/media/ambient-desert-sunrise-golden.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Patient <strong>Education</strong></h1>
            <p className="page-hero-sub">I make these videos because I think patients deserve real answers, not marketing brochures. Watch whatever interests you.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* CATEGORY SECTIONS */}
      {videoCategories.map((category, catIndex) => (
        <section key={catIndex} className={`section ${catIndex % 2 === 0 ? 'section-white' : 'section-warm'}`}>
          <div className="container">
            <ScrollReveal direction="up" once={true}>
              <h2 className="section-title">{category.title.split(' ').slice(0, -1).join(' ')} <strong>{category.title.split(' ').slice(-1)[0]}</strong></h2>
              <div className="section-subtitle">{category.description}</div>
            </ScrollReveal>
            <StaggerChildren className="video-grid video-grid-education" staggerDelay={0.1}>
              {category.videos.map((video) => (
                <StaggerItem key={video.id}>
                  <div className="video-card">
                  <div className="video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="video-card-text">
                    <p className="video-label">{video.title}</p>
                    <p className="video-desc">{video.desc}</p>
                  </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      ))}

      {/* LIFESTYLE IMAGES */}
      <section className="section section-warm" style={{paddingTop: '24px', paddingBottom: '24px'}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/lifestyle-poolside-reading.jpg"
              alt="Relaxing poolside with a book in the Coachella Valley sun"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <div className="content-image" style={{marginTop: '24px'}}>
            <Image
              src="/media/stock-group-tennis-bench.jpg"
              alt="Friends resting on a tennis bench after a match - staying active with clear vision"
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
          <h2>Still have <strong>questions?</strong></h2>
          <p>Videos can only go so far. If you want to talk about your specific situation, reach out. I&rsquo;d rather answer your questions now than have you guessing.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
