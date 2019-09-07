import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/userservice.service';
import { FetchUserComponent } from '../fetch-user/fetch-user.component';

@Component({
    templateUrl: './add-user.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class CreateUser implements OnInit {
    userForm: FormGroup;
    title = 'Create';
    userId: number;
    errorMessage: any;

    constructor(
        private _fb: FormBuilder,
        private _avRoute: ActivatedRoute,
        private _userService: UserService,
        private _router: Router
    ) {
        if (this._avRoute.snapshot.params['id']) {
            this.userId = this._avRoute.snapshot.params['id'];
        }

        this.userForm = this._fb.group({
            id: 0,
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            address: ['', [Validators.required]],
            mobile: ['', [Validators.required]],
            password: ['', [Validators.required]],
            retypePassword: ['', [Validators.required]]
        });
    }

    ngOnInit() {

        if (this.userId > 0) {
            this.title = 'Edit';
            this._userService.getUserById(this.userId)
                .subscribe(resp => this.userForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {
        if (!this.userForm.valid) {
            return;
        }

        if (this.title === 'Create') {
            this._userService.saveUser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-user']);
                }, error => this.errorMessage = error);
        } else if (this.title === 'Edit') {
            this._userService.updateUser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-user']);
                }, error => this.errorMessage = error);
        }
    }

    cancel() {
        this._router.navigate(['/fetch-user']);
    }

    get firstName() { return this.userForm.get('firstName'); }
    get lastName() { return this.userForm.get('lastName'); }
    get email() { return this.userForm.get('email'); }
    get address() { return this.userForm.get('address'); }
    get mobile() { return this.userForm.get('mobile'); }
    get password() { return this.userForm.get('password'); }
    get retypePassword() { return this.userForm.get('retypePassword'); }
}
