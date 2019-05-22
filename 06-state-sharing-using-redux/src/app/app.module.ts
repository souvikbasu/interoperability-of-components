import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from "@angular-redux/store";

import { AppComponent } from "./app.component";
import { AngularComponentComponent } from "./angular-component/angular-component.component";
import { IAppState, rootReducer, INITIAL_STATE } from "./store";

@NgModule({
  declarations: [AppComponent, AngularComponentComponent],
  imports: [BrowserModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
