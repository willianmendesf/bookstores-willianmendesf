import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyModule } from "./views/body/body.module";
import { BodyComponent } from './views/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BodyModule,
],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
