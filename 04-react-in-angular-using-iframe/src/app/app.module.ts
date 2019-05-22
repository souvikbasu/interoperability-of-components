import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularDemoComponent } from "./angular-demo/angular-demo.component";

@NgModule({
  declarations: [AppComponent, AngularDemoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
