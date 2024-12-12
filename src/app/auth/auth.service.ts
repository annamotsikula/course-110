import { Inject, Injectable } from '@angular/core';
import { api_url_token } from '../core/constants/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(api_url_token) private _url: string, private _http: HttpClient) { }

  authUser(username: string, pwd: string) {
    console.log('here')
    const body = {
      username,
      password: pwd,
      expiresInMins: 30
    }
    return this._http.post(`${this._url}/auth/login`, {...body})
  }

  
}
