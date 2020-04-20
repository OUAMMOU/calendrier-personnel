import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../services/Basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   
  id:number
  todo :Todo

  constructor(private todoservice :TodoDataService,
    private route : ActivatedRoute,private router: Router ,private BasicAuthenticationService:BasicAuthenticationService)
    { }
   username=this.BasicAuthenticationService.getAuthenticatedUser();

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.todo=new Todo(this.username,this.id,'',false,new Date(),new Date());
    if(this.id!=-1){
    this.todoservice.retriveTodo(this.username,this.id).subscribe(
      Response=>
      {
        console.log("retrive todo");
        this.todo=Response;
      }
    )
  }
}
 savetodo(){
  // console.log("avant")
  //  if(this.todo.targetDte === this.todo.startedDate)
  //  {
    
  //    this.todo.done=true;
  //    console.log("apes")
  //  }
   if(this.id==-1)
   {
     this.todoservice.CreateTodo(this.username,this.todo).subscribe(
       Response=>{
         console.log(Response);
         console.log("ana hna")
         this.router.navigate(['todos']);
       }
     )
 }
 else{
   this.todoservice.PutTodo(this.username,this.id,this.todo).subscribe(
     data=>{console.log(data)
     this.router.navigate(['todos']);}
   )
 }
}

}
