import { Component, inject } from '@angular/core';
import { SuggestedCompaniesComponent } from '../suggested-companies/suggested-companies.component';
import { DataService } from '../services/data.service';
import { Company } from '../interfaces/company';
import { CommonModule } from '@angular/common';
import { JobComponent } from '../job/job.component';
import { Job } from '../interfaces/job';
import { SingleExperienceComponent } from '../single-experience/single-experience.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [SuggestedCompaniesComponent, CommonModule, JobComponent, SingleExperienceComponent],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css',
})
export class CompanyDetailComponent {
  dataService: DataService = inject(DataService);

  // arrays of Company objects
  companiesList: Company[] = [];
  companyJobs: Job[] = [];
  suggestedCompanies: Company[] = [];
  // specificCompany of Company object
  specificCompany: Company | undefined;

  constructor(private route: ActivatedRoute) { // Extract the id parameter from the route
    const companyId = Number(this.route.snapshot.params['id']);

    this.dataService
      .getAllSuggestedCompanies()
      .then((companiesList: Company[]) => {
        this.companiesList = companiesList;
      });

    this.dataService.getCompanyById(companyId).then((specificCompany: Company) => {
      this.specificCompany = specificCompany;
    });

    this.dataService.getJobsByCompanyId(companyId).then((companyJobs: Job[]) => {
      this.companyJobs = companyJobs;
    });

    this.dataService.getAllSuggestedCompanies().then((suggestedCompanies: Company[]) => {
      this.suggestedCompanies = suggestedCompanies;
    });
  }
}



