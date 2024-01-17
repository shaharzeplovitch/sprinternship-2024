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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let companyId: number = 0; // initialize default value

    this.route.params.subscribe((params) => {
      companyId = +params['id']; // Extract the id parameter from the route
    });

    this.dataService
      .getAllSuggestedCompanies()
      .then((companiesList: Company[]) => {
        this.companiesList = companiesList;
      });

    this.dataService.getCompanyById(companyId).then((specificCompany: Company) => {
      this.specificCompany = specificCompany;
      console.log(specificCompany); // testing if printing specific company attributes in console
    });

    this.dataService.getJobsByCompanyId(companyId).then((companyJobs: Job[]) => {
      this.companyJobs = companyJobs;
      console.log(companyId); // testing if id attribute has been correctly passed from company component
    });

    this.dataService.getAllSuggestedCompanies().then((suggestedCompanies: Company[]) => {
      this.suggestedCompanies = suggestedCompanies;
    });
  }
}
