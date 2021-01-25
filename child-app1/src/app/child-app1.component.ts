import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'child-app1',
  templateUrl: './child-app1.component.html'
})
export class ChildApp1Component {
  @Input() title = 'child-app1';
  @Input() counter = 0;

  @Output() counterChange = new EventEmitter();



  childClick() {
    this.counterChange.emit(++this.counter);
  }
}
