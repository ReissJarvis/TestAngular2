import { Component, Input } from '@angular/core';

import { Item } from './Objects/item';

@Component({
  selector: 'my-item-detail',
  templateUrl: "./Views/item-detail.component.html",
})

export class ItemDetailComponent {
  @Input()
  item: Item;
}
