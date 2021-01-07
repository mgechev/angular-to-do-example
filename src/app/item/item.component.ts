import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description) {
    this.editable = false;
    // If the user clicks the save button without having entered anything in the edit input, the current item does not change and the edit input and buttons are removed
    if (description == '') {
      this.editable = false;
    } else {
      // change the description of the current item
      this.item.description = description;
    }
  }
}
