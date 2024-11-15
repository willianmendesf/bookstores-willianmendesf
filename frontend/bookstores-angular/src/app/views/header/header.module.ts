import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { BrandingBarComponent } from './branding-bar/branding-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserBarComponent } from './user-bar/user-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BrandingBarComponent,
    SearchBarComponent,
    UserBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }
