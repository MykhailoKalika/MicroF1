import { Routes } from '@angular/router';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {EducationComponent} from './pages/education/education.component';

export const routes: Routes = [
  { path: 'about_me', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: '**', redirectTo: 'about_me', pathMatch: 'full' }
];
