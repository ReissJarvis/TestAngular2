import { Component, OnInit } from '@angular/core';

import { Item } from './Objects/item';
import { ItemDetailComponent } from './item-detail.component';
import { ItemService } from './Services/item.service';

@Component({
  selector: 'item-list',
  moduleId: module.id,
  templateUrl: "item-list.component.html",
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .items {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .items li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .items li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .items li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .items .text {
      position: relative;
      top: -3px;
    }
    .items .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .itemList{
      float:left;
    }
    .itemDetail {
      float:left;
    }
  `],
  directives: [ItemDetailComponent]
})
export class ItemListComponent implements OnInit {
  title = 'Item List';
  items: Item[];
  selectedItem:Item;

  constructor(private itemService: ItemService){}

  ngOnInit(){
    this.itemService.getItemsSlowly().then(items => this.items = items);
  }

  onSelect(item: Item) { this.selectedItem = item; }
}
