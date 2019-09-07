import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTaskService } from '../services/user-taskservice';

@Component({
    templateUrl: './add-user-task.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class CreateUserTask implements OnInit {
    userTaskForm: FormGroup;
    title = 'Create';
    userTaskId: number;
    errorMessage: any;
    userList: Array<any> = [];

    constructor(
        private _fb: FormBuilder,
        private _avRoute: ActivatedRoute,
        private _userTaskService: UserTaskService,
        private _router: Router
    ) {
        if (this._avRoute.snapshot.params['id']) {
            this.userTaskId = this._avRoute.snapshot.params['id'];
        }

        this.userTaskForm = this._fb.group({
            id: 0,
            taskName: ['', [Validators.required]],
            description: ['', [Validators.required]],
            startDate: ['', [Validators.required]],
            endDate: ['', [Validators.required]],
            assignedUserId: ['', [Validators.required]],
        });
    }

    ngOnInit() {

        this._userTaskService.getUserList().subscribe(
            data => this.userList = data
        );

        if (this.userTaskId > 0) {
            this.title = 'Edit';
            this._userTaskService.getUserTaskById(this.userTaskId)
                .subscribe(resp => this.userTaskForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {
        if (!this.userTaskForm.valid) {
            return;
        }

        if (this.title === 'Create') {
            this._userTaskService.saveUserTask(this.userTaskForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/dashboard']);
                }, error => this.errorMessage = error);
        } else if (this.title === 'Edit') {
            this._userTaskService.updateUserTask(this.userTaskForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/dashboard']);
                }, error => this.errorMessage = error);
        }
    }

    cancel() {
        this._router.navigate(['/dashboard']);
    }

    get taskName() { return this.userTaskForm.get('taskName'); }
    get description() { return this.userTaskForm.get('description'); }
    get startDate() { return this.userTaskForm.get('startDate'); }
    get endDate() { return this.userTaskForm.get('endDate'); }
    get assignedUserId() { return this.userTaskForm.get('assignedUserId'); }
}
