import { Component, OnInit } from '@angular/core';
import { FoodsService } from './../foods.service';
import { RegrasService } from './../regras.service';

@Component({
  selector: 'app-lanchetarde',
  templateUrl: './lanchetarde.page.html',
  styleUrls: ['./lanchetarde.page.scss'],
})
export class LanchetardePage implements OnInit {

  i = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_01.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayImages = this.food.arrayImagesLacnhe3;
  arrayTemp = [

    [
      { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
      { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', peso: 3},
      { imgUrl: '../../assets/hotdog.png', name: 'hotdog', peso: 12},],

      [
        { imgUrl: '../../assets/banana.png', name: 'banana', peso: 6},
        { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 4},
        { imgUrl: '../../assets/queijo_pedaco.png', name: 'queijo_pedaco', peso: 4},]

       

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