import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filterbox',
  standalone: true,
  imports: [MatSliderModule, FormsModule, CommonModule],
  templateUrl: './filterbox.component.html',
  styleUrl: './filterbox.component.css'
})
export class FilterboxComponent {
  ratingMin = 1;
  ratingMax = 5;
}

