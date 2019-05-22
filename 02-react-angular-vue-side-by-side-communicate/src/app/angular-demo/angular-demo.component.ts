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

  ngOnInit() {
    window.addEventListener("message", postMsg => {
      console.log("Received in Angular", postMsg.data.msg);
      this.msg = postMsg.data.msg;
    });

    var el = document.querySelector("body");
    el.addEventListener<any>("sendMessage", msgEvent => {
      console.log(msgEvent);
      if (msgEvent.detail.msg) {
        this.msg = msgEvent.detail.msg;
      }
    });
  }

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
