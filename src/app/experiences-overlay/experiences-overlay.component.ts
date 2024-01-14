import { Component, inject } from '@angular/core';
import { SingleExperienceComponent } from '../single-experience/single-experience.component';
import { DataService } from '../services/data.service';
import { Experience } from '../interfaces/experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences-overlay',
  standalone: true,
  imports: [SingleExperienceComponent, CommonModule],
  templateUrl: './experiences-overlay.component.html',
  styleUrl: './experiences-overlay.component.css'
})
export class ExperiencesOverlayComponent {
  dataService: DataService = inject(DataService);
  experienceList: Experience[] = [];
  
  constructor() {
    this.dataService.getAllExperiences().then((experienceList: Experience[]) => {
      this.experienceList = experienceList;
    });
  }
}
