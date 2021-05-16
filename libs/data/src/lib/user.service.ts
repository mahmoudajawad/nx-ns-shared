import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataDriver, Res, User } from './models';

@Injectable()
export class UserService {
  constructor(@Inject('DataDriver') private driver: DataDriver) { }

  readAllUsers(): Observable<Res<User>> {
      return this.driver.call<User>({
          endpoint: 'user/read',
          query: [],
          doc: {},
      });
  }

  readUsersById(_id: string): Observable<Res<User>> {
    return this.driver.call<User>({
        endpoint: 'user/read',
        query: [{_id: _id}],
        doc: {},
    });
  }

  searchUserByName(term: string): Observable<Res<User>> {
      return this.driver.call<User>({
          endpoint: 'user/search',
          query: [{term: term}],
          doc: {},
      });
  }

}