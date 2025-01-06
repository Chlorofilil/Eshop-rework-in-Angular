import { Component, HostListener, signal } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { TopNavHeaderComponent } from "./top-nav-header/top-nav-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavHeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // CREATE LEVELS FOR WIDTH REACTIVITY
  isLargeScreen = signal<boolean>(false);
  isMediumScreen = signal<boolean>(false);
  isSmallScreen = signal<boolean>(false);

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    const width = window.innerWidth;

    if (width >= 1400) {
      this.isLargeScreen.set(true);
      this.isMediumScreen.set(false);
      this.isSmallScreen.set(false);
    } else if (width >= 1020) {
      this.isLargeScreen.set(false);
      this.isMediumScreen.set(true);
      this.isSmallScreen.set(false);
    } else {
      this.isLargeScreen.set(false);
      this.isMediumScreen.set(false);
      this.isSmallScreen.set(true);
    }
  }

  ngOnInit(): void {
    this.onResize();
  }
}
