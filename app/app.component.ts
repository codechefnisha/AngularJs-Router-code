import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Link One</a>
      <a routerLink="/heroes" routerLinkActive="active">Link Two</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }