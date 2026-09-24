import React, { useState } from 'react';
import { PageRoute, ChurchEvent } from '../types';
import { churchData } from '../data/churchData';
import { EventModal } from '../components/EventModal';
import { Calendar, Clock, MapPin, ExternalLink, ChevronRight, Info } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPlanVisit: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = () => {
  const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <div className="w-full space-y-0">
      {/* Banner */}
      <section className="bg-[#0F1D2F] text-white py-16 lg:py-24 border-b-4 border-[#C59B27] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E5]/15 border border-[#D4AF37]/50 text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
            <span>Parish Calendar & Activities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Upcoming Events & Gatherings
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Join the fellowship of Methodist Episcopal Church in Southern Asia for special worship assemblies, community relief, and Christian conferences.
          </p>
        </div>
      </section>

      {/* Main Events Listing */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#F4EFE6] rounded-xl border border-[#E0D5C3]">
            <div className="text-xs sm:text-sm text-[#3E4D5E]">
              <span className="font-bold text-[#0F1D2F] block sm:inline">Active Fellowship: </span>
              <span>Stay connected with all local parish updates, festival services, and volunteer initiatives.</span>
            </div>

            <a
              href={churchData.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1877F2] hover:bg-[#0E65D9] text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
            >
              <span>See More Activities on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {churchData.events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E5DDD0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#0F1D2F] flex items-center justify-center">
                    <img
                      src={event.image}
                      alt={event.imageAlt}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F1D2F]/90 text-[#E8C860] text-xs font-bold px-3 py-1 rounded backdrop-blur-xs border border-[#C59B27]/40 font-cinzel">
                      {event.date.split(',')[0]}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3 text-xs text-[#8C6D1F] font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{event.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{event.time}</span>
                        </span>
                      </div>

                      <h3 className="font-serif-heading text-lg font-bold text-[#0F1D2F] leading-snug">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#556376] leading-relaxed line-clamp-3">
                      {event.shortDescription}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                      <span className="line-clamp-1 font-medium">{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setIsEventModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#FAF8F5] hover:bg-[#0F1D2F] text-[#0F1D2F] hover:text-white border border-[#E0D7C6] text-xs font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Notice area */}
          <div className="p-4 rounded-xl bg-[#FAF4E5] border border-[#E5D5A8] flex items-center gap-3 text-xs text-[#7A5C13]">
            <Info className="w-4 h-4 shrink-0" />
            <p>
              Please note: Events and service schedules are subject to seasonal church calendar updates. For inquiries regarding specific events, contact our pastorate.
            </p>
          </div>

        </div>
      </section>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isEventModalOpen}
        onClose={() => {
          setIsEventModalOpen(false);
          setSelectedEvent(null);
        }}
      />
    </div>
  );
};
