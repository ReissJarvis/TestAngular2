import { Injectable } from '@angular/core';
import { Item } from '../Objects/item';

const ITEMS: Item[] = [
  { name: 'Mr. Nice' },
  { name: 'Narco' },
  { name: 'Bombasto' },
  { name: 'Celeritas' },
];

@Injectable()
export class ItemService{
  getItems(){
    return Promise.resolve(ITEMS);
  }
  getItemsSlowly(){
    return new Promise<Item[]>(resolve => setTimeout(()=> resolve(ITEMS), 2000));
  }
}
