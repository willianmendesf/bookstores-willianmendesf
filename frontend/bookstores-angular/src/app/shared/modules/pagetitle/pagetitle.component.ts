import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './pagetitle.component.html',
  styleUrl: './pagetitle.component.scss'
})
export class PageTitleComponent {
  @Input() title = "title";
 }
