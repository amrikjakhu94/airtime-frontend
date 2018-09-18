import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NewsfeedComponent } from './indexpage/newsfeed/newsfeed.component';
// import { HeaderComponent } from './shared/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'' , component: WelcomepageComponent },
  { path:'index' , component: IndexpageComponent },
  { path:'newsfeed' , component: NewsfeedComponent },
//  { path:'profile' ,  loadChildren: 'src/app/profile/profile.module#ProfileModule' },
  { path:'profile' , component: ProfileComponent },
  { path:'signup' , component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
