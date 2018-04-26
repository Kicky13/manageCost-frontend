import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsappPage } from './whatsapp';

@NgModule({
  declarations: [
    WhatsappPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsappPage),
  ],
})
export class WhatsappPageModule {}
