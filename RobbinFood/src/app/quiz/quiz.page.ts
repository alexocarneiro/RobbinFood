import { FoodsService } from './../foods.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegrasService } from '../regras.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  i = 0;
  ptRodada = 0;
  

  titleImage = '../../assets/logo_robin_food.png'



  arrayTemp = [

    [
      { imgUrl: '../../assets/batata.png', name: 'batata', peso: 7 },
      { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', peso: 3 },
      { imgUrl: '../../assets/Frango.png', name: 'frango', peso: 3 },
      { imgUrl: '../../assets/hambuguer.png', name: 'hamburguer', peso: 7 }],

    [
      { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', peso: 3 },
      { imgUrl: '../../assets/salgadinho.png', name: 'salgadinho', peso: 7 },
      { imgUrl: '../../assets/geleia.png', name: 'geleia', peso: 7 },
      { imgUrl: '../../assets/carne.png', name: 'carne', peso: 3 }],


    [

      { imgUrl: '../../assets/Cenoura.png', name: 'cenoura', peso: 3 },
      { imgUrl: '../../assets/banana.png', name: 'banana', peso: 3 },
      { imgUrl: '../../assets/salgadinhho_batata.png', name: 'salgadinho_batata', peso: 3 },
      { imgUrl: '../../assets/refri.png', name: 'refri', peso: 7 }],

    [

      { imgUrl: '../../assets/tomate.png', name: 'tomate', peso: 3 },
      { imgUrl: '../../assets/maca.png', name: 'maca', peso: 3 },
      { imgUrl: '../../assets/hotdog.png', name: 'hodog', peso: 7 },
      { imgUrl: '../../assets/queijo_pedaco.png', name: 'queijo_pedaco', peso: 3 }],

    [

      { imgUrl: '../../assets/queijo.png', name: 'queijo', peso: 3 },
      { imgUrl: '../../assets/pizza.png', name: 'pizza', peso: 7 },
      { imgUrl: '../../assets/leite.png', name: 'leite', peso: 3 },
      { imgUrl: '../../assets/peixe.png', name: 'peixe', peso: 3 }],

  ]

  arrayImages = this.arrayTemp[this.i]


  constructor(

    public food: FoodsService,
    public navCtrl: NavController,
    public regras: RegrasService

  ) {
    

  }

  ngOnInit() {
  }


  btnContinuar() {
    this.regras.addPontosQuiz(40);
    console.log(this.regras.ptGame);
    this.navCtrl.navigateForward('tabs/home')
  }

  escolheAlimento(id) {
    this.i++;
    this.ptRodada += this.arrayImages[id].peso;
    this.arrayImages = this.arrayTemp[this.i];



    if (this.i === 5){
        if (this.ptRodada <= 15)
          this.navCtrl.navigateForward('/result')
        else
          this.navCtrl.navigateForward('/result2')
      }


    }


  }



