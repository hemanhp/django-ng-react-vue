import { Component, OnInit } from '@angular/core';
import {ForumRepoService} from "../forum-repo.service";
import {Topic} from "../topic";

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss']
})
export class TopicsPageComponent implements OnInit {

  topics:Topic[] = []

  constructor(private repo:ForumRepoService) { }

  ngOnInit(): void {
    this.repo.getAllTopic().subscribe(e=>this.topics = e)
  }


  onTopicCreate(topic:Topic){
    this.repo.createTopic(topic).subscribe((e=> this.topics = [e].concat(this.topics)));
  }


}
