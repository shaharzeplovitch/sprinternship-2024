import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperiencesOverlayComponent } from './experiences-overlay/experiences-overlay.component';
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
  },
  {
    path: 'experiences',
    component: ExperiencesOverlayComponent,
    title: 'Experiences Overlay Component'
  },
];

export default routeConfig;
