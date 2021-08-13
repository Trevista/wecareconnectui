
export interface Profile {
  id: number;
  userName: string;
  email: string;
  userId: number;
  profilePic: string;
  profileDescription: string;
  clinicInfo: ClinicInfo;
  contactInfo: ContactInfo;
  feePerVisit: number;
  services?: string;
  specializations?: (Specialization)[] | null;
  educationBackground?: (EducationBackgroundEntity)[] | null;
  experience?: (ExperienceEntity)[] | null;
  awards?: (AwardsEntityOrRegistrationsEntity)[] | null;
  memberShips?: (Membership)[] | null;
  registrations?: (AwardsEntityOrRegistrationsEntity)[] | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth?: Date | null;
}

export interface ClinicInfo {
  id: number;
  name: string;
  address: string;
  images?: (string)[] | null;
}

export interface ContactInfo {
  addressId: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}
export interface EducationBackgroundEntity {
  id: number;
  degree: string;
  institute: string;
  completionYear: string;
}
export interface ExperienceEntity {
  id: number;
  institutionName: string;
  from: string;
  to: string;
  designation: string;
}
export interface AwardsEntityOrRegistrationsEntity {
  id: number;
  name: string;
  year: string;
  attachment: string;
}

export interface Membership {
  id: number;
  name: string;
}

export interface Specialization {
  id: number;
  name: string;
}
