
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-slate-900 py-16 px-4 text-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Airplane wing"
            className="h-full w-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAltexnHjffVb2e3xkkRKVabaNjRLPzgBp23IWTz3P5fkXv3n2dGIt2cvQVQ0p5VzHt_bJSAAjdXNq1tQOrjSiLLNTPR0iFQpAoDPvN1v8MG4OrsqUq51H1Qz2ehjNQooNBHhyct9J1WtA6jfNNziBlt14xiOLrJfUFrde5osmyTNY9yyWf24U76y925HjwFqZv8kvcxmFw0wJhKSOwD5N37wILBCjpwwyGkfErqDSZ73rwpqB0icsc3NQ37OpoSs4GnbBOMSlorEM"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 flex max-w-3xl flex-col gap-6">
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm border border-white/20">
            <span className="material-symbols-outlined text-sm text-primary">public</span>
            <span className="text-sm font-medium text-white">Global Visa Solutions</span>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Expert Visa Solutions <br className="hidden sm:block" /> Tailored for You
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you are studying, working, or visiting, Anas Visa Experts simplifies your global journey with professional guidance every step of the way.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="h-12 flex items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
              Get Started
            </Link>
            <button className="h-12 rounded-lg bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#101822]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Expertise</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Comprehensive Visa Categories
              </h2>
              <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg">
                We provide end-to-end assistance for all major visa types to ensure your journey is smooth and successful.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mb-6 flex-grow text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400">
                  Learn More <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
