import { Component } from '@angular/core';
import { HomeService } from '@nx-ns-shared/presenters';
import { setStatusBarColor } from '../../../utils';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  user$ = this.service.user$;

  constructor(private service: HomeService) { }

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9');
  }
}
