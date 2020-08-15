import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get userIsAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }
  private _userIsAuthenticated = false;

  constructor() { }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
