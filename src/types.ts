export type PackageType = 'individual' | 'team';

export interface Participant {
  id: string;
  name: string;
  email?: string;
  role?: string;
}

export interface RegistrationFormData {
  packageType: PackageType;
  companyName: string;
  phone: string;
  sopFocus: string;
  participants: Participant[];
}

export interface SessionInfo {
  sessionNumber: string;
  title: string;
  colorBorder: string;
  colorBadge: string;
  items: string[];
  outputTitle: string;
  outputDescription: string;
  duration?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
