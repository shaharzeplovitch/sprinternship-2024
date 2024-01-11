import { Component } from '@angular/core';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [
    JobComponent
  ],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {

}
