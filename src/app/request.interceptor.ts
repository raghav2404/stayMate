import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Example: Modify the request to add an Authorization header
   /* const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your dynamic token logic
        'Content-Type': 'application/json',
      },
    }); */

    //console.log('Intercepted request:', modifiedReq);


   // console.log(req)
     if(req.method == 'POST') {
       const newRequest = req.clone({
         headers: new HttpHeaders({token: '1124242424jwt'}),
       });

       // Pass the modified request to the next handler

       console.log(newRequest);
       return next.handle(newRequest);
     }
     return next.handle(req);

  }
}
