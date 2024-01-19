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

  active: boolean = true;

  toSavedCompanies(){
    this.dataService.showCompanyList = false;
    this.active = this.dataService.showCompanyList;
  }
  toExploreCompanies(){
    this.dataService.showCompanyList = true;
    this.active = this.dataService.showCompanyList;
  }
}
