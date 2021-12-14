import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {CheckState} from "./state/check.state";
import {CheckService} from "./service/check.service";
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([CheckState], {
      developmentMode: !environment.production
    })
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
