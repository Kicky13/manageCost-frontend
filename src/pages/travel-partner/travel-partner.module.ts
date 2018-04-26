import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelPartnerPage } from './travel-partner';

@NgModule({
  declarations: [
    TravelPartnerPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelPartnerPage),
  ],
})
export class TravelPartnerPageModule {}
