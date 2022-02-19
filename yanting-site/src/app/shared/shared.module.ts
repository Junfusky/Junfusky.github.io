import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RecentPostsComponent } from './../components/recent-posts/recent-posts.component';
import { ContactComponent } from './../components/contact/contact.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PageNotFoundComponent, ContactComponent, RecentPostsComponent],
  imports: [CommonModule, MatCardModule, MatPaginatorModule],
  exports: [
    MatCardModule,
    PageNotFoundComponent,
    ContactComponent,
    RecentPostsComponent,
    MatPaginatorModule,
  ],
})
export class SharedModule {}
