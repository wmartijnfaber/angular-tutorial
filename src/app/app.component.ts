import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial';

  firstCheck = false;

  onToggleCheck1(_: any) {
    this.firstCheck = !this.firstCheck;
  }
}
