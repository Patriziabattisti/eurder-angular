import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  items: Item[];
  checkoutForm;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({name: '', description: '', price: '', amountOfStock: ''});
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  onSubmit(itemData) {
    this.checkoutForm.reset();
    console.log(itemData);
    itemData.name = itemData.name.trim();

    if (!itemData.name || itemData.price < 0 || itemData.amountOfStock < 0) {
      return;
    }
    this.itemService.addItem(itemData).subscribe(item => {
      this.items.push(item);
    });
  }
}
