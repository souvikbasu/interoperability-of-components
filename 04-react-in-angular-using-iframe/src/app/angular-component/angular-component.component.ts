import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-angular-component",
  templateUrl: "./angular-component.component.html",
  styleUrls: ["./angular-component.component.css"]
})
export class AngularComponentComponent implements OnInit {
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
