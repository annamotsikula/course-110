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

  constructor(@Inject(api_url_token) private _url: string, private _http: HttpClient) { }

  authUser(username: string, pwd: string): Observable<User> {
    const body = {
      username,
      password: pwd,
      expiresInMins: 30
    }
    return this._http.post<AuthUser>(`${this._url}/auth/login`, {...body}).pipe(
      tap((result) => {
        console.log(result)
        localStorage.setItem(authToken, result.accessToken || "")
      }),
      catchError((res) => {
         console.log(res)
        return of(res)
      }),
      map(({accessToken, refreshToken, ...rest}) => ({...rest}))
    )
  }

  
}
