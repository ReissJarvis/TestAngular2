import { Component } from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router';

import { ItemService } from './Items/Services/item.service';

@Component({
  selector:'my-app',
  template:`
<h1>{{title}}</h1>
<nav>
  <a [routerLink] = "['/dashboard']" routerLinkActive='active'> Dashboard</a>
  <a [routerLink] = "['/items']" routerLinkActive='active'> Items</a>
</nav>
<router-outlet></router-outlet>
  `,
  directives:[ROUTER_DIRECTIVES],
  providers:[ItemService]
})

export class AppComponent{
  title = "Item Application";
}
