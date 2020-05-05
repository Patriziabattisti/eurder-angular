import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService, private location: Location) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  goBack(): void {
    this.location.back();
  }


  add(name: string, description: string, price: number, amountOfStock: number): void {
    name = name.trim();
    description = description.trim();
    if (!name || price < 0 || amountOfStock < 0) {
      return;
    }
    this.itemService.addItem({name, description, price, amountOfStock} as Item).subscribe(item => {
      this.items.push(item);
    });

  }
}
