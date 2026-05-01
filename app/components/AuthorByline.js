import Image from 'next/image';
import Link from 'next/link';

export default function AuthorByline({ date }) {
  return (
    <div className="author-byline">
      <div className="author-byline-avatar">
        <Image
          src="/media/Dr-Tokuhara.jpg"
          alt="Dr. Keith Tokuhara"
          width={48}
          height={48}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      <div className="author-byline-info">
        <p className="author-byline-name">
          <Link href="/about">Dr. Keith Tokuhara, MD</Link>
        </p>
        <p className="author-byline-role">
          Fellowship-Trained Cataract Surgeon, Desert Vision Center
          {date && <span className="author-byline-date"> · {date}</span>}
        </p>
      </div>
    </div>
  );
}
