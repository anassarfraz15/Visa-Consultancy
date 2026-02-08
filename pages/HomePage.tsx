
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/95 to-transparent dark:from-background-dark dark:via-background-dark/95 z-10"></div>
          <img
            alt="Airport luxury lounge"
            className="h-full w-full object-cover object-center opacity-30 dark:opacity-20 scale-105"
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c055?auto=format&fit=crop&q=80&w=2000"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in border border-primary/20">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                ISO 9001:2015 Certified Agency
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
                Your Gateway to the <span className="text-primary italic">Entire World.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-lg">
                Anas Visa Experts provides bespoke immigration solutions. From Ivy League admissions to Global Talent visas, we handle the complexity so you can dream big.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/30 hover:bg-blue-600 transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  Start Your Assessment
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                >
                  View Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <p className="text-3xl font-black text-primary mb-1">98%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary mb-1">5000+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Approved</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary mb-1">12+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Expert Years</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block group">
              {/* Decorative Blur */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 ring-8 ring-white/50 dark:ring-slate-800/50">
                <img
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                  alt="Students celebrating"
                />
                
                {/* Floating UI: Approval Alert */}
                <div className="absolute top-8 right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-bounce border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">UK Visa Approved!</p>
                      <p className="text-[10px] text-slate-500">M. Ahmed, Student Route</p>
                    </div>
                  </div>
                </div>

                {/* Floating UI: Experience */}
                <div className="absolute bottom-8 left-8 bg-primary/95 backdrop-blur-md p-4 rounded-2xl shadow-xl text-white">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl">travel_explore</span>
                    <div>
                      <p className="text-sm font-bold">124 Destinations</p>
                      <p className="text-xs opacity-80">Full Service Coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Features Strip */}
      <section className="bg-white dark:bg-slate-900 py-12 border-y border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-3xl">language</span>
              <span className="font-bold">Global Presence</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-3xl">shield_person</span>
              <span className="font-bold">Privacy Guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-3xl">history_edu</span>
              <span className="font-bold">Legal Expertise</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-3xl">speed</span>
              <span className="font-bold">Priority Processing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
