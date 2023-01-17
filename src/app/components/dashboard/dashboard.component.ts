import { Todo } from './../../model/todo';
import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  //creating variable to hold value
  taskObj:Todo=new Todo();
  taskArr:Todo[]=[];

  addTaskData : string = '';
  editTaskData : string = '';

  constructor(private api:TaskService){}
  ngOnInit():void{
    this.addTaskData='';
    this.editTaskData='';
    this.taskObj=new Todo();
    this.taskArr = [];
    this.getAllTask();
  }

  //create task data
  addTask(){
    this.taskObj.task_name = this.addTaskData
    this.api.addTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
      this.addTaskData=''
    },err=>{
      alert(err);
    })
  }
  //get all task data
  getAllTask(){
    this.api.getAllTask().subscribe(res=>{
      this.taskArr=res;
    },err=>{
      alert('Unable to find');
    })
  }
  //edit task data
  editTask(){
    this.taskObj.task_name=this.editTaskData;
    this.api.editTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
      //this.editTaskData=''
    },err=>{
      alert('Unable to Edit Task');
    })
  }
  //delete Task Data
  deleteTask(task:Todo){
    this.api.deleteTask(task).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      alert('Cannot find the Task');
    })
  }
  //calling edit fn
  callEditFn(task:Todo){
    this.taskObj=task;
    this.editTaskData=task.task_name;
  }
}
