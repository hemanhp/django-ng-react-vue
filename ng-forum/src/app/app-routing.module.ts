import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicsPageComponent} from "./forum/topics-page/topics-page.component";

const routes: Routes = [
  {path:'', component:TopicsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
