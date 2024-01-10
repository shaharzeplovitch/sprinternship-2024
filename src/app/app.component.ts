import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    NavbarComponent
  ],
  template: `
    <main>
      <!-- <div class="navbar">
        <img class="nav-img" src="../assets/navbar.png" alt="LinkedIn Logo">
      </div>       -->
      <section class="content">
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}