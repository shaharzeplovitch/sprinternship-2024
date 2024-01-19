import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import { Job } from '../interfaces/job';
import { Experience } from '../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  companyUrl = 'http://localhost:3000/companies/';
  jobsUrl = 'http://localhost:3000/jobs/';
  experiencesUrl = 'http://localhost:3000/experiences/';
  suggestedCompaniesUrl = 'http://localhost:3000/suggestedCompanies/';

  savedCompaniesSize = 4;

  // Returns a JSON list of all companies 
  async getAllCompanies(): Promise<Company[]> {
    const data = await fetch(this.companyUrl);
    return await data.json() ?? [];
  }

  async getAllSuggestedCompanies(): Promise<Company[]> {
    const data = await fetch(this.suggestedCompaniesUrl);
    return await data.json() ?? [];
  }

  async getJobById(jobId: number): Promise<Job> {
    const data = await fetch(`${this.jobsUrl}${jobId}`);
    return await data.json() ?? {};
  }

  async getCompanyById(companyId: number): Promise<Company> {
    const data = await fetch(`${this.companyUrl}${companyId}`);
    return await data.json() ?? {};
  }

  async getExperienceById(convId: number): Promise<Experience> {
    const data = await fetch(`${this.experiencesUrl}${convId}`);
    return await data.json() ?? {};
  }

  async getAllJobs(): Promise<Job[]> {
    const data = await fetch(this.jobsUrl);
    return await data.json() ?? [];
  }

  async getJobsByCompanyId(companyId: number): Promise<Job[]> {
    const jobsUrl = `http://localhost:3000/jobs?companyId=${companyId}`;
    const data = await fetch(jobsUrl);
    return await data.json() ?? [];
  }

  async getAllExperiences(): Promise<Experience[]> {
    const data = await fetch(this.experiencesUrl);
    return await data.json() ?? [];
  }

  async getExperiencesByJobId(jobId: number): Promise<Experience[]> {
    const pageNum = Math.floor(Math.random() * 10) + 1;
    
    const experiencesUrl = `http://localhost:3000/experiences?_page=${pageNum}&_limit=100`;
    const data = await fetch(experiencesUrl);
    return await data.json() ?? [];
  }
}