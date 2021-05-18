import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@nx-ns-shared/data';
import { Observable } from 'rxjs';
import { HomeService } from 'shared/presenters';
import { CallObj } from 'shared/facades';

@Component({
  moduleId: module.id,
  selector: 'page-home-component',
  templateUrl: 'home.component.html',
  providers: [HomeService],
})

export class HomePageComponent implements OnInit {
  @Input() userInfo$!: Observable<CallObj<User>>;
  @Output('reloadUserInfo') _reloadUserInfo: EventEmitter<null> = new EventEmitter();

  get userInfoToggle(): boolean {
    return this.service.userInfoToggle;
  }

  constructor(private service: HomeService) { }

  ngOnInit() { }

  showUserInfo(): void {
    this.service.showUserInfo();
  }

  reloadUserInfo(): void {
    this._reloadUserInfo.next();
  }
}