import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsPageComponent } from './topics-page/topics-page.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicsItemComponent } from './topics-item/topics-item.component';
import { TopicsFormComponent } from './topics-form/topics-form.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TopicsPageComponent,
    TopicsListComponent,
    TopicsItemComponent,
    TopicsFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ForumModule { }
