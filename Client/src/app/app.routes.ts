import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {Page404Component} from "./components/page-404/page-404.component";
import {CartComponent} from "./components/cart/cart.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path: '', component:HomeComponent, canActivate: [authGuard]},
  {path: 'login', component:LoginComponent, canActivate: [authGuard]},
  {path: 'signup', component:SignupComponent, canActivate: [authGuard]},
  {path: 'forgot-password', component:ForgotPasswordComponent, canActivate: [authGuard]},
  {path: 'cart', component:CartComponent, canActivate: [authGuard]},
  { path: '**', component: Page404Component}
];
