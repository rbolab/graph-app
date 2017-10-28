import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lyxor-book-list-component',
  templateUrl: 'book-list.component.html'
})

export class BookListComponent implements OnInit {
  nbBooks: number;
  books: string[] = ['book1', 'book2', 'book3'];
  constructor() {
  }

  ngOnInit() {
    this.nbBooks = this.books.length;
  }
}
