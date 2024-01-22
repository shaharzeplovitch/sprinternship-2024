import { Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Company } from '../interfaces/company';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

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

  navigateToCompanyPage(companyId: number): void {
    this.router.navigate(['/company-detail', companyId]);
  }

  bookmarkToggle() {

    if (this.company.isBookmarked) {
      this.dataService.savedCompaniesSize--;
    }
    else { 
      this.dataService.savedCompaniesSize++;
    }
    this.dataService.updateCompanyCounter(this.company.id, this.company).then(res => {
      this.company.isBookmarked = !this.company.isBookmarked;
      console.log(this.company.isBookmarked);
    console.log(this.dataService.savedCompaniesSize);
    });
  }
}
