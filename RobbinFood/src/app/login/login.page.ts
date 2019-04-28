import { AuthService } from './../auth.service';
import { UsersService } from './../users.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/models/user.model';
import { FormGroup, Validators, FormBuilder} from "@angular/forms";




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {
  inputValue;
  inputEmailValue
  inputSenhaValue
  RobbinImage = '../../assets/robin_01.png'
  loginForm: FormGroup;
 
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    private navCtrl : NavController,
    public UsersService: UsersService
    ) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
 
      this.loginForm = formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });

      }

  ngOnInit() {
  }
   
 /* jogar(){

    let users  = new User(this.inputValue,this.inputEmailValue,this.inputSenhaValue,'1','100','0');
    
     this.authService.createLogin({
      email: users.email,
      password: users.password
    }).then(() => {

      this.UsersService.create(users);
      this.navCtrl.navigateForward('tabs/home')

    });

  }*/

}
