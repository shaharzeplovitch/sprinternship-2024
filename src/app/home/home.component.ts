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
  companiesList: Company[] = [];
  experienceList: Experience[] = [];

  constructor() {
    this.dataService.getAllCompanies().then((companiesList: Company[]) => {
      this.companiesList = companiesList;
    });
    this.dataService.getExperiencesByJobId(1243).then((experienceList: Experience[]) => {
      this.experienceList = experienceList;
      console.log(experienceList);
    });
  }
}
