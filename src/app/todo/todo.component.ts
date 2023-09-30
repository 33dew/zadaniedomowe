import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  items: string[] = [];
  newItem: string = '';

  constructor(private _toastr: ToastrService) { }

  addItem() {
    if (this.newItem === '') return;
    if (this.items.length >= 10) {
      this._toastr.error('You cannot add more than 10 items', 'Error');
      return;
    }
    this.items.push(this.newItem);
    this.newItem = '';
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
