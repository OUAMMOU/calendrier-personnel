import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomComponent } from './welcom/welcom.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './services/router-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasixAuthService } from './services/Http/http-intercepter-basix-auth.service';
const appRoutes:Routes = [
  {path: 'login',component: LoginComponent},
  {path: '',component: LoginComponent},
  {path: 'welcome',component: WelcomComponent,canActivate:[RouterGuardService]},
  {path: 'welcom/:name',component: WelcomComponent,canActivate:[RouterGuardService]},
  {path:'todos' , component : ListTodosComponent,canActivate:[RouterGuardService]},
  {path:'logout' , component : LogoutComponent,canActivate:[RouterGuardService]},
  {path:'todo/:id' , component : TodoComponent,canActivate:[RouterGuardService]},
  {path:'**' , component : ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    WelcomComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasixAuthService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
