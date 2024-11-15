import { Component } from '@angular/core';
import { PageTitleModule } from "../../shared/modules/pagetitle/pagetitle.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTitleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
