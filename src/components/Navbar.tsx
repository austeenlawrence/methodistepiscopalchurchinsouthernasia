import React, { useState } from 'react';
import { PageRoute } from '../types';
import { churchData } from '../data/churchData';
import { Menu, X, Heart, MapPin, Calendar, Clock, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenPlanVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPlanVisit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sundayService = churchData.serviceSchedules.find((s) => s.id === 'sunday-worship') || churchData.serviceSchedules[0];

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events' },
    { id: 'prayer', label: 'Prayer Request' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D5] shadow-xs">
      {/* Top Banner with Service Times & Quick Location */}
      <div className="hidden lg:block bg-[#0F1D2F] text-[#E5ECF6] py-1.5 px-4 text-xs font-medium border-b border-[#1A2E46]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{churchData.location.city}, {churchData.location.state}, {churchData.location.country} • Established Heritage 1898</span>
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sunday Worship: {sundayService?.time || '09:30 AM'}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPlanVisit}
              className="text-[#D4AF37] hover:text-[#E8C860] transition-colors flex items-center gap-1 cursor-pointer font-semibold"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Your Visit</span>
            </button>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300 flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{churchData.contact.phoneFormatted}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-hidden"
            aria-label="Go to Home page"
          >
            {/* Traditional Christian Cross Emblem */}
            <div className="w-12 h-12 rounded-lg bg-[#0F1D2F] border border-[#C59B27]/40 flex items-center justify-center overflow-hidden">
  <img
    src="/images/mecsa-logo.png"
    alt="MECSA Church Logo"
    className="w-10 h-10 object-contain"
  />
</div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#0F1D2F]">
                  MECSA
                </span>
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm bg-[#FAF4E5] text-[#8C6D1F] border border-[#E5D5A8]">
                  Est. 1898
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#556376] font-medium leading-tight max-w-[280px] sm:max-w-md line-clamp-1">
                Methodist Episcopal Church in Southern Asia • Bulandshahr
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'text-[#0F1D2F] font-semibold bg-[#F0EAE0]'
                      : 'text-[#3E4D5E] hover:text-[#0F1D2F] hover:bg-[#F5EFE6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Plan Your Visit Quick Button */}
            <button
              onClick={onOpenPlanVisit}
              className="px-3.5 py-2 text-sm font-medium text-[#0F1D2F] hover:text-[#8C6D1F] hover:bg-[#F5EFE6] rounded-md transition-colors cursor-pointer"
            >
              Plan Your Visit
            </button>

            {/* Emphasized Give Button */}
            <button
              onClick={() => handleNavClick('give')}
              className={`ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                currentPage === 'give'
                  ? 'bg-[#B38A1F] text-white shadow-md'
                  : 'bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold'
              }`}
            >
              <Heart className="w-4 h-4 fill-current opacity-80" />
              <span>Give</span>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('give')}
              className="px-3.5 py-1.5 rounded-md bg-[#C59B27] text-[#0F1D2F] text-xs font-bold flex items-center gap-1 shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Give</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#0F1D2F] hover:bg-[#F0EAE0] focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E1D5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-1.5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#0F1D2F] text-[#FAF8F5] font-semibold'
                    : 'text-[#2C3B4D] hover:bg-[#F0EAE0]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPlanVisit();
            }}
            className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-[#0F1D2F] hover:bg-[#F0EAE0] flex items-center justify-between border-t border-[#E8E1D5] mt-2 pt-3"
          >
            <span>Plan Your Visit</span>
            <Calendar className="w-4 h-4 text-[#C59B27]" />
          </button>

          <button
            onClick={() => handleNavClick('give')}
            className="w-full text-center px-4 py-3 rounded-lg text-base font-bold bg-[#C59B27] text-[#0F1D2F] shadow-xs flex items-center justify-center gap-2 mt-3"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Give / Offering (UPI)</span>
          </button>

          <div className="pt-4 mt-4 border-t border-[#E8E1D5] text-xs text-[#556376] px-2 space-y-1">
            <p className="font-medium text-[#0F1D2F]">{churchData.churchName}</p>
            <p>{churchData.location.city}, {churchData.location.state}, {churchData.location.country}</p>
            <p className="text-[#8C6D1F]">{sundayService?.name || 'Sunday Worship Service'}: {sundayService?.time || '09:30 AM'}</p>
          </div>
        </div>
      )}
    </header>
  );
};
