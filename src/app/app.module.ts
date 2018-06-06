import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms' 

import { AppComponent } from './app.component';
import { FundTransferComponent } from '../fund-transfer/fundtransfer';
import { GameReviewComponent } from '../game-review/gamereview'

@NgModule({
  declarations: [
    AppComponent,
    FundTransferComponent,
    GameReviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
