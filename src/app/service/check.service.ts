import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService
{
  constructor() { }

  private firstParam: boolean = false;
  private secondParam: boolean = false;
  private thirdParam: boolean = false;

  public getFirstParam(): boolean
  {
    return this.firstParam;
  }

  public setFirstParam(param: boolean): void
  {
    this.firstParam = param;
  }

  public getSecondParam(): boolean
  {
    return this.secondParam;
  }

  public setSecondParam(param: boolean): void
  {
    this.secondParam = param;
  }

  public getThirdParam(): boolean
  {
    return this.thirdParam;
  }

  public setThirdParam(param: boolean): void
  {
    this.thirdParam = param;
  }
}
