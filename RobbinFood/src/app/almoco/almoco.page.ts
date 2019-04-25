import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almoco',
  templateUrl: './almoco.page.html',
  styleUrls: ['./almoco.page.scss'],
})
export class AlmocoPage implements OnInit {

  InputPontos;
  RobbinImage = '../../assets/robin_01.png';

  arrayImages = [
    { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3'},
  ];


  constructor() { }

  ngOnInit() {
  }

  refreshArray() { 
    this.arrayImages = [];
    this.arrayImages = [
      { imgUrl: '../../assets/Cenoura.png', name: 'Linguinha 1'},
      { imgUrl: '../../assets/coisa_verde.png', name: 'Linguinha 2'},
      { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3'},
    ]; 
  }

  escolheAlimento(){
    let pontos = 10;
    let valAtual =  8;
    if (pontos > valAtual){
      this.RobbinImage = '../../assets/robin_04_2.png';

    }
    
    this.refreshArray();

  }

}
