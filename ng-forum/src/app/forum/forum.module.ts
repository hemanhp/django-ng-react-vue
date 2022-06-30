import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsPageComponent } from './topics-page/topics-page.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicsItemComponent } from './topics-item/topics-item.component';
import { TopicsForumComponent } from './topics-forum/topics-forum.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    TopicsPageComponent,
    TopicsListComponent,
    TopicsItemComponent,
    TopicsForumComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class ForumModule { }
