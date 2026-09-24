import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PlanYourVisitModal } from './components/PlanYourVisitModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { PrayerRequestPage } from './pages/PrayerRequestPage';
import { GivePage } from './pages/GivePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'about', 'events', 'prayer', 'give', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });
  const [isPlanVisitOpen, setIsPlanVisitOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  // Sync route on popstate or URL hash if needed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'about', 'events', 'prayer', 'give', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A2332] font-body selection:bg-[#C59B27]/20 selection:text-[#0F1D2F]">
      {/* Sticky Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
          />
        )}
        {currentPage === 'events' && (
          <EventsPage
            onNavigate={navigateTo}
            onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
          />
        )}
        {currentPage === 'prayer' && (
          <PrayerRequestPage onNavigate={navigateTo} />
        )}
        {currentPage === 'give' && (
          <GivePage onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
        onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
      />

      {/* Global Plan Your Visit Modal */}
      <PlanYourVisitModal
        isOpen={isPlanVisitOpen}
        onClose={() => setIsPlanVisitOpen(false)}
        onContactClick={() => {
          setIsPlanVisitOpen(false);
          navigateTo('contact');
        }}
      />

      {/* Global Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </div>
  );
}
