import { Component } from '@angular/core';

@Component({
  selector: 'app-required-message',
  standalone: true,
  imports: [],
  template: `
    <span class="required-message">This information is mandatory</span>
  `,
  styles: [`
    .required-message {
      color: red;
      font-size: 14px;
    }
  `]
})
export class RequiredMessageComponent {

}
