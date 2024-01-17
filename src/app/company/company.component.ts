import { Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Company } from '../interfaces/company';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { Job } from '../interfaces/job';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  @Input() company!: Company;
  dataService: DataService = inject(DataService);
  router: Router = inject(Router);

  goToCompanyPage() {
    this.router.navigate(['/company', this.company.id]);
  }

  navigateToCompanyPage(companyId: number): void {
    this.router.navigate(['/company-detail', companyId]);
  }

}
