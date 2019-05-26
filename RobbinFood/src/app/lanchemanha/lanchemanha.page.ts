import { NavController } from '@ionic/angular';
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
  ptRodada = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_03.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayTemp = [

  [
    { imgUrl: '../../assets/banana.png', name: 'banana', peso: 3},
    { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 12},
    { imgUrl: '../../assets/queijo_pedaco.png', name: 'queijo_pedaco', peso: 6},],

  [
    { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 6},
    { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', peso: 3},
    { imgUrl: '../../assets/hotdog.png', name: 'hotdog', peso: 12},],

  [
    { imgUrl: '../../assets/maca.png', name: 'maca', peso: 3},
    { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 12},
    { imgUrl: '../../assets/banana.png', name: 'banana', peso: 3},]       

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
      if(this.ptRodada <=9)
        this.RobbinImage = '../../assets/robin_01.png';
        else 
        this.RobbinImage = '../../assets/robin_04_2.png';
            
    }
    
      
    }
    
}