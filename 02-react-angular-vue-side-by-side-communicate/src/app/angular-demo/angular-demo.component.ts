import { Component, OnInit, ElementRef, ViewChild, Input } from "@angular/core";

@Component({
  selector: "app-angular-demo",
  templateUrl: "./angular-demo.component.html",
  styleUrls: ["./angular-demo.component.css"]
})
export class AngularDemoComponent implements OnInit {
  @ViewChild("comp") comp: ElementRef;
  @Input() msg: string;

  constructor() {}

  ngOnInit() {}

  emitEvent() {
    var event = new CustomEvent("sendMessage", {
      detail: { msg: "Hi from Angular!! This is custom event" },
      bubbles: true
    });
    this.comp.nativeElement.dispatchEvent(event);
  }

  postMessage() {
    window.postMessage(
      {
        msg: "Hi again from Angular!! This is window.postMessage"
      },
      "*"
    );
  }
}
