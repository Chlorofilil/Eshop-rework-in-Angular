import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-man-header-menu',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './man-header-menu.component.html',
  styleUrl: '../../headerStyles.css'
})
export class ManHeaderMenuComponent {

}
