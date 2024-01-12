import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperiencesOverlayComponent } from './experiences-overlay/experiences-overlay.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'experiences',
    component: ExperiencesOverlayComponent,
    title: 'Experiences Overlay Component'
  },
];

export default routeConfig;
