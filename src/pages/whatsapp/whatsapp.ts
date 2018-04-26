import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the WhatsappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whatsapp',
  templateUrl: 'whatsapp.html',
})
export class WhatsappPage {

  url : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.url = navParams.get('waUrl');
    console.log(this.url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatsappPage');
  }



}
