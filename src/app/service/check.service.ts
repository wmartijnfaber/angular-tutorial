import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }

  private param: boolean = false;

  public getSecondParam() {
    return this.param;
  }

  public setSecondParam(value: boolean) {
    this.param = value;
  } 
}
