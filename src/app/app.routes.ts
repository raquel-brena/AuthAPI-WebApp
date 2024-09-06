import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/form/login/login.component';
import { HomeComponent } from './components/modules/home/home/home.component';
import { RegisterComponent } from './components/form/register/register.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' },
];
