import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {CheckState} from "../state/check.state";
import {Observable} from "rxjs";
import {CheckService} from "../service/check.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input()
  public firstCheck: boolean = false

  public secondCheck: boolean = false
  public thirdCheck: boolean = false

  private thirdCheck$: Observable<boolean>;

  constructor(
    private checkService: CheckService,
    private store: Store
  ) {
    this.thirdCheck$ = this.store.select(CheckState.getThirdCheck);
  }

  ngOnInit(): void {
    this.thirdCheck$.subscribe(res => this.thirdCheck = res);
  }

  public refresh(): void {
    this.secondCheck = this.checkService.getSecondParam();
  }

}
