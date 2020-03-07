import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookpageComponent } from './bookpage/bookpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { BookviewComponent } from './bookview/bookview.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from '../books/book/book.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [BookpageComponent,ProfilepageComponent,BookviewComponent,HomeComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,    
    SharedModule,
    BookComponent
  ]
})
export class PagesModule { }
