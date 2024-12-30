import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchTerm: string = '';
  isFocused: boolean = false;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    this.search.emit(this.searchTerm);
    console.log(this.searchTerm);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  @HostListener('focusin', ['$event.target']) onFocus(): void {
    this.isFocused = true;
    const inputElement = <HTMLInputElement>document.querySelector('.search-input');
    inputElement?.classList.add('focused');
  }

  @HostListener('focusout', ['$event.target']) onBlur(): void {
    this.isFocused = false;
    const inputElement = <HTMLInputElement>document.querySelector('.search-input');
    inputElement?.classList.remove('focused');
  }
}
