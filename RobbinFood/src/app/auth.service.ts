import { Injectable } from '@angular/core';
import { AngularFireAuth  } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { User} from '../models/user.model'




@Injectable({
  providedIn: 'root'
})
export class AuthService {

 authState$: Observable<firebase.User>;

  constructor( public auth: AngularFireAuth ) { 

      this.authState$ = this.auth.authState;

    }

    createLogin({ email, password}): Promise<auth.UserCredential> {
      return this.auth.auth
        .createUserWithEmailAndPassword(email, password) // o método é esse
        
  }
  }


    

    


