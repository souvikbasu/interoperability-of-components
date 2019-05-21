import { Component, OnInit } from "@angular/core";

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { SEND_MESSAGE } from "../actions";

@Component({
  selector: "app-angular-component",
  templateUrl: "./angular-component.component.html",
  styleUrls: ["./angular-component.component.css"]
})
export class AngularComponentComponent implements OnInit {
  @select() msg;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}

  sendMessage() {
    this.ngRedux.dispatch({ type: SEND_MESSAGE, msg: "hellooo" });
  }
}
