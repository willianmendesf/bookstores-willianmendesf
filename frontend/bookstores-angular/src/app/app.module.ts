import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageTitleModule } from './shared/modules/pagetitle/pagetitle.module';
import { HttpClientModule } from '@angular/common/http';


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
