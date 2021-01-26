import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEntryComponent } from './child-entry/child-entry.component';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [ChildEntryComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChildEntryComponent]
})
export class ChildApp1Module {

  // constructor(private injector: Injector) { }

  // ngDoBootstrap() {
  //   const childEntryElement = createCustomElement(ChildEntryComponent, { injector: this.injector });
  //   customElements.define('child-entry', childEntryElement);
  // }
}
