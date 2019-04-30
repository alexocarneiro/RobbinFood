import { Component, OnInit } from '@angular/core';
import { FoodsService } from './../foods.service';
import { RegrasService } from './../regras.service';

@Component({
  selector: 'app-lanchemanha',
  templateUrl: './lanchemanha.page.html',
  styleUrls: ['./lanchemanha.page.scss'],
})
export class LanchemanhaPage implements OnInit {

  i = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_01.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayImages = this.food.arrayImagesLanche1;
  arrayTemp = [

    [
      { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
      { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', peso: 3},
      { imgUrl: '../../assets/hotdog.png', name: 'hotdog', peso: 12},],

      [
        { imgUrl: '../../assets/maca.png', name: 'maca', peso: 8},
        { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 3},
        { imgUrl: '../../assets/banana.png', name: 'banana', peso: 12},]

       

  ]


  constructor(
      public food: FoodsService,
      public Regras: RegrasService

  ) { }

  ngOnInit() {
  }

 

  escolheAlimento(){
    this.arrayImages = this.arrayTemp[this.i];
    this.i ++;
    if(this.i === 3){
      this.RobbinImage = '../../assets/robin_04_2.png';
    }
  }
}