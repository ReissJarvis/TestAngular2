import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import { ItemService } from './Items/Services/item.service';

import { NavigationComponent } from './Navigation/navigation.component';

@Component({
  selector:'my-app',
  template:`
<h1>{{title}}</h1>
<nav></nav>
<div class="app-body">
<router-outlet></router-outlet>
</div>

  `,
  directives:[ROUTER_DIRECTIVES, NavigationComponent],
  providers:[ItemService]
})

export class AppComponent{
  title = "Item Application";
}
