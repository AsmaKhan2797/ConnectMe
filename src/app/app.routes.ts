import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { PostComponent } from './layout/post/post.component';
import { DirectMessageComponent } from './layout/direct-message/direct-message.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { SettingComponent } from './layout/setting/setting.component';

export const routes: Routes = [
  {
    path: "", 
    redirectTo: "login", 
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forget-password",
    component : ForgetPasswordComponent
  },
  {
    path: "register",
    component : RegisterComponent
  },
  {
    path: "",
    component : LandingPageComponent,
    children: [
      {
        path: "home",
        component: PostComponent
      },
      {
        path: "direct-message",
        component: DirectMessageComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "settings",
        component: SettingComponent
      }
    ]
  }
];