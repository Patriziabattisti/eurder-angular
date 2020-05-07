import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() message = '';

  items: Item[];
  checkoutForm;
  numberOfCharacter = 255;
  counter;
  lengthOfDescription;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({name: '', description: '', price: '', amountOfStock: ''});
  }

  ngOnInit(): void {
    this.getItems();
    this.counter = this.numberOfCharacter;
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  async onSubmit(itemData) {
    itemData.name = itemData.name.trim();
    this.message = 'Creating';
    if (!itemData.name || itemData.price < 0 || itemData.amountOfStock < 0) {
      return;
    }

    this.itemService.addItem(itemData).subscribe(item => {
      this.items.push(item);
    });
    await this.sleep(1000);
    this.checkoutForm.reset();
    this.message = '';
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onKeyPress(evt: KeyboardEvent) {
    /*this.lengthOfDescription = evt.target.value.length + 1;
    // this.counter -= evt.target.value.length;
    console.log(this.numberOfCharacter);
    console.log(this.lengthOfDescription)
    console.log(this.counter);*/
  }

}
