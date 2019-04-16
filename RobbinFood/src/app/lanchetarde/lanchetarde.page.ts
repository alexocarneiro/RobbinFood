import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanchetarde',
  templateUrl: './lanchetarde.page.html',
  styleUrls: ['./lanchetarde.page.scss'],
})
export class LanchetardePage implements OnInit {

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
