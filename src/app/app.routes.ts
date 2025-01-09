import { Routes } from '@angular/router';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {EducationComponent} from './pages/education/education.component';
import {HigherEducationComponent} from './pages/higher-education/higher-education.component';

export const routes: Routes = [
  { path: 'about_me', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'higher-education', component: HigherEducationComponent },
  { path: '**', redirectTo: 'about_me', pathMatch: 'full' }
];
