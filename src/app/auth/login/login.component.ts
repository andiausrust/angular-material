import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl(
                '', {validators: [Validators.email, Validators.required]}
            ),
            password: new FormControl(
                '', {
                    validators: [Validators.required, Validators.minLength(6)]
                })
        });
    }

    submitForm(): void {
        console.log(this.loginForm);
    }
}
