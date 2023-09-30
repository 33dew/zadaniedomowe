import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  currentValue: number = 0;

  increaseValue() {
    this.currentValue++;
  }

  decreaseValue() {
    this.currentValue--;
  }

  resetValue() {
    this.currentValue = 0;
  }
}
