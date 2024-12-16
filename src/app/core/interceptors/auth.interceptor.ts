import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, filter, map, Observable, of, tap, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authToken = localStorage.getItem("Authorization");
        if (authToken) {
            console.log(authToken)
            const modifiedReq = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${authToken}`
                }
            })
            return next.handle(modifiedReq).pipe(
                catchError((err: HttpErrorResponse) => {
                    const errorModel = {
                        errorType: 'INTERNAL_ERROR',
                        message: (err.error as { status?: string; message: string}).message
                    };
                    // change error response type and return 

                    // const errorReq = new HttpResponse({
                    //     body: errorModel,
                    //     status: 200
                    // });
                    // return throwError(() => errorModel.message)
                    throw errorModel
                })
            )
        }
        return next.handle(req)
    }
}