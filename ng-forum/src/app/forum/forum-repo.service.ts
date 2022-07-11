import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "./topic";

@Injectable({
  providedIn: 'root'
})
export class ForumRepoService {

  constructor(private client:HttpClient) { }

  getAllTopic():Observable<Topic[]>{
    return this.client.get<Topic[]>('http://127.0.0.1:8000/forum/topics/')
  }

  createTopic(topic:Topic):Observable<any>{
    return this.client.post<any>('http://127.0.0.1:8000/forum/topics/', topic)
  }

  createVote(topic:number, vote:string):Observable<any>{
    return this.client.post<any>('http://127.0.0.1:8000/forum/votes/', {topic, vote})
  }

}
