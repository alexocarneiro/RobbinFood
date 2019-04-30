import { Food } from './../models/food.model';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FoodsService {

   arrayImagesAlmoco1 = [
    { imgUrl: '../../assets/Cenoura.png', name: 'cenoura', peso: 3},
    { imgUrl: '../../assets/pizza.png', name: 'pizza', peso: 4},
    { imgUrl: '../../assets/carne.png', name: 'carne', pese: 6},
   ]

    arrayImagesAlmoco2 = [
    { imgUrl: '../../assets/batata.png', name: 'batata', peso: 3},
    { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 1},
    { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 4},]

    arrayImagesAlmoco3 = [
    { imgUrl: '../../assets/peixe.png', name: 'pexie', peso: 7},
    { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 4},
    { imgUrl: '../../assets/hambuguer.png', name: 'hamburguer', peso: 2},]

    arrayImagesLanche1 = [
    { imgUrl: '../../assets/banana.png', name: 'banana', peso: 6},
    { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 4},
    { imgUrl: '../../assets/queijo_pedaco.png', name: 'queijo_pedaco', peso: 4},]

    arrayImagesLacnhe2 = [
    { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
    { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', peso: 3},
    { imgUrl: '../../assets/.png', name: 'salgadinho', peso: 12},]

    arrayImagesLacnhe3 = [
      { imgUrl: '../../assets/maca.png', name: 'maca', peso: 8},
      { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 3},
      { imgUrl: '../../assets/banana.png', name: 'banana', peso: 12},]

    arrayImagesCafe1 = [
      { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
      { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 3},
      { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 12},]

    arrayImagesCafe2 = [
        { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
        { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 3},
        { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 12},]

      arrayImagesCafe3 = [
        { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 8},
        { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 3},
        { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 12},]
    

  
 

  constructor(



  ) {

    
    
    

   }

  

}


