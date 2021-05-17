import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@nx-ns-shared/data';
import { Observable } from 'rxjs';
import { HomeService } from 'shared/facades/home.service';
import { CallObj } from 'shared/facades/models';

@Component({
//   changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-home-container',
  templateUrl: 'home.container.html',
  providers: [HomeService],
})

export class HomePageContainer implements OnInit {
  userInfo$!: Observable<CallObj<User>>

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.reloadUserInfo();
  }

  reloadUserInfo(): void {
      this.userInfo$ = this.service.userInfo$();
  }
}