import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { PageRoute } from '../types';
import { churchData } from '../data/churchData';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Navigation,
  Clock,
  User,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPlanVisit: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenPlanVisit,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+-\s()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number format.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please type your message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
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
      'template_r6jvp4v',
      {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      },
      'Kx3uBdRQUwvlLL29n'
    );

    setIsSubmitted(true);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });

    setErrors({});
  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('Unable to send your message. Please try again.');
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
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Fellowship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Contact Us & Directions
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            We are here to answer your questions, welcome you to worship, and assist with pastoral inquiries in Bulandshahr.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5DDD0] shadow-sm space-y-6">
                
                <div className="space-y-2 border-b border-[#F0EAE0] pb-4">
                  <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#0F1D2F]">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#556376]">
                    Fill out the form below and our pastorate will respond promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-xl bg-[#FAF4E5] border-2 border-[#C59B27] text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#C59B27] text-white mx-auto flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-serif-heading font-bold text-[#0F1D2F]">
                        Message Sent
                      </h3>
                      <p className="text-sm text-[#5A4515] leading-relaxed">
                        Thank you for contacting us. We’ll get back to you soon.
                      </p>
                    </div>
                    <div className="pt-3">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
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
                          placeholder="Your Full Name"
                          className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all ${
                            errors.fullName
                              ? 'border-rose-400 focus:ring-rose-200'
                              : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            placeholder="name@example.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all ${
                              errors.email
                                ? 'border-rose-400 focus:ring-rose-200'
                                : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-rose-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

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
                            placeholder="+91 XXXXX XXXXX"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all ${
                              errors.phone
                                ? 'border-rose-400 focus:ring-rose-200'
                                : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-rose-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#0F1D2F] uppercase tracking-wider">
                        Message / Inquiry <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can our pastorate assist you?"
                          className={`w-full p-4 rounded-lg bg-[#FAF8F5] border text-xs sm:text-sm text-[#0F1D2F] placeholder-gray-400 focus:outline-hidden focus:ring-2 transition-all leading-relaxed ${
                            errors.message
                              ? 'border-rose-400 focus:ring-rose-200'
                              : 'border-[#E0D7C6] focus:border-[#C59B27] focus:ring-[#FAF4E5]'
                          }`}
                        />
                      </div>
                      {errors.message && (
                        <p className="text-[11px] text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#D4AF37]" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Church Contact Info, Social & Google Maps */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Church Info Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DDD0] shadow-sm space-y-5">
                <h3 className="text-lg font-serif-heading font-bold text-[#0F1D2F] border-b border-[#F0EAE0] pb-3">
                  Church Contact Details
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#3E4D5E]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F1D2F] block">{churchData.churchName}</span>
                      <span>{churchData.location.addressLine}</span>
                      <span className="block text-gray-500 text-xs mt-0.5">{churchData.location.landmark}</span>
                      <span className="block font-medium">{churchData.location.city}, {churchData.location.state} – {churchData.location.pinCode}, India</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#C59B27] shrink-0" />
                    <div>
                      <span className="text-gray-400 text-xs block">Phone Contact</span>
                      <span className="font-semibold text-[#0F1D2F]">{churchData.contact.phoneFormatted}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C59B27] shrink-0" />
                    <div>
                      <span className="text-gray-400 text-xs block">Email Address</span>
                      <span className="font-semibold text-[#0F1D2F] break-all">{churchData.contact.email}</span>
                    </div>
                  </div>
                </div>

                {/* Social Media Links (Facebook & YouTube ONLY) */}
                <div className="pt-4 border-t border-[#F0EAE0] space-y-2.5">
                  <h4 className="text-xs font-bold font-cinzel text-[#0F1D2F] uppercase tracking-wider">
                    Official Church Media Channels:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={churchData.social.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] text-xs font-semibold transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-bold text-sm">f</span>
                        <span>Facebook</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={churchData.social.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-[#CC0000]/10 hover:bg-[#CC0000]/20 border border-[#CC0000]/30 text-[#CC0000] text-xs font-semibold transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-bold text-sm">▶</span>
                        <span>YouTube</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenPlanVisit}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#FAF4E5] hover:bg-[#F3E7C9] text-[#8C6D1F] border border-[#E5D5A8] text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    View Sunday Gathering Schedule & Visitor Guide
                  </button>
                </div>
              </div>

              {/* Google Maps Card */}
              <div className="bg-white rounded-2xl p-4 border border-[#E5DDD0] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold font-cinzel text-[#0F1D2F] uppercase tracking-wider">
                    Google Maps Location
                  </h4>
                  <a
                    href={churchData.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8C6D1F] hover:underline font-semibold flex items-center gap-1"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="w-full h-52 rounded-lg overflow-hidden border border-[#E0D7C6] bg-gray-100">
                  <iframe
                    title="MECSA Bulandshahr Map Location"
                    src={churchData.location.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
