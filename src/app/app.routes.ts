import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";


export const routes: Routes  = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'all', component: MainComponent },
  {
    path: 'logIn',
    loadComponent: () =>
      import('./log-in/log-in.component').then((c) => c.LogInComponent),
  },
  {
    path: 'registerAccount',
    loadComponent: () =>
      import('./register-account/register-account.component').then(
        (c) => c.RegisterAccountComponent
      ),
  },
  { path: '**', redirectTo: '/all', pathMatch: 'full' },
];