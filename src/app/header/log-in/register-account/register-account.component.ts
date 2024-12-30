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
  newsInfo: boolean = false;

  // GENDER
  genderValue:string = '';

  //NAME
  userName:string ='';
  lastName:string = '';

  //E-MAIL
  email:string = '';
  emailControl:string ='';

  //SUBSCRIBE NEWSLETTER
  isChecked: boolean = false;

  // BIRTHDAY SETUP
  days:number[] = [];
  months:string[] = [];
  years:number [] = [];
  touched: boolean = false;

  // TELEPHONE NUMBERS
  telephone:string = '';
  mobilTelephone:string = '';

  selectedDay: string | number = '';
  selectedMonth: string | number = '';
  selectedYear: string | number = '';

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

  onSubmit() {
    console.log('Form Data:', this.formData); // Môžeš vidieť dáta pred odoslaním

    // Voláme službu na odoslanie dát na server
    this.registerService.registerUser(this.formData).subscribe(
      (response) => {
        // Spracovanie odpovede zo servera
        console.log('Server Response:', response);
        // Môžeš sem pridať akcie po úspešnej registrácii (napr. presmerovanie, zobrazenie správy)
      },
      (error) => {
        // Spracovanie chyby
        console.error('Error:', error);
      }
    );
  }
}
