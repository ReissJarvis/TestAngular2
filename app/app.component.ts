import { Component } from '@angular/core';

import { Item } from './Items/Objects/item';
import { ItemListComponent } from './Items/item-list.component'
import { ItemDetailComponent } from './Items/item-detail.component';



@Component({
  selector: 'my-app',
  template: `<h1>My SECOND Angular 2 App</h1>
      <item-list></item-list>
      <my-item-detail [item]="selectedItem"></my-item-detail>
      `,
  directives:[ItemListComponent, ItemDetailComponent]
})

export class AppComponent {
  selectedItem:Item;

  onSelect(item: Item) { this.selectedItem = item; }
}
