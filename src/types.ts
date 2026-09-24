export type PageRoute = 'home' | 'about' | 'events' | 'prayer' | 'give' | 'contact';

export interface ServiceSchedule {
  id: string;
  name: string;
  day: string;
  time: string;
  description: string;
  isPlaceholderTime?: boolean;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  isPlaceholderDate?: boolean;
}

export interface Ministry {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  image: string;
  imageAlt: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  imageAlt: string;
  isPlaceholderBio?: boolean;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  passage: string;
  youtubeId: string;
  thumbnailUrl: string;
  summary: string;
  isPlaceholder?: boolean;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  category: 'historical' | 'milestone' | 'continuing';
  verifiedSource?: string;
  isDisputedContext?: boolean;
}

export interface HistoricalDocument {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  documentType: 'Record' | 'Publication' | 'Certificate' | 'Photograph' | 'Gazette';
  previewExcerpt?: string;
  filePlaceholderNotice: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
  alt: string;
}

export interface ChurchConfig {
  churchName: string;
  shortName: string;
  tagline: string;
  location: {
    city: string;
    state: string;
    country: string;
    addressLine: string;
    landmark: string;
    pinCode: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    isPlaceholderAddress: boolean;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    emergencyPrayerLine?: string;
    isPlaceholderContact: boolean;
  };
  social: {
    facebookUrl: string;
    youtubeUrl: string;
    isPlaceholderSocial: boolean;
  };
  donation: {
    upiId: string;
    upiPayeeName: string;
    qrCodePlaceholderText: string;
    isPlaceholderUpi: boolean;
  };
  about: {
    historyIntro: string;
    mission: string;
    vision: string;
    mecsaToday: string;
    bulandshahrHistory: string;
    bishopsMessage: {
      bishopName: string;
      title: string;
      greeting: string;
      message: string;
      photoUrl: string;
      isPlaceholderMessage: boolean;
    };
  };
  beliefs: {
    title: string;
    description: string;
    scriptureReference: string;
  }[];
  sourcesAndReferences: {
    citation: string;
    details: string;
  }[];
  serviceSchedules: ServiceSchedule[];
  events: ChurchEvent[];
  ministries: Ministry[];
  leadership: LeadershipMember[];
  latestSermon: Sermon;
  timeline: TimelineMilestone[];
  historicalDocuments: HistoricalDocument[];
  coreValues: CoreValue[];
  gallery: GalleryPhoto[];
}
