import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NewsfeedComponent } from './indexpage/newsfeed/newsfeed.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NotificationsComponent } from './indexpage/notifications/notifications.component';
import { MessagesComponent } from './indexpage/messages/messages.component';
import { AuthGuard } from './core/services/auth-guard.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FindfriendsComponent } from './indexpage/findfriends/findfriends.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';

const routes: Routes = [
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path:'' , component: WelcomepageComponent },
  { path:'forgotpassword' , component: ForgotpasswordComponent },
  { path:'index' , component: IndexpageComponent,canActivate: [AuthGuard] },
  { path:'newsfeed' , component: NewsfeedComponent,canActivate: [AuthGuard] },
  { path:'findfriends' , component: FindfriendsComponent,canActivate: [AuthGuard] },
  { path:'profile' , loadChildren : './profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
  { path:'signup' , component: SignupComponent },
  { path:'settings' , component: SettingsComponent,canActivate: [AuthGuard] },
  { path:'changepassword' , component: ChangepasswordComponent,canActivate: [AuthGuard] },
  { path:'notifications' , component: NotificationsComponent,canActivate: [AuthGuard] },
  { path:'messages' , component: MessagesComponent,canActivate: [AuthGuard] },
  { path:'aboutus' , component: AboutusComponent },
  { path:'contactus' , component: ContactusComponent },
  { path:'setnewpassword' , component: SetnewpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// @ngModule({
//   imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: ‘reload’})],
//   exports: [RouterModule],
//   })