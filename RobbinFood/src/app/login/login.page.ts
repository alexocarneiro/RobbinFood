import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inputValue; 
  loginForm: FormGroup;

  constructor(
    private navCtrl : NavController,
    public UsersService: UsersService
    ) 
    
    { 
      

    }

  ngOnInit() {
  }
   
  jogar(){

    //código de criação de cadastro Firebase
    this.UsersService.create(this.inputValue);
    this.navCtrl.navigateForward('tabs/home')
    

  }

}
