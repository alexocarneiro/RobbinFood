import { FoodsService } from './../foods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  arrayTemp = [];
  

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

jogar() {
  var arr = []
  while(this.arrayTemp.length < 4) {
      var r = Math.floor(Math.random()*this.food.arrayImages.length) + 1;
      if(this.arrayTemp.indexOf(r) === -1) arr.push(r);
  }
}


}
