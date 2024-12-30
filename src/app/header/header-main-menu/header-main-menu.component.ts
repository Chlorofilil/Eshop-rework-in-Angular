import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive,  } from '@angular/router';
import { LoginvisibilityService } from '../../loginvisibility.service';

@Component({
  selector: 'app-header-main-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header-main-menu.component.html',
  styleUrl: '../headerStyles.css'
})
export class HeaderMainMenuComponent {
  isLogInActive: boolean = false;

  constructor(private loginvisibilityService: LoginvisibilityService) {}

  handleSearch(searchTerm: string): void {
    console.log('Search term:', searchTerm);
  }

  ngOnInit(): void {
    this.loginvisibilityService.isHidden$.subscribe((hidden) => {
      this.isLogInActive = hidden;
    });
  }

}
