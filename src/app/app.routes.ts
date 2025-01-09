import { Routes } from '@angular/router';
import {AboutMeComponent} from './pages/about-me/about-me.component';

export const routes: Routes = [
  { path: 'about_me', component: AboutMeComponent },
  { path: '**', redirectTo: 'about_me', pathMatch: 'full' }
];
