import { Component } from '@angular/core';
import { MoodPanelComponent } from './mood-panel/mood-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MoodPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'mood-app';
}