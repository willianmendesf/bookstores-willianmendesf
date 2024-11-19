import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageTitleModule } from './shared/modules/pagetitle/pagetitle.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ApiService } from './shared/service/apiservice.service';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    PageTitleModule,
],
  providers: [
],
  exports: [ ]
})
export class AppModule { }
