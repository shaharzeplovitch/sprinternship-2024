import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-left-sidebar-menu',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar-menu.component.html',
  styleUrl: './left-sidebar-menu.component.css'
})
export class LeftSidebarMenuComponent {
  dataService: DataService = inject(DataService);
}
