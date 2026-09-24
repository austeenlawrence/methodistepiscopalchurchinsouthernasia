import React, { useState } from 'react';
import { PageRoute, HistoricalDocument } from '../types';
import { churchData } from '../data/churchData';
import { DocumentModal } from '../components/DocumentModal';
import {
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Shield,
  Heart,
  HandHelping,
  Users,
  Layers,
  Compass,
  ArrowRight,
  Sparkles,
  Info,
  Scroll,
  History,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPlanVisit: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenPlanVisit,
}) => {
  const [selectedDocument, setSelectedDocument] = useState<HistoricalDocument | null>(null);
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);

  const getCoreValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#C59B27]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#C59B27]" />;
      case 'HandHelping':
        return <HandHelping className="w-6 h-6 text-[#C59B27]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#C59B27]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#C59B27]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#C59B27]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C59B27]" />;
    }
  };

  return (
    <div className="w-full space-y-0">
      
      {/* Header Banner */}
      <section className="bg-[#0F1D2F] text-white py-16 lg:py-24 border-b-4 border-[#C59B27] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/about us.jpg.jpeg"
            alt="Church architecture background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E5]/15 border border-[#D4AF37]/50 text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
            <span>Historical Heritage & Living Witness</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            About Our Church
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Methodist Episcopal Church in Southern Asia (MECSA) — Preserving historic faith, liturgical devotion, and continuous ministry in Bulandshahr since 1898.
          </p>
        </div>
      </section>


      {/* =========================================================================
          A. OUR STORY / HISTORY
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Roots & Heritage
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Our Story & Heritage
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-[#3E4D5E] leading-relaxed">
              <p>
                The <strong>Methodist Episcopal Church in Southern Asia</strong> traces its lineage to the pioneering missionary endeavors of the 19th century. Driven by an evangelical passion for biblical proclamation, literacy, and community health, Methodist Episcopal workers established pastoral circuits, schools, and medical dispensaries across North India.
              </p>

              <div className="p-4 rounded-lg bg-[#F4EFE6] border-l-4 border-[#C59B27] space-y-2">
                <h4 className="font-serif-heading text-sm font-bold text-[#0F1D2F]">
                  The 1898 Bulandshahr Foundation
                </h4>
                <p className="text-xs text-[#556376] leading-relaxed">
                  In Bulandshahr, Uttar Pradesh, church archives and missionary gazettes document the formal establishment of regular Methodist Episcopal worship, congregational gatherings, and pastoral oversight dating back to <strong>1898</strong>. For over 125 years, the church has stood as a sanctuary of prayer, family discipleship, and Christian care in the region.
                </p>
              </div>

              <p>
                Throughout generations, the church has navigated periods of ecclesiastical transitions, regional developments, and changing eras, always maintaining its devotion to the historic Articles of Religion, Wesleyan theological heritage, and the preaching of Christ crucified and risen.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl overflow-hidden shadow-md border border-[#E5DDD0] bg-white p-2">
                <img
                  src="/images/about us.jpg.jpeg"
                  alt="Historic sanctuary altar table"
                  className="w-full h-64 object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 text-center">
                  <p className="font-cinzel text-xs font-bold text-[#0F1D2F]">
                    Methodist Episcopal Church, Bulandshahr
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Continuous Christian worship and presence since 1898
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          B. MISSION & VISION
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Block */}
            <div className="bg-white rounded-xl p-8 border border-[#E5DDD0] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#FAF4E5] border border-[#E5D5A8] flex items-center justify-center text-[#8C6D1F]">
                <Compass className="w-6 h-6 text-[#C59B27]" />
              </div>
              <h3 className="text-xl font-serif-heading font-bold text-[#0F1D2F]">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#556376] leading-relaxed">
                {churchData.about?.mission || "To glorify God through sincere worship, to proclaim the Gospel of Jesus Christ, and to serve our community with love."}
              </p>
              <div className="pt-2 text-[11px] text-gray-400 italic">
                * Official mission statement placeholder — editable by administration
              </div>
            </div>

            {/* Vision Block */}
            <div className="bg-white rounded-xl p-8 border border-[#E5DDD0] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#FAF4E5] border border-[#E5D5A8] flex items-center justify-center text-[#8C6D1F]">
                <Layers className="w-6 h-6 text-[#C59B27]" />
              </div>
              <h3 className="text-xl font-serif-heading font-bold text-[#0F1D2F]">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#556376] leading-relaxed">
                {churchData.about?.vision || "To remain a steadfast, faithful, and welcoming Christian church in Bulandshahr and across Southern Asia."}
              </p>
              <div className="pt-2 text-[11px] text-gray-400 italic">
                * Official vision statement placeholder — editable by administration
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          C. WHAT WE BELIEVE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Doctrinal Foundations
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              What We Believe
            </h2>
            <p className="text-xs sm:text-sm text-[#556376]">
              Our doctrine is firmly established upon the Holy Bible and historical Christian confession.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(churchData.beliefs || []).map((belief, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E5DDD0] shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FAF4E5] text-[#8C6D1F] font-mono text-xs font-bold flex items-center justify-center border border-[#E5D5A8]">
                      {idx + 1}
                    </span>
                    <h4 className="font-serif-heading text-base font-bold text-[#0F1D2F]">
                      {belief.title}
                    </h4>
                  </div>

                  <p className="text-xs text-[#556376] leading-relaxed">
                    {belief.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EAE0] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C6D1F]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{belief.scriptureReference}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          D. OUR LEADERSHIP
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Episcopal & Pastoral Oversight
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Our Church Leadership
            </h2>
            <p className="text-xs sm:text-sm text-[#556376]">
              Spiritual leaders serving with dedicated pastoral care, institutional guidance, and biblical stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(churchData.leadership || []).map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E5DDD0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-gray-100 relative">
                    <img
                      src={leader.image}
                      alt={leader.imageAlt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0F1D2F]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-cinzel text-[#E8C860] uppercase tracking-wider block">
                        MECSA Leadership
                      </span>
                      <h4 className="font-serif-heading text-lg font-bold">
                        {leader.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs font-bold text-[#8C6D1F] pb-2 border-b border-[#F0EAE0]">
                      {leader.title}
                    </div>
                    <p className="text-xs text-[#556376] leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                {leader.isPlaceholderBio && (
                  <div className="px-6 pb-4 text-[10px] text-gray-400 italic">
                    * Official bio placeholder to be updated by church administration
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          E. OUR JOURNEY — HISTORICAL TIMELINE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              <History className="w-4 h-4 text-[#C59B27]" />
              <span>Historical Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Our Journey — Historical Timeline
            </h2>
            <p className="text-xs sm:text-sm text-[#556376]">
              Tracing Christian witness, pastoral care, and continuity from 1898 to the present day.
            </p>
          </div>

          {/* Timeline Vertical Path */}
          <div className="relative border-l-2 border-[#C59B27]/40 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-10">
            {(churchData.timeline || []).map((item, index) => (
              <div key={index} className="relative group">
                {/* Year Marker Badge */}
                <div className="sm:absolute sm:-left-44 top-0 mb-2 sm:mb-0">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#0F1D2F] text-[#E8C860] font-cinzel text-xs font-bold tracking-wide border border-[#C59B27]">
                    {item.year}
                  </span>
                </div>

                {/* Node Dot on line */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#FAF8F5] border-3 border-[#C59B27] group-hover:bg-[#C59B27] transition-colors"></div>

                {/* Content Card */}
                <div className="bg-white p-5 rounded-xl border border-[#E5DDD0] shadow-xs space-y-2">
                  <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#0F1D2F]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#556376] leading-relaxed">
                    {item.description}
                  </p>

                  {item.verifiedSource && (
                    <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#8C6D1F] font-medium border-t border-[#F0EAE0]">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Source: {item.verifiedSource}</span>
                    </div>
                  )}

                  {item.isDisputedContext && (
                    <div className="text-[10px] text-amber-800 bg-[#FAF4E5] p-2 rounded border border-[#E5D5A8]">
                      Note: Presented neutrally distinguishing historical developments, legal records, and continuing ecclesiastical tradition.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          F. MECSA TODAY
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#0F1D2F] text-white border-b border-[#1A2E46]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-block px-3 py-1 rounded bg-[#C59B27]/20 border border-[#C59B27] text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
            Present-Day Ministry
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-white">
            MECSA Today: A Living Church Body
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-gray-200 leading-relaxed bg-[#14253B] p-6 sm:p-8 rounded-xl border border-[#223956]">
            <p>
              {churchData.about?.mecsaToday || "Today, the Methodist Episcopal Church in Southern Asia (MECSA) continues to identify and function as a living, active church body."}
            </p>
            <p className="text-gray-300">
              MECSA operates in fidelity to the historic Methodist Episcopal heritage, conducting regular Divine Sunday Services, mid-week prayer meetings, sacred choral music, pastoral counseling, and social welfare programs for the community of Bulandshahr and surrounding areas.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================================
          G. OUR HISTORICAL DOCUMENTS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
                Archival Records
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
                Our Historical Documents & Archive
              </h2>
              <p className="text-xs sm:text-sm text-[#556376]">
                Preserved records, conference registers, and commemorative certificates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(churchData.historicalDocuments || []).map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl p-5 border border-[#E5DDD0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4E5] border border-[#E5D5A8] flex items-center justify-center text-[#8C6D1F]">
                    <FileText className="w-5 h-5 text-[#C59B27]" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C6D1F]">
                      {doc.documentType} • {doc.date}
                    </span>
                    <h4 className="font-serif-heading text-sm font-bold text-[#0F1D2F] mt-1 leading-snug">
                      {doc.title}
                    </h4>
                  </div>

                  <p className="text-xs text-[#556376] line-clamp-3 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0EAE0]">
                  <button
                    onClick={() => {
                      setSelectedDocument(doc);
                      setIsDocumentModalOpen(true);
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#0F1D2F] text-[#0F1D2F] hover:text-white border border-[#E0D7C6] text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Record Summary</span>
                    <Scroll className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          H. OUR CHURCH IN BULANDSHAHR
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E5DDD0] shadow-sm space-y-6">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Local Heritage
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Our Church in Bulandshahr
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs sm:text-sm text-[#3E4D5E] leading-relaxed">
              <div className="space-y-4">
                <p>
                  {churchData.about?.bulandshahrHistory || "In Bulandshahr, Uttar Pradesh, church records and historical documentation mark an enduring Methodist Episcopal presence dating back to 1898."}
                </p>
                <p>
                  The Bulandshahr sanctuary has served as the heart of Christian prayer in the district, where generations of families have celebrated Holy Baptism, gathered for Sunday liturgy, received Holy Communion, and united in service to society.
                </p>
              </div>

              <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-xl border border-[#E5DDD0]">
                <h4 className="font-cinzel text-xs font-bold text-[#0F1D2F] uppercase tracking-wider">
                  Key Parish Pillars in Bulandshahr:
                </h4>
                <ul className="space-y-2 text-xs text-[#556376]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
                    <span><strong>1898 Legacy:</strong> Documented presence and continuous pastoral registry in Bulandshahr.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
                    <span><strong>Episcopal Ministry:</strong> Spiritual leadership under Bishop Khadim M. Lawrence and ministerial clergy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
                    <span><strong>Active Community Service:</strong> Relief work, family care, and youth empowerment across the district.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          I. BISHOP'S MESSAGE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-[#0F1D2F] to-[#182C44] text-white rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-[#C59B27]/40 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#C59B27] mx-auto shadow-lg bg-gray-700">
                  <img
                    src={churchData.about?.bishopsMessage?.photoUrl || "/images/papa 1.png"}
                    alt={churchData.about?.bishopsMessage?.bishopName || "Bishop Khadim M. Lawrence"}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif-heading text-lg font-bold text-white mt-4">
                  {churchData.about?.bishopsMessage?.bishopName || "Bishop Khadim M. Lawrence"}
                </h4>
                <p className="text-xs text-[#E8C860] font-cinzel">
                  {churchData.about?.bishopsMessage?.title || "Bishop, Methodist Episcopal Church in Southern Asia"}
                </p>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded bg-[#C59B27]/20 border border-[#C59B27] text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
                  Episcopal Welcome
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white">
                  Bishop&apos;s Pastoral Greeting
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 italic leading-relaxed">
                  &ldquo;{churchData.about?.bishopsMessage?.greeting || "Grace, peace, and blessings to you in the name of our Lord and Savior Jesus Christ."}&rdquo;
                </p>
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {churchData.about?.bishopsMessage?.message || ""}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          J. OUR CORE VALUES (Faith, Love, Service, Compassion, Unity, Evangelism)
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
              Guiding Principles
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0F1D2F]">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-[#556376]">
              The foundational Christian values guiding our fellowship, ministries, and community service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(churchData.coreValues || []).map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E5DDD0] shadow-xs space-y-3"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FAF4E5] border border-[#E5D5A8] flex items-center justify-center">
                  {getCoreValueIcon(val.iconName)}
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#0F1D2F]">
                  {val.title}
                </h3>

                <p className="text-xs text-[#556376] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Sources / Historical References Area */}
      <section className="py-12 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="font-cinzel text-xs font-bold text-[#8C6D1F] uppercase tracking-wider">
            Sources & Historical Archival References:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(churchData.sourcesAndReferences || []).map((src, i) => (
              <div key={i} className="bg-white p-3.5 rounded-lg border border-[#E5DDD0] text-xs space-y-1">
                <p className="font-bold text-[#0F1D2F]">{src.citation}</p>
                <p className="text-gray-500 text-[11px] leading-relaxed">{src.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          K. ABOUT PAGE CTA
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#0F1D2F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-white">
            Be Part of Our Journey
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Join us as we worship, serve, and grow together in the love of Jesus Christ in Bulandshahr.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenPlanVisit}
              className="px-8 py-3.5 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      </section>

      {/* Document Detail Modal */}
      <DocumentModal
        document={selectedDocument}
        isOpen={isDocumentModalOpen}
        onClose={() => {
          setIsDocumentModalOpen(false);
          setSelectedDocument(null);
        }}
      />

    </div>
  );
};
