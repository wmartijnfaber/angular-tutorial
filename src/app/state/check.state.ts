import { Injectable } from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';


/// ACTION
export class UpdateCheck {
  static readonly type = '[Module] Fill';
  constructor(public  payload: CheckStateModel) {
  }
}


export interface CheckStateModel {
  firstCheck: boolean,
  secondCheck: boolean,
  thirdCheck: boolean,
}

@State<CheckStateModel>({
  name: 'modules',
  defaults: {
      firstCheck: false,
      secondCheck: false,
      thirdCheck: false,
  }
})
@Injectable()
export class CheckState {

  @Selector()
  static getThirdCheck(state: CheckStateModel): boolean {
    return state.thirdCheck;
  }

  @Action(UpdateCheck)
  fillList(ctx: StateContext<CheckStateModel>, action: any) {
    ctx.patchState({
      firstCheck: action.payload.firstCheck,
      secondCheck: action.payload.secondCheck,
      thirdCheck: action.payload.thirdCheck
    })
  }


}
