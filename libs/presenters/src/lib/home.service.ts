import { Injectable } from '@angular/core';
import { Res, User, UserService } from '@nx-ns-shared/data';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { CallObj } from './models';

@Injectable()
export class HomeService {

  private _user$!: Observable<CallObj<User>>;
  get user$(): Observable<CallObj<User>> {
    if (!this._user$) {
      this._user$ = this.userService.readUsersById('DOC_ID').pipe(
        startWith(undefined),
        map((res) => ({
          loading: (res) ? false : true,
          res: res,
        })),
        tap((res) => { console.log('Received:', res); }),
      )
    }

    return this._user$;
  }

  constructor(private userService: UserService) { }
}