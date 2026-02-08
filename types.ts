
export enum VisaCategory {
  STUDENT = 'Student Visa',
  WORK = 'Work Permit',
  TOURIST = 'Tourist Visa',
  FAMILY = 'Family Visa',
  PR = 'Permanent Residency'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  flag: string;
  type: string;
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  excludedFeatures: string[];
  isBestValue?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}
