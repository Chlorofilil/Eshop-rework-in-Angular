import { Component } from '@angular/core';
import { HeaderMainMenuComponent } from "./header-main-menu/header-main-menu.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginvisibilityService } from '../loginvisibility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMainMenuComponent, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private loginvisibilityService: LoginvisibilityService) {}

  //CHECKING URL SO IT DESABLE HEADER-MAIN-ROW1
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/logIn' || this.router.url === '/registerAccount') {
          this.loginvisibilityService.setHiddenState(true);
        } else {
          this.loginvisibilityService.setHiddenState(false);
        }
      }
    });
  }
}
