import { FoodsService } from './../foods.service';
import { RegrasService } from './../regras.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-almoco',
  templateUrl: './almoco.page.html',
  styleUrls: ['./almoco.page.scss'],
})
export class AlmocoPage implements OnInit {
  i = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_01.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayImages = this.food.arrayImagesAlmoco1;
  arrayTemp = [

    [
      { imgUrl: '../../assets/batata.png', name: 'batata', peso: 3},
      { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 1},
      { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 4},],

      [
        { imgUrl: '../../assets/peixe.png', name: 'pexie', peso: 7},
        { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 4},
        { imgUrl: '../../assets/hambuguer.png', name: 'hamburguer', peso: 2},]

       

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
    
    
   

    /*let pontos = 10;
    let valAtual =  8;
    if (pontos > valAtual){
      this.RobbinImage = '../../assets/robin_04_2.png';
    
    
    }*/
    
   

  }


