import { Component, Input } from '@angular/core';
import { Job } from '../interfaces/job';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: Job;
}

const btn = document.createElement('button');
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);