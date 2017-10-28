import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ToastService } from '../toast';

@Injectable()
export class ExceptionService {

  constructor(private _toastService: ToastService) { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
    let emsg = (res.statusText || 'unknown error');
    this._toastService.activate(`Error - Bad Response - ${emsg}`);

    return Observable.of();
  }
}
