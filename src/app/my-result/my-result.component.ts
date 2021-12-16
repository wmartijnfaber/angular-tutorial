import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Store } from "@ngxs/store";
import { CheckState, UpdateCheckStates } from "../state/check.state";
import { Observable } from "rxjs";
import { CheckService } from "../service/check.service";

@Component(
{
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.scss']
})
export class MyResultComponent implements OnInit
{
  @Input()
  public firstCheck: boolean = false
  public secondCheck: boolean = false
  public thirdCheck: boolean = false

  @Output()
  public firstCheckEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  private thirdCheck$: Observable<boolean>;

  constructor(
    private checkService: CheckService,
    private store: Store)
  {
    this.thirdCheck$ = this.store.select(CheckState.getThirdCheck);
  }

  ngOnInit(): void
  {
    this.firstCheckEvent.subscribe(eventarg =>
    {
      this.firstCheck = eventarg
    });

    this.thirdCheck$.subscribe(eventarg =>
    {
      this.thirdCheck = eventarg
    });
  }

  public toggleFirstCheck(): void
  {
    this.firstCheckEvent.emit(!this.firstCheck);
  }

  public toggleSecondCheck(): void
  {
    this.checkService.setSecondParam(!this.secondCheck);
    this.secondCheck = this.checkService.getSecondParam();
  }

  public toggleThirdCheck(): void
  {
    this.store.dispatch(new UpdateCheckStates(
    {
      firstCheck: this.firstCheck,
      secondCheck: this.secondCheck,
      thirdCheck: !this.thirdCheck
    }));
  }
}
