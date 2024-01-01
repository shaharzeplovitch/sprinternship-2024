export interface Experience {
  id?: number;
  jobId: number; // each experience belongs to a job
  authorFullName: string;
  companyName: string;
  date: number; 
  location: string;
  applicationProcess: string;
  interviewExperience: string; 
  foundHelpfulCount: number;
  receivedOffer: boolean;
  isDifficult: boolean;
  companyId?: number;
  acceptedOffer?: boolean;
}