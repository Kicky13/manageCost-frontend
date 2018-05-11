import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { WhatsappPage } from '../pages/whatsapp/whatsapp';
import { BerpergianPage } from '../pages/berpergian/berpergian';
import { CaraKerjaPage } from '../pages/cara-kerja/cara-kerja';
import { DetailPage } from '../pages/detail/detail';
import { DetailContactPage } from '../pages/detail-contact/detail-contact';
import { DetailContact2Page } from '../pages/detail-contact2/detail-contact2';
import { FilterPage } from '../pages/filter/filter';
import { HomePage } from '../pages/home/home';
import { HubungiKamiPage } from '../pages/hubungi-kami/hubungi-kami';
import { IntroPage } from '../pages/intro/intro';
import { KebijakanPrivasiPage } from '../pages/kebijakan-privasi/kebijakan-privasi';
import { PemesananPage } from '../pages/pemesanan/pemesanan';
import { Pemesanan2Page } from '../pages/pemesanan2/pemesanan2';
import { ResultPage } from '../pages/result/result';
import { Result2Page } from '../pages/result2/result2';
import { ResultfilterPage } from '../pages/resultfilter/resultfilter';
import { SiapaKamiPage } from '../pages/siapa-kami/siapa-kami';
import { TravelPartnerPage } from '../pages/travel-partner/travel-partner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppProvider } from '../providers/app/app';
import { TravelPartnerProvider } from '../providers/travel-partner/travel-partner';
import { PerjalananProvider } from '../providers/perjalanan/perjalanan';
import { BerpergianProvider } from '../providers/berpergian/berpergian';
import { FilterProvider } from '../providers/filter/filter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WhatsappPage,
    BerpergianPage,
    CaraKerjaPage,
    DetailPage,
    DetailContactPage,
    DetailContact2Page,
    FilterPage,
    HubungiKamiPage,
    IntroPage,
    KebijakanPrivasiPage,
    PemesananPage,
    Pemesanan2Page,
    ResultPage,
    Result2Page,   
    ResultfilterPage, 
    SiapaKamiPage,
    TravelPartnerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WhatsappPage,
    BerpergianPage,
    CaraKerjaPage,
    DetailPage,
    DetailContactPage,
    DetailContact2Page,
    FilterPage,
    HubungiKamiPage,
    IntroPage,
    KebijakanPrivasiPage,
    PemesananPage,
    Pemesanan2Page,
    ResultPage,
    Result2Page,    
    ResultfilterPage, 
    SiapaKamiPage,
    TravelPartnerPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppProvider,
    TravelPartnerProvider,
    PerjalananProvider,
    BerpergianProvider,
    FilterProvider
  ]
})
export class AppModule {}
