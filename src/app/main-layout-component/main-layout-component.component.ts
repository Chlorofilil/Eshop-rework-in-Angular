import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './main-layout-component.component.html',
})
export class MainLayoutComponentComponent {

}
