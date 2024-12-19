import {HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authToken = localStorage.getItem("Authorization");
        if (authToken) {
            const modifiedReq = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${authToken}`
                }
            })
            return next.handle(modifiedReq)
        }
        return next.handle(req)
    }
}