import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {BookListComponent} from './book-list.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  declarations: [BookListComponent],
  providers: []
})
export class BookListComponentModule {
}
