import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CreateUser } from './add-user/add-user.component';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import { UserService } from './services/userservice.service';
import { HttpModule } from '@angular/http';
import { CreateUserTask } from './add-user-task/add-user-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTaskService } from './services/user-taskservice';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchUserComponent,
    CreateUser,
    CreateUserTask,
    DashboardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-user', component: FetchUserComponent },
      { path: 'register-user', component: CreateUser },
      { path: 'user/edit/:id', component: CreateUser },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'register-user-task', component: CreateUserTask },
      { path: 'userTask/edit/:id', component: CreateUserTask },
    ])
  ],
  providers: [UserService, UserTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
