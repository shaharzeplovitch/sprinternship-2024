export interface Job {
  id: number;
  companyId: number; // each job belongs to a company
  companyName: string;
  contractType: string;
  location: string;
  employeeLocation: string;
  jobDescription: string;
  reviews: number;
  jobTitle: string; 
  jobLogo: string;
}