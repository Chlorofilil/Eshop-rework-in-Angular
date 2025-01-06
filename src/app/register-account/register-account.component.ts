import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RequiredMessageComponent } from "../required-message/required-message.component";
import { RegisterService } from '../register.service';
import { RegisterData } from '../register-data';

@Component({
  selector: 'app-register-account',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RequiredMessageComponent ],
  templateUrl: './register-account.component.html',
  styleUrl: './register-account.component.css'
})
export class RegisterAccountComponent implements OnInit {
  showSubscribeInfo: boolean = false;
  isSubmitted: boolean = false;

  //CONTROL
  emailControl:string ='';
  passwordControl: string = '';

  // BIRTHDAY SETUP
  days:number[] = [];
  months:string[] = [];
  years:number [] = [];

  ngOnInit(): void {
    this.days = Array.from({ length: 31}, (_,i) => i + 1);

    this.months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 123 }, (_, i) => currentYear - i);
  }

  formData: RegisterData = new RegisterData();

  constructor(private registerService: RegisterService) {}

  get passwordsMatch(): boolean {
    return this.formData.password === this.passwordControl;
  }

  onSubmit() {
    this.isSubmitted = true; 

    if (!this.passwordsMatch) {
      return; 
    }

    this.registerService.registerUser(this.formData).subscribe(
      (response) => {
        console.log('Server Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  toggleShowSubscribeInfo() {
    this.showSubscribeInfo = !this.showSubscribeInfo;
  }
}