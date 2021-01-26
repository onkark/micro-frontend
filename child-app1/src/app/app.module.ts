import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { ChildApp1Component } from './child-app1.component';
import { createCustomElement } from '@angular/elements';
import { ChildApp1Module } from './child-app1/child-app1.module';
import { ChildEntryComponent } from './child-app1/child-entry/child-entry.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChildApp1Module
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const childButtonElement = createCustomElement(ChildApp1Component, { injector: this.injector });
    customElements.define('child-button', childButtonElement);

    const childEntryElement = createCustomElement(ChildEntryComponent, { injector: this.injector });
    customElements.define('child-entry', childEntryElement);
  }
}
