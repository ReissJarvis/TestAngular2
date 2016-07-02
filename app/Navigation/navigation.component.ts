import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector:'nav',
  moduleId: module.id,
  templateUrl:'navigation.component.html',
  styleUrls:['navigation.component.css'],
  directives:[ROUTER_DIRECTIVES],
})

export class NavigationComponent {

}
