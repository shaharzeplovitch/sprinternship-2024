import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from '../company/company.component';
import { DataService } from '../services/data.service';
import { Company } from '../interfaces/company';
import { LeftSidebarMenuComponent } from '../left-sidebar-menu/left-sidebar-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CompanyComponent,
    LeftSidebarMenuComponent
  ],
  template: `
    <section>
      <app-left-sidebar-menu></app-left-sidebar-menu>
      <!-- <app-company
        *ngFor="let company of companiesList"
        [company]="company">
      </app-company> -->
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  dataService: DataService = inject(DataService);
  companiesList: Company[] = [];

  constructor() {
    this.dataService.getAllCompanies().then((companiesList: Company[]) => {
      this.companiesList = companiesList;
    });
  }
}