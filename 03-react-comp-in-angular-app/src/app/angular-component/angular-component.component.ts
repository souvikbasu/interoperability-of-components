import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular-component",
  templateUrl: "./angular-component.component.html",
  styleUrls: ["./angular-component.component.css"]
})
export class AngularComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    import("../../assets/react-app/static/js/2.3310f33a.chunk.js").then(() => {
      import("../../assets/react-app/static/js/main.a1ec71de.chunk.js");
    });
  }
}
