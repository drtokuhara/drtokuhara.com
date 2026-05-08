'use client';

const defaultVideos = [
  { id: '2WgJ1EJFBr0', title: 'Patient Testimonial' },
  { id: 'h2BpkzXj5to', title: 'Patient Testimonial' },
  { id: 'C0823IcCP_M', title: 'Patient Testimonial' },
  { id: 'Mq86AllYXRg', title: 'Day After Surgery with Dr. Tokuhara' },
];

export default function YouTubeShorts({ videos = defaultVideos, title = "Hear From Our Patients", subtitle = "Real stories from real patients. No scripts, no actors." }) {
  return (
    <section className="youtube-shorts-section">
      <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--oasis)',
          marginBottom: '16px',
        }}>Patient Stories</p>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          marginBottom: '12px',
        }}>{title}</h2>
        <p style={{
          fontSize: '17px',
          color: 'var(--text-light)',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>{subtitle}</p>
      </div>
      <div className="youtube-shorts-scroll">
        {videos.map((video, i) => (
          <div key={i} className="youtube-short-item">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
