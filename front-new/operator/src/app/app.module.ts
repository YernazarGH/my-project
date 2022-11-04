import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { MaterialExampleModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TariffFilterPipe } from './tariff-filter.pipe';
import { RegistrationComponent } from './registration/registration.component';
import {ContactsComponent} from "./contacts/contacts.component";
import { AllTariffComponent } from './all-tariff/all-tariff.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReviewsComponent,
    UserAccountComponent,
    TariffsComponent,
    TariffFilterPipe,
    RegistrationComponent,
    ContactsComponent,
    AllTariffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
