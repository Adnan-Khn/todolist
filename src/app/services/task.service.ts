import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl !: string;
  constructor(private http:HttpClient) {
    this.baseUrl='http://localhost:3000/task'
   }
   //adding task 
   addTask(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.baseUrl,todo);
   }
   //get task
   getAllTask():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl)
   }
   //delete task
   deleteTask(todo:Todo):Observable<Todo>{
    return this.http.delete<Todo>(this.baseUrl+'/'+todo.id)
   }
   //edit task
   editTask(todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(this.baseUrl+'/'+todo.id,todo)
   }
}
