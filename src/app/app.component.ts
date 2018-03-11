import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <h1>Angular 4</h1>
  <nav>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/products" routerLinkActive="active">Products</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test App';
}
