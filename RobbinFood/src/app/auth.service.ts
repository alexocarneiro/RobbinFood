import { Injectable } from '@angular/core';
import { AngularFireAuth  } from "@angular/fire/auth";
import { auth} from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  constructor( public auth: AngularFireAuth ) {

      this.authState$ = this.auth.authState;

    }


    

    

}
