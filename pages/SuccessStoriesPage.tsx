
import React from 'react';
import { TESTIMONIALS } from '../constants';

const SuccessStoriesPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">Client Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Join 1,000+ happy travelers</p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            We take pride in turning complex visa applications into success stories. Read what our clients have to say about their journey with Anas Visa Experts.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-primary">All Stories</button>
          <button className="rounded-full bg-white dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">Student Visas</button>
          <button className="rounded-full bg-white dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">Work Permits</button>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-xl bg-slate-50 dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[20px] fill-current">star</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
                    {t.type}
                  </span>
                </div>
                <div className="mt-4 text-sm leading-6 text-slate-900 dark:text-white">
                  <p className="font-normal italic">"{t.content}"</p>
                </div>
              </div>
              <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6">
                <div className="flex items-center gap-x-4">
                  <img alt={t.name} className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-600 object-cover" src={t.avatar} />
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{t.name}</h3>
                      {t.verified && <span className="material-symbols-outlined text-primary text-[16px]">verified</span>}
                    </div>
                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">{t.role}</p>
                  </div>
                  <img alt="Flag" className="h-6 rounded-sm opacity-80" src={t.flag} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
