import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { ChatModule } from '../../shared/modules/chat/chat.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChatModule,
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
