import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NewsfeedComponent } from './indexpage/newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path:'' , component: WelcomepageComponent },
  { path:'index' , component: IndexpageComponent },
  { path:'newsfeed' , component: NewsfeedComponent },
  { path:'profile' , component: ProfileComponent },
  { path:'signup' , component: SignupComponent },
  { path:'settings' , component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
