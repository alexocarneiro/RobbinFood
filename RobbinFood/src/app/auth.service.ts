import { Injectable } from '@angular/core';
import { AngularFireAuth  } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { User} from '../models/user.model'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

 authState$: Observable<firebase.User>;

  constructor( public afAuth: AngularFireAuth ) { 

      this.authState$ = this.afAuth.authState;
      

    }

    get isAuthenticated(): Observable<boolean> {
      return this.authState$.pipe(map(user => user !== null));
    }
  
    
    logout(): Promise<void> {
      return this.afAuth.auth.signOut();
    }
  
  
    createLogin({ email, password}): Promise<auth.UserCredential> {
      return this.afAuth.auth
        .createUserWithEmailAndPassword(email, password) 
        
  }
  }


    

    


