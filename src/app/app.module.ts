import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './shared/header/header.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NewsfeedComponent } from './indexpage/newsfeed/newsfeed.component';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { SignupComponent } from './signup/signup.component';
import { ConfigService } from './welcomepage/config.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    IndexpageComponent,
    NewsfeedComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProfileModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
