import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
@Component({
  selector: 'app-all-header-menu',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './all-header-menu.component.html',
  styleUrl: '../../headerStyles.css'
})
export class AllHeaderMenuComponent {

}
