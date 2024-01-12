import { Component, Input, inject } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() experience!: Experience;
  dataService: DataService = inject(DataService);
  router: Router = inject(Router);

  goToJobPage() {
    this.router.navigate(['/experience', this.experience.id]);
  }
}
