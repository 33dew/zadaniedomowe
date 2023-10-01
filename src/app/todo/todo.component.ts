import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  items: string[] = [];
  newItem: string = '';

  constructor(private _toastr: ToastrService, private _translateService: TranslateService) { }

  addItem() {
    if (this.newItem === '') return;
    if (this.items.length >= 10) {
      if(this._translateService.currentLang === 'en')
        this._toastr.error('You cannot add more than 10 items', 'Error');
      else
         this._toastr.error('Nie możesz dodać więcej niż 10 elementów', 'Błąd');
      return;
    }
    this.items.push(this.newItem);
    this.newItem = '';
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
