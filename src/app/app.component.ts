import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav>
    <div class="nav-wrapper">
      <a class="brand-logo">Module</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a [routerLink] = "['/Posts']">Les Posts</a></li>
      <li><a [routerLink] = "['/Comments']">Les Commentaires</a></li>
      <li><a [routerLink] = "['/Albums']">Les Albums</a></li>
      <li><a [routerLink] = "['/Photos']">Les Photos</a></li>
      <li><a [routerLink] = "['/Users']">Les Utilisateurs</a></li>
      </ul>
    </div>
  </nav>
 
   <router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
