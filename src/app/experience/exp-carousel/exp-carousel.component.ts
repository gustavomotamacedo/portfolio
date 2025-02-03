import { Component, Input } from '@angular/core';
import { ExpCardComponent } from "../exp-card/exp-card.component";

@Component({
  selector: 'app-exp-carousel',
  imports: [ExpCardComponent],
  templateUrl: './exp-carousel.component.html',
  styleUrl: './exp-carousel.component.scss'
})
export class ExpCarouselComponent {

}
