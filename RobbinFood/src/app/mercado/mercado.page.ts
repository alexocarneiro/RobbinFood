import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.page.html',
  styleUrls: ['./mercado.page.scss'],
})
export class MercadoPage implements OnInit {

  arrayImages = [
    { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3'},
  ];

  constructor() {

    
      
    //observable do firebase para atualizar o badge em tempo real

   }

  ngOnInit() {
  }

 

  comprar(){
    //subtrair a cada clique -5 do valor que tem no firebase
    // atualizar o badge
    
  }



}
