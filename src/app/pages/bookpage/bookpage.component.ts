import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../../books/book/book.component';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
