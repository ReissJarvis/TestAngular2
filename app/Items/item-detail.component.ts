import { Component, Input } from '@angular/core';

import { Item } from './Objects/item';

@Component({
  selector: 'my-item-detail',
  moduleId: module.id,
  templateUrl: "item-detail.component.html",
})

export class ItemDetailComponent {
  @Input()
  item: Item;
}
