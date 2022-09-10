import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeSectionTwoComponent } from './home-section-two/home-section-two.component';
import { HomeSectionThreeComponent } from './home-section-three/home-section-three.component';
import { FooterComponent } from './footer/footer.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { appRoutingModule } from './app-routing-module';
import { BodyComponent } from './body/body.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
    FooterComponent,
    OtpVerificationComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
