import { Component } from '@angular/core';
import { TeaserContainerComponent } from "./teaser-container/teaser-container.component";
import { NewsComponent } from "./news/news.component";
import { SpecialOfferComponent } from "./special-offer/special-offer.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TeaserContainerComponent, NewsComponent, SpecialOfferComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
