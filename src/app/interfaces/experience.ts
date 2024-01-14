export interface Experience {
  id?: number;
  jobId: number; // each experience belongs to a job
  authorFullName: string; 
  message: string;
  overallRating: number;
  difficultyRating: number;
  benefitsRating: number;
  workLifeBalanceRating: number;
  companyCultureRating: number;
}