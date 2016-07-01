import { Component } from '@angular/core';

import { Item } from './Objects/item';
import { ItemListComponent } from './item-list.component';
import { ItemDetailComponent } from './item-detail.component';


@Component({
  selector: 'my-items',
  moduleId: module.id,
  template: `<h1>Items</h1>
      <item-list></item-list>
      <my-item-detail [item]="selectedItem"></my-item-detail>
      `,
  directives:[ItemListComponent, ItemDetailComponent]
})

export class ItemComponent {
  selectedItem:Item;

  onSelect(item: Item) { this.selectedItem = item; }
}
