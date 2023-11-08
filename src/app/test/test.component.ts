import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input() count: number;
  @Output() increase: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    this.count = 0;
  }
  increment() {
    this.increase.emit(1000);
  }
}
