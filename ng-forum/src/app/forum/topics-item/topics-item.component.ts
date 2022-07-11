import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../topic";
import {ForumRepoService} from "../forum-repo.service";

@Component({
  selector: 'app-topics-item',
  templateUrl: './topics-item.component.html',
  styleUrls: ['./topics-item.component.scss']
})
export class TopicsItemComponent implements OnInit {

  @Input() item?:Topic

  constructor(private repo:ForumRepoService) { }

  ngOnInit(): void {

  }

  onLike(){
    this.repo.createVote(this.item!.id!, 'l').subscribe((e=> this.item!.likes +=1))
  }
  onDislike(){
    this.repo.createVote(this.item!.id!, 'l').subscribe((e=> this.item!.dislikes +=1))
  }

}
