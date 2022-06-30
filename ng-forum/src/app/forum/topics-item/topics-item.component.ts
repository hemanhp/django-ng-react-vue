import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../topic";

@Component({
  selector: 'app-topics-item',
  templateUrl: './topics-item.component.html',
  styleUrls: ['./topics-item.component.scss']
})
export class TopicsItemComponent implements OnInit {

  @Input() item?:Topic;

  constructor() { }

  ngOnInit(): void {
  }

}
