import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CheckService} from "../service/check.service";
import {Store} from "@ngxs/store";
import {CheckState, UpdateCheck} from "../state/check.state";

@Component({
  selector: 'app-thumbs-up',
  templateUrl: './thumbs-up.component.html',
  styleUrls: ['./thumbs-up.component.scss']
})
export class ThumbsUpComponent implements OnInit {

  constructor(
    private checkService: CheckService,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  thumbsUpClick(): void {
    // Set check 1
    this.notifyParent.emit('Thumps up clicked.');

    // Set check 2
    this.checkService.setSecondParam(true);

    // Set check 3
    this.store.dispatch(new UpdateCheck({ firstCheck: true, secondCheck: true, thirdCheck: true }));
  }
}
