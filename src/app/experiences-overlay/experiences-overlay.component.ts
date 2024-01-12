import { Component } from '@angular/core';
import { SingleExperienceComponent } from '../single-experience/single-experience.component';

@Component({
  selector: 'app-experiences-overlay',
  standalone: true,
  imports: [SingleExperienceComponent],
  templateUrl: './experiences-overlay.component.html',
  styleUrl: './experiences-overlay.component.css'
})
export class ExperiencesOverlayComponent {

}
