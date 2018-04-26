import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PerjalananProvider } from "../../providers/perjalanan/perjalanan";
import { AppProvider } from "../../providers/app/app";
import { WhatsappPage } from '../whatsapp/whatsapp';
import { BerpergianProvider } from '../../providers/berpergian/berpergian';
/**
 * Generated class for the DetailContact2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-contact2',
  templateUrl: 'detail-contact2.html',
})
export class DetailContact2Page implements OnInit {
  date: any;
  id: any;
  detail: any;
  time: any;
  imgUrl: string;
  waUrl: any;
  sub_dest: any;

user: FormGroup;
ngOnInit() {

  this.user = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
  phone: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  });

  }

@ViewChild('name') name;
@ViewChild('phone') phone;
@ViewChild('email') email;

constructor(public navCtrl: NavController, public navParams: NavParams, public app: AppProvider, public perjalananCtrl: PerjalananProvider, public berpergianCtrl: BerpergianProvider) {
  this.id = this.navParams.get('item');
  this.time = this.navParams.get('time');
  this.sub_dest = this.navParams.get('tujukota');
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
      this.time = this.navParams.get('time');
      this.sub_dest = this.navParams.get('tujukota');
      this.date = this.navParams.get('tanggal');
      console.log(this.navParams.get('tanggal'));
    }
  );
}


//Button ke WA//
insertUser(id: any) {
  let userData = {name: this.name.value, phone: this.phone.value, email: this.email.value, date: this.date, time: this.time, sub_dest: this.sub_dest };
  this.berpergianCtrl.insertTransaction(userData, id).then(
    data => {
      this.waUrl = data;
      console.log(this.waUrl);
      this.navCtrl.push(WhatsappPage, {
        waUrl: this.waUrl
      });
    }
  )
}
}
