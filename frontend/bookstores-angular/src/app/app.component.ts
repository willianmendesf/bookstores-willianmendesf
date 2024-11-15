import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyModule } from "./views/body/body.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [BodyModule]
})

export class AppComponent {
  title = 'bookstores-angular';
}
