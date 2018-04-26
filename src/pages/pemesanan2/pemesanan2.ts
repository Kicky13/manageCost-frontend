import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailContact2Page } from '../detail-contact2/detail-contact2';
import { PerjalananProvider } from "../../providers/perjalanan/perjalanan";
import { AppProvider } from "../../providers/app/app";

/**
 * Generated class for the Pemesanan2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pemesanan2',
  templateUrl: 'pemesanan2.html',
})
export class Pemesanan2Page {
  pet : any;
  id: any;
  detail: any;
  tujukota: any;
  imgUrl: string;
  time: any;
  date: any;

constructor(public navCtrl: NavController, public navParams: NavParams, public app: AppProvider, public perjalananCtrl: PerjalananProvider) {
  this.pet = "pemesanan";
  this.id = this.navParams.get('item');
  this.tujukota = this.navParams.get('tujukota');
  this.date = this.navParams.get('tanggal');
  this.time = this.navParams.get('time');
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
      this.tujukota = this.navParams.get('tujukota');
      this.date = this.navParams.get('tanggal');
      console.log(this.navParams.get('tanggal'));
    }
  );
}


linkbutton(id: any) {
  console.log(id);
  this.navCtrl.push(DetailContact2Page, {
    item: id,
    tujukota: this.tujukota,
    time: this.time.hour + '.' + this.time.minute,
    tanggal: this.date
  });
}
}
