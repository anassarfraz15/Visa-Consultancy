
import React from 'react';
import { PRICING_PLANS } from '../constants';

const PricingPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Investment in your future</h2>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Transparent & Fair Pricing</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We believe in honest partnerships. No hidden fees, just pure professional guidance at every step of your immigration journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-8 bg-white dark:bg-slate-900 rounded-3xl transition-all duration-300 shadow-sm border ${
                plan.isBestValue 
                  ? 'border-primary shadow-2xl shadow-primary/10 scale-105 z-10' 
                  : 'border-slate-200 dark:border-slate-800 hover:shadow-xl'
              }`}
            >
              {plan.isBestValue && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                  Most Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px] leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">{plan.price}</span>
                  <span className="text-slate-500 font-medium">{plan.period}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
                {plan.excludedFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-40">
                    <span className="material-symbols-outlined text-slate-400 text-[20px] shrink-0">do_not_disturb_on</span>
                    <span className="text-sm text-slate-400 dark:text-slate-500 line-through decoration-slate-400/50">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                plan.isBestValue 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-blue-600' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}>
                {plan.isBestValue ? 'Start Priority Success' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">Need a Custom Enterprise Solution?</h4>
            <p className="text-slate-400">For corporate relocations or group student bookings, we offer tailored packages.</p>
          </div>
          <button className="whitespace-nowrap bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
