import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pemesanan2Page } from '../pemesanan2/pemesanan2';
import { FilterPage } from '../filter/filter';
import { BerpergianProvider } from "../../providers/berpergian/berpergian";
import { AppProvider } from "../../providers/app/app";
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the Result2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result2',
  templateUrl: 'result2.html',
})
export class Result2Page {
  origin: any;
  destination: any;
  passenger: any;  
  facility: any;   
  tujuankota: any;
  date: any;
  time:any;
  results: any;
  imgUrl: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public BerpergianCtrl: BerpergianProvider, public app: AppProvider, public loadingCtrl : LoadingController) {
    this.origin = this.navParams.get('ori')
    this.destination = this.navParams.get('dest')
    this.passenger = this.navParams.get('passe')
    this.facility = this.navParams.get('faci')     
    this.tujuankota = this.navParams.get('tujukota')    
    this.date = this.navParams.get('date')
    this.time = this.navParams.get('time')
  }

  ionViewDidLoad() {
    this.loadResult();
    console.log('ionViewDidLoad Result2Page');
  }

  loadResult() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots'
      
    });
  
    loading.present();

    this.BerpergianCtrl.findTravel(this.origin, this.destination, this.passenger, this.facility ).subscribe(
      data => {
        this.results = data.data.services;
        this.imgUrl = this.app.imgUrl;
        console.log(data.data.services);
        loading.dismiss(); 
      }
    );
  }

  itemTapped(id: any) {
    console.log(id);
    this.navCtrl.push(Pemesanan2Page, {
      item: id,
      tujukota: this.tujuankota,
      time: this.time,
      tanggal: this.date.day + '/' + this.date.month + '/' + this.date.year
    });
  }
  openModal(){
    this.navCtrl.push(FilterPage);
  }

}
