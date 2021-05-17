import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  private _userInfoToggle: boolean = false;
  get userInfoToggle(): boolean {
    return this._userInfoToggle;
  }

  constructor() { }
 
  showUserInfo(): void {
    this._userInfoToggle = true;
  }
}