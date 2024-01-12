import { Component, Input, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { Company } from '../interfaces/company';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggested-companies',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './suggested-companies.component.html',
  styleUrl: './suggested-companies.component.css'
})

export class SuggestedCompaniesComponent {
  @Input() company!: Company;
}
