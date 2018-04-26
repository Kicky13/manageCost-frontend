import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PemesananPage } from '../pemesanan/pemesanan';
import { FilterPage } from '../filter/filter';
import { PerjalananProvider } from "../../providers/perjalanan/perjalanan";
import { AppProvider } from "../../providers/app/app";

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  origin: any;
  destination: any;
  date: any;
  results: any;
  imgUrl: string;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public perjalananCtrl: PerjalananProvider, public app: AppProvider) {
    this.origin = this.navParams.get('ori')
    this.destination = this.navParams.get('dest')
    this.date = this.navParams.get('date')
  }

  ionViewDidLoad() {
    this.loadResult();
    console.log('ionViewDidLoad ResultPage');
  }

  loadResult() {
    this.perjalananCtrl.findTravel(this.origin, this.destination)
    .subscribe(
      data => {
        this.results = data.data.services;
        this.imgUrl = this.app.imgUrl;
        console.log(this.results);               
      }
    );
    
  }
  
  itemTapped(id: any) {
    console.log(id);
    this.navCtrl.push(PemesananPage, {
      item: id,
      tanggal: this.date.day + '/' + this.date.month + '/' + this.date.year
    });
  }
  openModal(){
    this.navCtrl.push(FilterPage);
  }
}
