import { Component, OnInit } from "@angular/core";

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { SEND_MESSAGE } from "../actions";

@Component({
  selector: "app-angular-demo",
  templateUrl: "./angular-demo.component.html",
  styleUrls: ["./angular-demo.component.css"]
})
export class AngularDemoComponent implements OnInit {
  @select() msg;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}

  sendMessage() {
    this.ngRedux.dispatch({ type: SEND_MESSAGE, msg: "hellooo" });
  }
}
