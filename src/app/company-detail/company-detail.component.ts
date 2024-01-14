import { Component, inject } from '@angular/core';
import { SuggestedCompaniesComponent } from '../suggested-companies/suggested-companies.component';
import { DataService } from '../services/data.service';
import { Company } from '../interfaces/company';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [SuggestedCompaniesComponent, CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  dataService: DataService = inject(DataService);
  companiesList: Company[] = [];

  constructor() {
    this.dataService.getAllSuggestedCompanies().then((companiesList: Company[]) => {
      this.companiesList = companiesList;
    });
  }
}
