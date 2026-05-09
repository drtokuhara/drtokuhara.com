import { breadcrumbSchema } from '../schema';

const jsonLd = [
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'App Privacy Policy', href: '/app-privacy' },
  ]),
];

export const metadata = {
  title: 'Privacy Policy - My Cataract Drops App',
  description: 'Privacy policy for the My Cataract Drops mobile application. No data collection, no tracking, no accounts required.',
  alternates: {
    canonical: '/app-privacy',
  },
  openGraph: {
    title: 'Privacy Policy - My Cataract Drops App',
    description: 'Privacy policy for the My Cataract Drops mobile application.',
    url: 'https://drtokuhara.com/app-privacy',
  },
};

export default function AppPrivacyPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="page-hero-sub">My Cataract Drops App</p>
        </div>
      </section>

      {/* PRIVACY CONTENT */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: '780px' }}>

          <p style={{ color: '#555', marginBottom: '2rem', fontSize: '14px' }}>
            Last updated: April 26, 2026
          </p>

          <p>
            This privacy policy describes how the <strong>My Cataract Drops</strong> mobile
            application ("the App") handles your information. We built this app with your
            privacy as a core principle: the App collects no personal data whatsoever.
          </p>

          <h2 style={{ marginTop: '2.5rem' }}>No Data Collection</h2>
          <p>
            The App does not collect, store, or transmit any personal information. Your drop
            schedules, reminders, and preferences are stored exclusively on your device and
            never leave it.
          </p>

          <h2 style={{ marginTop: '2.5rem' }}>Local Storage Only</h2>
          <p>
            All data created within the App remains on your device. Nothing is sent to any
            external server, cloud service, or third party. If you delete the App, all
            associated data is removed with it.
          </p>

          <h2 style={{ marginTop: '2.5rem' }}>No Analytics or Tracking</h2>
          <p>
            The App contains no analytics tools, advertising frameworks, or tracking
            mechanisms of any kind. We do not monitor how you use the App, and no usage
            data is collected or shared.
          </p>

          <h2 style={{ marginTop: '2.5rem' }}>No Account Required</h2>
          <p>
            The App does not require you to create an account, sign in, or provide any
            personal details. You can use the App immediately after installation with no
            registration step.
          </p>

          <h2 style={{ marginTop: '2.5rem' }}>No Cookies</h2>
          <p>
            As a native mobile application, My Cataract Drops does not use cookies or any
            similar web-based tracking technologies.
          </p>

          <h2 style={{ marginTop: '2.5rem' }}>Not a Medical Device</h2>
          <p>
            My Cataract Drops is a reminder tool designed to help you stay on schedule with
            your eye drop regimen. It is not a medical device and does not provide medical
            advice, diagnosis, or treatment. Always follow the instructions provided by your
            eye care professional.
          </p>

          <h2 style={{ marginTop: '2.5rem' }}>Contact</h2>
          <p>
            If you have questions about this privacy policy or the App, please contact us at:{' '}
            <a href="mailto:support@mycataractdrops.com" style={{ color: '#007D95' }}>
              support@mycataractdrops.com
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
