import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exp-card',
  imports: [],
  templateUrl: './exp-card.component.html',
  styleUrl: './exp-card.component.scss'
})
export class ExpCardComponent {
  @Input() title;
  @Input() function;
  @Input() time;
  @Input() description;
  @Input() imgPath;

  constructor() {
    this.title = 'Title';
    this.function = 'Function';
    this.time = '0000';
    this.description = 'A nível organizacional, o aumento do diálogo entre os diferentes setores produtivos não pode mais se dissociar do levantamento das variáveis envolvidas.';
    this.imgPath = '';
  }
}
