import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.page.html',
  styleUrls: ['./mercado.page.scss'],
})
export class MercadoPage implements OnInit {

  inputBadge
  contBadge = 40;

  arrayImages1 = [
    { imgUrl: '../../assets/queijo.png', name: 'queijo', },
    { imgUrl: '../../assets/queijo_pedaco.png', name: 'queijo_pedaco', dinheiro: 3},
    { imgUrl: '../../assets/leite.png', name: 'leite', dinheiro: 3},
  ];

  arrayImages2 = [
    { imgUrl: '../../assets/maca.png', name: 'maca', dinheiro: 3},
    { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', dinheiro: 3},
    { imgUrl: '../../assets/banana.png', name: 'banana', dinheiro: 3},
  ];

  arrayImages3 = [
    { imgUrl: '../../assets/Cenoura.png', name: 'Cenoura',dinheiro: 3},
    { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', dinheiro: 3},
    { imgUrl: '../../assets/tomate.png', name: 'tomate', dinheiro: 3},
  ];

  constructor(
    public Navctrl: NavController

  ) {

    
      
    //observable do firebase para atualizar o badge em tempo real

   }

  ngOnInit() {
  }

  btnContinuar(){
    this.Navctrl.navigateForward('/tabs/home')
  }

  comprar(){
    this.contBadge -=1;
    console.log(this.contBadge);
    
  }



}
