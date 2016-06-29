import { Component, Input } from '@angular/core';

import { Item } from './Objects/item';

@Component({
  selector: 'my-item-detail',
  template: `
    <div *ngIf="item">
      <h2>{{item.name}} details!</h2>
      <div>
        <label>name: </label>
        <input [(ngModel)]="item.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class ItemDetailComponent {
  @Input()
  item: Item;
}
