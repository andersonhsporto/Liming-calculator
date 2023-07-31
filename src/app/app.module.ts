import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './layout/nav/navbar/navbar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import { CalculatorComponent } from './layout/nav/calculator/calculator.component';
import { CalcInputComponent } from './shared/component/calc-input/calc-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    CalcInputComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
