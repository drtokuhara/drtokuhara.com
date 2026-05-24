'use client';

import { useState, useRef } from 'react';

function trackDownload(title, pdfPath) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: title,
      file_extension: 'pdf',
      link_url: pdfPath,
    });
  }
}

export default function PatientGuideDownload({ pdfPath, title, description }) {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);
  const linkRef = useRef(null);

  const handleDownload = () => {
    trackDownload(title, pdfPath);
    setDownloaded(true);

    // Trigger actual download
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = pdfPath.split('/').pop() || 'patient-guide.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || sending) return;
    setSending(true);

    // Track email opt-in event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'guide_email_optin', {
        file_name: title,
        link_url: pdfPath,
      });
    }

    try {
      const response = await fetch('/api/send-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          title,
          pdfUrl: pdfPath,
        }),
      });

      if (response.ok) {
        setEmailSent(true);
      } else {
        console.error('Failed to send guide email');
      }
    } catch (err) {
      console.error('Send guide error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="guide-download">
      {!downloaded ? (
        <button className="guide-download-btn" onClick={handleDownload}>
          <svg className="guide-download-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span className="guide-download-text">
            <strong>Download Patient Guide</strong>
            {description && <span className="guide-download-sub">{description}</span>}
          </span>
        </button>
      ) : emailSent ? (
        <div className="guide-download-thanks">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E94A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span>Guide sent to your email.</span>
        </div>
      ) : (
        <div className="guide-download-postoffer">
          <div className="guide-download-confirm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E94A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>Guide downloaded.</span>
          </div>
          <form className="guide-download-email" onSubmit={handleEmailSubmit}>
            <span className="guide-download-email-label">Want a copy emailed for easy reference?</span>
            <div className="guide-download-email-row">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="guide-download-email-input"
                required
              />
              <button type="submit" className="guide-download-email-btn" disabled={sending}>
                {sending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      )}

      <style jsx>{`
        .guide-download {
          margin: 24px 0;
        }
        .guide-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px;
          border-radius: 10px;
          border: 1.5px solid #007D95;
          background: linear-gradient(145deg, rgba(0, 125, 149, 0.06) 0%, rgba(0, 125, 149, 0.02) 100%);
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: 'Montserrat', sans-serif;
          text-align: left;
          color: #1A1A2E;
        }
        .guide-download-btn:hover {
          background: linear-gradient(145deg, rgba(0, 125, 149, 0.12) 0%, rgba(0, 125, 149, 0.04) 100%);
          border-color: #2E94A4;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0, 125, 149, 0.12);
        }
        .guide-download-btn:active {
          transform: translateY(0);
        }
        .guide-download-icon {
          flex-shrink: 0;
          color: #007D95;
        }
        .guide-download-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .guide-download-text strong {
          font-size: 0.9rem;
          font-weight: 600;
          color: #007D95;
        }
        .guide-download-sub {
          font-size: 0.75rem;
          color: #52596B;
          font-weight: 400;
        }
        .guide-download-postoffer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 16px 20px;
          border-radius: 10px;
          background: rgba(0, 125, 149, 0.04);
          border: 1px solid rgba(0, 125, 149, 0.1);
          animation: fadeIn 0.3s ease;
        }
        .guide-download-confirm {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #2E94A4;
        }
        .guide-download-email {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .guide-download-email-label {
          font-size: 0.78rem;
          color: #52596B;
        }
        .guide-download-email-row {
          display: flex;
          gap: 8px;
        }
        .guide-download-email-input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #E8E4DE;
          border-radius: 6px;
          font-size: 0.82rem;
          font-family: 'Montserrat', sans-serif;
          outline: none;
          transition: border-color 0.2s ease;
          color: #1A1A2E;
          max-width: 240px;
        }
        .guide-download-email-input:focus {
          border-color: #73C0D6;
        }
        .guide-download-email-btn {
          padding: 8px 16px;
          border-radius: 6px;
          border: none;
          background: #007D95;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          transition: background 0.2s ease;
          white-space: nowrap;
        }
        .guide-download-email-btn:hover {
          background: #2E94A4;
        }
        .guide-download-email-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .guide-download-thanks {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 8px;
          background: rgba(46, 148, 164, 0.06);
          font-size: 0.85rem;
          font-weight: 500;
          color: #2E94A4;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          .guide-download-btn {
            padding: 12px 18px;
            gap: 10px;
          }
          .guide-download-email-row {
            flex-direction: column;
          }
          .guide-download-email-input {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
