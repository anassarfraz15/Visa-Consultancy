
import { Service, VisaCategory, Testimonial, PricingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: 'student',
    title: 'Student Visas',
    description: 'Secure your future at top international universities with our expert guidance on applications and interviews.',
    icon: 'school',
    path: '/services/student'
  },
  {
    id: 'work',
    title: 'Work Permits',
    description: 'Navigate complex employment regulations and secure your work permit with ease for your international career.',
    icon: 'work',
    path: '/services/work'
  },
  {
    id: 'tourist',
    title: 'Tourist Visas',
    description: 'Hassle-free documentation and quick processing for your dream vacation or family visit abroad.',
    icon: 'flight',
    path: '/services/tourist'
  },
  {
    id: 'pr',
    title: 'Permanent Residency',
    description: 'Your reliable pathway to settling down, building a life, and attaining citizenship in a new country.',
    icon: 'public',
    path: '/services/pr'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Canada Student Visa',
    content: 'Anas Visa Experts made the impossible possible. I had previously been rejected twice, but their team reworked my entire application strategy. I got my approval for a Canada Student Visa in just 3 weeks!',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-n1L9dZRYfrVON91qHNwztiUvdYZ5U99ZunAm3kHqNx3-Qi-7TArgUOW1ZcA2BJ1hOf8dOilB_qrz6IDxnHx5bScmDduWGqAIDU3joqIMzLTxBG5RH4265TDSQjpZCTi2wGE06HaWp2-bB5Bzvgc-aj0kANm1X14pn2tJ6Dkiwbtuy1LcyJjSGkJhsNXixpfIziUCihqcDjwM8ivBr_OkvjJsTAHQsirq8Z9fI8frDg0-ohMffxRX4_HoKhQClWHt1p-xcbwYJAY',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwuIAExedTZkAN6vbPz-4uBTEzSPiFMtgZFF0mPa8etqQGaGzkP-D9oHvgupSdW0H0PfmfNDWOEI58xa7iwQoQvrbwP3NWMESUpGoUd1Ngn4TGErDMGrq-OzL1HoeB8GugFP2rmVQjQ5migTwLJV6UzsgrO1F-rIZrkxR_1tFFgGQ51855ETMReffynNkrIc2Nn4y1UgdmHjPaF9PY53pk-YT22QBiAFKarZdGIFoY6FcOEU_dzGUXPHs3FSKrlt8Nb1AT8659DD0',
    type: 'Approved',
    verified: true
  },
  {
    id: '2',
    name: 'Mohammed Al-Fayed',
    role: 'UK Skilled Worker Visa',
    content: 'Professional guidance from start to finish for my UK Skilled Worker visa. They handled the employer sponsorship details seamlessly. Highly recommended for complex cases involving corporate migration.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1ssuTsWnanoZ6H1VLh7mPp1eIm_2_Gr1Fnyb1moeOz5j66_OkQRJw0B9vsXJtLT21vzjYkqFdgPqp4XUSJihzmK7tTXBhUE3khM8SO_6gcH30kXf97zFg8Ul8Pi3ppIDkplq7xlTHs_SDxettnwkXNbaKbG0BfkfW_a0Z4oZD0HX1SSDXnz5nL4KQRnUeJcezukbUpKv06Caye8iGzUf9dT9VA0kxhl_Dz_wTa50PpmnPcbqXkIUcikSgVFsmbNbRs4G8TenxeqY',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwCT2_ya8OxKJgcwv_3Lh0q5Ma7HW8fUd_TZrfQAzP1p5TX4qsLCOqth6-THeF2HFxuJIMzi0nq24X-7QzaRRQ3aZ47cohZvDw-Vqs0QSu5KJuhxhKCQwBubgeHtPJ_oxMpOizxmFkSaeR_XTHOxDmqS-Ychvyi0NfUagc_WtIvRh-PfqYKsrf28HGeJFJbPKS2M32YNhXHf-gQg0YGESJbs8OfCF5A-RMXATL_2WykKKFezvMWBKuTgH9usPmJYMqo_u37wurDXc',
    type: 'Skilled Worker',
    verified: true
  },
  {
    id: '3',
    name: 'Carlos Garcia',
    role: 'USA Tourist Visa',
    content: 'We were nervous about the interview process, but the mock interviews prepared us perfectly. Friendly staff who walked us through every document for our USA Tourist Visa. We are so grateful.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB20kxu87u7iBF_G2jHTuf5k3kmrGR89t_D-l6WfmDjn5-QNw0pqEr1vQJNJrJ49NDF7CdcJZ-7oSN0vctIrubrDq4wlJEptsF27cfP7XzIHIKkFR_9CLYzZMSWkn7u7FLd0iZpawzsqGLGok07H4yuSWZk77ZurjaWUvoqZvRvMGDjGXGrwvRyNfStu1nyk_93dNLLXpiMkWVu2LKH6X_2a_vbS72-AAQ-1_jxAPL3DRgm_pDlPfPNk_FxFU3__UVAIzBf5UfobXs',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH6KY2oUCl-5YFUhUWGplw9AJ-jl-cmI9rb80Fcfqbwy2jonf1Yw1odmgXpUC8_zscb8hrWFhHOVEKmYCwrfilEUZxVMR5nQQwm2oVMdgIf3TICP7tAZjk8v_hDdigJmBVcc37EP6fXTWt0-3CkFXHgYTzKvcqSVlSMY8-p0s48coqEiJsJD4UFVyn2goy-q0kaSbm42-pLeBn6gMAA-O_42Lz8cr2GTlwApJDCE-_4JD2XdQn1UyohHd9064mqRv8Kd2oAdrJRoA',
    type: 'Tourist',
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Consultation',
    description: 'Perfect for initial guidance and understanding your eligibility.',
    price: '$99',
    period: '/ session',
    features: ['30-min Strategy Video Call', 'Eligibility Assessment', 'Basic Document Checklist'],
    excludedFeatures: ['Application Form Review']
  },
  {
    id: 'standard',
    name: 'Standard Application',
    description: 'Comprehensive support for filing your own application.',
    price: '$499',
    period: '/ application',
    features: ['Everything in Basic', 'Application Form Review', 'Personal Statement Edit', '2 Follow-up Calls'],
    excludedFeatures: []
  },
  {
    id: 'premium',
    name: 'Premium Concierge',
    description: 'End-to-end management for total peace of mind.',
    price: '$1,299',
    period: '/ comprehensive',
    features: ['Everything in Standard', 'End-to-End Handling', 'Mock Interview Prep', 'Rejection Appeal Support', 'Priority WhatsApp Support'],
    excludedFeatures: [],
    isBestValue: true
  }
];
