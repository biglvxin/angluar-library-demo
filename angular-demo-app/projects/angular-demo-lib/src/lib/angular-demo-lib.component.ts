import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-angular-demo-lib',
  template: `
    <p>
      angular-demo-lib works!
    </p>
    <h1 class="lib-color"> test angular-demo-lib</h1>
    <img src="../assets/angular.jpg" />
  `,
  styleUrls: ["./angular-demo-lib.component.css"],
  /* templateUrl: './angular-demo-lib.component.html',
  styleUrls: ['./angular-demo-lib.component.css'] */
})
export class AngularDemoLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
