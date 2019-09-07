import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTaskService } from '../services/user-taskservice';

@Component({
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
    public userTaskList: UserTaskData[];

    constructor(
        public http: Http,
        private _router: Router,
        private _userTaskService: UserTaskService
    ) {
        this.getUserTasks();
    }

    getUserTasks() {
        this._userTaskService.getUserTasks().subscribe(
            data => this.userTaskList = data
        );
    }

    delete(userTaskId) {
        const ans = confirm('Do you want to delete Task with Id: ' + userTaskId);
        if (ans) {
            this._userTaskService.deleteUserTask(userTaskId).subscribe((data) => {
                this.getUserTasks();
            }, error => console.error(error));
        }
    }
}

interface UserTaskData {
    id: number;
    taskName: string;
    description: string;
    startDate: Date;
    endDate: Date;
    assignedUserId: string;

}
