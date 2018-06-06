import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> {{ title}}</h1>
  <p>
    The sum of {{first}} and {{second}} is , Sum of numbers: {{first + second}}. And Largest of numbers {{largest}}
  </p>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Databinding practice 2';

  first = 10;
  second = 20;


  largest = this.first >= this.second ? this.first : this.second;


}
