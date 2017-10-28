import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CourseListComponent} from './courses/course-list.component';
import {FilterTextComponent} from './blocks/filter-text/filter-text.component';
import {ToastComponent} from './blocks/toast/toast.component';
import {SpinnerComponent} from './blocks/spinner/spinner.component';
import {ModalComponent} from './blocks/modal/modal.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FilterService} from './blocks/filter-text/filter-text.service';
import {ToastService} from './blocks/toast/toast.service';
import {SpinnerService} from './blocks/spinner/spinner.service';
import {ModalService} from './blocks/modal/modal.service';
import {ExceptionService} from './blocks/exception.service/exception.service';
import {InMemoryCourseService} from './api/in-memory-course.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {CourseService} from './courses/course.service';
import {HttpClientModule} from '@angular/common/http';
import {CourseComponent} from './courses/course.component';
import {BookListComponentModule} from './books/book.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterTextComponent,
    ToastComponent,
    SpinnerComponent,
    ModalComponent,
    CourseListComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCourseService, { delay: 500 }),
    AppRoutingModule,
    BookListComponentModule
  ],
  providers: [
    FilterService,
    ToastService,
    SpinnerService,
    ModalService,
    ExceptionService,
    CourseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
