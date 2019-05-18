import { NavController } from '@ionic/angular';
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
  ptRodada = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_03.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayTemp = [

    [
      { imgUrl: '../../assets/Cenoura.png', name: 'cenoura', peso: 3},
      { imgUrl: '../../assets/pizza.png', name: 'pizza', peso: 12},
      { imgUrl: '../../assets/carne.png', name: 'carne', peso: 6},],

    [
      { imgUrl: '../../assets/peixe.png', name: 'pexie', peso: 6},
      { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 3},
      { imgUrl: '../../assets/hambuguer.png', name: 'hamburguer', peso: 12},],

    [
      { imgUrl: '../../assets/batata.png', name: 'batata', peso: 12},
      { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 3},
      { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 6},]       

  ]

  arrayImages = this.arrayTemp[this.i]

  constructor(
      public food: FoodsService,
      public Regras: RegrasService,
      public navCtrl: NavController

  ) { }

  ngOnInit() {
  }

  btnContinuar(){
    this.navCtrl.navigateForward('tabs/home')
  }

  escolheAlimento(id){
    this.i ++;
    this.ptRodada += this.arrayImages[id].peso;
    console.log( this.ptRodada)
    this.arrayImages = this.arrayTemp[this.i];
    
    if(this.i === 3){
      if(this.ptRodada <=18)
        this.RobbinImage = '../../assets/robin_01.png';
        else 
        this.RobbinImage = '../../assets/robin_04_2.png';
            
    }
    
      
    }
    
    
   

    /*let pontos = 10;
    let valAtual =  8;
    if (pontos > valAtual){
      this.RobbinImage = '../../assets/robin_04_2.png';
    
    
    }*/
    
   

  }


