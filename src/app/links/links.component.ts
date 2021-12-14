import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { CheckService } from '../service/check.service';
import { CheckState, UpdateCheck } from '../state/check.state';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private checkService: CheckService, private store: Store) { }

  ngOnInit(): void {
  }

  @Output() toggleCheck1: EventEmitter<any> = new EventEmitter()
  public triggerToggleCheck1Event(): void {
      this.toggleCheck1.emit();
  }

  public triggerToggleCheck2Event(): void {
      this.checkService.toggleSecondParam();
  }

  public triggerToggleCheck3Event(): void {
      this.store.dispatch(new UpdateCheck({
        firstCheck: false,
        secondCheck: false,
        thirdCheck: !this.store.selectSnapshot(CheckState.getThirdCheck)
      }))
  }
}
