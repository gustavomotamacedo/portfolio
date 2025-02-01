import { Component } from '@angular/core';
import { SkillCardComponent } from "./skill-card/skill-card.component";

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
