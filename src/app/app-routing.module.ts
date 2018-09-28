import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NewsfeedComponent } from './indexpage/newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NotificationsComponent } from './indexpage/notifications/notifications.component';
import { MessagesComponent } from './indexpage/messages/messages.component';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path:'welcome' , component: WelcomepageComponent },
  { path:'index' , component: IndexpageComponent,canActivate: [AuthGuard] },
  { path:'newsfeed' , component: NewsfeedComponent,canActivate: [AuthGuard] },
  { path:'profile' , component: ProfileComponent,canActivate: [AuthGuard] },
  { path:'signup' , component: SignupComponent },
  { path:'settings' , component: SettingsComponent,canActivate: [AuthGuard] },
  { path:'changepassword' , component: ChangepasswordComponent,canActivate: [AuthGuard] },
  { path:'notifications' , component: NotificationsComponent,canActivate: [AuthGuard] },
  { path:'messages' , component: MessagesComponent,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
