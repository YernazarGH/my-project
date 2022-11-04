import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ContactsComponent }  from './contacts/contacts.component';
import { AllTariffComponent } from './all-tariff/all-tariff.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'tariffs', component: TariffsComponent },
  { path: 'user-account', component: UserAccountComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'all-tariff', component: AllTariffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
