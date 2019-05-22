import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-angular-demo",
  templateUrl: "./angular-demo.component.html",
  styleUrls: ["./angular-demo.component.css"]
})
export class AngularDemoComponent implements OnInit {
  @ViewChild("comp") comp: ElementRef;

  constructor() {}

  ngOnInit() {}

  sendMessage() {
    var wn = this.comp.nativeElement.contentWindow;
    wn.postMessage({ type: "sendMessage", from: "Angular", msg: "Hi" });
  }
}
