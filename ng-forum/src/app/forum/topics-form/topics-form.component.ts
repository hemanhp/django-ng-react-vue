import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Topic} from "../topic";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.scss']
})
export class TopicsFormComponent implements OnInit {

  @Output() itemCreated = new EventEmitter<Topic>()

  topicForm = new FormGroup({
      title:new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required])
    }
  )

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.topicForm.valid){
      this.itemCreated.emit(this.topicForm.value as Topic);
      this.topicForm.reset();
    }else{
      alert('error')
    }
  }
}
