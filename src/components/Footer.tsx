import React from 'react';
import { PageRoute } from '../types';
import { churchData } from '../data/churchData';
import { Clock, MapPin, Phone, Mail, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPlanVisit: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPlanVisit,
  onOpenPrivacyPolicy,
}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1D2F] text-[#E0E7F1] border-t-4 border-[#C59B27]">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Church Identity & Emblem */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Cross Emblem */}
             <img
  src="/images/mecsa-logo.png"
  alt="MECSA Church Logo"
  className="w-8 h-8 object-contain"
/>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-white">
                  MECSA
                </span>
                <span className="block text-[11px] text-[#C59B27] font-medium tracking-wide">
                  Bulandshahr, Uttar Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Methodist Episcopal Church in Southern Asia — Serving the Bulandshahr community in Christian faith, liturgical reverent worship, compassionate outreach, and Gospel ministry since 1898.
            </p>

            <div className="pt-2 text-xs text-amber-200/90 bg-[#162B44]/70 p-3 rounded-md border border-[#C59B27]/30">
              <span className="font-semibold block mb-0.5">Heritage & Community:</span>
              <span>Rooted in Methodist Episcopal history and dedicated to Christ&apos;s living ministry today.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-[#D4AF37] uppercase border-b border-[#223956] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  About Our Church & History
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('events')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Upcoming Events & Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('prayer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Prayer Request
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('give')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Give / Tithes & Offerings (UPI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPlanVisit}
                  className="text-[#D4AF37] hover:underline font-semibold transition-colors cursor-pointer flex items-center gap-1 mt-1"
                >
                  → Plan Your Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Weekly Service Timings */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-[#D4AF37] uppercase border-b border-[#223956] pb-2">
              Service Schedules
            </h4>
            <ul className="space-y-3 text-xs">
              {churchData.serviceSchedules.map((service) => (
                <li key={service.id} className="bg-[#14253B] p-2.5 rounded-md border border-[#223956]">
                  <div className="flex items-center gap-1.5 font-semibold text-white">
                    <Clock className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                    <span>{service.name}</span>
                  </div>
                  <div className="text-[11px] text-[#C59B27] mt-0.5 font-medium">
                    {service.day} • {service.time}
                  </div>
                  {service.isPlaceholderTime && (
                    <span className="text-[9px] text-gray-400 italic block mt-0.5">
                      (Standard schedule — contact for seasonal adjustments)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-[#D4AF37] uppercase border-b border-[#223956] pb-2">
              Church Information
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{churchData.churchName}</p>
                  <p className="text-gray-300 mt-0.5">{churchData.location.addressLine}</p>
                  <p className="text-gray-400">{churchData.location.city}, {churchData.location.state} – {churchData.location.pinCode}, India</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>{churchData.contact.phoneFormatted}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span className="break-all">{churchData.contact.email}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPlanVisit}
                  className="w-full text-center py-2 px-3 bg-[#1B3250] hover:bg-[#234268] text-[#D4AF37] hover:text-white rounded text-xs font-semibold border border-[#C59B27]/40 transition-colors cursor-pointer"
                >
                  Get Directions & Visitor Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Privacy Policy */}
        <div className="mt-12 pt-6 border-t border-[#1F334D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <p>
              © {currentYear} Methodist Episcopal Church in Southern Asia (MECSA), Bulandshahr, UP. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Historical presence in Bulandshahr since 1898. Preserving authentic Christian heritage, liturgy, and community service.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenPrivacyPolicy}
              className="text-gray-300 hover:text-white hover:underline flex items-center gap-1 cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Privacy & Information Policy</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
