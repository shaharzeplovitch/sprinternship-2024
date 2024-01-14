import { Component, Input, inject } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-experience.component.html',
  styleUrl: './single-experience.component.css'
})
export class SingleExperienceComponent {
  @Input() experience!: Experience;
  dataService: DataService = inject(DataService);
  router: Router = inject(Router);
  
  getStars(overallRating: number): number[] {
    return Array.from({ length: overallRating }, (_, i) => i + 1);
  }
}

