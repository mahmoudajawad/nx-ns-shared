import { Injectable } from '@angular/core';
import { Res, User, UserService } from '@nx-ns-shared/data';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { CallObj } from './models';

@Injectable()
export class HomeService {

  constructor(private userService: UserService) { }

  userInfo$(): Observable<CallObj<User>> {
    return this.userService.readUsersById('DOC_ID').pipe(
      startWith(undefined),
      map((res) => ({
        loading: (res) ? false : true,
        res: res,
      })),
      tap((res) => { console.log('Received:', res); }),
    );
  }
}