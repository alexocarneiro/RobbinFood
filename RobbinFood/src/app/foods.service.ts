import { Food } from './../models/food.model';
import { Injectable } from '@angular/core';
import {  AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {


  foods: AngularFireList<Food[]>

  constructor(

    private af: AngularFireDatabase


  ) {

    this.foods = this.af.list('/Imgs') ;

   }
}
