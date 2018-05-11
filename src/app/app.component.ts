import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { BerpergianPage } from '../pages/berpergian/berpergian';
import { CaraKerjaPage } from '../pages/cara-kerja/cara-kerja';
import { DetailPage } from '../pages/detail/detail';
import { DetailContactPage } from '../pages/detail-contact/detail-contact';
import { FilterPage } from '../pages/filter/filter';
import { HomePage } from '../pages/home/home';
import { HubungiKamiPage } from '../pages/hubungi-kami/hubungi-kami';
import { IntroPage } from '../pages/intro/intro';
import { KebijakanPrivasiPage } from '../pages/kebijakan-privasi/kebijakan-privasi';
import { PemesananPage } from '../pages/pemesanan/pemesanan';
import { ResultPage } from '../pages/result/result';
import { ResultfilterPage } from '../pages/resultfilter/resultfilter';
import { SiapaKamiPage } from '../pages/siapa-kami/siapa-kami';
import { TravelPartnerPage } from '../pages/travel-partner/travel-partner';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mulai Perjalanan', component: HomePage }, 
      { title: 'Berpergian', component: BerpergianPage },
      { title: 'Cara Kerja', component: CaraKerjaPage },
      { title: 'Travel Partner', component: TravelPartnerPage }, 
      { title: 'Siapa Kami', component: SiapaKamiPage }, 
      { title: 'Hubungi Kami', component: HubungiKamiPage },
      { title: 'Kebijakan Privasi', component: KebijakanPrivasiPage },      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
