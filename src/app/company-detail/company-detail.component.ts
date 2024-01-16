import { Component, inject } from '@angular/core';
import { SuggestedCompaniesComponent } from '../suggested-companies/suggested-companies.component';
import { DataService } from '../services/data.service';
import { Company } from '../interfaces/company';
import { CommonModule } from '@angular/common';
import { JobComponent } from '../job/job.component';
import { Job } from '../interfaces/job';
import { SingleExperienceComponent } from '../single-experience/single-experience.component';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [SuggestedCompaniesComponent, CommonModule, JobComponent, SingleExperienceComponent],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css',
})
export class CompanyDetailComponent {
  dataService: DataService = inject(DataService);
  selectedCompany: Company = {
    backgroundImageUrl: 'assets/background/meta_cover.jpeg',
    companyDetailLogo: 'assets/company-logos/meta_logo.jpeg',
    companyReviews: 2456,
    companySize: 86000,
    competitors: 'Snap, Youtube, Twitter',
    description:
      'Meta builds technologies that help people connect, find communities, and grow businesses. When Facebook launched in 2004, it changed the way people connect. Apps like Messenger, Instagram and WhatsApp further empowered billions around the world. Now, Meta is moving beyond 2D screens toward immersive experiences like augmented and virtual reality to help build the next evolution in social technology.',
    founded: '2004',
    headquarters: 'Menlo Park, CA',
    id: 4,
    industry: 'Internet & Web Services',
    isBookmarked: false,
    logoImageUrl: 'assets/facebook.png',
    name: 'Meta',
    rating: 4,
  };
  companiesList: Company[] = [];
  companyJobs: Job[] = [];
  suggestedCompanies: Company[] = [];

  constructor() {
    this.dataService
      .getAllSuggestedCompanies()
      .then((companiesList: Company[]) => {
        this.companiesList = companiesList;
      });
    this.dataService.getJobsByCompanyId(0).then((companyJobs: Job[]) => {
      this.companyJobs = companyJobs;
    });

    this.dataService.getAllSuggestedCompanies().then((suggestedCompanies: Company[]) => {
      this.suggestedCompanies = suggestedCompanies;
    });
  }
}
