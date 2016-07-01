import {provideRouter, RouterConfig} from '@angular/router';

import{ ItemComponent } from './Items/item.component';
import { DashboardComponent } from './dashboard.component';

const routes : RouterConfig = [
  {
    path:'dashboard',
    component:DashboardComponent
},
{
  path:'',
  redirectTo:'/dashboard',
  terminal:true
},
  {
  path:'items',
  component:ItemComponent
}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
