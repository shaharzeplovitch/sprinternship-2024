import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main>
      <header class="brand-name">
        <a>
          <img class="brand-logo" src="/assets/linkedin.png" alt="logo" aria-hidden="true">
        </a>
      </header>
      <section class="content">
        <!-- <router-outlet></router-outlet> -->
        <h3>Hello there!</h3>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}