import React, { useState } from 'react';
import { PageRoute, ChurchEvent, Sermon } from '../types';
import { churchData } from '../data/churchData';
import { Lightbox } from '../components/Lightbox';
import { EventModal } from '../components/EventModal';
import { SermonModal } from '../components/SermonModal';
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  Play,
  ArrowRight,
  ExternalLink,
  Sparkles,
  HeartHandshake,
  Flame,
  Globe,
  ShieldCheck,
  Music,
  Navigation,
  BookOpen,
  ChevronRight,
  Cross
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPlanVisit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenPlanVisit,
}) => {
  const sundayService = churchData.serviceSchedules.find((s) => s.id === 'sunday-worship') || churchData.serviceSchedules[0];

  // Lightbox state for gallery
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Modal states for events & sermons
  const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isSermonModalOpen, setIsSermonModalOpen] = useState(false);

  const getMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C59B27]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C59B27]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#C59B27]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#C59B27]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C59B27]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#C59B27]" />;
      default:
        return <Cross className="w-5 h-5 text-[#C59B27]" />;
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('join-us-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full space-y-0">
      
      {/* =========================================================================
          A. HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-[#0A1420]">
        {/* Background Church/Worship Image with deep warm overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/church hero.jpg.jpeg"
            alt="Church sanctuary illuminated with warm natural light"
            className="w-full h-full object-cover object-center scale-105 filter brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A1420]/80 via-[#0A1420]/60 to-[#0A1420]/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white space-y-8">
          
          {/* Historical Heritage Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF4E5]/15 border border-[#D4AF37]/50 text-[#E8C860] backdrop-blur-xs text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse"></span>
            <span>Bulandshahr, Uttar Pradesh • Historic Heritage Since 1898</span>
          </div>

          {/* Main Titles */}
          <div className="space-y-4">
            <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Methodist Episcopal Church <br className="hidden sm:inline" />
              <span className="text-[#E8C860] font-cinzel">in Southern Asia</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              {churchData.tagline}
            </p>
          </div>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Join Us This Week</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenPlanVisit}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#16273C]/80 hover:bg-[#1E3450] text-white border border-[#C59B27]/60 hover:border-[#C59B27] font-semibold text-sm sm:text-base tracking-wide backdrop-blur-xs shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#E8C860]" />
              <span>Plan Your Visit</span>
            </button>
          </div>

          {/* Quick Sunday Indicator */}
          <div className="pt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300">
            <Clock className="w-4 h-4 text-[#E8C860]" />
            <span>Sunday Worship Gathering: <strong>{sundayService?.time || '09:00 AM'}</strong> at Church Sanctuary, {churchData.location.city}</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          B. WELCOME SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
                Welcome to MECSA Bulandshahr
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F] leading-tight">
                Welcome to Methodist Episcopal Church in Southern Asia
              </h2>

              <p className="text-sm sm:text-base text-[#3E4D5E] leading-relaxed">
                Whether you are a lifelong believer, exploring Christian faith, or seeking a spiritual home in Bulandshahr, we welcome you with open arms and warm hearts. Here, the Word of God is reverently proclaimed, prayers are faithfully offered, and the love of Jesus Christ unites us across generations.
              </p>

              <p className="text-sm sm:text-base text-[#556376] leading-relaxed">
                For over a century—dating back to our documented presence in 1898—our church has ministered in Bulandshahr with unwavering dedication to Scripture, liturgical worship, and practical compassion for our local neighbors.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <span>Learn More About Our Church</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <button
                  onClick={onOpenPlanVisit}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-gray-50 text-[#0F1D2F] border border-[#D5CBBF] text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <span>Visitor Information</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E0D7C6] bg-white p-2">
                <img
                  src="/images/home congreagtion.jpg.jpeg"
                  alt="Interior sanctuary of church ready for divine worship"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#0F1D2F]/90 backdrop-blur-md p-4 rounded-lg border border-[#C59B27]/40 text-white">
                  <p className="font-cinzel text-xs font-semibold text-[#D4AF37]">
                    Faith • Fellowship • Heritage
                  </p>
                  <p className="text-xs text-gray-200 mt-0.5">
                    Gathering in reverent worship and sincere Christian community in Bulandshahr.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          C. JOIN US THIS WEEK
          ========================================================================= */}
      <section id="join-us-section" className="py-16 lg:py-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Gathering Schedule
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Join Us This Week
            </h2>
            <p className="text-xs sm:text-sm text-[#556376]">
              Come experience God&apos;s presence in liturgical worship, devotional prayer, and choral harmony.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {churchData.serviceSchedules.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl p-6 sm:p-8 border shadow-xs transition-all duration-200 flex flex-col justify-between ${
                  index === 0
                    ? 'border-[#C59B27] ring-1 ring-[#C59B27]/30 bg-linear-to-b from-white to-[#FDFBF7]'
                    : 'border-[#E5DDD0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF4E5] border border-[#E5D5A8] flex items-center justify-center text-[#8C6D1F]">
                      {index === 0 ? <Cross className="w-6 h-6 text-[#C59B27]" /> : index === 1 ? <Music className="w-6 h-6 text-[#C59B27]" /> : <Heart className="w-6 h-6 text-[#C59B27]" />}
                    </div>
                    {index === 0 && (
                      <span className="px-2.5 py-1 rounded-full bg-[#C59B27] text-[#0F1D2F] text-[10px] font-bold uppercase tracking-wider">
                        Main Service
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#8C6D1F]">
                    {service.day}
                  </div>
                  
                  <h3 className="text-xl font-serif-heading font-bold text-[#0F1D2F] mt-1">
                    {service.name}
                  </h3>

                  <div className="mt-2 text-sm font-semibold text-[#C59B27] flex items-center gap-1.5">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{service.time}</span>
                  </div>

                  <p className="text-xs text-[#556376] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {service.isPlaceholderTime && (
                    <p className="text-[10px] text-gray-400 italic mt-2">
                      * Timings editable by church administration
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EAE0]">
                  <button
                    onClick={onOpenPlanVisit}
                    className="w-full text-center py-2.5 px-4 rounded-md text-xs font-semibold bg-[#F5EFE6] hover:bg-[#EAE2D5] text-[#0F1D2F] transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>View Visitor Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Location & Directions Banner */}
          <div className="bg-[#0F1D2F] text-white rounded-xl p-6 sm:p-8 shadow-md border border-[#1F334D] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#182C44] border border-[#C59B27]/50 flex items-center justify-center text-[#C59B27] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-serif-heading font-bold text-white">
                  Church Sanctuary Location
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  {churchData.churchName} • {churchData.location.addressLine}, {churchData.location.city}, {churchData.location.state}
                </p>
                <p className="text-xs text-[#D4AF37]">
                  {churchData.location.landmark}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={churchData.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={onOpenPlanVisit}
                className="px-5 py-3 rounded-lg bg-[#1B3250] hover:bg-[#234268] text-white font-semibold text-xs border border-white/20 transition-colors cursor-pointer"
              >
                Plan Your Visit
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          D. UPCOMING EVENTS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
                Church Calendar & Gatherings
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
                Upcoming Events & Activities
              </h2>
              <p className="text-xs sm:text-sm text-[#556376]">
                Special worship assemblies, community relief drives, and youth fellowship programs.
              </p>
            </div>

            <a
              href={churchData.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1877F2] hover:bg-[#0E65D9] text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
            >
              <span>See More Activities on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {churchData.events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E5DDD0] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#0F1D2F] flex items-center justify-center">
                    <img
                      src={event.image}
                      alt={event.imageAlt}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F1D2F]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded backdrop-blur-xs border border-[#C59B27]/40">
                      {event.date.split(',')[0]}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <div className="text-[11px] text-[#8C6D1F] font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      <h3 className="font-serif-heading text-base font-bold text-[#0F1D2F] line-clamp-2 leading-snug">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#556376] line-clamp-3 leading-relaxed">
                      {event.shortDescription}
                    </p>

                    <div className="text-[11px] text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C59B27] shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setIsEventModalOpen(true);
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#0F1D2F] text-[#0F1D2F] hover:text-white border border-[#E0D7C6] text-xs font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          E. ABOUT OUR CHURCH PREVIEW
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E0D7C6] bg-white p-2">
                <img
                  src="/images/about church.jpeg"
                  alt="Historic church heritage in Bulandshahr"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-[#0F1D2F]/90 text-[#D4AF37] font-cinzel text-xs font-bold px-3 py-1.5 rounded border border-[#C59B27]/40 shadow-xs">
                  Bulandshahr Heritage Since 1898
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
                Our Story & Vision
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
                About Our Church
              </h2>

              <p className="text-sm sm:text-base text-[#3E4D5E] leading-relaxed">
                {churchData.about.historyIntro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-lg border border-[#E5DDD0] space-y-1.5">
                  <h4 className="font-cinzel text-xs font-bold text-[#8C6D1F] uppercase tracking-wider">
                    Our Mission
                  </h4>
                  <p className="text-xs text-[#556376] leading-relaxed">
                    To glorify God through sincere worship, proclaim the Gospel of Jesus Christ, and serve the community with Christ-like love.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-[#E5DDD0] space-y-1.5">
                  <h4 className="font-cinzel text-xs font-bold text-[#8C6D1F] uppercase tracking-wider">
                    Our Vision
                  </h4>
                  <p className="text-xs text-[#556376] leading-relaxed">
                    To remain a steadfast, welcoming Christian church in Bulandshahr, honoring historical heritage while nurturing vibrant spiritual discipleship.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <span>Read Full Church History & Leadership</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          F. OUR MINISTRIES PREVIEW (6 Ministries)
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Serving God & One Another
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Our Ministries
            </h2>
            <p className="text-xs sm:text-sm text-[#556376]">
              Every member is equipped and encouraged to minister through prayer, music, care, and Gospel outreach.
            </p>
          </div>

          {/* 6 Ministry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {churchData.ministries.map((ministry) => (
              <div
                key={ministry.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E5DDD0] shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="h-40 relative overflow-hidden bg-gray-100">
                  <img
                    src={ministry.image}
                    alt={ministry.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-full bg-[#0F1D2F]/80 border border-[#C59B27] flex items-center justify-center shrink-0">
                      {getMinistryIcon(ministry.iconName)}
                    </div>
                    <h3 className="font-serif-heading text-lg font-bold text-white drop-shadow-xs">
                      {ministry.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-[#556376] leading-relaxed">
                    {ministry.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          G. LATEST SERMON
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#0F1D2F] text-white border-b-4 border-[#C59B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Sermon Information */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-[#C59B27]/20 border border-[#C59B27] text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
                Word & Exposition
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-white leading-tight">
                Latest Sermon & Message
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-serif-heading font-semibold text-[#E8C860]">
                  &ldquo;{churchData.latestSermon.title}&rdquo;
                </h3>
                <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                  <span className="flex items-center gap-1">
                    <span className="text-gray-400">Speaker:</span>
                    <strong className="text-white">{churchData.latestSermon.speaker}</strong>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{churchData.latestSermon.passage}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {churchData.latestSermon.summary}
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsSermonModalOpen(true)}
                  className="px-6 py-3 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Sermon Broadcast</span>
                </button>

                <a
                  href={churchData.social.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg bg-[#182C44] hover:bg-[#203956] text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors flex items-center gap-2"
                >
                  <span>Church YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Video Thumbnail */}
            <div className="lg:col-span-6">
              <div 
                onClick={() => setIsSermonModalOpen(true)}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/40 group cursor-pointer aspect-video bg-black"
              >
                <img
                  src={churchData.latestSermon.thumbnailUrl}
                  alt="Sermon video broadcast thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C59B27] text-[#0F1D2F] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#E8C860] transition-all duration-200">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-200">
                  <p className="font-semibold text-white">{churchData.latestSermon.title}</p>
                  <p className="text-[11px] text-[#D4AF37]">{churchData.latestSermon.speaker}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          H. PRAYER REQUEST CTA
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#FAF4E5] border-b border-[#E5D5A8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#E8C860]/40 border border-[#C59B27] mx-auto flex items-center justify-center text-[#8C6D1F]">
            <Heart className="w-6 h-6 fill-current text-[#C59B27]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
            How Can We Pray for You?
          </h2>

          <p className="text-sm sm:text-base text-[#5A4515] max-w-2xl mx-auto leading-relaxed">
            &ldquo;Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.&rdquo; <span className="italic block mt-1 font-medium text-[#8C6D1F]">— Philippians 4:6</span>
          </p>

          <p className="text-xs sm:text-sm text-[#556376] max-w-xl mx-auto">
            Our pastoral team and prayer intercessors are committed to lifting your needs, thanksgiving, and spiritual burdens before the throne of grace.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('prayer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Submit a Prayer Request</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>


      {/* =========================================================================
          I. CHURCH GALLERY
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Life of the Fellowship
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Church Photo Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#556376]">
              Moments of worship, choir anthems, fellowship, and community service in Bulandshahr. Click any photo to view full-screen.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {churchData.gallery.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-lg border border-[#E5DDD0] bg-gray-100 aspect-4/3 cursor-pointer transition-all duration-200"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-white">
                  <p className="font-serif-heading text-sm font-semibold">{photo.title}</p>
                  <p className="text-[11px] text-gray-200 line-clamp-1">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          J. OPTIONAL FINAL CTA
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-[#0F1D2F] via-[#16273C] to-[#0F1D2F] text-white text-center border-t-2 border-[#C59B27]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-block px-3 py-1 rounded bg-[#C59B27]/20 border border-[#C59B27] text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
            All Are Welcome
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white">
            Come Worship With Us
          </h2>

          <p className="text-base sm:text-lg text-gray-200 font-light max-w-xl mx-auto">
            There&apos;s a place for you here.
          </p>

          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Join us this Sunday at {sundayService?.time || '09:00 AM'} in {churchData.location.city}, {churchData.location.state}. We look forward to meeting you and your family.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenPlanVisit}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer"
            >
              Plan Your Visit
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#1B3250] hover:bg-[#234268] text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        photos={churchData.gallery}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={() => {
          if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((selectedPhotoIndex - 1 + churchData.gallery.length) % churchData.gallery.length);
          }
        }}
        onNext={() => {
          if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((selectedPhotoIndex + 1) % churchData.gallery.length);
          }
        }}
      />

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isEventModalOpen}
        onClose={() => {
          setIsEventModalOpen(false);
          setSelectedEvent(null);
        }}
      />

      {/* Sermon Modal */}
      <SermonModal
        sermon={churchData.latestSermon}
        isOpen={isSermonModalOpen}
        onClose={() => setIsSermonModalOpen(false)}
      />

    </div>
  );
};
