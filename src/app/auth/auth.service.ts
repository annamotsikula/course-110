import { Inject, Injectable } from '@angular/core';
import { api_url_token } from '../core/constants/constants';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthUser, User } from '../core/interfaces/auth.interface';

const authToken = "Authorization"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false

  constructor(@Inject(api_url_token) private _url: string, private _http: HttpClient) { }

  authUser(data: {username: string, pwd: string, saveLogInInfo?: boolean}): Observable<User> {
    const body = {
      username: data.username,
      password: data.pwd,
      expiresInMins: 30,
    }
    return this._http.post<AuthUser>(`${this._url}/auth/login`, {...body}).pipe(
      tap((result) => {
        localStorage.setItem(authToken, result.accessToken || "");
        this._isAuthorized = true;

        if(data.saveLogInInfo) {
          localStorage.setItem("rememberUser", String(data.saveLogInInfo))
        }
      }),
      map(({accessToken, refreshToken, ...rest}) => ({...rest}))
    )
  }

    isUserAuthorized() {
      const hasToken = !!localStorage.getItem('Authorization')
      console.log(hasToken) 
      return this._isAuthorized || hasToken
    }





  
}
