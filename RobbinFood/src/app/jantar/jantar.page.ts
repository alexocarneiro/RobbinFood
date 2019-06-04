import { NavController } from '@ionic/angular';
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
  ptRodada = 0;
  InputPontos;
  RobbinImage = '../../assets/robin_03.png';
  titleImage = '../../assets/logo_robin_food.png'

  arrayTemp = [

    [
      { imgUrl: '../../assets/Cenoura.png', name: 'cenoura', peso: 3 },
      { imgUrl: '../../assets/pizza.png', name: 'pizza', peso: 12 },
      { imgUrl: '../../assets/carne.png', name: 'carne', peso: 3 },],

    [
      { imgUrl: '../../assets/peixe.png', name: 'pexie', peso: 3 },
      { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 3 },
      { imgUrl: '../../assets/hambuguer.png', name: 'hamburguer', peso: 12 },],

    [
      { imgUrl: '../../assets/batata.png', name: 'batata', peso: 12 },
      { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 3 },
      { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 3 },]

  ]

  arrayImages = this.arrayTemp[this.i]

  constructor(
    public food: FoodsService,
    public Regras: RegrasService,
    public navCtrl: NavController

  ) { }

  ngOnInit() {
  }

  btnContinuar() {
    if (this.Regras.ptAlimentacaoDia === 95) {
      this.Regras.todasRefeicoesCertas();
      this.navCtrl.navigateForward('tabs/home')
    }
    else if (this.Regras.ptAlimentacaoDia > 100) {
      this.Regras.todasRefeicoesErradas();
      this.navCtrl.navigateForward('tabs/home')
    }
    else
      this.navCtrl.navigateForward('tabs/home')
  }

  escolheAlimento(id) {
    this.i++;
    this.ptRodada += this.arrayImages[id].peso;
    console.log(this.ptRodada)
    this.Regras.ptAlimentacaoDia += this.ptRodada;
    this.arrayImages = this.arrayTemp[this.i];

    if (this.i === 3) {
      if (this.ptRodada <= 9)
        this.RobbinImage = '../../assets/robin_01.png';
      else
        this.RobbinImage = '../../assets/robin_04_2.png';

    }


  }

}
