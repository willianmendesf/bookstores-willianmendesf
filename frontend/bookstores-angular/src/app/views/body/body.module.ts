import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './body.component';
import { HeaderModule } from '../header/header.module';
import { MainModule } from '../main/main.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    HeaderModule,
    MainModule,
    FooterModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule { }
