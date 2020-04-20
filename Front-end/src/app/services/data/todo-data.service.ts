import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';
import { BasicAuthenticationService } from '../Basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http :HttpClient, private BasicAuthenticationService: BasicAuthenticationService) { }

    username =this.BasicAuthenticationService.getAuthenticatedUser();

  RetriveAllTodos(){
    
    return this.http.get<Todo[]>(`${API_URL}/users/${this.username}/projects`);
   }
   deleteTodo(username,id)
   {
     return this.http.delete(`${API_URL}/users/${username}/projects/${id}`)
   }
   retriveTodo(username,id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/projects/${id}`)

   }
    PutTodo(username,id,todo){
    return this.http.put(`${API_URL}/users/${username}/projects/${id}`,todo);
    }
    CreateTodo(username,todo){
      return this.http.post(`${API_URL}/users/${username}/projects/`,todo);
      }
   /*
   Updatetodos(username,id)
   {
     return this.http.put();
   }
   */
}
