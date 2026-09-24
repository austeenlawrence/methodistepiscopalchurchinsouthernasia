import React, { useState } from 'react';
import { PageRoute } from '../types';
import { churchData } from '../data/churchData';
import {
  Heart,
  QrCode,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  BookOpen,
  Info,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface GivePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const GivePage: React.FC<GivePageProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(churchData.donation.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePayViaUpi = () => {
    // Standard UPI intent URI for mobile devices
    const upiUri = `upi://pay?pa=${encodeURIComponent(churchData.donation.upiId)}&pn=${encodeURIComponent(churchData.donation.upiPayeeName)}&cu=INR`;
    window.location.href = upiUri;
  };

  return (
    <div className="w-full space-y-0">
      {/* Banner */}
      <section className="bg-[#0F1D2F] text-white py-16 lg:py-24 border-b-4 border-[#C59B27] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E5]/15 border border-[#D4AF37]/50 text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Stewardship & Worship in Giving</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Give & Support the Ministry
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Partnering with Methodist Episcopal Church in Southern Asia in worship, charitable community outreach, and faithful Gospel stewardship in Bulandshahr.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* =========================================================================
              WHY WE GIVE SECTION
              ========================================================================= */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E5DDD0] shadow-sm space-y-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF4E5] border border-[#E5D5A8] text-[#8C6D1F] text-xs font-bold uppercase tracking-wider">
                Biblical Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#0F1D2F]">
                Why We Give
              </h2>
              <p className="text-xs sm:text-sm text-[#556376] leading-relaxed">
                In the Christian tradition, giving is an act of joyful thanksgiving and worship unto the Lord. Through our voluntary tithes and offerings, we express gratitude for God&apos;s abundant blessings, sustain our local parish worship, and provide compassionate relief for neighbors in need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E5DDD0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D1F]">
                  <BookOpen className="w-4 h-4 text-[#C59B27]" />
                  <span>2 Corinthians 9:7</span>
                </div>
                <p className="text-xs sm:text-sm italic font-serif text-[#2C3B4D] leading-relaxed">
                  &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E5DDD0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D1F]">
                  <BookOpen className="w-4 h-4 text-[#C59B27]" />
                  <span>Proverbs 3:9</span>
                </div>
                <p className="text-xs sm:text-sm italic font-serif text-[#2C3B4D] leading-relaxed">
                  &ldquo;Honor the Lord with your wealth, with the firstfruits of all your crops.&rdquo;
                </p>
              </div>
            </div>
          </div>


          {/* =========================================================================
              DONATION METHOD: UPI ONLY
              ========================================================================= */}
          <div className="bg-linear-to-br from-[#0F1D2F] to-[#182C44] text-white rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-[#C59B27]/40 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-block px-3 py-1 rounded bg-[#C59B27]/20 border border-[#C59B27] text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
                Direct Giving Method
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
                Support via UPI
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Quick, secure, and direct contributions through any standard Indian UPI application.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* QR Code Placeholder Box */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl border-4 border-[#C59B27] text-center space-y-4 max-w-xs w-full">
                  
                  {/* Visual QR Pattern Representation */}
                  <div className="aspect-square w-full rounded-xl bg-white border-2 border-[#C59B27]/60 flex items-center justify-center p-2 overflow-hidden">
  <img
    src="/images/qr.jpeg"
    alt="Official UPI QR Code"
    className="w-full h-full object-contain rounded-xl"
  />
</div>

                  <div>
                    <span className="text-xs font-bold text-[#0F1D2F] block">
                      {churchData.donation.upiPayeeName}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      Bulandshahr, Uttar Pradesh
                    </span>
                  </div>
                </div>

                {churchData.donation.isPlaceholderUpi && (
                  <p className="text-[10px] text-gray-400 italic text-center mt-3 max-w-xs">
                    * UPI ID & QR Code are placeholder configurations ready for real merchant details.
                  </p>
                )}
              </div>

              {/* UPI ID & Steps */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* UPI ID Card */}
                <div className="bg-[#14253B] p-5 rounded-xl border border-[#223956] space-y-3">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Church Official UPI ID:
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="px-4 py-3 bg-[#0A1420] rounded-lg border border-[#C59B27]/50 font-mono text-sm sm:text-base text-[#E8C860] font-bold flex-1 break-all">
                      {churchData.donation.upiId}
                    </div>

                    <button
                      onClick={handleCopyUpi}
                      className="px-5 py-3 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-950" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy UPI ID</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Mobile Pay Direct Trigger */}
                  <div className="pt-2 sm:hidden">
                    <button
                      onClick={handlePayViaUpi}
                      className="w-full py-3 rounded-lg bg-[#1877F2] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Pay via UPI App Directly</span>
                    </button>
                  </div>
                </div>

                {/* Step-by-Step Instructions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-cinzel uppercase tracking-wider text-[#E8C860]">
                    Simple Instructions for Using UPI:
                  </h4>
                  <ol className="space-y-2 text-xs text-gray-200">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0F1D2F] font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Open any UPI app on your phone (Google Pay, PhonePe, Paytm, BHIM, Cred, or your bank app).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0F1D2F] font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Scan the QR code shown above OR select <strong>&ldquo;Pay to UPI ID&rdquo;</strong> and paste <strong className="text-[#E8C860] font-mono">{churchData.donation.upiId}</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0F1D2F] font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Verify the payee name displays: <strong>{churchData.donation.upiPayeeName}</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0F1D2F] font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Enter the desired offering amount and complete the transaction securely with your UPI PIN.</span>
                    </li>
                  </ol>
                </div>

                {/* Transparency note */}
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-[#0F291E]/60 p-3 rounded-lg border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>100% of contributions directly support church worship, sanctuary maintenance, and community care in Bulandshahr.</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
