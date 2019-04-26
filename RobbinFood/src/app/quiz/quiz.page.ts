import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  arrayTemp = [];
  arrayImages = [
    { imgUrl: '../../assets/abacaxi.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/banana.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/carne.png', name: 'Linguinha 3'},
    { imgUrl: '../../assets/Cenoura.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/coisa_verde.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/Frango.png', name: 'Linguinha 3'},
    { imgUrl: '../../assets/geleia.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/leite.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/maca.png', name: 'Linguinha 3'},
    { imgUrl: '../../assets/pao.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/queijo_pedaco.png', name: 'Linguinha 3'},
    { imgUrl: '../../assets/queijo.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/tomate.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3'},

  ];

  constructor() { }

  ngOnInit() {
  }


  jogar = () => {
    var arr = []
    while(this.arrayTemp.length < 8) {
        var r = Math.floor(Math.random()*this.arrayImages.length) + 1;
        if(this.arrayTemp.indexOf(r) === -1) arr.push(r);
    }
}


}
