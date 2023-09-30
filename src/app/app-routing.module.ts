import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {TodoComponent} from "./todo/todo.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
