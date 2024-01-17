import { Component, Input } from '@angular/core';
import { Job } from '../interfaces/job';
import { CommonModule } from '@angular/common';
import { ExperiencesOverlayComponent } from '../experiences-overlay/experiences-overlay.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, ExperiencesOverlayComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: Job;
  showOverlay = false;
  toggleOverlay(){
    this.showOverlay = true;
  }
}

