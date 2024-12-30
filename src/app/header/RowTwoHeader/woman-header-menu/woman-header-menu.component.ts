import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-woman-header-menu',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './woman-header-menu.component.html',
  styleUrl: '../../headerStyles.css'
})
export class WomanHeaderMenuComponent {

}
