import {ErrorHandler, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler extends ErrorHandler{

  override handleError(error: any) {

    console.log(error);

  }
}
