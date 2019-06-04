import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  RobbinImage = '../../assets/robin_03.png'
  titleImage = '../../assets/logo_robin_food.png'

  constructor() { }

  ngOnInit() {
  }

}
