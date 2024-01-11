import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'company-detail',
    component: CompanyDetailComponent,
    title: 'Detail Page'
  }
];

export default routeConfig;
