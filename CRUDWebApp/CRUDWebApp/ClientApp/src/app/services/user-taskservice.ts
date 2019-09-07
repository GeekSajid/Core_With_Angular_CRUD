import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserTaskService {
    myAppUrl = '';

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getUserList() {
        return this._http.get(this.myAppUrl + 'api/UserTask/GetUserList')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    getUserTasks() {
        return this._http.get(this.myAppUrl + 'api/UserTask/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getUserTaskById(id: number) {
        return this._http.get(this.myAppUrl + 'api/UserTask/Details/' + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveUserTask(userTask) {
        return this._http.post(this.myAppUrl + 'api/UserTask/Create', userTask)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateUserTask(userTask) {
        return this._http.put(this.myAppUrl + 'api/UserTask/Edit', userTask)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteUserTask(id) {
        return this._http.delete(this.myAppUrl + 'api/UserTask/Delete/' + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
