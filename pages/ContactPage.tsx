
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors duration-200">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Start Your Visa Journey</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Whether you're planning a vacation, studying abroad, or relocating for work, our expert consultants are here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white" htmlFor="name">Full Name</label>
                  <input
                    className="w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white px-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white" htmlFor="email">Email Address</label>
                  <input
                    className="w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white px-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white" htmlFor="phone">Phone Number</label>
                  <input
                    className="w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white px-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white" htmlFor="visa-type">Visa Type</label>
                  <select
                    className="w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white px-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                    id="visa-type"
                  >
                    <option disabled selected value="">Select Visa Type</option>
                    <option value="tourist">Tourist Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="work">Work Permit</option>
                    <option value="pr">Permanent Residency</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-900 dark:text-white" htmlFor="message">How can we help?</label>
                <textarea
                  className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  id="message"
                  placeholder="Tell us about your travel plans..."
                  rows={4}
                />
              </div>
              <button className="w-full md:w-auto min-w-[200px] h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2" type="submit">
                <span>Send Message</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
            <div className="bg-primary text-white rounded-2xl p-8 shadow-lg shadow-primary/20 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">Contact Information</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">location_on</span>
                  </div>
                  <div>
                    <p className="font-medium text-white/70 text-sm mb-1">Our Office</p>
                    <p className="font-semibold leading-snug">123 Visa Lane, Global Business Park<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">call</span>
                  </div>
                  <div>
                    <p className="font-medium text-white/70 text-sm mb-1">Phone Number</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">mail</span>
                  </div>
                  <div>
                    <p className="font-medium text-white/70 text-sm mb-1">Email Address</p>
                    <p className="font-semibold">consult@anasvisaexperts.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-sm border border-slate-200 dark:border-slate-700 h-[250px] flex flex-col overflow-hidden relative">
              <img
                alt="Map"
                className="w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU_SBEQ6mzAuHP1auAKjv3slyYtoXki_nRAg_G2IEmsfrHmUYz-N2dBiZXSf_OerH6pukr3L4eQHbzrqocC05s-fC0V1fipw0PCIqd3lQtk5RK09e8AnfHXBBYCyV-3VVeh7007hw3WYXO4Qk5FPBRfOHl-TlfBF2FjnfvjE_dHhU-vggZGnCoe9IYPDBfrk-8gaN6nMz7bru1cr42vaioKs90TSJtFN045gF2teCjnTCHB7vUTNtc3l8vxdUVlv1N3TTFoKey34g"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded-full shadow-lg flex items-center justify-center text-white ring-4 ring-white/50">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
