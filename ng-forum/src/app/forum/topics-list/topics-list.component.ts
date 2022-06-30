import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../topic";

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  @Input() items:Topic[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
