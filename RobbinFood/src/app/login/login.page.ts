import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inputValue: string; 
  loginForm: FormGroup;

  constructor(
    private navCtrl : NavController,
    
    
    ) 
    
    { 
      

    }

  ngOnInit() {
  }


  onSubmit(){
  //fazer validação
  };

  jogar(){

    //código de criação de cadastro Firebase
    console.log(this.inputValue);

    this.navCtrl.navigateForward('tabs/home')
    

  }

}
