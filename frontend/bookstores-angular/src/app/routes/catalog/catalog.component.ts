import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/service/apiservice.service';
import { environment } from '../../../env/environment';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  private books : [] = [];

  constructor(
    private api : ApiService
  ) {}

  ngOnInit() {
    // this.getAllBooks()
  }

  private getAllBooks() {
    this.api.get('/api/bookstore').subscribe({
      next: response => {
        this.books = response;
        console.log(response)
      },
      error: error => console.error(error),
      complete: () => console.log("Request complete!")
    })
  }

}
