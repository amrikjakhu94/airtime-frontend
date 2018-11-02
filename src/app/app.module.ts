import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CropperModule } from 'ngx-cropper';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastModule } from 'primeng/toast';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './shared/header/header.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NewsfeedComponent } from './indexpage/newsfeed/newsfeed.component';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { ConfigService } from './welcomepage/config.service';
import { SettingsComponent } from './settings/settings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MessagesComponent } from './indexpage/messages/messages.component';
import { NotificationsComponent } from './indexpage/notifications/notifications.component';
import { ApiService } from './core/services/api.service';
import { AuthGuard } from './core/services/auth-guard.service';
import { JwtService } from './core/services/jwt.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FindfriendsComponent } from './indexpage/findfriends/findfriends.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    IndexpageComponent,
    NewsfeedComponent,
    SignupComponent,
    SettingsComponent,
    ChangepasswordComponent,
    NotificationsComponent,
    FindfriendsComponent,
    MessagesComponent,
    AboutusComponent,
    ContactusComponent,
    ForgotpasswordComponent,
    SetnewpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CropperModule,
    NgxPaginationModule,
    ToastModule
  ],
  providers: [
    ConfigService,
    ApiService,
    AuthGuard,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
