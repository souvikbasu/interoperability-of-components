import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-angular-demo",
  templateUrl: "./angular-demo.component.html",
  styleUrls: ["./angular-demo.component.css"]
})
export class AngularDemoComponent implements OnInit {
  @ViewChild("iframe") iframe: ElementRef;

  reactAppUrl: any;
  iframeContentWindow: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iframeContentWindow = this.iframe.nativeElement.contentWindow;
    this.reactAppUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `/assets/react-app/index.html`
    );
  }
}
