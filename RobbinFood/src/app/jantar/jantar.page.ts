import { Component, OnInit } from '@angular/core';
import { FoodsService } from './../foods.service';
import { RegrasService } from './../regras.service';



@Component({
  selector: 'app-jantar',
  templateUrl: './jantar.page.html',
  styleUrls: ['./jantar.page.scss'],
})
export class JantarPage implements OnInit {

  i = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_01.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayImages = this.food.arrayImagesAlmoco3;
  arrayTemp = [

    [
      { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
      { imgUrl: '../../assets/carne.png', name: 'abacaxi', peso: 3},
      { imgUrl: '../../assets/hotdog.png', name: 'hotdog', peso: 12},],

      [
        { imgUrl: '../../assets/batata.png', name: 'batata', peso: 3},
        { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 1},
        { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 4},]

       

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
