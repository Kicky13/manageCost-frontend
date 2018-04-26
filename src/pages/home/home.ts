import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();
  user: FormGroup;
  ngOnInit() {

    this.user = new FormGroup({
    dari: new FormControl('', [Validators.required]),
    ke: new FormControl('', [Validators.required]),
    tanggal: new FormControl('', [Validators.required]),
    });
    
    }


  @ViewChild('origin') origin;
  @ViewChild('destination') destination;
  @ViewChild('date') date;

  ImageArray: any =[];
  constructor(public navCtrl: NavController) {
    this.ImageArray = [
      {'images':'https://ak8.picdn.net/shutterstock/videos/14582548/thumb/4.jpg?i10c=img.resize(height:160)'},
      {'images':'https://i.ytimg.com/vi/abyF0RraL18/maxresdefault.jpg'},
      {'images':'https://ak1.picdn.net/shutterstock/videos/18948281/thumb/8.jpg?i10c=img.resize(height:160)'}
      ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  
    
  findTravel(){
    this.navCtrl.push(ResultPage,{
      ori : this.origin.value,
      dest : this.destination.value,
      date : this.date.value
     })
     console.log(this.origin.value, this.destination.value , this.date.value);
  }

}
