'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to CRM/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0D2951] to-[#0A1F44]">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Image
            src="/servicemaster-logo.png"
            alt="ServiceMaster Clean"
            width={180}
            height={60}
            className="brightness-0 invert"
          />
          <a
            href="tel:1-800-SERVICEMASTER"
            className="text-white font-semibold hover:text-blue-300 transition-colors"
          >
            1-800-SERVICEMASTER
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
          A Higher Standard of Clean
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Delivering Expert Commercial Cleaning for Your Facility and Everyone in It
        </p>

        {/* Special Offer Badge */}
        <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl px-8 py-4 mb-12 shadow-2xl border-2 border-blue-300">
          <p className="text-white text-lg font-semibold mb-1">LIMITED TIME OFFER</p>
          <p className="text-3xl font-bold text-white">Free Office Cleaning Consultation</p>
          <p className="text-blue-100 text-sm mt-2">Valued at $500 • No Obligation Required</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12 mb-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-white mb-3">Professional Excellence</h3>
            <p className="text-blue-100">Trained and certified cleaning experts with decades of experience</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-3">Commercial Specialists</h3>
            <p className="text-blue-100">Customized cleaning solutions for offices, facilities, and healthcare</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-white mb-3">24/7 Availability</h3>
            <p className="text-blue-100">Flexible scheduling to fit your business needs, day or night</p>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="container mx-auto px-6 py-16 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4 text-center">
            Get Your Free Consultation
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Let us show you how we can elevate your facility&apos;s cleanliness standards
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="ABC Corporation"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Claim Your Free Consultation
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to be contacted by ServiceMaster Clean.
                We respect your privacy and will never share your information.
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">✓</div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg">
                We&apos;ve received your request and will contact you within 24 hours to schedule your free consultation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-blue-100 text-sm mb-4">TRUSTED BY THOUSANDS OF BUSINESSES NATIONWIDE</p>
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div className="text-white font-semibold">Fortune 500 Companies</div>
          <div className="text-white">•</div>
          <div className="text-white font-semibold">Healthcare Facilities</div>
          <div className="text-white">•</div>
          <div className="text-white font-semibold">Educational Institutions</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} ServiceMaster Clean. All rights reserved.</p>
          <p className="mt-2 text-xs text-blue-200">
            This is a demonstration page created for marketing purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
