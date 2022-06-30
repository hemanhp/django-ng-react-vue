import { Component, OnInit } from '@angular/core';
import {Topic} from "../topic";
import {ForumRepoService} from "../forum-repo.service";

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss']
})
export class TopicsPageComponent implements OnInit {

  topics:Topic[] = []

  constructor(private repo:ForumRepoService) { }

  ngOnInit(): void {
    this.repo.getAllTopics().subscribe((e) => {this.topics = e;});
  }

}
