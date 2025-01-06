import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  passwordType: string = 'password';
  isLogInActive: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordType = this.passwordType === 'password' ?  'text' : 'password'
  }
}