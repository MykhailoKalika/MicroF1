import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutMeComponent} from './pages/about-me/about-me.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MicroF1';
}
