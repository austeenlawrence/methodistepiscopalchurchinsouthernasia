import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { PageRoute } from '../types';
import { churchData } from '../data/churchData';
import {
  Heart,
  ShieldCheck,
  Send,
  CheckCircle2,
  Lock,
  Phone,
  Mail,
  User,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

interface PrayerRequestPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PrayerRequestPage: React.FC<PrayerRequestPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    request: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact phone number.';
    } else if (!/^[0-9+-\s()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number format.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.request.trim()) {
      errs.request = 'Please write your prayer request or spiritual petition.';
    } else if (formData.request.trim().length < 10) {
      errs.request = 'Prayer request should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_4pzzmmj',
      'template_idu9j5r',
      {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        prayer_request: formData.request,
      },
      'Kx3uBdRQUwvlLL29n'
    );

    setIsSubmitted(true);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      request: '',
    });
    setErrors({});
  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('Unable to submit your prayer request. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="w-full space-y-0">
      {/* Banner */}
      <section className="bg-[#0F1D2F] text-white py-16 lg:py-24 border-b-4 border-[#C59B27] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E5]/15 border border-[#D4AF37]/50 text-[#E8C860] text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Pastoral Intercession & Care</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Prayer Request
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            &ldquo;The prayer of a righteous person is powerful and effective.&rdquo; <span className="italic">— James 5:16</span>
          </p>
        </div>
      </section>

      {/* Main Content Form */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5DDD0] shadow-sm space-y-8">
            
            {/* Introductory Header */}
            <div className="space-y-2 border-b border-[#F0EAE0] pb-6">
              <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#0F1D2F]">
                Share Your Prayer Petition
              </h2>
              <p className="text-xs sm:text-sm text-[#556376] leading-relaxed">
                Our church prayer team and pastoral intercessors faithfully pray over every request submitted to us. Please fill out the form below so we may lift you before God.
              </p>
            </div>

            {/* Success Confirmation State */}
            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-[#FAF4E5] border-2 border-[#C59B27] text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#C59B27] text-white mx-auto flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-serif-heading font-bold text-[#0F1D2F]">
                    Prayer Request Received
                  </h3>
                  <p className="text-sm text-[#5A4515] max-w-md mx-auto leading-relaxed">
                    Thank you for sharing your prayer request. Our prayer team will keep you in prayer.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Prayer Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#0F1D2F] uppercase tracking-wider">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Samuel David"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Contact Grid: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F1D2F] uppercase tracking-wider">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F1D2F] uppercase tracking-wider">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Prayer Request / Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#0F1D2F] uppercase tracking-wider">
                    Prayer Request / Message <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      rows={5}
                      value={formData.request}
                      onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                      placeholder="Please describe how we can pray for you, your health, family, spiritual journey, or personal need..."
                      className={`w-full p-4 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all leading-relaxed ${
                        errors.request
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                      }`}
                    />
                  </div>
                  {errors.request && (
                    <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.request}</span>
                    </p>
                  )}
                </div>

                {/* Confidentiality Note */}
                <div className="p-4 rounded-lg bg-[#F4EFE6] border border-[#E0D5C3] flex items-start gap-3 text-xs text-[#556376]">
                  <Lock className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Confidentiality Note:</strong> Your prayer request will be treated with care and confidentiality. It is held sacred and only shared with designated church prayer intercessors and pastoral leadership.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Submitting Prayer Petition...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Prayer Request</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Pastoral Emergency Care Card */}
          <div className="mt-8 p-5 bg-[#FAF4E5] rounded-xl border border-[#E5D5A8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#8C6D1F]" />
              <span className="text-[#5A4515]">
                In need of urgent pastoral visitation, hospital prayer, or bereavement counseling?
              </span>
            </div>
            <div className="font-bold text-[#0F1D2F] shrink-0">
              {churchData.contact.emergencyPrayerLine}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
