
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <div class="flex items-center gap-2">
              <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <span class="material-symbols-outlined">public</span>
              </div>
              <span class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Anas Visa Experts</span>
            </div>
            <p class="text-sm leading-6 text-slate-600 dark:text-slate-400 max-w-xs">
              Simplifying your journey across borders with expert guidance and personalized visa solutions. We make the complex world of immigration simple.
            </p>
            <div class="flex gap-4">
              <a class="text-slate-400 hover:text-primary transition-colors duration-200" href="#">
                <span class="sr-only">Facebook</span>
                <span class="material-symbols-outlined text-2xl">facebook</span>
              </a>
              <a class="text-slate-400 hover:text-primary transition-colors duration-200" href="#">
                <span class="sr-only">LinkedIn</span>
                <span class="material-symbols-outlined text-2xl">business</span>
              </a>
              <a class="text-slate-400 hover:text-primary transition-colors duration-200" href="#">
                <span class="sr-only">Twitter</span>
                <span class="material-symbols-outlined text-2xl">flutter_dash</span>
              </a>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Services</h3>
                <ul class="mt-6 space-y-4" role="list">
                  <li><Link to="/services" class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Student Visa</Link></li>
                  <li><Link to="/services" class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Work Permit</Link></li>
                  <li><Link to="/services" class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Tourist Visa</Link></li>
                  <li><Link to="/services" class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">PR Applications</Link></li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Company</h3>
                <ul class="mt-6 space-y-4" role="list">
                  <li><Link to="/" class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link to="/success-stories" class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Success Stories</Link></li>
                  <li><a class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">Careers</a></li>
                  <li><Link to="/contact" class="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Stay Updated</h3>
                <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Get the latest immigration news and updates directly to your inbox.</p>
                <form class="mt-6 sm:flex sm:max-w-md">
                  <label class="sr-only" for="email-address">Email address</label>
                  <input autocomplete="email" class="w-full min-w-0 appearance-none rounded-lg border-0 bg-slate-100 dark:bg-slate-800 px-3 py-2 text-base text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full" id="email-address" name="email-address" placeholder="Enter your email" required="" type="email"/>
                  <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button class="flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200" type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p class="text-xs leading-5 text-slate-500 dark:text-slate-400">© 2024 Anas Visa Experts. All rights reserved.</p>
          <div class="flex space-x-6 text-xs text-slate-500 dark:text-slate-400">
            <a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a class="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a class="hover:text-primary transition-colors" href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
