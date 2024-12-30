import { Routes } from '@angular/router';
import { AllHeaderMenuComponent } from './header/RowTwoHeader/all-header-menu/all-header-menu.component';
import { WomanHeaderMenuComponent } from './header/RowTwoHeader/woman-header-menu/woman-header-menu.component';
import { ManHeaderMenuComponent } from './header/RowTwoHeader/man-header-menu/man-header-menu.component';
import { ChildHeaderMenuComponent } from './header/RowTwoHeader/child-header-menu/child-header-menu.component';
import { LogInComponent } from './header/log-in/log-in.component';
import { RegisterAccountComponent } from './header/log-in/register-account/register-account.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';


// export const routes: Routes = [
//     { path: '',redirectTo: '/all', pathMatch: 'full'},
//     { path: 'all', component: AllHeaderMenuComponent},
//     { path: 'woman', component: WomanHeaderMenuComponent},
//     { path: 'man', component: ManHeaderMenuComponent},
//     { path: 'child', component: ChildHeaderMenuComponent},
//     { path: 'logIn',component: LogInComponent},
//     { path: 'registerAccount', component: RegisterAccountComponent}
// ];

export const routes: Routes = [
    {
      path: '',
      component: MainLayoutComponentComponent,
      children: [
        { path: '', redirectTo: '/all', pathMatch: 'full' },
        { path: 'all', component: AllHeaderMenuComponent },
        { path: 'woman', component: WomanHeaderMenuComponent},
        { path: 'man', component: ManHeaderMenuComponent},
        { path: 'child', component: ChildHeaderMenuComponent},
      ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [
        { path: 'logIn', component: LogInComponent },
        { path: 'registerAccount', component: RegisterAccountComponent }
      ]
    }
  ];