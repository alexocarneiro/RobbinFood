import { FoodsService } from './../foods.service';
import { RegrasService } from './../regras.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-almoco',
  templateUrl: './almoco.page.html',
  styleUrls: ['./almoco.page.scss'],
})
export class AlmocoPage implements OnInit {

  InputPontos;
  RobbinImage = '../../assets/robin_01.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayImages = this.food.arrayImagesAlmoco2;


  constructor(
      public food: FoodsService,
      public Regras: RegrasService

  ) { }

  ngOnInit() {
  }

 

  escolheAlimento(){
    let pontos = 10;
    let valAtual =  8;
    if (pontos > valAtual){
      this.RobbinImage = '../../assets/robin_04_2.png';
    
    
    

    }
    
   

  }

}
