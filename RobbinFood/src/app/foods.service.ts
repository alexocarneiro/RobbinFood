import { Food } from './../models/food.model';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FoodsService {

   arrayImages = [
    { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', peso: 3},
    { imgUrl: '../../assets/banana.png', name: 'banana', peso: 4},
    { imgUrl: '../../assets/carne.png', name: 'carne', pese: 6},
    { imgUrl: '../../assets/Cenoura.png', name: 'cenoura', peso: 3},
    { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 1},
    { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 4},
    { imgUrl: '../../assets/geleia.png', name: 'geleia', peso: 7},
    { imgUrl: '../../assets/leite.png', name: 'leite', peso: 4},
    { imgUrl: '../../assets/maca.png', name: 'maca', peso: 2},
    { imgUrl: '../../assets/pao.png', name: 'pao', peso: 6},
    { imgUrl: '../../assets/peixe.png', name: 'peixe', peso: 4},
    { imgUrl: '../../assets/queijo_pedaco.png', name: 'queijo_pedaco', peso: 4},
    { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
    { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 3},
    { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 12},
    

  ];
 

  constructor(



  ) {

    
    
    

   }

  

}


