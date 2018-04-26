import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailContactPage } from '../detail-contact/detail-contact';
import { PerjalananProvider } from "../../providers/perjalanan/perjalanan";
import { AppProvider } from "../../providers/app/app";

/**
 * Generated class for the PemesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pemesanan',
  templateUrl: 'pemesanan.html',

})
export class PemesananPage {
    pet : any;
    id: any;
    detail: any;
    imgUrl: string;
    date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: AppProvider, public perjalananCtrl: PerjalananProvider) {
    this.pet = "pemesanan";
    this.id = this.navParams.get('item');    
    this.date = this.navParams.get('tanggal');
  }

  ionViewDidLoad() {
    console.log(this.id);
    this.loadDetail();
  }

  loadDetail() {
    this.perjalananCtrl.detailService(this.id).subscribe(
      data => {
        this.detail = data.data.detail;
        this.imgUrl = this.app.imgUrl;
        this.date = this.navParams.get('tanggal');
        console.log(this.navParams.get('tanggal'));
      }
    );
  }

  
  linkbutton(id: any) {
    console.log(id);
    this.navCtrl.push(DetailContactPage, {
      item: id,
      tanggal: this.date
    });
  }
}
