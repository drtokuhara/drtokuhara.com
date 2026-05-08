// Shared Schema.org structured data for drtokuhara.com

export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Keith Tokuhara',
  alternateName: 'Keith Tokuhara, MD',
  description: 'Fellowship-trained cataract surgeon specializing in complex and revision cataract surgery, advanced lens implants, and personalized patient care at Desert Vision Center in the Coachella Valley.',
  url: 'https://drtokuhara.com',
  image: 'https://drtokuhara.com/dr-tokuhara-hero.jpg',
  telephone: '+17603403937',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '35900 Bob Hope Dr, Suite 175',
    addressLocality: 'Rancho Mirage',
    addressRegion: 'CA',
    postalCode: '92270',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7397,
    longitude: -116.4132,
  },
  medicalSpecialty: 'Ophthalmology',
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Loma Linda University' },
    { '@type': 'EducationalOrganization', name: 'University of Hawaii, John A. Burns School of Medicine' },
    { '@type': 'EducationalOrganization', name: 'University of California, Riverside' },
  ],
  award: [
    'Palm Springs Life Top Doctor (2019-2026)',
    'NBC Best Cataract Surgeon in the Coachella Valley',
  ],
  knowsAbout: [
    'Cataract Surgery',
    'Complex Cataract Surgery',
    'Lens Implant Surgery',
    'Yamane Secondary Lens Fixation',
    'Anterior Segment Surgery',
    'Toric Lens Implants',
    'Multifocal Lens Implants',
    'Extended Depth of Focus Lens Implants',
    'Iris Reconstruction',
  ],
  sameAs: [
    'https://x.com/DoctorTokuhara',
    'https://youtube.com/@desertvisioncenter',
    'https://desertvisioncenter.com/ophthalmologist-dr-tokuhara/',
  ],
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Cataract Surgery',
      description: 'Advanced cataract surgery with premium lens implant options including monofocal, EDOF, toric, and multifocal lenses.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'CLEAR in a Day (Same-Day Bilateral Cataract Surgery)',
      description: 'Both eyes treated in a single visit for eligible patients, reducing recovery time and office visits.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Complex and Revision Cataract Surgery',
      description: 'Specialized surgery for complications, dislocated lens implants, retained fragments, and cases referred by other surgeons.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Yamane Secondary Lens Fixation',
      description: 'Sutureless intrascleral fixation technique for securing lens implants in eyes without adequate capsular support.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Iris Reconstruction',
      description: 'Surgical repair of iris damage from trauma or surgical complications to restore function and reduce light sensitivity.',
    },
  ],
};

export const medicalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Desert Vision Center',
  description: 'Physician-owned, independent eye care practice specializing in advanced cataract surgery and complex revision cases in Rancho Mirage, California.',
  url: 'https://drtokuhara.com',
  telephone: '+17603403937',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '35900 Bob Hope Dr, Suite 175',
    addressLocality: 'Rancho Mirage',
    addressRegion: 'CA',
    postalCode: '92270',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7397,
    longitude: -116.4132,
  },
  medicalSpecialty: 'Ophthalmology',
  isAcceptingNewPatients: true,
  member: {
    '@type': 'Physician',
    name: 'Dr. Keith Tokuhara',
    url: 'https://drtokuhara.com/about',
  },
};

export function articleSchema({ title, description, slug, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description: description,
    url: `https://drtokuhara.com${slug}`,
    datePublished: datePublished || '2026-04-01',
    author: {
      '@type': 'Physician',
      name: 'Dr. Keith Tokuhara',
      url: 'https://drtokuhara.com/about',
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Desert Vision Center',
      url: 'https://drtokuhara.com',
    },
    medicalAudience: {
      '@type': 'PatientAudience',
    },
  };
}

export function videoSchema({ id, title, description, duration, thumbnailUrl, uploadDate }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Desert Vision Center',
      url: 'https://drtokuhara.com',
    },
    author: {
      '@type': 'Physician',
      name: 'Dr. Keith Tokuhara',
      url: 'https://drtokuhara.com/about',
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://drtokuhara.com${item.href}`,
    })),
  };
}
