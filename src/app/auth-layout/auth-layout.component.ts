import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {

}
