import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginvisibilityService } from '../../loginvisibility.service';
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

  constructor(private loginvisibilityService: LoginvisibilityService) {}

  ngOnInit(): void {
    this.loginvisibilityService.isHidden$.subscribe((hidden) => {
      this.isLogInActive = hidden;
    });
  }

  togglePasswordVisibility(): void {
    this.passwordType = this.passwordType === 'password' ?  'text' : 'password'
  }
}
