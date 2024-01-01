import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  // {
  //   path: 'company/:id',
  //   component: CompanyDetailsComponent,
  //   children: [
  //     {
  //       path: 'job/:id',
  //       component: JobComponent,
  //       title: 'Job details'
  //     }
  //   ]
  // },

];

export default routeConfig;
