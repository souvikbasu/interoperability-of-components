import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AngularDemoComponent } from "./angular-demo/angular-demo.component";

@NgModule({
  declarations: [AngularDemoComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AngularDemoComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const angularElement = createCustomElement(AngularDemoComponent, {
      injector
    });
    customElements.define("angular-element", angularElement);
  }

  ngDoBootstrap() {}
}
