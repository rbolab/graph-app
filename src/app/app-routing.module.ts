import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseListComponent} from './courses/course-list.component';
import {CourseComponent} from "./courses/course.component";
import {BookListComponent} from "./books/book-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CourseListComponent},
  {path: 'books', component: BookListComponent},
  {path: 'courses/:id', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

