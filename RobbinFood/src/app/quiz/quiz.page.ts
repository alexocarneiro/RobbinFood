import { FoodsService } from './../foods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  arrayImages = this.food.arrayImagesAlmoco1;
  titleImage = '../../assets/logo_robin_food.png'

  
  arrayTemp = [

    
      { imgUrl: '../../assets/batata.png', name: 'batata', peso: 3},
      { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 1},
      { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 4},
      { imgUrl: '../../assets/hambuguer.png', name: 'hamburguer', peso: 2}]

     
  

  constructor(

    public food: FoodsService

  ) {

    
   }

  ngOnInit() {
  }


  /*jogar = () => {
    var arr = []
    while(this.arrayTemp.length < 1) {
        var r = Math.floor(Math.random()*this.food.arrayImages.length) + 1;
        if(this.arrayTemp.indexOf(r) === -1) arr.push(r);
    }
    console.log("clicou");
}*/

/*jogar() {
  var arr = []
  while(this.arrayTemp.length < 4) {
      var r = Math.floor(Math.random()*this.food.arrayImagesAlmoco1.length) + 1;
      if(this.arrayTemp.indexOf(r) === -1) arr.push(r);
  }
}*/


}
