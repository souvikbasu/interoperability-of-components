import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-angular-component",
  template: `
    <div>Angular Component</div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 300px;
        width: 300px;
        background-color: #dd0031;
        padding: 20px;
        font-size: 2rem;
        color: white;
        border: solid 2px darkgray;
        margin: 20px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class AngularComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}