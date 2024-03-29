﻿import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/userservice.service';

@Component({
    templateUrl: './fetch-user.component.html'
})

export class FetchUserComponent {
    public userList: UserData[];

    constructor(
        public http: Http,
        private _router: Router,
        private _userService: UserService
    ) {
        this.getUsers();
    }

    getUsers() {
        this._userService.getUsers().subscribe(
            data => this.userList = data
        );
    }

    delete(userId) {
        const ans = confirm('Do you want to delete user with Id: ' + userId);
        if (ans) {
            this._userService.deleteUser(userId).subscribe((data) => {
                this.getUsers();
            }, error => console.error(error));
        }
    }
}

interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    mobile: string;

}
