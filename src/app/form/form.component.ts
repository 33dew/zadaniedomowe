import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

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

  constructor(private _toastr: ToastrService) { }

  addUser() {
    if (this.name === '' || this.surname === '') return;
    this.users.push({name: this.name, surname: this.surname});
    this._toastr.success(`User ${this.name} ${this.surname} added!`, 'Success');
    this.name = '';
    this.surname = '';
  }
}
