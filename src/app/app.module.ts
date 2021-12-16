import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { MyResultComponent } from './my-result/my-result.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {CheckState} from "./state/check.state";
import {CheckService} from "./service/check.service";

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    MyResultComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([CheckState], {
      developmentMode: !environment.production
    })
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
