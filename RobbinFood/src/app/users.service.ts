import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private af: AngularFireDatabase

  ) { }

    create(user: User) {

      return this.af.database.ref('/users')
      .push(user);

    }


}
