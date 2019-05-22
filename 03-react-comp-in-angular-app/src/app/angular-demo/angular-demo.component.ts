import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular-demo",
  templateUrl: "./angular-demo.component.html",
  styleUrls: ["./angular-demo.component.css"]
})
export class AngularDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    import("../../assets/react-app/static/js/2.3310f33a.chunk.js").then(() => {
      import("../../assets/react-app/static/js/main.a1ec71de.chunk.js");
    });
  }
}
