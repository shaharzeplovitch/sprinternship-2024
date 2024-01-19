import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from '../company/company.component';
import { DataService } from '../services/data.service';
import { Company } from '../interfaces/company';
import { Experience } from '../interfaces/experience';
import { FilterboxComponent } from '../filterbox/filterbox.component';
import { FormsModule } from '@angular/forms';
import { LeftSidebarMenuComponent } from '../left-sidebar-menu/left-sidebar-menu.component';
import { SingleExperienceComponent } from '../single-experience/single-experience.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CompanyComponent,
    FormsModule,
    LeftSidebarMenuComponent,
    FilterboxComponent,
    SingleExperienceComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dataService: DataService = inject(DataService);
  companiesListUnsaved: Company[] = [];
  companiesListSaved: Company[] = [];
  experienceList: Experience[] = [];

  constructor() {
    this.dataService.getAllCompanies().then((companiesListUnsaved: Company[]) => {
      this.companiesListUnsaved = companiesListUnsaved.filter(company => company.isBookmarked === false);
    });
    this.dataService.getAllCompanies().then((companiesListSaved: Company[]) => {
      this.companiesListSaved = companiesListSaved.filter(company => company.isBookmarked === true);
    });
    this.dataService.getExperiencesByJobId(1243).then((experienceList: Experience[]) => {
      this.experienceList = experienceList;
    });
  }
}
