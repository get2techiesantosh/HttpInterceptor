import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, finalize } from 'rxjs/operators';


@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const hardcodedToken = '123-123-123-123';
        const reqWithAuth = req.clone({
            setHeaders:{
                Authorization : `Bearer ${hardcodedToken}`
            }
        });

        return next.handle(reqWithAuth)
        .pipe(

            //Retry on failure
            retry(2),

            //Handle Error
            catchError((error: HttpErrorResponse)=>{
                alert(`Http Error: ${req.url}`);
                return throwError(error);
            }),

            //Profiling
            finalize(() =>{
                const profilingMsg = `${req.method} ${req.urlWithParams} `;
                console.log(profilingMsg);
            })

        );
        
        
    }

}