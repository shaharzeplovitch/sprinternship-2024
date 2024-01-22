import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-sidebar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-sidebar-menu.component.html',
  styleUrls: ['./left-sidebar-menu.component.css']
})
export class LeftSidebarMenuComponent {
  dataService: DataService = inject(DataService);
  selectedMenuItem = 'home';

  toSavedCompanies(){
    this.dataService.showCompanyList = false;
    this.selectedMenuItem = 'saved';
    this.dataService.updateSavedCompanies();
  }
  
  toExploreCompanies(){
    this.dataService.showCompanyList = true;
    this.selectedMenuItem = 'home';
    this.dataService.updateSavedCompanies();
  }
}