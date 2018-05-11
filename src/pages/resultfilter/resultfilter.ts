import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { PemesananPage } from '../pemesanan/pemesanan';
import { FilterPage } from '../filter/filter';
import { PerjalananProvider } from "../../providers/perjalanan/perjalanan";
import { AppProvider } from "../../providers/app/app";
import { LoadingController } from 'ionic-angular';
import { CssSelector } from '@angular/compiler';
import { FilterProvider } from '../../providers/filter/filter';

/**
 * Generated class for the ResultfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultfilter',
  templateUrl: 'resultfilter.html',
})
export class ResultfilterPage {
  origin: any;
  destination: any;
  date: any;
  facility: any;
  car: any;
  results: any;
  price: any;
  imgUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public filterCtrl: FilterProvider, public app: AppProvider,public loadingCtrl: LoadingController) {
    this.origin = this.navParams.get('ori')
    this.destination = this.navParams.get('dest')
    this.facility = this.navParams.get('faci')
    this.date = this.navParams.get('date')
    this.car = this.navParams.get('car')
    this.price = this.navParams.get('prc')
  }

  ionViewDidLoad() {
    this.loadResult()
    console.log('ionViewDidLoad ResultfilterPage');
  }

  loadResult() { //Ini yang ke Providernya
    // this.filterCtrl.findTravel(this.origin, this.destination, this.facility, this.car, this.date)
    // .subscribe(
    //   data => {        
    //     this.results = data.data.services;
    //     this.imgUrl = this.app.imgUrl;
    //     console.log(this.results);           
    //   }
    // );
    console.log(this.origin, this.destination, this.facility, this.date, this.car, this.price )
  }

}
