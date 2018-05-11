import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { PerjalananProvider } from "../../providers/perjalanan/perjalanan";
import { AppProvider } from "../../providers/app/app";
import { FilterProvider } from '../../providers/filter/filter';
import { ResultfilterPage } from '../resultfilter/resultfilter';


/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();
  
  structure: any = { lower: 0, upper: 135000 };
  originn : any;
  destinationn: any;
  detail: any;
  imgUrl: string;
  results: any;
  tanggalan: any;

    @ViewChild('origin') origin;
    @ViewChild('destination') destination;
    @ViewChild('facility') facility; 
    @ViewChild('date') date;
    @ViewChild('car') car; 
    @ViewChild('price') price;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: AppProvider, public filterCtrl: FilterProvider) {
    this.originn = this.navParams.get('origin')
    this.destinationn = this.navParams.get('destination')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
    this.originn = this.navParams.get('origin')
    this.destinationn = this.navParams.get('destination')
  }

  



  linkbutton(){
    this.navCtrl.push(ResultfilterPage,{
      ori : this.origin.value,
      dest : this.destination.value,
      faci : this.facility.value, 
      date : this.date.value,  
      car : this.car.value,
      prc : this.price.value
         });
  }

}
