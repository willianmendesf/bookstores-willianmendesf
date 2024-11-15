import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageTitleModule } from './shared/modules/pagetitle/pagetitle.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    PageTitleModule,
],
  exports: [ ]
})
export class AppModule { }
