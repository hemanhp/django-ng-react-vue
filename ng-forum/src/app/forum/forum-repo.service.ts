import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Topic} from "./topic";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForumRepoService {

  constructor(private client:HttpClient) { }

  getAllTopics():Observable<Topic[]>{
    return this.client.get<Topic[]>('http://127.0.0.1:8000/forum/topics/')
  }
}
