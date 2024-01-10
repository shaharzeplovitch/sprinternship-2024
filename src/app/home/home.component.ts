import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from '../company/company.component';
import { DataService } from '../services/data.service';
import { Company } from '../interfaces/company';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { LeftSidebarMenuComponent } from '../left-sidebar-menu/left-sidebar-menu.component';
>>>>>>> 3830f26 (working on left sidebar menu)

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CompanyComponent,
<<<<<<< HEAD
    FormsModule
  ],
  templateUrl: './home.component.html',
=======
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
>>>>>>> 3830f26 (working on left sidebar menu)
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