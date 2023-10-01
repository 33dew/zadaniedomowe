import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

interface User {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  users: User[] = [];

  name: string = '';
  surname: string = '';

  constructor(private _toastr: ToastrService, private _translateService: TranslateService) { }

  addUser() {
    if (this.name === '' || this.surname === '') return;
    this.users.push({name: this.name, surname: this.surname});
    if(this._translateService.currentLang === 'en')
      this._toastr.success(`User ${this.name} ${this.surname} added!`, 'Success');
    else
      this._toastr.success(`Użytkownik ${this.name} ${this.surname} dodany!`, 'Sukces');
    this.name = '';
    this.surname = '';
  }
}
