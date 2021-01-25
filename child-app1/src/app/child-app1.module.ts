import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { ChildApp1Component } from './child-app1.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ChildApp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const headerElement = createCustomElement(ChildApp1Component, { injector: this.injector });
    customElements.define('app-child1', headerElement);
  }
}
