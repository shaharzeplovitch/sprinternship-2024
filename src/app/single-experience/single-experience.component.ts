import { Component, Input, inject } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-experience',
  standalone: true,
  imports: [],
  templateUrl: './single-experience.component.html',
  styleUrl: './single-experience.component.css'
})
export class SingleExperienceComponent {
  @Input() experience!: Experience;
  dataService: DataService = inject(DataService);
  router: Router = inject(Router);

}

