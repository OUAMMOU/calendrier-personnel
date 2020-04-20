import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public username: string,
    public id: number,
    public description: string,
    public done: boolean,
    public  startedDate: Date,
    public targetDte: Date
  )
  {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos: Todo[]
  message: string;
  
  // todos=[
  //   new Todo(1,'leanr Angular',false,new Date()),
  //   new Todo(2,'expeert',false,new Date()),
  //   new Todo(3,'leane$r',false,new Date())
  // ]
  // todo={
  //   id : 1,
  //   description : 'leanr Angular'
  // }

  constructor(private router :Router
    ,private todoservice: TodoDataService) { }

  ngOnInit(): void {
  this.refreshThodos();

    }
    refreshThodos(){
      this.todoservice.RetriveAllTodos().subscribe(
        response=>{
          console.log("c'est la le prbléme");
        console.log(response);
        this.todos=response;
        }
      );
    }
    deleteTodo(id){
      this.todoservice.deleteTodo("OUAMMOU-mohamed",id).subscribe(
        Response=>{console.log(Response);
        this.message=`Delelt of todo ${id} Successfuly`;
      this.refreshThodos();  
      }
          
      ); 
  }
  UpdateTodo(id){
    //console.log(`Update ${id}`)
    this.router.navigate(['todo/',id])
  }
  AddTodo(){
    this.router.navigate(['todo',-1])

  }


}
