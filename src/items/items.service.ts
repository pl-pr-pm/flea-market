import { Injectable } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
    // return this.items.find((item) => {
    //   console.log('item id', item.id);
    //   item.id === id;
    // });
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  delete(id): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
