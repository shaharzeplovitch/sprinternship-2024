export interface Job {
  id: number;
  companyId: number; // each job belongs to a company
  companyName: string;
  companyLogoUrL: string;
  location: string;
  jobTitle: string; 
  salary: number;
  datePosted: number;
}