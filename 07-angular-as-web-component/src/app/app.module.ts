import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AngularComponentComponent } from "./angular-component/angular-component.component";

@NgModule({
  declarations: [AngularComponentComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AngularComponentComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const angularElement = createCustomElement(AngularComponentComponent, {
      injector
    });
    customElements.define("angular-element", angularElement);
  }

  ngDoBootstrap() {}
}
