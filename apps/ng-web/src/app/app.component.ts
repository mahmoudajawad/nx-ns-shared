import { Component } from '@angular/core';
import { HomeService } from 'libs/presenters/src/lib/home.service';

@Component({
  selector: 'nx-ns-shared-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-web';
  user$ = this.service.user$;

  constructor(private service: HomeService) { }
}
