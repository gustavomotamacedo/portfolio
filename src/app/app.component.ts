import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, SkillsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
