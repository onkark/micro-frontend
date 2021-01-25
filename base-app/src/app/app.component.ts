import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from parent';

  counter = 3;


  parentCounterClick() {
    this.counter++;
  }

  onCounterChange(event: any) {

    console.log(event);
    this.counter = +event.detail;
  }


}
