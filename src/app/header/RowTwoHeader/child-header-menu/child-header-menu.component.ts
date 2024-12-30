import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-child-header-menu',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './child-header-menu.component.html',
  styleUrl: '../../headerStyles.css'
})
export class ChildHeaderMenuComponent {

}
