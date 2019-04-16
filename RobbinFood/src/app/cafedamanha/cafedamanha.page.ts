import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafedamanha',
  templateUrl: './cafedamanha.page.html',
  styleUrls: ['./cafedamanha.page.scss'],
})
export class CafedamanhaPage implements OnInit {

  RobbinImage = '../../assets/robin_01.png';

  arrayImages = [
    { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
