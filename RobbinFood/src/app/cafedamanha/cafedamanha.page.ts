import { Component, OnInit } from '@angular/core';
import { FoodsService } from './../foods.service';
import { RegrasService } from './../regras.service';

@Component({
  selector: 'app-cafedamanha',
  templateUrl: './cafedamanha.page.html',
  styleUrls: ['./cafedamanha.page.scss'],
})
export class CafedamanhaPage implements OnInit {

  i = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_01.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayImages = this.food.arrayImagesCafe1;
  arrayTemp = [

    [
      { imgUrl: '../../assets/maca.png', name: 'maca', peso: 8},
      { imgUrl: '../../assets/pao.png', name: 'pao', peso: 3},
      { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 12},],

      [
        { imgUrl: '../../assets/refri.png', name: 'refri', peso: 8},
        { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', peso: 3},
        { imgUrl: '../../assets/queijo_pedaco.png', name: 'salgadinho', peso: 12},]

       

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
