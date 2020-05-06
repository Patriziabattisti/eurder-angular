import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../item';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormControl} from '@angular/forms';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getItem();

  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  onSubmit(itemData) {
    itemData.name = itemData.name.trim();
    itemData.id = this.item.id;
    if (!itemData.name || itemData.price < 0 || itemData.amountOfStock < 0) {
      return;
    }
    this.itemService.updateItem(itemData).subscribe();
  }
}
