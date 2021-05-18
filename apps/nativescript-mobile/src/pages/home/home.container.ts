import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@nx-ns-shared/data';
import { HomeService, CallObj } from 'shared/facades';
import { setStatusBarColor } from '../../utils';

@Component({
  moduleId: module.id,
  selector: 'page-home-container',
  templateUrl: './home.container.html',
  providers: [HomeService],
})
export class HomePageContainer {
  userInfo$!: Observable<CallObj<User>>

  constructor(private service: HomeService) { }

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9');
    this.reloadUserInfo();
  }

  reloadUserInfo(): void {
      this.userInfo$ = this.service.userInfo$();
  }
}
