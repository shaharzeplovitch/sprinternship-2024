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
        <h3>Hello there!</h3>
        <h2>Hello World!</h2>
        <h3> test </h3>
        <h3> Hello my name is ishia </h3>
        <!-- <router-outlet></router-outlet> -->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}