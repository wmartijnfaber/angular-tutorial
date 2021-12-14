import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }

  private param: boolean = false;

  public toggleSecondParam() {
    this.param = !this.param
  }

  public getSecondParam() {
    return this.param;
  }
}
