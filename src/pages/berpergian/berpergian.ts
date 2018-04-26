import { Component, ViewChild} from '@angular/core';
import {  IonicPage, NavController, NavParams } from 'ionic-angular';
import { Result2Page } from '../result2/result2';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';

/**
 * Generated class for the BerpergianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berpergian',
  templateUrl: 'berpergian.html',
})
export class BerpergianPage implements OnInit{
  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();
  costumers: FormGroup;
  ngOnInit() {

    this.costumers = new FormGroup({
    bdari: new FormControl('', [Validators.required]),
    bke: new FormControl('', [Validators.required]),
    bfal: new FormControl('', [Validators.required]),
    bpenumpang: new FormControl('', [Validators.required]),
    bkota: new FormControl('', [Validators.required]),
    btanggal: new FormControl('', [Validators.required]),
    bjam: new FormControl('', [Validators.required]),   
    });
    
    }
    @ViewChild('origin') origin;
    @ViewChild('destination') destination;
    @ViewChild('passenger') passenger;
    @ViewChild('facility') facility;  
    @ViewChild('tujuankota') tujukota;
    @ViewChild('date') date;
    @ViewChild('time') time;    

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerpergiankuPage');
  }

  
    
  findTravel(){
    this.navCtrl.push(Result2Page,{
      ori : this.origin.value,
      dest : this.destination.value,
      passe : this.passenger.value,
      faci : this.facility.value,      
      tujukota : this.tujukota.value,
      date : this.date.value,
      time : this.time.value  
     })
     console.log(this.origin.value, this.destination.value , this.passenger.value , this.facility.value , this.tujukota.value , this.date.value , this.time.value);
  }

  
}
