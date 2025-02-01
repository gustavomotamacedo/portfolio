import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() skillTitle : String;
  @Input() skillList : String[];

  constructor() {
    this.skillList = [];
    this.skillTitle = '';
  }
}
